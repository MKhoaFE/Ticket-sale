import express from 'express';

import { getStatistic, updateStatistic }  from '../controllers/statisticController';
//const authController = require('../controllers/authController');
const config = require('../config/config');

const router = express.Router();

//router.use(authController.restrictTo(config.role.ADMIN));

router.get('/', getStatistic);
router.get('/update', updateStatistic);

export default router;
