$(function() {
    var oTop = $('.addthis_button_facebook_like').offset().top - window.innerHeight;
    $(window).scroll(function(){
        var pTop = $('body').scrollTop();
        console.log( pTop + ' - ' + oTop );
        if( pTop > oTop ){
           $.getScript("skins/addthis.js");
        }
    });
});
