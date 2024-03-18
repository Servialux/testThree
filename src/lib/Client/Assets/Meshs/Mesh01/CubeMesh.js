import { Mesh } from "three";
import Cube from "./Geometry/Cube";
import Material from "$lib/Client/Assets/Meshs/Mesh01/Material/Material";


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