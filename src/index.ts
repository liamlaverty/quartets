import 'reflect-metadata';
import { container } from 'tsyringe';
import "./scss/_style.scss";
import { Game } from './application/game'


export class App {
    constructor() {

    }

    start() {
        const game = container.resolve(Game);
        // const game = new Game();
        game.Run();
    }
}

const application = new App();
application.start();