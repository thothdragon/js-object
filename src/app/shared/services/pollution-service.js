export class PollutionService {

    constructor() {

    }

    retrievePollutionService(cityObject, render, cityName) {
        const xhr = new XMLHttpRequest;
        xhr.open(`GET`, `https://api.waqi.info/feed/${cityName}/?token=69d857f98b6535eeaedad3faea80f44a4195605b`);
        xhr.setRequestHeader(`Accept`, `application/json`);
        xhr.onload = () => {
            const json = JSON.parse(xhr.response);
            cityObject.pollution.airQuality = json.data.aqi;
            cityObject.pollution.fineParticle = json.data.iaqi.pm25.v;
            cityObject.pollution.ozone = json.data.iaqi.o3.v;
            render();
        };
        xhr.send();
    }

}
