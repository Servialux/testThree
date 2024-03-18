import { PlaneGeometry } from "three";

export default class PlaneTiles {
    constructor(width, height, widthSegments = 1, heightSegments = 1) {
        this.geometry = new PlaneGeometry(width, height, widthSegments, heightSegments);
    }

    getGeometry() {
        return this.geometry;
    }
}