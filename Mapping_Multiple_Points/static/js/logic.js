// Add console.log to check if the code is working.
console.log("working")

let cityData = cities;

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.8283, -98.5795], 4); 

// //Alternatively: 
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom:4
// })

  // Loop through the cities array and create one marker for each city
  cityData.forEach(city => {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        weight: 4,
        color: 'orange'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Create tile layer for the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

// Add the 'graymap' tile layer to the map.
streets.addTo(map);