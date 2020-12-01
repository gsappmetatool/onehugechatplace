/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


$(document).ready(function() {

document.addEventListener('keydown', (event) => {
   var hottestKeys = ['1','q','a','z'];
  
   if (hottestKeys.includes(event.key)) {
     
    shareddatabase.ref("agsz-mood").set({
      name: "hottest"
    });   
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var hotterKeys = ['2','w','s','x'];
  
   if (hotterKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "hotter"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var hottishKeys = ['3','e','d','c'];
  
   if (hottishKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "hottish"
    });
     
}});

document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var hotKeys = ['4','r','f','v'];
  
   if (hotKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "hot"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var neutralKeys = ['5','t','g','b'];
  
   if (neutralKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "neutral"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var coolKeys = ['6','y','h','n'];
  
   if (coolKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "cool"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var coolishKeys = ['7','u','j','m'];
  
   if (coolishKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "coolish"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var coolerKeys = ['8','i','k'];
  
   if (coolerKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "cooler"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var coolestKeys = ['9','o','l'];
  
   if (coolestKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "coolest"
    });
     
}});
  
document.addEventListener('keydown', (event) => {

   // "var" defines a variable
   // this defines a list called upsetKeys
   var frozenKeys = ['0','p'];
  
   if (frozenKeys.includes(event.key)) {     
     
    shareddatabase.ref("agsz-mood").set({
      name: "frozen"
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
  shareddatabase.ref("agsz-mood").on("value", function(snapshot) {
    
    console.log( snapshot.val().name );
    
    
    if(snapshot.val().name == "hottest") {
      
      $("#overlay1") // grab the overlay1 html element
        .css("background", "linear-gradient(90deg, #ff015d 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "hotter") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ff9543 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "hottish") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #ffd100 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "hot") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #fff919 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "neutral") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #edff34 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "cool") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #40ff8c 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "coolish") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #53f0d1 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "cooler") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #5fe3ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    if(snapshot.val().name == "coolest") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #3fa0ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
      
    if(snapshot.val().name == "frozen") {
      
      $("#overlay1") // grab the overlay1 html element
       .css("background", "linear-gradient(90deg, #6a00ff 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS
      
    }
    
    
  });
  
});
