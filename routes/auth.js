
const { Router } = require('express');

const loginController = require('../controllers/authControllers');

const router = Router();

router.get('/', loginController);

module.exports = router;