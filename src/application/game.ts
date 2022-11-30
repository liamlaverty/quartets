import { inject, singleton } from 'tsyringe';
import { IHtmlService } from "../core/graphics/html/IHtmlService";

@singleton()
export class Game {

    private running = false;
    // private htmlService: IHtmlService;

    constructor(
        @inject("IHtmlService") private htmlService: IHtmlService
        ){
    }

    Run(): void {
        console.log('run called in game.ts');

        this.Init();
        this.running = true;
        this.Loop();
        this.htmlService.getMainDiv();
    }

    private Init(): void {
        console.log('Init has been called');
    }


    private Loop() {
        console.log('Loop has been called');
    }

}