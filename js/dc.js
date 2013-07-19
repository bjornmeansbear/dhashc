
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
  $('html,body').animate({scrollTop:$('#logic').offset().top}, 800);
});

$('.masthead a').click(function(event){
  event.preventDefault();
  $('ul.nav li').removeClass('active');
  $(this).parent().addClass('active');
});

// layout quote section nicely
$(window).load(function() {
  var wh  = $(window).height();
  var qh  = $('#quote').height();
  var eh  = $('#stayinformed').height();
  var qpad = ((wh-qh)/2);
  var epad = ((wh-eh)/2);
  $('#quote').height(wh-qpad);
  $('#quote').css("padding-top",qpad);
  $('#stayinformed').css("padding-top",epad);
});

$(window).resize(function() {
  var wh  = $(window).height();
  var qh  = $('#quote').height();
  var eh  = $('#stayinformed').height();
  var qpad = ((wh-qh)/2);
  var epad = ((wh-eh)/2);
  $('#quote').height(wh-qpad);
  $('#quote').css("padding-top",qpad);
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

// slidenav stuff
$('#slideshow .cycle-slideshow').on('cycle-initialized', function() {
  var sshgt = $('#slideshow .measure').height();
  $('#slideshow .slidenav .row').height(sshgt).css('margin-top',-sshgt-50);
  $('#slideshow .slidenav .row .span3').height(sshgt);
  $('#slideshow .slidenav .row .span3 a').height((sshgt/2)+50).css('padding-top',(sshgt/2)-50);
});

//getting icon fadein figured out
/* $('.fadeorder').hide(); */

