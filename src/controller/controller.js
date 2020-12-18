export default class Controller {
  constructor(view, model) {
    this._view = view;
    this._model = model;
  }
  getInputByID(id) {
    const input = document.getElementById(id);
    return input.value.trim();
  }
  addClickEventByID(id, callback) {
    const button = document.getElementById(id);
    button.addEventListener("click", callback.bind(this));
  }
  disableButtonByID(id) {
    const button = document.getElementById(id);
    button.disabled = true;
  }
}
