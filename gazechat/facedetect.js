var initialized = false;

function rawInitFaceDetection(callback) {
	/*
		(0) check whether we're already running face detection
	*/
	if(initialized)
		return; // if yes, then do not initialize everything again
	/*
		(1) prepare the pico.js face detector
	*/
	var update_memory = pico.instantiate_detection_memory(5); // we will use the detecions of the last 5 frames
	var facefinder_classify_region = function(r, c, s, pixels, ldim) {return -1.0;};
	var cascadeurl = 'facefinder';
	fetch(cascadeurl).then(function(response) {
		response.arrayBuffer().then(function(buffer) {
			var bytes = new Int8Array(buffer);
			facefinder_classify_region = pico.unpack_cascade(bytes);
			console.log('* cascade loaded');
		})
	})
	/*
		(2) get the drawing context on the canvas and define a function to transform an RGBA image to grayscale
	*/
	var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
	function rgba_to_grayscale(rgba, nrows, ncols) {
		var gray = new Uint8Array(nrows*ncols);
		for(var r=0; r<nrows; ++r)
			for(var c=0; c<ncols; ++c)
				// gray = 0.2*red + 0.7*green + 0.1*blue
				gray[r*ncols + c] = (2*rgba[r*4*ncols+4*c+0]+7*rgba[r*4*ncols+4*c+1]+1*rgba[r*4*ncols+4*c+2])/10;
		return gray;
	}
	/*
		(3) this function is called each time a video frame becomes available
	*/
	var processfn = function(video, dt) {
		// render the video frame to the canvas element and extract RGBA pixel data
		ctx.drawImage(video, 0, 0);
		var rgba = ctx.getImageData(0, 0, 640, 480).data;
		// prepare input to `run_cascade`
		image = {
			"pixels": rgba_to_grayscale(rgba, 480, 640),
			"nrows": 480,
			"ncols": 640,
			"ldim": 640
		}
		params = {
			"shiftfactor": 0.1, // move the detection window by 10% of its size
			"minsize": 100,     // minimum size of a face
			"maxsize": 1000,    // maximum size of a face
			"scalefactor": 1.1  // for multiscale processing: resize the detection window by 10% when moving to the higher scale
		}
		// run the cascade over the frame and cluster the obtained detections
		// dets is an array that contains (r, c, s, q) quadruplets
		// (representing row, column, scale and detection score)
		dets = pico.run_cascade(image, facefinder_classify_region, params);
		dets = update_memory(dets);
		dets = pico.cluster_detections(dets, 0.2); // set IoU threshold to 0.2
		// draw detections
		for(i=0; i<dets.length; ++i)
			// check the detection score
			// if it's above the threshold, draw it
			// (the constant 50.0 is empirical: other cascades might require a different one)
			if(dets[i][3]>50.0)
			{
				ctx.beginPath();
				ctx.arc(dets[i][1], dets[i][0], dets[i][2]/2, 0, 2*Math.PI, false);
        callback({
          detected: true,
//          rawx: dets[i][1],
//          rawy: dets[i][0],
//          rawsize: dets[i][2],
          x: dets[i][1] / 640,
          y: dets[i][0] / 480,
          size: dets[i][2]  / 480,
        });
				ctx.lineWidth = 5;
				ctx.strokeStyle = '#44F';
				ctx.stroke();
			}
	}
	/*
		(4) instantiate camera handling (see https://github.com/cbrandolino/camvas)
	*/
	var mycamvas = new camvas(ctx, processfn);
	/*
		(5) it seems that everything went well
	*/
	initialized = true;

}


function initFaceDetection_onlyOnData(opts) {
  var callback = opts.callback;
  var interval = opts.interval;
  var timer;
  rawInitFaceDetection(function(data) {
    // this function acts really fast
    if(!timer) {
      timer = setTimeout(function loop() { 
        callback(data); 
        timer = null;
      }, interval)
    }
  });
}

function initFaceDetection(opts) {
  var callback = opts.callback;
  var interval = opts.interval;
  var thisdata; 
  var thistimestamp = Date.now();
  var lasttimestamp = Date.now();
  rawInitFaceDetection(function(data) {
    // this function acts really fast
    thisdata = data;
    thistimestamp = Date.now();
  });

  setInterval(function() {
    if(thistimestamp != lasttimestamp) {
      // we see a face!
      lasttimestamp = thistimestamp;
      callback(thisdata);
    } else {
      // face is not seen
      callback({ detected: false })
    }
  }, 500);
}