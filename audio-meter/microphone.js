/* eslint-disable */
/**
 * Create global accessible variables that will be modified later
 */

var audioContext = null;
var meter = null;
var rafID = null;
var mediaStreamSource = null;

var body = document.body;
var button = document.querySelector("button");
var colors = [
  "red",
  "salmon",
  "tomato",
  "blue",
  "green",
  "maroon",
  "dodgerblue"
];

/**
 * This function is executed repeatedly
 */
function checkMicLevel() {
  // check if we're currently clipping

  console.log("OUR VOLUME IS");
  console.log(micvolume);


  // set up the next callback

  // check the mic level after X milliseconds
  window.setTimeout(checkMicLevel, 1000);
}

var micvolume = 0;

navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(function(stream) {
    console.log("this message should only happen once");

    checkMicLevel();

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();

    analyser = audioContext.createAnalyser();
    microphone = audioContext.createMediaStreamSource(stream);
    javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);
    javascriptNode.onaudioprocess = function() {
      var array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      var values = 0;

      var length = array.length;
      for (var i = 0; i < length; i++) {
        values += array[i];
      }

      var average = values / length;

      micvolume = Math.round(average);
      //console.log(Math.round(average));
      //document.getElementById("volumelog").innerHTML = Math.round(average);
      // colorPids(average);
    };
  })
  .catch(function(err) {
    alert(err);
    /* handle the error */
  });

