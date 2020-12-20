// Get a reference to the database service
var shareddatabase = firebase.database();

var chatlimit = 1000;
var database_refname = "ohcp-metachat-dev2";
var faces_refname = "ohcp-metachat-faces2";

function initFaceChat() {


  function faceChanged(data) {
    var myname = $("#nameInput").val();
    if(myname == "") { return };

    var data = {
      name: myname,
      lastUpdated: Date.now(),
      size: data.size || 0,
      x: data.x || 0,
      x: data.y || 0
    };

    shareddatabase.ref(faces_refname + "/" + data.name).set(data);
  }

  var prevloc = {x: 0, y: 0};
  var prevsize = 0;
  var prevtime = Date.now();
  var mininterval = 1000;
  var sizethreshold = 0.10;
  var locthreshold = 0.06;
  var prevdetected = false;

  function faceThresholder(data) {

    if(data.detected == false) {
      if(data.detected != prevdetected) {
        // definitely run if data is different state
        prevdetected = data.detected;
        faceChanged(data);
      }
    } else {
      prevdetected = true;
      var diffSize = Math.abs(prevsize - data.size)
      var diffLoc = Math.pow(prevloc.x - data.x, 2) + Math.pow(prevloc.y - data.y, 2);
      prevsize = data.size;
      if(diffLoc > locthreshold || diffSize > sizethreshold || (Date.now() - prevtime) > mininterval) {
        // run at least once mininterval, or if diff is large
        prevloc.x = data.x;
        prevloc.y = data.y;
        prevtime = Date.now();
        faceChanged(data);
      }
    }
  }

  initFaceDetection({
    callback: faceThresholder,
    interval: 1000
  });
}


Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


$(document).ready(function() {

  initFaceChat();

// when the database changes, change the website
  shareddatabase
    .ref(faces_refname)
    .orderByChild("timestamp")
    .on("value", function(snapshot) {
      var faces = snapshot.val();

      $("#dynamicsheet").empty();

      for(k in faces) {
        var fontsize = Math.pow(faces[k].size, 2).map(0, 1, 0.4, 3);
//        $(".messagecontainer." + faces[k].name).css("font-size", fontsize + "em");
        var otherrules = "";
        if(faces[k].size == 0) {
          fontsize = 0.8;
          otherrules = "opacity: 0.3;";
        }


        $("#dynamicsheet").append(`
        .mc-${faces[k].name} {
          font-size: ${fontsize.toPrecision(3) }em;
          ${otherrules}
        }`);


      }

  })



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

  var chatlimit = 50;

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

       

        $("#chattext").append(`
        <div class="messagecontainer mc-${usernameToClasses}">
          <div class="messagename ${usernameToClasses}">${chats[k].name}</div>
          <div class="messagetext ${messageToClasses}"> ${marked(chats[k].text)} </div>
        </div>`);

      }

      $("#chattext").scrollTop($("#chattext")[0].scrollHeight);
    });
});
