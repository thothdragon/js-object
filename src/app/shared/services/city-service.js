import { City } from "../models/city";
import { WeatherService } from "./weather-service";
import { PollutionService } from "./pollution-service";

export class CityService {

    constructor() {
        this.city = new City;
        this.weatherService = new WeatherService;
        this.pollutionService = new PollutionService;
    }

    /**
     * @param {String} cityName 
     * @returns {City}
     */
    create(cityName) {
        this.city.name = cityName;
        return this.city;
    }

    retrieveWeather(render, cityName) {
        this.weatherService.retrieveWeatherService(this.city, render, cityName);
    }

    retrievePollution(render, cityName) {
        this.pollutionService.retrievePollutionService(this.city, render, cityName);
    }

}
