import { MeshBasicMaterial } from 'three';

export default class Material {
    constructor() {
        this.material = new MeshBasicMaterial({color: 0x00ff00});
    }

    getMaterial() {
        return this.material;
    }
}