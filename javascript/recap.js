var Box = class {
    constructor(title){
        this.title = title;
        this.draw = function () {
            var node = document.createElement("h1");
            var textnode = document.createTextNode(this.title);
            node.appendChild(textnode);
            document.body.appendChild(node);

        };
    }
}

class Recipe extends Box {
    constructor(title) {
        super(title);

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
    }
}

box1 = new Box("Ik ben een box");
box1.draw();

box2 = new Recipe("Ik ben een recept");
box2.draw();



