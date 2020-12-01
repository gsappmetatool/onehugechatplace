/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();

var moodlog;

var leftmood;
var rightmood;

// object example
//  var car = {type:"Fiat", model:"500", color:"white"}; 


$(document).ready(function() {
  
  
  
  //// GET MOOD VALUES WHEN THEY CHANGE AND STORE THEM IN A VARIABLE
  
  shareddatabase.ref("agsz-mood-left").on("value", function(snapshot) {
    leftmood = snapshot.val().name;
    console.log( leftmood );
  })
    
  shareddatabase.ref("agsz-mood-right").on("value", function(snapshot) {
    rightmood = snapshot.val().name; 
    console.log( rightmood );
  })
    
  
  
  
  
  
  
  
  shareddatabase.ref("agsz-mood-log").on("value", function(snapshot) {
    
    moodlog = snapshot.val().name;
    
    if(Array.isArray(moodlog) == false) {
      moodlog = [];
    }
    
    //moodlog.push())
    
    
    $("#log").empty();
    
    console.log(moodlog)
    
    for(var i = 0; i < moodlog.length; i++) {
      
      console.log(moodlog[i])
      
      var mooddiv = $("<div></div>")
      mooddiv.addClass("bubble");
      //mooddiv.css("background-color", moodlog[i].colorL)
/*
      mooddiv.text(moodlog[i].colorL + "," + moodlog[i].colorR)
     */ 
      
      mooddiv.css("background", "linear-gradient(90deg, " + moodlog[i].colorL + " 0%, " + moodlog[i].colorR + " 100% "); // and then change the CSS
       //    .css("background", "linear-gradient(90deg, #ff9543 0%, rgba(0,0,0,0) 100%)"); // and then change the CSS

      
      $("#log").append(mooddiv);
      
      
   //$("#log").append("<div class=bubble>" + moodlog[i].colorL + "," +moodlog[i].colorR + "</div>");
      
      
    }
    
    

    
  });
  
  
  $("#submit").click(function() {
    
    // get current moods
    

    var leftcolor = "#FFFFFF";
    var rightcolor = "#FFFFFF";
    
    
    
    if(leftmood == "1") { leftcolor = "#FF3688"; }
    if(leftmood == "q") { leftcolor = "#FF015D"; }
    if(leftmood == "a") { leftcolor = "#CC0255"; }
    if(leftmood == "z") { leftcolor = "#990447"; }
    
    if(leftmood == "2") { leftcolor = "#FFAF78"; }
    if(leftmood == "w") { leftcolor = "#FF9543"; }
    if(leftmood == "s") { leftcolor = "#CC7337"; }
    if(leftmood == "x") { leftcolor = "#99582B"; }
    
    if(leftmood == "3") { leftcolor = "#FFD833"; }
    if(leftmood == "e") { leftcolor = "#FFD100"; }
    if(leftmood == "d") { leftcolor = "#CCA500"; }
    if(leftmood == "c") { leftcolor = "#997C00"; }
    
    if(leftmood == "4") { leftcolor = "#FFF64D"; }
    if(leftmood == "r") { leftcolor = "#FFF919"; }
    if(leftmood == "f") { leftcolor = "#CCC215"; }
    if(leftmood == "v") { leftcolor = "#998F11"; }
    
    if(leftmood == "5") { leftcolor = "#F8FF69"; }
    if(leftmood == "t") { leftcolor = "#EDFF34"; }
    if(leftmood == "g") { leftcolor = "#C5CC2B"; }
    
    if(leftmood == "6") { leftcolor = "#76FFA7"; }
    if(leftmood == "y") { leftcolor = "#40FF8C"; }
    if(leftmood == "h") { leftcolor = "#42BCA4"; }
    if(leftmood == "b") { leftcolor = "#318777"; }
    
    if(leftmood == "7") { leftcolor = "#84EFDA"; }
    if(leftmood == "u") { leftcolor = "#53F0D1"; }
    if(leftmood == "j") { leftcolor = "#4EBDCC"; }
    if(leftmood == "n") { leftcolor = "#3C9299"; }
    
    if(leftmood == "8") { leftcolor = "#94F2FF"; }
    if(leftmood == "i") { leftcolor = "#5FE3FF"; }
    if(leftmood == "k") { leftcolor = "#3387CC"; }
    if(leftmood == "m") { leftcolor = "#286B99"; }
    
    if(leftmood == "9") { leftcolor = "#73C0FF"; }
    if(leftmood == "o") { leftcolor = "#3FA0FF"; }
   
    if(leftmood == "0") { leftcolor = "#8233FF"; }
    if(leftmood == "p") { leftcolor = "#6A00FF"; }
    if(leftmood == "l") { leftcolor = "#4F00CC"; }
    
    
    if(rightmood == "1") { rightcolor = "#FF3688"; }
    if(rightmood == "q") { rightcolor = "#FF015D"; }
    if(rightmood == "a") { rightcolor = "#CC0255"; }
    if(rightmood == "z") { rightcolor = "#990447"; }
    
    if(rightmood == "2") { rightcolor = "#FFAF78"; }
    if(rightmood == "w") { rightcolor = "#FF9543"; }
    if(rightmood == "s") { rightcolor = "#CC7337"; }
    if(rightmood == "x") { rightcolor = "#99582B"; }
    
    if(rightmood == "3") { rightcolor = "#FFD833"; }
    if(rightmood == "e") { rightcolor = "#FFD100"; }
    if(rightmood == "d") { rightcolor = "#CCA500"; }
    if(rightmood == "c") { rightcolor = "#997C00"; }
    
    if(rightmood == "4") { rightcolor = "#FFF64D"; }
    if(rightmood == "r") { rightcolor = "#FFF919"; }
    if(rightmood == "f") { rightcolor = "#CCC215"; }
    if(rightmood == "v") { rightcolor = "#998F11"; }
    
    if(rightmood == "5") { rightcolor = "#F8FF69"; }
    if(rightmood == "t") { rightcolor = "#EDFF34"; }
    if(rightmood == "g") { rightcolor = "#C5CC2B"; }
    
    if(rightmood == "6") { rightcolor = "#76FFA7"; }
    if(rightmood == "y") { rightcolor = "#40FF8C"; }
    if(rightmood == "h") { rightcolor = "#42BCA4"; }
    if(rightmood == "b") { rightcolor = "#318777"; }
    
    if(rightmood == "7") { rightcolor = "#84EFDA"; }
    if(rightmood == "u") { rightcolor = "#53F0D1"; }
    if(rightmood == "j") { rightcolor = "#4EBDCC"; }
    if(rightmood == "n") { rightcolor = "#3C9299"; }
    
    if(rightmood == "8") { rightcolor = "#94F2FF"; }
    if(rightmood == "i") { rightcolor = "#5FE3FF"; }
    if(rightmood == "k") { rightcolor = "#3387CC"; }
    if(rightmood == "m") { rightcolor = "#286B99"; }
    
    if(rightmood == "9") { rightcolor = "#73C0FF"; }
    if(rightmood == "o") { rightcolor = "#3FA0FF"; }
   
    if(rightmood == "0") { rightcolor = "#8233FF"; }
    if(rightmood == "p") { rightcolor = "#6A00FF"; }
    if(rightmood == "l") { rightcolor = "#4F00CC"; }
    
    
    // convert them into colors
    
    
    // store the colors in database
    
    console.log(leftcolor)
    console.log(leftmood)
    console.log(rightcolor)
    console.log(rightmood)
    
    
    var moodentry = {}
//    moodentry.colorL = $("#colorL").val();
//    moodentry.colorR = $("#colorR").val();
    
    moodentry.colorL = leftcolor;
    moodentry.colorR = rightcolor;

    
    console.log(moodentry);
    
    moodlog.push(moodentry)
    
    shareddatabase.ref("agsz-mood-log").set({
      name: moodlog
    });   
  })
  
  
   $("#clear").click(function() {
    
    moodlog = ""
    shareddatabase.ref("agsz-mood-log").set({
      name: moodlog
    });   
  })


  
});




/*


1a. some thing (a server???) regularly ..
saves the current moods to a log


1b: when you press the spacebar, it
saves the current moods to a log

2: get moods from the log
and show in a grid of gradients





*/