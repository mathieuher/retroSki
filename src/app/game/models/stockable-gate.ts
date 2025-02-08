export type Pivot = 'left' | 'right' | 'none';

export class StockableGate {
    public x: number;
    public y: number;
    public color: 'red' | 'blue';
    public width: number;
    public gateNumber: number;
    public isFinal: boolean;
    public sectorNumber?: number;
    public pivot: Pivot;
    public vertical: boolean;

    constructor(
        x: number,
        y: number,
        color: 'red' | 'blue',
        width: number,
        gateNumber: number,
        isFinal: boolean,
        pivot: Pivot = 'none',
        vertical = false,
        sectorNumber?: number
    ) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.gateNumber = gateNumber;
        this.isFinal = isFinal;
        this.pivot = pivot;
        this.vertical = vertical;
        this.sectorNumber = sectorNumber;
    }
}
