const currentWeatherBarcelona = document.getElementById('weatherDisplay');

async function getWeather() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=7089bc7979254ad5809103606251004&q=Barcelona&hours=7&aqi=no&alerts=no');

        if(!response.ok) {
            throw new Error('Network response was not ok' + response.status);
        }

        const data = await response.json();

        currentWeatherBarcelona.innerHTML = `
        <div class='currentWeather'>
            <h2>Weather in Barcelona</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon">
            <p>Precipitation: ${data.current.precip_mm}mm</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind: ${data.current.wind_kph} km/h</p>
            <p>Feels like: ${data.current.feelslike_c}°C</p>
        </div>`;

        const forecast = data.forecast.forecastday[0].hour; //the 0 index is the current day
    
        const forecastContainer = document.getElementById('forecastContainer');
        forecast.forEach(hour => {
            const hourDiv = document.createElement('div');
            hourDiv.classList.add('hourForecast');
            hourDiv.innerHTML = `
                <h3>${hour.time.split(' ')[1]}</h3>
                <p>${Math.trunc(hour.temp_c)}°C</p>
                <img src="${hour.condition.icon}" alt="Weather icon">
            `;
            forecastContainer.appendChild(hourDiv);
        }) 
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        currentWeatherBarcelona.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
}



getWeather();