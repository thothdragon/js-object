import "./progress-component.scss";

export class ProgressComponent {

    constructor() {
        this.selector = "aw-progress";
        this.template = "<p>Et moi je suis le progress-component</p>";
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
