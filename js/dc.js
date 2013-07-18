
$('.scroll').click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$('#quote').click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$('#logic').offset().top}, 800);
});

// layout quote section nicely
$(window).load(function() {
  var wh  = $(window).height();
  var qh  = $('#quote').height();
  var pad = ((wh-qh)/2);
  $('#quote').height(wh-pad);
  $('#quote').css("padding-top",pad);
});

$(window).resize(function() {
  var wh  = $(window).height();
  var qh  = $('#quote .container').height();
  var pad = ((wh-qh)/2);
  $('#quote').height(wh-pad);
  $('#quote').css("padding-top",pad);
});

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

//getting icon fadein figured out
/* $('.fadeorder').hide(); */

