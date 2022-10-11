import express, { Express } from "express";

import { MediaMesh } from './setupServer';

class Application {
    public initialize(): void{
        const app: Express = express();
        const server: MediaMesh = new MediaMesh(app); 
        server.start();
    }
}

const application: Application = new Application();
application.initialize();