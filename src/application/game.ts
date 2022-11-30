import { autoInjectable, singleton } from 'tsyringe';
import { HtmlService } from '../core/graphics/html/HtmlService';

@singleton()
export class Game {

    private running = false;
    private htmlService: HtmlService;

    constructor(htmlService: HtmlService) {
        this.htmlService = htmlService;
    }

    Run(): void {
        console.log('run called in game.ts');

        this.Init();
        this.running = true;
        this.Loop();
    }

    private Init(): void {
        console.log('Init has been called');
    }


    private Loop() {
        console.log('Loop has been called');
    }

}