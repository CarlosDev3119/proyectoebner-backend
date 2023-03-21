const bcryptjs = require('bcryptjs');

const encryptHash = ( password = '') => {

    const salt = bcryptjs.genSaltSync(10);
    password = bcryptjs.hashSync(`${password}`, salt);
    return password;
}

module.exports = {
    encryptHash
}