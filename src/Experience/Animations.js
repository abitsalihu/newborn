import gsap from "gsap";

import Experience from "./Experience";

export default class Animations {
  constructor() {
    this.experience = new Experience();
    this.size = this.experience.size;
    this.camera = this.experience.camera.instance;

    this.currPage = 0;

    this.camera = this.experience.camera.instance;

    //?? Parameters animations on main btns clicked
    this.defaultParams = {
      func: () => {
        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 9,
            y: 0,
            z: 5.7,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 11,
            y: 0,
            z: 5.7,
            ease: "power3.inOut",
          });
        }
      },
    };
    this.eventParams = {
      func: () => {
        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 9.225,
            y: 1.2,
            z: -4.25,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 8.9,
            y: 1.2,
            z: -9,
            ease: "power3.inOut",
          });
        }
      },
    };

    this.menuParams = {
      func: () => {
        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 12.35,
            y: 3,
            z: -5.5,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 17,
            y: 2.2,
            z: -3.3,
            ease: "power3.inOut",
          });
        }
      },
    };

    this.firstPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: 12.35,
          y: 3,
          z: -5.5,
          ease: "power3.inOut",
        });
      },
    };
    this.secondPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 1.5,
          x: 14.6,
          y: 3,
          z: -5.5,
          ease: "power3.inOut",
        });
      },
    };
    this.thirdPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 1.5,
          x: 16.9,
          y: 3,
          z: -5.5,
          ease: "power3.inOut",
        });
      },
    };
    this.fourthPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 1.5,
          x: 19.25,
          y: 3,
          z: -5.5,
          ease: "power3.inOut",
        });
      },
    };
    this.fifthPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 1.5,
          x: 21.55,
          y: 3,
          z: -5.5,
          ease: "power3.inOut",
        });
      },
    };
  }
}
