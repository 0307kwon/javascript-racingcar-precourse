import { CAR_GAME, TEMPLATE } from "../common/common-const.js";

export default class RacingGameView {
  constructor() {}

  setInitialView() {
    this.setNameInputContainer();
  }
  setNameInputContainer() {
    const nameInputContainer = document.getElementById(
      CAR_GAME.NAME_INPUT_CONTAINER_ID
    );
    nameInputContainer.innerHTML = TEMPLATE.NAME_INPUT;
  }
}
