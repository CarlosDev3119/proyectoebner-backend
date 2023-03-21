const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/userController');


const router = Router();

router.post('/', createUser)

module.exports = router;