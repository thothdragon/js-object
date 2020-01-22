import "./weather-component.scss";

export class WeatherComponent {

    constructor() {
        this.selector = "aw-weather";
        this.template = "<h1>Weather</h1>";
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
