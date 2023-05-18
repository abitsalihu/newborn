import * as THREE from "three";
import Experience from "./Experience";
import { gsap } from "gsap";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.debug = this.experience.debug;
    this.size = this.experience.size;
    this.renderer = this.experience.renderer;
    this.sceneReady = this.experience.resources.sceneReady;
    this.body = document.querySelector("body");

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
      // this.envTexture = this.experience.resources.items.envTexture;
      // this.envTexture.colorSpace = THREE.SRGBColorSpace;
      // this.envTexture.exposure = 10;
      // // this.scene.environment = this.envTexture;

      //? BAKED texture
      //! first baked texture

      this.bakedTexture = this.resources.items.bakedScene;

      this.bakedTexture.flipY = false;
      this.bakedTexture.colorSpace = THREE.SRGBColorSpace;

      //! second baked texture
      this.backSceneBaked = this.resources.items.backSceneBaked;

      this.backSceneBaked.flipY = false;
      this.backSceneBaked.colorSpace = THREE.SRGBColorSpace;

      //! third baked texture
      this.thirdTexture = this.resources.items.thirdTexture;

      this.thirdTexture.flipY = false;
      this.thirdTexture.colorSpace = THREE.SRGBColorSpace;

      //! fourth baked texture
      this.writtenTexture = this.resources.items.writtenTexture;

      this.writtenTexture.flipY = false;
      this.writtenTexture.colorSpace = THREE.SRGBColorSpace;

      //! fifth baked texture
      this.fifthTexture = this.resources.items.fourthTexture;

      this.fifthTexture.flipY = false;
      this.fifthTexture.colorSpace = THREE.SRGBColorSpace;

      //? scenes
      this.newBorn = this.resources.items.newBorn;

      this.newBorn.scene.traverse((child) => {
        child.material = new THREE.MeshBasicMaterial({
          map: this.bakedTexture,
        });
        if (child.name.startsWith("secondScene")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.backSceneBaked,
          });
        }
        if (child.name.startsWith("thirdTexture")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.thirdTexture,
          });
        }

        if (child.name.startsWith("writtenTexture")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.writtenTexture,
          });
        }

        if (child.name.startsWith("fourthTexture")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.fifthTexture,
          });
        }
      });

      //? newbORN SCENE PARAMS

      this.newBorn.scene.rotation.y = Math.PI * 0.5;
      this.newBorn.scene.scale.set(3, 3, 3);
      this.newBorn.scene.position.set(8.2, -4.5, -15.5);

      //* if the user is in a smaller device
      if (this.size.width < 778) {
      }
      this.scene.add(this.newBorn.scene);
    });
  }

  update() {}
}
