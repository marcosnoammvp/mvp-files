import { createAsyncModel } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

export async function App(brand = "no-brand") {
  try {
    const model = await createAsyncModel(brand);
    const view = new View(model.getModelData());
    const app = new Controller(model, view);
  } catch (error) {
    if(error instanceof ModelError){

    }
    if(error instanceof ViewError){

    }
    if(error instanceof ControllerError){
      app.kill();
    }
  }
}
