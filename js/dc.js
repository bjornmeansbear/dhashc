// Custom JS for dhashc.com
// extend and customize bootstrap & cycle2, as well as add unique, custom functions

/************/

/* Navigation related stuff */
/* Navigation related stuff */
/* Navigation related stuff */

$('.scroll').click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$('#quote').click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$('#quote2').offset().top}, 800);
});

$('.linktosi').click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$('#stayinformed').offset().top}, 800);
});

/* END Navigation related stuff */
/* END Navigation related stuff */
/* END Navigation related stuff */

/************/

var uno  = $('.uno .cycle-slideshow');
var dos  = $('.dos .cycle-slideshow');
var tres = $('.tres .cycle-slideshow');

uno.on('cycle-finished', function() {
  $('#intro').addClass('one');
});

dos.on('cycle-finished', function() {
  $('#intro').addClass('two');
});

tres.on('cycle-finished', function() {
  $('#intro').addClass('three');
});

var outer = $('#slideshow .cycle-slideshow');
var inner = $('#revealingss');

outer.on( 'cycle-finished', function() {
  inner.cycle();
  $('.fadeorder').show();
});

/************/

// making the next/prev links hide when not needed...

