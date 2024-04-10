const express = require('express');
const {
    getCreateUserPage,
    getAllUsers,
    getUser,
} = require('../controllers/accountController');

const router = express.Router();

router.get('/user/createUser', getCreateUserPage);
router.get('/user/', getAllUsers);
router.get('/user/:userId', getUser);

module.exports = router;
