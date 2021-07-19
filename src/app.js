import { createAsyncModel } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

export async function App(brand = "no-brand") {
  const model = await createAsyncModel(brand);
  if (model.brand !== "no-brand") {
    const view = new View(model.getModelData());
    const app = new Controller(model, view);
  }
}
