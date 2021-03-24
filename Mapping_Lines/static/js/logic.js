// Add console.log to check if the code is working.
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5); 

// //Alternatively: 
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom:4
// })

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

//Create a polyline using the line coordinates and make the line red. 
L.polyline(line, {
    color: "yellow"
}).addTo(map);

let line2 = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.4558, -80.3858],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

L.polyline(line2, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: "5 10"
}).addTo(map);

// Create tile layer for the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Add the 'graymap' tile layer to the map.
streets.addTo(map);