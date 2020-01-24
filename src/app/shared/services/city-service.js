import { City } from "../models/city";
import { WeatherService } from "./weather-service";
import { PollutionService } from "./pollution-service";

export class CityService {

    constructor() {
        this.city = new City;
        this.weatherService = new WeatherService(this.city);
        this.pollutionService = new PollutionService(this.city);
    }

    /**
     * @param {String} cityName 
     * @returns {City}
     */
    create(cityName) {
        this.city.name = cityName;
        return this.city;
    }

}
