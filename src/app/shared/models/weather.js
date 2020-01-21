import { Temperature } from "./temperature";

export class Weather {

    constructor() {
        this.description = null;
        this.humidity = null;
        this.wind = null;
        this.temperature = new Temperature();
    }

}
