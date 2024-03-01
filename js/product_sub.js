$(document).ready(function () {

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

    $('.thumnail_sub li').click(function(){
        let imgSrc = $(this).find('img').attr('src');
            $('.thumnail img').attr('src', imgSrc);
    })

    // select_box 용량, 개수 변화에 따른 다른 값 가져오기
    $('#bottleSize').on('change', updatePrice);
    $('#number').on('change', updatePrice);
    updatePrice();

    function updatePrice() {
        let bottleSize = parseFloat($('#bottleSize').val()) || 0;
        let quantity = parseInt($('#number').val()) || 1;
        let basePrice;

        switch (bottleSize) {
            case 30:
                basePrice = 310000;
                break;
            case 50:
                basePrice = 440000;
                break;
            case 100:
                basePrice = 1500000;
                break;
            case 15:
                basePrice = 132000;
                break;
            case 1.5:
                basePrice = 9000;
                break;
            default:
                break;
        }

        var totalPrice = basePrice * quantity;
        $('#price').text(numberWithCommas(totalPrice) + '원');
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // subscribe svg 클릭했을 때, 각각의 li span(상세설명 보기) + svg rotation 시키기.
    
    $('.subscribe svg').click(function () {
        let li = $(this).closest('li');
        let btnDisplay = li.find('.des li');
        let svg = li.find('svg');
    
        btnDisplay.slideToggle('slow'); // slideToggle을 사용하여 부드러운 슬라이드 다운 및 업 효과 적용
        svg.toggleClass('rotated');
    });
});