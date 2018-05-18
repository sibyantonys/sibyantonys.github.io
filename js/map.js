function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(9.981505499999999, 76.2822238),
    zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var markerOptions = {
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF0000',
    position: {lat: 9.981505499999999, lng: 76.2822238},
    map:map
  }
  var beachMarker = new google.maps.Marker(markerOptions);
}