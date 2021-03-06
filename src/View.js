const { cssDeclarationAsString } = require("./libs");
const { createHTMLElement } = require("./libs");

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
    "bottom-right",
    function (button) {
      button.style.bottom = 0;
      button.style.right = 0;
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
export const  closeButtonStrategiesProxy = new Proxy(closeButtonStrategies, {
    get: function(target, strategy) {
        return target.has(strategy) ? target.get(strategy) : target.get('top-right');
    },
});

export function View(data) {
  const { brand, configs } = data;
  const { component, ui } = configs;
  const { closeButton } = ui;

  this.iframe = this.createIframe(component, brand);
  this.closeButton = this.createCloseButton(closeButton);
  this.iframeContainer = this.createIframeContainer(this.closeButton, this.iframe);
  this.root = this.createRoot(this.iframeContainer);

  this.styleTag = this.createStyle(cssDeclarationAsString);

  const htmlRef = this.getElementBySelector("html");
  this.insertAsFirstChild(htmlRef, this.styleTag);
  this.insertAsFirstChild(htmlRef, this.root);
}

View.prototype.createCloseButton = function (closeButton) {  
  const defaultStrategy = "top-right";
  const { strategy, color } = closeButton;

  const element = createHTMLElement("button", {
    attributes: { id: "topperCloseButton" },
    styles: { color },
  });

  closeButtonStrategiesProxy[strategy](element);

  element.innerHTML = "X";

  return element;
};
View.prototype.createStyle = function (cssDeclarationAsString) {
  const element = createHTMLElement("style");
  element.innerHTML = cssDeclarationAsString;
  return element;
};
View.prototype.getElementBySelector = function (selector) {
  const element = document.querySelector(selector);
  return element;
};
View.prototype.createIframeContainer = function (closeButton, iframe) {
  const element = createHTMLElement("div", {
    attributes: { id: "topperIframeContainer" },
  });
  element.appendChild(closeButton);
  element.appendChild(iframe);
  return element;
};
View.prototype.createIframe = function (component, brand) {
  const element = createHTMLElement("iframe", {
    attributes: {
      id: "topperIframe",
      src: `https://mvp-pages.vercel.app/${component}/${brand}`,
    },
  });
  return element;
};
View.prototype.createRoot = function (iframeContainer) {
  const element = createHTMLElement("div", {
    attributes: { id: "topperRoot" },
  });

  element.appendChild(iframeContainer);

  return element;
};
View.prototype.insertAsFirstChild = function (father, child) {
  father.insertBefore(child, father.firstChild);
};
View.prototype.bindRemoveToper = function () {
  this.closeButton.addEventListener("click", (e) => {
    this.root.remove();
  });
};

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
