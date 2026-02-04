
$('.slider.category.none .libs').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider.category.none .slick-prev'),
    nextArrow: $('.slider.category.none .slick-next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px',
                dots: false
            }
        }
    ]
});

$('.slider__mobile .wrapp__cards').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider__mobile .slick-prev-mobile'),
    nextArrow: $('.slider__mobile .slick-next-mobile'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }
    ]
});


$('.mini__mobile .wrapp__cards').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.mini1'),
    nextArrow: $('.mini2'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                variableWidth: false,
                centerMode: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                variableWidth: false,
                centerMode: false,
                centerPadding: '0'
            }
        }
    ]
});