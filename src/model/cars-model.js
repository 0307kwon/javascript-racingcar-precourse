import { ERROR_MESSAGE, INPUT_LIMIT } from "../common/common-const.js";
import Car from "./object/car.js";

export default class CarsModel {
  constructor() {
    this.cars = [];
  }
  addCars([...carNames]) {
    carNames.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
      console.log(this.cars);
    });
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
