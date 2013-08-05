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
    var selector = $(this.hash).selector;
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800, function(){ window.location.hash = selector; });
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

$(window).scroll(function(){
  $('section').each(function(){
    if (
      $(this).offset().top < window.pageYOffset
      //begins before top
      && $(this).offset().top + $(this).height() > window.pageYOffset
      //but ends in visible area
      //+ 10 allows you to change hash before it hits the top border
      ) {
      window.location.hash = $(this).attr('id');
    }
  });
});

$(document.documentElement).keyup(function (event) {

  // handle cursor keys
  if (event.keyCode == 37) {
    // go up
    var urlhash = window.location.hash;
    $(urlhash).find('a.prev').click(); 
  }
  if (event.keyCode == 39) {
    // go down
    var urlhash = window.location.hash;
    $(urlhash).find('a.next').click(); 
  } 
  else {}
});

/************/

window.history.back();

window.history.forward();

/************/

