/**
 * Created by Aaron on 12/6/2015.
 */

function nightMode() {
    $('body').addClass('darkbg');
    $('div.row div.large-12').css('background', '#141414');
    $('div.row div.medium-12').css('background', '#141414');
    $('.menu>li:not(.menu-text)>a').css('color', '#F9EE98');
    $('.menu-text').css('color', '#F9EE98');
    $('.sectionhead').css('color', '#F9EE98');
    $('.content').css('color', '#E1E1E1');
    $('.link a').css('color', '#E1E1E1');
    $('div.medium-12.columns ul.thumbs li.content').css('color', '#E1E1E1');
}
$(document).ready(function() {
    nightMode();
});