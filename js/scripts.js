/**
 * Created by Aaron on 12/6/2015.
 */

function nightMode() {
    $('body').addClass('darkbg');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/dark.css">');
    $('div.row div.large-12').css('background', '#141414');
    $('div.row div.medium-12').css('background', '#141414');
    $('.menu>li:not(.menu-text)>a').css('color', '#F9EE98');
    $('.menu-text').css('color', '#F9EE98');
    $('.sectionhead').css('color', '#F9EE98');
    $('.content').css('color', '#E1E1E1');
    $('.link a').css('color', '#E1E1E1');
    $('div.medium-12.columns ul.thumbs li.content').css('color', '#E1E1E1');
    $('div.medium-12.columns div.small-12.columns').css('background', 'rgb(20, 20, 20)');
    $('div.medium-12.columns div.small-12.columns').css( 'color', 'rgb(249, 238, 152)');
    $('div.medium-12.columns div.small-12.columns.nobg').css('color', '#E1E1E1');
    $('div.small-6.columns p').css('color', '#E1E1E1');
    $('div.medium-12.columns div.small-12.columns.desc ul li').css('color', '#E1E1E1');
}
$(document).ready(function() {
    var currentTime = new Date();

    var hours = currentTime.getHours();

    //Auto dark theme
    if(hours >= 20) {
        nightMode();
    }

});