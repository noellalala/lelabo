$(document).ready(function(){

    //default nav 
    $('.min_width_menu').on('click', function () {
        var navUl = $('nav');
        navUl.toggleClass('active');
    });

    $('.main_nav').on('click', function () {
        var subNav = $(this).find('.sub_nav');
        subNav.toggleClass('active');
    });
    //default nav 
    
    // 스크롤 높이에 따라 fade in
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();
        console.log(window.scrollY);

        if(scrollY >= 1){
            $(".brand_establish").addClass("fadein");
        }

        if(scrollY >= 150){
            $(".lab_text_wrap").addClass("fadein");
        }
        
        if (scroll >= 300) {
            $(".brand_lab_list li").each(function (index) {
                setTimeout(function () {
                    $(".brand_lab_list li").eq(index).addClass("active");//active-opacity:1;
                }, index * 400);
            });
        }

        if (scroll >= 900) {
            $(".comu_text_wrap").addClass("fadein");
        }

        if (scroll >= 1100) {
            $(".brand_comu_btn").addClass("fadein");
            $(".brand_comu_content").addClass("fadein");
        }

        if (scroll >= 1600) {
            $(".soul_text_wrap").addClass("fadein");
        }

        if (scroll >= 2580) {
            $(".ingredient_text_wrap").addClass("fadein");
        }

        if (scroll >= 2780) {
            $(".ingredient_img_wrap").addClass("fadein");
        }
    })
    // 클릭에 따른 open 클래스 부여로 각 li 보여줌
    $(".brand_comu_btn tr").click(function () {
        var index = $(this).index();
        $(".brand_comu_content li").removeClass("open");
        $(".brand_comu_content li").eq(index).addClass("open");
    });

    let listItemWidth = 500;
    let itemCount = $('.ingredient_img_wrap li').length;
    let totalWidth = itemCount * listItemWidth;

    $('.ingredient_img_wrap ul').css('width', totalWidth);

    // auto
    for (var i = 0; i < itemCount; i++) {
        $('.ingredient_img_wrap ul').append($('.ingredient_img_wrap li').eq(i).clone());
    }

    function startSlider() {
        setInterval(function () {
            $('.ingredient_img_wrap ul').animate({ 'margin-left': -listItemWidth }, 10000, function () {
                $(this).find('li:last').after($(this).find('li:first'));
                $(this).css('margin-left', 0);
            });
        });
    }
    
    startSlider();
})