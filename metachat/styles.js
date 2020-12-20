// Get a reference to the database service
var shareddatabase = firebase.database();

var database_styles_refname = "ohcp-chats-dev-styles"

$(document).ready(function() {


  $("#stylerules").on("keyup", function(event) {
    if (event.keyCode === 13) {
      submitStyle();
    }
  });

  // when we click on it, change teh database
  $("#submitStyle").click(submitStyle);

  function submitStyle() {
    var data = {
      timestamp: Date.now(),
      selector: $("#styleselector").val(),
      rules: $("#stylerules").val(),
    };

    $("#stylerules").val("");
    $("#styleselector").val("");
    shareddatabase.ref(database_styles_refname).push(data);
  }


  // when the database changes, change the website
  shareddatabase
    .ref(database_styles_refname)
    .orderByChild("timestamp")
    .on("value", function(snapshot) {
      var styles = snapshot.val();

      var url;

      $("#dynamicstyles").empty();
      $("#dynamicsheet").empty();

      for (k in styles) {


        $("#dynamicstyles").append(`
        <div class="stylecontainer" id="${k}">
          <div class="styleselector">${styles[k].selector}</div>
          <div class="stylerules">${styles[k].rules}</div>
          <button class="styledelete">X</div>
        </div>`);



        $("#dynamicsheet").append(`
        ${styles[k].selector} {
                  ${styles[k].rules}
        }`);


      }

      $(".styledelete").click(styleDelete);

    });
});

function styleDelete(event) {
  var styleid = event.currentTarget.parentElement.id;
  shareddatabase
    .ref(database_styles_refname)
    .child(styleid)
    .remove();

}
