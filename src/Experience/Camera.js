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
    // const fov = this.size.width > 768 ? 25 : 72;
    this.fov = {
      x: this.size.width > 678 ? 25 : 45,
    };

    this.setInstance();
    this.setControls();

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
    // this.instance.position.set(11, 0, 5.7);
    this.instance.position.set(-7.2, 3.7, 9.435);
    if (this.size.width < 768) {
      this.instance.position.set(-17.9, 9.809, 13.967);
    }
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);

    this.controls.minDistance = 5;
    this.controls.maxDistance = 18;

    this.controls.minPolarAngle = -Math.PI * 0.1; // radians
    this.controls.maxPolarAngle = Math.PI / 2; // radians

    this.controls.minAzimuthAngle = -2;
    this.controls.maxAzimuthAngle = Math.PI * 0.1;

    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.size.width / this.size.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
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
