// Variable Bank
var searchCntrl = false;
var subtitle = true; // Controls wether subtitle is active or not
var currentPage = 0; // Contains the current page number
var basedOn = true; // Controls wether the based on section is active or not
var coverstatus = true; // Controls wether cover is shown or not
var fomCntrl = false; // Controls format menu state
var totalPages = null; // Contains the total amount of pages
var zoom = 1; // Contains current zoom value
var currentFormat = 1; // Contains current format option

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
  document.documentElement.scrollTop = 0; // Chromium
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
  // Controls Page Counter Code
  currentPage = Number(String(document.documentElement.scrollTop).charAt(0)); // Gets the 1st value of the scroll
  if (document.documentElement.scrollTop <= 1100) { currentPage = 0; } // If user on cover dont show a count
  if (coverstatus == false) { currentPage += 1 } // Adds 1 to count when cover is hidden
  $("#pageCount").html(currentPage + "/" + totalPages); // Prints amount of pages
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

function setFormat(x) {
  // X is set by function call
  if (x == 0) {
    $("#formating-icon").html('<svg viewBox="0 0 512 512" id="current"><path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" /></svg>');
  } else if (x == 1) {
    $("#formating-icon").html('<svg viewBox="0 0 416 512" id="current"><path d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z" /></svg>');
  } else if (x == 2) {
    $("#formating-icon").html('<svg viewBox="0 0 448 512" id="current"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>');
  } else if (x == 3) {
    $("#formating-icon").html('<div id="current">()</div>');
  } else if (x == 4) {
    $("#formating-icon").html('<svg viewBox="0 0 512 512" id="current"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" /></svg>');
  } else if (x == 5) {
    $("#formating-icon").html('<svg viewBox="0 0 576 512" id="current"><path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" /></svg>');
  }
  currentFormat = x; // Sets value of currentFormat to X
}

function writing() {
  if (currentFormat == 0) {
    alert("Scene");
  } else if (currentFormat == 1) {
    alert("Action");
  } else if (currentFormat == 2) {
    alert("Character");
  } else if (currentFormat == 3) {
    alert("Parenthesis");
  } else if (currentFormat == 4) {
    alert("Dialogue");
  } else if (currentFormat == 5) {
    alert("Shot");
  }
}
