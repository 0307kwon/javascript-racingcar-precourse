export const CAR_GAME = {
  NAME_INPUT_CONTAINER_ID: "car-name-input-container",
  NAME_INPUT_ID: "car-names-input",
  NAME_SUBMIT_BUTTON_ID: "car-names-submit",

  COUNT_INPUT_CONTAINER_ID: "try-number-input-container",
  COUNT_INPUT_ID: "racing-count-input",
  COUNT_SUBMIT_ID: "racing-count-submit",
};

export const INPUT_LIMIT = {
  MAX_NAME_LENGTH: 5,
  MIN_NAME_LENGTH: 1,
  MIN_GAME_COUNT: 1,
};

export const GAME_LIMIT = {
  MIN_NUMBER_TO_GO_FORWARD: 4,
};

export const ERROR_MESSAGE = {
  EXCEED_MAX_NAME_LENGTH: `자동차의 이름은 최대 ${INPUT_LIMIT.MAX_NAME_LENGTH}자여야 합니다.`,
  UNDER_MIN_NAME_LENGTH: `자동차의 이름은 최소 ${INPUT_LIMIT.MIN_NAME_LENGTH}자여야 합니다.`,
  OVERLAP_NAME_EXIST: `자동차 간의 같은 이름을 허용하지 않습니다.`,
  UNDER_MIN_GAME_COUNT: `시도할 횟수는 ${INPUT_LIMIT.MIN_GAME_COUNT}이상의 숫자만 가능합니다.`,
  NOT_TYPE_OF_NUMBER: `숫자만 입력 가능합니다.`,
};

export const TEMPLATE = {
  NAME_INPUT: `
  <input id="${CAR_GAME.NAME_INPUT_ID}" type="text" />
  <button id="${CAR_GAME.NAME_SUBMIT_BUTTON_ID}">확인</button>
  `,
  COUNT_INPUT: `
  <h4>시도할 횟수를 입력해주세요.</h4>
  <input id="${CAR_GAME.COUNT_INPUT_ID}" type="number" />
  <button id="${CAR_GAME.COUNT_SUBMIT_ID}">확인</button>
  `,
  RESULT: `
  <h4>📄 실행 결과</h4>
  `,
};
