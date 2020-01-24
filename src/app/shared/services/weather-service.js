export class WeatherService {

    /**
     * @param {City} cityObject 
     */
    constructor(cityObject) {
        this.city = cityObject;
    }
    /**
     * @returns {Promise}
     */
    retrieveWeather() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open(`GET`, `https://api.openweathermap.org/data/2.5/weather?appid=e07ec698e7a0cff9443b2c91b5b6eca6&units=metric&q=${this.city.name}`);
            xhr.setRequestHeader(`Accept`, `application/json`);
            xhr.onload = () => {
                if (200 !== xhr.status) {
                    return reject(xhr.status);
                };
                const json = JSON.parse(xhr.response);
                this.city.weather.description = json.weather[0].main;
                this.city.weather.humidity = json.main.humidity;
                this.city.weather.wind = json.main.pressure;
                this.city.weather.temperature.actual = json.main.temp;
                this.city.weather.temperature.min = json.main.temp_min;
                this.city.weather.temperature.max = json.main.temp_max;
                return resolve(this.city.weather);
            };
            xhr.send();
        });
    }

}
