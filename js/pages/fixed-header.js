//------------- fixed-header.js -------------//
var FixedHeader = function () {

    return {

        //make Header fixed
        makeHeaderFixed : function () {
            $('body').adminPlugin('fixedTopBar', true );
        },

        //remove fixed Header
        removeHeaderFixed : function () {
            $('body').adminPlugin('fixedTopBar', false );
        },

        // Add lorem paragraph
        loremIpsum : function () {
            $('.lorem').append('<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odio libero, consequatur quidem aperiam facilis ratione facere vero ex nisi consectetur, enim repellat error nesciunt, nemo labore laudantium recusandae magni quod. Error consequuntur excepturi eum sit, facere, cumque, velit esse itaque dolorum necessitatibus minima et rerum ipsa maiores. Iste eligendi quibusdam beatae fugit at error a quae illo sit aliquid accusantium ut veritatis suscipit, nesciunt delectus harum nisi culpa itaque, nostrum, blanditiis enim dolor quos. Laboriosam, explicabo, fuga. Dignissimos veritatis reiciendis sit tenetur excepturi odio veniam, officiis, vero enim incidunt similique id saepe adipisci ipsum assumenda aut eaque nobis nihil!</p>');
        },

        // handleButton clicks
        handleButtons : function () {
            $('#remove-fixed').click(function(event) {
                FixedHeader.removeHeaderFixed(); 
                FixedHeader.headerStatus();
            });
            $('#add-fixed').click(function(event) {
                FixedHeader.makeHeaderFixed();
                FixedHeader.headerStatus();
            });
            $('#add-lorem').click(function(event) {
                FixedHeader.loremIpsum(); 
            });
        },

        // Update Header status
        headerStatus : function () {
            if ($('body').hasClass('top-bar-fixed')) {
                $('#header-status').text('Fixed');
            } else {
                $('#header-status').text('Not Fixed');
            }
        },
        
    }

}();

$(document).ready(function() {    
    FixedHeader.headerStatus(); //Update sidebar status
    FixedHeader.handleButtons(); //Handle button clicks in page
}); 