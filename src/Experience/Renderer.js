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
    this.instance.setClearColor("#FFDCB6");
    // this.instance.setClearColor("#000000");

    this.instance.outputColorSpace = THREE.SRGBColorSpace;
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;
    this.instance.toneMappingExposure = 1.5;
  }

  resize() {
    this.instance.setSize(this.size.width, this.size.height);
    this.instance.setPixelRatio(this.size.pixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera);
  }
}
