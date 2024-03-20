import { WebGLRenderer, Clock } from 'three'
import { getCanvas } from '$lib/Client/Tools/Function.js'

export default class Renderer extends WebGLRenderer {
  scene = null
  clock = new Clock()
  cbUpdate = null
  camera = null
  cbLoop = null

  constructor(scene, camera) {
    const canvas = getCanvas();
    super({ canvas, antialias: true });
    this.scene = scene;
    this.camera = camera;
    this.cbLoop = this.loop.bind(this);
    this.shadowMap.enabled = true;
    this.loop();
  }

  loop() {
    const dt = this.clock.getDelta()
    if (this.cbUpdate) this.cbUpdate(dt)
    this.render(this.scene, this.camera)
    requestAnimationFrame(this.cbLoop)
  }

  start() {
    this.loop();
  }

  onUpdate(callback) {
    this.cbUpdate = callback;
  }
}