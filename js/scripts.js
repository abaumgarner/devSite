/**
 * Created by Aaron on 12/6/2015.
 */

function nightMode() {
    $('body').addClass('darkbg');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/dark.css">');

    $('.menu>li:not(.menu-text)>a').css('color', ' #F9EE98');
}
$(document).ready(function() {
    var currentTime = new Date();

    var hours = currentTime.getHours();

    //Auto dark theme
    if(hours >= 20) {
        nightMode();
    }

});