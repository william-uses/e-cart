'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        // $("#loader").fadeOut();
        $("#preload").delay(1500).fadeToggle();
        
    });
    
    // if ($('#preload').css('display') == 'none') {
    //     $('body').removeClass('overflow-hidden')
    // }
    (function() {
        var orig = $.fn.css;
        $.fn.css = function() {
            var result = orig.apply(this, arguments);
            $(this).trigger('stylechanged');
            return result;
        }
    })();
    
    // Add listener
    $('#preload').on('stylechanged', function () {
        console.log('stylechanged: ','The css changed');
    });

    
    // $('button').on('click',function(){
    //   // Perform change
    //   $('div#box').css('background', 'red');
    // })
    
    $('#preload').on('classChanged', function () {
        // $("#loader").fadeOut();
        $("#preload").delay(1500).fadeToggle();
        console.log('hello');
    });

    $(window).on('scroll load', function () {
        if ($(".navbar").offset().top > 60) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    // close menu on click in small viewport
    $('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown(e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);

    // menu button
    // $(".navbar-toggler-icon").on('mouseover', function () {
    //     $(".navbar-toggler-icon hr").css("width", "20px");
    // });
    // $(".navbar-toggler-icon").on('mouseout', function () {
    //     $(".navbar-toggler-icon hr").css("width", "10px");
    // });

    /* Back To Top Button */
    // create the back to top button
    // create shadow for header
    $('body').prepend('<a href="#"><button class="rounded-full bg-slate-600 h-10 w-10 fixed z-[10] right-[12px] bottom-[12px] bg-[url(\'./img/up-arrow.png\')] bg-no-repeat bg-center bg-[length:20px] hover:bg-black" id="back-to-top"></button></a>');
    var amountScrolled = 300;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('#back-to-top').fadeIn('500');
            $('#nav-bar').toggleClass('shadow-header-shadow');
        } else {
            $('#back-to-top').fadeOut('500');
            $('#nav-bar').removeClass('shadow-header-shadow');
        }
    });
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > amountScrolled) {
    //         $('#nav').toggleClass('shadow-header-shadow');
    //     } else {
    //         $('#nav').removeClass('shadow-header-shadow');
    //     }
    // });
    $('#menu-button').on('click', function () {
        $('#nav').toggleClass('menu-opened');
        $('#nav').toggleClass('max-h-full');
    })


})(jQuery);


var t = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi impedit delectus expedita facilis, iste doloremque quasi consequuntur rerum porro quos vitae est quis nostrum minus dignissimos maxime dolore error magnam?'.repeat(100)
document.getElementById('content').innerText = t
document.getElementById('c').innerText = t