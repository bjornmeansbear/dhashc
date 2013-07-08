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