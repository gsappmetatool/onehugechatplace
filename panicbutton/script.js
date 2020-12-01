
/* globals firebase, tracery */



// Get a reference to the database service
var database = firebase.database();

// Get a reference to the database service
var shareddatabase = firebase.database();

var help = 0;
var maxPanic = 10;
var minPanic = 0;

function helpMe() {
  var help = parseInt($("#help").text());
  if (isNaN(help)) {
    help = 0;
  }
  if (help < maxPanic) {
    shareddatabase.ref("help").set({
      value: help + 1
    });
  }
}
function gettingBetter() {
  var help = parseInt($("#help").text());
  if (isNaN(help)) {
    help = 0;
  }
  if (help > minPanic) {
    shareddatabase.ref("help").set({
      value: help - 1
    });
  }
}

function dontHelpMe() {
  var help = parseInt($("#help").text());
  if (isNaN(help)) {
    help = 0;
  }

  shareddatabase.ref("help").set({
    value: 0
  });
}

$(document).ready(function() {
  shareddatabase.ref("help").on("value", function(snapshot) {
    var help = snapshot.val().value;
    $("#help").text(help);
  });

  $("#helpButton").click(function() {
    helpMe();
  });

  $("#gettingBetterButton").click(function() {
    gettingBetter();
  });

  $("#noHelpButton").click(function() {
    dontHelpMe();
  });

  //building in responsiveness to panic value

  shareddatabase.ref("help").on("value", function(snapshot) {
    if (snapshot.val().value == maxPanic) {
      //alert("MAXIMUM PANIC");
    }
     if (snapshot.val().value == 0) {
      //alert ("level 0: tabula rasa")
      document.getElementById("gettingBetterButton").className = "lvl0";
      document.getElementById("helpButton").className = "lvl0";
      document.getElementById("noHelpButton").className = "lvl0";
       document.getElementById("h1").innerHTML = "Don't Panic";
       document.body.style.background = "black";
       document.getElementById("h1").style.color = "white";
       document.getElementById("h1").style.fontStyle = "italic";
      document.getElementById("h1").style.fontWeight = "normal";
      document.getElementById("h1").style.fontSize = "200%";
       document.getElementById("h1").style.fontFamily = "Impact,Charcoal,sans-serif";
       document.getElementById("noHelpButton").innerHTML = "I'm OK";
       document.body.style.background = "black";

    }
    if (snapshot.val().value == 1) {
      //alert ("level 1: easy peasy")
      document.getElementById("gettingBetterButton").className = "lvl1";
      document.getElementById("helpButton").className = "lvl1";
      document.getElementById("noHelpButton").className = "lvl1";
      document.getElementById("h1").innerHTML = "I said, DON'T PANIC";
    }

    if (snapshot.val().value == 2) {
      //alert ("level 2: ran out of coffee")
      document.getElementById("gettingBetterButton").className = "lvl2";
      document.getElementById("helpButton").className = "lvl2";
      document.getElementById("noHelpButton").className = "lvl2";
      document.getElementById("h1").innerHTML = "Everything will be OK.";
      document.getElementById("h1").style.color = "white";
      document.body.style.background = "Black";
    }

    if (snapshot.val().value == 3) {
      document.getElementById("gettingBetterButton").className = "lvl3";
      document.getElementById("helpButton").className = "lvl3";
      document.getElementById("noHelpButton").className = "lvl3";
      document.getElementById("h1").innerHTML = "This is fine.";
      document.getElementById("h1").style.fontFamily = "'Impact',Charcoal,sans-serif";
      document.getElementById("h1").style.color = "orange";
      document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/232113/screenshots/8585534/media/58f6a01695be445d0e40b92f33a0c8b5.jpg')";
      document.body.style.backgroundSize = "100% 180%";

    }

    if (snapshot.val().value == 4) {
      document.getElementById("gettingBetterButton").className = "lvl4";
      document.getElementById("helpButton").className = "lvl4";
      document.getElementById("noHelpButton").className = "lvl4";
      document.getElementById("h1").innerHTML = "Maybe it's not fine.....";
      document.getElementById("h1").style.color = "white";
      document.body.style.background = "Black";
      document.getElementById("h1").style.fontWeight = "normal";
      document.getElementById("h1").style.fontFamily = "'Faster One',Charcoal,sans-serif";
      document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/c9/fe/78/c9fe789b8da247fb2700f293700d234e.gif')";
      document.body.style.backgroundSize = "100% 140%";
    }

    if (snapshot.val().value == 5) {
      document.getElementById("gettingBetterButton").className = "lvl5";
      document.getElementById("helpButton").className = "lvl5";
      document.getElementById("noHelpButton").className = "lvl5";
      document.getElementById("h1").innerHTML = "HELP";
      document.getElementById("h1").style.background = "transparent";
      document.getElementById("h1").style.color = "Black";
      document.body.style.background = "DarkRed";
      document.getElementById("h1").style.fontFamily = "'Nosifer',Charcoal,sans-serif";
    }

    if (snapshot.val().value == 6) {
      document.getElementById("gettingBetterButton").className = "lvl6";
      document.getElementById("helpButton").className = "lvl6";
      document.getElementById("noHelpButton").className = "lvl6";
      document.getElementById("h1").innerHTML = "ALERT";
      document.getElementById("h1").style.fontFamily = "'Impact',Charcoal,sans-serif";
      document.getElementById("h1").style.fontStyle = "italic";
      document.getElementById("h1").style.color = "white";
      document.body.style.background = "black";
    }

    if (snapshot.val().value == 7) {
      document.getElementById("gettingBetterButton").className = "lvl7";
      document.getElementById("helpButton").className = "lvl7";
      document.getElementById("noHelpButton").className = "lvl7";
      document.getElementById("h1").style.color = "red";
      document.getElementById("h1").style.fontStyle = "italic";
      document.getElementById("h1").style.fontFamily = "'Impact',Charcoal,sans-serif";
      document.getElementById("h1").innerHTML = "RED ALERT";
    }

    if (snapshot.val().value == 8) {
      document.getElementById("gettingBetterButton").className = "lvl8";
      document.getElementById("helpButton").className = "lvl8";
      document.getElementById("noHelpButton").className = "lvl8";
      document.getElementById("box").className = "helpBox";
      document.getElementById("h1").innerHTML = "Panic Overflow";
      document.getElementById("h1").style.color = "red";
      document.getElementById("h1").style.fontFamily = "'VT323',vt323,Impact,Charcoal,sans-serif";
      document.getElementById("h1").style.fontStyle = "normal";
    }

    if (snapshot.val().value == 9) {
      document.getElementById("gettingBetterButton").className = "lvl9";
      document.getElementById("helpButton").className = "lvl9";
      document.getElementById("noHelpButton").className = "lvl9";
      document.getElementById("h1").innerHTML = "S/st_m Cr_Tic@1";
      document.getElementById("h1").style.fontFamily = "'Press Start 2P',vt323,Impact,Charcoal,sans-serif";
      document.getElementById("h1").style.fontStyle = "normal";
      document.getElementById("h1").style.fontWeight = "normal";
      document.getElementById("box").className = "critical";
      document.getElementById("h1").style.color = "white";
    }

    if (snapshot.val().value == 10) {
      document.getElementById("gettingBetterButton").className = "invisible";
      document.getElementById("helpButton").className = "invisible";
      document.getElementById("noHelpButton").className = "lvl10";
      document.getElementById("noHelpButton").innerHTML = "reset";
      document.getElementById("box").className = "helpBox";
      document.getElementById("h1").style.fontFamily = "'Press Start 2P',vt323,Impact,Charcoal,sans-serif";
      document.getElementById("h1").style.fontStyle = "normal";
      document.getElementById("h1").style.fontWeight = "normal";
      document.getElementById("h1").style.fontSize = "600%";
      document.getElementById("h1").innerHTML = "Fatal Error";
      document.getElementById("h1").style.background = "transparent";
      document.body.style.backgroundImage = "url('https://neosmart.net/wiki/wp-content/uploads/sites/5/2013/08/unmountable-boot-volume.png')";
    }
  });
});
