import "./app-component.scss";
import { WeatherComponent } from "./weather/weather";

export class AppComponent {

    constructor() {
        this.selector = 'aw-app';
        this.template = `
            <h1>Je suis app-component</h1>
            <aw-weather></aw-weather>
            `;
        this.weatherComponent = new WeatherComponent();
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
        this.weatherComponent.render();
    }

}
