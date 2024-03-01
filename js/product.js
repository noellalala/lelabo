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
   
    //3초 간격으로 이미지 변화
    setInterval(function(){
        $(".con_ad1").css({'background-image':'url("img/4_product/ingredients/1_1.webp")'});
        setTimeout(function(){
            $(".con_ad1").css({'background-image':'url("img/4_product/ingredients/1_2.webp")'});
        }, 3000);
        
        $(".con_ad2").css({'background-image':'url("img/4_product/ingredients/2_1.webp")'});
        setTimeout(function(){
            $(".con_ad2").css({'background-image':'url("img/4_product/ingredients/2_2.webp")'});
        }, 3000);
    }, 6000);

    //호버했을 때 이미지 변경 
    
    function updateImageSrc(element, newSuffix) {
        const imgElement = $(element).find('img');
        const originalSrc = imgElement.attr('src');
        const newSrc = originalSrc.replace('_1.webp', newSuffix + '.webp');
        console.log('New Image Src:', newSrc);
        imgElement.attr('src', newSrc);
    }    
    
    function restoreOriginalImage(element) {
        const imgElement = $(element).find('img');
        const currentSrc = imgElement.attr('src');
        
        // 이미 _2로 끝나는 경우에만 _1로 변경
        if (currentSrc.endsWith('_2.webp')) {
            const newSrc = currentSrc.replace('_2.webp', '_1.webp');
            imgElement.attr('src', newSrc);
            console.log('Restored to Original Image:', newSrc);
        }
    }
    
    
    $(document).ready(function () {
        $('.con1 ul li, .con2 ul li, .con3 ul li').on('mouseover', function () {
            updateImageSrc(this, '_2');
        });
    
        $('.con1 ul li, .con2 ul li, .con3 ul li').on('mouseleave', function () {
            console.log('Mouse Leave:', this);
            restoreOriginalImage(this);
        });
    });
})