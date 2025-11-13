//------------- maps-google.js -------------//
var GoogleMaps = function () {

    return {

        //basic map
        basicMap : function () {
            var bmap = new GMaps({
                el: '#gmap',
                lat: -12.043333,
                lng: -77.028333,
                zoomControl : true,
                zoomControlOpt: {
                    style : 'SMALL',
                    position: 'TOP_LEFT'
                },
                panControl : false,
                streetViewControl : false,
                mapTypeControl: false,
                overviewMapControl: false
            });
        },

        //geolocation
        geoLocationMap : function () {
            //geolocation
            var gmap = new GMaps({
                el: '#gmap-geolocation',
                lat: -12.043333,
                lng: -77.028333
            });

            GMaps.geolocate({
                success: function(position){
                  gmap.setCenter(position.coords.latitude, position.coords.longitude);
                },
                error: function(error){
                    
                },
                not_supported: function(){
                   
                },
                always: function(){
                     
                }
            });
        },

        //routes
        routesMap : function () {
            var rmap = new GMaps({
                el: '#gmap-routes',
                lat: -12.043333,
                lng: -77.028333
            });
            rmap.drawRoute({
                origin: [-12.044012922866312, -77.02470665341184],
                destination: [-12.090814532191756, -77.02271108990476],
                travelMode: 'driving',
                strokeColor: '#db5565',
                strokeOpacity: 0.6,
                strokeWeight: 10
            });  
        },

        //street panorama
        streetMap : function () {            
            panorama = GMaps.createPanorama({
                el: '#gmap-street-panorama',
                lat : 42.3455,
                lng : -71.0983
            });       
        }
        
    }

}();

$(document).ready(function() {    
    GoogleMaps.basicMap(); //Activate basicMap
    GoogleMaps.geoLocationMap(); //Activate geoLocation Map
    GoogleMaps.routesMap(); //Activate routes Map
    GoogleMaps.streetMap(); //Activate street Map
}); 