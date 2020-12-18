import { CAR_GAME } from "../common/common-const.js";
import Controller from "./controller.js";

export default class RacingGameController extends Controller {
  constructor(view, model) {
    super(view, model);
    this._view.setInitialView();
    this._addEventToNameInputButton();
  }

  _addEventToNameInputButton() {
    this.addClickEventByID(
      CAR_GAME.NAME_SUBMIT_BUTTON_ID,
      this._callbackOfNameInputButton
    );
  }
  _callbackOfNameInputButton() {
    const inputValue = this.getInputByID(CAR_GAME.NAME_INPUT_ID);
    this._model.addCar(inputValue);
  }
}
