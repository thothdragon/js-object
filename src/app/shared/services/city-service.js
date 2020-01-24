import { City } from "../models/city";
import { WeatherService } from "./weather-service";
import { PollutionService } from "./pollution-service";
import { PositionService } from "./position-service";

export class CityService {

    constructor() {
        this.positionService = new PositionService();
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

    /**
     * @returns {Promise}
     */
    retrieveByCurrentPosition() {
        return new Promise((resolve, reject) => {
            this.positionService
                .retrieve()
                .then(geolocalisation => {
                    this.weatherService.retrieveByCoords(geolocalisation.coords.latitude, geolocalisation.coords.longitude)
                        .then((name) => {
                            this.city.name = name;
                            this.pollutionService.retrieveByName(name)
                                .then(() => resolve(name))
                                .catch(() => reject(error))
                                .finally()
                        })
                        .catch(error => reject(error))
                        .finally()
                })
                .catch(error => reject(error))
                .finally();
        })
    }
}
