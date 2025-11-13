//------------- charts-other.js -------------//
var ChartElements = function () {

    return {

        chartColours : function () {
            var chartColours = {               
                gray_lighter: '#ECEFF1',
                gray_light: '#CFD8DC',
                gray: '#607D8B',
                gray_dark: '#455A64',
                gray_darker: '#263238',
                blue_lighter: '#E3F2FD',
                blue_light: '#90CAF9',
                blue: '#2196F3',
                blue_dark: '#1976D2',
                blue_darker: '#0D47A1',
                red_lighter: '#FFEBEE',
                red_light: '#FFCDD2',
                red: '#F44336',
                red_dark: '#D32F2F',
                red_darker: '#B71C1C',
                yellow_lighter: '#FFFDE7',   
                yello_light: '#FFF59D',   
                yellow: '#FFEB3B',   
                yellow_dark: '#FBC02D',   
                yellow_darker: '#F57F17',  
                green_lighter: '#E8F5E9',
                green_light: '#A5D6A7',
                green: '#4CAF50',
                green_dark: '#388E3C',
                green_darker: '#1B5E20',

                gridColor: '#bfbfbf' //FAFAFA
            }
            return chartColours;
        },

        easyPieCharts : function (chartColours) {

            var lineWidth = 20; //Line width for pie chart
            var size = 100; //Size for pie chart
            var animateTime = 1500; //Animate time in miliseconds

            $(".easy-pie-chart").easyPieChart({
                barColor: chartColours.gray,
                borderColor: chartColours.gray,
                trackColor: chartColours.gray_lighter,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: lineWidth,
                size: size,
                animate: animateTime
            });
            $(".easy-pie-chart-red").easyPieChart({
                barColor: chartColours.red,
                borderColor: chartColours.red,
                trackColor: chartColours.red_lighter,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: lineWidth,
                size: size,
                animate: animateTime
            });
            $(".easy-pie-chart-green").easyPieChart({
                barColor: chartColours.green,
                borderColor: chartColours.green,
                trackColor: chartColours.green_lighter,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: lineWidth,
                size: size,
                animate: animateTime
            });
            $(".easy-pie-chart-blue").easyPieChart({
                barColor: chartColours.blue,
                borderColor: chartColours.blue,
                trackColor: chartColours.blue_lighter,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: lineWidth,
                size: size,
                animate: animateTime
            });
            $(".easy-pie-chart-yellow").easyPieChart({
                barColor: chartColours.yellow_dark,
                borderColor: chartColours.yellow_dark,
                trackColor: chartColours.yellow_light,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: lineWidth,
                size: size,
                animate: animateTime
            });
        },

        // Sparklines
        sparkLines : function (chartColours) {
            
            //line default
            $("#spark-line").sparkline([2,4,7,9,9,5,3,2,2,4,6,7], {
                type: 'line',
                width: '100%',
                height: '30px',
                lineWidth: 1.5,
                lineColor: chartColours.gray,
                fillColor: chartColours.gray_lighter,
                spotRadius: 0, //remove spots
            });

            //line blue
            $("#spark-line-blue").sparkline([1,4,2,3,5,7,3,1,4,6,6,9], {
                type: 'line',
                width: '100%',
                height: '30px',
                lineWidth: 1.5,
                lineColor: chartColours.blue,
                fillColor: chartColours.blue_lighter,
                spotRadius: 0, //remove spots
            });

            //line red
            $("#spark-line-red").sparkline([2,4,3,2,5,1,5,3,8,6,2,5], {
                type: 'line',
                width: '100%',
                height: '30px',
                lineWidth: 1.5,
                lineColor: chartColours.red,
                fillColor: chartColours.red_lighter,
                spotRadius: 0, //remove spots
            });

            //line green
            $("#spark-line-green").sparkline([1,2,4,3,8,3,2,5,5,7,8,5], {
                type: 'line',
                width: '100%',
                height: '30px',
                lineWidth: 1.5,
                lineColor: chartColours.green,
                fillColor: chartColours.green_lighter,
                spotRadius: 0, //remove spots
            });

            // Bar types
            //==========

            //bar default
            $("#spark-bar").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11], {
                type: 'bar',
                width: '100%',
                height: '30px',
                barColor: chartColours.gray,
            });

            //bar blue
            $("#spark-bar-blue").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11], {
                type: 'bar',
                width: '100%',
                height: '30px',
                barColor: chartColours.blue_light,
            });

            //bar red
            $("#spark-bar-red").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11], {
                type: 'bar',
                width: '100%',
                height: '30px',
                barColor: chartColours.red_light,
            });

            //bar green
            $("#spark-bar-green").sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11], {
                type: 'bar',
                width: '100%',
                height: '30px',
                barColor: chartColours.green_light,
            });

        },

        // Gauges
        gauges : function (chartColours) {
            
            //default colors
            var gauge = new Gauge(document.getElementById('gauge')).setOptions({
                lines: 10, // The number of lines to draw
                angle: 0, // The length of each line
                lineWidth: 0.4, // The line thickness
                pointer: {
                    length: 0.8, // The radius of the inner circle
                    strokeWidth: 0.035, // The rotation offset
                    color: chartColours.gray_light // Fill color
                },
                limitMax: true,   // If true, the pointer will not go past the end of the gauge
                colorStart: chartColours.gray_light,   // Colors
                colorStop: chartColours.gray_light,    // just experiment with them
                strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
                generateGradient: false 
            }); // create sexy gauge!
            gauge.maxValue = 100; // set max gauge value
            gauge.animationSpeed = 50; // set animation speed (32 is default value)
            gauge.set(35); // set actual value

            //red
            var gaugeRed = new Gauge(document.getElementById('gauge-red')).setOptions({
                lines: 10, // The number of lines to draw
                angle: 0, // The length of each line
                lineWidth: 0.4, // The line thickness
                pointer: {
                    length: 0.8, // The radius of the inner circle
                    strokeWidth: 0.035, // The rotation offset
                    color: chartColours.gray_light // Fill color
                },
                limitMax: true,   // If true, the pointer will not go past the end of the gauge
                colorStart: chartColours.red,   // Colors
                colorStop: chartColours.red,    // just experiment with them
                strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
                generateGradient: false 
            }); // create sexy gauge!
            gaugeRed.maxValue = 100; // set max gauge value
            gaugeRed.animationSpeed = 50; // set animation speed (32 is default value)
            gaugeRed.set(45); // set actual value

            //blue
            var gaugeBlue = new Gauge(document.getElementById('gauge-blue')).setOptions({
                lines: 10, // The number of lines to draw
                angle: 0, // The length of each line
                lineWidth: 0.4, // The line thickness
                pointer: {
                    length: 0.8, // The radius of the inner circle
                    strokeWidth: 0.035, // The rotation offset
                    color: chartColours.gray_light // Fill color
                },
                limitMax: true,   // If true, the pointer will not go past the end of the gauge
                colorStart: chartColours.blue,   // Colors
                colorStop: chartColours.blue,    // just experiment with them
                strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
                generateGradient: false 
            }); // create sexy gauge!
            gaugeBlue.maxValue = 100; // set max gauge value
            gaugeBlue.animationSpeed = 50; // set animation speed (32 is default value)
            gaugeBlue.set(55); // set actual value

            //green
            var gaugeGreen = new Gauge(document.getElementById('gauge-green')).setOptions({
                lines: 10, // The number of lines to draw
                angle: 0, // The length of each line
                lineWidth: 0.4, // The line thickness
                pointer: {
                    length: 0.8, // The radius of the inner circle
                    strokeWidth: 0.035, // The rotation offset
                    color: chartColours.gray_light // Fill color
                },
                limitMax: true,   // If true, the pointer will not go past the end of the gauge
                colorStart: chartColours.green,   // Colors
                colorStop: chartColours.green,    // just experiment with them
                strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
                generateGradient: false 
            }); // create sexy gauge!
            gaugeGreen.maxValue = 100; // set max gauge value
            gaugeGreen.animationSpeed = 50; // set animation speed (32 is default value)
            gaugeGreen.set(65); // set actual value

            //With percentage colors
            var gaugePercent = new Gauge(document.getElementById('gauge-percent')).setOptions({
                lines: 10, // The number of lines to draw
                angle: 0, // The length of each line
                lineWidth: 0.4, // The line thickness
                pointer: {
                    length: 0.8, // The radius of the inner circle
                    strokeWidth: 0.035, // The rotation offset
                    color: chartColours.gray_light // Fill color
                },
                limitMax: true,   // If true, the pointer will not go past the end of the gauge
                strokeColor: chartColours.gray_lighter,   // to see which ones work best for you
                percentColors: [[0.0, chartColours.gray_light ], [0.35, chartColours.green], [0.55, chartColours.blue], [1.0, chartColours.red]],
                generateGradient: false 
            }); // create sexy gauge!
            gaugePercent.maxValue = 100; // set max gauge value
            gaugePercent.animationSpeed = 50; // set animation speed (32 is default value)
            gaugePercent.set(10); // set actual value

            //update gauges every 5 sec with random data
            setInterval(function() {
                gauge.set(Math.floor( Math.random()*(100-1+1)+1));
                gaugeBlue.set(Math.floor( Math.random()*(100-1+1)+1));
                gaugeRed.set(Math.floor( Math.random()*(100-1+1)+1));
                gaugeGreen.set(Math.floor( Math.random()*(100-1+1)+1));
                gaugePercent.set(Math.floor( Math.random()*(100-1+1)+1));
            }, 5000);

        },

        // Diagrams
        diagrams : function () {
            $("#diagram").sequenceDiagram({theme: 'hand'});
            $("#diagram1").sequenceDiagram({theme: 'simple'});
        },

        // Water bubble chart
        waterBubble : function (chartColours) {
            $('#waterbubble').waterbubble({
                radius: 50,
                lineWidth: 5,
                data:0.3,
                waterColor: chartColours.blue,
                wave: true,
                animation: false
            });  

            $('#waterbubble-red').waterbubble({
                radius: 50,
                lineWidth: 5,
                data:0.4,
                waterColor: chartColours.red,
                wave: true,
                animation: false
            });  

            $('#waterbubble-gray').waterbubble({
                radius: 50,
                lineWidth: 5,
                data:0.5,
                waterColor: chartColours.gray_light,
                wave: true,
                animation: false
            });  

            $('#waterbubble-green').waterbubble({
                radius: 50,
                lineWidth: 5,
                data:0.6,
                waterColor: chartColours.green,
                wave: true,
                animation: false
            });    

        },
        
    }

}();

$(document).ready(function() {    
    ChartElements.easyPieCharts(ChartElements.chartColours()); //Activate easyPieCharts
    ChartElements.sparkLines(ChartElements.chartColours()); //Activate easyPieCharts
    ChartElements.gauges(ChartElements.chartColours()); //Activate easyPieCharts
    ChartElements.diagrams();// Activate diagrams
    ChartElements.waterBubble(ChartElements.chartColours()); //Activate water bubble

    //Resize sparklines
    var refreshSparklines;
    $(window).resize(function(e) {
        clearTimeout(refreshSparklines);
        refreshSparklines = setTimeout(ChartElements.sparkLines(ChartElements.chartColours()), 500);
        ChartElements.sparkLines(ChartElements.chartColours());
    });
}); 