const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.paths = {
            auth: '/api/auth'
        }

        this.middlewares()

        this.routes()
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.paths.auth, require('../routes/auth') );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is runinng on port ${this.port}`);
        })
    }

}

module.exports = Server;


