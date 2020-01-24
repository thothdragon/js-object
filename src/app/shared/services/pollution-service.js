import { Pollution } from "../models/pollution";

export class PollutionService {

    /**
     * @param {City} cityObject 
     */
    constructor() {
        this.create();
        // this.city = cityObject;
    }

    /**
     * @returns {Pollution}
     */
    create() {
        this.pollution = new Pollution;
        return this.pollution;
    }

    /**
     * @param {String} name
     * @returns {Promise}
     */
    retrieveByName(name) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open(`GET`, `https://api.waqi.info/feed/${name}/?token=69d857f98b6535eeaedad3faea80f44a4195605b`);
            xhr.setRequestHeader(`Accept`, `application/json`);
            xhr.onload = () => {
                if (200 !== xhr.status) {
                    return reject(xhr.status);
                };
                const json = JSON.parse(xhr.response);
                this.pollution.airQuality = json.data.aqi;
                json.data.iaqi.pm25
                    ? this.pollution.fineParticle = json.data.iaqi.pm25.v
                    : this.pollution.fineParticle = ` - `;
                json.data.iaqi.o3
                    ? this.pollution.ozone = json.data.iaqi.o3.v
                    : this.pollution.ozone = ` - `;
                return resolve(this.pollution);
            };
            xhr.send();
        });
    }

}
