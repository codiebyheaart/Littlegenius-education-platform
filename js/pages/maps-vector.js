//------------- maps-vector.js -------------//
var VectorMaps = function () {

    return {

        Colours : function () {
            var Colours = {               
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
            }
            return Colours;
        },

        //World map
        worldMap : function (Colours) {

            var visitsData = {
                "US": 1258,
                "GB": 352,
                "CA": 520,
                "RU": 700,
                "BG": 3,
                "FR": 76,
                "TR": 235,
                "AU": 65,
                "BR": 75,
            };

            $('#world-map').vectorMap({
                map: 'world_mill',
                zoomMin:0.85,
                backgroundColor: '#fff',
                series: {
                    regions: [{
                      values: visitsData,
                      scale: [Colours.blue_lighter, Colours.blue_darker],
                      normalizeFunction: 'polynomial'
                    }]
                },
                    onRegionTipShow: function(e, el, code){
                    el.html(el.html()+' (Visits - '+visitsData[code]+')');
                },
                regionStyle:{
                    initial: {
                        fill: Colours.gray_light,
                        "fill-opacity": 1,
                        stroke: '#fff',
                        "stroke-width": 1,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        fill: Colours.gray
                    },
                    selected: {
                        fill: Colours.green
                    }
                },
            });
        },

        // Top clubs in europe
        topClubs : function (Colours) {

            //Markers
            //http://www.latlong.net/
            var clubs = [
                {name: 'Barca', coords: [41.385064, 2.173403], logo: 'barca', offsets: [0, 2]},
                {name: 'PSG', coords: [48.856614, 2.352222], logo: 'psg', offsets: [0, 2]},
                {name: 'Man United', coords: [53.480759, -2.242631], logo: 'manunt', offsets: [0, 2]},
                {name: 'Real Madrid', coords: [40.416775, -3.703790], logo: 'real', offsets: [0, 2]},
                {name: 'Bayern', coords: [48.790447, 11.497889], logo: 'bayern', offsets: [0, 2]},
                {name: 'Juventus', coords: [45.071875, 7.688359], logo: 'juve', offsets: [0, 2]},
            ];

            $('#top-clubs-map').vectorMap({
                map: 'europe_mill',
                backgroundColor: '#fff',
                regionStyle:{
                    initial: {
                        fill: Colours.gray_light,
                        "fill-opacity": 1,
                        stroke: '#fff',
                        "stroke-width": 1,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        fill: Colours.gray
                    },
                    selected: {
                        fill: Colours.green
                    }
                },
                markers: clubs.map(function(h){ return {name: h.name, latLng: h.coords} }),
                series: {
                    markers: [{
                        attribute: 'image',
                        scale: {
                            'barca': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/2605447.png',
                            'psg': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/52747.png',
                            'manunt': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/52682.png',
                            'real': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/50051.png',
                            'bayern': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/50037.png',
                            'juve': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/50139.png',
                            'manunt': 'http://img.uefa.com/imgml/TP/teams/logos/50x50/52682.png',

                        },
                        values: clubs.reduce(function(p, c, i){ p[i] = c.logo; return p }, {}),
                    }]
                }
            });
        },
        
    }

}();

$(document).ready(function() {    
    VectorMaps.worldMap(VectorMaps.Colours()); //Activate worldMap
    VectorMaps.topClubs(VectorMaps.Colours()); //Activate topClubs
}); 