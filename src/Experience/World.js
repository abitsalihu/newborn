import * as THREE from "three";
import Experience from "./Experience";
import fragmentShader from "../shaders/coffeeSteam/coffee-steam-fragment.glsl";
import vertexShader from "../shaders/coffeeSteam/coffee-steam-vertex.glsl";

export default class World {
  constructor() {
    this.experience = new Experience();

    this.debug = this.experience.debug;
    this.size = this.experience.size;
    this.time = this.experience.time;
    this.sceneReady = this.experience.resources.sceneReady;

    this.scene = this.experience.scene;
    this.sizes = this.experience.size;
    this.resources = this.experience.resources;
    this.controls = this.experience.camera.controls;

    this.model = {};

    this.model.color = "#EFE1D1";

    // Material
    this.model.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uTimeFrequency: { value: 0.0004 },
        uUvFrequency: { value: new THREE.Vector2(4, 5) },
        uColor: { value: new THREE.Color(this.model.color) },
      },
    });

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
      this.coffeeSteam = this.resources.items.coffeeSteam;

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

      this.coffeeSteam.scene.children[0].material = this.model.material;

      // this.newBorn.scene.position.set(0, -0.1, 0);
      // this.coffeeSteam.scene.rotation.x = Math.PI;
      this.scene.add(this.newBorn.scene, this.coffeeSteam.scene);
      this.controls.target = this.newBorn.scene.children[9].position.clone();

      //! -------------------------------
      //! END OF NEW SCENE
      //! -------------------------------

      //? debug

      // this.debugActive();
    });
  }

  update() {
    this.model.material.uniforms.uTime.value = this.time.elapsed;
  }

  debugActive() {
    console.log(this.coffeeSteam.scene.children[0].material.uniforms);
    this.shaderGui = this.debug.gui.addFolder("Shader");
    this.shaderGui
      .add(this.model.material.uniforms.uUvFrequency.value, "x")
      .min(-10)
      .max(10)
      .step(0.001);

    this.shaderGui
      .add(this.model.material.uniforms.uUvFrequency.value, "y")
      .min(-10)
      .max(10)
      .step(0.001);

    //!-------------
    // if (this.newBorn) {
    //   this.scaleChange = {
    //     scale: 0,
    //   };
    //   this.guiScene = this.debug.gui.addFolder("Scene");
    //   this.guiScene
    //     .add(this.newBorn.scene.position, "x")
    //     .min(-10)
    //     .max(10)
    //     .step(0.001)
    //     .name("sceneX");

    //   this.guiScene
    //     .add(this.newBorn.scene.position, "y")
    //     .min(-10)
    //     .max(10)
    //     .step(0.001)
    //     .name("sceneX");

    //   this.guiScene
    //     .add(this.newBorn.scene.position, "z")
    //     .min(-10)
    //     .max(10)
    //     .step(0.001)
    //     .name("sceneX");

    //   this.guiScene
    //     .add(this.scaleChange, "scale")
    //     .min(0)
    //     .max(10)
    //     .step(0.01)
    //     .name("sceneScaleX")
    //     .onFinishChange(() => {
    //       this.newBorn.scene.scale.set(
    //         this.scaleChange.scale,
    //         this.scaleChange.scale,
    //         this.scaleChange.scale
    //       );
    //     });
    // }
  }
}
