(function ($) {
	"use strict";

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); 
	$('.preloader').delay(333).fadeOut('slow'); 
	$('body').delay(333);
});
// Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
});
// sticky
$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
            $(".main-nav").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
            $(".navbar-area .main-nav").addClass("sticky");
        } else {
            $(".navbar-area .main-nav").removeClass("sticky");
        }
    });
})(jQuery)