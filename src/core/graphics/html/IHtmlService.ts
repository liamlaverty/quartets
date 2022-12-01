export interface IHtmlService {
    getMainDiv(): HTMLDivElement;
    createCanvas(id: string, attatchTo: string, width: number, height: number, classList: string[]): HTMLCanvasElement;
}
