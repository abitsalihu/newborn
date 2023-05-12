import * as THREE from "three";
import Experience from "./Experience";
import { gsap } from "gsap";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.debug = this.experience.debug;
    this.size = this.experience.size;
    this.renderer = this.experience.renderer;

    this.clock = new THREE.Clock();
    this.previousTime = 0;
    this.parallax = this.experience.parallax;

    this.scene = this.experience.scene;
    this.sizes = this.experience.size;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera;

    this.setUpScene();
  }

  setUpScene() {
    this.resources.on("resourcesReady", () => {
      //? environment texture
      this.envTexture = this.experience.resources.items.envTexture;
      this.envTexture.colorSpace = THREE.SRGBColorSpace;

      //? scenes
      this.newBorn = this.resources.items.newBorn;
      this.newBornGlass = this.resources.items.newBornGlass;

      //? newbORN SCENE PARAMS

      this.newBorn.scene.rotation.y = Math.PI * 0.5;
      this.newBorn.scene.scale.set(3, 3, 3);
      this.newBorn.scene.position.set(8.2, -4.5, -15.5);

      if (this.debug.active) {
        // this.debug.gui.add(this.menuParams, "func").name("MENU");
        // this.debug.gui.add(this.eventParams, "func").name("EVENTS");
        // this.debug.gui.add(this.defaultParams, "func").name("DEFAULT");
        // this.debug.gui
        //   .add(this.orbitControlsParams, "func")
        //   .name("orbitControls");
      }

      //* if the user is in a smaller device
      if (this.size.width < 778) {
      }
      this.scene.add(this.newBorn.scene);

      this.scene.traverse((child) => {
        child.environment = this.envTexture;
      });
    });
  }

  update() {}
}
