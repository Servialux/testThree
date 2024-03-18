import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Orbit extends OrbitControls {
    constructor(camera, domElement) {
        super(camera, domElement);
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.enableZoom = true;
        this.enablePan = true;
        this.minDistance = 1;
        this.maxDistance = 500;
        this.maxPolarAngle = Math.PI / 2;
    }
}