import { Color, DisplayMode, Engine, Keys, Loader } from "excalibur";
import { Resources } from "./resources";
import { Config } from "./config";
import { TrackManager } from "./utils/track-manager";
import { EventSetup } from "./scenes/event-setup";
import { EventManager } from "./scenes/event-manager";

export class Game extends Engine {

    private resourcesToLoad = [
        Resources.Skier,
        Resources.SkierCarving,
        Resources.SkierSliding,
        Resources.SkierBraking,
        Resources.SkierJumping,
        Resources.PoleRed,
        Resources.PoleBlue,
        Resources.PoleTouchedRed,
        Resources.PoleTouchedBlue,
        Resources.PolePassedRed,
        Resources.PolePassedBlue,
        Resources.FinalPole
    ];

    public trackManager = new TrackManager();

    constructor() {
        super({ displayMode: DisplayMode.FitContainer, backgroundColor: Color.White, fixedUpdateFps: 60, maxFps: 60, canvasElementId: 'game' });
    }

    initialize() {
        this.addScene('eventSetup', new EventSetup(this));
        this.addScene('eventManager', new EventManager(this));

        const loader = new Loader(this.resourcesToLoad);
        this.start(loader);

        this.goToScene('eventSetup');
    }

    onPreUpdate(_engine: Engine, _delta: number): void {
        if (_engine.input.keyboard.wasPressed(Config.DEBUG_KEY)) {
            _engine.showDebug(!_engine.isDebug);
        }

        if (_engine.input.keyboard.wasPressed(Config.EXIT_KEY)) {
            this.restartGame();
        }
    }

    private restartGame(): void {
        this.removeScene('race');
        this.goToScene('eventSetup');
    }
}

export const game = new Game();
game.initialize();