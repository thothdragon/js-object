import "./app-component.scss";
import { WeatherComponent } from "./weather/weather-component";
import { PollutionComponent } from "./pollution/pollution-component";
import { ProgressComponent } from "./progress/progress-component";

export class AppComponent {

    constructor() {
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
        this.components = [
            new WeatherComponent(),
            new PollutionComponent(),
            new ProgressComponent()
        ];
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
        this.components.forEach(component => component.render());
        this.event();
    }

    event() {
        document.querySelector(`${this.selector} .sidenav input + a`)
            .addEventListener(`click`, event => this.onClickAddCity());
        document.querySelector(`${this.selector} .sidenav input`)
            .addEventListener(`keyup`, event => this.onKeyPressAccessKey(event));
        global.M.Sidenav.init(document.querySelectorAll(`${this.selector} .sidenav`));
    }

    onClickAddCity() {
        console.log(`onClickAddCity`);

        // city.name = document.querySelector(`#cityName`).value;
        // if (-1 === cities.indexOf(city.name)) {
        //     cities.push(city.name);
        // };
        // showCity();
    };

    onKeyPressAccessKey(event) {
        if (13 === event.keyCode) {
            this.onClickAddCity();
        } else if (27 === event.keyCode) {
            M.Sidenav.getInstance(document.querySelector(`${this.selector} .sidenav`)).close();
        };
    };

}
