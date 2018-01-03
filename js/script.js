/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
  $('.about-page, .career-page, .reach-page, .portfolio-page').hide();
  $('#preloader').delay(1000).fadeOut(1200);
});

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

$(document).ready(function () {

    'use strict';

    /*------------------
    TYPED JS
    --------------------*/
    $(".element").typed({
      strings: [
        "Shashank Aryan", "Pythonista", "FOSS Enthusiast", "Web Developer"
      ],
      typeSpeed: 10,
      loop: true,
      backDelay: 2000
    });

    /*  ---------------------
         Homepage Responsive
        ---------------------  */


    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > windowsHeight) {

            $('.introduction , .tabs').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .tabs').css({
                width: '100%',
                height: '50%'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            bgImage.css({
                width: 'auto',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Tab Settings
        --------------  */

    // Hide Tab

    $('.tabs > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            tabWidth = $('.tabs').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.tabs').animate({
            left: tabWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });

    });

    // Show Relative Page Onclick

    $('.tabs div.profile-btn').on('click', function () {
        $('.about-page').fadeIn(1200);
        $('.icon-arrow-left-circle').css("display","block")

    });

    $('.tabs div.resume-btn').on('click', function () {
        $('.career-page').fadeIn(1200);
        $('.icon-arrow-left-circle').css("display","block")
    });

    $('.tabs div.contact-btn').on('click', function () {
        $('.reach-page').fadeIn(1200);
        $('.icon-arrow-left-circle').css("display","block")
    });

    // Close Button, Hide Tab

    $('.icon-arrow-left-circle').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .tabs').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.about-page, .career-page, .portfolio-page, .reach-page').fadeOut(800);
        $('.icon-arrow-left-circle').css("display","none")
    });

    /*  --------------------------------
         Maximize Services Items Height
        --------------------------------  */

    function maximizeHeight() {

        var minHeight = 0;

        $('.services').each(function () {

            var maxHeight = $(this).height();

            if (maxHeight > minHeight) {
                minHeight = maxHeight;
            }

        });

        $('.services').height(minHeight);
    }

    maximizeHeight();

    $(window).on('resize', maximizeHeight);

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    /*  ------------
         Pie Charts
        ------------  */

    $(function () {

        var fillColor = $('.footer').css('background-color'); // Get background color of footer to set relevent fill color in pie charts

        // Initiate EasyPieChart

        $('.skill').easyPieChart({
            barColor: fillColor,
            trackColor: '#c6c6c6',
            scaleColor: '#c6c6c6',
            scaleLength: 8,
            lineWidth: 8,
            size: 150,
            lineCap: 'butt'
        });

    });

  /*  -----------------------------------------------------
          OwlCarousel ( for portfolio page : testimonials slider )
        -----------------------------------------------------  */

    $(function () {
        $(".owl-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 200,
            paginationSpeed: 300,
            singleItem: true
        });
    });

    /*  -------------
         Contact Form
        ------------- */

    $('#contactForm').submit(function () {

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $('#contactForm').serialize(),
            success: function (msg) {
                if (msg == 'SEND') {
                    $('.success').fadeIn();
                    $('.error').fadeOut();
                    $('#contactForm')[0].reset();
                } else {
                    $('.success').fadeOut();
                    $('.error').fadeIn().find('h3').text(msg);
                }
            }
        });
        return false;
    });
});
