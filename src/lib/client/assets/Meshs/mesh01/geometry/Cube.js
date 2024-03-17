import { BoxGeometry, Mesh } from "three";
import material from "../material/Material";


export default class Cube {
    constructor() {
        this.geometry = new BoxGeometry(1500, 1500, 1500);
        this.material = new material();
        
    }

    getGeometry() {
        return this.geometry;
    }
}