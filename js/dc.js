
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
$('#slideshow .cycle-slideshow').on('cycle-initialized', function() {
  var sshgt = $('#slideshow .measure').height();
  $('#slideshow .slidenav .row').height(sshgt).css('margin-top',-sshgt-50);
  $('#slideshow .slidenav .row .span3').height(sshgt);
  $('#slideshow .slidenav .row .span3 a').height((sshgt/2)+50).css('padding-top',(sshgt/2)-50);
});

//getting icon fadein figured out
/* $('.fadeorder').hide(); */

