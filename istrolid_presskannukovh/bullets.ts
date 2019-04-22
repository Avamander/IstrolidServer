import {v2} from "./maths";
import {Sim} from "./sim";
import {
    Debree,
    Particle,
    Player,
    Thing,
    Trail
} from "./things";
import {Unit} from "./unit";
import {CollisionUtils} from "./collision";
import {actionMixer, baseAtlas, intp} from "./dummy";
import {Explosions} from "./explosions";
import {Turret} from "./part";

export namespace Bullets {
    import HitExplosion = Explosions.HitExplosion;
    import AoeExplosion = Explosions.AoeExplosion;
    import RingHitExplosion = Explosions.RingHitExplosion;
    import BombExplosion = Explosions.BombExplosion;
    import FlackExplosion = Explosions.FlackExplosion;
    import ArtilleryExplosion = Explosions.ArtilleryExplosion;
    import SmallHitExplosion = Explosions.SmallHitExplosion;

    export class Bullet extends Particle {
        dead: boolean = false;
        image: string = "img/unitBar/pip1.png";
        damage: number = 1;
        speed: number = 10;
        size: number[] = [1, 1];
        radius: number = 10;
        hitsMultiple = false;
        hitExplosion: string = Explosions.SmallHitExplosion.name;
        explodeClass: string = Explosions.SmallHitExplosion.name;
        side: string = "";
        hitsCloak: boolean = false;
        life: number = 0;
        maxLife: number = 10;
        energyDamage: number = 0;
        explode: boolean = true;
        hitsMissiles: boolean = false;
        soundVolume: number = .1;
        aoe: number = 0;
        hitPos: Float64Array = new Float64Array(2);
        // @ts-ignore
        t: number = null;

        constructor() {
            super();
            this.bullet = true;
            actionMixer.action += .05;
        }

        applyDamage() {
            this.dead = true;
        }

        move(): void {
            if (this.dead) {
                return;
            }
            v2.add_r(this.pos, this.vel);
            this.life += 1;
        }

        tick(): void {
            if (this.dead) {
                return;
            }

            if (this.life > this.maxLife) {
                this.dead = true;
                return;
            }

            if (this.explode === false) {
                this.dead = true;
                return;
            }

            this.scan();

            if (this.dead) {
                let exp = new (<any> Explosions)[this.hitExplosion]();
                exp.z = 1000;
                exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                if (this.t !== null) {
                    v2.add_r(exp.pos, v2.scale_r(this.vel, this.t));
                }
                exp.vel = new Float64Array([0, 0]);
                exp.rot = 0;
                exp.radius = 0.75;
                Sim.Instance.things[exp.id] = exp;
            }
        }

        scan() {
            Sim.Instance.unitSpaces[Sim.otherSide(this.side)].findInRange(this.pos, this.radius + this.speed + Sim.Instance.maxRadius[Sim.otherSide(this.side)],
                // @ts-ignore because they're all units
                (function (_this) {
                return function (unit: Unit) {
                    if (_this.collide((unit as Thing))) {
                        _this.hitUnit(unit);
                        return !_this.hitsMultiple;
                    }
                    return false;
                };
            })(this));

            if (this.hitsMissiles) {
                return Sim.Instance.bulletSpaces[Sim.otherSide(this.side)].findInRange(this.pos, this.radius + this.speed + 100,
                    // @ts-ignore Because every one is bullet
                    (function (_this) {
                    return function (missile: Bullet) {
                        if (missile.missile && _this.collide(missile)) {
                            _this.hitMissle(missile);
                            return !_this.hitsMultiple;
                        }
                        return false;
                    };
                })(this));
            }
        }

        hitUnit(unit: Unit): void {
            unit.applyDamage(this.damage, this);
            if (this.energyDamage) {
                unit.applyEnergyDamage(this.energyDamage);
            }
            this.dead = true;
        }

        hitMissle(thing: Thing): void {
            thing.life = thing.maxLife;
            thing.explode = false;
        }

        collide(thing: Thing) {
            if (!this.hitsCloak && thing.cloak && thing.cloaked()) {
                return false;
            }

            if (Sim.Instance.ffa) {
                if (this.owner === thing.owner) {
                    return false;
                }
            } else {
                if (this.side === thing.side) {
                    return false;
                }
            }

            if (thing.unit) {
                let this_pos = new Float64Array([this.vel[0] - thing.vel[0], this.vel[1] - thing.vel[1]]);
                let dist = CollisionUtils.closestDistance(thing.getBoundPoints(), [this.pos, v2.add_r(this_pos, this.pos)]);
                this.t = 0;
                return dist < this.radius;
            }

            return this.collideCircles(thing);
        }

        _collide(thing: Thing) {
            let distance = v2.distance(this.pos, thing.pos);
            //let speed = v2.mag(thing.vel) + v2.mag(this.vel);
            return distance < thing.radius;
        }

        collideCircles(thing: Thing) {
            let c, distance, r, speed, t1, t2, ta, tb, tc, v;
            if (!this.hitsCloak && thing.cloak && thing.cloaked()) {
                return false;
            }
            distance = v2.distance(this.pos, thing.pos);
            if (distance < thing.radius + this.radius) {
                return true;
            }
            speed = v2.mag(thing.vel) + v2.mag(this.vel);
            if (distance > thing.radius + this.radius + speed) {
                return false;
            }
            // @ts-ignore
            this.t = null;

            c = [this.pos[0] - thing.pos[0], this.pos[1] - thing.pos[1]];
            v = [this.vel[0] - thing.vel[0], this.vel[1] - thing.vel[1]];
            r = this.radius + thing.radius;
            ta = -(c[0] * v[0] + c[1] * v[1]);
            tb = Math.sqrt(r * r * (v[0] * v[0] + v[1] * v[1]) - Math.pow(c[0] * v[1] - c[1] * v[0], 2));
            tc = v[0] * v[0] + v[1] * v[1];
            t1 = (ta - tb) / tc;
            t2 = (ta + tb) / tc;

            if (t1 > 0 && t1 < t2) {
                this.t = t1;
            }
            if (t2 > 0 && t2 < t1) {
                this.t = t2;
            }
            if (this.t !== null) {
                return this.t > 0 && this.t < 1;
            }
            return false;
        }

        __collide(thing: Unit) {
            let part, ref;
            if (!this.hitsCloak && thing.cloak && thing.cloaked()) {
                return false;
            }
            let speed = v2.mag(thing.vel) + v2.mag(this.vel);
            let distance = v2.distance(this.pos, thing.pos);

            if (distance > thing.radius + this.radius + speed) {
                return false;
            }

            if (distance < thing.radius + this.radius) {
                ref = thing.parts;
                let len = ref.length;
                for (let j = 0; j < len; j++) {
                    part = ref[j];
                    distance = v2.distance(this.pos, part.worldPos) - this.radius - 10;
                    if (distance < 0) {
                        return true;
                    }
                }
            }
            return false;
        }

        postFire () {

        }
    }

    export class AoeBullet extends Bullet {
        image = "img/unitBar/pip1.png";
        size = [1, 1];
        color: [number, number, number, number] = [100, 100, 100, 255];
        speed = 30;
        aoe = 50;
        damage = 3;
        explode = true;
        explodeClass = AoeExplosion.name;
        hitPos = new Float64Array(2);

        constructor() {
            super();
        }

        move() {
            if (this.dead) {
                return;
            }
            v2.add_r(this.pos, this.vel);
        };

        tick() {
            if (this.dead) {
                return;
            }

            this.life += 1;
            if (this.life > this.maxLife) {
                this.dead = true;
                if (this.explode) {
                    let exp = new (<any>Explosions)[this.explodeClass];
                    exp.z = 1000;
                    exp.owner = this.owner;
                    exp.pos = new Float64Array([this.hitPos[0], this.hitPos[1]]);
                    exp.vel = new Float64Array([0, 0]);
                    exp.rot = 0;
                    exp.aoe = this.aoe;
                    exp.side = this.side;
                    exp.damage = this.damage;
                    Sim.Instance.things[exp.id] = exp;
                }
            }
        };
    }

    export class StraightMissile extends Bullet {
        trailSize: number = .1;
        trailTime: number = 1000;
        trail: Trail;

        constructor() {
            super();
            this.trail = new Trail(this.trailSize, this.trailTime);
        }

        draw() {
            this.trail.draw(this.pos, this);
            super.draw.call(this);
        };
    }

    export class TrackingMissile extends Bullet {
        image = "img/unitBar/pip1.png";
        size = [1, 1];
        color: [number, number, number, number] = [0, 0, 0, 255];
        speed = 15;
        damage = 8;
        radius = 10;
        missile = true;
        trailSize = .1;
        trailTime = 1500;
        trail: Trail;

        constructor() {
            super();
            this.trail = new Trail(this.trailSize, this.trailTime);
        }

        draw() {
            this.trail.draw(this.pos, this);
            return super.draw.call(this);
        };

        move() {
            if (this.dead) {
                return;
            }
            if (this.target && !this.target.dead && !this.target.cloaked()) {
                this.vel = new Float64Array([this.target.pos[0] - this.pos[0], this.target.pos[1] - this.pos[1]]);
                v2.norm_r(this.vel);
                v2.scale_r(this.vel, this.speed);
            }
            v2.add_r(this.pos, this.vel);
            this.rot = v2.angle(this.vel);
            this.life += 1;
        };

        tick() {
            if (this.life > this.maxLife) {
                this.dead = true;
                return;
            }
            Sim.Instance.unitSpaces[Sim.otherSide(this.side)].findInRange(this.pos, this.radius + this.speed + Sim.Instance.maxRadius[Sim.otherSide(this.side)],
                // @ts-ignore Because unitSpaces contains Units
                (function (_this) {
                return function (unit: Unit) {
                    if (_this.collide((unit as Thing))) {
                        _this.hitUnit(unit);
                        return true;
                    }
                    return false;
                };
            })(this));

            if (this.dead) {
                let exp = new HitExplosion();
                exp.z = 1000;
                exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                exp.vel = new Float64Array([0, 0]);
                exp.rot = 0;
                exp.radius = .5;
                Sim.Instance.things[exp.id] = (exp as Thing);
            }
        };
    }

    export class LaserBullet extends Bullet {
        image = "img/laser01.png";
        size = [1, 1];
        color: [number, number, number, number] = [179, 207, 255, 255];
        speed = 2000;
        damage = 2.5;
        maxLife = 3;
        drawLength = 437;
        turretNum: number = 0;
        targetPos: Float64Array = new Float64Array(2);

        constructor() {
            super();
        }

        move() {

        }

        tick() {
            if (this.dead) {
                return;
            }
            this.life += 1;
            if (this.life > this.maxLife) {
                return this.dead = true;
            }
        }

        draw() {
            let d, pos, rot, w;
            if (this.origin) {
                w = this.origin.weapons[this.turretNum || 0];
                if (w) {
                    v2.set(w.worldPos, this.pos);
                }
            }
            if (this.target) {
                if (this.target.unit) {
                    pos = CollisionUtils.closestPointOnPolygon(this.pos, this.target.getBoundPoints());
                } else {
                    pos = this.target.pos;
                }

                // @ts-ignore
                v2.set(pos, this.targetPos);
            }
            let _offset = new Float64Array([this.targetPos[0] - this.pos[0], this.targetPos[1] - this.pos[1]]);
            rot = v2.angle(_offset);
            d = v2.mag(_offset) / this.drawLength;
            v2.scale_r(_offset, .5);
            v2.add_r(_offset, this.pos);
            if (w) {
                w.rot = rot;
            }
            return baseAtlas.drawSprite(this.image, _offset, [this.size[0], d], rot, this.color);
        };
    }

    export class AutoBullet extends Bullet {
        image = "parts/fireAuto.png";
        sound = "sounds/weapons/autocannon.wav";
        size = [.6, .6];
        color: [number, number, number, number] = [179, 207, 255, 255];
        hitExplosion = SmallHitExplosion.name;
        turretNum: number = 0;

        constructor() {
            super();
        }
    }

    export class EMPOrb extends Bullet {
        image = "parts/fireEnergyBall.png";
        sound = "sounds/weapons/blaster1.wav";
        soundVolume = .05;
        size = [1, 1];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }

        draw() {
            if (this.dead) {
                return;
            }
            baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot + intp.t, this.color);
        };
    }

    export class EMPOrb2 extends Bullet {
        _slowVel: Float64Array = new Float64Array(2);
        image = "parts/fizzleMine.png";
        sound = "sounds/weapons/blaster1.wav";
        soundVolume = .05;
        size = [1, 1];
        color: [number, number, number, number] = [179, 207, 255, 255];
        split = 0;

        constructor() {
            super();
        }

        clientTick() {
            let exp, exp2;
            if (this.life > this.maxLife / 4 && this.split === 0) {
                exp = new Debree();
                exp.image = "parts/fizzleMinePart.png";
                exp.z = this.z + (Math.random() - 0.5) * .01;
                exp.pos = v2.create(this.pos);
                exp.rot = this.rot;
                exp.vel[0] = Math.cos(this.rot) * 3;
                exp.vel[1] = Math.sin(this.rot) * 3;
                exp.vrot = 0;
                intp.particles[exp.id] = exp;
                exp2 = new Debree();
                exp2.image = "parts/fizzleMinePart.png";
                exp2.z = exp.z;
                exp2.pos = v2.create(this.pos);
                v2.set(exp.vel, exp2.vel);
                v2.scale_r(exp2.vel, -1);
                exp2.rot = exp.rot + Math.PI;
                exp2.vrot = 0;
                intp.particles[exp2.id] = exp2;
                return this.split = 1;
            }
        };

        draw() {
            let image;
            if (this.dead) {
                return;
            }
            if (this.life > this.maxLife / 4 && this.split === 0) {
                image = "img/fire02.png";
            } else if (this.life > this.maxLife / 4) {
                image = "parts/fizzleMineEnergy.png";
            } else {
                image = this.image;
            }
            return baseAtlas.drawSprite(image, this.pos, this.size, this.rot + intp.t, this.color);
        }

        postFire() {
            this.maxLife += 24;
            this._slowVel = v2.create(this.vel);
            return v2.scale_r(this._slowVel, 0.2);
        }

        move() {
            if (this.dead) {
                return;
            }
            if (this.life > this.maxLife / 4) {
                v2.add_r(this.pos, this.vel);
            } else {
                v2.add_r(this.pos, this._slowVel);
            }
        }

        tick() {
            let exp;
            if (this.life < this.maxLife / 4) {
                this.life += Math.round(Math.random());
            } else {
                this.life += 1;
                this.scan();
            }
            if (this.life > this.maxLife) {
                this.dead = true;
            }
            if (this.dead) {
                exp = new (<any> Explosions)[this.hitExplosion]();
                exp.z = 1000;
                exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                if (this.t !== null) {
                    v2.add_r(exp.pos, v2.scale_r(this.vel, this.t));
                }
                exp.vel = new Float64Array([0, 0]);
                exp.rot = 0;
                exp.radius = 1;
                Sim.Instance.things[exp.id] = exp;
            }
        }
    }

    export class FlameBullet extends Bullet {
        image = "parts/fireFlame1.png";
        sound = "sounds/weapons/fireFlame.wav";
        size = [0.7, 0.7];
        color: [number, number, number, number] = [179, 207, 255, 255];
        radius = 2;
        maxRadius = 64;
        hitsMultiple = true;
        hitsCloak = true;
        createGhost = 0;
        originPos = [0, 0];
        hitOnce: { [key: number]: boolean };
        burnAmount: number = 0;
        turretNum: number = 0;

        constructor() {
            super();
            this.hitOnce = {};
        }

        draw() {
            let ex, ref, s, w;
            this.createGhost += 1;
            if (this.life < 2 && this.createGhost % 3 === 0) {
                if (this.origin) {
                    w = (ref = this.origin.weapons) != null ? ref[this.turretNum || 0] : void 0;
                    if (w) {
                        v2.set(w.worldPos, new Float64Array(this.originPos));
                        ex = new FlameBulletGhost();
                        ex.main = false;
                        ex.image = "parts/fireFlame" + "1.png"; //(chooseInt(1, 4)) + ".png";
                        ex.z = this.z + (Math.random() - 0.5) * .01;
                        ex.pos = new Float64Array(this.originPos);
                        ex.vel = new Float64Array(this.vel);
                        s = .3 + .4 * Math.random();
                        ex.size = [s, s];
                        ex.radius = this.radius * 5;
                        ex.maxRadius = this.maxRadius * 5;
                        ex.rot = (Math.random() - 0.5) * Math.PI * 2;
                        ex.vrot = 0;
                        ex.maxLife = this.maxLife;
                        ex._pos = v2.create(ex.pos);
                        ex._pos2 = v2.create(ex.pos);
                        ex._rot = ex.rot;
                        ex._rot2 = ex.rot;
                        intp.particles[ex.id] = ex;
                    }
                }
            }
            this.color[0] = Math.max(0, 255 - (260 * this.radius / this.maxRadius));
            this.color[1] = Math.max(0, 255 - (440 * this.radius / this.maxRadius));
            this.color[2] = Math.max(0, 255 - (700 * this.radius / this.maxRadius));
            this.color[3] = 64 * (1.2 - this.radius / this.maxRadius);
            this.size[0] = this.radius * 0.1;
            this.size[1] = this.radius * 0.1;
            super.draw.call(this);
        };

        tick() {
            super.tick.call(this);
            this.radius += (this.maxRadius - 30) / this.maxLife;
            if (this.radius > this.maxRadius) {
                return this.radius = this.maxRadius;
            }
        };

        hitUnit(unit: Unit) {
            let maxBurn;
            if (!this.hitOnce[unit.id]) {
                unit.applyDamage(this.damage, this);
                maxBurn = (unit.hp + unit.shield) * 1.0;
                if (unit.burn < maxBurn) {
                    unit.burn += this.burnAmount * this.damage;
                    if (unit.burn > maxBurn) {
                        unit.burn = maxBurn;
                    }
                }
                this.hitOnce[unit.id] = true;
            }
        };

        postFire() {
            v2.add_r(this.pos, this.vel);
            v2.add_r(this.pos, this.vel);
            this.z += 10;
            this.rot = Math.PI * 2 * Math.random();
            this.image = "parts/fireFlame" + "1.png"; //(chooseInt(1, 4)) + ".png";
        };
    }

    export class FlameBulletGhost extends Bullet {
        maxRadius: number = 10;

        // These are re-assigned hopefully on creation
        _rot: number = 0;
        vrot: number = 0;
        _rot2: number = 0;
        main: boolean = false;

        constructor() {
            super();
        }

        draw() {
            this.color[0] = Math.max(0, 255 - (260 * this.radius / this.maxRadius));
            this.color[1] = Math.max(0, 255 - (440 * this.radius / this.maxRadius));
            this.color[2] = Math.max(0, 255 - (700 * this.radius / this.maxRadius));
            this.color[3] = 64 * (1.2 - this.radius / this.maxRadius);
            this.size[0] = this.radius / 100;
            this.size[1] = this.radius / 100;
            super.draw.call(this);
        };

        tick() {
            super.tick.call(this);
            this.radius += (this.maxRadius - 3) / this.maxLife;
            if (this.radius > this.maxRadius) {
                return this.radius = this.maxRadius;
            }
        };

        scan() {

        };
    }

    export class BattleCannonBullet extends StraightMissile {
        target: any;
        origin: any;
        turretNum: any;
        image = "parts/battleCannonBullet";
        sound = "sounds/weapons/torp2.wav";
        size = [1, 1];
        radius = 20;
        trailTime = 500;

        constructor() {
            super();
        }
    }

    export class HeavyPDBullet extends Bullet {
        image = "parts/fireHex1.png";
        sound = "sounds/weapons/heavyPD.wav";
        size = [.7, .7];
        color: [number, number, number, number] = [179, 207, 255, 255];
        radius = 12;
        hitsMultiple = true;

        constructor() {
            super();
        }
    }

    export class LightPlasmaBullet extends Bullet {
        image = "parts/fireShot1.png";
        sound = "sounds/weapons/blaster2.wav";
        size = [.6, .6];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }
    }

    export class MachineBullet extends Bullet {
        image = "parts/fireBeamSmall.png";
        sound = "sounds/weapons/autocannon.wav";
        size = [.6, .6];
        color: [number, number, number, number] = [179, 207, 255, 255];
        hitExplosion = SmallHitExplosion.name;

        constructor() {
            super();
        }
    }

    export class NeedleGunBullet extends Bullet {
        image: string = "parts/needleGunBullet";
        sound: string = "sounds/weapons/blaster1.wav";
        size = [1, 1];
        radius: number = 20;
        trailTime: number = 500;
        trailSize: number = 0.02;
        turretNum: number = 0;
        weapon!: Turret;
        aoe: number = 0;
        burnAmount: number = 0;

        constructor() {
            super();
        }
    }

    export class ArtilleryBullet extends AoeBullet {
        constructor () {
            super();
        }

        image = "parts/fireLong1.png";
        sound = "sounds/weapons/artillery.wav";
        color: [number, number, number, number] = [255, 240, 244, 255];
        size = [1, 1];
        missile = true;
        explodeClass = ArtilleryExplosion.name;

        draw () {
            let color, dist, size;
            super.draw.call(this);
            if (this.hitPos) {
                dist = Math.min(v2.distance(this.pos, this.hitPos), 1000);
                size = Math.pow(1.003, -dist) * this.aoe / 162;
                color = [255, 0, 0, 80];
                baseAtlas.drawSprite("img/point02.png", this.hitPos, [this.aoe / 256, this.aoe / 256], 0, color);
                baseAtlas.drawSprite("img/fire02.png", this.hitPos, [size * 2, size * 2], 0, color);
            }
        };
    }

    export class PlasmaBullet extends Bullet {
        image = "parts/fireShot1.png";
        sound = "sounds/weapons/blaster2.wav";
        size = [.6, .6];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }
    }

    export class LightBeam extends LaserBullet {
        image = "parts/fireBeamLarge.png";
        sound = "sounds/weapons/beam2.wav";
        size = [.5, .5];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }
    }

    export class PDLaserBullet extends LaserBullet {
        image = "parts/fireBeamLarge.png";
        sound = "sounds/weapons/lightPD.wav";
        size = [.3, .3];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }
    }

    export class TeslaBolt extends LaserBullet {
        image = "parts/zap1.png";
        sound = "sounds/weapons/tesla2.wav";
        size = [.6, .6];
        color: [number, number, number, number] = [179, 207, 255, 255];
        drawLength = 250;

        constructor() {
            super();
            if (this.image === "zap1.png") {
                this.image = "zap" + (Math.floor(Math.random() * 4 + 1)) + ".png";
            }
        }
    }

    export class TorpBullet extends StraightMissile {
        image = "parts/fireTorp1.png";
        sound = "sounds/weapons/torp2.wav";
        size = [1, 1];
        radius = 25;
        missile = true;
        trailTime = 750;
        trailSize = 0.06;

        constructor() {
            super();
        }
    }

    export class MissileBullet extends TrackingMissile {
        image = "parts/fireMis1.png";
        sound = "sounds/weapons/torp1.wav";
        size = [.8, .8];
        color: [number, number, number, number] = [0, 0, 0, 255];
        missile = true;
        tracking = true;

        constructor() {
            super();
        }
    }

    export class FlackBullet extends AoeBullet {
        image = "parts/fireFlack1.png";
        sound = "sounds/weapons/zingg.wav";
        color: [number, number, number, number] = [255, 240, 244, 255];
        size = [1, 1];
        explodeClass = FlackExplosion.name;

        constructor() {
            super();
        }
    }

    export class RamBullet extends Bullet {
        image = "parts/fireWavePull.png";
        sound = "sounds/weapons/WavePull.wav";
        size = [.5, .5];
        color: [number, number, number, number] = [179, 207, 255, 255];
        radius = 30;
        direction = -1;
        waveEffect = 300;

        constructor() {
            super();
        }

        hitUnit(unit: Unit) {
            let amount, dot, p;
            let _wave: Float64Array = new Float64Array(2);
            unit.applyDamage(this.damage, (this as Thing));
            p = this.waveEffect * this.damage / unit.mass;
            v2.norm(this.vel, _wave);
            v2.scale_r(_wave, -this.direction);
            dot = v2.dot(unit.vel, _wave);
            amount = 0;
            if (dot < p) {
                amount = p;
            }
            v2.scale_r(_wave, amount);
            v2.add_r(unit.vel, _wave);
            this.dead = true;
        }
    }

    export class RingBullet extends Bullet {
        image = "parts/fireRing.png";
        sound = "sounds/weapons/zingg.wav";
        hitExplosion = RingHitExplosion.name;
        size = [1, 1];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }
    }

    export class SniperLaser extends Bullet {
        image = "parts/hit1.png";
        sound = "sounds/weapons/blaster2.wav";
        size = [2, 2];
        color: [number, number, number, number] = [179, 207, 255, 255];
        hitOnce: { [key: number]: boolean };

        constructor() {
            super();
            this.hitOnce = {};
        }

        draw() {
            if (this.dead) {
                return;
            }
            baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot + intp.t, this.color);
        }

        hitUnit(unit: Unit) {
            if (!this.hitOnce[unit.id]) {
                unit.applyDamage(this.damage, (this as Thing));
                this.hitOnce[unit.id] = true;
            }
        }
    }

    export class WavePullArch extends Bullet {
        image = "parts/fireWavePull.png";
        sound = "sounds/weapons/WavePull.wav";
        size = [.5, .5];
        color: [number, number, number, number] = [179, 207, 255, 255];
        radius = 30;
        maxRadius = 100;
        direction = 1;
        waveEffect = 0.5;
        hitsMultiple = true;
        hitsCloak = true;
        hitOnce: { [key: number]: boolean } = {};

        constructor () {
            super();
        }

        draw () {
            this.color[3] = 128 * (1 - this.radius / this.maxRadius);
            this.size[0] = this.radius / 100;
            this.size[1] = this.radius / 100;
            super.draw.call(this);
        };

        tick () {
            super.tick.call(this);
            this.radius += (this.maxRadius - 30) / this.maxLife;
            if (this.radius > this.maxRadius) {
                return this.radius = this.maxRadius;
            }
        }

        hitUnit (unit: Unit) {
            let amount, dot, p;
            let _wave: Float64Array = new Float64Array(2);
            if (!this.hitOnce[unit.id]) {
                unit.applyDamage(this.damage, (this as Thing));
                this.hitOnce[unit.id] = true;
            }
            p = this.waveEffect * this.damage;
            v2.norm(this.vel, _wave);
            v2.scale_r(_wave, -this.direction);
            dot = v2.dot(unit.vel, _wave);
            amount = 0;
            if (dot < p) {
                amount = p;
            }
            v2.scale_r(_wave, amount);
            v2.add_r(unit.vel, _wave);
        }
    }

    export class WavePushArch extends WavePullArch {
        image = "parts/fireWavePush.png";
        sound = "sounds/weapons/WavePush.wav";
        direction = -1;
        maxRadius = 100;
        waveEffect = 0.5;

        constructor() {
            super();
        }
    }

    export class Bomb extends AoeBullet {
        image = "parts/bombDormant.png";
        sound = "sounds/weapons/wewewee.wav";
        soundVolume = .03;
        size = [1, 1];
        color: [number, number, number, number] = [255, 255, 255, 255];
        explodeClass = BombExplosion.name;
        trailSize = .1;
        trailTime = 500;
        trail: Trail;

        // This is hopefully re-assigned on creation
        _slowVel!: Float64Array;

        constructor() {
            super();
            this.trail = new Trail(this.trailSize, this.trailTime);
        }

        postFire() {
            this.maxLife += 28;
            this._slowVel = v2.create(this.vel);
            v2.scale_r(this._slowVel, 0);
        }

        move() {
            if (this.dead) {
                return;
            }

            if (this.life > 28) {
                return v2.add_r(this.pos, this.vel);
            } else {
                return v2.add_r(this.pos, this._slowVel);
            }
        }

        tick() {
            let exp;
            this.life += 1;
            if (this.life > this.maxLife) {
                this.dead = true;
                if (this.explode) {
                    exp = new BombExplosion();
                    exp.z = 1000;
                    exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                    exp.vel = new Float64Array([0, 0]);
                    exp.rot = 0;
                    exp.aoe = this.aoe;
                    exp.side = this.side;
                    exp.owner = this.owner;
                    exp.damage = this.damage;
                    Sim.Instance.things[exp.id] = exp;
                }
            }
        };

        draw() {
            let color, dist, size;
            this.trail.draw(this.pos, (this as Thing));
            super.draw.call(this);
            this.z = 1;
            if (this.life === 28) {
                this.image = "parts/bombActive.png";
                //playSound("sounds/weapons/wizzzz.wav");
            }
            if (this.hitPos) {
                dist = Math.min(v2.distance(this.pos, new Float64Array(this.hitPos)), 1000);
                size = Math.pow(1.003, -dist) * this.aoe / 162;
                color = [255, 0, 0, 80];
                baseAtlas.drawSprite("img/point02.png", this.hitPos, [this.aoe / 256, this.aoe / 256], 0, color);
                baseAtlas.drawSprite("img/fire02.png", this.hitPos, [size * 2, size * 2], 0, color);
            }
        };
    }


    export class HeavyBeam extends LaserBullet {
        image = "parts/fireBeamLarge.png";
        sound = "sounds/weapons/beam4.wav";
        size = [1, 1];
        color: [number, number, number, number] = [179, 207, 255, 255];

        constructor() {
            super();
        }
    }

    export class SidewinderBullet extends TrackingMissile {
        image = "parts/fireMine.png";
        sound = "sounds/weapons/torp4.wav";
        soundVolume = .05;
        size = [.8, .8];
        color: [number, number, number, number] = [0, 0, 0, 255];
        missile = true;
        tracking = true;
        turnVel = [1, 1];
        trailTime = 500;
        trailSize = 0.12;
        direction: number = 0;
        dist: number = 0;
        turretNum: number = 0;

        constructor() {
            super();
        }

        tick() {
            let minDistance, minUnit;
            super.tick.call(this);
            if ((Sim.Instance.step + this.id) % 4 === 0) {
                if (!this.target || this.target.dead || this.target.cloaked()) {
                    Sim.Instance.unitSpaces[Sim.otherSide(this.side)].findInRange(this.pos, Sim.Instance.maxRadius[Sim.otherSide(this.side)],
                        // @ts-ignore
                        (function (_this) {
                        // @ts-ignore because we're looking at units
                        return function (unit: Unit) {
                            let dist;
                            if (unit.owner === _this.owner) {
                                return false;
                            }
                            dist = v2.distance(unit.pos, _this.pos);
                            if (null === null || dist < 0) {
                                if (!unit.cloaked()) {
                                    minUnit = unit;
                                    minDistance = dist;
                                }
                            }
                            return false;
                        };
                    })(this));
                    if (minUnit) {
                        return this.target = minUnit;
                    }
                }
            }
        };

        move(): void {
            if (this.dead) {
                return;
            }
            if (this.target &&
                !this.target.dead &&
                !this.target.cloaked()) {
                this.dist = v2.distance(this.target.pos, this.pos);
                this.vel = new Float64Array([this.target.pos[0] - this.pos[0], this.target.pos[1] - this.pos[1]]);
            }
            v2.norm_r(this.vel);
            this.rot = v2.angle(this.vel);
            if (this.direction === 0) {
                this.turnVel[0] = -Math.cos(this.rot) * 2;
                this.turnVel[1] = -Math.sin(this.rot) * 2;
            } else if (this.direction === 1) {
                this.turnVel[0] = Math.cos(this.rot) * 2;
                this.turnVel[1] = Math.sin(this.rot) * 2;
            }
            v2.scale(new Float64Array(this.turnVel), Math.max(0.01, (this.maxLife - this.life * 2) / this.maxLife), new Float64Array(this.turnVel));
            v2.scale(this.vel, Math.max(0.01, (this.life * 2) / this.maxLife), this.vel);
            v2.add_r(this.vel, new Float64Array(this.turnVel));
            v2.scale_r(this.vel, this.speed);
            v2.add_r(this.pos, this.vel);
            this.rot = v2.angle(this.vel);
            this.life += 1;
        };
    }
}