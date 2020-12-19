//air piano
var shareddatabase = firebase.database();

var database_refname = "camera-motion-denise-dev"
var database_refname = "camera-motion-chat"


const modelParams = {
  flipHorizontal: true,   // flip e.g for video 
  imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
  maxNumBoxes: 1,        // maximum number of boxes to detect
  iouThreshold: 0.5,      // ioU threshold for non-max suppression
  scoreThreshold: 0.89,    // confidence threshold for predictions.
}

handTrack.load(modelParams).then(model => {

});

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

//select  from html

const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
let model;

handTrack.startVideo(video)
  .then(status => {
  if(status){
    navigator.getUserMedia({ video: {} }, stream => {
      video.srcObject = stream;
      setInterval(runDetection, 60);
    },
    err => console.log(err)
    );
  }
});


function runDetection(){
  model.detect(video)
    .then(predictions => {
      if(predictions.length !==0){
          let hand1 = predictions[0].bbox;
          let x = hand1[0];
          let y = hand1[1];
          console.log(x, y);
         
       if (y>220){
          if(x<200){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2FpianoC.mp3?v=1607789223709';
          }else if (x> 400){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2FpianoD.mp3?v=1607789248847';
          }else if(x>300){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2FpianoE.mp3?v=1607789260651';
          }else if (x>200){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2FpianoF.mp3?v=1607789266378';
          }
        }
        
        if (y>20 && y<220){
          if(x<200){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2Fnote%205.mp3?v=1608415702265';
          }else if (x> 400){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2Fnote%206.mp3?v=1608415702265';
          }else if(x>300){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2Fnote%207.mp3?v=1608415702346';
          }else if (x>200){
            audio.src = 'https://cdn.glitch.com/4183f6ae-75bb-4373-84cc-030d2d019f7b%2Fnote%208.mp3?v=1608415702432';
          }
        }
        //audio.play();
        
        var data = {
          timestamp: Date.now(),
          audio_source: audio.src,
        };
        shareddatabase.ref(database_refname).push(data);
        
        
      }
  });
}

handTrack.load(modelParams)
  .then(lmodel => {
    model = lmodel;
});



shareddatabase.ref(database_refname)
  .orderByChild("timestamp")
  .limitToLast(1)
  .on("value", function(snapshot) {
    var data = snapshot.val();
    // this runs everytime the database changes  
  
    
    for(var d in data) {
      
      
      if(Date.now() - data[d]["timestamp"] < 300) {
        
        console.log(data[d]["audio_source"])  
        audio.src = data[d]["audio_source"];
        audio.play();
        
      }
      
    }
  
  });
