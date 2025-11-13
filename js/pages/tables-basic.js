//------------- tables-basic.js -------------//
var BasicTables = function () {

    return {

        animateBars : function () {
            //animate bar only when reach the bottom of screen
            var waypoints = $('.animated-bar .progress-bar').waypoint(function(direction) {
                $('.animated-bar .progress-bar').progressbar({display_text: 'fill'}); 
            },{
                offset: '75%'
            });
        },

        // check all rows
        tableCheckAll : function () {
            $('.table').checkAll({
                masterCheckbox: '.check-all',
                otherCheckboxes: '.check',
                highlightElement: {
                    active: true,
                    elementClass: 'tr',
                    highlightClass: 'highlight'
                }
            });    
        },  
        
    }

}();

$(document).ready(function() {    
    BasicTables.animateBars(); //Activate animateBars
    BasicTables.tableCheckAll(); //Activate table checkall plugin
}); 