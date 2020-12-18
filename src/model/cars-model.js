import Car from "./object/car.js";

export default class CarsModel {
  constructor() {
    this.cars = [];
  }
  addCar(carName) {
    const car = new Car(carName);
    this.cars.push(car);
    console.log(this.cars);
  }
}
