import "./pollution-component.scss";

export class PollutionComponent {

    constructor() {
        this.selector = "aw-pollution";
        this.template = "<p>Et moi je suis le pollution-component</p>";
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
