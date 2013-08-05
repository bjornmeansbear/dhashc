// Custom JS for dhashc.com
// extend and customize bootstrap as well as add unique, custom functions

/************/

/* Navigation related stuff */
$('.scroll').click(function(event){    
  event.preventDefault();
  var selector = $(this.hash).selector;
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800, function(){ window.location.hash = selector; });
});

$('a.invsbl').click(function(event){
  if ($('#open').hasClass('one') && $('#open').hasClass('two') && $('#open').hasClass('three')) {
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  } else {
    event.preventDefault();
  }
});
/* END Navigation related stuff */

/************/
var uno  = $('.uno .cycle-slideshow');
var dos  = $('.dos .cycle-slideshow');
var tres = $('.tres .cycle-slideshow');
uno.on('cycle-finished', function() {
  $('#open').addClass('one');
});
dos.on('cycle-finished', function() {
  $('#open').addClass('two');
});
tres.on('cycle-finished', function() {
  $('#open').addClass('three');
});
/************/

$(document.documentElement).keyup(function (event) {
  // handle cursor keys
  if (event.keyCode == 37) {
    // go up
    $('article > section').each(function() {
      $(this).parent().find('a.prev').click(); 
    });
  } else if (event.keyCode == 39) {
    // go down
    $('article > section').each(function() {
      $(this).parent().find('a.next').click(); 
    });
  }
});

