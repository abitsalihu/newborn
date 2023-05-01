import * as THREE from "three";
import Experience from "./Experience";

export default class World {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setUpScene();
  }

  setUpScene() {
    this.resources.on("resourcesReady", () => {
      this.envTexture = this.experience.resources.items.envTexture;
      this.envTexture.colorSpace = THREE.SRGBColorSpace;
      this.scene.background = this.envTexture;
      this.scene.environment = this.envTexture;
    });
  }
}
