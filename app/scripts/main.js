'use strict';

$(document).ready(function(){


});


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        $('header').addClass('scrolled');
    }
    else {
        $('header').removeClass('scrolled');
    }
});
