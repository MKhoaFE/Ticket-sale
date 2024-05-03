import express from 'express';
import { getAllRides } from '../controllers/Ride.controller.js';

const router = express.Router();

// Route to handle GET request for all rides
router.get('/', getAllRides);

export default router;