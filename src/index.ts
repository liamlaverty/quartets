import 'reflect-metadata';
import { container } from 'tsyringe';
import "./scss/_style.scss";
import { Game } from './application/game'
import { HtmlService } from './core/graphics/html/HtmlService';


export class App {
    constructor() {
        container.register("IHtmlService", {
            useClass: HtmlService
        });
    } 

    start(){
        const game = container.resolve(Game);
        game.Run();
    }
}

const application = new App();
application.start();