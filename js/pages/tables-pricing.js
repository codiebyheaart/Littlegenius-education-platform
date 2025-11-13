//------------- pricing-tables.js -------------//
var PricingTables = function () {

    return {

        animatedPricingTables : function () {
            var tables = $('.pricing-table-animated');
            tables.hover(function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
            });
        }
        
    }

}();

$(document).ready(function() {    
    PricingTables.animatedPricingTables(); //Activate animated pricing tables
}); 