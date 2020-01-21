import './app-component.scss';

export class AppComponent {

    constructor() {
        this.selector = "aw-app";
        this.template = "<h1>Hello World</h1>";
    }

    render() {
        document.body.querySelector(`aw-app`).innerHTML = `${this.template}`
    }

}
