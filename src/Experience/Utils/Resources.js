import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter {
  constructor(source) {
    super();

    this.source = source;

    this.items = [];
    this.itemsToLoad = this.source.length;
    this.itemsLoaded = 0;
    this.sceneReady = null;

    this.setUpLoaders();
    this.startLoading();
  }

  setUpLoaders() {
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath("/draco/");

    this.gltfLoader = new GLTFLoader();
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
    this.cubeTextureLoader = new THREE.CubeTextureLoader();
    this.textureLoader = new THREE.TextureLoader();
  }

  startLoading() {
    for (let source of this.source) {
      if (source.type === "cubeTextureLoader") {
        this.cubeTextureLoader.load(source.path, (file) => {
          this.addItems(source, file);
        });
      }

      if (source.type === "textureLoader") {
        this.textureLoader.load(source.path, (file) => {
          this.addItems(source, file);
        });
      }

      if (source.type === "gltfLoader") {
        this.gltfLoader.load(source.path, (file) => {
          this.addItems(source, file);
        });
      }
    }
  }

  addItems(source, file) {
    this.items[source.name] = file;
    this.itemsLoaded = this.itemsLoaded + 1;

    if (this.itemsLoaded === this.itemsToLoad) {
      this.trigger("resourcesReady");
    }
  }

  update() {
    if (this.itemsLoaded === this.itemsToLoad) {
      this.sceneReady = true;
    }
  }
}
