import { ERROR_MESSAGE, INPUT_LIMIT } from "../common/common-const.js";
import Car from "./object/car.js";

export default class CarsModel {
  constructor() {
    this._cars = [];
    this._gameRecords = [];
  }
  addCars([...carNames]) {
    this._verifyOverlapName(carNames);
    carNames.forEach((carName) => {
      this._verifyValidCarName(carName);
    });
    carNames.forEach((carName) => {
      const car = new Car(carName);
      this._cars.push(car);
      console.log(this._cars);
    });
  }
  getGameRecords() {
    return this._gameRecords;
  }
  getWinners() {
    const maxPosition = this._getMaxPosition();
    const winners = [];
    for (let car of this._cars) {
      if (car.currentPosition === maxPosition) {
        winners.push(car.name);
      }
    }
    return winners;
  }
  processGameByCount(gameCount) {
    this._verifyGameCount(gameCount);
    for (let i = 0; i < gameCount; i++) {
      this._raceCars();
      this._registerCurrentRecords();
    }
  }

  _getMaxPosition() {
    let maxPosition = 0;
    for (let car of this._cars) {
      maxPosition = Math.max(maxPosition, car.currentPosition);
    }
    return maxPosition;
  }
  _registerCurrentRecords() {
    const currentRecords = [];
    this._cars.forEach((car) => {
      const record = {
        name: car.name,
        currentPosition: car.currentPosition,
      };
      currentRecords.push(record);
    });
    this._gameRecords.push(currentRecords);
  }
  _raceCars() {
    this._cars.forEach((car) => {
      car.race();
    });
  }
  _verifyOverlapName([...carNames]) {
    const setToVerify = new Set(carNames);
    if (setToVerify.size < carNames.length) {
      throw ERROR_MESSAGE.OVERLAP_NAME_EXIST;
    }
  }
  _verifyValidCarName(carName) {
    if (carName.length > INPUT_LIMIT.MAX_NAME_LENGTH) {
      throw ERROR_MESSAGE.EXCEED_MAX_NAME_LENGTH;
    }
    if (carName.length < INPUT_LIMIT.MIN_NAME_LENGTH) {
      throw ERROR_MESSAGE.UNDER_MIN_NAME_LENGTH;
    }
  }
  _verifyGameCount(gameCount) {
    if (String(gameCount) === "") {
      throw ERROR_MESSAGE.NOT_TYPE_OF_NUMBER;
    }
    if (gameCount < INPUT_LIMIT.MIN_GAME_COUNT) {
      throw ERROR_MESSAGE.UNDER_MIN_GAME_COUNT;
    }
  }
}
