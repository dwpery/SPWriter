// Variable Bank
var searchCntrl = false;
var subtitle = true; // Controls wether subtitle is active or not
var currentPage = 0; // Contains the current page number
var basedOn = true; // Controls wether the based on section is active or not
var coverstatus = true; // Controls wether cover is shown or not
var fomCntrl = false; // Controls format menu state
var totalPages = null; // Contains the total amount of pages
var zoom = 1; // Contains current zoom value

window.onscroll = function() {scrollFunction()}; // Calls scroll function when page scrolls

function scrollFunction() {
  if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
    $("#backToTop").css("right","0.95vw"); // Moves Back to Top button off screen
  } else {
    $("#backToTop").css("right","-3vw"); // Moves Back to Top button on screen
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; //Chromium
}

window.onload = function() {
  $("#cover-settings").hide(); // Hides cover settings menu
  totalPages = $('div#page').length; // Gets amount of pages
  $("#pageCount").html(currentPage + "/" + totalPages); // Prints amount of pages
}

function zoomIn() {
  zoom += 0.1; // Increases zoom by 10%
  $("#pages-container").css("transform", "scale("+zoom+")"); // Applys zoom value
}

function zoomOut() {
  zoom -= 0.1; // Decreases zoom by 10%
  if (zoom <= 0.1) { zoom = 0.1; } // Catches Zoom so it doesnt get smaller than 0.1
  $("#pages-container").css("transform", "scale("+zoom+")"); // Applys zoom value
}

// Controls moving buttons, updates every ¼ second
setInterval(function() {
  // Controls reset buttons position
  if (zoom != 1) {
    $("#undo-background").css("right", "3.5vw"); // Reset button on screen
  } else if (zoom == 1) {
    $("#undo-background").css("right", "-3.5vw"); // Reset button of screen
  }
  // Controls cover buttons position
  if (coverstatus === false) {
    $("#coverButton").css("left","1vw") // Cover button on screen
  } else if (coverstatus === true) {
    $("#coverButton").css("left","-3vw") // Cover button off screen
  }
},250)

function resetZoom() {
  zoom = 1; // Sets zoom to 100%
  $("#pages-container").css("transform", "scale("+zoom+")"); // Applys zoom value
  $("#reset-background").css("right", "-3.5vw"); // Puts reset button of screen
}

function searchScript() {
  if (searchCntrl === false) {
    $("#search-area").css("width", "10vw"); // Extends search box
    $("#search-area").css("right", "2.85vw"); // Moves the search box slightly (To hide some overlap)
    $("#search-background").css("border-radius", "0 15% 15% 0"); // Flattens search button edges
    searchCntrl = true; // Tells function the search box is open
  } else if (searchCntrl === true) {
    $("#search-area").css("width", "0"); // Closes search box
    $("#search-area").css("right", "2vw"); // Moves  search box slightly (To hide some overlap)
    $("#search-background").css("border-radius", "15%"); // Smooths search button edges
    searchCntrl = false; // Tells function the search box is closed
  }
}

function coverSettingsCntrl() {
  $("#cover-settings").slideToggle(500); // Slides cover settings menu
}

function toggleSub() {
  if (subtitle === true) {
    $("#subtitle").hide(); // Hides subtitle
    $("#title").css("top","44.5%") // Moves title down
    $("#button1").html("Off") // Makes button value 'Off'
    subtitle = false; // Tells function subtitle is hidden
  } else if (subtitle===false) {
    $("#subtitle").show(); // Shows subtitle
    $("#title").css("top","38.5%") // Moves title up
    $("#button1").html("On") // Makes button value 'On'
    subtitle = true; // Tells function subtitle is visible
  }
}

function toggleBasedOn() {
  if (basedOn === true) {
    $("#basedOn").hide(); // Hides based on section
    $("#button2").html("Off") // Makes button value 'Off'
    basedOn = false; // Tells function the based on section is hidden
  } else if (basedOn === false) {
    $("#basedOn").show(); // Shows based on section
    $("#button2").html("On") // Makes button value 'On'
    basedOn = true; // Tells function the based on section is visible
  }
}

function coverHide() {
  $("#cover").hide(); // Hides cover
  coverstatus = false; // Tells function the cover is hidden
}

function coverShow() {
  $("#cover").show(); // Shows cover
  coverstatus = true; // Tells function the cover is visible
}

function fom() {
  if(fomCntrl === false) {
    $("#fom").css("height","7.5vw"); // Sets height
    $("#fom").css("right","2.9vw"); // Sets right position
    $("#fom").css("width","10vw"); // Sets width
    $("#formating-icon").css("border-radius", "0 15% 15% 0"); // Flattens button edges
    fomCntrl = true; // Tells function the menu is open
  } else if(fomCntrl === true) {
    $("#fom").css("height","0"); // Sets height
    $("#fom").css("right","2.5vw"); // Sets right position
    $("#fom").css("width","0"); // Sets width
    $("#formating-icon").css("border-radius", "15%"); // Smooths button edges
    fomCntrl = false; // Tells function the menu is closed
  }
}
