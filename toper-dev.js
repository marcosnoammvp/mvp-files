/* Mock for http request */
const getCustomerConfigsMock = (success, timeout, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

class Model {
  constructor(customerId) {
    this.customerId = customerId;
  }

  static getcustomerConfigs() {
    return this.customerConfigs;
  }

  /*
  This function should fetch all the customer data
  */
  async initialize() {
    this.customerConfigs = await getCustomerConfigsMock(true, 500, {
      id: this.customerId,
    });
  }
}

async function createAsyncModel(customerId) {
  const model = new Model(customerId);
  await model.initialize();
  return model;
}

class View {
  constructor() {
    this.root = this.getElement("#root");

    this.iframeContainer = this.createElement("div");
    this.iframeContainer.setAttribute("id", "toperIframeContainer");

    this.iframe = this.createElement("iframe");
    this.iframe.setAttribute("id", "toperIframe");
    this.iframe.setAttribute("src", "https://mvp-pages.vercel.app/");

    this.closeButton = this.createElement("button");
    this.closeButton.innerHTML = "X";
    this.closeButton.setAttribute("id", "toperIframeButton");

    this.iframeContainer.appendChild(this.closeButton);
    this.iframeContainer.appendChild(this.iframe);
    this.root.appendChild(this.iframeContainer);
  }

  bindRemoveToper(handler) {
    this.closeButton.addEventListener("click", (event) => {
      console.log("button clicked");
      this.root.remove();
    });
  }

  // Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindRemoveToper();
  }
}

async function initToper() {
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  const htmlRef = document.querySelector("html");
  htmlRef.insertBefore(root, htmlRef.firstChild);
  const app = new Controller(
    await createAsyncModel("507f1f77bcf86cd799439011"),
    new View()
  );
}
