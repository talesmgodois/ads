import express from 'express';
import config from './config';
import path from 'path';
import dotenv from 'dotenv';

const { port, hostname } = config;

export class Server {
    constructor() {
        this.app = express();
    }

    startup() {
        this.setupRoutes();
        this.app.listen(port, () =>
            console.log(`Listening on ${hostname}:${port}`)
        );
    }

    setupRoutes() {
        this.app.get('/teste', (req, res) => {
            res.send('Funcionando :)');
        });

        this.app.use('/', express.static(path.join(__dirname, 'build')));
    }
}
