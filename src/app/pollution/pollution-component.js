import "./pollution-component.scss";

export class PollutionComponent {

    /**
     * @param {CityService} service 
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
        if (null !== this.service.city.pollution.airQuality) {
            document.querySelector(`${this.selector} aw-aqi`)
                .innerHTML = this.service.city.pollution.airQuality;
            document.querySelector(`${this.selector} aw-pm25`)
                .innerHTML = this.service.city.pollution.fineParticle;
            document.querySelector(`${this.selector} aw-o3`)
                .innerHTML = this.service.city.pollution.ozone;
        }
    }
    
}
