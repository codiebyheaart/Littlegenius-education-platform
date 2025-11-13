//------------- tables-ajax.js -------------//
var AjaxTables = function () {

    return {

        defferLoad : function () {
            $('#table-ajax-defer').DataTable({
                "ajax": "ajax/arrays.txt",
                "deferRender": true,
                "oLanguage": {
                    "sLengthMenu": "<span>_MENU_</span>"
                }
            });
        },

        // Load from object
        objectLoad : function () {
            $('#table-object').DataTable({
                "ajax": "ajax/objects.txt",
                "columns": [
                    { "data": "name" },
                    { "data": "position" },
                    { "data": "office" },
                    { "data": "extn" },
                    { "data": "start_date" },
                    { "data": "salary" }
                ],
                "oLanguage": {
                    "sLengthMenu": "<span>_MENU_</span>"
                }
            });    
        },
        
    }

}();

$(document).ready(function() {    
    AjaxTables.defferLoad(); //Activate deffer Load ajax data tables
    AjaxTables.objectLoad(); //Activate Load from object ajax data tables
}); 