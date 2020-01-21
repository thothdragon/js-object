import { Temperature } from "./temperature";

export class Weather {

    constructor() {
        this.description = `Cloud`;
        this.humidity = `40`;
        this.wind = `450`;
        this.temperature = new Temperature();
    }

}