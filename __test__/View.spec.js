import "regenerator-runtime/runtime.js";

import { View } from "../src/View";

describe("Model class", function () {
  describe("createElement()", function () {
    it("When passing correct parameters, then Element is correctly created", function () {
      const element = View.createElement("div", {
        styles: { color: "black" },
        attributes: { id: "testDiv" },
      });

      const styles = window.getComputedStyle(element);

      expect(element.tagName).toBe("div".toUpperCase());
      expect(element.id).toBe("testDiv");
      expect(styles.color).toBe("black");
    });
    it("When missing styles parameter, then Element is correctly created", function () {
      const element = View.createElement("div", {
        attributes: { id: "testDiv" },
      });

      const { color } = window.getComputedStyle(element);

      expect(element.id).toBe("testDiv");
      expect(color).toBeFalsy();
    });
    it("When missing attributes parameter, then Element is correctly created", function () {
      const element = View.createElement("div", {
        styles: { color: "black" },
      });

      const { color } = window.getComputedStyle(element);

      expect(element.id).toBeFalsy();
      expect(color).toBe("black");
    });
    it("When missing attributes and styles parameters, then Element is correctly created", function () {
      const element = View.createElement("div", {
        styles: { color: "black" },
      });

      const { color } = window.getComputedStyle(element);

      expect(element.id).toBeFalsy();
      expect(color).toBeFalsy();
    });
  });
  describe("getElementBySelector()", function () {
    it("When element is DOM, then it is returned by the function", function () {
      const model = new View("pepsi");
      const element = model.getElementBySelector(".test");
      expect(element).toBeTruthy();
    });
    it("When element is not in DOM, then is not returned by the function", function () {
      const model = new View("pepsi");
      const element = model.getElementBySelector("test");
      expect(element).toBeNull();
    });
  });
});
