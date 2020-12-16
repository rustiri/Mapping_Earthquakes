// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// To add another map:
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// Next, add both map variables to a new variable called baseMaps, will be use as base layer
// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with geographical center of the Earth, zoom level of 2 and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Create the map object with geographical center of the Earth and zoom level of 2.
//let map = L.map('mapid').setView([30, 30], 2);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL (json file on GitHub)
let airportData = "https://raw.githubusercontent.com/rustiri/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "<h2><hr><h3>Airport Name: " + feature.properties.name + "<h3>");
    }
  }).addTo(map);
});


/***** THIS IS MODULE 13.5.2 MAP A GEOJSON POINT WITH GEOMETRY TYPE
 ***** to add data to a marker are to use the pointToLayer or onEachFeature callback functions.
 * 
 *** SEE BELOW CODE EXAMPLE ***
 
// Add GeoJSON data: FeatureCollection object
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Grabbing our GeoJSON data, using pointToLayer callback function
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    //add a popup marker, use the bindPopup() method
    .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + "</h3>");
  }

}).addTo(map);
*/

/*
// Grabbing our GeoJSON data, using onEachFeature callback function
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "<h2><hr><h3>Airport Name: " + feature.properties.name + "<h3>");
  }

}).addTo(map);

// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

*/





