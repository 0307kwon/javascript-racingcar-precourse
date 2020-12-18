export const CAR_GAME = {
  NAME_INPUT_CONTAINER_ID: "car-name-input-container",
  NAME_INPUT_ID: "car-names-input",
  NAME_SUBMIT_BUTTON_ID: "car-names-submit",

  COUNT_INPUT_CONTAINER_ID: "try-number-input-container",
  COUNT_INPUT_ID: "racing-count-input",
  COUNT_SUBMIT_ID: "racing-count-submit",
};

export const TEMPLATE = {
  NAME_INPUT: `
  <input id="${CAR_GAME.NAME_INPUT_ID}" type="text" />
  <button id="${CAR_GAME.NAME_SUBMIT_BUTTON_ID}">확인</button>
  `,
  TRY_INPUT: `
  <h4>시도할 횟수를 입력해주세요.</h4>
  <input id="${CAR_GAME.COUNT_INPUT_ID}" type="number" />
  <button id="${CAR_GAME.COUNT_SUBMIT_ID}">확인</button>
  `,
  RESULT: `
  <h4>📄 실행 결과</h4>
  `,
};
