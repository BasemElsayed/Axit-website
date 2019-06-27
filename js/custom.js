/*global $, alert, console*/

$(function () {
    "use strict";
    
    $("html, body").niceScroll({
        cursorborderradius : 0,
        cursorwidth : "8px",
        cursorfixedheight: 140,
        cursorcolor : "#ff8b38",
        cursorborder : "1px solid #ff8b38"
    });
    
    if ($(window).width() <= 768) {
        $(".initial").remove();
        $(".wo").remove();
        $(".css").remove();
    }
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $(".scrollUp .up").fadeIn();
        } else {
            $(".scrollUp .up").fadeOut();
        }
    });
    
    $(".scrollUp .up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    $(".loading .spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1000);
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            if (!$(".navbar").hasClass("navScroll")) {
                $(".navbar").addClass("navScroll");
            }
        } else {
            if ($(".navbar").hasClass("navScroll")) {
                $(".navbar").removeClass("navScroll");
            }
        }
    });
    
    $(".navbar-inverse .navbar-nav>li>a").click(function () {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        $("html,body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });
    
    
    
    
    
});