import { Weather } from "../models/weather";

export class WeatherService {

    /**
     * @param {City} cityObject 
     */
    constructor() {
        this.create();
        // this.city = cityObject;
    }

    /**
     * @returns {Weather}
     */
    create() {
        this.weather = new Weather;
        return this.weather;
    }

    /**
     * @param {String} name
     * @returns {Promise}
     */
    retrieveByName(name) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open(`GET`, `https://api.openweathermap.org/data/2.5/weather?appid=e07ec698e7a0cff9443b2c91b5b6eca6&units=metric&q=${name}`);
            xhr.setRequestHeader(`Accept`, `application/json`);
            xhr.onload = () => {
                if (200 !== xhr.status) {
                    return reject(xhr.status);
                };
                const json = JSON.parse(xhr.response);
                console.log(json);

                this.weather.description = json.weather[0].main;
                this.weather.humidity = json.main.humidity;
                this.weather.wind = json.main.pressure;
                this.weather.temperature.actual = json.main.temp;
                this.weather.temperature.min = json.main.temp_min;
                this.weather.temperature.max = json.main.temp_max;
                return resolve(this.weather);
            };
            xhr.send();
        });
    }

    /**
     * 
     * @param {Number} latitude 
     * @param {Number} longitude
     * @returns {Promise} 
     */
    retrieveByCoords(latitude, longitude) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open(`GET`, `https://api.openweathermap.org/data/2.5/weather?appid=e07ec698e7a0cff9443b2c91b5b6eca6&units=metric&lat=${latitude}&lon=${longitude}`);
            xhr.setRequestHeader(`Accept`, `application/json`);
            xhr.onload = () => {
                if (200 !== xhr.status) {
                    return reject(xhr.status);
                };
                const json = JSON.parse(xhr.response);
                this.weather.description = json.weather[0].main;
                this.weather.humidity = json.main.humidity;
                this.weather.wind = json.main.pressure;
                this.weather.temperature.actual = json.main.temp;
                this.weather.temperature.min = json.main.temp_min;
                this.weather.temperature.max = json.main.temp_max;
                return resolve(json.name);
            };
            xhr.send();
        });
    }

}
