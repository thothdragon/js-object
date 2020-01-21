import { Weather } from "./weather";
import { Pollution } from "./pollution";

export class City {

    constructor() {
        this.name = null;
        this.dayTime = null;
        this.weather = new Weather();
        this.pollution = new Pollution();
    }

}
