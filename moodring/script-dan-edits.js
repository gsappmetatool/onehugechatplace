/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


var randomrole = Math.round(Math.random()); // 0 or 1

var sideToChange;

if(randomrole == 0) {
  sideToChange = "left";
} else {
  sideToChange = "right";
}



$(document).ready(function() {

document.addEventListener('keydown', (event) => {
  // || means 'or'
  // && means 'and'
   var onekey = ['1'];
  
   if (onekey.includes(event.key)) {
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "1"
    });   
     
}});
  
document.addEventListener('keydown', (event) => {
  // || means 'or'
  // && means 'and'
   var qkey = ['q'];
  
   if (qkey.includes(event.key)) {
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "q"
    });   
     
}});
  
document.addEventListener('keydown', (event) => {
  // || means 'or'
  // && means 'and'
   var akey = ['a'];
  
   if (akey.includes(event.key)) {
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "a"
    });   
     
}});
  
  document.addEventListener('keydown', (event) => {
  // || means 'or'
  // && means 'and'
   var zkey = ['z'];
  
   if (zkey.includes(event.key)) {
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "z"
    });   
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var twokey = ['2'];
  
   if (twokey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "2"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var wkey = ['w'];
  
   if (wkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "w"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var skey = ['s'];
  
   if (skey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "s"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var xkey = ['x'];
  
   if (xkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "x"
    });
     
}});
  
  
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var threekey = ['3'];
  
   if (threekey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "3"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var ekey = ['e'];
  
   if (ekey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "e"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var dkey = ['d'];
  
   if (dkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "d"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var ckey = ['c'];
  
   if (ckey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "c"
    });
     
}});

document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var fourkey = ['4'];
  
   if (fourkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "4"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var rkey = ['r'];
  
   if (rkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "r"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var fkey = ['f'];
  
   if (fkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "f"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var vkey = ['v'];
  
   if (vkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "v"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var fivekey = ['5'];
  
   if (fivekey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "5"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var tkey = ['t'];
  
   if (tkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "t"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var gkey = ['g'];
  
   if (gkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "g"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var bkey = ['b'];
  
   if (bkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "b"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var sixkey = ['6'];
  
   if (sixkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "6"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var ykey = ['y'];
  
   if (ykey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "y"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var hkey = ['h'];
  
   if (hkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "h"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var nkey = ['n'];
  
   if (nkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "n"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var sevenkey = ['7'];
  
   if (sevenkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "7"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var ukey = ['u'];
  
   if (ukey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "u"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var jkey = ['j'];
  
   if (jkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "j"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var mkey = ['m'];
  
   if (mkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "m"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var eightkey = ['8'];
  
   if (eightkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "8"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var ikey = ['i'];
  
   if (ikey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "i"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var kkey = ['k'];
  
   if (kkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "k"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var ninekey = ['9'];
  
   if (ninekey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "9"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var okey = ['o'];
  
   if (okey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "o"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var lkey = ['l'];
  
   if (lkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "l"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var zerokey = ['0'];
  
   if (zerokey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "0"
    });
     
}});
  
  document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var pkey = ['p'];
  
   if (pkey.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood-" + sideToChange).set({
      name: "p"
    });
     
}});
  
/*
document.addEventListener('keydown', (event) => {
   if (event.key == '3') {
	  $("body").css("background-color", "#ffce00");
}});
  
document.addEventListener('keydown', (event) => {
   if (event.key == '4') {
	  $("body").css("background-color", "#ceff00");
}});
  
document.addEventListener('keydown', (event) => {
   if (event.key == '5') {
	  $("body").css("background-color", "#64ff00");
}});
  
document.addEventListener('keydown', (event) => {
   if (event.key == '6') {
	  $("body").css("background-color", "#00ff00");
}});
  
document.addEventListener('keydown', (event) => {
   if (event.key == '7') {
	  $("body").css("background-color", "#00ff67");
}});
  
document.addEventListener('keydown', (event) => {
   if (event.key == '8') {
	  $("body").css("background-color", "#00ffce");
}});
  
document.addEventListener('keydown', (event) => {
   if (event.key == '9') {
	  $("body").css("background-color", "#00cfff");
}});
*/

  
  
  // when the database changes, change the website  
  shareddatabase.ref("agsz-mood-left").on("value", function(snapshot) {
    
    console.log( snapshot.val().name );
    
    
    if(snapshot.val().name == "1") {
      
      
        $("#overlay1") // grab the overlay1 html element
          .css("background", "linear-gradient(90deg, #ff3688 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "q") {
      
      
        $("#overlay1") // grab the overlay1 html element
          .css("background", "linear-gradient(90deg, #ff015d 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "a") {
      
      
        $("#overlay1") // grab the overlay1 html element
          .css("background", "linear-gradient(90deg, #cc0255 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "z") {
      
      
        $("#overlay1") // grab the overlay1 html element
          .css("background", "linear-gradient(90deg, #990447 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "2") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ffaf78 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "w") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ff9543 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "s") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #cc7337 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "x") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #99582b 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "3") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ffd833 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "e") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ffd100 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "d") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #cca500 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "c") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #997c00 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "4") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #fff64d 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "r") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #fff919 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "f") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ccc215 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "v") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #998f11 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "5") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #f8ff69 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "t") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #edff34 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "g") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #c5cc2b 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "b") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #318777 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "6") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #76ffa7 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "y") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #40ff8c 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "h") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #42bca4 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "n") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #3c9299 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "7") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #84efda 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "u") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #53f0d1 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "j") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #4ebdcc 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "m") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #286b99 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "8") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #94f2ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "i") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #5fe3ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "k") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #3387cc 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "9") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #73c0ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "o") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #3fa0ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "l") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #4f00cc 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
      
    if(snapshot.val().name == "0") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #8233ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "p") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #6a00ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    
  });
  
  
  
  
  
  // when the database changes, change the website  
  shareddatabase.ref("agsz-mood-right").on("value", function(snapshot) {
    
    console.log( snapshot.val().name );
    
    
    if(snapshot.val().name == "1") {
      $("#overlay2") // grab the overlay1 html element
         .css("background-color", "#ff3688"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "q") {
      $("#overlay2") // grab the overlay1 html element
         .css("background-color", "#ff015d"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "a") {
      $("#overlay2") // grab the overlay1 html element
         .css("background-color", "#cc0255"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "z") {
      $("#overlay2") // grab the overlay1 html element
         .css("background-color", "#990447"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "2") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#ffaf78"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "w") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#ff9543"); // and then change the CSS
      
    }
    
            if(snapshot.val().name == "s") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#cc7337"); // and then change the CSS
      
    }
    
            if(snapshot.val().name == "x") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#99582b"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "3") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#ffd833"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "e") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#ffd100"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "d") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#cca500"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "c") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#997c00"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "4") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#fff64d"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "r") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#fff919"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "f") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#ccc215"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "v") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#998f11"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "5") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#f8ff69"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "t") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#edff34"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "g") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#c5cc2b"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "b") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#318777"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "6") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#76ffa7"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "y") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#40ff8c"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "h") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#42bca4"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "n") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#3c9299"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "7") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#84efda"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "u") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#53f0d1"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "j") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#4ebdcc"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "m") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#286b99"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "8") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#94f2ff"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "i") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#5fe3ff"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "k") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#3387cc"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "9") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#73c0ff"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "o") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#3fa0ff"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "l") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#4f00cc"); // and then change the CSS
      
    }
      
    if(snapshot.val().name == "0") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#8233ff"); // and then change the CSS
      
    }
    
        if(snapshot.val().name == "p") {
      
      $("#overlay2") // grab the overlay1 html element
       .css("background-color", "#6a00ff"); // and then change the CSS
      
    }
    
    
  });
  
  
  
});



function createAudioMeter(audioContext,clipLevel,averaging,clipLag) {
	var processor = audioContext.createScriptProcessor(512);
	processor.onaudioprocess = volumeAudioProcess;
	processor.clipping = false;
	processor.lastClip = 0;
	processor.volume = 0;
	processor.clipLevel = clipLevel || 0.98;
	processor.averaging = averaging || 0.95;
	processor.clipLag = clipLag || 750;

	// this will have no effect, since we don't copy the input to the output,
	// but works around a current Chrome bug.
	processor.connect(audioContext.destination);

	processor.checkClipping =
		function(){
			if (!this.clipping)
				return false;
			if ((this.lastClip + this.clipLag) < window.performance.now())
				this.clipping = false;
			return this.clipping;
		};

	processor.shutdown =
		function(){
			this.disconnect();
			this.onaudioprocess = null;
		};

	return processor;
}

function volumeAudioProcess( event ) {
	var buf = event.inputBuffer.getChannelData(0);
    var bufLength = buf.length;
	var sum = 0;
    var x;

	// Do a root-mean-square on the samples: sum up the squares...
    for (var i=0; i<bufLength; i++) {
    	x = buf[i];
    	if (Math.abs(x)>=this.clipLevel) {
    		this.clipping = true;
    		this.lastClip = window.performance.now();
    	}
    	sum += x * x;
    }

    // ... then take the square root of the sum.
    var rms =  Math.sqrt(sum / bufLength);

    // Now smooth this out with the averaging factor applied
    // to the previous sample - take the max here because we
    // want "fast attack, slow release."
    this.volume = Math.max(rms, this.volume*this.averaging);
}


/*


1a. some thing (a server???) regularly ..
saves the current moods to a log


1b: when you press the spacebar, it
saves the current moods to a log

2: get moods from the log
and show in a grid of gradients





*/