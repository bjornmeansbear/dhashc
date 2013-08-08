// Custom JS for dhashc.com
// basically just gets the arrow keys working... everything else got scrapped.

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

$('a.invsbl').click(function(event){
  if ($('#open').hasClass('one') && $('#open').hasClass('two') && $('#open').hasClass('three')) {
    var selector = $(this.hash).selector;
    window.location.hash = selector;
  } else {
    event.preventDefault();
  }
});

/************/
/************/

$(document.documentElement).keyup(function (event) {
  
  // handle cursor keys
  if (event.keyCode == 37) {
    // go up
    var urlhash = window.location.hash;

    if(location.hash === '#open'){
      window.location.hash = 'open';
    }

    else {
      var linkhash = $(urlhash).find('a.prev').attr('href');
      window.location.hash = linkhash;
    }
  }
  
  if (event.keyCode == 39) {
    // go down
    var urlhash = window.location.hash;
      
    if(urlhash === ''){
      window.location.hash = 'dhashc';
    }
    
    else if(location.hash === '#feedback'){
      window.location.hash = 'feedback';
    }
    
    else {
      var linkhash = $(urlhash).find('a.next').attr('href');
      window.location.hash = linkhash;
    }

  } 
  else {}
});

/************/
/************/

