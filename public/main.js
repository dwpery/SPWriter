var totalNotes = 0;

function addNote() {
    totalNotes++;
    $(".noteSelection").append('<div class="noteName" id="' + totalNotes + '">Note #' + totalNotes + '</div>');
    $(".noteSpace").append('<div id="' + totalNotes + '"><div class="writingSpace" contenteditable></div></div>')
}