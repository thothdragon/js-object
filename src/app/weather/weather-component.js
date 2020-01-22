import "./weather-component.scss";

export class WeatherComponent {

    constructor() {
        this.selector = "aw-weather";
        this.template = `
            <h1>Weather</h1>
            <p>
                Température en °C
                <br/>
                Descrition du Temps
            </p>
            <ul>
                <li>L'Humidité</li>
                <li>Force du Vent hPa</li>
                <li>Temp Min en °C - Temp Max en °C</li>
            </ul>
        `;
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
