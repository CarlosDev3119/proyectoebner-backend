
const { Router } = require('express');
const { check } = require('express-validator');

const loginController = require('../controllers/authControllers');

const { validateFields } = require('../middlewares/validateFields');

const router = Router();

router.post('/',loginController);

module.exports = router;