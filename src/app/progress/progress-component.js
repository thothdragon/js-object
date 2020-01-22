import "./progress-component.scss";

export class ProgressComponent {

    constructor() {
        this.selector = "aw-progress";
        this.template = "<h1>Progress</h1>";
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
