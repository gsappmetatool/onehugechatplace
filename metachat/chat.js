// Get a reference to the database service
var shareddatabase = firebase.database();

var chatlimit = 1000;
var database_refname = "ohcp-metafacechat-prod";

var currentiframeurl = "";

$(document).ready(function() {



  $("#textInput").on("keyup", function(event) {
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
    };

    $("#textInput").val("");
    shareddatabase.ref(database_refname).push(data);
  }

  var chatlimit = 1000;

  // when the database changes, change the website
  shareddatabase
    .ref(database_refname)
    .orderByChild("timestamp")
    .limitToLast(chatlimit)
    .on("value", function(snapshot) {
      var chats = snapshot.val();

      $("#chattext").empty();

      var url;

      for (k in chats) {

        var name = chats[k].name;
        var text = chats[k].text;


        $("#chattext").append(`
        <div class="messagecontainer">
          <div class="messagename">${name}</div>
          <div class="messagetext"> ${marked(text)} </div>
        </div>`);

        var urlregex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        if(text.match(urlregex)) {
          url = text;
        } 

      }

      // url is the lastmost url.
      if (url !== currentiframeurl) {
        $("#backgroundiframe").remove();
//        var bgiframe = document.getElementById("backgroundiframe");
//        console.log(bgiframe);
        $("#iframecontainer").html('<iframe id="backgroundiframe" src="' + url +'" is="x-frame-bypass"></iframe>');
        //bgiframe.setAttribute("is", "x-frame-bypass");
//        bgiframe.src = url;
        console.log("yeah");
        currentiframeurl = url;
      }


      $("#chattext").scrollTop($("#chattext")[0].scrollHeight);
    });





});
