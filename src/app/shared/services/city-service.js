import { City } from "../models/city";

export class CityService {

    constructor() {
        this.city = new City;
    }

    /**
     * @param {String} cityName 
     * @returns {City}
     */
    create(cityName) {
        this.city.name = cityName;
        return this.city;
    }

    retrieveWeather (render,cityName) {
        const xhr = new XMLHttpRequest;
        xhr.open(`GET`, `https://api.openweathermap.org/data/2.5/weather?appid=e07ec698e7a0cff9443b2c91b5b6eca6&units=metric&q=${cityName}`);
        xhr.setRequestHeader(`Accept`, `application/json`);
        xhr.onload = () => {
            console.log(cityName);
            
            const json = JSON.parse(xhr.response);
            this.city.weather.description = json.weather[0].main;
            this.city.weather.humidity = json.main.humidity;
            this.city.weather.wind = json.main.pressure;
            this.city.weather.temperature.actual = json.main.temp;
            this.city.weather.temperature.min = json.main.temp_min;
            this.city.weather.temperature.max = json.main.temp_max;
            render();
        };
        xhr.send();
    }

}
