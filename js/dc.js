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