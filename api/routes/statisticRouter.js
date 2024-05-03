import express from "express";

import {
    getStatistic,
    updateStatistic,
} from "../controllers/statisticController.js";
//const authController = require('../controllers/authController');
import config from "../config/config.js";


const router = express.Router();

//router.use(authController.restrictTo(config.role.ADMIN));

router.get("/", getStatistic);
router.get("/update", updateStatistic);



export default router;
