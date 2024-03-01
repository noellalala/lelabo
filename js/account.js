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
})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login_box').addEventListener('submit', function(event) {
        // 이메일 주소 유효성 검사
        let loginMail = this.querySelector('input[name="login_email"]');
        if (!validateEmail(loginMail.value)) {
            alert("이메일 주소는 최소 10자 ~ 최대 24자이며, 특수문자는 @만 사용 가능합니다.");
            event.preventDefault(); // 폼 전송 막기
            return;
        }

        // 비밀번호 유효성 검사
        let loginPassword = this.querySelector('input[name="login_password"]');
        if (!validatePassword(loginPassword.value)) {
            alert("비밀번호는 최소 5~10자이며, 영문, 숫자와 특수문자 중 적어도 1개를 사용해야 합니다.");
            event.preventDefault(); // 폼 전송 막기
        }
    });

    function validateEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email) && email.length >= 10 && email.length <= 24;
    }

    function validatePassword(password) {
        // 최소 5~10자, 영문, 숫자, 특수문자 중 적어도 1개 포함
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,10}$/;
        return passwordRegex.test(password);
    }

    document.getElementById('subscribe_box').addEventListener('submit', function(event) {
        // 이메일 주소 유효성 검사
        let subscribeEmailInput = this.querySelector('input[name="subscribe_email"]');
        if (!validateEmail(subscribeEmailInput.value)) {
            alert("이메일 주소를 올바르게 입력하세요.");
            event.preventDefault(); // 폼 전송 막기
        }
    });

    function validateEmail(email) {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    document.getElementById('new_box').addEventListener('submit', function(event) {
        // 이름 유효성 검사
        let newNameInput = this.querySelector('#new_name');
        if (!validateName(newNameInput.value)) {
            alert("이름은 2자 ~ 최대 5자까지, 한글로만 작성 가능합니다.");
            event.preventDefault(); // 폼 전송 막기
        }
    });

    function validateName(name) {
        var nameRegex = /^[가-힣]{2,5}$/;
        return nameRegex.test(name);
    }

});

