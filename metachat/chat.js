// Get a reference to the database service
var shareddatabase = firebase.database();

var chatlimit = 1000;
var database_refname = "ohcp-metachat-dev"

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
      classes: $("#classesInput").val(),
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
      $("#chatimages").empty();

      var url;

      for (k in chats) {
        var usernameToClasses = chats[k].name
          .split(/[\s,]+/)
          .map(function(x) {
            return x.replace(/\W/g, "");
          })
          .join(" ");

        var messageToClasses = chats[k].text
          .split(/[\s,]+/)
          .map(function(x) {
            return x.replace(/\W/g, "");
          })
          .join(" ");

       
        var chatimghtml = ""
        var imgregex =/(https?:\/\/.*\.(?:png|jpg|jpeg))/;
        if( imgregex.test(chats[k].text) == true) {
          var imgurl = chats[k].text.match(imgregex)[0];
          chatimghtml = `<img class="chatimage" src="${imgurl}">`;
        }
        

        $("#chattext").append(`
        <div class="messagecontainer ${chats[k].classes}">
          <div class="messagename ${usernameToClasses}">${chats[k].name}</div>
          <div class="messagetext ${messageToClasses}"> ${marked(chats[k].text)} </div>
          <div class="messageimg">${chatimghtml}</div>
        </div>`);

      }

      $("#chattext").scrollTop($("#chattext")[0].scrollHeight);
      //$("#chatimages").scrollTop($("#chatimages")[0].scrollHeight);
    });
});
