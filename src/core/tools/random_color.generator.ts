export class RandomHexColorGenerator {
    public static GetRandomHexColor(): string {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
}



