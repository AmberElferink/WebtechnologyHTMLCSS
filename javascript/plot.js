$(function() {
//http://bseth99.github.io/projects/canvas/A-flot-interact-labels.html

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

    var fetadata = [[0, 264], //Calories
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

    var checkboxData = [
        ['melon', watermelondata],
        ['feta', fetadata]
    ];

    var alldata = [fetadata];
   // alldata = alldata.concat([watermelondata]);
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
        },
        grid: {
            clickable: true,
            hoverable: true,
            autoHighlight: true
        }

    };

    var hoverTip;

    function toolTipHTML( stat, series) {
        var html = '';
        html += '<div class = "tooltip">';
        html += '<div>';

        if ( series )
            html += '<span class="series">' + series + '</span>';

        html += '<span class="stats">' + stat + '</span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function bindEvents (){
        $('.plotIngredients').on('plothover', function (event, pos, item) {
            var offset = { height: 0, width: 0};
            var display;

            if (item) {
                display = item.series.data[item.dataIndex][1];

                hoverTip = $(toolTipHTML(display, item.series.label));
                $('.plotIngredients').append(hoverTip);

                offset.height = hoverTip.outerHeight();
                offset.width = hoverTip.outerWidth();

                hoverTip.offset({left: item.pageX - offset.width / 2, top: item.pageY - offset.height - 15});
            }

        });
    }

    //TO DO
    $(".plotIngredients").bind("plotclick", function (event, pos, item) {
    if (item) {
        console.log("item no." + item.dataIndex + " in " + item.series.label + " clicked");
    }
    });




    $(document).ready(function () {
        plotChart();
    });

    function plotChart() {
        var plot;
        plot = $.plot(".plotIngredients", alldata, options1);
        bindEvents(plot);
    }

    console.log(document.getElementsByClassName(checkboxData.length));


    $("#Meloncool").hide();

    $($('input[type=checkbox]')).click(function() {
        for(var i = 0; i < checkboxData.length; i++) {
            if (document.getElementsByClassName(checkboxData[0][0])[0].checked) {
                addIngredient(watermelondata);
            }
            else {
                removeIngredient(watermelondata);
            }
        }
    });

    function addIngredient(data) {
        $("#Meloncool").show();
        alldata = alldata.concat([data]);
        plotChart();
    }

    function removeIngredient(data) {
        $("#Meloncool").hide();
        const index = alldata.indexOf(data);
        alldata.splice(index, 1);
        plotChart();
    }


});