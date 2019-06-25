import express from 'express';
import config from './config';

const { port } = config;

export class Server {
    constructor() {
        this.app = express();
    }

    startup() {
        this.setupRoutes();
        this.app.listen(port, () => console.log(`Listening on ${port}`));
    }

    setupRoutes() {
        this.app.get('/teste', (req, res) => {
            res.send('Funcionando :)');
        });
    }
}
