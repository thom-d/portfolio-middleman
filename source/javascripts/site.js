// This is where it all goes :)



$(document).ready(function() {


$(".text-intro, .jumbo-text, .cta-work").hide().fadeIn(2000);


// Portfolio and Contact links should smooth scroll to their correct paths

// Navigation bar links  -- "featured work" and "contact" 
// Featured Work button
$(".my-gallery").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".cards").offset().top}, 1500);    
});

$(".my-blurb").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("footer").offset().top}, 1500);    
});

// Contact button
$(".cta-work").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".cards").offset().top}, 1500);    
});



$(".btn-return").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("header").offset().top}, 1500);    
});  

});