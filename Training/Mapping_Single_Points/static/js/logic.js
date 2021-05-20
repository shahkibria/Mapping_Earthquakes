// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([40.7, -94.5], 4);

// Add TILE LAYER USING LEAFLET DOCUMENTATION (MODULE 13.2.4)

// We create the tile layer that will be the background of our map.
//var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    //accessToken: API_KEY
//});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Add TILE LAYER USING MAPBOX STYLE API (MODULE 13.2.4)

// We create the tile layer that will be the background of our map.
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Code to add a circle to the map for Los Angeles, California.
// var circle = L.circleMarker([34.0522, -118.2437], {
    // color: "black",
    // fillColor: '#33FF00',
    // fillOpacity: 0.5,
    // radius: 30
// }).addTo(map);

// Code to add a marker instead of a circle
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

// Get data from cities.js
var cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {radius: city.population/100000})
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Coordinates for each point to be used in the polyline.
var line = [
    [34.0522, -118.2437],
    [33.4484, -112.0740],
    [29.7604, -95.3698],
    [41.8781, -87.6298],
    [40.7128, -74.0059]
  ];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

 
