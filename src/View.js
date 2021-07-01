export const closeButtonStrategies = new Map([
  [
    "top-right",
    function (button) {
      button.style.top = 0;
      button.style.right = 0;
    },
  ],
  [
    "top-left",
    function (button) {
      button.style.top = 0;
      button.style.left = 0;
    },
  ],
  [
    "bottom-rigth",
    function (button) {
      button.style.bottom = 0;
      button.style.rigth = 0;
    },
  ],
  [
    "bottom-left",
    function (button) {
      button.style.bottom = 0;
      button.style.left = 0;
    },
  ],
]);

export class View {
  constructor(data) {
    this.root = this.getElement("#root");

    this.iframeContainer = this.createElement("div");
    this.setAttributes(this.iframeContainer, { id: "toperIframeContainer" });

    this.iframe = this.createElement("iframe");
    this.setAttributes(this.iframe, {
      id: "toperIframe",
      src: `http://localhost:3000/${data.configs.component}/${data.brand}`,
    });

    this.closeButton = this.createElement(
      "button",
      data.configs.ui.closeButton
    );
    closeButtonStrategies.get(data.configs.ui.closeButton.strategy)(
      this.closeButton
    );

    this.closeButton.innerHTML = "X";

    this.setAttributes(this.closeButton, { id: "toperIframeButton" });

    this.iframeContainer.appendChild(this.closeButton);
    this.iframeContainer.appendChild(this.iframe);

    this.root.appendChild(this.iframeContainer);
  }

  bindRemoveToper() {
    this.closeButton.addEventListener("click", (event) => {
      console.log("button clicked");
      this.root.remove();
    });
  }

  // Create an element with an optional CSS class
  createElement(tag, styles) {
    const element = document.createElement(tag);

    if (styles) {
      const styleTupples = Object.entries(styles);
      styleTupples.forEach((tupple) => {
        element.style.setProperty(tupple[0], tupple[1], "important");
      });
    }

    return element;
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  setAttributes(element, attributes) {
    const attrTuples = Object.entries(attributes);
    for (let i = 0; i < attrTuples.length; i++) {
      element.setAttribute(attrTuples[i][0], attrTuples[i][1]);
    }
  }
}
