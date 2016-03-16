// var geolocationSuccess = require('./../js/location.js').geolocationSuccess;
// var geolocationError = require('./../js/location.js').geolocationError;
$(document).ready(function() {
  // $('#locateUser').click(locateUser);
  google.maps.event.addDomListener(window, 'load', initialize);
});
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

//google maps functions
// function locateUser() {
//   // If the browser supports the Geolocation API
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 10 * 1000 // 10 seconds
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }
//
// function geolocationSuccess(position) {
// var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
// var myOptions = {
//   zoom : 16,
//   center : userLatLng,
//   mapTypeId : google.maps.MapTypeId.ROADMAP
// };
// // Draw the map - you have to use 'getElementById' here.
// var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
// // Place the marker
// new google.maps.Marker({
//   map: mapObject,
//   position: userLatLng
// });
// };
//
// exports.geolocationError = function(positionError) {
// alert(positionError);
// };
