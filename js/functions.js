//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > $('.navbar-nav').outerHeight()) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top /* - $('.navbar-nav').outerHeight() */
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.carousel').carousel({
      interval: 2500
    });

    function close_accordion_section_left() {
        $('.accordion .faq-title-left').removeClass('active');
        $('.accordion .faq-content-left').slideUp(150).removeClass('open');
    }

    $('.faq-title-left').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section_left();
        }else {
            close_accordion_section_left();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(150).addClass('open');
        }

        e.preventDefault();
    });


    function close_accordion_section_right() {
        $('.accordion .faq-title-right').removeClass('active');
        $('.accordion .faq-content-right').slideUp(150).removeClass('open');
    }

    $('.faq-title-right').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section_right();
        }else {
            close_accordion_section_right();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(150).addClass('open');
        }

        e.preventDefault();
    });
});
