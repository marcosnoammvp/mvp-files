import "regenerator-runtime/runtime.js";
var sinon = require("sinon");

const { Model, createAsyncModel } = require("../src/Model");
describe("Model class", function () {
  describe("Creating a new instance", function () {
    it("When correct parameters are providen,then the instance is created", () => {
      //Arrange
      const brand = "coca-cola";
      const model = new Model(brand);

      //Act

      //Assert
      expect(model.brand).toBe(brand);
      //** some logic**/
    });
    it("When no parameters are providen,then the instance is created whit default constructor", () => {
      //Arrange
      const model = new Model();

      //Act

      //Assert
      expect(model.brand).toBe("no-brand");
      //** some logic**/
    });
  });
  describe("Initializing a new instance", function () {
    it("When instance is not tinitialized ,then getConfigs()return just constructor values", () => {
      //Arrange
      const brand = "coca-cola";
      const model = new Model(brand);

      //Act

      //Assert
      expect(model.getConfigs().brand).toBe(brand);
      expect(model.getConfigs().configs).toBeUndefined();
      //** some logic**/
    });
    it("When instance is initialized ,then getConfigs() return async values", async () => {
      //Arrange
      const brand = "coca-cola";
      const model = new Model(brand);
      //Act
      await model.initialize();
      //Assert
      expect(model.getConfigs().brand).toBe(brand);
      expect(model.getConfigs().configs).toBeTruthy();
    });
  });
  describe("Initializing async Model", function () {
    it("When async model is created whit parameter ,then the model is correctly created", async () => {
      //Arrange
      const brand = "coca-cola";
      const asyncModel = await createAsyncModel(brand);
      //Act
      //Assert
      expect(asyncModel.getConfigs().brand).toBe(brand);
      expect(asyncModel.getConfigs().configs).toBeTruthy();
    });
    it("When async model is created whit-out parameter ,then the model is correctly created", async () => {
      //Arrange
      const defaultBrand = "no-brand";
      const asyncModel = await createAsyncModel();
      //Act
      //Assert
      expect(asyncModel.getConfigs().brand).toBe(defaultBrand);
      expect(asyncModel.getConfigs().configs).toStrictEqual({});
    });
  });
});
