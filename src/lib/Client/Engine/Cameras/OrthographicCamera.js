import { OrthographicCamera } from "three";

export default class OrtoCam {
    constructor(
        
    ) {
        const ratio = window.innerHeight / window.innerWidth;
        const width = 10;
        const height = (10 * ratio);

        this.camera = new OrthographicCamera(
            width / -2, // left
            width / 2, // right
            height / 2, // top
            height / -2, // bottom
            0.1, // near clipping plane
            1000 // far clipping plane
        );
    }

    getCamera() {
        return this.camera;
    }
}