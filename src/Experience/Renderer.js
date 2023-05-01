import * as THREE from "three";
import Experience from "./Experience";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.canvas = this.experience.canvas;
    this.size = this.experience.size;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.instance.setSize(this.size.width, this.size.height);
    this.instance.setPixelRatio(this.size.pixelRatio);
    this.instance.outputColorSpace = THREE.SRGBColorSpace;
  }

  resize() {
    this.instance.setSize(this.size.width, this.size.height);
    this.instance.setPixelRatio(this.size.pixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera);
  }
}
