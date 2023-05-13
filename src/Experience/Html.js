import Experience from "./Experience";
import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class HTML {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.btnCon = document.querySelector(".btn-con");
    this.bg = document.querySelector(".bg");
    this.orbitControlsDisabled = false;

    //? ADD BG ANIMATION
    this.bgContent = `  <div class="title">
        <h1>NewBorn</h1>
        <h2>brew</h2>
      </div>
      <div class="load-con">
        <div class="spinner"></div>
        <div class="spinnerInside"></div>
      </div>`;
    this.bg.innerHTML = this.bgContent;

    this.size = this.experience.size;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.orbitControlsEnabled = false;
    this.orbitControlsDisabled = false;

    this.resources.on("resourcesReady", () => {
      this.newBorn = this.experience.world.newBorn;
      //?? Parameters animations on btn clicked
      this.defaultParams = {
        active: false,
        func: () => {
          this.active = false ? true : false;
          if (this.size.width < 768) {
            gsap.to(this.camera.instance.position, {
              duration: 2,
              x: 9,
              y: 0,
              z: 5.7,
              ease: "power3.inOut",
            });
          } else {
            gsap.to(this.camera.instance.position, {
              duration: 2,
              x: 11,
              y: 0,
              z: 5.7,
              ease: "power3.inOut",
            });
          }
        },
      };

      this.menuParams = {
        active: false,
        func: () => {
          this.active = true;
          if (this.size.width < 768) {
            gsap.to(this.camera.instance.position, {
              duration: 2,
              x: 12.35,
              y: 3,
              z: -5.5,
              ease: "power3.inOut",
            });
          } else {
            gsap.to(this.camera.instance.position, {
              duration: 2,
              x: 17,
              y: 2.2,
              z: -3.3,
              ease: "power3.inOut",
            });
          }
        },
      };

      this.orbitControlsParams = {
        func: () => {
          this.orbitControlsEnabled = true;

          this.controls = new OrbitControls(this.camera.instance, this.canvas);
          this.controls.enableDamping = true;
          // this.controls.target = this.newBorn.scene.position;
          // this.newBorn.scene.rotation.y = Math.PI * 0.5;

          this.orbitControlsDisabled = false;
          // this.newBorn.scene.scale.set(1, 1, 1);
          // if (this.size.width < 768) {
          //   this.newBorn.scene.scale.set(0.7, 0.7, 0.7);
          // }
        },
      };

      this.eventParams = {
        active: false,
        func: () => {
          this.active = true;
          if (this.size.width < 768) {
            gsap.to(this.camera.instance.position, {
              duration: 2,
              x: 9.225,
              y: 1.2,
              z: -4.25,
              ease: "power3.inOut",
            });
          } else {
            gsap.to(this.camera.instance.position, {
              duration: 2,
              x: 8.9,
              y: 1.2,
              z: -9,
              ease: "power3.inOut",
            });
          }
        },
      };

      //? add btns
      this.btnHtml = `
      <div class="btn home">HOME</div>
      <div class="btn events">EVENTS</div>
      <div class="btn menu">MENU</div>
      <div class="btn explore">EXPLORE</div>
      `;

      this.btnCon.innerHTML += this.btnHtml;

      setTimeout(() => {
        this.bg.classList.add("animate-bg");
      }, 1000);
      setTimeout(() => {
        this.btnCon.classList.add("animateTitle");
      }, 2000);

      //? Event Listeners for the btn clicked
      this.btnCon.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu")) {
          e.target.style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          document.querySelector(".events").style.display = "inline-block";
          document.querySelector(".explore").style.display = "none";

          this.menuParams.func();
        }
        if (e.target.classList.contains("events")) {
          e.target.style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          document.querySelector(".menu").style.display = "inline-block";
          document.querySelector(".explore").style.display = "none";

          this.eventParams.func();
        }
        if (e.target.classList.contains("home")) {
          e.target.style.display = "none";
          document.querySelector(".events").style.display = "inline-block";
          document.querySelector(".menu").style.display = "inline-block";
          document.querySelector(".explore").style.display = "inline-block";

          this.defaultParams.func();
          console.log(this.camera.instance.position);
          if (this.orbitControlsEnabled) {
            this.btnCon.style.display = "none";
            this.orbitControlsEnabled = false;
            this.controls.enabled = false;
            this.orbitControlsDisabled = true;
            window.location.reload();
          }
        }
        if (e.target.classList.contains("explore")) {
          this.orbitControlsParams.func();
          e.target.style.display = "none";
          document.querySelector(".events").style.display = "none";
          document.querySelector(".menu").style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
        }
      });
    });
  }

  update() {
    if (this.orbitControlsEnabled) {
      this.controls.update();
      console.log("active");
    }
  }
}
