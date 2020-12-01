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
      text: $("#textInput").val()
    }

    $("#textInput").val("")
    shareddatabase.ref("ohcp-chats2").push(data)
    
  }
 

  var chatlimit = 100;
  

  // when the database changes, change the website  
  shareddatabase.ref("ohcp-chats2").orderByChild('timestamp').limitToLast(chatlimit).on("value", function(snapshot) {

      
    var chats = snapshot.val();


    $("#chattext").empty();
    $("#chatimages").empty();
    for (k in chats) {


      var usernameToClasses = chats[k].name
      .split(/[\s,]+/)
      .map(function(x) {
        return x.replace(/\W/g, "");
      })
      .join(" ");

        var messageToClasses = chats[k].text
        .split(/[\s,]+/).map(function(x) {
      return x.replace(/\W/g, "");
    }).join(" ");



      $("#chattext").append(`
        <div class="messagecontainer">
          <span class="name ${usernameToClasses}">${chats[k].name}</span> <span class="text ${messageToClasses}"> ${chats[k].text} </span>
        </div>`)

     if( (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(chats[k].text) == true) {
       $("#chatimages").append(`
         <img class="chatimage" src="${chats[k].text}">
         `);
     }


    };


    $("#chattext").scrollTop($("#chattext")[0].scrollHeight);
    $("#chatimages").scrollTop($("#chatimages")[0].scrollHeight);
    
  });
  
  
  
});

