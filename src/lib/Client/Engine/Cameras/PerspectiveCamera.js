import { PerspectiveCamera } from "three";

export default class PerpCam {
    constructor() {
        this.camera = new PerspectiveCamera(
            75, // field of view
            window.innerWidth / window.innerHeight, // aspect ratio
            0.1, // near clipping plane
            1000 // far clipping plane
        ); 
    }

    getCamera() {
        return this.camera;
    }
}