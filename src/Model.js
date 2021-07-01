import { getConfigsMock } from "./utils";

export class Model {
  constructor(brand = "no-brand") {
    this.brand = brand;
  }

  getConfigs() {
    const data = { brand: this.brand, configs: this.configs };
    return data;
  }

  /*
  This function should fetch all the customer data
  */
  async initialize(httpResponse = {}) {
    this.configs = await getConfigsMock(true, 250, httpResponse);
  }
}

export async function createAsyncModel(brand = "no-brand") {
  try {
    const model = new Model(brand);
    await model.initialize();
    return model;
  } catch (error) {
    // Some logic
    return new Model("no-brand");
  }
}
