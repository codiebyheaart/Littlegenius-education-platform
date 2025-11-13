//------------- gallery.js -------------//
var Gallery = function () {

    return {

        //check all checkboxes
        checkAll : function () {            
            $('#checkAll-active').checkAll({
                masterCheckbox: '.check-all',
                otherCheckboxes: '.check',
                highlightElement: {
                    active: true,
                    elementClass: '.panel',
                    highlightClass: 'highlight-panel'
                }
            });
        },

        // Edit Image
        editImage : function () {
            $('#edit-image').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget) // Button that triggered the modal
                var panel = button.closest('.panel');
                var imageName = panel.find('.panel-title').text();
                var image = panel.find('img').attr("src");
                var modal = $(this)
                modal.find('.modal-title').text(imageName);
                modal.find('img').attr("src", image); 
                $('body').adminPlugin('centerModal');
            });
        },

        // delete Image
        deleteImage : function () {
            $('.delete-image').click(function(e) {
                var panel = $(this).closest('.panel');
                bootbox.confirm({
                    message: "Delete image",
                    title: "Are you sure ?",
                    className: "modal-style2",
                    callback: function(result) {
                        if (result) {
                            panel.remove();
                        }
                    }
                });
            });
        },
        
    }

}();

$(document).ready(function() {    
    Gallery.checkAll(); //Activate checkAll
    Gallery.editImage(); //Activate edit Image
    Gallery.deleteImage(); //Activate deleteImage
}); 

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 