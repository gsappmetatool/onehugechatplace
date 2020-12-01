/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();
$(document).ready(function() {



  // when the database changes, change the website  
  shareddatabase.ref("mc-d1").on("value", function(snapshot) {
    $("#d1").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d2").on("value", function(snapshot) {
    $("#d2").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d3").on("value", function(snapshot) {
    $("#d3").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d4").on("value", function(snapshot) {
    $("#d4").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d5").on("value", function(snapshot) {
    $("#d5").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d6").on("value", function(snapshot) {
    $("#d6").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d7").on("value", function(snapshot) {
    $("#d7").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d8").on("value", function(snapshot) {
    $("#d8").text(snapshot.val().text);
  });
  
   shareddatabase.ref("mc-d9").on("value", function(snapshot) {
    $("#d9").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d10").on("value", function(snapshot) {
    $("#d10").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d11").on("value", function(snapshot) {
    $("#d11").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d12").on("value", function(snapshot) {
    $("#d12").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d13").on("value", function(snapshot) {
    $("#d13").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d14").on("value", function(snapshot) {
    $("#d14").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d15").on("value", function(snapshot) {
    $("#d15").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d16").on("value", function(snapshot) {
    $("#d16").text(snapshot.val().text);
  });
  
    shareddatabase.ref("mc-d17").on("value", function(snapshot) {
    $("#d17").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d18").on("value", function(snapshot) {
    $("#d18").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d19").on("value", function(snapshot) {
    $("#d19").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d20").on("value", function(snapshot) {
    $("#d20").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d21").on("value", function(snapshot) {
    $("#d21").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d22").on("value", function(snapshot) {
    $("#d22").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d23").on("value", function(snapshot) {
    $("#d23").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d24").on("value", function(snapshot) {
    $("#d24").text(snapshot.val().text);
  });
  
   shareddatabase.ref("mc-d25").on("value", function(snapshot) {
    $("#d25").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d26").on("value", function(snapshot) {
    $("#d26").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d27").on("value", function(snapshot) {
    $("#d27").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d28").on("value", function(snapshot) {
    $("#d28").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d29").on("value", function(snapshot) {
    $("#d29").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d30").on("value", function(snapshot) {
    $("#d30").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d31").on("value", function(snapshot) {
    $("#d31").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d32").on("value", function(snapshot) {
    $("#d32").text(snapshot.val().text);
  });
  
  
    shareddatabase.ref("mc-d33").on("value", function(snapshot) {
    $("#d33").text(snapshot.val().text);
  });
  
   shareddatabase.ref("mc-d34").on("value", function(snapshot) {
    $("#d34").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d35").on("value", function(snapshot) {
    $("#d35").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d36").on("value", function(snapshot) {
    $("#d36").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d37").on("value", function(snapshot) {
    $("#d37").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d38").on("value", function(snapshot) {
    $("#d38").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d39").on("value", function(snapshot) {
    $("#d39").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d40").on("value", function(snapshot) {
    $("#d40").text(snapshot.val().text);
  });
  
      shareddatabase.ref("mc-d41").on("value", function(snapshot) {
    $("#d41").text(snapshot.val().text);
  });
  
   shareddatabase.ref("mc-d42").on("value", function(snapshot) {
    $("#d42").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d43").on("value", function(snapshot) {
    $("#d43").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d44").on("value", function(snapshot) {
    $("#d44").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d45").on("value", function(snapshot) {
    $("#d45").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d46").on("value", function(snapshot) {
    $("#d46").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d47").on("value", function(snapshot) {
    $("#d47").text(snapshot.val().text);
  });
  
  shareddatabase.ref("mc-d48").on("value", function(snapshot) {
    $("#d48").text(snapshot.val().text);
  });

shareddatabase.ref("mc-clear").on("value", function(snapshot) {
    $("#clear").text(snapshot.val().text);
  });
  
  $(".boxes").click(function(){
    
    var clickedid = $(this).attr('id');
    
    //alert("mc-" + clickedid);
    
    
    // add the text in the input to that's in the box
    shareddatabase.ref("mc-" + clickedid).set({
      text: $(this).text() + " " + $("#emoji_input").val() 
    });
    
      
    /*
    /// replace the text with what's in the box
    shareddatabase.ref("mc-" + clickedid).set({
      text: $(this).text() + $("#emoji_input").val() 
    });
    */
   
  
    
    // alert("you clicked on " + $(this).attr('id') + " and " + $("#feelingInput").val())
    
    //$(this).append("<p>" + $("#feelingInput").val() +  "</p>")
    
  })
  
  
});


$(document).mousemove(function(e){
  $('.pointer').css({left:e.pageX,top:e.pageY})
  'socket.io'.socket.emit('hover', {id: event.target});
})

