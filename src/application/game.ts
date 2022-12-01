import { inject, singleton } from 'tsyringe';
import { IHtmlService } from "../core/graphics/html/IHtmlService";
import { RandomHexColorGenerator } from '../core/tools/random_color.generator';

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

    private loopCount = 0;

    private readonly cellHeight = this.__CANVAS_HEIGHT__ / this.__ARRAY_CELLS_HIGH__;
    private readonly cellWidth = this.__CANVAS_WIDTH__ / this.__ARRAY_CELLS_WIDE__;

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

        this.mainCanvasCtx.fillStyle = '#FFFFFF';
        this.mainCanvasCtx.fillRect(0, 0, this.__CANVAS_HEIGHT__, this.__CANVAS_HEIGHT__);

        // this.mainCanvasCtx.strokeStyle = '#ff0000';

        for (let x = 0; x < this.__ARRAY_CELLS_HIGH__; x++) {
            this.golArray[x] = [];
            for (let y = 0; y < this.__ARRAY_CELLS_WIDE__; y++) {
                this.golArray[x][y] = false;
                const drawLocationY = x * this.cellWidth;
                const drawLocationX = y * this.cellHeight;
                
                this.mainCanvasCtx.strokeRect(drawLocationX, drawLocationY, this.cellWidth, this.cellHeight);
                // console.log('drawing at ' + ' ' + drawLocationX + ' ' + drawLocationY + ' ' + cellWidth + ' ' + cellHeight);
            }
        }
        
        this.running = true;
    }


    private Loop() {
        this.loopCount++;
        if (this.loopCount === 10000) {
            this.loopCount = 0;
        }
        requestAnimationFrame(() => {

            // this.mainCanvasCtx.fillStyle = '#000000';
            // this.mainCanvasCtx.fillRect(0, 0, this.__CANVAS_HEIGHT__, this.__CANVAS_HEIGHT__);


            if (this.loopCount % 10 === 0) {
                console.log('Loop has been called');

                for (let x = 0; x < this.__ARRAY_CELLS_HIGH__; x++) {
                    for (let y = 0; y < this.__ARRAY_CELLS_WIDE__; y++) {
                        this.golArray[x][y] = false;
                        const drawLocationY = x * this.cellWidth;
                        const drawLocationX = y * this.cellHeight;
                        
                        this.mainCanvasCtx.strokeStyle = RandomHexColorGenerator.GetRandomHexColor();


                        this.mainCanvasCtx.strokeRect(drawLocationX, drawLocationY, this.cellWidth, this.cellHeight);
                    }
                }
            }

            this.Loop();
        });
    }

}