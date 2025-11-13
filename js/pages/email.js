//------------- email.js -------------//
var Email = function () {

    return {

        //summernote
        textArea : function () {
            $('#email-text-area').summernote({
                height: 200
            });
            $('#email-text-area-compose').summernote({
                height: 200
            });
        }
        
    }

}();

$(document).ready(function() {    
    //toggle left sidebar for more space
    $('body').adminPlugin('leftSidebarToggle', true);

    Email.textArea(); //Activate textArea

    $(window).resize(function() {
        var breakpoint = $('body').adminPlugin('getCurrentBreakpoint');
        if (breakpoint == 'large' || breakpoint == 'laptop' || breakpoint == 'tablet') {
            $('body').adminPlugin('leftSidebarToggle', true);
        }

    });

}); 