$(function() {

 //data for the watermelon and feta starter recipe
    var watermelondata = [
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
        [2, 0.089], //Cholesterol
        [3, 0.917], //Sodium
        [4, 0.62], //Potassium
        [5, 4],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 4], //Sugars
        [8, 14] //Protein
    ];

    var redoniondata = [
        [0, 37], //Calories
        [1, 0], //Total Fat
        [2, 0], //Cholesterol
        [3, 0.002], //Sodium
        [4, 0.185], //Potassium
        [5, 7],  //Carbohydrates
        [6, 2], //Dietary Fiber
        [7, 5], //Sugars
        [8, 1] //Protein
    ];
    var mintdata = [
        [0, 0], //Calories
        [1, 1], //Total Fat
        [2, 0], //Cholesterol
        [3, 0], //Sodium
        [4, 0], //Potassium
        [5, 8],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 0], //Sugars
        [8, 3] //Protein
    ];
    var oliveoildata = [
        [0, 883], //Calories
        [1, 100], //Total Fat
        [2, 0], //Cholesterol
        [3, 1], //Sodium
        [4, 0], //Potassium
        [5, 0],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 0], //Sugars
        [8, 0] //Protein
    ];

// data for the pepper soup main course recipe

    var whiteoniondata = [
        [0, 175], //Calories
        [1, 5], //Total Fat
        [2, 0], //Cholesterol
        [3, 0], //Sodium
        [4, 0], //Potassium
        [5, 0],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 0], //Sugars
        [8, 0] //Protein
    ];

    var garlicdata = [
        [0, 236], //Calories
        [1, 13], //Total Fat
        [2, 0.012], //Cholesterol
        [3, 0.002], //Sodium
        [4, 0.6], //Potassium
        [5, 18],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 6], //Sugars
        [8, 0] //Protein
    ];

    var redpepperdata = [
        [0, 25], //Calories
        [1, 0.1], //Total Fat
        [2, 0], //Cholesterol
        [3, 0], //Sodium
        [4, 0], //Potassium
        [5, 4.5],  //Carbohydrates
        [6, 2], //Dietary Fiber
        [7, 4.5], //Sugars
        [8, 0.8] //Protein
    ];

    var yellowpepperdata = [
        [0, 70], //Calories
        [1, 5], //Total Fat
        [2, 0.015], //Cholesterol
        [3, 0.250], //Sodium
        [4, 0], //Potassium
        [5, 2],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 1], //Sugars
        [8, 4] //Protein
    ];

    var sourcremedata = [
        [0, 610], //Calories
        [1, 19], //Total Fat
        [2, 0], //Cholesterol
        [3, 0.180], //Sodium
        [4, 0], //Potassium
        [5, 54],  //Carbohydrates
        [6, 9], //Dietary Fiber
        [7, 9], //Sugars
        [8, 51] //Protein
    ];

    //data for the chocolate mouse dessert recipe

    var chocolatedata = [
        [0, 435], //Calories
        [1, 14], //Total Fat
        [2, 0.033], //Cholesterol
        [3, 0.235], //Sodium
        [4, 0.305], //Potassium
        [5, 32],  //Carbohydrates
        [6, 3], //Dietary Fiber
        [7, 42], //Sugars
        [8, 21] //Protein
    ];

    var cherriesdata = [
        [0, 65], //Calories
        [1, 0], //Total Fat
        [2, 0], //Cholesterol
        [3, 0], //Sodium
        [4, 0], //Potassium
        [5, 15],  //Carbohydrates
        [6, 0.7], //Dietary Fiber
        [7, 15], //Sugars
        [8, 1] //Protein
    ];

    var douclecreamdata = [
        [0, 290], //Calories
        [1, 30], //Total Fat
        [2, 0], //Cholesterol
        [3, 1], //Sodium
        [4, 0], //Potassium
        [5, 3.5],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 3.5], //Sugars
        [8, 2.5] //Protein
    ];

    var eggsdata = [
        [0, 145], //Calories
        [1, 10], //Total Fat
        [2, 0.057], //Cholesterol
        [3, 1], //Sodium
        [4, 0], //Potassium
        [5, 8],  //Carbohydrates
        [6, 1], //Dietary Fiber
        [7, 1], //Sugars
        [8, 24] //Protein
    ];

    var goldensugardata = [
        [0, 396], //Calories
        [1, 0], //Total Fat
        [2, 0], //Cholesterol
        [3, 0], //Sodium
        [4, 0], //Potassium
        [5, 99],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 99], //Sugars
        [8, 0] //Protein
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

    var alldata = [watermelondata, fetadata];

    var options1 = {
        series: {
            stack: 0,
            lines: {
                show: false,
                fill: true,
                steps: false
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
    function plotChart() {
        $.plot(".plotIngredients", alldata, options1);
    }

    plotChart();

    $(".stackControls button").click(function (e) {
        e.preventDefault();
        stack = $(this).text() == "With stacking" ? true : null;
        plotChart();
    });

    $(".graphControls button").click(function (e) {
        e.preventDefault();
        bars = $(this).text().indexOf("Bars") != -1;
        lines = $(this).text().indexOf("Lines") != -1;
        steps = $(this).text().indexOf("steps") != -1;
        plotChart();
    });

    // Add the Flot version string to the footer

    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});