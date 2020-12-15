// Get data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level between LAX and SFO
// Change the zoom level in the setView() method to 7.
//let map = L.map("mapid").setView([36.1733, -120.1794], 7)

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

/*
// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
*/

/*
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  //get the coordinates of each city by adding city.location in the L.marker() function
  //then add each location to the map with the addTo() function and pass themap object as the argument.
  L.circleMarker(city.location, {
    //change the marker for each city to a circle that has a radius equivalent to the city's population
    //divide by 100000
    radius: city.population/100000
  })
  //add data from each object in the cities array, use Leaflet's bindPopup() method on the marker() function
  //format the population with a thousands separator, use .toLocaleString()
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
*/

/** SKILL DRILL:
 * create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops:
 * Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). 
 * Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map. 
 * 
 * Hint: You'll need to find the coordinates for some of these airports.
 * Bonus: Add your city or another city as a stopping point.
 * 
 */

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1974711, -97.6663529],
  [43.6777176, -79.6248197],
  [40.6413111, -73.7781391]
];

// Create a polyline using the line coordinates and make the line blue.
L.polyline(line, {
  color: "blue",
  width: 3,
  opacity: 0.5,
  dashArray: '20,15',
  lineJoin: 'round'
}).addTo(map);

// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
