/*------------------------------------------------------------------
[MASTER JS]

Template Name: TIDE
Version:    1.0
Descriptions:TIDE is a Personal Portfolio Template
Author: Fahmid Ahmed Chowdhury

-------------------------------------------------------------------*/


(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();
        /*
         * ----------------------------------------------------------------------------------------
         *  STICKY JS
         * ----------------------------------------------------------------------------------------
         */

        $(".logo_menu_area").sticky({ topSpacing: 0 });



        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROLL JS
         * ----------------------------------------------------------------------------------------
         */

        $('li.smooth-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '60';
            $('html,body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');

            event.preventDefault();
        });


        $('.smooth').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '60';
            $('html,body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');

            event.preventDefault();
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  PARALAZ JS
         * ----------------------------------------------------------------------------------------
         */

        $('.paralax_bg').scrolly({ bgParallax: true });

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();






        /*
         * ----------------------------------------------------------------------------------------
         *  Ripples JS
         * ----------------------------------------------------------------------------------------
         */


        
            
                $('.ripple').ripples({
                    resolution: 500,
                    perturbance: 0.09
                });
             
        




        /*
         * ----------------------------------------------------------------------------------------
         *  //portfolio tab nativation
         * ----------------------------------------------------------------------------------------
         */

      
            var selectedClass = "";
            $(".fil-cat").on('click', function() {
                selectedClass = $(this).attr("data-rel");
                $("#portfolio").fadeTo(100, 0.1);
                $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
                setTimeout(function() {
                    $("." + selectedClass).fadeIn().addClass('scale-anm');
                    $("#portfolio").fadeTo(300, 1);
                }, 300);
            });
       





        /*
         * ----------------------------------------------------------------------------------------
         *  MOBILE JS
         * ----------------------------------------------------------------------------------------
         */

        $('.mobileMenu_icon').on('click', function() {
            $('.mobilemenu').toggle();

        });

        $('.mobilemenu a').on('click', function() {
            if ($(window).width() <= 768) {
                $('.mobilemenu').toggle();
            }
        });






    });



    /*
     * ----------------------------------------------------------------------------------------
     *  PRELOADER JS
     * ----------------------------------------------------------------------------------------
     */

    $(window).on('load', function(event) {
        $('#preloader').fadeOut();
        $('.preloader_spinner').delay(222350).fadeOut('slow');
        $("body").removeClass("preloader_active");
    });


}(jQuery));
