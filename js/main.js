//------------- main.js -------------//

// make console.log safe to use
window.console||(console={log:function(){}});

//Internet Explorer 10 in Windows 8 and Windows Phone 8 fix
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

//Android stock browser
var nua = navigator.userAgent
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
  $('select.form-control').removeClass('form-control').css('width', '100%')
}

//attach fast click
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

//doc ready function
$(document).ready(function() {

    //Disable certain links
    $('a[href^=#]').click(function (e) {
        e.preventDefault()
    })

    //Init our plugin.
    $('body').adminPlugin({
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
            toggleIcon: 'fa fa-minus s14',//toggle icon for accordions
            collapseIcon: 'fa fa-plus s14'//collapse icon for accordions
        },
        tables: {
            responsive: true, //make tables resposnive
            customscroll: true //ativate custom scroll for responsive tables
        },
    });

    //remove loading overlay in panels after 3 sec (demo only)
    $('a.panel-refresh').click(function(event) {
        //get current panel
        panel = $(this).closest('.panel');
        //call te overlay method
        $('body').adminPlugin('panelRefreshOverlay', panel, 'init' );
        //wait 3 sec and remove overlay
        setTimeout(function() {
            $('body').adminPlugin('panelRefreshOverlay', panel, 'remove' );
        }, 3000);
    });

     //------------- Bootstrap tooltips -------------//
    $("[data-toggle=tooltip]").tooltip ({container:'body'});
    $(".tip").tooltip ({placement: 'top', container: 'body'});
    $(".tipR").tooltip ({placement: 'right', container: 'body'});
    $(".tipB").tooltip ({placement: 'bottom', container: 'body'});
    $(".tipL").tooltip ({placement: 'left', container: 'body'});
    //------------- Bootstrap popovers -------------//
    $("[data-toggle=popover]").popover ({
        html: true
    });
    
});