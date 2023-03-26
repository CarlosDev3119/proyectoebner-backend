const { User } = require("../models");

const dataUser = ( userDataValues = {} ) => {

        const { pass: password, name_user: userNAme, last_name: lastName, second_name: secondName,  ...rest} = userDataValues.dataValues;

        //actual day
        let initialDate = new Date( rest.date_of_birth );
        let actualDate = new Date( );

        let yearsOld =  actualDate.getFullYear() - initialDate.getFullYear();

        rest.yearsOld = yearsOld

        rest.userName = `${userNAme} ${lastName} ${secondName}`;

        return rest;

}


const ifEmailExist = async ( email = '' ) => {

    const emailExists = await User.findOne({ where : { email } })
    if( emailExists ) {
        throw new Error(`The mail ${email} already exists in DB`);
    }

}

const registrationNumberExist = async ( registration_number = '' ) => {

    const ifRegistrationNumberExist = await User.findOne({ where : { registration_number } })
    if( ifRegistrationNumberExist ) {
        throw new Error(`The registration number ${registration_number} already exists in DB`);
    }

}

module.exports = {
    dataUser,
    ifEmailExist,
    registrationNumberExist
}