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
    this.controls = this.experience.camera.controls;

    //? particles

    this.setUpScene();
  }

  setUpScene() {
    this.resources.on("resourcesReady", () => {
      //? environment texture
      this.envTexture = this.experience.resources.items.envTexture;
      this.envTexture.colorSpace = THREE.SRGBColorSpace;
      this.envTexture.exposure = 10;
      this.scene.environment = this.envTexture;
      // this.scene.background = this.envTexture;

      //? BAKED texture
      //! first baked texture

      // this.firstTexture = this.resources.items.bakedScene;

      // this.firstTexture.flipY = false;
      // this.firstTexture.colorSpace = THREE.SRGBColorSpace;

      // //! second baked texture
      // this.secondTexture = this.resources.items.backSceneBaked;

      // this.secondTexture.flipY = false;
      // this.secondTexture.colorSpace = THREE.SRGBColorSpace;

      // //! third baked texture
      // this.thirdTexture = this.resources.items.thirdTexture;

      // this.thirdTexture.flipY = false;
      // this.thirdTexture.colorSpace = THREE.SRGBColorSpace;

      // //! fourth baked texture
      // this.writtenTexture = this.resources.items.writtenTexture;

      // this.writtenTexture.flipY = false;
      // this.writtenTexture.colorSpace = THREE.SRGBColorSpace;

      // //! fifth baked texture
      // this.fifthTexture = this.resources.items.fourthTexture;

      // this.fifthTexture.flipY = false;
      // this.fifthTexture.colorSpace = THREE.SRGBColorSpace;

      // //! fifth baked texture
      // this.sixthTexture = this.resources.items.sixthTexture;

      // this.sixthTexture.flipY = false;
      // this.sixthTexture.colorSpace = THREE.SRGBColorSpace;

      // //? scenes
      // this.newBorn = this.resources.items.newBorn;

      // this.newBorn.scene.traverse((child) => {
      //   child.material = new THREE.MeshBasicMaterial({
      //     color: "#f5f5f5",
      //   });

      //   if (child.name.startsWith("firstTexture")) {
      //     child.material = new THREE.MeshBasicMaterial({
      //       map: this.firstTexture,
      //     });
      //   }

      //   if (child.name.startsWith("secondScene")) {
      //     child.material = new THREE.MeshBasicMaterial({
      //       map: this.secondTexture,
      //     });
      //   }
      //   if (child.name.startsWith("thirdTexture")) {
      //     child.material = new THREE.MeshBasicMaterial({
      //       map: this.thirdTexture,
      //     });
      //   }

      //   if (child.name.startsWith("writtenTexture")) {
      //     child.material = new THREE.MeshBasicMaterial({
      //       map: this.writtenTexture,
      //     });
      //   }

      //   if (child.name.startsWith("fourthTexture")) {
      //     child.material = new THREE.MeshBasicMaterial({
      //       map: this.fifthTexture,
      //     });
      //   }

      //   if (child.name.startsWith("sixthTexture")) {
      //     child.material = new THREE.MeshBasicMaterial({
      //       map: this.sixthTexture,
      //     });
      //   }
      // });

      //! -----------------
      //! new SCENE TRYOUT
      //! -----------------

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
      this.glassObjects = this.resources.items.glassObjects;
      // this.boardGamesModels = this.resources.items.boardGamesModels;

      this.newBorn.scene.traverse((child) => {
        // console.log(child);
        child.material = new THREE.MeshBasicMaterial({
          map: this.boardGamesTexture,
        });
        if (child.name === "menu_textures") {
          child.material = new THREE.MeshBasicMaterial({
            map: this.bakedMenuTexture,
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

      // this.glassObjects.scene.traverse((child) => {
      //   console.log(child);
      //   child.material = new THREE.MeshPhysicalMaterial({
      //     color: "#f5f5f5",
      //     transmission: 1,
      //     metalness: 1,
      //     roughness: 0,
      //     ior: 1.5,
      //     opacity: 0.2,
      //     thickness: 1.5,
      //     attenuationColor: "#ffffff",
      //     attenuationDistance: 0.12,
      //     specularIntensity: 1,
      //     specularColor: "#ffffff",
      //     envMap: this.envTexture,
      //     envMapIntensity: 0.1,
      //   });
      // });

      // this.light = new THREE.AmbientLight(0x404040);
      // this.light.position.set(0, 0, 3);

      // console.log(this.light);

      // this.directionalLight = new THREE.DirectionalLight(10, 0x404040);

      // this.scene.add(this.light);
      // console.log(this.glassObjects.scene.children[0]);
      // this.secondSceneModel.scene.children[0].material =
      //   new THREE.MeshBasicMaterial({ map: this.secondTexture });

      // this.boardGamesModels.scene.children[0].material =
      //   new THREE.MeshBasicMaterial({ map: this.boardGamesTexture });

      // this.newBorn.scene.rotation.y = Math.PI * 0.5;
      // this.newBorn.scene.scale.set(4, 4, 4);
      this.newBorn.scene.position.set(0, -0.1, 0);
      // this.newBorn.scene.rotation.y = Math.PI * 0.25;

      this.scene.add(this.newBorn.scene);
      console.log(this.newBorn.scene.children[3].position);
      this.controls.target = this.newBorn.scene.children[3].position;
      // this.controls.autoRotate = true;
      // this.controls.autoRotateSpeed = 5;

      //! -------------------------------
      //! END OF NEW SCENE TRYOUT
      //! -------------------------------

      //? newbORN SCENE PARAMS

      //* if the user is in a smaller device
      if (this.size.width < 778) {
      }
      // this.scene.add(this.newBorn.scene);

      if (this.debug.active) {
        // this.debugActive();
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
