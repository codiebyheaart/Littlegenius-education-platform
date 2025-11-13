//------------- tabs.js -------------//
var Tabs = function () {

    return {

        tabs : function () {
            //------------- Activate tabs -------------//
            $('#myTab a:first').tab('show'); // Select first tab
            $('#myTab1 a:first').tab('show'); // Select first tab
            $('#myTab2 a:first').tab('show'); // Select first tab
            $('#myTab3 a:first').tab('show'); // Select first tab
            $('#myTab4 a:first').tab('show'); // Select first tab
            $('#myTab5 a:first').tab('show'); // Select first tab
            $('#myTab6 a:first').tab('show'); // Select first tab
            $('#myTab7 a:first').tab('show'); // Select first tab
            $('#myTab8 a:first').tab('show'); // Select first tab
            $('#myTab9 a:first').tab('show'); // Select first tab
        },

        tabDrop : function () {

            $('.tabdrop').tabdrop({
                text: '<i class="fa fa-align-justify"></i>'
            }).on("click", function(){
                $(this).tabdrop('layout');
            });
            
        }
        
    }

}();

$(document).ready(function() {    
    Tabs.tabs(); //Activate tabs
    Tabs.tabDrop(); //Activate tabDrop
}); 

$(window).on("load", function(){
    Tabs.tabDrop(); //Activate tabDrop
});

$(window).resize(Tabs.tabDrop());