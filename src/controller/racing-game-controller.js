import { CAR_GAME } from "../common/common-const.js";
import Controller from "./controller.js";

export default class RacingGameController extends Controller {
  constructor(view, model) {
    super(view, model);
    this.updateInitialView();
  }
  updateInitialView() {
    this._view.setNameInputContainer();
    this._addEventToNameInputButton();
  }
  updateCountInputContainer() {
    this._view.setCountInputContainer();
    this._addEventToCountInputButton();
  }
  updateResultContainer() {
    const gameRecords = this._model.getGameRecords();
    const winners = this._model.getWinners();
    this._view.setResultContainer(gameRecords, winners);
  }

  _addEventToNameInputButton() {
    this.addClickEventByID(
      CAR_GAME.NAME_SUBMIT_BUTTON_ID,
      this._callbackOfNameInputButton
    );
  }
  _callbackOfNameInputButton() {
    const inputValue = this.getInputByID(CAR_GAME.NAME_INPUT_ID);
    const carNames = this._trimComma(inputValue);
    try {
      this._model.addCars(carNames);
    } catch (error) {
      alert(error);
      return;
    }
    this.updateCountInputContainer();
  }

  _addEventToCountInputButton() {
    this.addClickEventByID(
      CAR_GAME.COUNT_SUBMIT_ID,
      this._callbackOfCountInputButton
    );
  }
  _callbackOfCountInputButton() {
    const gameCount = this.getInputByID(CAR_GAME.COUNT_INPUT_ID);
    try {
      this._model.processGameByCount(gameCount);
    } catch (error) {
      alert(error);
      return;
    }
    console.log(this._model.getGameRecords());
    this.updateResultContainer();
  }

  _trimComma(inputValue) {
    let inputs = inputValue.split(",");
    inputs = inputs.map((input) => {
      return input.trim();
    });
    console.log(inputs);
    return inputs;
  }
}
