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

window.onload = function() {
  totalPages = $('div.page').length; // Gets amount of pages
}

// Controls moving buttons, updates every ¼ second
setInterval(function() {
  // Controls reset buttons position
  if (zoom != 1) {
    $(".reset").css("right", "7vh"); // Reset button on screen
  } else if (zoom == 1) {
    $(".reset").css("right", "-5vh"); // Reset button of screen
  }
  // Controls cover visibility
  if (coverstatus == false) {
    $(".cover").hide();
  } else {
    $(".cover").show();
  }
  // Controls Page Counter Code
  currentPage = Number(String(document.documentElement.scrollTop).charAt(0)); // Gets the 1st value of the scroll
  if (document.documentElement.scrollTop <= 1100) { currentPage = 0; } // If user on cover dont show a count
  if (coverstatus == false) { currentPage += 1 } // Adds 1 to count when cover is hidden
  $(".page-counter").html(currentPage + "/" + totalPages); // Prints amount of pages
},250);

function zoomIn() {
  zoom += 0.1; // Increases zoom by 10%
  $("#pages-container").css("transform", "scale("+zoom+")"); // Applys zoom value
  $(".zoom-value").html(Math.trunc(zoom * 100)); // Prints zoom value to UI
}

function zoomOut() {
  if (zoom < 0.2) {
    // Catches zoom so it doesn't go below 0.1
  } else {
    zoom -= 0.1;
    $("#pages-container").css("transform", "scale("+zoom+")"); // Applys zoom value
    $(".zoom-value").html(Math.trunc(zoom * 100)); // Prints zoom value to UI
  }
}

function resetZoom() {
  zoom = 1; // Sets zoom to 100%
  $("#pages-container").css("transform", "scale("+zoom+")"); // Applys zoom value
  $(".zoom-value").html(Math.trunc(zoom * 100)); // Prints zoom value to UI
}

function coverFunc() {
  if (coverstatus === true) {
    coverstatus = false;
  } else {
    coverstatus = true;
  }
}
