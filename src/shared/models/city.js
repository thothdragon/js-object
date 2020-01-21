import { Weather } from "./weather";
import { Pollution } from "./pollution";

export class City {

    constructor() {
        this.name = `Paris`;
        this.dayTime = `00:00`;
        this.weather = new Weather();
        this.pollution = new Pollution();
    }

}