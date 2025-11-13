//------------- boxed-layout.js -------------//
var BoxedLayout = function () {

    return {

        //make boxed layout
        makeBoxedLayout : function () {
            $('body').adminPlugin('addBoxedLayout');
        },

        //remove fixed sidebar
        removeBoxedLayout : function () {
            $('body').adminPlugin('removeBoxedLayout');
        },
        // handleButton clicks
        handleButtons : function () {
            $('#remove-boxed').click(function(event) {
                BoxedLayout.removeBoxedLayout(); 
            });
            $('#add-boxed').click(function(event) {
                BoxedLayout.makeBoxedLayout();
            });
        },
        
    }

}();

$(document).ready(function() {    
    BoxedLayout.handleButtons(); //Activate handle buttons function
    if (!$('body').hasClass('boxed-layout')) {
        $('body').adminPlugin('addBoxedLayout');
    }
}); 