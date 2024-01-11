import { Keys } from "excalibur";

export class Config {
    // DISPLAY
    static DISPLAY_WIDTH = 800;
    static DISPLAY_HEIGHT = 600;
    static HORIZONTAL_CAMERA_POINT = 0;
    static CAMERA_ZOOM = 0.7;
    static DISPLAY_MIN_MARGIN = 25;
    static DISPLAY_MAX_RIGHT_POSITION = (Config.DISPLAY_WIDTH / 2) - this.DISPLAY_MIN_MARGIN;
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
    static VELOCITY_MULTIPLIER_RATE = 7;
    static HORIZONTAL_VELOCITY_MULTIPLIER_RATE = 2;
    static SLOW_SPEED_LIMIT = 60;
    static WIND_FRICTION_RATE = 0.0015;

    // SLOPE
    static INITIAL_SLOPE = 0.1;

    // ACCELERATION
    static ACCELERATION_RATE = 3;

    // BRAKING
    static BRAKING_RATE = 3;

    // GATES
    static GATE_MAX_WIDTH = 200;
    static GATE_MIN_WIDTH = 160;
    static GATE_MIN_VERTICAL_DISTANCE = 220;
    static GATE_MAX_VERTICAL_DISTANCE = 400;
    static GATE_MAX_HORIZONTAL_DISTANCE = 350;
    static GATE_MAX_LEFT_POSITION = Config.DISPLAY_MAX_LEFT_POSITION;
    static GATE_MAX_RIGHT_POSITION = Config.DISPLAY_MAX_RIGHT_POSITION;
    static GATE_MAX_NUMBER = 45;
    static GATE_MIN_NUMBER = 30;
    static FINAL_GATE_WIDTH = Config.DISPLAY_WIDTH - (2 * Config.DISPLAY_MIN_MARGIN);
    static FINAL_GATE_POSITION = Config.DISPLAY_MAX_LEFT_POSITION;
    static GATE_OTHER_SIDE_PROBABILITY = 0.95;

    // POLES
    static POLE_WIDTH = 20;
    static POLE_HEIGHT = 40;
    static POLE_DETECTOR_MARGIN = 40;
    static FINAL_POLE_WIDTH = 30;
    static FINAL_POLE_HEIGHT = 80;

    // ROTATION
    static MAX_RIGHT_ROTATION_ANGLE = Math.PI / 2;
    static MAX_LEFT_ROTATION_ANGLE = 3 * Math.PI / 2;

    // CARVING
    static CARVING_ROTATION_RATE = 3;
    static CARVING_ROTATION_OPTIMAL_SPEED = 30;
    static CARVING_ADHERENCE_RATE = 0.95;
    static CARVING_BRAKING_RATE = 0.01;

    static CARVING_ACCELERATION_RATE = 0.01;
    static CARVING_LATERAL_VELOCITY = 15;
    static CARVING_VISUAL_VELOCITY_ANGLE_MULTIPLIER = 2;
    static CARVING_INVERTER_RATE = 1.5;
    static CARVING_INVERTER_VELOCITY = Config.CARVING_INVERTER_RATE * Config.CARVING_LATERAL_VELOCITY;
    static CARVING_MAX_LATERAL_VELOCITY = 1000;

    // SLIDING
    static SLIDING_ROTATION_RATE = 3.5;
    static SLIDING_ROTATION_OPTIMAL_SPEED = 20;
    static SLIDING_ADHERENCE_RATE = 0.9;
    static SLIDING_BRAKING_RATE = 0.8;

    static SLIDING_ACCELERATION_RATE = -0.8;
    static SLIDING_LATERAL_VELOCITY = 25;
    static SLIDING_INVERTER_RATE = 1.5;
    static SLIDING_INVERTER_VELOCITY = Config.SLIDING_INVERTER_RATE * Config.SLIDING_LATERAL_VELOCITY;
    static SLIDING_MAX_VISUAL_ANGLE = 360;
}