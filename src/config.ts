import { Keys } from "excalibur";

export class Config {
    // DISPLAY
    static DISPLAY_WIDTH = 800;
    static DISPLAY_HEIGHT = 600;
    static CAMERA_ZOOM = 0.6;
    static DISPLAY_MIN_MARGIN = 25;
    static DISPLAY_MAX_RIGHT_POSITION = (Config.DISPLAY_WIDTH / 2) - this.DISPLAY_MIN_MARGIN;
    static DISPLAY_MAX_LEFT_POSITION = -Config.DISPLAY_MAX_RIGHT_POSITION;
    static FRONT_GHOST_DISTANCE = - this.DISPLAY_HEIGHT / 2;

    // FORMAT
    static FORMAT_TIMING = 'mm:ss:SS';

    // TRACKS
    static TRACK_STYLES: 'SL' | 'GS' | 'SG' | 'DH';
    static DEFAULT_TRACKS = ['soelden', 'davos', 'wengen', 'adelboden', 'zermatt'];

    // CONTROLS
    static CONTROL_CARVE_RIGHT = Keys.ArrowRight;
    static CONTROL_CARVE_LEFT = Keys.ArrowLeft;
    static CONTROL_BRAKE = Keys.Space;
    static DEBUG_KEY = Keys.D;
    static RESTART_KEY = Keys.R;
    static EXIT_KEY = Keys.Escape;
    static START_KEY = Keys.ArrowUp;
    static SOUND_KEY = Keys.S;

    // SPEED
    static MAX_SPEED = 145;
    static VELOCITY_MULTIPLIER_RATE = 7;
    static LATERAL_VELOCITY_ROTATION_RATE = 1.15;
    static WIND_FRICTION_RATE = 0.002;

    // SLOPE
    static INITIAL_SLOPE = 0.1;

    // ACCELERATION
    static ACCELERATION_RATE = 3;

    // BRAKING
    static BRAKING_RATE = 1;

    // GATES
    static GATE_MAX_LEFT_POSITION = Config.DISPLAY_MAX_LEFT_POSITION;
    static GATE_MAX_RIGHT_POSITION = Config.DISPLAY_MAX_RIGHT_POSITION;
    static FINAL_GATE_WIDTH = Config.DISPLAY_WIDTH - (2 * Config.DISPLAY_MIN_MARGIN);
    static FINAL_GATE_POSITION = Config.DISPLAY_MAX_LEFT_POSITION;
    static GATE_OTHER_SIDE_PROBABILITY = 0.95;
    // SPECIFIC TRACK STYLE CONFIG
    static SL_GATES_CONFIG = {
        maxWidth: 200,
        minWidth: 160,
        maxHorizontalDistance: 320,
        minVerticalDistance: 170,
        maxVerticalDistance: 270,
        minNumber: 41,
        maxNumber: 56
    }
    static GS_GATES_CONFIG = {
        maxWidth: 200,
        minWidth: 160,
        maxHorizontalDistance: 320,
        minVerticalDistance: 200,
        maxVerticalDistance: 350,
        minNumber: 41,
        maxNumber: 56
    }
    static SG_GATES_CONFIG = {
        maxWidth: 200,
        minWidth: 160,
        maxHorizontalDistance: 320,
        minVerticalDistance: 320,
        maxVerticalDistance: 500,
        minNumber: 41,
        maxNumber: 56
    }
    static DH_GATES_CONFIG = {
        maxWidth: 200,
        minWidth: 160,
        maxHorizontalDistance: 320,
        minVerticalDistance: 370,
        maxVerticalDistance: 550,
        minNumber: 41,
        maxNumber: 56
    }

    // POLES
    static POLE_WIDTH = 20;
    static POLE_HEIGHT = 40;
    static POLE_DETECTOR_MARGIN = 22;
    static FINAL_POLE_WIDTH = 30;
    static FINAL_POLE_HEIGHT = 80;

    // ROTATION
    static MAX_RIGHT_ROTATION_ANGLE = Math.PI / 2;
    static MAX_LEFT_ROTATION_ANGLE = 3 * Math.PI / 2;
    static ROTATION_RECENTER_RATE = 0.2;

    // CARVING
    static CARVING_ROTATION_RATE = 3.1;
    static CARVING_ROTATION_OPTIMAL_SPEED = 60;
    static CARVING_ADHERENCE_RATE = 0.9;
    static CARVING_BRAKING_RATE = 0.01;

    // SLIDING
    static SLIDING_ROTATION_RATE = 4.1;
    static SLIDING_ROTATION_OPTIMAL_SPEED = 45;
    static SLIDING_ADHERENCE_RATE = 0.6;
    static SLIDING_BRAKING_RATE = 0.9;
}