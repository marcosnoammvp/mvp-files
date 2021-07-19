export function HTMLElement(tag) {
  this.element = document.createElement(tag);
}

HTMLElement.prototype.whitStyles = function (styles = {}) {
  const styleTupples = Object.entries(styles);
  styleTupples.forEach((tupple) => {
    this.element.style.setProperty(tupple[0], tupple[1], "important");
  });
  return this;
};
HTMLElement.prototype.whitAttributes = function (attributes = {}) {
  const attrTuples = Object.entries(attributes) || [];
  for (let i = 0; i < attrTuples.length; i++) {
    this.element.setAttribute(attrTuples[i][0], attrTuples[i][1]);
  }
  return this;
};
HTMLElement.prototype.getElement = function () {
  return this.element;
};

export function createHTMLElement(
  tag,
  options = { styles: {}, attributes: {} }
) {
  const { styles, attributes } = options;
  const element = new HTMLElement(tag)
    .whitAttributes(attributes)
    .whitStyles(styles)
    .getElement();
  return element;
}
