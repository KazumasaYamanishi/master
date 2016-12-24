var swiper = new Swiper('.wrap-hero', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    effect: 'fade'
});



var swiper2 = new Swiper('.wrap-carousel', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    autoplay: 2500,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        414: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
