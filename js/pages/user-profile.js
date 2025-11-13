//------------- user-profile.js -------------//
var UserProfile = function () {

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

        // UserPurchase
        UserPurchase : function (chartColours) {
            //Tab
            $('#profileTab a:first').tab('show'); // Select first tab

           // Users purchases line chart
            //declare the data
            var d1 = [];
            //here we add data for chart

            var d1 = [
                [new Date(Date.today().add(0).days()), 17],
                [new Date(Date.today().add(1).days()), 34],
                [new Date(Date.today().add(2).days()), 56],
                [new Date(Date.today().add(3).days()), 12],
                [new Date(Date.today().add(4).days()), 20],
                [new Date(Date.today().add(5).days()), 5],
                [new Date(Date.today().add(6).days()), 6]
            ];

            var chartMinDate = d1[0][0]; //first day
            var chartMaxDate = d1[6][0];//last day

            var tickSize = [1, "day"];
            var tformat = "%a";

            var options = {
                grid: {
                    show: true,
                    aboveData: true,
                    color: chartColours.gridColor,
                    labelMargin: 15,
                    axisMargin: 0, 
                    borderWidth: 0,
                    borderColor:null,
                    minBorderMargin: 5 ,
                    clickable: true, 
                    hoverable: true,
                    autoHighlight: true,
                    mouseActiveRadius: 20
                },
                series: {
                    grow: {active:false},
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 1.5,
                        steps: false
                        },
                    points: {
                        show:true,
                        radius: 4.5,
                        symbol: "circle",
                        fill: true,
                        borderColor: "#fff"
                    }
                },
                legend: { 
                    position: "ne", 
                    margin: [0,-25], 
                    noColumns: 0,
                    labelBoxBorderColor: null,
                    labelFormatter: function(label, series) {
                        // just add some space to labes
                        return '&nbsp;&nbsp;' + label + ' &nbsp;&nbsp;';
                    },
                    width: 30,
                    height: 2
                },
                yaxis: { min: 0, tickSize: 20},
                xaxis: {
                    mode: "time",
                    minTickSize: tickSize,
                    timeformat: tformat,
                    min: chartMinDate,
                    max: chartMaxDate,
                    tickLength: 0
                },
                colors: [chartColours.green_light ],
                shadowSize:0,
                tooltip: true, //activate tooltip
                tooltipOpts: {
                    content: "%s : %y.0" + " $",
                    shifts: {
                        x: -30,
                        y: -50
                    }
                }
            };   

            $.plot($("#user-purchase-chart"), [ 

                {
                    label: "Purchases", 
                    data: d1,
                    lines: {fillColor: chartColours.green_lighter},
                    points: {fillColor: chartColours.green_light} 
                }

            ], options);

        },

        // Donut chart
        DonutChart : function (chartColours) {
            Morris.Donut({
                element: 'morris-donut',
                data: [
                    {value: 45, label: 'Clothes'},
                    {value: 25, label: 'Shoes'},
                    {value: 20, label: 'Jackets'},
                    {value: 10, label: 'Other'}
                ],
                formatter: function (x) { return x + "%"},
                colors: [ chartColours.green, chartColours.blue, chartColours.red, chartColours.gray],
                resize: true
            }); 
        },

        //Radar Chart
        RadarChart : function (chartColours) {
            var radarChartData = {
                labels: ["Shirts", "Pants", "Vests", "Boots", "Sandals", "Watches", "Belts"],
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
                maintainAspectRatio: false,
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

        // Animate progressbar 
        animateProgress : function () {
            //animate bar only when reach the bottom of screen
            $('.animated-bar .progress-bar').waypoint(function(direction) {
                $(this).progressbar({display_text: 'fill'});
            }, { offset: 'bottom-in-view' });
        },
    }

}();

$(document).ready(function() {    
    UserProfile.UserPurchase(UserProfile.chartColours()); //Activate User func
    UserProfile.DonutChart(UserProfile.chartColours()); //Activate Donut chart
    UserProfile.RadarChart(UserProfile.chartColours()); //Activate RadarChart
    UserProfile.animateProgress(); //Activate animateProgress
}); 