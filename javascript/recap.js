var Box = class {
    constructor(title){
        this.title = title;
        this.draw = function () {
            var node = document.createElement("article");
            this.addAttributes(node);
            var textnode = document.createTextNode(this.title);
            node.appendChild(textnode);
            document.body.appendChild(node);
        };
        this.addAttributes = function (node) {
            node.setAttribute("id", "article");
        }
    }
}

class Recipe extends Box {
    constructor(title) {
        super(title);
        this.addAttributes = function (node) {
            node.setAttribute("id", "recipe");
        }
        
        var strchocolate = document.getElementById("contentchocolate");
        var button = document.getElementById("showmore");

        button.onclick =  function() {
            if (strchocolate.className == "open"){
                // string hide
                strchocolate.className = "";
                button.innerHTML = "show more";
            } else {
                strchocolate.className = "open";
                button.innerHTML = "show less";

            }

        };


        var strmelon = document.getElementById("contentmelon");
        var button = document.getElementById("showmoremelon");

        button.onclick =  function() {
            if (strmelon.className == "open"){
                // string hide
                strmelon.className = "";
                button.innerHTML = "show more";
            } else {
                strmelon.className = "open";
                button.innerHTML = "show less";

            }

        };
    }
}

box1 = new Box("Ik ben een box");
box1.draw();

box2 = new Recipe("Ik ben een recept");
box2.draw();



