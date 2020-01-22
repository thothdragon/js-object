import "./weather-component.scss";

export class WeatherComponent {

    constructor() {
        this.selector = `aw-weather`;
        this.template = `<p>Et moi je suis le weather-component</p>`;
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
