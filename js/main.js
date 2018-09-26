function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(18.5205, 73.8567),
        zoom: 12
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
$(document).ready(function(){
 $('.header').height($(window).height());
})