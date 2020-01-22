import "./pollution-component.scss";

export class PollutionComponent {

    constructor() {
        this.selector = "aw-pollution";
        this.template = `
            <h1>Pollution</h1>
            <ul>
                <li>Air Quality </li>
                <li>Fine Particle </li>
                <li>Ozone </li></ul>
        `;
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
