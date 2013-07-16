$(document).ready(function() {
  var wh = $(window).height();
  $(".subsection").height(wh);
  $(".subsection section.container").each(function() {
    var sh = $(this).find(".row").height();
    $(this).css("padding-top",(wh-sh)/2);
  });
});

$(".scroll").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});


/*
$(document).ready(function() {
  $(".slide").hide();
  $(".fadein.animate").hide();

  var fs = 3000;
  
  $(".slide.first").fadeIn(fs, function () {
    $(".fadein.one").fadeIn(fs, function () {
      $(".fadein.two").fadeIn(fs, function () {
        $(".fadein.three").fadeIn(fs);
      });
    });
  });
});
*/

// cycle2 stopping...
// http://stackoverflow.com/questions/14277438/jquery-stop-the-cycle2-plugin-slider

/*
$('.cycle-slideshow').on('cycle-after', function (e, opts, API) {
  if (slideNum === slideCount) {
    $('.cycle-slideshow').cycle('pause');
    $('#next').hide();
    }
  else {}
});
*/