// Add console.log to check if the code is working.
console.log("working")

// Street view layer for default view of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Dark view layer as an option for user
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    accessToken: API_KEY
});

// Create a base layer that holds both maps. 
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with a center and zoom level. 
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass the map layers into layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Add the 'graymap' tile layer to the map.
// streets.addTo(map);

let torontoHoods = "https://raw.githubusercontent.com/fkerimov/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// GRabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        color: "blue",
        fillColor: "yellow",
        weight: 1,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2> Neighborhood: " + feature.properties.AREA_NAME + "</h2>")
        }
    }).addTo(map);
});
