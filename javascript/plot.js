var data = [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]];

var watermelondata = [
    //g per 100g
    [0, 30], //Calories
    [1, 0], //Total Fat
    [2, 0], //Cholesterol
    [3, 1], //Sodium
    [4, 0.112], //Potassium
    [5, 8],  //Carbohydrates
    [6, 0], //Dietary Fiber
    [7, 6], //Sugars
    [8, 1] //Protein
];
var fetadata = [
    [0, 264], //Calories
    [1, 21], //Total Fat
    [2, 0.89], //Cholesterol
    [3, 0.917], //Sodium
    [4, 0.62], //Potassium
    [5, 4],  //Carbohydrates
    [6, 0], //Dietary Fiber
    [7, 4], //Sugars
    [8, 14] //Protein
];
var ticks = [
    [0, "Calories"], //Calories
    [1, "Total Fat"], //Total Fat
    [2, "Cholesterol"], //Cholesterol
    [3, "Sodium"], //Sodium
    [4, "Potassium"], //Potassium
    [5, "Carbohydrates"],  //Carbohydrates
    [6, "Dietary Fiber"], //Dietary Fiber
    [7, "Sugars"], //Sugars
    [8, "Proteins"] //Protein
];


//LET OP: geeft rare zooi omdat 1-8 dubbel is.
var alldata = [watermelondata, fetadata];

var dataset = [{label: "watermelon g/100g",data: alldata }];

var stack = 0,
    bars = true,
    lines = false,
    steps = false;

var options = {
    series: {
        stack: stack,
        lines: {
            show: lines,
            fill: true,
            steps: steps
        },
        bars: {show: true}
    },
        bars: {
            align: "center",
            barWidth: 0.5
        },
    xaxis: {
        axisLabel: "Nutrition",
        axisLabelUseCanvas: true,
        ticks: ticks,
        axisLabelPadding: 10
    },
    yaxis: {
        axisLabel: "g/ 100g",
        max: 100,
        min: 0
    }
};

$(document).ready(function () {
    $.plot($("#plotIngredients"), dataset, options);
});




/*function makePercentage(dataproces) {

for(var i = 0; i < dataproces.length; i++)
{
    for(var j=0; j<dataproces[i].length; j++)
    {
        var datacopy = dataproces[i][j/100];
    }
}
return dataproces;
}*/