export function Controller(model, view) {
  this.model = model;
  this.view = view;

  this.view.bindRemoveToper();
}
