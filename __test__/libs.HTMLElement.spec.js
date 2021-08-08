import {createHTMLElement} from '../src/libs';


  describe("createHTMLElement()", function () {
    it("When passing correct parameters, then Element is correctly created", function () {
      const element = createHTMLElement("div", {
        styles: { color: "black" },
        attributes: { id: "testDiv" },
      });

      const styles = window.getComputedStyle(element);

      expect(element.tagName).toBe("div".toUpperCase());
      expect(element.id).toBe("testDiv");
      expect(styles.color).toBe("black");
    });
    it("When missing styles parameter, then Element is correctly created", function () {
      const element = createHTMLElement("div", {
        attributes: { id: "testDiv" },
      });

      const { color } = window.getComputedStyle(element);

      expect(element.id).toBe("testDiv");
      expect(color).toBeFalsy();
    });
    it("When missing attributes parameter, then Element is correctly created", function () {
      const element = createHTMLElement("div", {
        styles: { color: "black" },
      });

      const { color } = window.getComputedStyle(element);

      expect(element.id).toBeFalsy();
      expect(color).toBe("black");
    });
    it("When missing attributes and styles parameters, then Element is correctly created", function () {
      const element = createHTMLElement("div");
      const { color } = window.getComputedStyle(element);

      expect(element.id).toBeFalsy();
      expect(color).toBeFalsy();
    });
  });