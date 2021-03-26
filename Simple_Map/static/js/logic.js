// Add console.log to check if the code is working.
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4); 

// //Alternatively: 
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom:4
// })

// Create tile layer for the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add the 'graymap' tile layer to the map.
streets.addTo(map);