AOS.init();
function myFunction(x) {
    x.classList.toggle("change");
    $('#mobilemenu').toggle();
  }
  $(window).scroll(function(){
      if($(this).scrollTop()>100)
      {
          $("header").addClass("sticky");
          $(".arrow").show()
      }
      else{
        $("header").removeClass("sticky");
        $(".arrow").hide()

      }
  })
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      center: true,
      dots: true,
      autoplayHoverPause: true,
      responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
            
        },
        1000:{
            items:3,
            
            loop:true,
        }
    }
    });
  });