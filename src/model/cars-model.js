import { ERROR_MESSAGE, INPUT_LIMIT } from "../common/common-const.js";
import Car from "./object/car.js";

export default class CarsModel {
  constructor() {
    this.cars = [];
  }
  addCars([...carNames]) {
    this._verifyOverlapName(carNames);
    carNames.forEach((carName) => {
      this._verifyValidCarName(carName);
    });
    carNames.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
      console.log(this.cars);
    });
  }
  processGameByCount(gameCount) {
    for (let i = 0; i < gameCount; i++) {
      this._raceCars();
    }
  }

  _raceCars() {
    this.cars.forEach((car) => {
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
    return;
  }
}
