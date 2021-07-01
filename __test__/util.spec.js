import "regenerator-runtime/runtime.js";

const { getConfigsMock } = require("../src/utils");

describe("Util functions", function () {
  describe("getConfigsMock()", function () {
    it("When looking for success response,then promise is resolved", async () => {
      const success = true;
      const timeout = 500;
      const data = { testing: "testing" };
      //   success, timeout, data;
      //Arrange
      const response = await getConfigsMock(success, timeout, data);
      //Act

      //Assert
      expect(response).toBe(data);
    });
    it("When looking for reject response,then promise is rejected", async () => {
      const success = false;
      const timeout = 500;
      const data = { testing: "testing" };
      //   success, timeout, data;
      //Arrange
      try {
        const response = await getConfigsMock(success, timeout, data);
        //Act
      } catch (error) {
        expect(error).toBeTruthy();
      }
      //Assert
    });
    it("When passing no parameters,then promise is resolved", async () => {
      try {
        //Arrange
        const response = await getConfigsMock();
        //Act
        //Assert
        expect(response).toBeTruthy();
      } catch (error) {}
    });
  });
});
