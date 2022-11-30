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

    private Init() {
        console.log('Init has been called');
    }


    private Loop() {
        console.log('Loop has been called');
    }

}