$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
        } else{
            $(".navbar-area").addClass("sticky");
        }
    });
    
     //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });    
    
    
    //===== Sidebar

    $('[href="#side-menu-right"], .overlay-right').on('click', function (event) {
        $('.sidebar-right, .overlay-right').addClass('open');
    });

    $('[href="#close"], .overlay-right').on('click', function (event) {
        $('.sidebar-right, .overlay-right').removeClass('open');
    });
    
    
    
    //===== Isotope Project 3

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //  Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Slick

    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.testimonial-active-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.client-active').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.testimonial-active-4').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

        
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //=====  AOS
    
    new WOW().init();
    
    
/*-----------------------------------------------------
    Scroll Menu BG
-------------------------------------------------------*/
  
// $(window).scroll(function () {
//     if ($("#header").offset().top > 100) {
//         $("#header").addClass("menu-bg");
//     } else {
//         $("#header").removeClass("menu-bg");
//     }
// });

/*------------------------------*/
/*	Slider
/*------------------------------*/

setTimeout(function(){
    // $('.home .flexslider').height($(window).height()).flexslider({
    //     slideshowSpeed: 6000,
    //     after : function(slider){
    //         $('.flexslider .big, .flexslider .middle, .flexslider .small').css('opacity',0);
    //         var next = $('.flex-active-slide', slider);
    //         sliderAnimate(next);
    //     }
    // });
    // $(window).resize(function(){
    //     $('.home .flexslider, .home .flexslider .slides img').height($(window).height());
    // })
    // sliderAnimate($('.flex-active-slide'));
    function sliderAnimate(next){
        if(next.hasClass('first')){
            var time = -200;
            $('.big', next).each(function(){
                var thiz = $(this);
                time += 200;
                setTimeout(function(){							
                    thiz.addClass('flipInX animated').css('opacity','1');
                    thiz.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        thiz.removeClass('flipInX animated');
                    });
                }, time);
            });
            setTimeout(function(){
                $('.middle', next).addClass('bounceIn animated').css('opacity','1');
                $('.middle', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('.middle', next).removeClass('bounceIn animated');
                });
                $('.small', next).addClass('fadeIn animated').css('opacity','1');
                $('.small', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('.small', next).removeClass('fadeIn animated');
                });
            }, 400)
        }else if(next.hasClass('secondary')){

            $('.big', next).addClass('bounceInDown animated');
            $('.big', next).css('opacity','1');
            $('.big', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('.big', next).removeClass('bounceInDown animated');
            });

            setTimeout(function(){
                $('.middle', next).addClass('bounceInRight animated').css('opacity','1');
                $('.middle', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('.middle', next).removeClass('bounceInRight animated');
                });
                $('.small', next).addClass('bounceInLeft animated').css('opacity','1');
                $('.small', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('.small', next).removeClass('bounceInLeft animated');
                });
            }, 400)
        }else if(next.hasClass('third')){
            var time = -200;
            $('.big', next).each(function(){
                var thiz = $(this);
                time += 200;
                setTimeout(function(){							
                    thiz.addClass('fadeInDown animated').css('opacity','1');
                    thiz.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        thiz.removeClass('fadeInDown animated');
                    });
                }, time);
            });
            setTimeout(function(){
                $('.middle', next).addClass('fadeInRight animated').css('opacity','1');
                $('.middle', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('.middle', next).removeClass('fadeInRight animated');
                });
                $('.small', next).addClass('fadeInLeft animated').css('opacity','1');
                $('.small', next).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('.small', next).removeClass('fadeInLeft animated');
                });
                
            }, 400)
        }
    }

    $('.flex-next').addClass('fa fa-angle-right').text('');
    $('.flex-prev').addClass('fa fa-angle-left').text('');

    $('.home li > img').each(function(){
        $(this).css('background-image', 'url(' + $(this).attr('src') + ')')
            //    .attr('src', '../images/1x1-blue.png')
               .height($(window).height());
    });
},0)
  
});





