import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();

    //? setup
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 0.16;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    this.trigger("update");

    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
