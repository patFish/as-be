import { FleetController } from "./Fleet/Fleet";
import { HealthController } from "./Health/Health";

const fleetController = new FleetController();
const healthController = new HealthController();

export { fleetController, healthController };
