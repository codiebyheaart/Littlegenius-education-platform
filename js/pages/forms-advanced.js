//------------- forms-adavnced.js -------------//
var FormsAdvanced = function () {

    return {

        // dual list box
        dualListBox : function () {
           $('.duallistbox').bootstrapDualListbox({
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false,
            });
        },

        //Fancy select 
        fancySelect : function () {
            $('.fancy-select').fancySelect();
            //custom templating
            $('.fancy-select1').fancySelect({
                optionTemplate: function(optionEl) {
                    return optionEl.text() + '<i class="pull-left ' + optionEl.data('icon') + '"></i>';
                }
            });
        },

        //Select 2
        select2 : function () {
            $('.select2').select2({
                theme: "bootstrap",
                placeholder: 'Select state'
            });

            //minumum 2 symbols input
            $('.select2-minimum').select2({
                theme: "bootstrap",
                placeholder: 'Select state',
                minimumInputLength: 2,
            });
        },

        //masked input
        maskedInput : function () {
            $("#mask-phone").mask("(999) 999-9999", {completed:function(){alert("Callback action after complete");}});
            $("#mask-phoneExt").mask("(999) 999-9999? x99999");
            $("#mask-phoneInt").mask("+40 999 999 999");
            $("#mask-date").mask("99/99/9999");
            $("#mask-ssn").mask("999-99-9999");
            $("#mask-productKey").mask("a*-999-a999", { placeholder: "*" });
            $("#mask-eyeScript").mask("~9.99 ~9.99 999");
            $("#mask-percent").mask("99%");
        },

        bootstrapTags : function () {
           //from json
            var citynames = new Bloodhound({
              datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
              queryTokenizer: Bloodhound.tokenizers.whitespace,
              prefetch: {
                url: 'ajax/citynames.json',
                filter: function(list) {
                  return $.map(list, function(cityname) {
                    return { name: cityname }; });
                }
              }
            });
            citynames.initialize();

            $('#json-tags').tagsinput({
                typeaheadjs: {
                    name: 'citynames',
                    displayKey: 'name',
                    valueKey: 'name',
                    source: citynames.ttAdapter()
                }
            });
        },

        spinners : function () {
            $("#basic-spinner").TouchSpin({
                min: 0,
                max: 100
            });
            //with postfix
            $("#postfix-spinner").TouchSpin({
                min: 0,
                max: 100,
                postfix: '%'
            });
            //with prefix
            $("#prefix-spinner").TouchSpin({
                min: 0,
                max: 100,
                prefix: '$'
            });
            //decimal spinner
            $("#decimal-spinner").TouchSpin({
                min: 1,
                max: 10,
                step: 0.1,
                decimals: 2
            });
            //vertical buttons
            $("#vertical-spinner").TouchSpin({
                verticalbuttons: true,
                verticalupclass: 'fa fa-angle-up s12',
                verticaldownclass: 'fa fa-angle-down s12'
            });
        },

        // time Picker
        timePicker : function () {
            $('#default-timepicker').timepicker({
                upArrowStyle: 'fa fa-angle-up',
                downArrowStyle: 'fa fa-angle-down',
            });
            //custom time
            $('#customtime-timepicker').timepicker({
                upArrowStyle: 'fa fa-angle-up',
                downArrowStyle: 'fa fa-angle-down',
                defaultTime: '22:45 AM'
            });
            //custom minute step
            $('#minute-step-timepicker').timepicker({
                upArrowStyle: 'fa fa-angle-up',
                downArrowStyle: 'fa fa-angle-down',
                minuteStep: 30
            });
            //show seconds
            $('#show-seconds-timepicker').timepicker({
                upArrowStyle: 'fa fa-angle-up',
                downArrowStyle: 'fa fa-angle-down',
                showSeconds: true
            });             
        },

        // Color picker
        colorPicker : function () {
            $('#default-colorpicker').colorpicker();
            //as component
            $('#component-colorpicker').colorpicker({
                color: '#1fba5d'
            });
            //horizontal
            $('#horizontal-colorpicker').colorpicker({
                horizontal: true
            });
            //inline
             $('#inline-colorpicker').colorpicker({
                inline: true,
                container: '.inline-picker'
            });
        },

        // Date picker
        datePicker : function () {
            $("#basic-datepicker").datepicker();
            //multiple date
            $("#multiple-datepicker").datepicker({
                multidate: true
            });
            //date range
            $(".input-daterange").datepicker();
            //inline
            $("#inline-datepicker").datepicker();        
        },

        // summernote js
        summerNote : function () {
            $('#summernote').summernote({
                height: 200
            });
        },
        
    }

}();

$(document).ready(function() {    
    FormsAdvanced.dualListBox(); //Activate dual list box
    FormsAdvanced.fancySelect(); //Activate fancy select plugin
    FormsAdvanced.select2(); //Activate fancy select plugin
    FormsAdvanced.maskedInput(); //Activate masked input
    FormsAdvanced.bootstrapTags(); //Activate bootstrap tags
    FormsAdvanced.spinners(); //Activate spinners
    FormsAdvanced.timePicker(); //Activate time picker
    FormsAdvanced.colorPicker(); //Activate color picker plugin
    FormsAdvanced.datePicker(); //Activate color datepicker
    FormsAdvanced.summerNote(); //Activate summerNote
}); 