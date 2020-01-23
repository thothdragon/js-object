export class WeatherService {

    constructor() {

    }

    retrieveWeatherService(cityObject,render,cityName) {
        const xhr = new XMLHttpRequest;
        xhr.open(`GET`, `https://api.openweathermap.org/data/2.5/weather?appid=e07ec698e7a0cff9443b2c91b5b6eca6&units=metric&q=${cityName}`);
        xhr.setRequestHeader(`Accept`, `application/json`);
        xhr.onload = () => {
            const json = JSON.parse(xhr.response);
            cityObject.weather.description = json.weather[0].main;
            cityObject.weather.humidity = json.main.humidity;
            cityObject.weather.wind = json.main.pressure;
            cityObject.weather.temperature.actual = json.main.temp;
            cityObject.weather.temperature.min = json.main.temp_min;
            cityObject.weather.temperature.max = json.main.temp_max;
            render();
        };
        xhr.send();
    }

}
