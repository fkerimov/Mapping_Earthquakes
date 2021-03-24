// Add console.log to check if the code is working.
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0687, -118.3228], 14); 

// //Alternatively: 
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom:4
// })

// Add a marker to the map for LA, CA
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Add circle
L.circleMarker([34.0687, -118.3228], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
}).addTo(map);

// Create tile layer for the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'dark-v10',
    //     tileSize: 512,
    //     accessToken: API_KEY
    // });
// Add the 'graymap' tile layer to the map.
streets.addTo(map);