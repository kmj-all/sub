$(function(){

$('.gnb > li').mouseenter(function(){

    $(this).find('.depth02').stop().slideDown();
});

$('.gnb > li, .depth02').mouseleave(function(){

    $('.depth02').stop().slideUp();
});

});