const { response } = require("express");
const { User } = require("../models");


const createUser = async ( req, res = response) => {

    try {
        const data = {
            name_user: 'Carlos',
            last_name: 'Ortega',
            second_name: 'Cordova',
            pass: '123213',
            email: 'terr1y@gmail.com',
            registration_number: '202011339',
        }
        const {name_user,
            last_name,
            second_name,
            pass,
            email,
            registration_number} = data;

        const dataUser = new User({
            name_user,
            last_name,
            second_name,
            pass,
            email,
            registration_number
        });

        await dataUser.save()

        res.json({
            msg: 'crear usuario'
        });

    }catch(error) {
        res.status(400).json({error})
    }

}

module.exports = {
    createUser
}