import "regenerator-runtime/runtime.js";
import { style } from "../src/styles";
import { View } from "../src/View";

describe("View class", function () {
  const defaultData = {
    brand: "pepsi",
    configs: {
      component: "Cairo",
      params: null,
      ui: {
        closeButton: {
          strategy: "top-left",
          color: "white",
        },
      },
    },
  };

  describe("getElementBySelector()", function () {
    it("When element is DOM, then it is returned by the function", function () {
      const spy = jest.spyOn(View.prototype, "getElementBySelector");
      const element = spy(".test");
      expect(element).toBeTruthy();
    });
    it("When element is not in DOM, then is not returned by the function", function () {
      const spy = jest.spyOn(View.prototype, "getElementBySelector");
      const element = spy("test");
      expect(element).toBeNull();
    });
  });
  describe("createStyle()", function () {
    it("When string that represent css declaration is passed, then the function create an style tag", function () {
      const spy = jest.spyOn(View.prototype, "createStyle");
      const element = spy(style);
      expect(element.tagName).toBe("style".toUpperCase());
      expect(element.innerHtml).toBe(style);
    });
  });
  describe("createCloseButton()", function () {
    it("When the view is correctly initialized, then the close button is created correctly", function () {
      const spy = jest.spyOn(View.prototype, "createCloseButton");
      const strategy = "top-left";
      const color = "black";
      const element = spy({ strategy, color });

      const styles = window.getComputedStyle(element);
      /*TOP LEFT STRATEGY */
      expect(styles.top).toBe(0 + "px");
      expect(styles.left).toBe(0 + "px");
      expect(styles.color).toBe(color);
      expect(element.innerHTML).toBe("X");
    });
  });
});
