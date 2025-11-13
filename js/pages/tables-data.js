//------------- tables-data.js -------------//
var DataTables = function () {

    return {

        basicExample : function () {
            $('#basic-datatables').dataTable({
                "oLanguage": {
                    "sLengthMenu": "<span>_MENU_</span>"
                }
            });
        },

        // Responsive example
        responsiveExample : function () {
            $('#responsive-datatables').dataTable({
                responsive: true,
                "oLanguage": {
                    "sLengthMenu": "<span>_MENU_</span>"
                }
            });   
        },

        // With buttons (ex tabletools)
        buttonsExample : function () {
            var table = $('#buttons-datatables').DataTable({
                "oLanguage": {
                    "sLengthMenu": "<span>_MENU_</span>"
                }
            });
            new $.fn.dataTable.Buttons( table, {
                buttons: [
                    {
                        extend: 'print',
                        exportOptions: {
                            columns: ':visible'
                        }
                    },
                    'colvis',
                    'copyFlash',
                    'csvFlash',
                    'excelFlash',
                    'pdfFlash',
                    // Uncomment it if you want html5 buttons instead of flash buttons.
                    //'copyHtml5',
                    //'excelHtml5',
                    //'csvHtml5',
                    //'pdfHtml5'
                ],
                columnDefs: [{
                    targets: -1,
                    visible: false
                }]
            });
            table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container()));   
        },

        // Vertical scroll example
        verticalScrollExample : function () {
            $('#vetical-scroll-datatables').DataTable({
                "scrollY":        "200px",
                "scrollCollapse": true,
                "paging":         false,
            });            
        },
        
    }

}();

$(document).ready(function() {    
    DataTables.basicExample(); //Activate basicExample
    DataTables.responsiveExample(); //Activate responsiveExample
    DataTables.buttonsExample(); //Activate buttons example
    DataTables.verticalScrollExample(); //Activate vertical scroll example
}); 