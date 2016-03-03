var map;

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 11,
center: {lat: 36, lng: 281.1},
disableDefaultUI: true
});
var styles = [
{
stylers: [
  { hue: "#00ffe6" },
  { saturation: -20 }
]
},{
featureType: "road",
elementType: "geometry",
stylers: [
  { lightness: 100 },
  { visibility: "simplified" }
]
},{
featureType: "road",
elementType: "labels",
stylers: [
  { visibility: "off" }
]
}
];
map.setOptions({styles: styles});
map.BicyclingLayer

}
