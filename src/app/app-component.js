import "./app-component.scss";
import { WeatherComponent } from "./weather/weather-component";
import { PollutionComponent } from "./pollution/pollution-component";

export class AppComponent {

    constructor() {
        this.selector = 'aw-app';
        this.template = `
            <h1>Je suis app-component</h1>
            <aw-weather></aw-weather>
            <aw-pollution></aw-pollution>
            `;
        this.weatherComponent = new WeatherComponent();
        this.pollutionComponent = new PollutionComponent;
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
        this.weatherComponent.render();
        this.pollutionComponent.render();
    }

}
