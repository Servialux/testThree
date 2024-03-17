import { MeshPhongMaterial } from 'three';

export default class Material {
    constructor() {
        this.material = new MeshPhongMaterial({color: 0x00ff00});
    }

    getMaterial() {
        return this.material;
    }
}