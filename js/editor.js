var searchCntrl = false;
var subtitle = true;
var currentPage = 0;
var basedOn = true;
var coverstatus = true;
var fomCntrl = false;
var totalPages = 0;
var zoom = 1;
window.onload=function() {
  totalPages = $('div#page').length;
  $("#pageCount").html(currentPage + "/" + totalPages);
  $("#cover-settings").hide();
}
function zoomIn() {
  zoom+=0.1;
  $("#pages-container").css("transform", "scale("+zoom+")");
  console.log(zoom);
}
function zoomOut() {
  zoom-=0.1;
  if(zoom<=0.1) {
    zoom=0.1;
    $("#pages-container").css("transform", "scale("+zoom+")");
  }
  console.log(zoom);
  $("#pages-container").css("transform", "scale("+zoom+")");
}
setInterval(function() {
  if(zoom!=1) {
    $("#undo-background").css("right", "3.5vw");
  } else if (zoom==1) {
    $("#undo-background").css("right", "-3.5vw");
  }
  if(coverstatus===false) {
    $("#coverButton").css("right","1vw")
    $("#formating-icon").css("top","6vw")
  } else if(coverstatus===true) {
    $("#coverButton").css("right","-3vw")
    $("#formating-icon").css("top","0.95vw")
  }
},250)
function resetZoom() {
  zoom = 1;
  $("#pages-container").css("transform", "scale("+zoom+")");
  $("#reset-background").css("right", "-3.5vw");
  console.log(zoom);
}
function searchScript() {
  if(searchCntrl===false) {
    $("#search-area").css("width", "10vw");
    $("#search-area").css("right", "2.85vw");
    $("#search-background").css("border-radius", "0 15% 15% 0");
    searchCntrl = true;
  } else if(searchCntrl===true) {
    $("#search-area").css("width", "0");
    $("#search-area").css("right", "2vw");
    $("#search-background").css("border-radius", "15%");
    searchCntrl = false;
  }
}
function coverSettingsCntrl() {
  $("#cover-settings").slideToggle(500);
  console.log("yes");
}
function toggleSub() {
  if(subtitle===true) {
    $("#subtitle").hide();
    $("#title").css("top","44.5%")
    $("#button1").html("Off")
    subtitle = false;
  } else if (subtitle===false) {
    $("#subtitle").show();
    $("#title").css("top","38.5%")
    $("#button1").html("On")
    subtitle = true;
  }
}
function toggleBasedOn() {
  if(basedOn===true) {
    $("#basedOn").hide();
    $("#button2").html("Off")
    basedOn = false;
  } else if (basedOn===false) {
    $("#basedOn").show();
    $("#button2").html("On")
    basedOn = true;
  }
}
function coverHide() {
  $("#cover").hide();
  coverstatus = false;
}
function coverShow() {
  $("#cover").show();
  coverstatus = true;
}
function fom() {
  if(fomCntrl===false) {
    $("#fom").css("height","7.5vw");
    $("#fom").css("right","2.9vw");
    $("#fom").css("width","10vw");
    $("#formating-icon").css("border-radius", "0 15% 15% 0");
    fomCntrl = true;
  } else if(fomCntrl===true) {
    $("#fom").css("height","0");
    $("#fom").css("width","0");
    $("#fom").css("right","2.5vw");
    $("#formating-icon").css("border-radius", "15%");
    fomCntrl = false;
  }
}
