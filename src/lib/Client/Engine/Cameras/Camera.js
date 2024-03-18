import OrtoCam from "./OrthographicCamera";
import PerspCam from "./PerspectiveCamera";

export default class Camera {
    constructor() {
        this.orto = new OrtoCam();
        this.persp = new PerspCam();
    }

    getPerspectiveCamera() {
        return this.persp.getCamera();
    }

    getOrthographicCamera() {
        return this.orto.getCamera();
    }
}