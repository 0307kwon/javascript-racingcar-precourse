import RacingGameController from "./controller/racing-game-controller.js";
import CarsModel from "./model/cars-model.js";
import RacingGameView from "./view/racing-game-view.js";

const model = new CarsModel();

new RacingGameController(new RacingGameView(), model);
