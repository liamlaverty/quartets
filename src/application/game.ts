export class Game {


    private running: boolean = false;


    constructor() {

    }

    Run() {
        console.log('run called in game.ts');

        this.Init();
        this.running = true;
        this.Loop();
    }

    private Init(): string {
        return 'Init has been called';
    }


    private Loop(): string {
        return 'Loop has been called';
    }

}