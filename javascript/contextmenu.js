

//$(document).ready(function(){
   // $("#buttontext").click(function(){
    //   $("#paragraaf").hide();
   // });
//});

//function myFunction() {
 //   document.getElementById("paragraaf").style.color="pink";
//}



$(document).bind("mousedown",function(e){
    if(!$(e.target).parents(".context-menu").lenght>0){
        $(".context-menu").hide(100);
    }
});



window.onclick = hideContextMenu;

var menu = document.getElementById('contextMenu');

var isMenuShown = false;
var selectedElement;

function showContextMenu(e) {
    $(".context-menu").finish().toggle(100) .
    css({
        top:event.pageY+"px",
        left:event.pageY+"px"
    });

    /*contextMenu.style.display = 'block';
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.style.top = e.pageY + 'px';
    return false;*/

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
//TODO: check if right clicked and is mouse event and the
//click is NOT on the context menu itself.
  if (...) {
     event.preventDefault();
         //TODO: get cursor coordinates
       var clickCoords = ...;

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
  contextMenu.style.display = 'none';
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

