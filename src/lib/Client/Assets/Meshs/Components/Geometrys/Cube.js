import { BoxGeometry } from "three";


export default class Cube {
    constructor() {
        this.geometry = new BoxGeometry(50, 50, 50);
    }

    getGeometry() {
        return this.geometry;
    }
}