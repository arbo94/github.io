document.getElementById('searchBox').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:detailingworld.co.uk' + document.getElementById('searchTxt').value;
    return false;
}
function myMap() {
var mapOptions = {
center: new google.maps.LatLng(53.2914023,-6.3612877),
zoom: 15,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
