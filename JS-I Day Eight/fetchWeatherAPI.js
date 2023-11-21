async function fetchWeatherData() {
    try {
        let apiKey = "610935eaa943c37117db8e1bbc86bd6e";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=24.8170&lon=93.9368&appid=${apiKey}&units=metric`);

        let weatherData = await response.json();
        console.log("Location: " + weatherData.name);
        console.log("General Weather: " + weatherData.weather[0].main);
        console.log("Current Temperature: " + weatherData.main.temp, "Max Temperature: " + weatherData.main.temp_max, "Min Temperature: " + weatherData.main.temp_min + " [All figures in degree celsius]");
        console.log("Pressure: " + weatherData.main.pressure + " mBar");
        console.log("Humidity: " + weatherData.main.humidity + " %");

    } catch (error) {
        console.error('Error:', error);
    }
}

fetchWeatherData();

