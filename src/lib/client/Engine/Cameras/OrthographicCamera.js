import { OrthographicCamera } from "three";

export default class OrtoCam {
    constructor() {
        this.camera = new OrthographicCamera(
            window.innerWidth / -2, // left
            window.innerWidth / 2, // right
            window.innerHeight / 2, // top
            window.innerHeight / -2, // bottom
            1, // near clipping plane
            1000 // far clipping plane
        );
    }

    getCamera() {
        return this.camera;
    }
}