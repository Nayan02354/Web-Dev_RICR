const API_KEY = "02b725ed797324151f6e18bc35b96579";

async function getWeather() {
  // Get city name
  const cityName = document.getElementById("cityName").value.trim();

  // Get latitude & longitude
  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  // Weather API
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}&units=metric`;

  // Fetch API
  const response = await fetch(WEATHER_API);

  const data = await response.json();

  console.log(data);

  // Correct property names
  const Temperature = data.main.temp;

  const Humidity = data.main.humidity;

  const tempMin = data.main.temp_min;

  const tempMax = data.main.temp_max;

  // Show values
  document.getElementById("Temperature").innerText = Temperature.toFixed(2);

  document.getElementById("Humidity").innerText = Humidity;

  document.getElementById("minTemp").innerText = tempMin.toFixed(2);

  document.getElementById("maxTemp").innerText = tempMax.toFixed(2);
}

// Get latitude & longitude
async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);

  const data = await response.json();

  console.log(data);

  const Lattitude = data[0].lat;

  const Longitude = data[0].lon;

  return {
    Lattitude,
    Longitude,
  };
}
