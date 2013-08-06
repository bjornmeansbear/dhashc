// Custom JS for dhashc.com
// basically just gets the arrow keys working... everything else got scrapped.

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
    
    if(location.hash === '#feedback'){
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

