import "./pollution-component.scss";
import { PollutionService } from "../shared/services/pollution-service";

export class PollutionComponent {

    /**
     * @param {PollutionService} service 
     */
    constructor(service) {
        this.service = service;
        this.selector = "aw-pollution";
        this.template = `
            <ul class="center">
                <li>Air Quality <aw-aqi></aw-aqi></li>
                <li>Fine Particle <aw-pm25></aw-pm25></li>
                <li>Ozone <aw-o3></aw-o3></li>
            </ul>
        `;
    }

    render() {
        const element = document.querySelector(this.selector);
        if (!element.innerHTML) {
            element.innerHTML = this.template;
        }
        if (null !== this.service.pollution.airQuality) {
            document.querySelector(`${this.selector} aw-aqi`)
                .innerHTML = this.service.pollution.airQuality;
            document.querySelector(`${this.selector} aw-pm25`)
                .innerHTML = this.service.pollution.fineParticle;
            document.querySelector(`${this.selector} aw-o3`)
                .innerHTML = this.service.pollution.ozone;
        }
    }
    
}
