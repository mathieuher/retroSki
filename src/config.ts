import { Keys } from "excalibur";

export class Config {
    // DISPLAY
    static DISPLAY_WIDTH = 800;
    static DISPLAY_HEIGHT = 600;
    static HORIZONTAL_CAMERA_POINT = 0;
    static CAMERA_ZOOM = 0.7;
    static DISPLAY_MIN_MARGIN = 50;
    static DISPLAY_MAX_RIGHT_POSITION = (Config.DISPLAY_WIDTH / 2) - Config.DISPLAY_MIN_MARGIN;
    static DISPLAY_MAX_LEFT_POSITION = -Config.DISPLAY_MAX_RIGHT_POSITION;

    // FORMAT
    static FORMAT_TIMING = 'mm:ss:SS';

    // CONTROLS
    static CONTROL_CARVE_RIGHT = Keys.ArrowRight;
    static CONTROL_CARVE_LEFT = Keys.ArrowLeft;
    static CONTROL_BRAKE = Keys.Space;
    static DEBUG_KEY = Keys.D;
    static RESTART_KEY = Keys.R;

    // SPEED
    static MAX_SPEED = 145;
    static SPEED_VISUAL_RATE = 4;
    static SLOW_SPEED_LIMIT = 60;

    // SLOPE
    static STANDARD_SLOPE = 10;

    // ACCELERATION
    static ACCELERATION_RATE_ON_STANDARD_SLOPE = 0.05;
    static ACCELERATION_RATE_WHEN_SLOW_SPEEDING = 5;

    // BRAKING
    static BRAKING_ACCELERATION_RATE = -0.8;

    // TRACKS
    static DEFAULT_TRACK_NAME = 'davos'; // davos, adelboden

    // GATES
    static GATE_MAX_WIDTH = 200;
    static GATE_MIN_WIDTH = 160;
    static GATE_MIN_VERTICAL_DISTANCE = 180;
    static GATE_MAX_VERTICAL_DISTANCE = 450;
    static GATE_MIN_HORIZONTAL_DISTANCE = 300;
    static GATE_MAX_HORIZONTAL_DISTANCE = 600;
    static GATE_MAX_LEFT_POSITION = Config.DISPLAY_MAX_LEFT_POSITION;
    static GATE_MAX_RIGHT_POSITION = Config.DISPLAY_MAX_RIGHT_POSITION - Config.GATE_MAX_WIDTH;
    static GATE_MAX_NUMBER = 45;
    static GATE_MIN_NUMBER = 30;
    static FINAL_GATE_WIDTH = 600;
    static FINAL_GATE_POSITION = -(Config.FINAL_GATE_WIDTH / 2);

    // POLES
    static POLE_WIDTH = 20;
    static POLE_HEIGHT = 40;
    static POLE_DETECTOR_MARGIN = 50;
    static FINAL_POLE_WIDTH = 30;
    static FINAL_POLE_HEIGHT = 80;

    // CARVING
    static CARVING_ACCELERATION_RATE = 0.01;
    static CARVING_LATERAL_VELOCITY = 15;
    static CARVING_VISUAL_VELOCITY_ANGLE_MULTIPLIER = 2;
    static CARVING_INVERTER_RATE = 1.5;
    static CARVING_INVERTER_VELOCITY = Config.CARVING_INVERTER_RATE * Config.CARVING_LATERAL_VELOCITY;
    static CARVING_MAX_LATERAL_VELOCITY = 1000;

    // SLIDING
    static SLIDING_ACCELERATION_RATE = -0.8;
    static SLIDING_LATERAL_VELOCITY = 25;
    static SLIDING_INVERTER_RATE = 1.5;
    static SLIDING_INVERTER_VELOCITY = Config.SLIDING_INVERTER_RATE * Config.SLIDING_LATERAL_VELOCITY;
    static SLIDING_MAX_VISUAL_ANGLE = 360;
}