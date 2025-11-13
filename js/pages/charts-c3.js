//------------- charts-c3.js -------------//
var C3charts = function () {

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

        lineChart : function (chartColours) {

            var chart = c3.generate({
                bindto: '#line-chart',
                data: {
                    x: 'x',
                    columns: [
                        ['x', '2015-05-11', '2015-05-12', '2015-05-13', '2015-05-14', '2015-05-15', '2015-05-16', '2015-05-17'],
                        ['visits', 25, 35, 50, 28, 17, 22, 16],
                        ['unique', 17, 22, 36, 18, 12, 20, 10]
                    ],
                    colors: {
                        visits: chartColours.green,
                        unique: chartColours.gray,
                    },
                    names: {
                        visits: 'Visits last week',
                        unique: 'Unique visits'
                    },
                    types: {
                        visits: 'spline',
                        unique: 'spline'
                    }
                },
                point: {
                    show:false
                },
                axis : {
                    x : {
                        type : 'timeseries'
                    },
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                padding: {
                  right: 10,
                  left: 35
                }
            });

            return chart;
        },

        lineChartDots : function (chartColours) {

            var chart = c3.generate({
                bindto: '#line-chart-dots',
                data: {
                    x: 'x',
                    columns: [
                        ['x', '2015-05-11', '2015-05-12', '2015-05-13', '2015-05-14', '2015-05-15', '2015-05-16', '2015-05-17'],
                        ['visits', 25, 35, 50, 28, 17, 22, 16],
                        ['unique', 17, 22, 36, 18, 12, 20, 10]
                    ],
                    colors: {
                        visits: chartColours.gray_dark,
                        unique: chartColours.yellow_dark,
                    },
                    names: {
                        visits: 'Visits last week',
                        unique: 'Unique visits'
                    },
                    types: {
                        visits: 'spline',
                        unique: 'spline'
                    }
                },
                point: {
                  r: 4.5
                },
                axis : {
                    x : {
                        type : 'timeseries'
                    },
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                padding: {
                  right: 10,
                  left: 35
                }
            });
            return chart;
        },

        // Area chart
        areaChart : function (chartColours) {

            var chart = c3.generate({
                bindto: '#line-chart-area',
                data: {
                    x: 'x',
                    columns: [
                        ['x', '2015-05-11', '2015-05-12', '2015-05-13', '2015-05-14', '2015-05-15', '2015-05-16', '2015-05-17'],
                        ['visits', 25, 35, 50, 28, 17, 22, 16],
                        ['unique', 17, 22, 36, 18, 12, 20, 10]
                    ],
                    colors: {
                        visits: chartColours.blue,
                        unique: chartColours.red,
                    },
                    names: {
                        visits: 'Visits last week',
                        unique: 'Unique visits'
                    },
                    types: {
                        visits: 'area-spline',
                        unique: 'area-spline'
                    }
                },
                point: {
                  r: 4.5
                },
                axis : {
                    x : {
                        type : 'timeseries'
                    },
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                padding: {
                  right: 10,
                  left: 35
                }
            });  
            return chart;
        },

        // Bar chart
        barChart : function (chartColours) {
            var chart = c3.generate({
                bindto: '#bar-chart',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    type: 'bar',
                    colors: {
                        data1: chartColours.blue,
                        data2: chartColours.red,
                    },
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                bar: {
                    width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }
            });
            return chart;
        },

        // Bar chart
        stackedBarChart : function (chartColours) {
            var chart = c3.generate({
                bindto: '#stacked-bar-chart',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    type: 'bar',
                    colors: {
                        data1: chartColours.gray_lighter,
                        data2: chartColours.green_light,
                    },
                    groups: [
                        ['data1', 'data2']
                    ]
                },
                grid: {
                    y: {
                        lines: [{value:0}]
                    }
                }
            });
            return chart;
        },

        // Pie chart
        pieChart : function (chartColours) {
            var chart = c3.generate({
                bindto: '#pie-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                        ['data3', 160]
                    ],
                    colors: {
                        data1: chartColours.gray,
                        data2: chartColours.green,
                        data3: chartColours.blue,
                    },
                    type : 'pie',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                }
            });
            return chart;
        },

        // Donut charts
        donutChart : function (chartColours) {
            var chart = c3.generate({
                bindto: '#donut-chart',
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                        ['data3', 160]
                    ],
                    colors: {
                        data1: chartColours.gray,
                        data2: chartColours.green,
                        data3: chartColours.blue,
                    },
                    type : 'donut',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Some title"
                }
            }); 
            return chart;  
        },

        // Gauge chart
        gaugeChart : function (chartColours) {
            var chart = c3.generate({
                bindto: '#gauge-chart',
                data: {
                    columns: [
                        ['data', 91.4]
                    ],
                    type: 'gauge',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                gauge: {
                    label: {
                        format: function(value, ratio) {
                            return value;
                        },
                        show: false // to turn off the min/max labels.
                    },
                min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                max: 100, // 100 is default
                units: ' %',
                width: 39 // for adjusting arc thickness
                },
                color: {
                    pattern: [chartColours.green_light, chartColours.green, chartColours.yellow, chartColours.red], // the three color levels for the percentage values.
                    threshold: {
                        unit: 'value', // percentage is default
                        max: 100,
                        values: [30, 50, 70, 100]
                    }
                },
                size: {
                    height: 180
                }
            });

            return chart;
            setTimeout(function () {
                chart.load({
                    columns: [['data', 10]]
                });
            }, 1000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 50]]
                });
            }, 2000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 70]]
                });
            }, 3000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 0]]
                });
            }, 4000);

            setTimeout(function () {
                chart.load({
                    columns: [['data', 100]]
                });
            }, 5000);
        },
        
    }

}();

$(document).ready(function() {    
    lineChart = C3charts.lineChart(C3charts.chartColours()); //Activate Linechart
    lineDotsChart = C3charts.lineChartDots(C3charts.chartColours()); //Activate LinechartDots
    areaChart = C3charts.areaChart(C3charts.chartColours()); //Activate line chart area
    barChart = C3charts.barChart(C3charts.chartColours()); //Activate barchart
    stackedBarChart = C3charts.stackedBarChart(C3charts.chartColours()); //Activate Stacked barchart
    pieChart = C3charts.pieChart(C3charts.chartColours()); //Activate Pie chart
    donutChart = C3charts.donutChart(C3charts.chartColours()); //Activate Donut chart
    gaugeChart = C3charts.gaugeChart(C3charts.chartColours()); //Activate GAuge chart

    //Resize charts after toggle button is clicked
    $("#left-sidebar-toggle").on('click', function() {
        lineChart.resize();
        lineDotsChart.resize();
        areaChart.resize();
        barChart.resize();
        stackedBarChart.resize();
        pieChart.resize();
        donutChart.resize();
        gaugeChart.resize();
    });
}); 