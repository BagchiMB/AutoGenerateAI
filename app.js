var scroll = new SmoothScroll('.navbar a[href*="#"]',{
    speed:1000,
    clip:true
    // offset:2
});
var scroll = new SmoothScroll('.contentDis a[href*="#"]',{
  speed:1000,
  clip:true
  // offset:2
});
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }


var ok = document.getElementById('nikl');
ok.addEventListener("click", function(){
  overlay.style.display = "none";
});





var features = document.getElementById("FN");
var about = document.getElementById("AUN");
var designs = document.getElementById("DN");
var team = document.getElementById("TN");
var home = document.getElementById("HN");


var waypoint = new Waypoint({
  element: document.getElementById('AUNav'),
  handler: function() { 
    home.classList.toggle("activeC");
    about.classList.toggle("activeC");
  }
})

var waypoint = new Waypoint({
  element: document.getElementById('FNav'),
  handler: function() { 
    about.classList.toggle("activeC");
    features.classList.toggle("activeC");
  }
})

var waypoint = new Waypoint({
  element: document.getElementById('DNav'),
  handler: function() { 
    features.classList.toggle("activeC");
    designs.classList.toggle("activeC");
  }
})

var waypoint = new Waypoint({
  element: document.getElementById('TNav'),
  handler: function() { 
    designs.classList.toggle("activeC");
    team.classList.toggle("activeC");
  }
})




// Scrooooooolllllllllllllllllllllllllllll
$(".featuress").click(function(){
  $('html,body').animate({
    scrollTop: $("#FN2").offset().top-73},
    'slow')
  });
$(".teamm").click(function(){
  $('html,body').animate({
    scrollTop: $("#TN2").offset().top-83},
    'slow')
  });
$(".aboutUss").click(function(){
  $('html,body').animate({
    scrollTop: $("#AU").offset().top-90},
    'slow')
  });
$(".Designn").click(function(){
  $('html,body').animate({
    scrollTop: $("#DN2").offset().top-73},
    'slow')
  });
$(".Homee").click(function(){
  $('html,body').animate({
    scrollTop: $("#HN2").offset().top-73},
    'slow')
  });
$(".demoo").click(function(){
  $('html,body').animate({
    scrollTop: $("#DE").offset().top-73},
    'slow')
  });

  // function myFunction(){
  //   if( window.screen.width < 500 ){
  //     document.getElementById('FN2').removeAttribute('data-aos');
  //   }else if( window.screen.width > 500 ){
  //     document.getElementById('FN2').addAttribute('data-aos');
  //   }
  // }

  // if( window.screen.width < 500 ){
// $("a[href^=#]").on("click",function(e)
// {
//   e.preventDefault();
//   history.pushState({},"",this.href);
// });