//------------- forms-validation.js -------------//
var formsValdation = function () {

    return {

        //select2 init
        select2 : function () {
            $('.select2').select2({
                theme: "bootstrap",
                placeholder: 'Select state'
            });
        },

        // form validation
        formValidation : function () {
            $("#validate").validate({
                ignore: null,
                ignore: 'input[type="hidden"]',
                errorPlacement: function( error, element ) {
                    var place = element.closest('.input-group');
                    if (!place.get(0)) {
                        place = element;
                        if (place.hasClass('select2')) {
                            place = element.parent().find('.select2-container');
                        }
                    }
                    if (place.get(0).type === 'checkbox') {
                        place = element.parent();
                    }
                    if (error.text() !== '') {
                        place.after(error);
                    }
                },
                errorClass: 'help-block',
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    select2: "required",
                    password: {
                        required: true,
                        minlength: 5
                    },
                    textarea: {
                        required: true,
                        minlength: 10
                    },
                    maxLenght: {
                        required: true,
                        maxlength: 10
                    },
                    rangelenght: {
                      required: true,
                      rangelength: [10, 20]
                    },
                    url: {
                      required: true,
                      url: true
                    },
                    range: {
                      required: true,
                      range: [5, 10]
                    },
                    minval: {
                      required: true,
                      min: 13
                    },
                    maxval: {
                      required: true,
                      max: 13
                    },
                    date: {
                      required: true,
                      date: true
                    },
                    number: {
                      required: true,
                      number: true
                    },
                    digits: {
                      required: true,
                      digits: true
                    },
                    ccard: {
                      required: true,
                      creditcard: true
                    },
                    agree: "required"
                },
                messages: {
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    agree: "Please accept our policy",
                    textarea: "Write some info for you",
                    select2: "Please select something"
                },
                highlight: function( label ) {
                    $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                success: function( label ) {
                    $(label).closest('.form-group').removeClass('has-error').addClass('has-success');
                    label.remove();
                }
            });
        },
        
    }

}();

$(document).ready(function() {    
    formsValdation.select2(); //Activate select2
    formsValdation.formValidation();
}); 