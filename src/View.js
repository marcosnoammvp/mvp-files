const { css } = require("./styles");

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
// div #topperRoot
// -- div #topperIframeContainer
// ---- button #topperCloseButton
// ---- iframe #topperIframe

// data = {
//   component: "Cairo",
//   params: null,
//   ui: {
//     closeButton: {
//       strategy: "top-left",
//       color: "white",
//     },
//   },
// };
export class View {
  constructor(data) {
    const { brand, configs } = data;
    const { component, ui } = configs;
    const { closeButton } = ui;
    this.createIframe(component, brand);
    this.createCloseButton(closeButton);
    this.createIframeContainer();
    this.createStyle(css);
    this.createRoot();

    const htmlRef = this.getElementBySelector("html");
    this.insertAsFirstChild(htmlRef, this.cssTag);
    this.insertAsFirstChild(htmlRef, this.root);
  }

  bindRemoveToper() {
    this.closeButton.addEventListener("click", (event) => {
      this.root.remove();
    });
  }

  createElement(tag, options = {}) {
    const { styles, attributes } = options;
    const element = new HtmlElement(tag)
      .whitAttributes(attributes)
      .whitStyles(styles)
      .getElement();
    return element;
  }

  getElementBySelector(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  insertAsFirstChild(father, child) {
    father.insertBefore(child, father.firstChild);
  }

  createRoot() {
    this.root = this.createElement("div", {
      attributes: { id: "topperRoot" },
    });
    this.root.appendChild(this.iframeContainer);
  }
  createIframeContainer() {
    this.iframeContainer = this.createElement("div", {
      attributes: { id: "topperIframeContainer" },
    });
    this.iframeContainer.appendChild(this.closeButton);
    this.iframeContainer.appendChild(this.iframe);
  }
  createIframe(component, brand) {
    this.iframe = this.createElement("iframe", {
      attributes: {
        id: "topperIframe",
        src: `https://mvp-pages.vercel.app/${component}/${brand}`,
      },
    });
  }
  createCloseButton(closeButton) {
    const defaultStrategy = "right-left";
    const { strategy, color } = closeButton;
    this.closeButton = this.createElement("button", {
      attributes: { id: "topperCloseButton" },
      styles: { color },
    });

    closeButtonStrategies.get(strategy || defaultStrategy)(this.closeButton);

    this.closeButton.innerHTML = "X";
  }
  createStyle(css) {
    this.cssTag = this.createElement("style");
    this.cssTag.innerHTML = css;
  }
}

export class HtmlElement {
  constructor(tag) {
    this.element = document.createElement(tag);
  }
  whitStyles(styles = {}) {
    const styleTupples = Object.entries(styles);
    styleTupples.forEach((tupple) => {
      this.element.style.setProperty(tupple[0], tupple[1], "important");
    });
    return this;
  }
  whitAttributes(attributes = {}) {
    const attrTuples = Object.entries(attributes) || [];
    for (let i = 0; i < attrTuples.length; i++) {
      this.element.setAttribute(attrTuples[i][0], attrTuples[i][1]);
    }
    return this;
  }
  getElement() {
    return this.element;
  }
}
