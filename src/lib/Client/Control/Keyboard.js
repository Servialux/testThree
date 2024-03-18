export default class Keyboard {
//class pour récuperer les touches sur le clavier et pouvoir renvoyer les evenements au controlleur
    constructor() {
        this.keys = {};
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onKeyRelease = this.onKeyRelease.bind(this);
        this.onKeyHold = this.onKeyHold.bind(this);
        this.init();
    }

    init() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }

    onKeyDown(event) {
        this.keys[event.code] = true;
        this.onKeyPress(event);
    }

    onKeyUp(event) {
        this.keys[event.code] = false;
        this.onKeyRelease(event);
    }

    onKeyPress(event) {
        console.log('Key pressed:', event.code);
    }

    onKeyRelease(event) {
        console.log('Key released:', event.code);
    }

    onKeyHold(event) {
        console.log('Key hold:', event.code);
    }
    getKeys() {
        return this.keys;
    }

}