const express = require('express');
const router = express.Router();
const authUser = require("../controllers/userController")

// /users/userlogin
router.post('/userlogin', authUser)


module.exports = router;
