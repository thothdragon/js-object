import "./weather-component.scss";
import { WeatherService } from "../shared/services/weather-service";

export class WeatherComponent {

    /**
     * @param {WeatherService} service 
     */
    constructor(service) {
        this.service = service;
        this.selector = "aw-weather";
        this.template = `
            <div class="center">
                <div>
                    <div>
                        <i class="material-icons">filter_drama</i> 
                        <h2><aw-tempact class="temperature">0</aw-tempact>  °C</h2>
                    </div>
                    <div>
                        <aw-weatherdesc>-</aw-weatherdesc>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="row">
                    <div class="tabs">
                        <div class="tab col s4">
                            <i class="material-icons">bubble_chart</i> 
                            <aw-humidity>-</aw-humidity> %
                        </div>
                        <div class="tab col s4 wind">
                            <i class="material-icons">toys</i> 
                            <aw-wind>-</aw-wind> hPa
                        </div>
                        <div class="tab col s4"><i class="material-icons">swap_vert</i> <aw-tempminmax>0 °C - 0 °C</aw-tempminmax></div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        const element = document.querySelector(this.selector);
        if (!element.innerHTML) {
            element.innerHTML = this.template;
        }
        if (null !== this.service.weather.temperature.actual) {
            document.querySelector(`${this.selector} aw-tempact`)
                .innerHTML = this.service.weather.temperature.actual;
            document.querySelector(`${this.selector} aw-weatherdesc`)
                .innerHTML = this.service.weather.description;
            document.querySelector(`${this.selector} aw-humidity`)
                .innerHTML = this.service.weather.humidity;
            document.querySelector(`${this.selector} aw-wind`)
                .innerHTML = this.service.weather.wind;
            document.querySelector(`${this.selector} aw-tempminmax`)
                .innerHTML = `${this.service.weather.temperature.min} °C - ${this.service.weather.temperature.max} °C`;
        }
    }

}
