import Experience from "./Experience";
import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class HTML {
  constructor() {
    this.experience = new Experience();
    this.body = document.querySelector("body");
    this.canvas = this.experience.canvas;
    this.sceneReady = false;

    this.todaysDate = new Date().getDate();

    this.events = this.experience.events;

    //? loop to get today's event
    for (const event of this.events) {
      if (event.date === this.todaysDate) {
        if (event.event) {
          this.fEvent = document.createElement("div");
          this.fEvent.classList.add("fEvent");
          this.fEvent.innerHTML = `
          <div>
          Event:
          <span class="fPage__item--price"> ${event.eventName} </span>
          </div>
          <div>
          Starts at:
          <span class="fPage__item--price">${event.start} </span>
          </div>
        `;

          if (event.secondEvent) {
            this.sEvent = document.createElement("div");
            this.sEvent.classList.add("sEvent");

            this.sEvent.innerHTML = `
            <div>
          Event:
          <span class="fPage__item--price"> ${event.secondEventName} </span>
          </div>
          <div>
          Starts at:
          <span class="fPage__item--price">${event.secondEventStart} </span>
            </div>
            `;
          }
        } else {
          this.noEvent = document.createElement("div");
          this.noEvent.classList.add("noEvent");
          this.noEvent.innerHTML = `
            There are no events <span class="fPage__item--price">TODAY :( </span>, check again tomorrow!!
          `;
        }
      }
    }
    //? FINISH LOOP

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
      <div class="btn explore">GAMES</div>
      `;
    this.body.appendChild(this.btnCon);
    this.btnCon.innerHTML += this.btnHtml;

    // this.orbitControlsDisabled = false;

    //? Menu active BTNS
    this.menuBtns = document.createElement("div");
    this.menuBtns.classList.add("menu-btns");

    this.menuBtnHtml = `<div class="previous btn">Previous</div>
      <div class="next btn">Next</div>`;
    this.menuBtns.innerHTML += this.menuBtnHtml;
    this.body.appendChild(this.menuBtns);

    this.previous = this.menuBtns.firstElementChild;
    this.next = this.menuBtns.lastElementChild;

    this.simpleWebsite = document.createElement("div");
    this.simpleWebsite.classList.add("simple-website");

    this.simpleWebsite.innerHTML = `<div class="eventTitle">
        <h1>NewBorn</h1>
        <h2>brew</h2>
      </div>
      <div class="fPage">
        <div class="fPage__title">Classics</div>
        <div class="fPage__item">
          <div class="fPage__item--title">ESPRESSO</div>
          <div class="fPage__item--price">0.8</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">MACHIATO</div>
          <div class="fPage__item--price">1/1.2</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">CLASSIC CAPUCCINO</div>
          <div class="fPage__item--price">1.2</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">LATTE</div>
          <div class="fPage__item--price">1.7</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">FLAT WHITE</div>
          <div class="fPage__item--price">2.2</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">HOT CHOCOLATE</div>
          <div class="fPage__item--price">2</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">AMERICANO</div>
          <div class="fPage__item--price">1.2</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">TEA</div>
          <div class="fPage__item--price">1.1</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">
            ORANGE JUICE <span class="fresh">- fresh squezed</span>
          </div>
          <div class="fPage__item--price">2</div>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">
            LEMONADE <span class="fresh">- fresh squezed</span>
          </div>
          <div class="fPage__item--price">2.2</div>
        </div>
        <div class="fPage__item line-br">
          <div class="extra__left">ICED +.50</div>
          <div class="extra__right">
            OATMILK + 0.7 <span>FLAVOR + 0.3</span>
          </div>
        </div>
      </div>
      <div class="fPage">
        <div class="fPage__title sPage__title">
          Signature <span> FLAVORS</span>
        </div>
        <div class="fPage__item">
          <div class="fPage__item--title">NORWEGIAN MOCHA</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="sPage__desc">
          real dark chocolate melted with espresso and steamed milk, topped with
          whipped cream.
        </div>

        <div class="fPage__item">
          <div class="fPage__item--title">VANILLA LATTE</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="sPage__desc">
          espresso steamed milk and madagascar vanilla syrup
        </div>

        <div class="sPage__footer">Students Save 10%</div>
      </div>
      <div class="fPage">
        <div class="line-br"></div>
        <div class="fPage__item">
          <div class="fPage__item--title">MONTANA CHAI LATTE</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="sPage__desc">
          black tea latte infused with cinammon cloves and warming spices
        </div>

        <div class="fPage__item">
          <div class="fPage__item--title">AMERICAN PORUOVER</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="sPage__desc">
          hot water is hand poured to extract smooth black coffee
        </div>

        <div class="fPage__item">
          <div class="fPage__item--title">ICED CARAMEL MACHIATO</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="sPage__desc">
          double esspresso, milk and vanilla syrup topped with a sweet caramel
          drizzle
        </div>
      </div>

      <div class="fPage">
        <div class="fPage__title">Specials</div>
        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">ICED WHITE MOCHA</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">AFFOGATO</div>
          <div class="fPage__item--price">2</div>
        </div>
        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">MATCHA ICED LATTE</div>
          <div class="fPage__item--price">2.5</div>
        </div>
        <div class="foPage__footer">WIFI: welovekosovo</div>
      </div>

      <div class="fPage">
        <div class="fPage__title">Waffles</div>
        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">MAPLE SYRUP + BUTTER</div>
          <div class="fPage__item--price">2.8</div>
        </div>

        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">NUTELLA + BANNANA</div>
          <div class="fPage__item--price">2.8</div>
        </div>

        <div class="fiPage__subTitle">Milkshakes</div>
        <div class="fiPage__milkshakes">
          STRAWBERRY - VANILLA - CHOCOLATE OREO - ESPRESSO - MONTANA CHAI
        </div>
        <div class="fiPage__subTitle">bites</div>

        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">YOGURT BOWL</div>
          <div class="fPage__item--price">1.8</div>
        </div>

        <div class="fPage__item foPage__item">
          <div class="fPage__item--title">STROOPWAFFEL</div>
          <div class="fPage__item--price">0.6</div>
        </div>

      </div>
       <div class="eventTitle">
        <h1>Events</h1>
        <h2>Today</h2>
      </div>
      <div class="fPage eventContent">


       
      </div>
      <div class="simple-SignUp">
        <a class="signUp_link light" href="https://linktr.ee/newbornbrew">Sign Up</a>
      </div>
      `;

    this.eventCon = document.querySelector(".eventContent");

    //? SIGN UP btn

    this.signUp = document.createElement("div");
    this.signUp.classList.add("signUp-con");
    this.signUp.innerHTML = `
    <div class="signUp">
        <a class="signUp_link" href="https://linktr.ee/newbornbrew">Sign Up</a>
      </div>
    `;

    this.body.appendChild(this.signUp);

    //! end HTML

    this.size = this.experience.size;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.orbitControlsEnabled = false;
    this.orbitControlsDisabled = false;

    this.currPage = 1;

    // setTimeout(() => {
    //   if (!this.sceneReady) {
    //     this.btnCon.remove();
    //     this.menuBtns.remove();
    //     document.querySelector(".web-gl").remove();
    //     this.body.appendChild(this.simpleWebsite);
    //     this.eventCon = document.querySelector(".eventContent");
    //     if (this.fEvent) {
    //       this.eventCon.appendChild(this.fEvent);
    //     }
    //     if (this.sEvent) {
    //       this.eventCon.appendChild(this.sEvent);
    //     }

    //     if (this.noEvent) {
    //       this.eventCon.appendChild(this.noEvent);
    //     }

    //     setTimeout(() => {
    //       this.bg.classList.add("animate-bg");
    //     }, 1000);
    //   }
    // }, 7000);

    this.resources.on("resourcesReady", () => {
      this.sceneReady = true;

      this.writtenObjects = this.experience.world.writtenObjects;

      //?? Parameters animations on btn clicked
      this.defaultParams = this.experience.animations.defaultParams;

      this.menuParams = this.experience.animations.menuParams;
      this.eventParams = this.experience.animations.eventParams;
      this.gamesParams = this.experience.animations.gamesParams;

      this.firstPage = this.experience.animations.firstPage;
      this.secondPage = this.experience.animations.secondPage;
      this.thirdPage = this.experience.animations.thirdPage;
      this.fourthPage = this.experience.animations.fourthPage;
      this.fifthPage = this.experience.animations.fifthPage;

      if (window.location.hash === "#home") {
        document.querySelector(".home").style.display = "none";

        document.querySelector(".menu").style.display = "inline-block";
        document.querySelector(".events").style.display = "inline-block";
        document.querySelector(".explore").style.display = "inline-block";
      }

      if (window.location.hash === "#events") {
        this.eventParams.func();
        document.querySelector(".signUp").style.display = "inline-block";

        document.querySelector(".events").style.display = "none";
        document.querySelector(".home").style.display = "inline-block";
        document.querySelector(".menu").style.display = "inline-block";
        document.querySelector(".explore").style.display = "none";
      }

      if (window.location.hash === "#menu") {
        document.querySelector(".menu").style.display = "none";
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

      setTimeout(() => {
        this.bg.classList.add("animate-bg");
      }, 1000);
      setTimeout(() => {
        this.btnCon.classList.add("animateTitle");
      }, 2000);

      //? Event Listeners for the btn clicked
      this.btnCon.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu")) {
          window.location.hash = "#menu";
          e.target.style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          document.querySelector(".events").style.display = "inline-block";
          document.querySelector(".explore").style.display = "none";
          document.querySelector(".signUp").style.display = "none";
          if (this.size.width < 768) {
            this.menuBtns.style.display = "flex";
          }

          this.menuParams.func();
        }
        if (e.target.classList.contains("events")) {
          e.target.style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          document.querySelector(".menu").style.display = "inline-block";
          document.querySelector(".explore").style.display = "none";
          document.querySelector(".signUp").style.display = "inline-block";
          this.menuBtns.style.display = "none";
          this.currPage = 1;
          this.previous.style.display = "none";
          this.next.style.display = "inline-block";

          window.location.hash = "#events";
          window.location.hash === "#events";
          this.eventParams.func();
        }
        if (e.target.classList.contains("home")) {
          e.target.style.display = "none";
          document.querySelector(".events").style.display = "inline-block";
          document.querySelector(".menu").style.display = "inline-block";
          document.querySelector(".explore").style.display = "inline-block";
          document.querySelector(".signUp").style.display = "none";

          this.menuBtns.style.display = "none";
          this.currPage = 1;
          this.previous.style.display = "none";
          this.next.style.display = "inline-block";
          window.location.hash = "#home";
          if (window.location.hash === "#home") {
            this.defaultParams.func();
          }
        }
        if (e.target.classList.contains("explore")) {
          e.target.style.display = "none";
          // document.querySelector(".events").style.display = "none";
          // document.querySelector(".menu").style.display = "none";
          document.querySelector(".home").style.display = "inline-block";
          this.gamesParams.func();
        }
      });

      //! PHONE MENU NAVIGATION!
      this.menuBtns.addEventListener("click", (e) => {
        if (e.target.classList.contains("previous")) {
          if (this.currPage > 1) {
            this.currPage--;
            if (this.currPage === 1) {
              this.firstPage.func();
              e.target.style.display = "none";
            }
            if (this.currPage === 2) {
              this.secondPage.func();
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

  update() {}
}
