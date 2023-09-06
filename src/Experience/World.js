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
    // this.body = document.querySelector("body");

    // this.clock = new THREE.Clock();
    // this.previousTime = 0;
    // this.parallax = this.experience.parallax;

    this.scene = this.experience.scene;
    this.sizes = this.experience.size;
    this.resources = this.experience.resources;
    // this.camera = this.experience.camera;
    this.controls = this.experience.camera.controls;

    this.setUpScene();
  }

  setUpScene() {
    this.resources.on("resourcesReady", () => {
      //? textures

      this.firstTexture = this.resources.items.bakedFirstTexture;
      this.firstTexture.flipY = false;
      this.firstTexture.colorSpace = THREE.SRGBColorSpace;

      this.secondTexture = this.resources.items.bakedSecondTexture;
      this.secondTexture.flipY = false;
      this.secondTexture.colorSpace = THREE.SRGBColorSpace;

      this.boardGamesTexture = this.resources.items.bakedBoardGames;
      this.boardGamesTexture.flipY = false;
      this.boardGamesTexture.colorSpace = THREE.SRGBColorSpace;

      this.bakedMenuTexture = this.resources.items.bakedMenuTexture;
      this.bakedMenuTexture.flipY = false;
      this.bakedMenuTexture.colorSpace = THREE.SRGBColorSpace;

      //? 3D MODELS

      this.newBorn = this.resources.items.newBorn;
      this.menu = this.resources.items.menu;

      this.newBorn.scene.traverse((child) => {
        if (child.name === "events") {
        }
        child.material = new THREE.MeshBasicMaterial({
          map: this.bakedMenuTexture,
        });
        if (child.name === "board_games") {
          child.material = new THREE.MeshBasicMaterial({
            map: this.boardGamesTexture,
          });
        }

        if (child.name === "first_texture") {
          child.material = new THREE.MeshBasicMaterial({
            map: this.firstTexture,
          });
        }

        if (child.name === "second_texture") {
          child.material = new THREE.MeshBasicMaterial({
            map: this.secondTexture,
          });
        }
      });

      this.newBorn.scene.position.set(0, -0.1, 0);

      this.scene.add(this.newBorn.scene);
      this.controls.target = this.newBorn.scene.children[9].position.clone();

      //! -------------------------------
      //! END OF NEW SCENE
      //! -------------------------------
    });
  }

  update() {}

  debugActive() {
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
