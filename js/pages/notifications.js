//------------- notifications.js -------------//
var notifications = function () {

    return {

        //title notification
        titleNotification : function () {

            $('#add-notification').click(function(){
                titlenotifier.add();
            });
            $('#subsctract-notification').click(function(){
                titlenotifier.sub();
            });
            $('#number-notification').click(function(){
                titlenotifier.set(5);
            });
            $('#reset-notification').click(function(){
                titlenotifier.reset();
            });
        },

        // Noty notifications
        notyNotifications : function () {

            //default notice
            $('#default-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-beer"></i> Your beers is prepared.',
                    type: 'default',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });
            });
            
            //info notice
            $('#info-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-info"></i> Your session is expired.',
                    type: 'information',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });
            });

            //success notice
            $('#success-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-check"></i> Your changes are saved!',
                    type: 'success',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });     
            });

            //warning notice
            $('#warning-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Warning!! Server will crash soon.',
                    type: 'warning',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            //error notice
            $('#error-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-close"></i> Something goes wrong try again later!',
                    type: 'error',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            //confirm notice
            $('#confirm-notice').click(function() {
                var n = noty({
                    text: '<i class="glyphicon glyphicon-trash"></i> Do you want to delete this file ?',
                    type: 'confirm',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    },
                    buttons : [
                        {addClass: 'btn btn-sm btn-primary mr5', text: 'Ok', onClick: function ($noty) {
                                // this = button element
                                // $noty = $noty element

                                $noty.close();
                                noty({force: true, theme: 'bootstrapTheme', animation: {
                                    open  : 'animated bounceInRight',
                                    close : 'animated bounceOutRight'
                                }, text: 'You clicked "Ok" button', type: 'success', layout: self.data('layout')});
                            }
                        },
                        {addClass: 'btn btn-sm btn-danger', text: 'Cancel', onClick: function ($noty) {
                            $noty.close();
                                noty({force: true, theme: 'bootstrapTheme', animation: {
                                    open  : 'animated bounceInRight',
                                    close : 'animated bounceOutRight'
                                }, text: 'You clicked "Cancel" button', type: 'error', layout: self.data('layout')});
                            }
                        }
                    ]
                });   
            });

            //sticky notice
            $('#sticky-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-close"></i> Sticky! Click close to dismiss',
                    type: 'information',
                    layout: 'topRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: false, //False for sticky
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            //image notification
            $('#img-notice').click(function() {
                //Capitalize the name
                function capitalise(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
                }
                //ajax call to collect random data
                $.ajax({
                    url: 'http://api.randomuser.me/',
                    dataType: 'json',
                    success: function(data){
                        res = data.results[0].user;
                        var n = noty({
                            text: '<img class="noty-img-avatar" src="'+res.picture.thumbnail+'" alt="'+res.name.first+'"><strong class="noty-text-title">'+ capitalise(res.name.first) + ' ' + capitalise(res.name.last)+'</strong><span class="noty-text">is come Online</span>',
                            type: 'default',
                            layout: 'topRight',
                            theme: 'bootstrapTheme',//Current theme
                            closeWith: ['button'],
                            timeout:5000, // MiliSeconds before notification close
                            animation: {
                                open: 'animated bounceInRight', // Animate.css class names
                                close: 'animated bounceOutRight', // Animate.css class names
                                easing: 'swing', // unavailable - no need
                                speed: 500 // unavailable - no need
                            }
                        });
                    }
                });     
            });

            //left positions
            $('#topleft-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Top Left positon made easy.',
                    type: 'warning',
                    layout: 'topLeft',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInLeft', // Animate.css class names
                        close: 'animated bounceOutLeft', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            $('#centerleft-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Center Left positon made easy.',
                    type: 'warning',
                    layout: 'centerLeft',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInLeft', // Animate.css class names
                        close: 'animated bounceOutLeft', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            $('#bottomleft-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Bottom Left positon made easy.',
                    type: 'success',
                    layout: 'bottomLeft',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInLeft', // Animate.css class names
                        close: 'animated bounceOutLeft', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });
            });

            //center positions
            $('#topcenter-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Top Center positon made easy.',
                    type: 'warning',
                    layout: 'topCenter',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInDown', // Animate.css class names
                        close: 'animated bounceOutUp', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            $('#center-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Center positon made easy.',
                    type: 'warning',
                    layout: 'center',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceIn', // Animate.css class names
                        close: 'animated bounceOut', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });   
            });

            $('#centerbottom-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i>Center bottom positon made easy.',
                    type: 'success',
                    layout: 'bottomCenter',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInUp', // Animate.css class names
                        close: 'animated bounceOutDown', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });
            });

            //right positions
            $('#centerright-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Center right positon made easy.',
                    type: 'error',
                    layout: 'centerRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });
            });  

            $('#bottomright-notice').click(function() {
                var n = noty({
                    text: '<i class="fa fa-exclamation"></i> Bottom Right positon made easy.',
                    type: 'error',
                    layout: 'bottomRight',
                    theme: 'bootstrapTheme',//Current theme
                    closeWith: ['button'],
                    timeout: 5000, // MiliSeconds before notification close
                    animation: {
                        open: 'animated bounceInRight', // Animate.css class names
                        close: 'animated bounceOutRight', // Animate.css class names
                        easing: 'swing', // unavailable - no need
                        speed: 500 // unavailable - no need
                    }
                });
            });  
        },
        
    }

}();

$(document).ready(function() {    
    notifications.titleNotification(); //Activate title notification
    notifications.notyNotifications(); //Activate noty notifications
}); 