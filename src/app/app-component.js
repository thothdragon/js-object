import "./app-component.scss";
import { WeatherComponent } from "./weather/weather-component";
import { PollutionComponent } from "./pollution/pollution-component";
import { ProgressComponent } from "./progress/progress-component";

export class AppComponent {

    constructor() {
        this.selector = 'aw-app';
        this.template = `
            <aw-progress></aw-progress>
            <h1>Je suis app-component</h1>
            <aw-weather></aw-weather>
            <aw-pollution></aw-pollution>            
            `;
        this.weatherComponent = new WeatherComponent();
        this.pollutionComponent = new PollutionComponent();
        this.progressComponent = new ProgressComponent();
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
        this.weatherComponent.render();
        this.pollutionComponent.render();
        this.progressComponent.render();
    }

}
