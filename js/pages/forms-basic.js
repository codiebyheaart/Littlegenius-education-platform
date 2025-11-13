//------------- forms-basic.js -------------//
var Forms = function () {

    return {

        checkAllElements : function () {
            //------------- Check all Checkboxes -------------//
            $('#checkAllExample').checkAll({
                masterCheckbox: '.check-all',
                otherCheckboxes: '.check'
            });
        },

        limitText : function () {
            //------------- Max Lenght Textarea -------------//
            $('.limitTextarea').maxlength({
                alwaysShow: true,
                threshold: 10,
                warningClass: "label label-success",
                limitReachedClass: "label label-danger",
                separator: ' of ',
                preText: 'You have ',
                postText: ' chars remaining.',
                validate: true
            });
        },

        elastic : function () {
            //------------- Autosize Text area -------------//
            $('.elastic').autosize();
        }
        
    }

}();

$(document).ready(function() {    
    Forms.checkAllElements(); //Activate checkAllElements function
    Forms.elastic(); //Activate Autosize text area
    Forms.limitText(); //Activate Limit text area
}); 