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

//When right clicked the context menu must be shown
$(document).bind("contextmenu", function (event) {

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

