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

        var usernameToClasses = name
          .split(/[\s,]+/)
          .map(function(x) {
            return x.replace(/\W/g, "");
          })
          .join(" ");

        var messageToClasses = text
          .split(/[\s,]+/)
          .map(function(x) {
            return x.replace(/\W/g, "");
          })
          .join(" ");

      

        $("#chattext").append(`
        <div class="messagecontainer ${chats[k].classes}">
          <div class="messagename ${usernameToClasses}">${name}</div>
          <div class="messagetext ${messageToClasses}"> ${marked(text)} </div>
        </div>`);

        var urlregex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        if(text.match(urlregex)) {
          url = text;
        } 

      }

      // url is the lastmost url.
      if (url !== currentiframeurl) {
        $("#backgroundiframe").attr("src", url);
        currentiframeurl = url;
      }


      $("#chattext").scrollTop($("#chattext")[0].scrollHeight);
    });





});
