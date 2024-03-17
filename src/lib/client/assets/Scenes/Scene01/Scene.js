import { Scene } from 'three'

export default class Scene01 {
    constructor() {
        this.scene = new Scene();
    }

    getScene() {
        return this.scene;
    }
}