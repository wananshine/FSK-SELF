//banner
var bannerSwiper = new Swiper('.swiper-banner', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        bulletClass : 'current-bullet',
        clickable :true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
});

//teacherSwiper
var teacherSwiper = new Swiper('.swiper-teacher', {
    slidesPerView: 4,
    spaceBetween: 18,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
});


AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});