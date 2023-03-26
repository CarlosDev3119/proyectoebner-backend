const { response } = require("express");

const { dataUser } = require("../helpers/users-helpers");
const { encryptHash } = require("../helpers/encrypt");
const { User } = require("../models");



const createUser = async ( req, res = response) => {

    try {
       
        const { pass: newPass, email, name_user, last_name, second_name, date_of_birth, registration_number } = req.body;

        const pass = encryptHash(newPass);

        const newUser = new User({email, name_user, last_name, second_name, date_of_birth, registration_number, pass })
        
        await newUser.save();

        const user = dataUser(newUser);

        res.json({
            user
        });

    }catch(error) {
        res.status(400).json({error})
    }

}

module.exports = {
    createUser
}