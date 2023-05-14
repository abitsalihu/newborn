import Experience from "./Experience";
import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class HTML {
  constructor() {
    this.experience = new Experience();
    this.body = document.querySelector("body");
    this.canvas = this.experience.canvas;

    //! html

    //? animate background

    this.bg = document.createElement("div");
    this.bg.classList.add("bg");
    this.bgContent = `  <div class="title">
        <h1>NewBorn</h1>
        <h2>brew</h2>
      </div>
      <div class="load-con">
        <div class="spinner"></div>
        <div class="spinnerInside"></div>
      </div>`;
    this.bg.innerHTML = this.bgContent;
    this.body.appendChild(this.bg);

    //? MainPageBTNS added to HTML
    this.btnCon = document.createElement("div");
    this.btnCon.classList.add("btn-con");
    this.btnHtml = `
      <div class="btn home">HOME</div>
      <div class="btn events">EVENTS</div>
      <div class="btn menu">MENU</div>
      <div class="btn explore">EXPLORE</div>
      `;
    this.body.appendChild(this.btnCon);
    this.btnCon.innerHTML += this.btnHtml;

    this.orbitControlsDisabled = false;

    //? Menu active BTNS
    this.menuBtns = document.createElement("div");
    this.menuBtns.classList.add("menu-btns");
    this.menuBtnHtml = `<div class="previous btn">Previous</div>
      <div class="next btn">Next</div>`;
    this.menuBtns.innerHTML += this.menuBtnHtml;
    this.body.appendChild(this.menuBtns);

    //! end HTML

    this.size = this.experience.size;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.orbitControlsEnabled = false;
    this.orbitControlsDisabled = false;

    this.currPage = 1;

    this.resources.on("resourcesReady", () => {
      this.newBorn = this.experience.world.newBorn;

      //?? Parameters animations on btn clicked
      this.defaultParams = this.experience.animations.defaultParams;

      this.menuParams = this.experience.animations.menuParams;

      this.eventParams = this.experience.animations.eventParams;

      this.firstPage = this.experience.animations.firstPage;
      this.secondPage = this.experience.animations.secondPage;
      this.thirdPage = this.experience.animations.thirdPage;
      this.fourthPage = this.experience.animations.fourthPage;
      this.fifthPage = this.experience.animations.fifthPage;

      this.orbitControlsParams = {
        func: () => {
          this.orbitControlsEnabled = true;

          this.controls = new OrbitControls(this.camera.instance, this.canvas);
          this.controls.enableDamping = true;
          this.controls.target = this.newBorn.scene.position;

          this.orbitControlsDisabled = false;
          this.newBorn.scene.scale.set(1, 1, 1);
          if (this.size.width < 768) {
            this.newBorn.scene.scale.set(0.7, 0.7, 0.7);
          }
        },
      };

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
          if (this.size.width < 768) {
            setTimeout(() => {
              this.menuBtns.style.display = "flex";
            }, 1500);
          }

          this.menuParams.func();
        }
        if (e.target.classList.contains("events")) {
          e.target.style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          document.querySelector(".menu").style.display = "inline-block";
          document.querySelector(".explore").style.display = "none";
          this.menuBtns.style.display = "none";
          this.currPage = 1;

          this.eventParams.func();
        }
        if (e.target.classList.contains("home")) {
          e.target.style.display = "none";
          document.querySelector(".events").style.display = "inline-block";
          document.querySelector(".menu").style.display = "inline-block";
          document.querySelector(".explore").style.display = "inline-block";
          this.menuBtns.style.display = "none";
          this.currPage = 1;

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
          e.target.style.display = "none";
          document.querySelector(".events").style.display = "none";
          document.querySelector(".menu").style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          this.orbitControlsParams.func();
        }
      });
      this.menuBtns.addEventListener("click", (e) => {
        this.previous = this.menuBtns.firstElementChild;
        this.next = this.menuBtns.lastElementChild;

        if (e.target.classList.contains("previous")) {
          if (this.currPage > 1) {
            this.currPage--;
            if (this.currPage === 1) {
              this.firstPage.func();
              e.target.style.display = "none";
            }
            if (this.currPage === 2) {
              this.secondPage.func();
              console.log(this.currPage);
            }
            if (this.currPage === 3) {
              this.thirdPage.func();
            }
            if (this.currPage === 4) {
              this.fourthPage.func();
              this.next.style.display = "inline-block";
            }
          }
        }
        if (e.target.classList.contains("next")) {
          this.next = e.target;

          if (this.currPage >= 1 && this.currPage < 5) {
            this.currPage++;
            if (this.currPage === 2) {
              this.secondPage.func();
              this.previous.style.display = "inline-block";
            }
            if (this.currPage === 3) {
              this.thirdPage.func();
            }
            if (this.currPage === 4) {
              this.fourthPage.func();
            }
            if (this.currPage === 5) {
              this.fifthPage.func();
              e.target.style.display = "none";
            }
          }
        }
      });
    });
  }

  update() {
    if (this.orbitControlsEnabled) {
      this.controls.update();
      console.log("active orbitControls");
    }
  }
}
