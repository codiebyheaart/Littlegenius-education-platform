//------------- charts-chartjs.js -------------//
var ChartsJs = function () {

    return {

        //colours for charts
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

        //Line chart
        lineChart : function (chartColours) {

            //generate random number for charts
            randNum = function(){
                return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
            }

            var lineData = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        label: "PayPal",
                        fillColor : chartColours.gray_lighter,
                        strokeColor : chartColours.gray,
                        pointColor : chartColours.gray_lighter,
                        data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
                    },
                    {
                        label: "Credit card",
                        fillColor : chartColours.green_lighter,
                        strokeColor : chartColours.green,
                        pointColor : chartColours.green_lighter,
                        data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
                    }
                ]

            }
            var ctx = document.getElementById("line-chartjs").getContext("2d");
            var myLineChart = new Chart(ctx).Line(lineData, {
                responsive: true,
                scaleShowGridLines : true,
                scaleGridLineColor : chartColours.gridColor,
                scaleGridLineWidth : 0.2,
                bezierCurve : false,
                //points
                pointDot : false,
                datasetStroke : true,
                datasetStrokeWidth : 2,
                datasetFill : true,
                //animations
                animation: true,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                //scale
                showScale: true,
                scaleFontFamily: "'Open Sans'",
                scaleFontSize: 13,
                scaleFontStyle: "normal",
                scaleFontColor: "#333",
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });

            return myLineChart;
           
        },

        // Line charts with dots
        lineChartDots : function (chartColours) {

            randNum = function(){
                return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
            }

            var lineDotsData = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        label: "PayPal",
                        fillColor : chartColours.gray_lighter,
                        strokeColor : chartColours.gray,
                        pointColor : chartColours.gray,       
                        pointStrokeColor : "#fff",
                        pointHighlightFill : chartColours.gray_darker,
                        pointHighlightStroke : '#fff',   
                        data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
                    },
                    {
                        label: "Credit card",
                        fillColor : chartColours.green_lighter,
                        strokeColor : chartColours.green,
                        pointColor : chartColours.green,
                        pointStrokeColor : "#fff",
                        pointHighlightFill : chartColours.green_darker,
                        pointHighlightStroke : '#fff',   
                        data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
                    }
                ]

            }
            var ctxDots = document.getElementById("line-dots-chartjs").getContext("2d");
            var myLineDotsChart = new Chart(ctxDots).Line(lineDotsData, {
                responsive: true,
                scaleShowGridLines : true,
                scaleGridLineColor : chartColours.gridColor,
                scaleGridLineWidth : 0.2,
                bezierCurve : false,
                bezierCurveTension : 0.4,
                //points
                pointDot : true,
                pointDotRadius : 4,
                pointDotStrokeWidth : 1,
                pointHitDetectionRadius : 20,
                datasetStroke : true,
                datasetStrokeWidth : 2,
                datasetFill : true,
                //animations
                animation: true,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                //scale
                showScale: true,
                scaleFontFamily: "'Open Sans'",
                scaleFontSize: 13,
                scaleFontStyle: "normal",
                scaleFontColor: "#333",
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });

            return myLineDotsChart;

        },

        // Line chart unfilled
        lineChartUnfilled : function (chartColours) {
            var lineData1 = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        label: "PayPal",
                        fillColor : chartColours.gray_lighter,
                        strokeColor : chartColours.gray,
                        pointColor : chartColours.gray,     
                        data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
                    },
                    {
                        label: "Credit card",
                        fillColor : chartColours.green_lighter,
                        strokeColor : chartColours.green,
                        pointColor : chartColours.green,
                        data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
                    }
                ]

            }
            var ctx1 = document.getElementById("line-unfilled-chartjs").getContext("2d");
            var myLineChart1 = new Chart(ctx1).Line(lineData1, {
                responsive: true,
                scaleShowGridLines : true,
                scaleGridLineColor : chartColours.gridColor,
                scaleGridLineWidth : 0.2,
                bezierCurve : true,
                //points
                pointDot : false,
                datasetFill : false,
                //animations
                animation: true,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                //scale
                showScale: true,
                scaleFontFamily: "'Open Sans'",
                scaleFontSize: 13,
                scaleFontStyle: "normal",
                scaleFontColor: "#333",
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });

            return myLineChart1;
        },

        // Bars chart
        barsChart : function (chartColours) {
            var barChartData = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        fillColor : chartColours.gray,
                        strokeColor : chartColours.gray,
                        highlightFill: chartColours.gray_light,
                        highlightStroke: chartColours.gray_light,
                        data : [3+randNum(),5+randNum(),8+randNum(),13+randNum(),17+randNum(),21+randNum(),23+randNum()]
                    },
                    {
                        fillColor : chartColours.green,
                        strokeColor : chartColours.green,
                        highlightFill: chartColours.green_light,
                        highlightStroke: chartColours.green_light,
                        data : [randNum()-5,randNum()-2,randNum()-4,randNum()-1,randNum()-3,randNum()-2,randNum()-5]
                    }
                ]
            }

            var ctxBar = document.getElementById("bar-chartjs").getContext("2d");
            myBar = new Chart(ctxBar).Bar(barChartData, {
                responsive : true,
                scaleShowGridLines : true,
                scaleGridLineColor : chartColours.gridColor,
                scaleGridLineWidth : 0.2,
                //bar options
                barShowStroke : true,
                barStrokeWidth : 2,
                barValueSpacing : 5,
                barDatasetSpacing : 2,
                //animations
                animation: true,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                //scale
                showScale: true,
                scaleFontFamily: "'Open Sans'",
                scaleFontSize: 13,
                scaleFontStyle: "normal",
                scaleFontColor: "#333",
                scaleBeginAtZero : true,
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });  

            return myBar;
        },

        // Pie chart
        pieChart : function (chartColours) {
            var pieData = [
                {
                    value: 300,
                    color: chartColours.gray_light,
                    highlight: chartColours.gray,
                    label: "SEO"
                },
                {
                    value: 50,
                    color: chartColours.green_light,
                    highlight: chartColours.green,
                    label: "Coding"
                },
                {
                    value: 100,
                    color: chartColours.red_light,
                    highlight: chartColours.red,
                    label: "Hosting"
                },
                {
                    value: 40,
                    color: chartColours.blue_light,
                    highlight: chartColours.blue,
                    label: "Design"
                },
                {
                    value: 120,
                    color: chartColours.gray_dark,
                    highlight: chartColours.gray_darker,
                    label: "Other"
                }

            ];

            var ctxPie = document.getElementById("pie-chartjs").getContext("2d");
            myPie = new Chart(ctxPie).Pie(pieData, {
                responsive : true,
                //pie options
                segmentShowStroke : true,
                segmentStrokeColor : "#fff",
                segmentStrokeWidth : 2,
                percentageInnerCutout : 0, // This is 0 for Pie charts
                //animations
                animation: true,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate : true,
                animateScale : false,
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });

            return myPie;
        },

        // Donut chart
        donutChart : function (chartColours) {

            var donutData = [
                {
                    value: 300,
                    color: chartColours.gray_light,
                    highlight: chartColours.gray,
                    label: "SEO"
                },
                {
                    value: 50,
                    color: chartColours.green_light,
                    highlight: chartColours.green,
                    label: "Coding"
                },
                {
                    value: 100,
                    color: chartColours.red_light,
                    highlight: chartColours.red,
                    label: "Hosting"
                },
                {
                    value: 40,
                    color: chartColours.blue_light,
                    highlight: chartColours.blue,
                    label: "Design"
                },
                {
                    value: 120,
                    color: chartColours.gray_dark,
                    highlight: chartColours.gray_darker,
                    label: "Other"
                }

            ];

            var ctxDonut = document.getElementById("donut-chartjs").getContext("2d");
            myDonut = new Chart(ctxDonut).Doughnut(donutData, {
                responsive : true,
                //donut options
                segmentShowStroke : true,
                segmentStrokeColor : "#fff",
                segmentStrokeWidth : 2,
                percentageInnerCutout : 45, // This is 0 for Pie charts
                //animations
                animation: true,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate : true,
                animateScale : true,
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });

            return myDonut;
                
        },

        // Radar chart
        radarChart : function (chartColours) {

            var radarChartData = {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor : chartColours.gray_lighter,
                        strokeColor : chartColours.gray,
                        pointColor : chartColours.gray,       
                        pointStrokeColor : "#fff",
                        pointHighlightFill : chartColours.gray_darker,
                        pointHighlightStroke : '#fff',   
                        data: [65,59,90,81,56,55,40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor : chartColours.blue_light,
                        strokeColor : chartColours.blue,
                        pointColor : chartColours.blue,       
                        pointStrokeColor : "#fff",
                        pointHighlightFill : chartColours.blue_dark,
                        pointHighlightStroke : '#fff',   
                        data: [28,48,40,19,96,27,100]
                    }
                ]
            };
            
            myRadar = new Chart(document.getElementById("radar-chartjs").getContext("2d")).Radar(radarChartData, {
                responsive: true,
                //radar options
                scaleShowLine : true,
                angleShowLineOut : true,
                scaleShowLabels : false,
                angleLineColor : "rgba(0,0,0,.0.5)",
                angleLineWidth : 1,
                pointDotRadius : 3,
                pointDotStrokeWidth : 1,
                //points
                pointLabelFontFamily : "'Open Sans'",
                pointDot : true,
                //animations
                animation: true,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate : true,
                animateScale : true,
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            }); 

            return myRadar;
        },
        
        // Polar area
        polarArea : function (chartColours) {

            var polarData = [
                {
                    value: 100,
                    color: chartColours.gray_light,
                    highlight: chartColours.gray,
                    label: "SEO"
                },
                {
                    value: 50,
                    color: chartColours.green_light,
                    highlight: chartColours.green,
                    label: "Coding"
                },
                {
                    value: 100,
                    color: chartColours.blue_light,
                    highlight: chartColours.blue,
                    label: "Hosting"
                },
                {
                    value: 40,
                    color: chartColours.red_light,
                    highlight: chartColours.red,
                    label: "Design"
                },
                {
                    value: 120,
                    color: chartColours.gray_dark,
                    highlight: chartColours.gray_darker,
                    label: "Other"
                }

            ];

            var ctxPolar = document.getElementById("polar-chartjs").getContext("2d");
            myPolarArea = new Chart(ctxPolar).PolarArea(polarData, {
                responsive:true,
                //animations
                animation: true,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate : true,
                animateScale : false,
                //tooltips
                showTooltips: true,
                tooltipFillColor: chartColours.gray_dark,
                tooltipFontFamily: "'Montserrat'",
                tooltipFontSize: 13,
                tooltipFontColor: "#fff",
                tooltipYPadding: 8,
                tooltipXPadding: 10,
                tooltipCornerRadius: 2,
                tooltipTitleFontFamily: "'Montserrat'",
            });

            return myPolarArea;
        },
    }

}();

$(document).ready(function() {    
    lineChart = ChartsJs.lineChart(ChartsJs.chartColours()); //Activate line chart
    lineChartDots = ChartsJs.lineChartDots(ChartsJs.chartColours()); //Activate line chart with dots
    lineChartUnfilled = ChartsJs.lineChartUnfilled(ChartsJs.chartColours()); //Activate line chart Unfilled
    barChart = ChartsJs.barsChart(ChartsJs.chartColours()); //Activate bars chart
    pieChart = ChartsJs.pieChart(ChartsJs.chartColours()); //Activate pie chart
    donutChart = ChartsJs.donutChart(ChartsJs.chartColours()); //Activate donut chart
    radarChart = ChartsJs.radarChart(ChartsJs.chartColours()); //Activate radar chart
    polarArea = ChartsJs.polarArea(ChartsJs.chartColours()); //Activate polar Area        

    //Resize charts after toggle button is clicked
    $("#left-sidebar-toggle").on('click', function() {
        lineChart.resize(lineChart.render, true);
        lineChartDots.resize(lineChartDots.render, true);
        lineChartUnfilled.resize(lineChartUnfilled.render, true);
        barChart.resize(barChart.render, true);
        pieChart.resize(pieChart.render, true);
        donutChart.resize(donutChart.render, true);
        radarChart.resize(radarChart.render, true);
        polarArea.resize(polarArea.render, true);
    });

}); 