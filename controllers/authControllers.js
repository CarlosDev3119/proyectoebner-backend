const { response } = require('express');
const { encryptHash } = require('../helpers/encrypt');

const loginController = (req, res = response) => {

    try{
        
        const data = req.body;
        // console.log(data);
        if(!data.mail) return res.status(400).json({ error: 'The mail field is required' });
        if(!data.password) return res.status(400).json({ error: 'The password field is required' });

        const { mail, password } = data;

        const newPass = encryptHash(password);


        res.json({
            msg: 'Hello World! get',
            newPass
        });


    }catch(error){
        res.status(400).json({
            msg: error
        })
    }

}


module.exports = loginController;