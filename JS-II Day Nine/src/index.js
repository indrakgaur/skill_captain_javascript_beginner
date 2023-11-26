import "./main.css";

const apiKey = '610935eaa943c37117db8e1bbc86bd6e';
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
console.log("test");
searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherInfo = `Temperature: ${temperature}°C
Weather: ${description}`;
    weatherResult.innerHTML = weatherInfo;
}