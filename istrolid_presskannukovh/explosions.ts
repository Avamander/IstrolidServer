import {actionMixer, baseAtlas, intp} from "./dummy";
import {v2} from "./maths";
import {Sim} from "./sim";
import {CollisionUtils} from "./collision";
import {Debree, Particle, Thing} from "./things";

export namespace Explosions {
    export class Explosion extends Particle {
        image: string = "img/unitBar/pip1.png";
        maxLife: number = 30;
        radius: number = 2;
        sound: string = "sounds/weapons/thud2.wav";
        soundVolume: number = .1;
        dead: boolean = false;
        life: number = 0;
        color: [number, number, number, number] = [255, 255, 255, 255];
        rot: number = 0;
        damaged: boolean = false;

        constructor() {
            super();
        }

        draw() {
            if (this.dead) {
                return;
            }
            let fade = this.life / this.maxLife;
            let s = 0.1 + fade * fade * this.radius;
            this.color[3] = (1 - fade) * 255;
            baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
        };
    }

    export class HitExplosion extends Explosion {
        image: string = "img/fire02.png";
        maxLife: number = 30;
        radius: number = 2;
        sound: string = "sounds/weapons/thud1.wav";
        soundVolume: number = .1;
        hitImage: string;
        rot: number;
        frame: number;
        life: number = 0;
        dead: any;
        color: [number, number, number, number] = [255, 255, 255, 255];

        constructor() {
            super();
            this.frame = 0;
            this.hitImage = "parts/hit1.png"; //+ (choose([1, 2, 3, 4, 5])) + ".png"; // TODO:
            this.rot = Math.random() * Math.PI * 2;
            actionMixer.action += .5;
        }

        draw() {
            if (this.dead) {
                return;
            }
            let fade = this.life / this.maxLife;
            let s = 0.1 + fade * fade * this.radius;
            this.color[3] = (1 - fade) * 255;
            baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
            if (this.frame < 4) {
                s = 1;
                this.color[3] = 255 / (1 + this.frame);
                baseAtlas.drawSprite(this.hitImage, this.pos, [s, s], this.rot, this.color);
            }
            return this.frame += 1;
        };
    }

    export class SmallHitExplosion extends Explosion {
        sound = "sounds/weapons/thud4.wav";
        dead: boolean = false;
        frame: number = 0;
        hitImage: string;
        rot: number = Math.random() * Math.PI * 2;
        color: [number, number, number, number] = [255, 255, 255, 255];

        constructor() {
            super();
            this.hitImage = "parts/hitAuto1.png"; // TODO: + (choose([1, 2, 3])) + ".png";
            actionMixer.action += .5;
        }

        draw() {
            if (this.dead) {
                return;
            }
            if (this.frame < 4) {
                let s = 1;
                this.color[3] = 255 / (1 + this.frame);
                baseAtlas.drawSprite(this.hitImage, this.pos, [s, s], this.rot, this.color);
            }
            return this.frame += 1;
        };
    }

    export class RingHitExplosion extends Explosion {
        image: string = "img/fire02.png";
        maxLife: number = 30;
        frame: number = 0;
        hitImage: string = "img/fire02.png";

        constructor() {
            super();
            this.frame = 0;
        }

        draw() {
            super.draw();
            if (this.frame === 0) {
                for (let j = 1; j < 5; j++) {
                    let deb: Debree = new Debree();
                    deb.image = "parts/fireSpinPart" + j + ".png";
                    deb.z = this.z + (Math.random() - 0.5) * 0.01;
                    deb.pos = new Float64Array([0, 0]);
                    deb.vel = new Float64Array([0, 0]);
                    v2.set(this.pos, deb.pos);
                    deb.vel[0] = 60 * (Math.random() - 0.5);
                    deb.vel[1] = 60 * (Math.random() - 0.5);
                    deb.rot = 0;
                    deb.vrot = (Math.random() - 0.5);
                    deb.maxLife = 16;
                    deb._pos = v2.create(deb.pos);
                    deb._pos2 = v2.create(deb.pos);
                    deb._rot = deb.rot;
                    deb._rot2 = deb.rot;
                    intp.particles[deb.id] = deb;
                }
            }
            return this.frame += 1;
        };
    }

    export class ShipExplosion extends Explosion {
        image = "img/fire02.png";
        maxLife = 15;
        radius = 2;
        sound = "sounds/weapons/explode1.wav";
        soundVolume = .1;
        life: number = 0;
        dead: boolean = false;

        constructor() {
            super();
            actionMixer.action += .5;
        }

        draw() {
            if (this.dead) {
                return;
            }
            let fade = this.life / this.maxLife;
            let s = Math.pow(this.radius, 1.3) / 100;
            this.color[3] = (1 - fade) * 255;
            return baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
        };
    }

    export class AoeExplosion extends Explosion {
        image = "img/point02.png";
        maxLife = 10;
        radius = 2;
        sound = "sounds/weapons/thud3.wav";
        soundVolume = .5;
        damage = 0;
        aoe = 0;
        damaged: boolean = false;
        dead: boolean = false;
        energyDamage: number = 0;
        burnAmount: number = 0;

        constructor() {
            super();
        }

        tick() {
            if (!this.damaged) {
                this.damaged = true;
                return Sim.Instance.unitSpaces[Sim.otherSide(this.side)].findInRange(
                    this.pos,
                    this.aoe + Sim.Instance.maxRadius[Sim.otherSide(this.side)],
                    // @ts-ignore because unitSpaces contains Units
                    (function (_this) {
                        // @ts-ignore because unitSpaces
                        return function (thing: Thing) {
                            if (!thing.unit){
                                return false;
                            }

                            if (thing.owner === _this.owner) {
                                return false;
                            }
                            let distance = Math.max(CollisionUtils.closestDistance(thing.getBoundPoints(), [_this.pos]), 0);
                            if (distance < _this.aoe) {
                                let fallOff = 1 - distance / _this.aoe;
                                if (typeof thing.applyDamage === "function") {
                                    thing.applyDamage(_this.damage * fallOff, _this);
                                }
                                if (_this.energyDamage > 1) {
                                    if (typeof thing.applyEnergyDamage === "function") {
                                        thing.applyEnergyDamage(_this.energyDamage * fallOff);
                                    }
                                }
                                if (_this.burnAmount > 1) {
                                    if (typeof thing.applyBurnAmount === "function") {
                                        thing.applyBurnAmount(_this.burnAmount * fallOff);
                                    }
                                }
                            }
                            return false;
                        };
                    })(this));
            }
        }

        draw() {
            if (this.dead) {
                return;
            }
            let fade = Math.min(1, this.life / this.maxLife);
            let s = this.aoe / 512 * this.radius;
            this.color[3] = (1 - fade) * 50;
            return baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
        }
    }

    export class FlackExplosion extends AoeExplosion {
        maxLife: number = 10;
        image: string = "img/fire02.png";
        radius: number = 2;
        sound: string = "sounds/weapons/thud1.wav";
        soundVolume: number = .1;

        constructor() {
            super();
        }

        draw () {
            if (this.dead) {
                return;
            }
            let fade = this.life / this.maxLife;
            let s = this.radius / 2;
            this.color[3] = (1 - Math.pow(fade, 2)) * 80;
            return baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
        };
    }

    export class FrameExplosion extends Explosion {
        image: string = "img/fx/fire1/f#.png";
        nFrames: number = 8;
        maxLife: number = 16;
        radius: number = 2;
        sound: string = "sounds/weapons/explode1.wav";
        soundVolume: number = .1;
        loopFrames: boolean = false;

        constructor() {
            super();
        }

        draw() {
            if (this.dead) {
                return;
            }
            let fade = this.life / this.maxLife;
            let s = 3;
            this.color = [255, 255, 255, 210];
            if (this.loopFrames) {
                let frame = this.life % this.nFrames + 1;
                let intFrame = Math.floor(frame);
                // @ts-ignore
                let image = this.image.replace("#", intFrame);
                return baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
            } else {
                let frame = (this.life / this.maxLife) * this.nFrames + 1;
                let intFrame = Math.floor(frame);
                if (intFrame < this.nFrames) {
                    let tweenFrame = frame - intFrame;
                    // @ts-ignore
                    let image = this.image.replace("#", intFrame);
                    return baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                }
            }
        }
    }

    export class BombExplosion extends AoeExplosion {
        maxLife = 10;
        sound = "sounds/weapons/thud3.wav";
        soundVolume = .25;

        constructor() {
            super();
        }

        draw() {
            let ex, i, n, results;
            super.draw.call(this);
            if (this.life === 0) {
                results = [];
                for (n = i = 1; i < 15; n = ++i) {
                    ex = new Debree();
                    ex.image = "fireFlame" + "1.png"; //(chooseInt(1, 4)) + ".png";
                    ex.z = this.z + (Math.random() - 0.5) * .01;
                    ex.pos = new Float64Array([0, 0]);
                    ex.vel = new Float64Array([0, 0]);
                    v2.set(this.pos, ex.pos);
                    v2.scale_r(v2.random(ex.vel), Math.random() * 6);
                    ex.rot = (Math.random() - 0.5) * Math.PI * 2;
                    ex.vrot = (Math.random() - 0.5);
                    ex.maxLife = 16;
                    ex._pos = v2.create(ex.pos);
                    ex._pos2 = v2.create(ex.pos);
                    ex._rot = ex.rot;
                    ex._rot2 = ex.rot;
                    results.push(intp.particles[ex.id] = ex);
                }
                return results;
            }
        };
    }

    export class ArtilleryExplosion extends AoeExplosion {
        constructor () {
            super();
        }

        sound = "sounds/weapons/thud3.wav";
        soundVolume = .20;
        maxLife = 10;

        draw () {
            super.draw.call(this);
            if (this.dead) {
                return;
            }
            let fade = this.life / this.maxLife;
            let s = this.radius / 2;
            let color = [255, 255, 255, (1 - Math.pow(fade, 2)) * 180];
            return baseAtlas.drawSprite("img/fire02.png", this.pos, [s, s], this.rot, color);
        }
    }
}