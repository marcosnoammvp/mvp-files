import "regenerator-runtime/runtime.js";

import {serverSideError,serverSideResponse,someBrand,defaultBrand} from './shared';
import { Model, createAsyncModel } from "../src/Model";
import * as utils from '../src/utils';


describe("Model class", function () {
  describe("constructor()", function () {
    it("When correct parameters are providen, then the instance is created", () => {
      const model = new Model(someBrand);

      expect(model.brand).toStrictEqual(someBrand);
    });
    it("When no parameters are providen,then the instance is created whit default brand", () => {
      const model = new Model();

      expect(model.brand).toBe(defaultBrand);
    });
  });
  describe("getModelData()", function () {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("When instance is created but not initialized ,then returns just providen values", () => {
      const model = new Model(someBrand);

      expect(model.getModelData().brand).toBe(someBrand);
      expect(model.getModelData().configs).toBeUndefined();
    });
    it("When instance is created and initialized ,then returns server side values", async () => {
      const model = new Model(someBrand);
      jest
        .spyOn(utils, "getConfigsMock")
        .mockReturnValue(Promise.resolve(serverSideResponse));

      await model.initialize();

      expect(model.getModelData()).toEqual({
        brand: someBrand,
        configs: { ...serverSideResponse },
      });
    });
  });
  describe("initialize()", function () {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("When model is initialized correctly ,then the model is correctly created", async () => {
      const model = new Model(someBrand);
      jest
        .spyOn(utils, "getConfigsMock")
        .mockReturnValue(Promise.resolve(serverSideResponse));

      await model.initialize();

      expect(model).toBeTruthy();
    });
    it("When model is not initialized correctly ,then the model is not created", async () => {
      const model = new Model(someBrand);
      jest
        .spyOn(utils, "getConfigsMock")
        .mockReturnValue(Promise.reject(serverSideError));

      await model.initialize();

      expect(model.brand).toBe(defaultBrand);
    });
  });
});

describe("createAsyncModel()", function () {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("When the data is succesfuly fetched ,then the model is correctly created", async () => {
    jest
      .spyOn(utils, "getConfigsMock")
      .mockReturnValue(Promise.resolve(serverSideResponse));

    const model = await createAsyncModel(someBrand);

    expect(model instanceof Model).toBe(true);
    expect(model).toBeTruthy();
  });
  it("When something goes wrong ,then the model is not created", async () => {
    jest
      .spyOn(utils, "getConfigsMock")
      .mockReturnValue(Promise.reject(serverSideError));

    const model = await createAsyncModel(someBrand);

    expect(model.brand).toStrictEqual(defaultBrand);
  });
});
