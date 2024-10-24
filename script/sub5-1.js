// 내비

$(function () {
    $('.nav li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });

    $('.nav li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });

    $('.nav li').mouseover(function () {
        $(this).children('.sub2').stop().slideDown();
    });

    $('.nav li').mouseout(function () {
        $(this).children('.sub2').stop().slideUp();
    });
});