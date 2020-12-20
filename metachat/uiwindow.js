var chatcollapsed = false;
var chattext_fullheight;
var inputcontainer_fullheight;

var popupwin;
var popuptimer;

function initui() {
  $("#metachatcontainer").draggable({
    containment: "parent",
    stop: function( event, ui ) {
      Cookies.set('mc_top', ui.position.top,  { sameSite:'strict' })
      Cookies.set('mc_left', ui.position.left,  { sameSite:'strict' })
      }
  });

  $("#metachatcontainer").resizable({
    containment: "parent",
    minHeight: 100,
    minWidth: 250,
    stop: function( event, ui ) {
      Cookies.set('mc_width', ui.size.width,  { sameSite:'strict' })
      Cookies.set('mc_height', ui.size.height,  { sameSite:'strict' })
      }
  });

  var mc_width = Cookies.get('mc_width');
  var mc_height = Cookies.get('mc_height');
  var mc_top = Cookies.get('mc_top');
  var mc_left = Cookies.get('mc_left');


  if(mc_width !== undefined) { $("#metachatcontainer").css({ width: Math.max(200, Math.min(mc_width, $(document).width())) }) }
  if(mc_height !== undefined) { $("#metachatcontainer").css({ height: Math.max(150, Math.min(mc_height, $(document).height())) }) }
  if(mc_top !== undefined) { $("#metachatcontainer").css({ top: Math.min(mc_top, $(document).height() - $("#metachatcontainer").height()) + "px" } ) }
  if(mc_left !== undefined) { $("#metachatcontainer").css({ left: Math.min(mc_left, $(document).width() - $("#metachatcontainer").width()) + "px" }) }


  function tryChatCollapse() {
      console.log("trychatcollapse");
    if(!chatcollapsed) {
      var timing = 500;
      var mch = $("#metachatcontainer").height();
      chattext_fullheight = $("#chattext").height();
      inputcontainer_fullheight = $("#inputcontainer").height();
      $("#metachatcontainer").animate({ height: (mch - chattext_fullheight - inputcontainer_fullheight) }, timing);
      $("#inputcontainer").slideUp(timing)
      $( "#metachatcontainer" ).resizable( "disable" );
      $( "#metachatcontainer" ).addClass("minimized");
      chatcollapsed = true;
      $("#minmax").text("+");
    }
  }

  function tryChatExpand() {
      console.log("trychatexpadn");
    if(chatcollapsed) {
      var timing = 500;
      var mch = $("#metachatcontainer").height();
      $("#metachatcontainer").animate({ height: (mch + chattext_fullheight + inputcontainer_fullheight) }, timing);
      $("#inputcontainer").slideDown(timing)
      $( "#metachatcontainer" ).resizable( "enable" );
      $( "#metachatcontainer" ).removeClass("minimized");
      chatcollapsed = false;
      $("#minmax").text("-");
    }
  }

  function minmaxtoggle() {

    if(chatcollapsed) {
      tryChatExpand();
    } else {
      tryChatCollapse();
    }
  }

  window.callingPageFunction = function() {
    alert("hohoho");
  }

  function popoutchat() {
      var url = "chatwindow.html";
      popupwin = window.open(url, "popupWindow", "width=600, height=400, scrollbars=no");
      popupwin.focus();

      popuptimer = setInterval(function() {
        //console.log(popupwin, popupwin.closed)
        if (popupwin && popupwin.closed) {
          tryChatExpand()
          clearInterval(popuptimer);
        }
      },1000);
  }

  $("#minmax").click(minmaxtoggle)

  $("#popout").click(function() {
    tryChatCollapse()
    popoutchat();
  })
}

$(document).ready(function() {
  initui();
});
