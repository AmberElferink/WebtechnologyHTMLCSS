$(function() {

    var watermelondata = [[0, 30], //Calories
        [1, 0], //Total Fat
        [2, 0], //Cholesterol
        [3, 1], //Sodium
        [4, 0.112], //Potassium
        [5, 8],  //Carbohydrates
        [6, 0], //Dietary Fiber
        [7, 6], //Sugars
        [8, 1] //Protein
    ];

    var fetadata = [    [0, 264], //Calories
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