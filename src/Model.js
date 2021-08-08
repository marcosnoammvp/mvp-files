import { getConfigsMock } from "./utils";

export function Model (brand = "no-brand") {
  this.brand = brand;
}
Model.prototype.getModelData = function () {
    const data = { brand: this.brand, configs: this.configs };
    return data;
  }
Model.prototype.initialize = async function () {
    try {
      const configs = await getConfigsMock(true, 250);
      this.configs = configs;
    } catch (error) {
      this.brand = "no-brand";
    }
  }
  
export async function createAsyncModel(brand) {
  const model = new Model(brand);
  await model.initialize();
  return model;
}
