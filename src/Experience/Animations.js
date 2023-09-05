import gsap from "gsap";

import Experience from "./Experience";

export default class Animations {
  constructor() {
    this.experience = new Experience();
    this.size = this.experience.size;
    // this.camera = this.experience.camera.instance;

    this.currPage = 0;

    this.camera = this.experience.camera.instance;
    this.controls = this.experience.camera.controls;

    //?? Parameters animations on main btns clicked
    this.defaultParams = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: -7.2,
          y: 3.7,
          z: 9.435,
          ease: "power3.inOut",
        });

        // gsap.to(this.controls.target, {
        //   duration: 2,
        //   x: 0.67,
        //   y: 1.702,
        //   z: -0.225,
        //   ease: "power3.inOut",
        // });
      },
    };
    this.eventParams = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: -9.003,
          y: 0.831,
          z: -2.875,
          ease: "power3.inOut",
        });

        gsap.to(this.controls.target, {
          duration: 2,
          x: -1.445,
          y: 1.361,
          z: -2.365,
          ease: "power3.inOut",
        });
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
