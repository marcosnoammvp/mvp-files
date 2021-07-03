import { getConfigsMock } from "./utils";

/**
 * @typedef ModelData
 * @property {string} brand - an UUID.
 * @property {object} configs - configs for UI.
 */

/**
 * Manages the data of an application.
 * @class
 */
export class Model {
  /**
   * @typedef ModelData
   * @property {string} brand - an UUID.
   * @property {object} configs - configs for UI.
   */

  /**
   * @param {string} brand - an UUID.
   */
  constructor(brand = "no-brand") {
    this.brand = brand;
  }

  /**
   * @returns {ModelData} data required for UI.
   */
  getModelData() {
    const data = { brand: this.brand, configs: this.configs };
    return data;
  }

  /**
   * @desc Initialize the model fetching data from server.
   */
  async initialize() {
    try {
      const configs = await getConfigsMock(true, 250);
      this.configs = configs;
    } catch (error) {
      this.brand = "no-brand";
    }
  }
}

/**
 * @param {string} brand - an UUID.
 * @desc API for creting model fetching data from server
 */
export async function createAsyncModel(brand) {
  const model = new Model(brand);
  await model.initialize();
  return model;
}
