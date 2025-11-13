//------------- search.js -------------//
var Search = function () {

    return {    

        // Search tab activations
        searchTab : function () {
            $('#myTab a:first').tab('show'); // Select first tab
            //$('#myTab li:eq(2) a').tab('show'); // Select 3 tab
        }
        
    }

}();

$(document).ready(function() {    
    Search.searchTab(); //Activate tab func
}); 

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 