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
  setResultContainer(gameRecords, winners) {
    const resultContainer = document.getElementById(CAR_GAME.RESULT_CONTAINER);
    const gameResultContents = this._makeGameResult(gameRecords, winners);
    resultContainer.innerHTML = `
    ${TEMPLATE.RESULT}
    ${gameResultContents}
    `;
  }

  _makeGameResult(gameRecords, winners) {
    let resultHTML = "";
    gameRecords.forEach((cars) => {
      resultHTML += this._makeRecordToHTML(cars);
      resultHTML += `<p></p>`;
    });
    resultHTML += `
    <span>최종 우승자: ${winners.join(",")}</span>
    `;
    return resultHTML;
  }
  _makeRecordToHTML(cars) {
    let recordHTML = "";
    cars.forEach((car) => {
      recordHTML += `
      <span>${car.name}: ${"-".repeat(car.currentPosition)}</span><br>
      `;
    });
    return recordHTML;
  }
}
