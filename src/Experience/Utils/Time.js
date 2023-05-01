import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();

    this.time = new Date();

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    this.trigger("update");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
