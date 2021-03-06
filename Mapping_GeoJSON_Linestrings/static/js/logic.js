// Add console.log to check if the code is working.
console.log("working")

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing the GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h4>" + "Airport Name: " + feature.properties.name + "</h4>");
//     }
// }).addTo(map);

// L.geoJSON(sanFranAirport, {
//     // Turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2>" + "<hr>" + "<h4>" + feature.properties.city + ", " + feature.properties.country + "</h4>");
//     }
// }
// ).addTo(map);

// Street view layer for default view of the map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});

// Dark view layer as an option for user
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

// Create a base layer that holds both maps. 
let baseMaps = {
    Street: light,
    Dark: dark
};

// Create the map object with a center and zoom level. 
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark]
});

// Pass the map layers into layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Add the 'graymap' tile layer to the map.
// streets.addTo(map);

let torontoData = "https://raw.githubusercontent.com/fkerimov/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// GRabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2>" + "<hr>" + "<h4>" + "Destination: " + feature.properties.dst + "</h4>")
        }
    }).addTo(map);
});
