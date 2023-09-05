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
      x: 25,
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
      // this.instance.position.set(9, 0, 5.7);
    }
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    // this.controls.enableDamping = true;

    // this.controls.minDistance = 5;
    // this.controls.maxDistance = 14;
    this.controls.enablePan = false;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    // this.controls.minPolarAngle = 0; // radians
    // this.controls.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    // this.controls.minAzimuthAngle = -2; // radians
    // this.controls.maxAzimuthAngle = 1; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.controls.enableDamping = true;
    // this.controls.dampingFactor = 0.025;
    // console.log(this.controls.dampingFactor);
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
