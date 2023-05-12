import * as lil from "lil-gui";
import Stats from "stats.js";

export default class Debug {
  constructor() {
    this.active = null;
    this.stats = new Stats();

    if (window.location.hash === "#debug") {
      this.gui = new lil.GUI();
      this.active = true;

      document.body.appendChild(this.stats.dom);
    }
  }
}
