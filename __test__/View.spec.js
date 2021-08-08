import "regenerator-runtime/runtime.js";
import { cssDeclarationAsString } from "../src/libs";
import { View } from "../src/View";

describe("View class", function () {
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
      const element = spy(cssDeclarationAsString);
      expect(element.tagName).toBe("style".toUpperCase());
      expect(element.innerHTML).toBe(cssDeclarationAsString);
    });
  });
  describe("createCloseButton()", function () {
    it("When the view is correctly initialized(T-L), then the close button is created correctly", function () {
      const spy = jest.spyOn(View.prototype, "createCloseButton");
      const strategy = "top-left";
      const color = "black";
      const element = spy({ strategy, color });

      const styles = window.getComputedStyle(element);
      /*TOP LEFT STRATEGY */
      expect(styles.top).toBe(0 + "px");
      expect(styles.left).toBe(0 + "px");
      expect(styles.color).toBe(color);
    });

    it("When the view is correctly initialized(T-R), then the close button is created correctly", function () {
      const spy = jest.spyOn(View.prototype, "createCloseButton");
      const strategy = "top-right";
      const color = "black";
      const element = spy({ strategy, color });

      const styles = window.getComputedStyle(element);
      expect(styles.top).toBe(0 + "px");
      expect(styles.right).toBe(0 + "px");
      expect(styles.color).toBe(color);
    });

    it("When the view is correctly initialized(B-L), then the close button is created correctly", function () {
      const spy = jest.spyOn(View.prototype, "createCloseButton");
      const strategy = "bottom-left";
      const color = "black";
      const element = spy({ strategy, color });

      const styles = window.getComputedStyle(element);
      expect(styles.bottom).toBe(0 + "px");
      expect(styles.left).toBe(0 + "px");
      expect(styles.color).toBe(color);
    });

    it("When the view is correctly initialized(B-R), then the close button is created correctly", function () {
      const spy = jest.spyOn(View.prototype, "createCloseButton");
      const strategy = "bottom-right";
      const color = "black";
      const element = spy({ strategy, color });

      const styles = window.getComputedStyle(element);
      expect(styles.bottom).toBe(0 + "px");
      expect(styles.right).toBe(0 + "px");
      expect(styles.color).toBe(color);
    });

    it("When the view is not correctly initialized, then the close button is created in default way", function () {
      const spy = jest.spyOn(View.prototype, "createCloseButton");
      const strategy = "NO-STRATEGY";
      const color = "black";
      const element = spy({ strategy, color });

      const styles = window.getComputedStyle(element);
      expect(styles.top).toBe(0 + "px");
      expect(styles.right).toBe(0 + "px");
      expect(styles.color).toBe(color);
    });
  });
});
