import { Mesh } from "three";
import Cube from "$lib/Client/Assets/Meshs/Components/Geometrys/Cube";
import Material from "$lib/Client/Assets/Meshs/Components/Materials/Material";


export default class CubeMesh 
{
    constructor() {
        let cube = new Cube();
        let material = new Material();
        this.cube = cube.getGeometry();
        this.material = material.getMaterial();
        this.mesh = new Mesh(this.cube, this.material);
    }

    getMesh() {
        return this.mesh;
    }
}