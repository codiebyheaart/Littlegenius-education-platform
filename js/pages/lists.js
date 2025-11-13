//------------- lists.js -------------//
var Nestable = function () {

    return {

        nestableLists : function () {
            var updateOutput = function(e)
            {
                var list   = e.length ? e : $(e.target),
                    output = list.data('output');
                if (window.JSON) {
                    output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
                } else {
                    output.val('JSON browser support required for this demo.');
                }
            };

            // activate Nestable for list 1
            $('#nestable').nestable({
                group: 1
            })
            .on('change', updateOutput);

            // output initial serialised data
            updateOutput($('#nestable').data('output', $('#nestable-output')));

            $('#nestable3').nestable();
        }
        
    }

}();

$(document).ready(function() {    
    Nestable.nestableLists(); //Activate nestableLists
}); 