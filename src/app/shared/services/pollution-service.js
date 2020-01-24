export class PollutionService {

    /**
     * @param {City} cityObject 
     */
    constructor(cityObject) {
        this.city = cityObject;
    }

    /**
     * @returns {Promise}
     */
    retrievePollution() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open(`GET`, `https://api.waqi.info/feed/${this.city.name}/?token=69d857f98b6535eeaedad3faea80f44a4195605b`);
            xhr.setRequestHeader(`Accept`, `application/json`);
            xhr.onload = () => {
                if (200 !== xhr.status) {
                    return reject(xhr.status);
                };
                const json = JSON.parse(xhr.response);
                this.city.pollution.airQuality = json.data.aqi;
                json.data.iaqi.pm25
                    ? this.city.pollution.fineParticle = json.data.iaqi.pm25.v
                    : this.city.pollution.fineParticle = ` - `;
                json.data.iaqi.o3
                    ? this.city.pollution.ozone = json.data.iaqi.o3.v
                    : this.city.pollution.ozone = ` - `;
                return resolve(this.city.pollution);
            };
            xhr.send();
        });
    }

}
