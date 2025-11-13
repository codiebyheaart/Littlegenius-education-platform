//------------- progressbars.js -------------//
var Progressbars = function () {

    return {

        animatedProgress : function () {
            //------------- Animated progress bars -------------//
            //animate bar only when reach the bottom of screen
            var waypoints = $('.animated-bar .progress-bar').waypoint(function(direction) {
                $('.animated-bar .progress-bar').progressbar({display_text: 'fill'}); 
            },{
                offset: '75%'
            });
        },

        // Circliful plugin
        circleProgress : function () {
            //------------- Circfull progress bar -------------//
            //red color
            $('.progress-circular-red').circliful({ backgroundColor: '#E4EBEE',  foregroundColor: '#F59E8E' });
            //blue color
            $('.progress-circular-blue').circliful({ backgroundColor: '#E4EBEE',  foregroundColor: '#AAD5EE' });
            //green color
            $('.progress-circular-green').circliful({ backgroundColor: '#E4EBEE',  foregroundColor: '#95C87E' });
            //orange color
            $('.progress-circular-orange').circliful({ backgroundColor: '#E4EBEE',  foregroundColor: '#F4C140' });
        }
        
    }

}();

$(document).ready(function() {    
    Progressbars.animatedProgress(); //Activate animatedProgress
    Progressbars.circleProgress(); //Activate circleProgress
}); 