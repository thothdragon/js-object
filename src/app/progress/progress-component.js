import "./progress-component.scss";
import { CityService } from "../shared/services/city-service";

export class ProgressComponent {

    /**
     * @param {CityService} service 
     */
    constructor(service) {
        this.service = service;
        this.selector = "aw-progress";
        this.template = `
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        `;
    }

    render() {
        let html = ``;
        if (this.service.city.name 
            && !this.service.city.weather.temperature.actual) {
            html = this.template;
        };
        document.querySelector(this.selector).innerHTML = html;
    }

}
