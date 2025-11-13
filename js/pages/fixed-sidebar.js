//------------- fixed-sidebar.js -------------//
var FixedSidebar = function () {

    return {

        //make sidebar fixed
        makeSidebarFixed : function () {
            $('body').adminPlugin('fixedSidebar', true );
        },

        //remove fixed sidebar
        removeSidebarFixed : function () {
            $('body').adminPlugin('fixedSidebar', false );
        },

        // Add lorem paragraph
        loremIpsum : function () {
            $('.lorem').append('<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odio libero, consequatur quidem aperiam facilis ratione facere vero ex nisi consectetur, enim repellat error nesciunt, nemo labore laudantium recusandae magni quod. Error consequuntur excepturi eum sit, facere, cumque, velit esse itaque dolorum necessitatibus minima et rerum ipsa maiores. Iste eligendi quibusdam beatae fugit at error a quae illo sit aliquid accusantium ut veritatis suscipit, nesciunt delectus harum nisi culpa itaque, nostrum, blanditiis enim dolor quos. Laboriosam, explicabo, fuga. Dignissimos veritatis reiciendis sit tenetur excepturi odio veniam, officiis, vero enim incidunt similique id saepe adipisci ipsum assumenda aut eaque nobis nihil!</p>');
        },

        // handleButton clicks
        handleButtons : function () {
            $('#remove-fixed').click(function(event) {
                FixedSidebar.removeSidebarFixed(); 
                FixedSidebar.sidebarStatus();
            });
            $('#add-fixed').click(function(event) {
                FixedSidebar.makeSidebarFixed();
                FixedSidebar.sidebarStatus();
            });
            $('#add-lorem').click(function(event) {
                FixedSidebar.loremIpsum(); 
            });
        },

        // Update Sidebar status
        sidebarStatus : function () {
            if ($('body').hasClass('left-sidebar-fixed')) {
                $('#sidebar-status').text('Fixed');
            } else {
                $('#sidebar-status').text('Not Fixed');
            }
        },
        
    }

}();

$(document).ready(function() {    
    FixedSidebar.sidebarStatus(); //Update sidebar status
    FixedSidebar.handleButtons(); //Handle button clicks in page
}); 