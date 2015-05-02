// CSS AND IDEA FROM
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

// WRAP THE IFRAME
$( document ).ready(function() {
	$("iframe").wrap("<div class='ezfit'/>");
});

// STYLE IT UP
$(document).ready(function(){
    $('.ezfit').css('position', 'relative');
    $('.ezfit').css('padding-bottom', '56.25%');
    $('.ezfit').css('padding-top', '25px');
    $('.ezfit').css('height', '0');
});

$(document).ready(function(){
    $('.ezfit iframe').css('position', 'absolute');
    $('.ezfit iframe').css('top', '0');
    $('.ezfit iframe').css('left', '0');
    $('.ezfit iframe').css('width', '100%');
    $('.ezfit iframe').css('height', '100%');
});