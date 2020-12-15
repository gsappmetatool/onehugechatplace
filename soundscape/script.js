/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


var database_refname = "audiochat-taylor-dev"



$(document).ready(function() {






  var music_files = {};


  music_files["alert"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FAlert%2001.wav?v=1607985563046');

  music_files["tired"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FYawn%2001.wav?v=1607985884255');

  music_files["bored"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FHum%2001.wav?v=1607985989303');

  music_files["hungry"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FHungry%2001.wav?v=1607986411308');

  music_files["productive"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FClicking%2001.mp3?v=1607986972430');

  music_files["calm"] = new Audio('https://cdn.glitch.com/099e9d61-1dd5-4b34-a2e1-8c246b5d3408%2FFire%2001.wav?v=1608070239542');



  $("#playsound").click(function() {
    console.log("PLAY SOUND");
    console.log(music_files);
    music_files["alert"].play()
    music_files["tired"].play()
    music_files["bored"].play()
  })





  



  // when we click on it, change the database
  $("#submit").click(submitText);

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

      }


    }



  })



});
