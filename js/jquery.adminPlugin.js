/**
 * A jQuery plugin for our Admin designs.
 * Author: SuggeElson
 * web: www.suggeelson.com
 * version: 1.0.0
 */
;(function($) {
    // Change this to your plugin name.
    var pluginName = 'adminPlugin';
     
    /**
    * Plugin object constructor.
    * Implements the Revealing Module Pattern.
    */
    function Plugin(element, options) {
        // References to DOM and jQuery versions of element.
        var el = element;
        var $el = $(element);
     
        // Extend default options with those supplied by user.
        options = $.extend({}, $.fn[pluginName].defaults, options);
     
        /**
         * Initialize plugin.
         */
        function init() {
            // Add any initialization logic here...
            hook('onInit');
            
            respondjs();//handle responisve breakpoints
            //resizeHandler();
            sidebarNav();// Navigation logic

            hideLeftSidebar();//Hide left sidebar button action
            toggleLeftSidebar();//toggle left sidebar button action
            leftSidebarHover();//when sidebar is hover
            showRightSidebar();//show right sidebar function
            hideRightSidebar();//hide right sidebar function

            panels();//activate panels
            checkboxesAndRadios();//activate checkboxes and radios auto generate

            initScrollbars();//Init panels core functions
            animatedProgressbars(); //Animated progressbars
            accordions(); //Accordions
            chatApp(); //chat app basic functionality

            //responsive tables
            if (options.tables.responsive) {
               responsiveTables();
            }

            //back to top
            if (options.backToTop) {
                backToTop();
            }

            //add scroll to dropdown when is open
            $('.dropdown-menu.with-scroll').parent().on('shown.bs.dropdown', function () {
                scrollarea = $(this).find('.scroll-it');
                setTimeout(function() {
                    addScroll(scrollarea, options.colors.gray_light, '6px', options.colors.gray_light, '5px', false);
                }, 350);
                
            });

            if ($('body').hasClass('left-sidebar-fixed')) {
                addScroll('.left-sidebar .scroll-area');
            }

            if ($('body').hasClass('boxed-layout')) {
                addBoxedLayout();
            }

            // When window is load 
            $(window).load(function(){
                dropdownMenuFix();//center dropdown
                centerModal();//center modal
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from window load ============');
                }                
            });

            // Resize events 
            $(window).resize(function() {
                //center bootstrap modal
                centerModal();
                dropdownMenuFix();
                setTimeout(function() {
                    contentHeight();
                    if (options.debug) {
                        console.log('=========== Called from window resize ============');
                    }                    
                }, 250);
                
            });

            removeLoader();//remove loader
        }
     
        //Handle content height
        function contentHeight() {
            //selectors
            var body = $('body');
            var content = body.find('.page-container>.main-content>.content');
            var sidebar = body.find('.page-container>.left-sidebar-wrapper>.left-sidebar');
            var scrollarea = sidebar.find('.scroll-area');
            var topbar = body.find('.top-bar');
            var footer = body.find('#footer');
            //clear predefined styles
            sidebar.attr('style', '');
            content.attr('style', '');
            //heights
            var viewportHeight = $(window).outerHeight();
            var contentHeight = content.outerHeight();
            var topbarHeight = topbar.outerHeight();
            var sidebarHeight = sidebar.outerHeight();
            var footerHeight = footer.outerHeight();
            //fixed vals
            var sidebarfixed = false;
            var topbarfixed = false;
            var boxedlayout = false;

            if (body.hasClass('left-sidebar-fixed')) {
                sidebarfixed = true;
                scrollarea.css('height', viewportHeight-topbarHeight);
            } 

            if (body.hasClass('top-bar-fixed')) {
                topbarfixed = true;
                sidebarHeight = sidebarHeight + topbarHeight;
            }

            if (body.hasClass('boxed-layout')) {
                boxedlayout = true;
            }

            if (contentHeight > sidebarHeight) {
                
                if (options.debug) {
                    console.log('content: '+contentHeight+' > sidebar: '+sidebarHeight);
                }

                if (viewportHeight < contentHeight ) {
                    
                    if (options.debug) {
                        console.log('viewport: '+viewportHeight+' < content: '+contentHeight);
                    }
  
                    if (!topbarfixed) {
                        if (options.debug) {console.log('1-1');}
                        sidebar.css('min-height', contentHeight + (topbarHeight + footerHeight));
                    }    

                    if (!sidebarfixed) {
                        if (options.debug) {console.log('1-2');}
                        sidebar.css('min-height', contentHeight + topbarHeight);
                    } 

                    if (!topbarfixed && sidebarfixed) {
                        if (options.debug) {console.log('1-3');}
                    }

                    if (topbarfixed && sidebarfixed) {
                        if (options.debug) {console.log('1-4');}
                    }


                } else if (viewportHeight > contentHeight) {

                    if (options.debug) {
                        console.log('viewport: '+viewportHeight+' > content: '+contentHeight);
                    }

                    if (!sidebarfixed) {
                        if (options.debug) {console.log('2-1');}
                        sidebar.css('min-height', viewportHeight - topbarHeight);
                        content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                    } else {
                        if (options.debug) {console.log('2-2');}
                        content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                    }

                    if (!topbarfixed) {
                        if (options.debug) {console.log('2-3');}
                        sidebar.css('min-height', viewportHeight + 14);
                    }

                }

            } else if (contentHeight < sidebarHeight) {

                if (options.debug) {
                    console.log('content: '+contentHeight+' < sidebar: '+sidebarHeight);
                }

                if (viewportHeight > sidebarHeight) {

                    if (options.debug) {
                        console.log('viewport: '+viewportHeight+' > sidebar: '+sidebarHeight);
                    }
                   
                    if (!sidebarfixed) {
                        if (options.debug) {console.log('3-1');}
                        content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                        sidebar.css('min-height', viewportHeight - topbarHeight);
                    } else {
                        if (options.debug) {console.log('3-2');}
                        content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                    } 

                    if (!topbarfixed) {
                        if (options.debug) {console.log('3-3');}
                        content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                        sidebar.css('min-height', viewportHeight);
                    } else {
                        if (options.debug) {console.log('3-4');}
                        content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                    }             
                    
                } else if (viewportHeight < sidebarHeight) {

                    if (options.debug) {
                        console.log('viewport: '+viewportHeight+' < sidebar: '+sidebarHeight);
                    }
                    
                    if (contentHeight < viewportHeight) {
                       
                        if (sidebarfixed) {
                            if (options.debug) {console.log('4-1');}
                            content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                        } else {
                            if (options.debug) {console.log('4-2');}
                            content.css('min-height', viewportHeight - topbarHeight);
                        }

                        if (boxedlayout) {
                            if (options.debug) {console.log('4-3');}
                            content.css('min-height', viewportHeight - (topbarHeight + footerHeight - 14));
                        }

                        if (contentHeight < sidebarHeight) {
                            
                            if (sidebarHeight > viewportHeight) {
                                if (!sidebarfixed) {
                                    if (options.debug) {console.log('4-4');}
                                    content.css('min-height', sidebarHeight - (topbarHeight + footerHeight));
                                } 
                                if (!topbarfixed) {
                                    if (options.debug) {console.log('4-5');}
                                    content.css('min-height', sidebarHeight- footerHeight);
                                }
                            }

                            if (topbarfixed && !sidebarfixed) {
                                if (options.debug) {console.log('4-6');}
                                content.css('min-height', sidebarHeight-topbarHeight);
                            } 

                            if (boxedlayout) {
                                if (options.debug) {console.log('4-7');}
                                content.css('min-height', sidebarHeight - (topbarHeight + footerHeight));
                                if (sidebarfixed) {
                                    content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                                }
                            }
                        }

                    } else {
                        if (options.debug) {console.log('5-1');}     
                        content.css('min-height', sidebarHeight - topbarHeight);
                    }
                    
                    if (!topbarfixed) {
                         if (options.debug) {console.log('6-1');}     
                        sidebar.css('min-height', sidebarHeight+topbarHeight);
                    } 
                    if (sidebarfixed) {
                        if (options.debug) {console.log('7-1');}      
                    }   

                                        
                } else if (viewportHeight == sidebarHeight) {

                    if (options.debug) {
                        console.log('8-1');
                        console.log('viewport: '+viewportHeight+' = sidebar: '+sidebarHeight);
                    }

                    content.css('min-height', viewportHeight - (topbarHeight + footerHeight));
                    
                }

            }

        }

        //get current breakpoint
        function getCurrentBreakpoint () {
            var jRes = jRespond([
                {
                    label: 'phone',
                    enter: 0,
                    exit: 767
                },{
                    label: 'tablet',
                    enter: 768,
                    exit: 1024
                },{
                    label: 'laptop',
                    enter: 1025,
                    exit: 1366
                },{
                    label: 'large',
                    enter: 1367,
                    exit: 10000
                }
            ]);

            return jRes.getBreakpoint();
        }

        //Center modal
        function centerModal () {
            $('.modal').on('show.bs.modal', function (e) {
                $('.modal').each(function(){
                    if($(this).hasClass('in') == false){
                      $(this).show();
                    };
                    var contentHeight = $(window).height() - 60;
                    var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
                    var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

                    $(this).find('.modal-content').css({
                      'max-height': function () {
                        return contentHeight;
                      }
                    });

                    $(this).find('.modal-body').css({
                      'max-height': function () {
                        return contentHeight - (headerHeight + footerHeight);
                      }
                    });

                    $(this).find('.modal-dialog').addClass('modal-dialog-center').css({
                      'margin-top': function () {
                        return -($(this).outerHeight() / 2);
                      },
                      'margin-left': function () {
                        return -($(this).outerWidth() / 2);
                      }
                    });
                    if($(this).hasClass('in') == false){
                      $(this).hide();
                    };
                }); 
            });
        }

        //remove loader
        function removeLoader () {
            var timeOut = 250;
            setTimeout(function() {
                $('body').removeClass('loading').addClass('loaded');
                setTimeout(function() {
                    $('body').removeClass('ovh');
                    $('.preloader').hide();
                }, timeOut);
            }, timeOut);
        }

        //sidebar nav function
        function sidebarNav () {
            var nav = $('.sidebar-nav');

            nav.find('li.active').closest('ul').closest('li').addClass('li-active');

            //open speed
            if (typeof nav.data('open-speed') === 'undefined') {
                var openSpeed = 200;
            } else {var openSpeed = nav.data('open-speed');}
            //close speed
            if (typeof nav.data('close-speed') === 'undefined') {
                var closeSpeed = 200;
            } else {var closeSpeed = nav.data('close-speed');}
            //easing
            if (typeof nav.data('open-speed') === 'undefined') {
                var easing = 'swing';
            } else {var easing = nav.data('easing');}
            //close other subs
            if (typeof nav.data('close-other-subs') === 'undefined') {
                var closeOtherSubs = true;
            } else {var closeOtherSubs = nav.data('close-other-subs');}

            //find links
            var link = nav.find('a').stop( true, true );
            //find subs
            var subs = nav.find('.sub-nav');
            //inject arrows to indicate sub
            subs.each(function(index, el) {
                $(this).prev('a').prepend('<i class="nav-sub-indicator fa fa-angle-left"></i>');
            });
                  
            //click action
            link.click(function(event) {
                _this = $(this);
                
                if (_this.next('.sub-nav').length > 0 && !_this.next('.sub-nav').hasClass('sub-open')) {
                    //close other sub
                    if (closeOtherSubs) {
                       
                        if (!_this.parent('li').parent('.sub-nav').length) {
                            //close expanded sub
                            subexpand = nav.find('.sub-nav.sub-open');
                            subexpand.slideUp(closeSpeed, easing, function() {
                                $(this).removeClass('sub-open');
                                $(this).closest('li').removeClass('sub-open');
                                $(this).prev('a').find('.nav-sub-indicator').removeClass('rotateM90').addClass('rotate0'); 
                            });
                        }                   

                    }

                    _this.next('.sub-nav').slideDown(openSpeed, easing, function() {
                        $(this).addClass('sub-open');
                        contentHeight();
                        if (options.debug) {
                            console.log('=========== Called from link click sub nav ============');
                        }        
                        if ($('body').hasClass('left-sidebar-fixed')) {
                            $('.left-sidebar .scroll-area').getNiceScroll().resize();
                        }                
                    });    
                    _this.closest('li').toggleClass('sub-open');
                    _this.find('.nav-sub-indicator').removeClass('rotate0').addClass('rotateM90');

                }

                if (_this.next('.sub-nav').length && _this.next('.sub-nav').hasClass('sub-open')) {
                    _this.next('.sub-nav').slideUp(closeSpeed, easing, function() {
                        $(this).removeClass('sub-open');
                        _this.closest('li').removeClass('sub-open');
                        contentHeight();
                        if (options.debug) {
                            console.log('=========== Called from link click sub nav close ============');
                        } 
                        if ($('body').hasClass('left-sidebar-fixed')) {
                            $('.left-sidebar .scroll-area').getNiceScroll().resize();
                        }
                    });    
                    _this.find('.nav-sub-indicator').removeClass('rotateM90').addClass('rotate0');                
                }
            });
        }

        //Expand active sub in sidebar navigation
        function expandActiveSub () {
            var nav = $('.sidebar-nav');
            var activeLi = nav.find('li.active');
            if (activeLi.parent('.sub-nav').length) {
                activeSub = activeLi.parent('.sub-nav');
                setTimeout(function() {
                    activeSub.slideDown(1, 'swing', function() {
                        $(this).addClass('sub-open');
                        contentHeight();
                        if (options.debug) {
                            console.log('=========== Called from expandActiveSub slideUp ============');
                        }                         
                    });    
                    activeSub.parent('li').addClass('sub-open');      
                    activeSub.prev('a').find('.nav-sub-indicator').removeClass('rotate0').addClass('rotateM90');
                }, 250);   
            } else {
                setTimeout(function() {
                    contentHeight();
                    if (options.debug) {
                        console.log('=========== Called from expandActiveSub ============');
                    }                     
                }, 500);
            }
            if ($('body').hasClass('left-sidebar-fixed')) {
                $('.left-sidebar .scroll-area').getNiceScroll().resize();
            }
        }

        //Close open subs in sidebar navigation
        function closeOpenSubs () {
            var nav = $('.sidebar-nav');
            var openSubs = nav.find('ul.sub-open');
            if (openSubs.length) {
                openSubs.each(function(index, el) {
                    $(this).slideUp(1, 'swing', function() {
                        $(this).removeClass('sub-open');
                        $(this).parent('li').removeClass('sub-open');
                        contentHeight();
                        if (options.debug) {
                            console.log('=========== Called from closeOpenSubs ============');
                        }                    
                    });    
                    $(this).prev('a').find('.nav-sub-indicator').removeClass('rotateM90').addClass('rotate0');      
                }); 
            } else {
                setTimeout(function() {
                    contentHeight();
                    if (options.debug) {
                        console.log('=========== Called from closeOpenSubs not found ============');
                    }  
                }, 250);
            }
            
        }
     
        //Add scroll to element - ccolor, cwidth, cborder, cbradius, autohide
        function addScroll (el, ccolor, cwidth, cborder, cbradius, autohide) {
            if (!ccolor) {
                ccolor = options.colors.gray_dark;
            }
            if (!cwidth) {
                cwidth = '5px';
            }
            if (!cborder) {
                cborder = '1px solid ' + ccolor;
            } else {
                cborder = '1px solid ' + cborder;
            }
            if (!cbradius) {
                cbradius = '5px';
            }
            if (!autohide) {
                autohide = true;
            }
            $(el).niceScroll({ 
                cursorcolor: ccolor,
                cursorwidth: cwidth, 
                cursorborder: cborder,
                cursorborderradius: cbradius,
                autohide: autohide,
                railpadding: { top: 1, right: 1, left: 1, bottom: 1 }
            });

            $(el).getNiceScroll().resize();
        }

        //remove scroll from element
        function removeScroll (el) {
            $(el).getNiceScroll().remove();
            $(el).attr('style', '');
        }

        //hide left sidebar -state (true, false)
        function leftSidebarHide (state) {
            var breakpoint = getCurrentBreakpoint();
            if (state) {
                $('.left-sidebar').addClass('left-sidebar-hide');
                $('.content').addClass('left-sidebar-hide');
                $('.top-bar').addClass('left-sidebar-hide');
                $('#footer').addClass('left-sidebar-hide');
                closeOpenSubs();
                if (breakpoint == "phone") {
                    setTimeout(function() {
                        $('body').removeClass('offCanvas').addClass('onCanvas');
                    }, 250);
                }
            } else {            
                $('.left-sidebar').removeClass('left-sidebar-hide');
                $('.content').removeClass('left-sidebar-hide');
                $('.top-bar').removeClass('left-sidebar-hide');
                $('#footer').removeClass('left-sidebar-hide');
                if (breakpoint == "phone") {
                    $('body').removeClass('onCanvas').addClass('offCanvas');
                }
                if (breakpoint != "tablet") {
                    expandActiveSub();
                }
            }
        }
       
        //hide left sidebar button action
        function hideLeftSidebar () {
            var btn = $('#left-sidebar-hide');

            btn.click(function(event) {
                if ($('.left-sidebar').hasClass('left-sidebar-hide')) {
                    //unhide
                    leftSidebarHide(false);
                } else {
                    //hide
                    leftSidebarHide(true);
                }
            });
        }

        //toggle left sidebar button action
        function toggleLeftSidebar () {
            var btn = $('#left-sidebar-toggle');

            btn.click(function(event) {
                if ($('.left-sidebar').hasClass('left-sidebar-toggle')) {
                    //untoggle
                    leftSidebarToggle(false);
                } else {
                    //toggle
                    leftSidebarToggle(true);
                }
            });
        }

        //show right sidebar button action
        function showRightSidebar () {
            var btn = $('#show-right-sidebar');

            btn.click(function(event) {
                $('.right-sidebar').removeClass('hide-sidebar');
            });
            quickSearch();
        }

        //hide right sidebar button action
        function hideRightSidebar () {
            var btn = $('.close-right-sidebar');

            btn.click(function(event) {
                $('.right-sidebar').addClass('hide-sidebar');
            });
        }
       
        //toggle left sidebar - toggle(true,false)
        function leftSidebarToggle (toggle) {
            if (toggle) {
                $('.left-sidebar').addClass('left-sidebar-toggle');
                $('.content').addClass('left-sidebar-toggle');
                $('.top-bar').addClass('left-sidebar-toggle');
                $('#footer').addClass('left-sidebar-toggle');
                closeOpenSubs();
            } else {            
                $('.left-sidebar').removeClass('left-sidebar-toggle');
                $('.content').removeClass('left-sidebar-toggle');
                $('.top-bar').removeClass('left-sidebar-toggle');
                $('#footer').removeClass('left-sidebar-toggle');
                expandActiveSub();
            }
        }
        
        //hover effect in left sidebar
        function leftSidebarHover () {
            var sidebar = $('.left-sidebar');

            sidebar.hover(function() {
                if (sidebar.hasClass('left-sidebar-toggle')) {
                    setTimeout(function() {
                        sidebar.addClass('left-sidebar-hover');
                        expandActiveSub();
                    }, 250);                    
                }            
            }, function() {
                if (sidebar.hasClass('left-sidebar-toggle')) {
                    setTimeout(function() {
                        sidebar.removeClass('left-sidebar-hover');
                        closeOpenSubs();
                    }, 250);  
                    setTimeout(function() {
                        contentHeight();
                        if (options.debug) {
                            console.log('=========== Called from leftSidebarHover ============');
                        }                         
                    }, 500);   
                } 
            });
        }  

        //Handle fixed sidebars - fixed (true,false);
        function fixedSidebar (fixed) {
            if (fixed == true) {
                $('body').addClass('left-sidebar-fixed');
                //addscroll
                addScroll('.left-sidebar .scroll-area');
                setTimeout(function() {
                    contentHeight();
                    if (options.debug) {
                        console.log('=========== Called from fixedSidebar true ============');
                    }                     
                }, 250);
            } else  {
                $('body').removeClass('left-sidebar-fixed');
                //close open subs
                closeOpenSubs();
                //remove scroll
                removeScroll('.left-sidebar .scroll-area');                
            }
        }
       
        //Handle fixed top bar - fixed (true,false);
        function fixedTopBar (fixed) {
            if (fixed == true) {
                $('body').addClass('top-bar-fixed');
            }
            if (fixed == false) {
                $('body').removeClass('top-bar-fixed');
            }
            setTimeout(function() {
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from fixedTopBar ============');
                }                 
            }, 250);
        }

        //add boxed layout
        function addBoxedLayout () {
            $('body').addClass('boxed-layout');
            if (!$('.page-container').parent('.container').length) {
                $('.page-container').wrap('<div class="container"></div>');
            }
            if (!$('.top-bar .navbar-default').parent('.container').length) {
                $('.top-bar>.navbar-default').wrap('<div class="container"></div>');
            }
            setTimeout(function() {
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from add boxed layout ============');
                }                 
            }, 250);
        }

        //remove boxed layout
        function removeBoxedLayout () {
            $('body').removeClass('boxed-layout');
            if ($('.page-container').parent('.container')) {
                $('.page-container').unwrap();
            }
            if ($('.top-bar .navbar-default').parent('.container')) {
                $('.top-bar .navbar-default').unwrap();
            }
            setTimeout(function() {
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from remove boxed layout ============');
                }                 
            }, 250);
        }
        
        //Init the custom scrollbars on every page
        function initScrollbars () {
            scrollarea = $('.scroll-area').not('.left-sidebar .scroll-area');
            addScroll(scrollarea, options.colors.gray_lighter, '6px', options.colors.gray_lighter, '5px', false);
        }

        //panels core functions
        function panels () {
            //cache all panels
            var panels = $('.panel');

            panels.each(function(index, el) {
                self = $(this);
                panelHeading = self.find('.panel-heading');
                //add id depend of first positon
                panelsid = 'dash_' + index;
                self.attr('id', panelsid);

                //inject all controls per class in right side
                if(self.hasClass('panelToggle') || self.hasClass('panelClose') || self.hasClass('panelRefresh')) {
                    if(!panelHeading.find('.panel-controls').length) {
                        panelHeading.append('<div class="panel-controls">');
                        panelControls = panelHeading.find('.panel-controls');
                    } else {
                        panelControls = panelHeading.find('.panel-controls');
                    }
                }


                //fullscreen
                if(self.hasClass('panelFullscreen') && !panelControls.find('a.panel-fullscreen').length) {
                    panelControls.append('<a href="#" class="panel-fullscreen"><i class="glyphicon glyphicon-fullscreen"></i></a>');
                }

                //refresh
                if(self.hasClass('panelRefresh') && !panelControls.find('a.panel-refresh').length) {
                    panelControls.append('<a href="#" class="panel-refresh"><i class="glyphicon glyphicon-refresh"></i></a>');
                }

                //Toggle
                if(self.hasClass('panelToggle') && !panelControls.find('a.panel-toggle').length) {
                    if (self.hasClass('panel-closed')) {
                        panelControls.append('<a href="#" class="panel-toggle panel-maximize"><i class="glyphicon glyphicon-menu-up"></i></a>');
                        self.find('.panel-body').slideToggle(0);
                        self.find('.panel-footer').slideToggle(0);
                        self.find('.panel-heading').toggleClass('min');
                    } else {
                        panelControls.append('<a href="#" class="panel-toggle panel-minimize"><i class="glyphicon glyphicon-menu-down"></i>');
                    }
                }
                //close
                if(self.hasClass('panelClose') && !panelControls.find('a.panel-close').length) {
                    panelControls.append('<a href="#" class="panel-close"><i class="glyphicon glyphicon-remove"></i></a>');
                }

            });

            panelControls = panels.find('.panel-controls');
            panelControlsLink = panelControls.find('a');

            //handle clicks
            panelControlsLink.click(function(e) {
                e.preventDefault();
                self = $(this);
                thisIcon = self.find('i');
                thisPanel = self.closest('.panel');
                thisPanelBody = thisPanel.find('.panel-body');
                thisPanelFooter = thisPanel.find('.panel-footer');
                thisPanelHeading = thisPanel.find('.panel-heading');

                //close click
                if (self.hasClass('panel-close')) {
                    setTimeout(function() {thisPanel.remove();}, 500);
                }

                //minimize and maximize click
                if (self.hasClass('panel-toggle')) {
                    //minimize panel
                    self.toggleClass('panel-minimize panel-maximize');
                    thisIcon.toggleClass('glyphicon-menu-up glyphicon-menu-down');
                    thisPanelBody.slideToggle(200);
                    thisPanelFooter.slideToggle(200);
                    thisPanelHeading.toggleClass('min');
                    setTimeout(function() {
                        contentHeight();
                        if (options.debug) {
                            console.log('=========== Called from panel toggle ============');
                        } 
                    }, 400);
                }

                //fullscreen
                if (self.hasClass('panel-fullscreen')) {              
                    if (self.hasClass('full')) {
                        self.removeClass('full');
                        self.closest('.panel').removeClass('panel-fullscreen-mode');
                    } else {
                        self.addClass('full');
                        self.closest('.panel').addClass('panel-fullscreen-mode');
                    }
                }

            });

            //sort options
            if (!$('.main-content > .content').hasClass('notSortable')) {
                
                var sortItem = $('.main-content > .content').find(".sortable-layout");
                var items = sortItem.find(".panelMove");
                var handle = items.find('.panel-heading');
                var href = window.location.href;
                var panelsPosition = "panels_position_"+ href;
                var getKeyPosition = localStorage.getItem(panelsPosition);
                
                if (getKeyPosition) {
                    var jsonPosition = JSON.parse(getKeyPosition);
                    for (var key in jsonPosition.grid) {
                        var changeOrder = sortItem.eq(key);
                        for (var key2 in jsonPosition.grid[key].section) {
                            changeOrder.append($("#" + jsonPosition.grid[key].section[key2].id))
                        }
                    }
                }                
                
                sortItem.sortable({
                    items: items,
                    connectWith: sortItem,
                    handle: handle,
                    placeholder: "panel-placeholder",
                    forcePlaceholderSize: true,
                    helper: 'original',
                    forceHelperSize: true, 
                    cursor: "move",
                    delay: 200,
                    opacity: 0.8,
                    zIndex: 10000,
                    tolerance: "pointer", 
                    iframeFix: false,   
                    revert: true,                       
                    update: function (event, ui) {                        
                        panelSavePosition(ui.item);                                            
                    }
                });

                // reset panel position for page
                $('.reset-layout').click(function(e) {
                    box = bootbox.confirm({
                        message: "Warning!!! This action will reset panels position",
                        title: "Are you sure ?",
                        className: "modal-style2",
                        callback: function(result) {
                            if (result) {
                                localStorage.removeItem(panelsPosition);
                                location.reload(); 
                            }
                        }
                    });          
                    centerModal();  
                    box.modal('show');          
                                    
                });

                panelSavePosition = function (item) {
                    var mainArr = [];
                    sortItem.each(function () {
                        var subArr = [];
                        $(this).children('.panelMove').each(function () {
                            var subObj = {};
                            subObj.id = $(this).attr("id");
                            subArr.push(subObj)
                        });
                        var out = {
                            section: subArr
                        };
                        mainArr.push(out)
                    });
                    var storePositionObj = JSON.stringify({
                        grid: mainArr
                    });
                    if (getKeyPosition != storePositionObj) {
                        localStorage.setItem(panelsPosition, storePositionObj, null)
                    }
                }

            } 
        }

        //add and remove refresh overlay
        function panelRefreshOverlay (el, state) {
            panel = el.closest('.panel');
            if (state == 'init' && !panel.hasClass('refreshing')) {
                //add overlay
                panel.append('<div class="loading-overlay"><div class="loader-inner"><div></div><div></div><div></div></div></div>');
                panel.addClass('refreshing');
            }
            if(state == 'remove' && panel.hasClass('refreshing')) {
                //remove overlay
                panel.find('.loading-overlay').remove();
                panel.removeClass('refreshing');
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from panel refresh ============');
                } 
            }
        }

        //checkboxes and radions
        function checkboxesAndRadios () {
            //collect all checkboxes and radios
            var chboxes = $('input[type=checkbox]').not('.unstyled');
            var radios = $('input[type=radio]').not('.unstyled');

            chboxes.each(function(index) {
                if (typeof $(this).data('class') == "undefined"){
                    chboxClass = "checkbox-custom";
                } else {chboxClass = $(this).data('class');}
                if (typeof $(this).attr('id') == "undefined" ) {
                    chboxId = "chbox"+index;
                    $(this).attr('id', chboxId);
                } else { chboxId = $(this).attr('id'); }
                if (typeof $(this).data('label') == "undefined") {
                    chboxLabeltxt = "";
                } else {  chboxLabeltxt = $(this).data('label'); }
                if (!$(this).parent().hasClass(chboxClass)&& !$(this).parent().hasClass('toggle')) {                  
                    $(this).wrap('<div class="'+ chboxClass +'">');
                    $(this).parent().append('<label for="'+ chboxId +'">'+ chboxLabeltxt +'</label>');
                }
            });

            radios.each(function(index) {
                if (typeof $(this).data('class') == "undefined"){
                    radioClass = "radio-custom";
                } else {radioClass = $(this).data('class');}
                if (typeof $(this).attr('id') == "undefined" ) {
                    radioId = "radio"+index;
                    $(this).attr('id', radioId);
                } else { radioId = $(this).attr('id'); }
                if (typeof $(this).data('label') == "undefined") {
                    radioLabeltxt = "";
                } else {  radioLabeltxt = $(this).data('label'); }
                if (!$(this).parent().hasClass(radioClass)&& !$(this).parent().hasClass('toggle')) {                  
                    $(this).wrap('<div class="'+ radioClass +'">');
                    $(this).parent().append('<label for="'+ radioId +'">'+ radioLabeltxt +'</label>');
                }
            });
        }

        //center dropdown menu
        function dropdownMenuFix () {
            var breakpoint = getCurrentBreakpoint();
            if (breakpoint == 'phone') {
               $("ul.dropdown-menu").each(function(){
                    $(this).removeClass('right');
                    $(this).removeClass('left');
                    var parentWidth = $(this).parent().innerWidth();
                    var menuWidth = $(this).innerWidth();
                    var margin = (parentWidth / 2 ) - (menuWidth / 2);
                    margin = margin + "px";
                    $(this).css("margin-left", margin);
                });
            } else {
                $("ul.dropdown-menu").each(function(){
                    if (!$(this).hasClass('left')) {
                        var parentWidth = $(this).parent().innerWidth();
                        var menuWidth = $(this).innerWidth();
                        var margin = (parentWidth / 2 ) - (menuWidth / 2);
                        margin = margin + "px";
                        $(this).css("margin-left", margin);
                    }
                });
            }

            //excludes dropdown with class if you want to have forms in header and etc.
            $('.dropdown-form').click(function (e){                   
                e.stopPropagation();
            });
        }

        //animated progressbars
        function animatedProgressbars () {
            /*! bootstrap-progressbar v0.8.3 | Copyright (c) 2012-2014 Stephan Groß | MIT license | http://www.minddust.com */
            !function(t){"use strict";var e=function(n,a){this.$element=t(n),this.options=t.extend({},e.defaults,a)};e.defaults={transition_delay:300,refresh_speed:50,display_text:"none",use_percentage:!0,percent_format:function(t){return t+"%"},amount_format:function(t,e){return t+" / "+e},update:t.noop,done:t.noop,fail:t.noop},e.prototype.transition=function(){var n=this.$element,a=n.parent(),s=this.$back_text,r=this.$front_text,i=this.options,o=parseInt(n.attr("data-transitiongoal")),h=parseInt(n.attr("aria-valuemin"))||0,d=parseInt(n.attr("aria-valuemax"))||100,f=a.hasClass("vertical"),p=i.update&&"function"==typeof i.update?i.update:e.defaults.update,u=i.done&&"function"==typeof i.done?i.done:e.defaults.done,c=i.fail&&"function"==typeof i.fail?i.fail:e.defaults.fail;if(isNaN(o))return void c("data-transitiongoal not set");var l=Math.round(100*(o-h)/(d-h));if("center"===i.display_text&&!s&&!r){this.$back_text=s=t("<span>").addClass("progressbar-back-text").prependTo(a),this.$front_text=r=t("<span>").addClass("progressbar-front-text").prependTo(n);var g;f?(g=a.css("height"),s.css({height:g,"line-height":g}),r.css({height:g,"line-height":g}),t(window).resize(function(){g=a.css("height"),s.css({height:g,"line-height":g}),r.css({height:g,"line-height":g})})):(g=a.css("width"),r.css({width:g}),t(window).resize(function(){g=a.css("width"),r.css({width:g})}))}setTimeout(function(){var t,e,c,g,_;f?n.css("height",l+"%"):n.css("width",l+"%");var x=setInterval(function(){f?(c=n.height(),g=a.height()):(c=n.width(),g=a.width()),t=Math.round(100*c/g),e=Math.round(h+c/g*(d-h)),t>=l&&(t=l,e=o,u(n),clearInterval(x)),"none"!==i.display_text&&(_=i.use_percentage?i.percent_format(t):i.amount_format(e,d,h),"fill"===i.display_text?n.text(_):"center"===i.display_text&&(s.text(_),r.text(_))),n.attr("aria-valuenow",e),p(t,n)},i.refresh_speed)},i.transition_delay)};var n=t.fn.progressbar;t.fn.progressbar=function(n){return this.each(function(){var a=t(this),s=a.data("bs.progressbar"),r="object"==typeof n&&n;s||a.data("bs.progressbar",s=new e(this,r)),s.transition()})},t.fn.progressbar.Constructor=e,t.fn.progressbar.noConflict=function(){return t.fn.progressbar=n,this}}(window.jQuery);
        }

        //accordions
        function accordions() {
            var acc = $('.accordion'); //get all accordions
            acc.collapse();//activate it

            //function to put icons
            accPutIcon = function  () {
                acc.each(function(index) {
                   accExp = $(this).find('.panel-collapse.in');
                   accExp.prev('.panel-heading').addClass('content-in').find('a.accordion-toggle').append('<i class="' + options.accordion.toggleIcon + '"></i>');
                   accNor = $(this).find('.panel-collapse').not('.panel-collapse.in');
                   accNor.prev('.panel-heading').find('a.accordion-toggle').append('<i class="' + options.accordion.collapseIcon + '"></i>');
                });
            }

            //function to update icons
            accUpdIcon = function  () {
                acc.each(function(index) {
                   accExp = $(this).find('.panel-collapse.in');
                   accExp.prev('.panel-heading').find('i').remove();
                   accExp.prev('.panel-heading').addClass('content-in').find('a.accordion-toggle').append('<i class="' + options.accordion.toggleIcon + '"></i>');

                   accNor = $(this).find('.panel-collapse').not('.panel-collapse.in');
                   accNor.prev('.panel-heading').find('i').remove();
                   accNor.prev('.panel-heading').removeClass('content-in').find('a.accordion-toggle').append('<i class="' + options.accordion.collapseIcon + '"></i>');
                });
            }

            accPutIcon();

            $('.accordion').on('shown.bs.collapse', function () {
                accUpdIcon();
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from accordion shown ============');
                }   
            }).on('hidden.bs.collapse', function () {
                accUpdIcon();
                contentHeight();
                if (options.debug) {
                    console.log('=========== Called from accordion hiden ============');
                } 
            });
        }

        //responsive tables
        function responsiveTables () {
            var tables = $('.table').not('.non-responsive');
            tables.each(function( index ) {
                $(this).wrap('<div class="table-responsive" />');
                if(options.tables.customscroll) {
                    scrollarea = $("div.table-responsive");
                    addScroll(scrollarea, options.colors.gray_lighter, '6px', options.colors.gray_lighter, '5px', false);
                }
            });
        }

        //back to top
        function backToTop () {
            $(window).scroll(function(){
                if($(window).scrollTop() > 200){
                    $("#back-to-top").fadeIn(200);
                } else{
                    $("#back-to-top").fadeOut(200);
                }
            });
            
            $('#back-to-top, .back-to-top').click(function() {
                $('html, body').animate({ scrollTop:0 }, '800');
                return false;
            });
        }

        //search form 
        function shrinkSearch (val) {
            var search = $('.top-bar-search-form');
            if (val) {
                search.addClass('shrink');
            } else {
                search.removeClass('shrink');
            }
        }

        //chat app
        function chatApp () {
            var chatapp = $('.chat-app');
            var userList = chatapp.find('ul.user-list').not('.chat-messages');
            var users = userList.find('a');
            var chatback = chatapp.find('.chat-back>a');
            var rbScroll = $('.right-sidebar .sidebar-scrollarea');
            var chatForm = chatapp.find('#chat-write');

            users.click(function(){
                scrollarea = $(this).next('.chat-messages').find('ul');
                //open chat messages
                $(this).next('.chat-messages').addClass('open');
                //addscrollbar to scrollarea
                addScroll(scrollarea, options.colors.gray_light, '6px', options.colors.gray_light, '5px', false);
                //open chat type
                chatForm.addClass('open');
            });

            chatback.click(function(){
                scrollarr = $(this).closest('ul');
                //close chat messages
                $(this).closest('.chat-messages').removeClass('open');
                //remove scrollbar from scrollarea
                removeScroll(scrollarr);
                
                //add scroll to sidebar
                addScroll(rbScroll, options.colors.gray_light, '6px', options.colors.gray_light, '5px', false);
                               
                //hide chat type
                chatForm.removeClass('open');
            }); 
        }

        function quickSearch () {
            //quick search on chat users
            if ($('.chat-search input').length) {
                $('.chat-search input').val('').quicksearch('.user-list .list-group-item', {'removeDiacritics': true,});
            }
        }

        //enlarge col-xs-6 to col-xs-12
        function colXsEnlarge(val) {
            enlarge = $('.col-small-enlarge');
            if (val == true) {
                enlarge.each(function(index, el) {
                    $(this).removeClass('col-xs-6');
                    $(this).addClass('col-xs-12');
                });
            } else {
                enlarge.each(function(index, el) {
                    $(this).removeClass('col-xs-12');
                    $(this).addClass('col-xs-6');
                });
            }
        }

        //disable horizontal scroll in some cases
        function disableHorizontalScroll  () {
            var scrollEventHandler = function() {
              window.scroll(0, window.pageYOffset)
            }
            window.addEventListener("scroll", scrollEventHandler, false);
        }

        //respondjs plugin
        function respondjs () {
            // call jRespond and add breakpoints
            var jRes = jRespond([
                {
                    label: 'small',
                    enter: 0,
                    exit: 500
                },{
                    label: 'phone',
                    enter: 501,
                    exit: 767
                },{
                    label: 'tablet',
                    enter: 768,
                    exit: 1024
                },{
                    label: 'laptop',
                    enter: 1025,
                    exit: 1366
                },{
                    label: 'large',
                    enter: 1367,
                    exit: 10000
                }
            ]);
            // register enter and exit functions for a single breakpoint
            jRes.addFunc({
                breakpoint: 'large',
                enter: function() {
                    leftSidebarToggle(false);
                    leftSidebarHide(false);
                    shrinkSearch(false);
                },
                exit: function() {

                }
            });
            jRes.addFunc({
                breakpoint: 'laptop',
                enter: function() {
                    leftSidebarToggle(false);
                    leftSidebarHide(false);
                    shrinkSearch(false);
                },
                exit: function() {
                   
                }
            });
            jRes.addFunc({
                breakpoint: 'tablet',
                enter: function() {
                    leftSidebarToggle(true);     
                    leftSidebarHide(false);   
                    shrinkSearch(true);            
                },
                exit: function() {
                    
                }
            });
            jRes.addFunc({
                breakpoint: 'phone',
                enter: function() {
                    leftSidebarHide(true);
                    leftSidebarToggle(false);
                    shrinkSearch(true);
                    disableHorizontalScroll();
                },
                exit: function() {
                    
                }
            });
            jRes.addFunc({
                breakpoint: 'small',
                enter: function() {
                    leftSidebarHide(true);
                    leftSidebarToggle(false);
                    shrinkSearch(true);
                    colXsEnlarge(true);
                },
                exit: function() {
                    colXsEnlarge(false);
                }
            });

            return jRes;
        }       
        
        /**
         * Get/set a plugin option.
         * Get usage: $('#el').adminPlugin('option', 'key');
         * Set usage: $('#el').adminPlugin('option', 'key', value);
         */
        function option (key, val) {
          if (val) {
            options[key] = val;
          } else {
            return options[key];
          }
        }
     
        /**
         * Destroy plugin.
         * Usage: $('#el').adminPlugin('destroy');
         */
        function destroy() {
          // Iterate over each matching element.
          $el.each(function() {
            var el = this;
            var $el = $(this);
     
            // Add code to restore the element to its original state...
     
            hook('onDestroy');
            // Remove Plugin instance from the element.
            $el.removeData('plugin_' + pluginName);
          });
        }
     
        /**
         * Callback hooks.
         * Usage: In the defaults object specify a callback function:
         * hookName: function() {}
         * Then somewhere in the plugin trigger the callback:
         * hook('hookName');
         */
        function hook(hookName) {
          if (options[hookName] !== undefined) {
            // Call the user defined function.
            // Scope is set to the jQuery element we are operating on.
            options[hookName].call(el);
          }
        }
     
        // Initialize the plugin instance.
        init();
     
        // Expose methods of Plugin we wish to be public.
        return {
            option: option,
            destroy: destroy,
            addScroll: addScroll,
            removeScroll: removeScroll,
            getCurrentBreakpoint: getCurrentBreakpoint,
            panelRefreshOverlay: panelRefreshOverlay,
            centerModal: centerModal,
            leftSidebarHide: leftSidebarHide,
            leftSidebarToggle: leftSidebarToggle,
            fixedSidebar: fixedSidebar,
            fixedTopBar: fixedTopBar,
            addBoxedLayout: addBoxedLayout,
            removeBoxedLayout: removeBoxedLayout

        };
    }
     
    /**
    * Plugin definition.
    */
    $.fn[pluginName] = function(options) {
        // If the first parameter is a string, treat this as a call to
        // a public method.
        if (typeof arguments[0] === 'string') {
          var methodName = arguments[0];
          var args = Array.prototype.slice.call(arguments, 1);
          var returnVal;
          this.each(function() {
            // Check that the element has a plugin instance, and that
            // the requested public method exists.
            if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
              // Call the method of the Plugin instance, and Pass it
              // the supplied arguments.
              returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
            } else {
              throw new Error('Method ' +  methodName + ' does not exist on jQuery.' + pluginName);
            }
          });
          if (returnVal !== undefined){
            // If the method returned a value, return the value.
            return returnVal;
          } else {
            // Otherwise, returning 'this' preserves chainability.
            return this;
          }
        // If the first parameter is an object (options), or was omitted,
        // instantiate a new instance of the plugin.
        } else if (typeof options === "object" || !options) {
          return this.each(function() {
            // Only allow the plugin to be instantiated once.
            if (!$.data(this, 'plugin_' + pluginName)) {
              // Pass options to Plugin constructor, and store Plugin
              // instance in the elements jQuery data object.
              $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
          });
        }
    };
     
    // Default plugin options.
    // Options can be overwritten when initializing plugin, by
    // passing an object literal, or after initialization:
    // $('#el').adminPlugin('option', 'key', value);
    $.fn[pluginName].defaults = {
        debug: false,
        colors: {
            gray_lighter: '#ECEFF1',
            gray_light: '#CFD8DC',
            gray: '#607D8B',
            gray_dark: '#455A64',
            gray_darker: '#263238',
            blue_lighter: '#E3F2FD',
            blue_light: '#90CAF9',
            blue: '#2196F3',
            blue_dark: '#1976D2',
            blue_darker: '#0D47A1',
            red_lighter: '#FFEBEE',
            red_light: '#FFCDD2',
            red: '#F44336',
            red_dark: '#D32F2F',
            red_darker: '#B71C1C',
            yellow_lighter: '#FFFDE7',   
            yello_light: '#FFF59D',   
            yellow: '#FFEB3B',   
            yellow_dark: '#FBC02D',   
            yellow_darker: '#F57F17',  
            green_lighter: '#E8F5E9',
            green_light: '#A5D6A7',
            green: '#4CAF50',
            green_dark: '#388E3C',
            green_darker: '#1B5E20',
            gridColor: '#bfbfbf'
        },
        niceScroll: {
            cursorcolor: "#424242", // change cursor color in hex
            cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
            cursorborder: "1px solid #fff", // css definition for cursor border
            cursorborderradius: "5px", // border radius in pixel for cursor
            autohide: true // how hide the scrollbar works, possible values: true, cursor, false, leave, hidden, scroll
        },
        accordion: {
            toggleIcon: 'fa fa-minus s14',//toggle icon for accrodion
            collapseIcon: 'fa fa-plus s14'//collapse icon for accrodion
        },
        tables: {
            responsive: true, //make tables resposnive
            customscroll: true //ativate custom scroll for responsive tables
        },
        backToTop: true, //back to top
        onInit: function() {},
        onDestroy: function() {},
    };
 
})(jQuery);