$(document).ready(function(){

  $(window).on('scroll', function(e){
      var position = $(this).scrollTop();
      if(position > 100) {
        $('#navigation').addClass('fixed');
        $('.nav__logo').addClass('nav__logo--show');
      } else {
        $('#navigation').removeClass('fixed');
        $('.nav__logo').removeClass('nav__logo--show');
      }
  });


  if((window.location.href).indexOf('branch.html') !== -1) {
    var map = new GMaps({
      div: '#map',
      lat: 14.5995,
      lng: 120.9842,
      zoom: 12
    });

    map.addMarker({
      lat: 14.5708578,
      lng: 121.047485,
      title: 'Robinsons Forum',
      click: function(e) {
        // alert('You clicked in this marker');
      }
    });

    map.addMarker({
      lat: 14.6197183,
      lng: 121.0544803,
      title: 'New Alimall',
      click: function(e) {
        // alert('You clicked in this marker');
      }
    });
    map.addMarker({
      lat: 14.5831629,
      lng: 121.0513329,
      title: 'Star Mall Shaw',
      click: function(e) {
        // alert('You clicked in this marker');
      }
    });
  }

});
