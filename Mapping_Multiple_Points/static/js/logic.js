// Get data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 4,
});

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

// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});
*/

/** SKILLL DRILL:
 * create an orange circle popup marker for each city, with a lineweight of 4, 
 * a radius where the population number is decreased by 200,000,  
 * that's on a dark map. When you click on the circle, 
 * the popup should display the city, state, and the population formatted with a thousands separator.
 */

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  //get the coordinates of each city by adding city.location in the L.marker() function
  //then add each location to the map with the addTo() function and pass themap object as the argument.
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: "#ff8c00",
    fillColor: '#ffa500',
    lineWeight: 4
  })
  //add data from each object in the cities array, use Leaflet's bindPopup() method on the marker() function
  //format the population with a thousands separator, use .toLocaleString()
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});


// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);