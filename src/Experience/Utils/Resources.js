import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter {
  constructor(source) {
    super();

    this.source = source;

    this.items = [];
    this.itemsToLoad = this.source.length;
    this.itemsLoaded = 0;

    this.setUpLoaders();
    this.startLoading();
  }

  setUpLoaders() {
    this.gltfLoader = new GLTFLoader();
    this.cubeTextureLoader = new THREE.CubeTextureLoader();
    this.textureLoader = new THREE.TextureLoader();
  }

  startLoading() {
    console.log("startLoading");
    for (let source of this.source) {
      if (source.type === "cubeTextureLoader") {
        console.log(this.source);
        this.cubeTextureLoader.load(source.path, (file) => {
          this.addItems(source, file);
        });
      }
      if (source.type === "gltfLoader") {
        this.gltfLoader.load(source, (file) => {
          console.log(file);
        });
      }
      if (source.type === "textureLoader") {
        this.textureLoader.load(source, (file) => {
          console.log(file);
        });
      }
    }
  }

  addItems(source, file) {
    this.items[source.name] = file;
    this.itemsLoaded = this.itemsLoaded + 1;

    if (this.itemsLoaded === this.itemsToLoad) {
      this.trigger("resourcesReady");
      console.log("resourcesReady");
    }
  }
}
