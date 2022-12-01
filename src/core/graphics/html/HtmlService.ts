import { IHtmlService } from "./IHtmlService";


export class HtmlService implements IHtmlService {

    private mainDiv: HTMLDivElement;


    constructor(){
        console.log('html service constructor called');

        this.createMainDiv();
    }


    /* 
     * returns the MainDiv object
    */
    getMainDiv(): HTMLDivElement {
        return this.mainDiv;
    }

    /* 
     * Creates a main_div HTML element and returns is 
    */
    private createMainDiv(id = 'main_div'): string {
        if (this.mainDiv !== undefined){
            // the entity already exists
            console.warn('createMainDiv was called, even though the entity already exists');
            return this.mainDiv.id;
        }
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = id;
        document.body.appendChild(this.mainDiv);
        return this.mainDiv.id;
    }

    /* 
     * Creates and returns a HTMLCanvasElement
    */
    public createCanvas(id: string, attatchTo: string, width: number, height: number, classList: string[]): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        canvas.id = id;
        canvas.width = width;
        canvas.height = height;
        for (let i = 0; i < classList.length; i++) {
            canvas.classList.add(classList[i]);
        }
        document.getElementById(attatchTo).appendChild(canvas);
        return canvas;
    }
}