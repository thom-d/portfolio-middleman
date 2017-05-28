// This is where it all goes :)



$(document).ready(function() {

// Introduction text/cta - fades in during page load. 

$(".text-intro, .jumbo-text, .cta-work").hide().fadeIn(2000);


// "Featured Work" and "About" links 
// On click scrolls down to portfolio gallery and about section

$(".my-gallery").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".cards").offset().top}, 1500);    
});

$(".my-blurb").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("footer").offset().top}, 1500);    
});

// Call-To-Action
// On click scrolls down to portfolio gallery

$(".cta-work").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".cards").offset().top}, 1500);    
});


// Gallery Card
// On hover, project title transitions to unique color

var grid = ".card-title";

$( ".card" ).hover (function() {
		$( this ).children(".card-title").css( "background-color", "#303030" );
  });
$( ".card" ).mouseleave (function() {
		$( this ).children(".card-title").css( "background-color", "#363636" );
  });


// Return link/button
// On click scrolls up to page header

$(".btn-return").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("header").offset().top}, 1500);    
});  

});