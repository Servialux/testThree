import { Mesh, MeshPhongMaterial, MeshBasicMaterial,TextureLoader } from "three";
import PlaneTiles from "$lib/Client/Assets/Meshs/Components/Geometrys/PlaneTiles";
import GrassTexture from "$lib/Client/Assets/Meshs/Grass/grasslight-big.jpg";   

export default class Grass {
    constructor() {
        this.texture = new TextureLoader().load(GrassTexture);
        const planeTiles = new PlaneTiles(16000, 16000);
        this.geometry = planeTiles.getGeometry();
        this.material = new MeshBasicMaterial({ color: 0xffffff, map: this.texture });
        console.log(this.texture);
        this.mesh = new Mesh(this.geometry, this.material);
    }

    getMesh() {
        return this.mesh;
    }
}