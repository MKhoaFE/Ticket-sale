import { getRidesById } from "../controllers/Ride.controller.js";
import express from "express";
import { getAllRides } from "../controllers/Ride.controller.js";
import { createRide } from "../controllers/Ride.controller.js";
import { updateRide } from "../controllers/Ride.controller.js";
import { deleteRide } from "../controllers/Ride.controller.js";
import { getRide } from "../controllers/Ride.controller.js";
import { updateSeatEmpty } from "../controllers/Ride.controller.js";
import { getRides } from "../controllers/Ride.controller.js";
import { searchRides } from "../controllers/Ride.controller.js";
const router = express.Router();

// Route to handle GET request for all rides
router.post("/byId", getRidesById);
router.post("/byId/seat", updateSeatEmpty);
router.get("/", getAllRides);
router.post("/", createRide);
router.put("/:id", updateRide);
router.delete("/:id", deleteRide);
router.get("/find/:id", getRide);

router.get("/search", searchRides);
export default router;
