/**
 * Created by Aaron on 12/6/2015.
 */
$(document).ready(function() {
    $('.thumbs').portfolio({
        cols: 4,
        transition: 'slideDown'
    });
    
    $('.close').portfolio({
        cols: 4,
        transition: 'slideUp'
    });

    $(".portfolio-content").magnificPopup({
        delegate: 'img',
        type: 'image'});
});