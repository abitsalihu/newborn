import Experience from "./Experience";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor() {
    this.experience = new Experience();

    this.debug = this.experience.debug;

    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.size = this.experience.size;
    this.fov = {
      x: 30,
    };

    this.setInstance();

    if (this.debug.active) {
      this.debugActive();
    }
  }

  setInstance() {
    this.instanceGroup = new THREE.Group();
    this.scene.add(this.instanceGroup);
    this.instance = new THREE.PerspectiveCamera(
      this.fov.x,
      this.size.width / this.size.height,
      0.01,
      100
    );
    this.instanceGroup.add(this.instance);
    this.instance.position.set(11, 0, 5.7);
    if (this.size.width < 768) {
      this.instance.position.set(9, 0, 5.7);
    }
  }

  resize() {
    this.instance.aspect = this.size.width / this.size.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    if (this.size.width < 778) {
    }
  }

  debugActive() {
    this.cameraDebug = this.debug.gui.addFolder("camera");

    this.cameraDebug
      .add(this.instance.position, "x")
      .min(-50)
      .max(50)
      .step(0.001)
      .name("cameraX");
    this.cameraDebug
      .add(this.instance.position, "y")
      .min(-50)
      .max(50)
      .step(0.001)
      .name("cameraY");
    this.cameraDebug
      .add(this.instance.position, "z")
      .min(-50)
      .max(50)
      .step(0.001)
      .name("cameraZ");
    this.cameraDebug
      .add(this.fov, "x")
      .min(0)
      .max(100)
      .step(0.001)
      .name("cameraFOV")
      .onFinishChange(() => {
        this.instance.fov = this.fov.x;
        this.instance.aspect = this.size.width / this.size.height;
        this.instance.updateProjectionMatrix();
      });
  }
}
