import express from "express";
import { getAllRides, getRidesById } from "../controllers/Ride.controller.js";

const router = express.Router();

// Route to handle GET request for all rides
router.get("/", getAllRides);
router.post("/byId", getRidesById);

export default router;
