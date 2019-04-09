(function ($) {
  "use strict"; // Start of use strict

  document.addEventListener('DOMContentLoaded', function () {
    //Wrapper animation
    anime.timeline({
      targets: ".welcome",
    })
    .add({
      width: ["0vw", "100vw"],
      opacity: 1,
      duration: 1200,
      easing: "easeOutExpo",
    })
    .add({
      targets: ".heading",
      opacity: 1,
      duration: 1200,
      translateY: ["-30px", "0px"],
      easing: "linear",
    })
    .add({
      targets: ".sub-heading",
      opacity: 1,
      duration: 1200,
      translateY: ["-30px", "0px"],
      easing: "easeOutExpo",
    })
    .add({
      targets: ".loader-wrapper",
      duration: 1800,
      opacity: 1,
      easing: "linear",
    })
    .add({
      targets: ".loader",
      duration: 2300,
      width: ["0", "100%"],
      easing: "easeOutExpo",
    })
    .add({
      easing: "easeOutExpo",
      translateX: "100vw",
      duration: 1500,
      complete: function (anime) {
        document.querySelector('.welcome').remove();
      }
    })


  });

  // document.addEventListener('load', function () {
  //   anime.timeline({
  //     easing: 'easeOutExpo'
  //   })
  //   .add({
  //     targets: '.navbar a',
  //     opacity: [0,1],
  //     translateY: [30, 0],
  //   })
    
  // });

})(jQuery); // End of use strict
