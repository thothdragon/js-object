import "./app-component.scss";
import { WeatherComponent } from "./weather/weather-component";
import { PollutionComponent } from "./pollution/pollution-component";
import { ProgressComponent } from "./progress/progress-component";
import { CityService } from "./shared/services/city-service";

export class AppComponent {

    constructor() {
        this.service = new CityService;
        this.components = [
            // new WeatherComponent(this.service),
            // new PollutionComponent(this.service),
            // new ProgressComponent(this.service)
        ];
        this.selector = `aw-app`;
        this.template = `
            <aw-progress></aw-progress>
            <nav>
                <div class="nav-wrapper city-list">
                    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                    <a href="#" class="brand-logo center city-name"></a>
                </div>
            </nav>
            <ul id="slide-out" class="sidenav">
                <h3>Cities</h3>
                <div class="input-field">
                    <input placeholder="City Name" id="cityName" type="text" class="validate">
                    <a class="btn-floating btn waves-effect waves-light">
                        <i class="material-icons">add</i>
                    </a>
                </div>
            </ul>
            <aw-weather></aw-weather>
            <aw-pollution></aw-pollution>
        `;
    }

    render() {
        const element = document.querySelector(this.selector);
        if (!element.innerHTML) {
            element.innerHTML = this.template;
            this.events();
        }
        if (null !== this.service.city.name) {
            document.querySelector(`${this.selector} .city-name`).innerHTML = `<i class="material-icons">location_on</i> ${this.service.city.name}`;
        }
        this.components.forEach(component => component.render());
    }

    events() {
        document.querySelector(`${this.selector} .sidenav input + a`)
            .addEventListener(`click`, event => this.onClickAddCity());
        document.querySelector(`${this.selector} .sidenav input`)
            .addEventListener(`keyup`, event => this.onKeyPressAccessKey(event));
        global.M.Sidenav.init(document.querySelectorAll(`${this.selector} .sidenav`));
    }

    onClickAddCity() {
        const input = document.querySelector(`${this.selector} .sidenav input`);
        this.service.create(input.value);
        this.render();
        this.service
            .retrieve()
            .then(city => console.log(city))
            .catch(error => console.log(error))
            .finally(() => this.render());
        input.value = ``;
        M.Sidenav.getInstance(document.querySelector(`${this.selector} .sidenav`)).close();
    };

    /**
     * @param {KeyboardEvent} event 
     */
    onKeyPressAccessKey(event) {
        if (27 === event.keyCode) {
            M.Sidenav.getInstance(document.querySelector(`${this.selector} .sidenav`)).close();
        } else if (13 === event.keyCode) {
            this.onClickAddCity();
            M.Sidenav.getInstance(document.querySelector(`${this.selector} .sidenav`)).close();
        };
    };

}
