$(document).ready(function() {

    //activate wow.js
     new WOW().init();

    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['01', '02', '03', '04', '05', '06'],
      loopBottom: true,
      sectionSelector: 'section'
    });

    // Flickity Settings
    $('.carousel').flickity().flickity('next').flickity( 'select', 3 );
});
