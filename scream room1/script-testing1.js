/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


$(document).ready(function() {

   $("#textInput").on('keyup', function (event) {
      if (event.keyCode === 13) {
        submitText();
      }
   });


  // when we click on it, change teh database
  $("#submitText").click(submitText);

  function submitText() {

    var data = {
      timestamp: Date.now(),
      name: $("#nameInput").val(),
      text: $("#textInput").val(),
      x: Math.random(),
      y: Math.random(),
    }

    $("#textInput").val("")
    shareddatabase.ref("screamroom-dev2").push(data)

  }


  var chatlimit = 10;


  // when the database changes, change the website
  shareddatabase.ref("screamroom-dev2").orderByChild('timestamp').limitToLast(chatlimit).on("value", function(snapshot) {


    var chats = snapshot.val();

    $("#chattext").empty(); // deletes everything inside of #chattext

    console.log(Object.keys(chats))


    var chatlength = Object.keys(chats).length

    for (i = 0; i < chatlength; i++) {

      console.log("we are in loop: " + i)
      console.log(" this loop has chatlength: "+ chatlength)

      console.log("percentage:"+ (i / chatlength))

      /*



      */

      var k = Object.keys(chats)[i]


      console.log(k);
        // yd test random arragement of text
        $("#chattext").append(`
          <div class="messagecontainer messagecontainer-${chatlength - i}" style="opacity:${Math.pow(i/chatlength, 4)}; top: ${chats[k].x*100}vh; left:  ${chats[k].y*100}vw;">
            <span class="name">${chats[k].name}</span>
            <span class="text"> ${chats[k].text}</span>
          </div>`)

    //      $(".messagecontainer").css({top: 400, left: 200});

    };


    $("#chattext").scrollTop($("#chattext")[0].scrollHeight);

  });





});
