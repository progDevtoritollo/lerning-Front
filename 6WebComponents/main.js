class UserCard extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });

    var card = document.createElement("div");
    card.setAttribute("class", "card");

    card.style.display = "flex";
    card.style.justifyContent = "space-around";
    card.style.alignItems = "center";
    card.style.width = "185px";
    card.style.padding = "10px";
    card.style.background = "#fff";
    card.style.borderRadius = "5px";
    card.style.boxShadow = "0 0 5px 0.2px #b9bdbf";

    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    var name = document.createElement("span");
    name.setAttribute("class", "name");

    //avatar
    var imgUrl;
    if (this.hasAttribute("avatar")) {
      imgUrl = this.getAttribute("avatar");
    } else {
      imgUrl = "photo.jpg";
    }
    var img = document.createElement("img");
    img.src = imgUrl;

    img.style.height = "50px";
    img.style.borderRadius = "50%";

    icon.appendChild(img);

    // Берем содержимое атрибута и добавляем его в span
    var text = this.getAttribute("name");
    name.textContent = text;
    name.style.marginRight = "18px";

    // Создаем CSS для shadow dom
    var style = document.createElement("style");

    style.textContent =
      ".card {" +
      // CSS truncated for brevity

      // добавляем созданные элементы к shadow dom

      shadow.appendChild(style);
    shadow.appendChild(card);
    card.appendChild(icon);
    card.appendChild(name);
  }
}
customElements.define("x-user-card", UserCard);



class MyCounter extends HTMLElement {
  constructor() {
    super();

    const main = document.querySelector("x-counter");

    // console.log(main.getAttribute("initial"));
    
    this.count = main.getAttribute("initial");

    const style = `
        button {
          border-radius: 50%;
          border: darkgray;
          margin: 5px;
          box-shadow: 0 0 5px 0.01px #b9bdbf;

        }
      `;

    const html = `
        <button id="dec">-</button>
        <span>${main.getAttribute("initial")}</span>
        <button id="inc">+</button>
      `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      ${html}
      `;

    this.buttonInc = this.shadowRoot.getElementById("inc");
    this.buttonDec = this.shadowRoot.getElementById("dec");
    this.spanValue = this.shadowRoot.querySelector("span");

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.count++;
    this.update();
  }

  dec() {
    this.count--;
    this.update();
  }

  update() {
    this.spanValue.innerText = this.count;
  }

  connectedCallback() {
    this.buttonInc.addEventListener("click", this.inc);
    this.buttonDec.addEventListener("click", this.dec);
  }

  disconnectedCallback() {
    this.buttonInc.removeEventListener("click", this.inc);
    this.buttonDec.removeEventListener("click", this.dec);
  }
}
customElements.define("x-counter", MyCounter);
