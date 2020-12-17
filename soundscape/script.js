/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


var database_refname = "audiochat-taylor-dev"



$(document).ready(function() {







  /**
 * Create global accessible variables that will be modified later
 */

var audioContext = null;
var meter = null;
var rafID = null;
var mediaStreamSource = null;

var body = document.body;
var volfactor = .75;




/**
 * This function is executed repeatedly
 */
function checkMicLevel() {
  // check if we're currently clipping

  console.log("OUR VOLUME IS");
  console.log(micvolume);

  if (micvolume < 5) {
    volfactor = 0.1;
  }

  if (micvolume > 5 && micvolume < 20) {
    volfactor = 0.2;
  }

  if (micvolume > 20 && micvolume < 40) {
    volfactor = 0.3;
  }

  if (micvolume > 40 && micvolume < 50) {
    volfactor = 0.4;
  }

  if (micvolume > 50 && micvolume < 60) {
    volfactor = 0.5;
  }

  if (micvolume > 60 && micvolume < 70) {
   volfactor = 0.6;
  }

  if (micvolume > 70 && micvolume < 80) {
    volfactor = 0.7;
  }

  if (micvolume > 80 && micvolume < 90) {
    volfactor = 0.8;
  }

  if (micvolume > 90 && micvolume < 100) {
    volfactor = 0.9;
  }

  if (micvolume > 100) {
    volfactor = 1;
  }


  shareddatabase.ref("volume").set({
      value: volfactor
    });

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






  var music_files = {};


  music_files["alert"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FAlert%2001.wav?v=1607985563046');

  music_files["alert"].loop = true;



  music_files["tired"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FYawn%2001.wav?v=1607985884255');

  music_files["tired"].loop = true;



  music_files["bored"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FHum%2001.wav?v=1607985989303');

  music_files["bored"].loop = true;



  music_files["hungry"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FHungry%2001.wav?v=1607986411308');

  music_files["hungry"].loop = true;



  music_files["productive"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FClicking%2001.mp3?v=1607986972430');

  music_files["productive"].loop = true;



  music_files["calm"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FFire%2001.wav?v=1608070239542');

  music_files["calm"].loop = true;






shareddatabase.ref("volume").on("value", function(snapshot) {
    volfactor = snapshot.val().value;
  console.log("VOLUME SET TO");
  console.log(volfactor);

  music_files["alert"].volume = volfactor;

  music_files["tired"].volume = volfactor;

  music_files["bored"].volume = volfactor;

  music_files["hungry"].volume = volfactor;

  music_files["productive"].volume = volfactor;

  music_files["calm"].volume = volfactor;

  });









  $("#playsound").click(function() {
    console.log("PLAY SOUND");
    console.log(music_files);
    music_files["alert"].play()
    music_files["tired"].play()
    music_files["bored"].play()
  })






  // when we click on it, change the database
  $("#submit").click(submitText);

  $("#textInput").on("keyup", function(event) {if (event.keyCode === 13) {

    submitText();
    $("#textInput").val("");

    }

  });


  function submitText() {
    var data = {
      timestamp: Date.now(),
      name: $("#nameInput").val(),
      text: $("#textInput").val(),
    };

    shareddatabase.ref(database_refname).push(data);
  }




    // when the database changes, change the website
  shareddatabase.ref(database_refname)
  .orderByChild("timestamp")
  .limitToLast(30)
  .on("value", function(snapshot) {
    var data = snapshot.val();

    $("#chattext").empty();

    for(var d in data) {

      console.log(data[d])

      $("#chattext").append(`
        <div>${ data[d]['name'] } : ${ data[d]['text'] } </div>
        `);

    }


  });



  // when the database changes, change the website
  shareddatabase.ref(database_refname)
  .orderByChild("timestamp")
  .limitToLast(2)

  .on("value", function(snapshot) {
    var data = snapshot.val();




    for(var d in data) {


      var messagetext = data[d]["text"];

      console.log(messagetext)


      var musicfilenames = Object.keys(music_files);

      for (var i in musicfilenames) {
       if(messagetext.includes(musicfilenames[i])) {

         console.log("Let's Play", musicfilenames[i])

         music_files[musicfilenames[i]].play()




       }

        //if(messagetext.excludes(musicfilenames[i])){

           //console.log("Let's not Play", musicfilenames[i])

           //music_files[musicfilenames[i]].pause()

        //}

      }


    }



  })



});
