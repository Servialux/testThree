import { PlaneGeometry } from "three";

export default class PlaneTiles {
    constructor(width, height, widthSegments = null, heightSegments = null) {
        this.geometry = new PlaneGeometry(width, height, widthSegments, heightSegments);
    }

    getGeometry() {
        return this.geometry;
    }
}