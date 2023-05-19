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

    //? particles

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

      this.firstTexture = this.resources.items.bakedScene;

      this.firstTexture.flipY = false;
      this.firstTexture.colorSpace = THREE.SRGBColorSpace;

      //! second baked texture
      this.secondTexture = this.resources.items.backSceneBaked;

      this.secondTexture.flipY = false;
      this.secondTexture.colorSpace = THREE.SRGBColorSpace;

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

      //! fifth baked texture
      this.sixthTexture = this.resources.items.sixthTexture;

      this.sixthTexture.flipY = false;
      this.sixthTexture.colorSpace = THREE.SRGBColorSpace;

      //? scenes
      this.newBorn = this.resources.items.newBorn;

      this.newBorn.scene.traverse((child) => {
        child.material = new THREE.MeshBasicMaterial({
          color: "#f5f5f5",
        });

        if (child.name.startsWith("firstTexture")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.firstTexture,
          });
        }
        if (child.name.startsWith("secondScene")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.secondTexture,
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

        if (child.name.startsWith("sixthTexture")) {
          child.material = new THREE.MeshBasicMaterial({
            map: this.sixthTexture,
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

      if (this.debug.active) {
        this.debugActive();
      }
    });
  }

  update() {}

  debugActive() {
    console.log(this.newBorn);
    console.log(this.newBorn.scale);

    if (this.newBorn) {
      this.scaleChange = {
        scale: 0,
      };
      this.guiScene = this.debug.gui.addFolder("Scene");
      // this.debug.gui.addFolder(this.guiScene);
      this.guiScene
        .add(this.newBorn.scene.position, "x")
        .min(-10)
        .max(10)
        .step(0.001)
        .name("sceneX");

      this.guiScene
        .add(this.newBorn.scene.position, "y")
        .min(-10)
        .max(10)
        .step(0.001)
        .name("sceneX");

      this.guiScene
        .add(this.newBorn.scene.position, "z")
        .min(-10)
        .max(10)
        .step(0.001)
        .name("sceneX");

      this.guiScene
        .add(this.scaleChange, "scale")
        .min(0)
        .max(10)
        .step(0.01)
        .name("sceneScaleX")
        .onFinishChange(() => {
          this.newBorn.scene.scale.set(
            this.scaleChange.scale,
            this.scaleChange.scale,
            this.scaleChange.scale
          );
        });
    }
  }
}
