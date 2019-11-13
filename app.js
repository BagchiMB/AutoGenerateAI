var scroll = new SmoothScroll('.navbar a[href*="#"]',{
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