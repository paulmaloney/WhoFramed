// CSS AND IDEA FROM
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

// WRAP THE IFRAME
$( document ).ready(function() {
    $("iframe").wrap("<div class='whoframed'/>");
    $('.whoframed').css('position', 'relative');
    $('.whoframed').css('padding-bottom', '56.25%');
    $('.whoframed').css('padding-top', '25px');
    $('.whoframed').css('height', '0');
    $('.whoframed iframe').css('position', 'absolute');
    $('.whoframed iframe').css('top', '0');
    $('.whoframed iframe').css('left', '0');
    $('.whoframed iframe').css('width', '100%');
    $('.whoframed iframe').css('height', '100%');
});