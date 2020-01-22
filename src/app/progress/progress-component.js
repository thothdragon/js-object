import "./progress-component.scss";

export class ProgressComponent {

    constructor() {
        this.selector = "aw-progress";
        this.template = `
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        `;
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }

}
