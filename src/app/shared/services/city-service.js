import { City } from "../models/city";
import { WeatherService } from "./weather-service";
import { PollutionService } from "./pollution-service";

export class CityService {

    constructor() {
        this.create(``);
        this.weatherService = new WeatherService(this.city);
        this.pollutionService = new PollutionService(this.city);
    }

    /**
     * @param {String} cityName 
     * @returns {City}
     */
    create(cityName) {
        this.city = new City;
        this.city.name = cityName;
        this.city.weather = this.weatherService.create();
        this.city.pollution = this.pollutionService.create();
        return this.city;
    }

    /**
     * @param {String} name
     * @returns {Promise}
     */
    retrieveCity(name) {
        return new Promise((resolve, reject) => {
            this.weatherService
                .retrieveWeather(name)
                .then(() => this.pollutionService.retrievePollution(name)
                    .then(() => resolve(this.city))
                    .catch(error => reject(error))
                    .finally())
                .catch(error => reject(error))
                .finally();
        });
    }
}
