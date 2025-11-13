// Icons.js basic functions for icons page
var Icons = function () {

    return {

        //Select icon on click and open modal to copy the html markup
        iconSelectSvg : function () {
            var iconBox = $('.icon-box');
            iconBox.click(function(){
                //alert($(this).find('.svg-icon').data('icon'));
                var modal = $('#icon-modal');
                var iconName = $(this).find('.svg-icon').data('icon');
                modal.modal('show');
                icon = '<span class="'+$(this).find('.svg-icon').attr('class')+'" data-icon="'+ iconName +'"></span>';
                input = modal.find('.form-control'); 
                modal.find('.modal-title').html('Your icon - ' + iconName);
                input.val(icon);
                setTimeout(function() {
                    input.focus().select();  
                }, 1000);              
            });
        },

        //Select icon on click and open modal to copy the html markup
        iconSelect : function () {
            var iconBox = $('.icon-box');
            iconBox.click(function(){
                var modal = $('#icon-modal');
                var iconName = $(this).find('i').parent().text();
                modal.modal('show');
                icon = '<i class="'+$(this).find('i').attr('class')+'"></i>';
                input = modal.find('.form-control'); 
                modal.find('.modal-title').html('Your icon : ' + iconName);
                input.val(icon);
                setTimeout(function() {
                    input.focus().select();  
                }, 1000);              
            });
        },

        //provide search handler for icons
        iconSearch : function () {
            $('.icon-search input').val('').quicksearch('.col-md-3', {
                'removeDiacritics': true,
            });
        },        
    }

}();

$(document).ready(function() {    
    Icons.iconSelect(); //Icon select function
    Icons.iconSearch(); //Search function for icons page
}); 