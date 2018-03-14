var Box = class {
    constructor(title){
        this.title = title;
 /*      this.draw = function () {
            var node = document.createElement("h1");
            var textnode = document.createTextNode(this.title);
            node.appendChild(textnode);
            document.body.appendChild(node);

        }; */
    }
}



Box.prototype.draw = function () {
        var node = document.createElement("h1");
        var textnode = document.createTextNode(this.title);
        node.appendChild(textnode);

        var content = document.getElementById("content");
        content.appendChild(node);
}



class Recipe extends Box {

    constructor(title,discription) {
        super(title);
        this.discription = discription;

    }

    /*


        //var title = document.createTextNode(title);
        var div = document.createElement("div");
        var text = document.createTextNode(discribtion);

        div.appendChild(text);

        var string = document.getElementById("content");
        string.innerHTML += "kkmjnjhbg"


        var page = document.getElementById(id);

        var button = document.createElement("button");
        var t = document.createTextNode("show more");
        button.appendChild(t);

        document.body.appenChild(button);

        button.onclick =  function() {
            if (string.className == "open"){
                // string hide
                string.className = "";
                button.innerHTML = "show more";
                string.removeChild(text);

            } else {
                string.className = "open";
                button.innerHTML = "show less";
                string.appendChild(text);
            }

        };



    }*/
}

Recipe.prototype.draw = function() {
    var node = document.createElement("h1");
    var textnode = document.createTextNode(this.title);
    node.appendChild(textnode);

    var text = document.createTextNode(this.discription);

    var content = document.getElementById("content");
    node.appendChild(text);
    discription.appendChild(content);

}


box1 = new Box("Ik ben een box");
box1.draw();

box2 = new Recipe("Cherry Chocolate Mouse", "Cherry Chocolate Mouse is a recipe by Jamie Oliver, " +
    "with lots of deliciousness chocolate and fruit. The perfect combination. ");
box2.draw();

box3 = new Recipe("Watermelon", "This is the describtion",);
box3.draw();

