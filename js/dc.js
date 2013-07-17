
$('.scroll').click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

//getting icon fadein figured out
$('.fadeorder').hide();

/************/

var uno = $('.uno .cycle-slideshow');
var dos = $('.dos .cycle-slideshow');
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