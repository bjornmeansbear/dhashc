// Custom JS for dhashc.com
// extend and customize bootstrap as well as add unique, custom functions

/************/
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
/************/

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
    
    if(urlhash === ''){
      $('#open').find('a.next').click();
    }
  } 
  else {}
});

/************/
/************/

