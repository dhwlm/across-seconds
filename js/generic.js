(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('#concept-artwork').submit(function(e){
    window.open("downloads/concept-artworks.zip","_blank");
  });

  $(window).on('load', function(){
    $('#btn-click').click(function(){
      console.log("clicked");
    });
    $(".song-preview").mouseenter(function () {
      $(this).find('img').addClass('blur');
      $(this).find('.overlay').hide('blur');
      var audio = $(this).find('audio')[0];
      audio.play().catch();
    }).mouseleave(function () {
      $(this).find('img').removeClass('blur');
      $(this).find('.overlay').show('blur');
      var audio = $(this).find('audio')[0];
      audio.pause();
    });

    $('body').removeClass('fade-out');
    window.sr = ScrollReveal();
    // sr.reveal('.text-watermark', { duration: 1000 });
    // sr.reveal('.main-heading');

    var sequenceInterval = 200;
    // Custom reveal sequencing by container
    $('.scroll-reveal__sequence-container').each(function () {
      var sequenceDelay = 0;
      $(this).find('.scroll-reveal--sequenced').each(function () {
        sr.reveal(this, {
          delay: sequenceDelay,
          duration: 1000
        });
        sequenceDelay += sequenceInterval;
      });
    });
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
      previousTop: 0
    },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
            var $source = $('.navbar-brand img');
            $source.attr({
              src: $source.attr('data-inverted')
            })

          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
            var $source = $('.navbar-brand img');
            $source.attr({
              src: $source.attr('data-src')
            })
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  var bg1Parallax = $('#about');
  var bg2Parallax = $('#gallery');
  var bg3Parallax = $('#news');
  $(window).scroll(function () {
    var ChangeY, speed, diffSpeed;
    ChangeY = window.pageYOffset;
    speed = 8;
    diffSpeed = -(ChangeY / speed);
    bg1Parallax.css({ "background-position-y": diffSpeed + "px" });
    
    if (ChangeY > (bg2Parallax.offset().top - 500 )){
      diffSpeed = -((ChangeY - bg2Parallax.offset().top )/ speed);
      bg2Parallax.css({ "background-position-y": diffSpeed + "px" });
      //   bgParallax.css({ "background-position-y": diffSpeed + "px" });
    }

    if (ChangeY > (bg3Parallax.offset().top - 500)) {
      diffSpeed = -((ChangeY - bg3Parallax.offset().top) / speed);
      bg3Parallax.css({ "background-position-y": diffSpeed + "px" });
      //   bgParallax.css({ "background-position-y": diffSpeed + "px" });
    }
  }).scroll();



})(jQuery); // End of use strict
