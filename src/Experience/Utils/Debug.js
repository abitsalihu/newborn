import * as lil from "lil-gui";

export default class Debug {
  constructor() {
    this.active = null;

    if (window.location.hash === "#debug") {
      const gui = new lil.GUI();
      this.active = true;
    }
  }
}
