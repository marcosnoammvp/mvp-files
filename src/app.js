import { createAsyncModel } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

export function createAppRoot() {
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  const htmlRef = document.querySelector("html");
  htmlRef.insertBefore(root, htmlRef.firstChild);
}

export async function initTopper(brand) {
  createAppRoot();
  const model = await createAsyncModel(brand);
  const view = new View(model.getConfigs());
  const app = new Controller(model, view);
}
