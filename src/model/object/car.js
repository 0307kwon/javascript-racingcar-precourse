import { GAME_LIMIT } from "../../common/common-const.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.currentPosition = 0;
  }
  race() {
    const random = Math.floor(Math.random() * 10);
    console.log(random);
  }
}
