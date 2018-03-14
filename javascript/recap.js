var box = class {
    constructor(title){
        this.title = title;
        this.draw = function () {
            var node = document.createElement("section");
            node.setAttribute("class", "section");

            var title = document.createElement("h1");
            title.setAttribute("class", "boxTitle");
            var textnode = document.createTextNode(this.title);
            title.appendChild(textnode);
            node.appendChild(title);

            this.addAttributes(node);

            document.body.appendChild(node);
        };
        this.addAttributes = function (node) {

        }
    };
};

class recipe extends box {
    constructor(title, id, text) {
        super(title);
        this.addAttributes = function (node) {


            var article = document.createElement('article');
            article.setAttribute("class", "recipe");
            article.setAttribute("id", id);

            var paragraph = document.createElement('p');
            var textNode = document.createTextNode(text);
            paragraph.appendChild(textNode);
            article.appendChild(paragraph);

            node.appendChild(article);

            var button = document.createElement('button');
            button.setAttribute("id", "showmore");
            button.appendChild(document.createTextNode("Show More"));
            node.appendChild(button);
        };
    }
}







box1 = new box("Ik ben een box");
box1.draw();

recipeChocolate = new recipe(
    "Cherry Chocolate Mousse",  //titel
    "contentchocolate", //id
    "This chocolate mouse consist of 5 delicious ingredients, together making a heavenly mouse that you can not get enough of.\n" +
    "            Made with dark chocolate, double cream, sugar, cherries and eggs. " //text
);
recipeChocolate.draw();

recipeMelon = new recipe(
    "Watermelon and Feta Salad",
    "contentmelon",
    "This chocolate mouse consist of 5 delicious ingredients, together making a heavenly mouse that you can not get enough of.\n" +
    "        Made with dark chocolate, double cream, sugar, cherries and eggs. "
)
recipeMelon.draw();


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
