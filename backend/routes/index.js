const express = require('express');


const statisticRouter = require('./statisticRouter');

const router = express.Router();

router.use(
    '/statistic',
    statisticRouter,
);

module.exports = router;
