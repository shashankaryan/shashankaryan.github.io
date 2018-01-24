$(document).ready(function(){

  // ONE PAGE SCROLL INIT
  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    loop: true,
    responsiveFallback: false
  });

  var parallaxSettings = {
    initialOpacity: 1, //from 0 to 1, e.g. 0.34 is a valid value. 0 = transparent, 1 = Opaque
    opacitySpeed: 0.1, //values from 0.01 to 1 -> 0.01: slowly appears on screen; 1: appears as soon as the user scrolls 1px
    pageLoader: true
  };

  // parallaxImgScroll(parallaxSettings);

});
