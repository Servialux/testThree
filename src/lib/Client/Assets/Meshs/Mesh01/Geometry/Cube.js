import { BoxGeometry } from "three";


export default class Cube {
    constructor() {
        this.geometry = new BoxGeometry(1, 1, 1);
    }

    getGeometry() {
        return this.geometry;
    }
}