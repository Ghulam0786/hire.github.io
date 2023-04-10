$('.my-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'linear',
    dots: false,
    arrows: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
        }
    }]

});

/*tabs slider*/

$('.tabs-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [{
        
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
        }
    }]

});

$('.testi-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    speed: 1500,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
        }
    }]

});

$('.menu-bar .nav-link').on('click', function () {
    setTimeout(function () {
        $('.tabs-slider').slick("setPosition", 0);
    }, 200);
});
$(".sec-5 .slider-btn .previous-btn").click(function () {
    $(".my-slider button.slick-prev").trigger("click")
})
$(".sec-5 .slider-btn .next-btn").click(function () {
    $(".my-slider button.slick-next").trigger("click")
})