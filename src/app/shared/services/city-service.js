import { City } from "../models/city";

export class CityService {

    constructor() {
        this.city = null;
    }

    /**
     * @param {String} cityName 
     * @returns {City}
     */
    create(cityName) {
        this.city = new City;
        this.city.name = cityName;
        return this.city;
    }

}
