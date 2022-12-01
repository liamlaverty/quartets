import { inject, singleton } from 'tsyringe';
import { IHtmlService } from "../core/graphics/html/IHtmlService";

@singleton()
export class Game {

    private running = false;
    private golArray: boolean[][];
    private mainCanvas: HTMLCanvasElement;
    private mainCanvasCtx: CanvasRenderingContext2D;

    private __CANVAS_WIDTH__ = 750;
    private __CANVAS_HEIGHT__ = 750;

    private __ARRAY_CELLS_WIDE__ = 35;
    private __ARRAY_CELLS_HIGH__ = 35;

    constructor(@inject("IHtmlService") private htmlService: IHtmlService) {
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
        
        this.mainCanvas = this.htmlService.createCanvas('game-of-life', this.htmlService.getMainDiv().id, this.__CANVAS_WIDTH__, this.__CANVAS_HEIGHT__, ['game-of-life-canvas']);
        this.mainCanvasCtx = this.mainCanvas.getContext('2d');

        this.golArray = [];
        const cellHeight = this.__CANVAS_HEIGHT__ / this.__ARRAY_CELLS_HIGH__;
        const cellWidth = this.__CANVAS_WIDTH__ / this.__ARRAY_CELLS_WIDE__;

        this.mainCanvasCtx.fillStyle = '#FFFFFF';
        this.mainCanvasCtx.fillRect(0, 0, this.__CANVAS_HEIGHT__, this.__CANVAS_HEIGHT__);

        // this.mainCanvasCtx.strokeStyle = '#ff0000';

        for (let x = 0; x < this.__ARRAY_CELLS_HIGH__; x++) {
            this.golArray[x] = [];
            for (let y = 0; y < this.__ARRAY_CELLS_WIDE__; y++) {
                this.golArray[x][y] = false;
                const drawLocationY = x * cellWidth;
                const drawLocationX = y * cellHeight;
                
                this.mainCanvasCtx.strokeRect(drawLocationX, drawLocationY, cellWidth, cellHeight);
                console.log('drawing at ' + ' ' + drawLocationX + ' ' + drawLocationY + ' ' + cellWidth + ' ' + cellHeight);
            }
        }
        
        this.running = true;
    }


    private Loop() {
        console.log('Loop has been called');

        requestAnimationFrame(() => {

            // this.mainCanvasCtx.fillStyle = '#000000';
            // this.mainCanvasCtx.fillRect(0, 0, this.__CANVAS_HEIGHT__, this.__CANVAS_HEIGHT__);




            for (let x = 0; x < this.__ARRAY_CELLS_HIGH__; x++) {
                for (let y = 0; y < this.__ARRAY_CELLS_WIDE__; y++) {
                    // if (this.golArray[x][y] === true){
                    //   a  
                    // } 


                    //this.mainCanvasCtx.fillRect(0, 0, this.__CANVAS_HEIGHT__, this.__CANVAS_HEIGHT__);
                }
            }

            // if (this.running){

            // }

            // this.Loop();
        });
    }

}