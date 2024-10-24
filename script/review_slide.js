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



// 리뷰 슬라이드


var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 6,//보여지는 갤러리 수
    spaceBetween: 20,//갤러리 사이 간격
    speed: 5000,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
});

$(function () {
    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});




// 메인 배너

$(window).on('load', function() {
    slider();
})

function slider() {
    let swiper = undefined;
    let slideNum = $('.slider .swiper-slide').length //슬라이드 총 개수
    let slideInx = 0; //현재 슬라이드 index

    //디바이스 체크
    let oldWChk = window.innerWidth > 767 ? 'pc' : 'mo';
    sliderAct();

    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            let newWChk = window.innerWidth > 767 ? 'pc' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                sliderAct();
            }
        }, 300);
    })

    //슬라이드 실행
    function sliderAct() {
        //슬라이드 초기화 
        if (swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
        }

        //slidesPerView 옵션 설정
        let viewNum = oldWChk == 'pc' ? 4 : 2;
        //loop 옵션 체크
        let loopChk = slideNum > viewNum;

        swiper = new Swiper(".slider .inner", {
            slidesPerView: "3",
            initialSlide: slideInx,
            loop: loopChk,
            centeredSlides: true,
            navigation: {
                nextEl: '.slider .btn_next',
                prevEl: '.slider .btn_prev',
            },
            on: {
                activeIndexChange: function() {
                    slideInx = this.realIndex; //현재 슬라이드 index 갱신
                }
            },
        });
    }
}

  

