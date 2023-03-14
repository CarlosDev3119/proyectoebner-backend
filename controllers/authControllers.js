const { response } = require('express');

const loginController = (req, res = response) => {

    try{
        
        const {pass, ...rest} = req.body;

        res.json({
            msg: 'Hello World! get',
            usuario: rest,
        });


    }catch(error){
        res.status(400).json({
            msg: error
        })
    }

}


module.exports = loginController;