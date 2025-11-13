/*! jquery.checkall - v1.0.0 - 2015-11-07
* Copyright (c) 2015 SuggeElson; Licensed MIT */
;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "checkAll",
        defaults = {
            masterCheckbox: '.checkAll',
            otherCheckboxes : '.check',
            highlightElement: {
                active: false,
                elementClass: 'panel',
                highlightClass: 'highlight-panel'
            }
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Init plugin
            var obj = $(this.element);
            var chbox = 'input'+this.options.masterCheckbox;
            var checkAll = obj.find(chbox);
            var checkboxes = obj.find('input'+this.options.otherCheckboxes);

            var opts  = this.options;
            
            checkAll.click(function () {    
                checkboxes.prop('checked', this.checked);
                if (opts.highlightRows.active) {
                    if (!checkboxes.is(':checked')) {
                        checkboxes.closest(opts.highlightRows.row).removeClass('highlight');
                    } else {
                        checkboxes.closest(opts.highlightRows.row).addClass('highlight');
                    }                    
                }
                if (opts.highlightElement.active) {
                    if (!checkboxes.is(':checked')) {
                        checkboxes.closest(opts.highlightElement.elementClass).removeClass(opts.highlightElement.highlightClass);
                    } else {
                        checkboxes.closest(opts.highlightElement.elementClass).addClass(opts.highlightElement.highlightClass);
                    }      
                }

            });

            if (opts.highlightElement.active) {
                checkboxes.on('change', function () {
                    if(this.checked) {
                       $(this).closest(opts.highlightElement.elementClass).addClass(opts.highlightElement.highlightClass);
                    } else {
                        $(this).closest(opts.highlightElement.elementClass).removeClass(opts.highlightElement.highlightClass);
                    }
                });
            }
        }
    };

    // plugin wrapper
    $.fn.checkAll = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );