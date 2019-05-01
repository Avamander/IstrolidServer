import {v2} from "./maths";
import {baseAtlas} from "./dummy";
import {Thing} from "./things";

export class Particle extends Thing {
    image: string = "";
    size: [number, number] = [.1, .1];
    maxLife: number = 60;
    radius: number = 1;
    life: number = 0;
    dead: boolean = false;
    z: number;
    color: [number, number, number, number];
    vel: Float64Array;
    _pos: Float64Array;
    _pos2: Float64Array;
    rot: number;
    // @ts-ignore
    sound: string = null;
    soundVolume: number = 0.0;

    constructor() {
        super();
        this.color = [255, 255, 255, 255];
        this.life = 0;
        this.dead = false;
        this.z = Math.random();
        this.pos = v2.create_r();
        this.vel = v2.create_r();
        this._pos = v2.create_r();
        this._pos2 = v2.create_r();
        this.rot = 0;
        /*if (this.sound && Sim.Instance.sound) {
            playSound(this.sound, this.soundVolume);
        }*/
    }

    move() {
        if (this.dead) {
            return;
        }
        v2.add_r(this.pos, this.vel);
        this.life += 1;
        if (this.life > this.maxLife) {
            this.dead = true;
        }
    }

    draw() {
        if (this.dead) {
            return;
        }
        baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot, this.color);
    }
}

export class Debree extends Particle {
    image: string = "img/debree/bigdebree04.png";
    maxLife: number = 16 * 5;
    radius: number = 2;
    size: [number, number] = [1, 1];

    // These are hopefully set in the constructor
    _rot2!: number;
    vrot!: number;
    _rot!: number;

    constructor() {
        super();
    }

    tick() {
        this.rot += this.vrot;
    }

    draw() {
        if (this.dead) {
            return;
        }
        let fade = this.life / this.maxLife;
        this.color[3] = Math.floor((1 - fade) * 255);
        baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot, this.color);
    }
}