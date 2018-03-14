var isBold = false;
var isItalic = false;
var isPink = false;
var isGreen = false;
var isBlue= false;

function functionBold() {
    if (isBold) {
        isBold = false;
        document.getElementById("text").style.fontWeight = "normal"
    } else {
        isBold = true;
        document.getElementById("text").style.fontWeight = "bold";
    }
}

function functionItalic(){
    if (isItalic) {
        isItalic = false;
        document.getElementById("text").style.fontStyle = "normal";
    } else {
        isItalic = true;
        document.getElementById("text").style.fontStyle = "italic";
    }
}

function functionColorPink() {
    if (isPink){
        isPink = false;
        document.getElementById("text").style.color="black";
    } else{
        isPink = true;
        document.getElementById("text").style.color="pink";
    }

}

function functionColorGreen() {
    if (isGreen) {
        isGreen = false;
        document.getElementById("text").style.color = "black";
    } else {
        isGreen = true;
        document.getElementById("text").style.color = "green";
    }

}

function functionColorBlue() {
    if (isBlue) {
        isBlue = false;
        document.getElementById("text").style.color = "black";
    } else {
        isBlue = true;
        document.getElementById("text").style.color = "blue";
    }
}

function functionCopy(event) {
    event.preventDefault();
    console.log(getSelectedText());
}
$("html, body").on("click", "#copy", function(event) {
    event.preventDefault();

        window.getSelection();
        return document.execCommand("copy");


});

document.onkeyup = function(event){
functionCopy(event);
};

/*$($('li[id=copy]')).click(function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log(getSelectedText());

});*/


//When right clicked the context menu must be shown
$(document).bind("contextmenu", function (event) {
    window.selected = getSelectedText(); //globale variabele voor geselecteerde tekst toen context menu verscheen.
    // Avoid the normal context menu
    event.preventDefault();

    // Show new custom contextmenu
    $(".context-menu").finish().toggle(100).

    // The context menu must be shown at the place of the cursor
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {

// If the clicked element is not the menu
    if (!$(e.target).parents(".context-menu").length > 0) {
        // Hide it
        $(".context-menu").hide(100);

    }
});


//from: https://stackoverflow.com/questions/17042997/jquery-copy-selected-text-from-paragraph-to-input-on-button-click-multiple-inpu
// Get user selection text on page
function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}