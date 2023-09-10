import gsap from "gsap";

import Experience from "./Experience";

export default class Animations {
  constructor() {
    this.experience = new Experience();
    this.size = this.experience.size;

    this.currPage = 0;

    this.camera = this.experience.camera.instance;
    this.controls = this.experience.camera.controls;

    //?? Parameters animations on main btns clicked
    this.defaultParams = {
      func: () => {
        this.controls.enablePan = true;

        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: -17.9,
            y: 9.809,
            z: 13.967,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: -7.2,
            y: 3.7,
            z: 9.435,
            ease: "power3.inOut",
          });
        }

        gsap.to(this.controls.target, {
          duration: 2,
          x: 0.67,
          y: 1.702,
          z: -0.225,
          ease: "power3.inOut",
        });

        gsap.to(this.controls, {
          duration: 2,
          minDistance: 5,
          maxDistance: 18,
          minPolarAngle: -Math.PI * 0.1,
          maxPolarAngle: Math.PI / 2,
          minAzimuthAngle: -2,
          maxAzimuthAngle: Math.PI * 0.1,
          ease: "power3.inOut",
        });
      },
    };
    this.eventParams = {
      func: () => {
        this.controls.enablePan = false;

        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 0,
            y: 2,
            z: 0.5,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 0,
            y: 2,
            z: 1.5,
            ease: "power3.inOut",
          });
        }

        gsap.to(this.controls.target, {
          duration: 2,
          x: 0.116,
          y: 1.8,
          z: -1.419,
          ease: "power3.inOut",
        });

        gsap.to(this.controls, {
          duration: 2,
          minDistance: 1,
          maxDistance: 5,
          ease: "power3.inOut",
          minPolarAngle: Math.PI / 3,
          maxPolarAngle: Math.PI / 1.5,
          minAzimuthAngle: -Math.PI / 6.5,
          maxAzimuthAngle: Math.PI / 4,
        });
      },
    };

    this.menuParams = {
      func: () => {
        this.controls.enablePan = false;

        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 1,
            y: 2.5,
            z: 0.25,
            ease: "power3.inOut",
          });

          gsap.to(this.controls.target, {
            duration: 2,
            x: 1.148,
            y: 2.39,
            z: -1.464,
            ease: "power3.inOut",
          });
          gsap.to(this.controls, {
            duration: 2,
            minDistance: 0,
            maxDistance: 3,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: 2.6,
            y: 2,
            z: 3.294,
            ease: "power3.inOut",
          });

          gsap.to(this.controls.target, {
            duration: 2,
            x: 2.6937,
            y: 2.4824,
            z: -1.484,
            ease: "power3.inOut",
          });
          gsap.to(this.controls, {
            duration: 2,
            minDistance: 0,
            maxDistance: 5,
            ease: "power3.inOut",
          });
        }
        gsap.to(this.controls, {
          duration: 2,
          ease: "power3.inOut",
          minPolarAngle: Math.PI / 3.25,
          maxPolarAngle: Math.PI / 1.75,
          minAzimuthAngle: -Math.PI / 6.5,
          maxAzimuthAngle: Math.PI / 6.5,
        });
      },
    };

    this.gamesParams = {
      func: () => {
        this.controls.enablePan = false;
        if (this.size.width < 768) {
          gsap.to(this.camera.position, {
            duration: 2,
            x: -8.301,
            y: -1.5,
            z: -2.144,
            ease: "power3.inOut",
          });

          gsap.to(this.controls.target, {
            duration: 2,

            x: -2.18,
            y: 1.361,
            z: -1.74,

            ease: "power3.inOut",
          });

          gsap.to(this.controls, {
            duration: 2,
            minDistance: 4,
            maxDistance: 10,
            minPolarAngle: Math.PI / 2.5,
            maxPolarAngle: Math.PI / 1.9,
            minAzimuthAngle: -Math.PI / 1.75,
            maxAzimuthAngle: -Math.PI / 3.25,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(this.camera.position, {
            duration: 2,
            x: -9.003,
            y: -2.857,
            z: -1.628,
            ease: "power3.inOut",
          });

          gsap.to(this.controls.target, {
            duration: 2,
            x: -2.18,
            y: 1.361,
            z: -1.74,
            ease: "power3.inOut",
          });

          gsap.to(this.controls, {
            duration: 2,
            minDistance: 4,
            maxDistance: 10,
            minPolarAngle: Math.PI / 2.5,
            maxPolarAngle: Math.PI / 1.9,
            minAzimuthAngle: -Math.PI / 1.5,
            maxAzimuthAngle: -Math.PI / 3,
            ease: "power3.inOut",
          });
        }
      },
    };

    //! PHONE MENU NAVIGATION
    this.firstPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: 1,
          y: 2.5,
          z: 0.25,
          ease: "power3.inOut",
        });

        gsap.to(this.controls.target, {
          duration: 2,
          x: 1.148,
          y: 2.39,
          z: -1.464,
          ease: "power3.inOut",
        });
      },
    };
    this.secondPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: 1.9,
          y: 2.5,
          z: 0.25,
          ease: "power3.inOut",
        });

        gsap.to(this.controls.target, {
          duration: 2,
          x: 1.92,
          y: 2.39,
          z: -1.464,
          ease: "power3.inOut",
        });
      },
    };
    this.thirdPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: 2.6,
          y: 2.5,
          z: 0.25,
          ease: "power3.inOut",
        });

        gsap.to(this.controls.target, {
          duration: 2,
          x: 2.693,
          y: 2.394,
          z: -1.674,
          ease: "power3.inOut",
        });
      },
    };
    this.fourthPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: 3.3,
          y: 2.5,
          z: 0.25,
          ease: "power3.inOut",
        });

        gsap.to(this.controls.target, {
          duration: 2,
          x: 3.465,
          y: 2.394,
          z: -1.467,
          ease: "power3.inOut",
        });
      },
    };
    this.fifthPage = {
      func: () => {
        gsap.to(this.camera.position, {
          duration: 2,
          x: 4.2,
          y: 2.5,
          z: 0.25,
          ease: "power3.inOut",
        });

        gsap.to(this.controls.target, {
          duration: 2,
          x: 4.239,
          y: 2.394,
          z: -1.467,
          ease: "power3.inOut",
        });
      },
    };
  }

  update() {}
}
