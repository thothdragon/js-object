import "./pollution-component.scss";

export class PollutionComponent {

    constructor() {
        this.selector = "aw-pollution";
        this.template = "<h1>Pollution</h1>";
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
