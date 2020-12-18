import { CAR_GAME, TEMPLATE } from "../common/common-const.js";

export default class RacingGameView {
  constructor() {}

  setNameInputContainer() {
    const nameInputContainer = document.getElementById(
      CAR_GAME.NAME_INPUT_CONTAINER_ID
    );
    nameInputContainer.innerHTML = TEMPLATE.NAME_INPUT;
  }
  setCountInputContainer() {
    const countInputContainer = document.getElementById(
      CAR_GAME.COUNT_INPUT_CONTAINER_ID
    );
    countInputContainer.innerHTML = TEMPLATE.COUNT_INPUT;
  }
}
