const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/userController');
const { ifEmailExist, registrationNumberExist } = require('../helpers/users-helpers');
const { validateFields } = require('../middlewares/validateFields');


const router = Router();

router.post('/', [
    check('name_user', 'The user name is required').not().isEmpty(),
    check('last_name', 'The last name is required').not().isEmpty(),
    check('second_name', 'The second name is required').not().isEmpty(),
    check('date_of_birth', 'The date_of_birth is required').not().isEmpty(),
    check('pass', 'The pass is required').not().isEmpty(),
    check('email', 'The email is required').not().isEmpty(),
    check('email', 'The email is invalid').isEmail(),
    check('email', 'The email already exists in DB').custom( ifEmailExist ),
    check('registration_number', 'The registration number is required').not().isEmpty(),
    check('registration_number').custom( registrationNumberExist ),
    validateFields
], createUser)

module.exports = router;