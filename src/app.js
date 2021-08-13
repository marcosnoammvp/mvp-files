import { createAsyncModel } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

export async function App(brand = "no-brand") {
  try {
    var model = await createAsyncModel(brand);
    var view = new View(model.getModelData());
    var app = new Controller(model, view);
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
