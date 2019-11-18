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

//   var sections = $('section')
//   , nav = $('nav')
//   , nav_height = nav.outerHeight();

// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();
  
//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();
    
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');
      
//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });

// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });
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

var waypoint = new Waypoint({
  element: document.getElementById('top'),
  handler: function() { 
    home.classList.toggle("activeC");
  }
})