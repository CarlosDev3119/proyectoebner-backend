const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');


class Server {

    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.paths = {
            auth: '/api/auth',
            user: '/api/users',

        }

        this.middlewares()

        this.routes()

        this.connectDB()
    }

    async connectDB(){
        await dbConnection()
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.paths.auth, require('../routes/auth') );
        this.app.use( this.paths.user, require('../routes/users') );

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is runinng on port ${this.port}`);
        })
    }

}

module.exports = Server;


