//------------- charts-morris.js -------------//
var MorrisCharts = function () {

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

        lineChartPoints : function (chartColours) {

            var day_data = [
                {"period": "2014-10-01", "Sales": 560, "PayPal": 300},
                {"period": "2014-10-02", "Sales": 340, "PayPal": 276},
                {"period": "2014-10-03", "Sales": 326, "PayPal": 189},
                {"period": "2014-10-04", "Sales": 730, "PayPal": 314},
                {"period": "2014-10-05", "Sales": 145, "PayPal": 140},
                {"period": "2014-10-06", "Sales": 190, "PayPal": 135},
                {"period": "2014-10-07", "Sales": 459, "PayPal": 356},
                {"period": "2014-10-08", "Sales": 567, "PayPal": 501},
                {"period": "2014-10-09", "Sales": 345, "PayPal": 203},
                {"period": "2014-10-10", "Sales": 800, "PayPal": 560}
            ];
            Morris.Line({
                element: 'morris-line-chart',
                data: day_data,
                xkey: 'period',
                ykeys: ['Sales', 'PayPal'],
                labels: ['Sales', 'Paypal'],
                resize: true,
                lineColors: [chartColours.gray, chartColours.green] ,
                pointStrokeColors: ['#fff'],
                lineWidth: 1.5,
                pointSize: 4.5,
                hideHover: 'auto',
                preUnits: '$',
                fillOpacity: '0.6'
            });
        },

        //Line charts without points
        lineChart : function (chartColours) {

            var day_data = [
                {"period": "2014-10-01", "Sales": 560, "PayPal": 300},
                {"period": "2014-10-02", "Sales": 340, "PayPal": 276},
                {"period": "2014-10-03", "Sales": 326, "PayPal": 189},
                {"period": "2014-10-04", "Sales": 730, "PayPal": 314},
                {"period": "2014-10-05", "Sales": 145, "PayPal": 140},
                {"period": "2014-10-06", "Sales": 190, "PayPal": 135},
                {"period": "2014-10-07", "Sales": 459, "PayPal": 356},
                {"period": "2014-10-08", "Sales": 567, "PayPal": 501},
                {"period": "2014-10-09", "Sales": 345, "PayPal": 203},
                {"period": "2014-10-10", "Sales": 800, "PayPal": 560}
            ];

            Morris.Line({
                element: 'morris-line-chart-nopoints',
                data: day_data,
                xkey: 'period',
                ykeys: ['Sales', 'PayPal'],
                labels: ['Sales', 'Paypal'],
                resize: true,
                lineColors: [chartColours.red, chartColours.blue],
                lineWidth: 2,
                pointSize: 0,
                hideHover: 'auto',
                preUnits: '$',
                fillOpacity: '0.6'
            });  
        },

        // Area chart
        areaChart : function (chartColours) {

            Morris.Area({
                element: 'morris-area-chart',
                data: [
                    {x: '2005', y: 135, z: 105},
                    {x: '2006', y: 207, z: 149},
                    {x: '2007', y: 345, z: 201},
                    {x: '2008', y: 256, z: 123},
                    {x: '2009', y: 187, z: 107},
                    {x: '2010', y: 345, z: 212},
                    {x: '2011', y: 456, z: 323},
                    {x: '2012', y: 401, z: 278},
                    {x: '2013', y: 345, z: 111},
                    {x: '2014', y: 412, z: 189}
                ],
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['Y', 'Z'],
                lineWidth: 1.5,
                pointSize: 0,
                resize: true,
                lineColors: [chartColours.gray_light, chartColours.green_light],
                fillOpacity: '0.8',
                behaveLikeLine: true //Set to true to overlay the areas on top of each other instead of stacking them.
            });
        },

        // bar chart
        barChart : function (chartColours) {
            
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [
                    {x: '2005', y: 135, z: 125, a: 117},
                    {x: '2006', y: 207, z: 189, a: 312},
                    {x: '2007', y: 345, z: 301, a: 267},
                    {x: '2008', y: 256, z: 223, a: 167},
                    {x: '2009', y: 187, z: 167, a: 234},
                    {x: '2010', y: 345, z: 312, a: 280},
                    {x: '2011', y: 456, z: 423, a: 350},
                    {x: '2012', y: 401, z: 378, a: 178},
                    {x: '2013', y: 345, z: 311, a: 509},
                    {x: '2014', y: 412, z: 389, a: 602}
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                resize: true,
                barColors: [chartColours.gray, chartColours.blue, chartColours.red],
                fillOpacity: '0.6'
            });
        },

        //Donut chart
        donutChart : function (chartColours) {

            Morris.Donut({
                element: 'morris-donut',
                data: [
                    {value: 70, label: 'Desing'},
                    {value: 15, label: 'Coding'},
                    {value: 10, label: 'SEO'},
                    {value: 5, label: 'Other'}
                ],
                formatter: function (x) { return x + "%"},
                colors: [chartColours.gray_light, chartColours.blue, chartColours.red, chartColours.gray_dark],
                resize: true
            }); 
        },

        // Stakced bar chart
        stackedBarChart : function (chartColours) {
            
            Morris.Bar({
                element: 'morris-bar-stacked',
                data: [
                    {x: '2005', y: 135, z: 125, a: 117},
                    {x: '2006', y: 207, z: 189, a: 312},
                    {x: '2007', y: 345, z: 301, a: 267},
                    {x: '2008', y: 256, z: 223, a: 167},
                    {x: '2009', y: 187, z: 167, a: 234},
                    {x: '2010', y: 345, z: 312, a: 280},
                    {x: '2011', y: 456, z: 423, a: 350},
                    {x: '2012', y: 401, z: 378, a: 178},
                    {x: '2013', y: 345, z: 311, a: 509},
                    {x: '2014', y: 412, z: 389, a: 602}
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                resize: true,
                barColors: [chartColours.gray_light, chartColours.blue, chartColours.red],
                fillOpacity: '0.6',
                stacked: true
            });

        },
        
    }

}();

$(document).ready(function() {    
    MorrisCharts.lineChartPoints(MorrisCharts.chartColours()); //Activate lineChartPoints
    MorrisCharts.lineChart(MorrisCharts.chartColours()); //Activate lineChart
    MorrisCharts.areaChart(MorrisCharts.chartColours()); //Activate areaChart
    MorrisCharts.barChart(MorrisCharts.chartColours()); //Activate barChart
    MorrisCharts.donutChart(MorrisCharts.chartColours()); //Activate donutChart
    MorrisCharts.stackedBarChart(MorrisCharts.chartColours()); //Activate stackedBarchart
}); 