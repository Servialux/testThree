import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Orbit extends OrbitControls {
    constructor(camera, domElement) {
        super(camera, domElement);
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.enableZoom = true;
        this.enablePan = true;
        this.enableRotate = true;
        this.rotateSpeed = 0.8;
        // this.minDistance = 300;
        // this.maxDistance = 1000;
       // this.maxAzimuthAngle = Math.PI / 8, Math.PI / 8;
    }
}