import type { StockableDecoration } from './stockable-decoration';
import type { StockableGate } from './stockable-gate';
import { StockableTrack } from './stockable-track';
import type { TrackStyles } from './track-styles.enum';

export class Track {
    public id?: string;
    public name: string;
    public builderVersion: number;
    public style: TrackStyles;
    public date: Date;
    public gates: StockableGate[];
    public decorations: StockableDecoration[];
    public slope: number;

    constructor(
        id?: string,
        builderVersion?: number,
        name?: string,
        style?: TrackStyles,
        date?: Date,
        gates?: StockableGate[],
        decorations?: StockableDecoration[],
        slope?: number
    ) {
        this.id = id;
        this.builderVersion = builderVersion!;
        this.name = name!;
        this.style = style!;
        this.date = date!;
        this.gates = gates!;
        this.decorations = decorations!;
        this.slope = slope!;
    }

    public get fullName(): string {
        return `${Track.formatTrackName(this.name)} - ${this.style}`;
    }

    public toStockable(): StockableTrack {
        return new StockableTrack(
            this.id,
            this.builderVersion,
            this.name,
            this.style,
            this.date,
            this.gates,
            this.decorations,
            this.slope
        );
    }

    private static formatTrackName(name: string): string {
        return `${name[0].toLocaleUpperCase()}${name.substring(1).toLocaleLowerCase()}`;
    }
}
