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
    constructor(title, text, link) {
        super(title);
        this.addAttributes = function (node) {


            var article = document.createElement('article');
            article.setAttribute("class", "closed");

            var a = document.createElement('a');
            a.href =  link;
            a.innerHTML = "link";
            article.appendChild(a);

            var paragraph = document.createElement('p');

            var textNode = document.createTextNode(text);
            paragraph.appendChild(textNode);
            article.appendChild(paragraph);

            node.appendChild(article);

            var button = document.createElement('button');
            button.setAttribute("class", "showmore");
            button.appendChild(document.createTextNode("Show More"));
            node.appendChild(button);
        };
    }
}






// all starter method recaps
recipeMelon = new recipe(
    "Watermelon and Feta Salad",
    "This salad is a great starter for any occasion. With the fresh flavor of watermelon and the creamyness of feta, is this a perfect starter for summer. It takes only 10 minutes!",
    "starters.htm"
);
recipeMelon.draw();

recipePrawn = new recipe(
    "Prawn Cocktail",
    "This second starter is somewhat complicated, with more ingredients. But it takes just minutes to make. It is just so easy.",
    "starters.htm"
);
recipePrawn.draw();

recipePinwheels = new recipe(
    "Cheese and Bacon Pinwheels",
    "This is the third and final starter, but not less exciting. " +
    "The combination of cheese and bacon is amazing and effort it takes is nothing. For more info: ",
    "starters.htm"
);
recipePinwheels.draw();

// all main courses method recaps

recipeGnocchi = new recipe(
    "Gnocchi with Spinach and Ricotta",
    "This easy and fresh Italian dish is so yummy. You will not get enough of it. " +
    "It is also the fastest recipe for a filling meal, with taking only 10 minutes to cook",
    "maincourses.htm"
);
recipeGnocchi.draw();

recipeTortilla = new recipe(
    "Italian Tortilla Wraps",
    "You may think tortillas and Italian topping is a weird combination, but it is actually really dilicious. " +
    "You slab the toppings on the wraps, in four easy steps, and you are ready to enjoy this meal."
);
recipeTortilla.draw();

recipeSoup = new recipe(
    "Pepper Soup",
    "Pepper soup, if you have never had it, now is the time to try it. With just ten minutes and a couple of ingredients ",
    "maincourses.htm"
);
recipeSoup.draw();

// all desserts method recaps

recipeChocolate = new recipe(
    "Cherry Chocolate Mousse",
    "Making chocolate mouse sounds difficult but is really easy, " +
    "It maybe take some more time in advance, but trust me, it is so worth it!",
    "desserts.htm"
);
recipeChocolate.draw();

recipeBlackberry = new recipe(
    "Blackberry Fool",
    "Blackberry fool is a delicious combination of yogurt and fruit. Easy and fresh, it does not get any better. It is also the fastest dessert to make. ",
    "desserts.htm"
);
recipeBlackberry.draw();

recipeBrownie = new recipe(
    "Double Chocolate Brownies",
    "Save the last for best! So this dessert may take the longest but tastes the best!" +
    "50 minutes may seem long, but it is a fun process of melting, stiring and chopping! ",
    "desserts.htm"
);
recipeBrownie.draw();




$(":button").click( function() {
    {
        console.log(this.previousSibling);
        if (this.previousSibling.className == "open") {
            //als het stukje uitleg voor de knop open is, haalt hij class open weg, en sluit hij dus
            this.previousSibling.classList.remove("open");
            this.previousSibling.classList.add("closed");
        } else if(this.previousSibling.className == "closed") {
            //als het stukje uitleg ervoor niet open is, gaat hij open
            this.previousSibling.className = "open";
        }
    }
});
