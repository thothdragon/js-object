import "./weather-component.scss";

export class WeatherComponent {

    constructor(service) {
        this.service = service;
        this.selector = "aw-weather";
        this.template = `
            <p>
                <aw-tempact></aw-tempact>
                <br/>
                <aw-weatherdesc></aw-weatherdesc>
            </p>
            <ul>
                <li><aw-humidity></aw-humidity></li>
                <li><aw-wind></aw-wind></li>
                <li><aw-tempminmax></aw-tempminmax></li>
            </ul>
        `;
    }

    render() {

        const element = document.querySelector(this.selector);
        if (!element.innerHTML) {
            element.innerHTML = this.template;
        }
        if (null !== this.service.city.weather.temperature.actual) {
            document.querySelector(`${this.selector} aw-tempact`).innerHTML = `${this.service.city.weather.temperature.actual}  °C`;
            document.querySelector(`${this.selector} aw-weatherdesc`).innerHTML = this.service.city.weather.description;
            document.querySelector(`${this.selector} aw-humidity`).innerHTML = `${this.service.city.weather.humidity} %`;
            document.querySelector(`${this.selector} aw-wind`).innerHTML = `${this.service.city.weather.wind} hPa`;
            document.querySelector(`${this.selector} aw-tempminmax`)
                .innerHTML = `${this.service.city.weather.temperature.min} °C - ${this.service.city.weather.temperature.max} °C`;
        }

    }

}
