const tableData = document.getElementById('weather-info');
let locationCoord = [];
const locationCoordinates = navigator.geolocation.getCurrentPosition((response) => {
    // console.log(response.coords.latitude);
    return locationCoord.push(response);
})
console.log(locationCoord[0]);
// console.log(locationCoord[0].coords.latitude);
// console.log(locationCoord[0].coords.longitude);
const weatherApi = async (lat, lon) => {
    lat = locationCoord[0].coords.latitude;
    lon = locationCoord[0].coords.longitude;
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=40548cc5b12a46ee9418e263dd707583`
    );
    let data = await response.json();
    console.log(data);
};

weatherApi();