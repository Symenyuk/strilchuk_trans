$(document).ready(function(){

   //home slider
   $(".owl-carousel").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true
   });

   //accordion
   (function() {
      $('.value_text').hide();
      $('.title').on('click', function(e){
         $(e.target).parent().children('.value_text').slideToggle('fast').parent().toggleClass('show');
      }).children().click(function(e) {
         $(e.target).parent().parent().children('.value_text').slideToggle('fast').parent().toggleClass('show');
      }).find('.ico').click(function(e) {
         $(e.target).parent().parent().parent().children('.value_text').slideToggle('fast').parent().toggleClass('show');
      });
   })();

   //lang
   var language = $('.language');
   var listLang = $('.list_lang');
   $('.language_wrap').hover(function() {
      $(this).addClass('show');
   },function(){
      $('.language_wrap').removeClass('show');
   });


   // nav-menu
   var menuIco = $('.mob_menu_ico'),
      mobileNav = $('.mobile_menu'),
      close = $('.mobile_menu .close');
   function openMobileNav() {
      mobileNav.addClass('open');
      $('.cover').addClass('yes');
      $('header').addClass('nav-open');
   }
   function closeMobileNav() {
      mobileNav.removeClass('open');
      $('.cover').removeClass('yes');
      $('header').removeClass('nav-open');
   }
   menuIco.on('click', function() {
      openMobileNav();
   });
   close.on('click', function(){
      closeMobileNav();
   });
   $('.cover').on('click', function() {
      closeMobileNav();
   });


   // adding blocks, pop-up window
   (function () {
      var toTopButton = $('.to_top_button'),
          orderСall = $('.order_call_button'),
          orderForm = $('.order_form_button'),
          popupOrderCall = $('#order-call'),
          popupOrderForm = $('#order-form');

       // to-top button
       toTopButton.on('click', function() {
          $('html, body').animate({ scrollTop: 0 }, 'fast');
          return false;
       });

       // POP-UP ORDER CALL
       popupOrderCall.dialog({
          autoOpen: false,
          width: 400,
          modal: true,
          open: function () {
             $(document.body).css({ overflow: "hidden"})
          },
          close: function () {
             $(document.body).css({ overflow: "scroll"})
          },
       });
       // open dialog
       orderСall.on('click', function() {
          popupOrderCall.dialog('open');
       });
       //Close-dialog
       $('body').on('click','.ui-widget-overlay',function(){
           popupOrderCall.dialog('close');
       });


       // POP-UP ORDER FORM
       popupOrderForm.dialog({
          autoOpen: false,
          width: $(window).width() > 1280 ? 1280 : 'auto',
          modal: true,
          open: function () {
             if ($(window).width() > 1280) {
                $(document.body).css({
                   overflow: "hidden"
                })
             }
          },
          close: function () {
             $(document.body).css({ overflow: "scroll"})
          },
       });
       // open dialog
       orderForm.on('click', function() {
          popupOrderForm.dialog('open');
       });
       //Close-dialog
       $('body').on('click','.ui-widget-overlay',function(){
           popupOrderForm.dialog('close');
       });

   }());


   // button to-top
   (function () {
      var previousScroll = 0;
      var elem = $('#to_top');
      $(window).scroll(function() {
           var topPage = $(window).scrollTop() == 0,
               currentScroll = $(this).scrollTop(),
               endPage = $(window).scrollTop() + $(window).height() == $(document).height(),
               widthWindow = $(window).outerWidth();

           if (endPage == true ) {
               elem.addClass('bottom');
           } else {
               elem.removeClass('bottom');
           }

           if (widthWindow <= 1024) {
             if ( (currentScroll > previousScroll) || (topPage == true) ){
                 elem.hide();
             } else {
                 elem.show();
             }
             previousScroll = currentScroll;
          }
      });
      elem.on('click', function() {
         $('html, body').animate({ scrollTop: 0 }, 'fast');
         return false;
      });
   }());

}); // end document-ready
