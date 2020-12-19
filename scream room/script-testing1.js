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
      // name: $("#nameInput").val(),
      text: $("#textInput").val(),
      x: Math.random(),
      y: Math.random(),
    }

    $("#textInput").val("")
    shareddatabase.ref("screamroom-dev2").push(data)

  }


  var chatlimit = 11;


  // when the database changes, change the website
  shareddatabase.ref("screamroom-dev2").orderByChild('timestamp').limitToLast(chatlimit).on("value", function(snapshot) {

//     const setBg = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
// }
//
// genNew.addEventListener("click", setBg);
// setBg();


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
//change text style based on the number of each text from 0 to 10 (chatlimit is 11 text at same time)
      var k = Object.keys(chats)[i]


      console.log(k);
        $("#chattext").append(`
          <div class="messagecontainer messagecontainer-${chatlength - i}" style="opacity:${0};
           font-style: italic;
          font:Sarpanch, sans-serif;
          font-size:120px;
          top: ${chats[k].x*50}vh; left:  ${chats[k].y*70}vw;">

            <span class="text"> ${chats[k].text}</span>
          </div>`)

    //      $(".messagecontainer").css({top: 400, left: 200});

    };

    // // TESTING: keywords founctions: img, automatic reply
    //
    // if (chat[k].includes("hey")) {
    //   $(chats[k]).css('black')
    // }


    $("#chattext").scrollTop($("#chattext")[0].scrollHeight);

  });



});
