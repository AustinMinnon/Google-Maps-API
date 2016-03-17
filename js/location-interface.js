$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(event.latLng);
  $('#locateUser').click(locateUser);

});
});
function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}

function initialize() {
  var myCenter=new google.maps.LatLng(55.7500,37.6167);
  var mapProp = {
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
  position:myCenter,
  optimized:false,
  icon:'./../js/sham.gif',
  // animation:google.maps.Animation.BOUNCE,
  });
  marker.setMap(map);
}

function locateUser() {
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  var mapObject = new google.maps.Map(document.getElementById("googleMap"), myOptions);
    new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}
