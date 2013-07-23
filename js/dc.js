// FITTEXT
/* $(".fadeorder h2").fitText(); */

/* Navigation related stuff */
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

$('#menu').hide();

$(window).scroll(function() {
  var sd = $(window).scrollTop();
  var ld = $('#logic').height();
  if (sd >= ld ) {
    $('#menu').fadeIn('fast');
  } else {}
  
  $('.sometext').text(ld);
});

/*
$('.masthead a').click(function(event){
  event.preventDefault();
  $('ul.nav li').removeClass('active');
  $(this).parent().addClass('active');
});
*/

// layout quote section nicely
$(window).load(function() {
  var wh    = $(window).height();
  var qh    = $('#quote').height();
  var qh2   = $('#quote2').height();
  var eh    = $('#stayinformed').height();
  var qpad  = ((wh-qh)/2);
  var q2pad = ((wh-qh2)/2);
  var epad  = ((wh-eh)/2);
  $('#quote').height(wh-qpad);
  $('#quote2').height(wh-q2pad);
  $('#quote').css("padding-top",qpad);
  $('#quote2').css("padding-top",q2pad);
  $('#stayinformed').css("padding-top",epad);
});

$(window).resize(function() {
  var wh    = $(window).height();
  var qh    = $('#quote').height();
  var qh2   = $('#quote2').height();
  var eh    = $('#stayinformed').height();
  var qpad  = ((wh-qh)/2);
  var q2pad = ((wh-qh2)/2);
  var epad  = ((wh-eh)/2);
  $('#quote').height(wh-qpad);
  $('#quote2').height(wh-q2pad);
  $('#quote').css("padding-top",qpad);
  $('#quote2').css("padding-top",q2pad);
  $('#stayinformed').css("padding-top",epad);
});

/* END Navigation related stuff */
/* END Navigation related stuff */
/* END Navigation related stuff */
/* END Navigation related stuff */


/************/

var uno  = $('.uno .cycle-slideshow');
var dos  = $('.dos .cycle-slideshow');
var tres = $('.tres .cycle-slideshow');
var fs   = 1000;

uno.on('cycle-finished', function() {
  $('#intro').addClass('one');
/*   $('.uno .minipostit-pager').fadeOut(fs); */
});

dos.on('cycle-finished', function() {
  $('#intro').addClass('two');
/*   $('.dos .minipostit-pager').fadeOut(fs); */
});

tres.on('cycle-finished', function() {
  $('#intro').addClass('three');
/*   $('.tres .minipostit-pager').fadeOut(fs); */
});

/************/

var outer = $('#slideshow .cycle-slideshow');
var inner = $('#revealingss');

outer.on( 'cycle-finished', function() {
  inner.cycle();
  $('.fadeorder').show();
});
