import { City } from "../models/city";
import { WeatherService } from "./weather-service";
import { PollutionService } from "./pollution-service";

export class CityService {

    constructor() {
        this.weatherService = new WeatherService();
        this.pollutionService = new PollutionService();
        this.create(``);
    }

    /**
     * @param {String} cityName 
     * @returns {City}
     */
    create(name) {
        this.city = new City;
        this.city.name = name;
        this.city.weather = this.weatherService.create();
        this.city.pollution = this.pollutionService.create();
        return this.city;
    }

    /**
     * @returns {Promise}
     */
    retrieve() {
        return new Promise((resolve, reject) => {
            this.weatherService
                .retrieveByName(this.city.name)
                .then(() => this.pollutionService.retrieveByName(this.city.name)
                    .then(() => resolve(this.city))
                    .catch(error => reject(error))
                    .finally())
                .catch(error => reject(error))
                .finally();
        });
    }
}
