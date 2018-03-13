

//$(document).ready(function(){
   // $("#buttontext").click(function(){
    //   $("#paragraaf").hide();
   // });
//});

//function myFunction() {
 //   document.getElementById("paragraaf").style.color="pink";
//}


/*
$(document).bind("mousedown",function(e){
    if(!$(e.target).parents(".context-menu").length>0){
        $(".context-menu").hide(100);
    }
});



window.onclick = onClickHandler(event);

var menu = document.getElementById('contextMenu');

var isMenuShown = false;
var selectedElement;

function showContextMenu(e) {
    e.preventDefault();
    $(".context-menu").finish().toggle(100) .
    css({
        top:event.pageY+"px",
        left:event.pageY+"px"
    });

    /*contextMenu.style.display = 'block';
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.style.top = e.pageY + 'px';
    return false;*/
/*
}

function toggleContextMenu(event, clickCoords) {
   if (isMenuShown) {
//TODO: set contextmenu to hidden
       hideContextMenu();
    }
  else {
        // TODO: set coordinates of context menu and make it
        // visible. Also remember the original element which
        // has been clicked so you can use it in when a menu
        //item has been chosen

        selectedElement  = ...;
    }
}

function onClickHandler(event) {

//click is NOT on the context menu itself.
  if (event.button===2) {
     event.preventDefault();


       var x = event.clientX;
      var y = event.clientY;

       // TODO: toggle context menu with location
       toggleContextMenu(event, clickCoords)
   }

   // TODO: check if the context menu itself has been clicked.
   if (..) {
      event.preventDefault();
        // TODO: check which menu item has been clicked and take
         //action accordingly. E.g. change the styling of selectedElement:
      // selectedElement.style.fontWeight = "bold";
    }
}

function hideContextMenu(){
  menu.style.display = 'none';
}


//function functionBold() {
 //document.getElementsByClassName("text").style.fontWeight ="bold";
//}

/*function functionItalic(){
    document.getElementbyClassName("text").style.fontWeight = "italic";
}

function functionColorPink() {
    document.getElementByClassName("text").style.color = "pink";
}

function functionColorGreen() {
    document.getElementByClassName("text").style.color = "green";
}

function functionColorBlue() {
    document.getElementByCLassName("text".style.color = "blue";
}*/

// JAVASCRIPT (jQuery)

// Trigger action when the contexmenu is about to be shown
$(document).bind(".context-menu", function (event) {

    // Avoid the real one
    event.preventDefault();

    // Show contextmenu
    $(".context-menu").finish().toggle(100).

    // In the right position (the mouse)
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


// If the menu element is clicked
$(".context-menu li").click(function(){

    // This is the triggered action name
    switch($(this).attr("data-action")) {

        // A case for each action. Your actions here
        case "bold": alert("first"); break;
        case "italic": alert("second"); break;
        case "pink": alert("third"); break;
    }

    // Hide it AFTER the action was triggered
    $(".context-menu").hide(100);
});