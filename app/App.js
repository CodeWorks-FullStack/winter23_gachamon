import { GachamonsController } from "./Controllers/GachamonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  gachamonsController = new GachamonsController()
}

window["app"] = new App();
