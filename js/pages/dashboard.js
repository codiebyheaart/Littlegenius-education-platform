//------------- Dashboard.js -------------//
var Dashboard = function () {

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

        // Match height for some elements
        matchHeight : function () {
            $('.matchSocial').jcolumn({
                delay: 0,
                maxWidth: 767,
            });
        },

        // Count numbers for lead stats
        countTo : function () {
            $('.stats-number').countTo({
                speed: 1000,
                refreshInterval: 50
            });
        },
        // Visitors chart
        visitorsChart : function (chartColours) {        

            //data for charts
            var d1week =[
                [1,10],[2,15],[3,13],[4,16],[5,18],[6,12],[7,8]
            ];
            var d1month =[
                [1,10],[2,15],[3,13],[4,16],[5,18],[6,12],[7,8],
                [8,10],[9,12],[10,13],[11,16],[12,18],[13,15],[14,16],
                [15,13],[16,15],[17,13],[18,16],[19,22],[20,17],[21,16],
                [22,13],[23,15],[24,13],[25,16],[26,18],[27,15],[28,13],
                [29,18],[30,12],[31,8],
            ];
            var d1year =[
                [1,350],[2,400],[3,358],[4,385],[5,425],[6,460],[7,430],[8,489],[9,452],[10,499],[11,520],[12,533]
            ];

            var options = {
                grid: {
                    show: false
                },
                series: {
                    grow: {active:true},
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2.5,
                        steps: false
                    },
                    points: {show:false}
                },
                colors: [chartColours.blue],
                legend: { 
                    show: false
                },
                yaxis: {show: false,  max: 22},
                xaxis: {show: false},
                shadowSize:0,
            };   

            $.plot($("#visitors-chart"), [ 
                {
                    label: "Visits", 
                    data: d1week,   
                    //lines: {fillColor: chartColours.blue_lighter} 
                }
            ], options);
            
            $('#visitors-chart-select input[name="period"]').change(function(){
                var period = $(this).attr('id');
                if (period == 'month') {
                    $.plot($("#visitors-chart"), [ 
                        {
                            label: "Visits", 
                            data: d1month,   
                        }
                    ], options);                   
                }
                if (period == 'week') {
                    $.plot($("#visitors-chart"), [ 
                        {
                            label: "Visits", 
                            data: d1week,   
                        }
                    ], options);
                }
                if (period == 'year') {
                    $.plot($("#visitors-chart"), [ 
                        {
                            label: "Visits", 
                            data: d1year,   
                        }
                    ],{
                        grid: {
                            show: false
                        },
                        series: {
                            grow: {active:true},
                            lines: {
                                show: true,
                                fill: true,
                                lineWidth: 1.5,
                                steps: false
                            },
                            points: {show:false}
                        },
                        colors: [chartColours.blue],
                        legend: { 
                            show: false
                        },
                        yaxis: {show: false,  max: 600},
                        xaxis: {show: false},
                        shadowSize:0,
                    });
                }
            });
           
        },

        //Donut chart for social stats
        donutChartSocial : function (chartColours) {

            Morris.Donut({
                element: 'morris-donut',
                data: [
                    {value: 70, label: 'Facebook'},
                    {value: 15, label: 'Twitter'},
                    {value: 10, label: 'Pinterest'},
                    {value: 5, label: 'Google'}
                ],
                formatter: function (x) { return x + "%"},
                colors: [chartColours.blue_dark, chartColours.blue_light, chartColours.red_dark, chartColours.red],
                resize: true
            }); 
        },

        // Function to show different icons 
        //"clear-day", "clear-night", "partly-cloudy-day",
        //"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
        //"fog"
        showWeatherIcon : function (chartColours, type, selector, theme, night) {
            if( theme == "light") {
                var wIcon = new Skycons({
                    "monochrome": false,
                    "colors" : {
                        "cloud" : "#fff",
                        "snow" : chartColours.blue_lighter,
                        "fog" : chartColours.gray,
                        "moon" : chartColours.yellow_dark,
                        "rain" : chartColours.blue_lighter,
                        "sun" : chartColours.yellow_dark,
                        "leaf": chartColours.blue
                    },
                    "resizeClear": true
                });
            } else if ( theme == "dark") {
                var wIcon = new Skycons({
                    "monochrome": false,
                    "colors" : {
                        "main" : chartColours.gray,
                        "cloud" : chartColours.gray,
                        "snow" : chartColours.blue_light,
                        "fog" : chartColours.gray_light,
                        "rain" : chartColours.blue_light,
                        "sun" : chartColours.yellow_dark,
                        "leaf": chartColours.gray
                    },
                    "resizeClear": true
                });
            }
            if (night) {
                if (type == "clear-day") {
                    wIcon.set(selector, 'clear-night'); 
                }
                if (type == "cloudy") {
                    wIcon.set(selector, 'partly-cloudy-night'); 
                }
                wIcon.set(selector, type);
            } else {
                wIcon.set(selector, type);   
            }
            wIcon.play();
        },

        // Weather app
        WeatherApp : function (cityName) {

            //show the loading animation before api call
            panel = $('.panel.weather-widget');
            $('body').adminPlugin('panelRefreshOverlay', panel, 'init' );
    
            var cityName = cityName;
            var offsetHours = '-3';
            var offsetMinutes = '0';
            var apiKey = '82e02b97105a68afb03f4b5d94cbba22'; //Get own from openweathermap.org
            var urlForecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ cityName + '&units=metric&cnt=4&APPID=' + apiKey;
            var urlToday = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=metric&APPID=' + apiKey;

            //get today
             $.getJSON( urlToday , function(res) {
                
                var city = res.name;
                var country = res.sys.country;

                var datetime = new Date((res.dt*1000)+(offsetHours*3600000)+(offsetMinutes*60000));
                var sunrise = new Date(res.sys.sunrise*1000+(offsetHours*3600000)+(offsetMinutes*60000));
                var sunset = new Date(res.sys.sunset*1000+(offsetHours*3600000)+(offsetMinutes*60000));
                var currentHour = datetime.getUTCHours();
                var sunriseHour = sunrise.getUTCHours();
                var sunsetHour = sunset.getUTCHours();

                // Hour between sunset and sunrise being night time
                var night = false;
                if ( currentHour >= sunsetHour || currentHour <= sunriseHour) {
                    night = true;
                }

                //Update weather
                $('.weather-location').html(city);
                $('.weather-region').html(country);
                $('.current-time').html(moment().format('h:mm a'));
                //$('.weather-date-today').html(Date.today().toString('d, MMMM, yyyy'));
                $('.weather-date-today').html(moment().format('MMMM Do YYYY'));
                $('.weather-today').html(moment().format('dddd'));

                $('.weather-temp').html( Math.round(res.main.temp) +'&deg;c');

                var condition = Dashboard.weatherCodes(res.weather[0].id);

                Dashboard.showWeatherIcon(Dashboard.chartColours(), condition, 'weather-now', 'light', night);
                if (night) {
                    $('#weather').addClass(condition+'-night');    
                } else {
                    $('#weather').addClass(condition);    
                }       

            });
            $.getJSON( urlForecast , function(res) {
                
                //loop forecast
                for (var i = 0; i < 4; i++) {
                    //selectors
                    var fIsel = 'weather-icon-' + (i+1);
                    var fDatesel = '#forecast-date-' + (i+1);
                    var fDegmin = '#forecast-deg-min-'  + (i+1);
                    var fDegmax = '#forecast-deg-max-'  + (i+1);
                    //put values
                    Dashboard.showWeatherIcon(Dashboard.chartColours(), Dashboard.weatherCodes(res.list[i].weather[0].id), fIsel, 'dark');
                    $(fDatesel).html(moment().add((i+1), 'days').format('ddd'));
                    $(fDegmin).html(Math.round(res.list[i].temp.min)+'&deg;');
                    $(fDegmax).html(Math.round(res.list[i].temp.max)+'&deg;');
                };               

            });

            //hide the loader
            setTimeout(function() {
                $('body').adminPlugin('panelRefreshOverlay', panel, 'remove' );
            },0);

        },

        // return weather condition
        weatherCodes : function (code) {
            switch (code) {
                case 200:
                case 201:
                case 202:
                case 210:
                case 211:
                case 212:
                case 221:
                case 230:
                case 231:
                case 232:    
                    return 'sleet';
                    break;
                case 300:
                case 301:
                case 302:
                case 310:
                case 311:
                case 312:
                case 313:
                case 314:
                case 321:
                case 500:
                case 501:
                case 502:
                case 503:
                case 504:
                case 511:
                case 520:
                case 521:
                case 522:
                case 531:
                    return 'rain';
                    break;
                case 600:
                case 601:
                case 602:
                case 615:
                case 616:
                case 620:
                case 621:
                case 622:
                    return 'snow';
                    break;
                case 611:
                case 612:
                    return 'sleet';
                    break;
                case 741:
                    return 'fog';
                    break;
                case 800: 
                    return 'clear-day';
                    break;
                case 801:
                case 802:
                case 803:
                case 804:
                    return 'cloudy';
                    break;
                case 905: 
                    return 'wind';
                    break;
            }
        },

        // Calendar
        showCalendar : function () {
            
            var $calendar = $('#calendar');
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $calendar.fullCalendar({
                header: {
                    left: 'title',
                    right: 'prev,today,next,basicDay,basicWeek,month'
                },
                height: 443,
                timeFormat: 'h:mm',
                titleFormat: {
                    month: 'MMMM YYYY',      // September 2009
                    week: "MMM d YYYY",      // Sep 13 2009
                    day: 'dddd, MMM d, YYYY' // Tuesday, Sep 8, 2009
                },
                eventLimit: true,
                editable: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: new Date(y, m, 1)
                    },
                    {
                        title: 'Long Event',
                        start: new Date(y, m, d-5),
                        end: new Date(y, m, d-2)
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: new Date(y, m, d-3, 16, 0),
                        allDay: false,
                        className: 'fc-event-info',
                        icon: 'fa fa-repeat'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: new Date(y, m, d+4, 16, 0),
                        allDay: false,
                        className: 'fc-event-info',
                        icon: 'fa fa-repeat'
                    },
                    {
                        title: 'Meeting',
                        start: new Date(y, m, d, 10, 30),
                        allDay: false,
                        className: 'fc-event-danger',
                        icon: 'fa fa-clock-o'
                    },
                    {
                        title: 'Lunch',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: false,
                        className: 'fc-event-warning'
                    },
                    {
                        title: 'Birthday Party',
                        start: new Date(y, m, d+1, 19, 0),
                        end: new Date(y, m, d+1, 22, 30),
                        allDay: false,
                        className: 'fc-event-success'
                    },
                    {
                        title: 'Click for Google',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        url: 'http://google.com/',
                        className: 'fc-event-info',
                        icon: 'fa fa-link'
                    }
                ],
                eventRender: function(event, eventElement) {
                    if (event.icon) {
                        eventElement.find("div.fc-content").prepend("<i class='" + event.icon +"'>");
                    }
                }
            });

            //make looks good in bootstrap
            var $calendarbtn = $calendar.find('.fc-button-group > button ');
            $calendarbtn
                .slice(0,3)
                    .wrapAll('<div class="btn-group mr10"></div>')
                    .parent()
                    .after('<br class="hidden"/>');

            $calendarbtn
                .slice(3,6)
                    .wrapAll('<div class="btn-group"></div>');

            $calendarbtn.attr({ 'class': 'btn btn-sm btn-default' });
            
            //force to reajust size on page load because full calendar some time not get right size.
            $(window).load(function(){
                $('#calendar').fullCalendar('render');
            });
        },

        // New user notification
        userNotification : function () {
            //definde sound for notification
            ion.sound({
                sounds: [
                    {
                        name: "water_droplet"
                    }
                ],
                volume: 0.5,
                path: "sounds/",
                preload: true
            });

            function capitalise(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
            setTimeout(function(){ 
                $.ajax({
                    url: 'http://api.randomuser.me/',
                    dataType: 'json',
                    success: function(data){
                        res = data.results[0].user;
                        var n = noty({
                            text: '<img class="noty-img-avatar" src="'+res.picture.thumbnail+'" alt="'+res.name.first+'"><strong class="noty-text-title">'+ capitalise(res.name.first) + ' ' + capitalise(res.name.last)+'</strong><span class="noty-text">is come Online</span>',
                            type: 'default',
                            layout: 'topRight',
                            theme: 'bootstrapTheme',//Current theme
                            closeWith: ['button'],
                            timeout: 5000, // MiliSeconds before notification close
                            animation: {
                                open: 'animated bounceInRight', // Animate.css class names
                                close: 'animated bounceOutRight', // Animate.css class names
                                easing: 'swing', // unavailable - no need
                                speed: 500 // unavailable - no need
                            }
                        });
                        ion.sound.play("water_droplet");
                    }
                });     
            }, 10000);
        },

        // Latest sales map
        latestSalesMap : function (chartColours) {
            $('#latest-sales-map').vectorMap({
                map: 'world_mill',
                backgroundColor: '#fff',
                regionStyle:{
                    initial: {
                        fill: chartColours.gray_light,
                        "fill-opacity": 1,
                        stroke: '#fff',
                        "stroke-width": 1,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        fill: chartColours.gray
                    },
                    selected: {
                        fill: chartColours.green
                    }
                },
                markerStyle: {
                    initial: {
                        fill: chartColours.red,
                        stroke: chartColours.red
                    },
                    hover: {
                        stroke: chartColours.red_darker,
                        "stroke-width": 2,
                        cursor: 'pointer'
                    }
                },
                markers: [
                    //http://www.latlong.net/
                    {latLng: [51.507351, -0.127758], name: 'London'},
                    {latLng: [41.385064, 2.173403], name: 'Barcelona'},
                    {latLng: [40.712784, -74.005941], name: 'New York'},
                    {latLng: [-22.911632, -43.188286], name: 'Rio De Janeiro'},
                    {latLng: [49.282729, -123.120738], name: 'Vancuver'},
                    {latLng: [35.689487, 139.691706], name: 'Tokio'},
                    {latLng: [55.755826, 37.617300], name: 'Moskva'},
                    {latLng: [43.214050, 27.914733], name: 'Varna'},
                    {latLng: [30.044420, 31.235712], name: 'Cairo'}         
                ]
            });
        },

        // Sparklines
        sparklines : function (chartColours) {
            //members
            $("#sparkline-members").sparkline([1,4,2,3,5,7,3,1,4,6,6,9], {
                type: 'line',
                width: '80%',
                height: '30px',
                lineWidth: 2.5,
                lineColor: chartColours.blue,
                fillColor: false,
                spotRadius: 0, //remove spots
            }); 
            //sales
            $("#sparkline-sales").sparkline([1,3,2,4,6,7,4,1,3,5,6,7], {
                type: 'line',
                width: '80%',
                height: '30px',
                lineWidth: 2.5,
                lineColor: chartColours.blue,
                fillColor: false,
                spotRadius: 0, //remove spots
            });   
            //advert
            $("#sparkline-advert").sparkline([2,4,3,2,5,1,5,3,8,6,5,2], {
                type: 'line',
                width: '80%',
                height: '30px',
                lineWidth: 2.5,
                lineColor: chartColours.red,
                fillColor: false,
                spotRadius: 0, //remove spots
            });
            //engagements
            $("#sparkline-eng").sparkline([2,4,3,1,3,3,5,3,5,6,3,1], {
                type: 'line',
                width: '80%',
                height: '30px',
                lineWidth: 2.5,
                lineColor: chartColours.red,
                fillColor: false,
                spotRadius: 0, //remove spots
            });
            //sales
            $("#sparkline-monthly-sales").sparkline([6,8,10,8,7,12,11,6,13,8,6,8,10,11,7,12,11], {
                type: 'bar',
                width: '100%',
                height: '30px',
                barColor: chartColours.blue
            }); 
        },

        easyPieCharts : function (chartColours) {

            var lineWidth = 20; //Line width for pie chart
            var size = 150; //Size for pie chart
            var animateTime = 1500; //Animate time in miliseconds

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
        },

        // animate progress bars
        animateProgressBars : function () {
            var waypoints = $('.animated-bar .progress-bar').waypoint(function(direction) {
                $('.animated-bar .progress-bar').progressbar({display_text: 'fill'}); 
            },{
                offset: '75%'
            });
        }

    }

}();

$(document).ready(function() {    

    Dashboard.matchHeight(); //Match height for some elements
    Dashboard.visitorsChart(Dashboard.chartColours()); //Visitors chart
    Dashboard.donutChartSocial(Dashboard.chartColours()); //Social donut chart
    Dashboard.countTo(); //Count numbers
    Dashboard.WeatherApp('Barcelona'); //Weather app specify your city 
    Dashboard.showCalendar(); //Show calendar
    Dashboard.userNotification(); //Show new user notification
    Dashboard.latestSalesMap(Dashboard.chartColours());//init vector map
    Dashboard.sparklines(Dashboard.chartColours()); //init sparklines
    Dashboard.easyPieCharts(Dashboard.chartColours());//init easy pie charts
    Dashboard.animateProgressBars();//Animate progress bars

    //Resize blocks when left sidebar is toggled
    $("#left-sidebar-toggle").on('click', function() {
        setTimeout(function() {
            Dashboard.matchHeight();
        }, 500);
    });

    //Resize sparklines
    var refreshSparklines;
    $(window).resize(function(e) {
        clearTimeout(refreshSparklines);
        refreshSparklines = setTimeout(Dashboard.sparklines(Dashboard.chartColours()), 500);
        Dashboard.sparklines(Dashboard.chartColours());
    });

}); 