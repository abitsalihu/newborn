import * as THREE from "three";
import Size from "./Utils/Size";
import Time from "./Utils/Time";
import Debug from "./Utils/Debug";
import Camera from "./Camera";
let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;

    window.experience = this;

    this.canvas = canvas;

    //? utils setup
    this.debug = new Debug();
    this.size = new Size();
    this.time = new Time();

    //? world Setup
    this.scene = new THREE.Scene();
    this.camera = new Camera();

    this.size.on("resize", () => {
      this.resize();
    });

    this.time.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
  }
  update() {
    this.camera.update();
  }
}
