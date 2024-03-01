$(document).ready(function () {
    $('.min_width_menu').on('click', function () {
        var navUl = $('nav');
        navUl.toggleClass('active');
    });

    $('.main_nav').on('click', function () {
        var subNav = $(this).find('.sub_nav');
        subNav.toggleClass('active');
    });
});