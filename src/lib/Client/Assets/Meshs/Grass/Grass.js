import { Mesh, MeshPhongMaterial, TextureLoader } from "three";
import PlaneTiles from "$lib/Client/Assets/Meshs/Components/Geometrys/PlaneTiles";
import GrassTexture from "$lib/Client/Assets/Meshs/Grass/grasslight-big.jpg";   

export default class Grass {
    constructor() {

        this.texture = new TextureLoader().load(GrassTexture);
        this.geometry = new PlaneTiles(16000, 16000);
        this.material = new MeshPhongMaterial({ color: 0xffffff, map: this.texture });
        console.log(this.material);
        this.mesh = new Mesh(this.geometry, this.material);
    }

    getMesh() {
        return this.mesh;
    }
}