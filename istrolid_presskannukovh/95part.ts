import {v2} from "./4src_maths"
import {Unit} from "./95src_unit";
import {Player, Thing, Trail} from "./94src_things";
import {baseAtlas, intp} from "./0dummy";
import {Server} from "../server";
import {Sim} from "./6src_sim";
import {CollisionUtils} from "./991src_collision";

export class Part {
    genEnergy: number;
    useEnergy: number;
    thrust: number;
    working: boolean;
    fireEnergy: number;
    hp: number = 10;
    cost: number = 10;
    mass: number = 40;
    rot: number = 0;
    dir: number = 0;
    canRotate: boolean = true;
    flip: boolean = true;
    opacity: number = 1;
    size: number[];
    owner: Player;
    unit: Unit;
    scale: number;
    decal: boolean;
    ghostCopy: boolean;
    stripe: boolean = false;
    northWest: boolean = false;
    partNum: number;
    image: string;
    canShowDamage: boolean;
    gimble: boolean;
    orignalImage: string;
    pos: Float64Array;
    worldPos: Float64Array;
    disabled: boolean;
    locked: boolean;
    overPaint: boolean;
    painted: boolean;
    paintable: boolean;
    cantPaint: boolean;
    mount: boolean = false;
    overlap: boolean = false;
    solid: boolean;
    bad: boolean;
    struct: boolean;
    exhaust: boolean;
    noEffect: boolean;
    noTurret: boolean;
    fill: boolean;
    name: string;
    turret: this;
    arc: number;
    doesShapedDamage: boolean;
    dlc: string = null;
    disable: boolean = false;
    attach: boolean;
    net: { targetId: number; working: boolean; range: number; };
    weapon: boolean;
    range: number;
    target: Unit;
    bulletCls: string;
    dps: number;

    constructor() {
        this.pos = v2.create(null);
        this.worldPos = v2.create(null);
        this.orignalImage = this.image;
    }

    postDeath() {

    }

    init() {


    }

    preDraw() {

    }

    flippedSize() {
        let xsize, ysize;
        xsize = this.size[0];
        ysize = this.size[1];
        if (this.dir % 2 === 0) {
            return [xsize, ysize];
        } else {
            return [ysize, xsize];
        }
    }

    computeWorldPos() {
        v2.set(this.pos, this.worldPos);
        v2.sub(this.worldPos, this.unit.center, null);
        v2.rotate(this.worldPos, Math.PI + this.unit.rot, this.worldPos);
        v2.add(this.worldPos, this.unit.pos, null);
    }

    draw() {
        let alpha, angle, c, flip, id, num, numParts, rot, showDamage, t;
        if (this.pos[0] < 0 && this.flip) {
            flip = -1;
        } else {
            flip = 1;
        }
        if (this.gimble) {
            rot = Math.PI + this.rot;
        } else {
            rot = Math.PI + this.unit.rot;
        }
        angle = Math.PI * this.dir / 2;
        rot += angle;
        if (this.canShowDamage && this.image === this.orignalImage) {
            numParts = this.unit.parts.length;
            id = this.unit.id;
            num = this.partNum % numParts;
            showDamage = num / numParts > this.unit.hp / this.unit.maxHP;
            if (showDamage) {
                t = (this.partNum + id) % 3 + 1;
                this.image = this.orignalImage.replace(".png", ".d" + t + ".png");
            }
        }
        if (this.northWest) {
            if (this.dir === 0 || this.dir === 2) {
                this.image = this.orignalImage;
            } else {
                this.image = this.orignalImage.replace("N", "W");
            }
        }
        alpha = 255;
        if (this.unit.cloakFade > 0) {
            alpha = 255 - this.unit.cloakFade * 200;
        }
        if (this.ghostCopy) {
            alpha = 170;
        }
        if (this.stripe) {
            baseAtlas.drawSprite("parts/gray-" + this.image, this.worldPos, [flip, -1], rot, [255, 255, 255, alpha]);
            c = this.unit.color;
            return baseAtlas.drawSprite("parts/red-" + this.image, this.worldPos, [flip, -1], rot, [c[0], c[1], c[2], alpha]);
        } else if (this.decal) {
            c = this.unit.color;
            return baseAtlas.drawSprite("parts/" + this.image, this.worldPos, [flip / this.scale, -1 / this.scale], rot, [c[0], c[1], c[2], alpha * this.opacity]);
        } else {
            return baseAtlas.drawSprite("parts/" + this.image, this.worldPos, [flip, -1], rot, [255, 255, 255, alpha]);
        }
    }

    tick() {

    }

    initTurret(turret: Turret) {

    }
}

export class Engine extends Part {
    trailSize = .1;
    trailTime = 500;
    canRotate = false;
    trail: Trail;

    constructor() {
        super();
        if (typeof Server.Instance === "undefined" || Server.Instance === null) {
            this.trail = new Trail(this.trailSize, this.trailTime);
        }
    }

    preDraw() {
        this.trail.draw(this.worldPos, this.unit);
    }
}

export class TorpTurret extends Part {
    name = "Torpedo Launcher";
    desc = "Launches torpedos that move in straight line.";
    hp = 10;
    cost = 5;
    image = "turTorp.png";
    size = [2, 2];
    reloadTime = 52;
    trackSpeed = 45;
    bulletCls = TorpBullet.constructor.name;
    range = 1100;
    shotEnergy = 1300;
    mass = 10;
    bulletSpeed = 16;
    damage = 24;

    constructor() {
        super();
    }
}

export class Turret extends Part {
    tab: string = "weapons";
    image: string = "turret01.png";
    gimble: boolean = true;
    weapon: boolean = true;
    canRotate: boolean = false;
    target: Unit;
    bulletCls: string;
    range: number = 500;
    damage: number = 0;
    energyDamage: number = 0;
    bulletSpeed: number = 1;
    reloadTime: number = 10;
    overshoot: number = 0.3;
    minRange: number = -1000;
    instant: boolean = false;
    accuracy: number = 0;
    exactRange: boolean = false;
    arc: number = 0;
    weaponRange: number = 1;
    weaponRangeFlat: number = 0;
    weaponDamage: number = 1;
    weaponEnergyDamage: number = 1;
    weaponSpeed: number = 1;
    weaponReload: number = 1;
    weaponEnergy: number = 1;
    noOverkill = false;
    reload: number;
    fireTimer: number;
    pos: Float64Array;
    worldPos: Float64Array;
    orignalImage: string;
    baseStats: { [x: string]: any; range?: any; damage?: any; energyDamage?: any; bulletSpeed?: any; reloadTime?: any; shotEnergy?: any; };
    _rot: number;
    _rot2: number;
    unit: Unit;
    working: boolean;
    dps: number;
    fireEnergy: number;
    shotEnergy: number;
    hitsMissiles: boolean = false;
    onlyInRange: boolean;
    turretNum: number;
    targetId: number;
    aoe: number;
    burnAmount: number;

    constructor() {
        super();
        this.canShoot.bind(this);
        this.reload = 0;
        this.rot = 0;
        this.fireTimer = 0;
        this.pos = v2.create(null);
        this.worldPos = v2.create(null);
        this.orignalImage = this.image;
        this.baseStats = {};
        this._rot = 0;
        this._rot2 = 0;
    }

    init() {
        let part;
        for (let j = 0; j < this.unit.parts.length; j++) {
            part = this.unit.parts[j];
            if (part.mount && v2.distance(part.pos, this.pos) < .1) {
                part.turret = this;
                this.arc = part.arc;
                part.initTurret(this);
            }
        }
    }

    applyBuffs() {
        this.range *= this.weaponRange;
        this.range += this.weaponRangeFlat;
        this.damage *= this.weaponDamage;
        this.energyDamage *= this.weaponDamage;
        this.bulletSpeed *= this.weaponSpeed;
        this.reloadTime *= this.weaponReload;
        this.shotEnergy *= this.weaponEnergy;
        this.reloadTime = Math.ceil(this.reloadTime);
        this.fireEnergy = this.shotEnergy / this.reloadTime;
        this.dps = this.damage / this.reloadTime;

        this.baseStats.range = this.range;
        this.baseStats.damage = this.damage;
        this.baseStats.energyDamage = this.energyDamage;
        this.baseStats.bulletSpeed = this.bulletSpeed;
        this.baseStats.reloadTime = this.reloadTime;
        this.baseStats.shotEnergy = this.shotEnergy;
        this.baseStats.noOverkill = this.noOverkill;
    }

    applyAdditionalBuffs(buffs:
                             {
                                 weaponRange: number;
                                 weaponRangeFlat: number;
                                 weaponDamage: number;
                                 weaponSpeed: number;
                                 weaponReload: number;
                                 weaponEnergy: number;
                                 noOverkill: boolean;
                             }
    ) {
        this.range = this.baseStats.range * buffs.weaponRange + buffs.weaponRangeFlat;
        this.damage = this.baseStats.damage * buffs.weaponDamage;
        this.energyDamage = this.baseStats.energyDamage * buffs.weaponDamage;
        this.bulletSpeed = this.baseStats.bulletSpeed * buffs.weaponSpeed;
        this.reloadTime = this.baseStats.reloadTime * buffs.weaponReload;
        this.shotEnergy = this.baseStats.shotEnergy * buffs.weaponEnergy;
        this.noOverkill = buffs.noOverkill;
        this.reloadTime = Math.ceil(this.reloadTime);
        this.fireEnergy = this.shotEnergy / this.reloadTime;
        this.dps = this.damage / this.reloadTime;
    }

    tick() {
        //sim.timeStart("turrettick");

        let angle, halfArc;
        if (this.reload > 0) {
            this.reload -= 1;
        }
        this.working = this.reload <= 1 && this.unit.energy > this.shotEnergy;
        if (!this.target) {
            this.rot = Unit.turnAngle(this.rot, this.unit.rot, 0.075);
        }
        halfArc = this.arc / 180 * Math.PI / 2;
        angle = Unit.angleBetween(this.unit.rot, this.rot);
        if (angle > halfArc) {
            this.rot = this.unit.rot + halfArc;
        }
        if (angle < -halfArc) {
            this.rot = this.unit.rot - halfArc;
        }
        if (this.reload === 0 && this.unit.energy >= this.shotEnergy) {
            if (this.unit.target !== undefined && this.unit.target !== null && this.canShoot(this.unit.target)) {
                this.target = this.unit.target;
                return this.fire();
            } else if (this.target !== undefined && this.target !== null && this.canShoot(this.target)) {
                return this.fire();
            } else {
                return Sim.Instance.timeIt("findTarget", (function (_this) {
                    return function () {
                        return _this.findTarget();
                    };
                })(this));
            }
        }

        //sim.timeEnd("turrettick");
    }

    draw() {
        if (this.working) {
            this.image = this.orignalImage;
        } else {
            this.image = this.orignalImage.replace(".png", "Reload.png");
        }
        return super.draw.call(this);
    }

    clientTick() {
        let ref, target, th;
        target = intp.things[this.targetId];
        if (target) {
            ref = this.aim(target);
            th = ref[0];
            //distance = ref[1];
            this._rot = th;
        } else {
            return this._rot = Unit.turnAngle(this._rot, this.unit.rot, 0.075);
        }
    }

    aim(thing: Thing) {
        let c, check, current_time, d;
        let do_pos: { (t: any): number[]; (arg0: any): void; (arg0: number): void; };
        let j, max_time, mdown, miss, mup, p, predicted_pos;
        let radius: number;
        let th;
        if (thing.unit) {
            radius = 0;
        } else {
            radius = thing.radius;
        }
        if (this.instant) {
            p = thing.pos;
            predicted_pos = new Float64Array([p[0] - this.worldPos[0], p[1] - this.worldPos[1]]);
            th = v2.angle(predicted_pos);
            return [th, v2.mag(predicted_pos) - radius];
        }
        do_pos = (function (_this) {
            return function (t: number) {
                let v = thing.vel;
                return [thing.pos[0] - _this.worldPos[0] + v[0] * t, thing.pos[1] - _this.worldPos[1] + v[1] * t];
            };
        })(this);
        check = (function (_this) {
            return function (t: number) {
                let miss, predicted_range;
                predicted_pos = do_pos(t);
                predicted_range = v2.mag(new Float64Array(predicted_pos)) - radius;
                miss = Math.abs(predicted_range - _this.bulletSpeed * t);
                return miss;
            };
        })(this);
        max_time = this.range / this.bulletSpeed;
        current_time = 0;
        d = 2;
        miss = check(current_time);
        for (c = j = 0; j < 32; c = ++j) {
            mdown = check(current_time - max_time / d);
            mup = check(current_time + max_time / d);
            if (mdown < miss && mdown < mup) {
                current_time -= max_time / d;
                miss = mdown;
            }
            if (mup < miss && mup < mdown) {
                current_time += max_time / d;
                miss = mup;
            }
            if (miss < 1) {
                break;
            }
            d *= 2;
        }
        if (current_time < 0) {
            current_time = 0;
        }
        predicted_pos = do_pos(current_time);
        th = v2.angle(new Float64Array(predicted_pos));
        return [th, v2.mag(new Float64Array(predicted_pos)) - radius];
    }

    canShoot(other: Thing) {
        let aimDistance, arcAngle, distance, ref, th;
        if (!other.unit && !(other.missile && this.hitsMissiles)) {
            return false;
        }
        if (other.dead || (other.applyDamage == null)) {
            return false;
        }
        if (this.unit.id === other.id) {
            return false;
        }
        if (this.unit.side === other.side && (!Sim.Instance.ffa || this.unit.owner === other.owner)) {
            return false;
        }
        if (other.missile && other.explode === false) {
            return false;
        }
        if (other.cloak > 0 && other.cloaked()) {
            return false;
        }
        distance = v2.distance(this.worldPos, other.pos);
        if (distance > this.range * 2) {
            return false;
        }
        if (this.onlyInRange) {
            if (distance + other.radius < this.minRange || distance - other.radius > this.range) {
                return false;
            }
        }
        ref = this.aim(other);
        th = ref[0];
        aimDistance = ref[1];
        if (other.unit) {
            aimDistance = CollisionUtils.closestDistance(other.getBoundPoints(), [this.worldPos]);
        }
        if (aimDistance < this.minRange || aimDistance > this.range) {
            return false;
        }
        arcAngle = Unit.angleBetween(this.unit.rot, th);
        if (Math.abs(arcAngle) / Math.PI * 180 > this.arc / 2) {
            return false;
        }
        if (this.noOverkill) {
            if (this.unit.target) {
                return this.unit.target.id === other.id;
            }

            if (other.maxHP * 2 < this.damage) {
                return false;
            }

            if (this.energyDamage && other.storeEnergy * 2 < this.energyDamage) {
                return false;
            }
        }
        return true;
    }

    findTarget() {
        let m, u;
        if (this.unit.target && !this.hitsMissiles) {
            this.target = this.unit.target;
            return;
        }
        this.target = null;
        if (this.hitsMissiles) {
            for (let j = 0; j < this.unit.closestEnemyBullets.length; j++) {
                m = this.unit.closestEnemyBullets[j];
                if (this.canShoot(m)) {
                    // @ts-ignore it's okay because it's PD and it can shoot bullets
                    this.target = m;
                    break;
                }
            }
            if (this.target) {
                return;
            }
        }

        for (let l = 0; l < this.unit.closestEnemies.length; l++) {
            u = this.unit.closestEnemies[l];
            if (this.canShoot(u)) {
                this.target = u;
                break;
            }
        }
    }

    fire() {
        let angleLeft, dist, ref, rot;
        ref = this.aim(this.target);
        rot = ref[0];
        dist = ref[1];
        this.rot = Unit.turnAngle(this.rot, rot, 1);
        angleLeft = Unit.angleBetween(this.rot, rot);
        if (Math.abs(angleLeft) > .01) {
            return;
        }
        this.reload = this.reloadTime;
        this.unit.energy -= this.shotEnergy;
        return this.makeBullet(dist);
    }

    makeBullet(distance: number) {
        let exp, particle;
        this.unit.cloak = 0;
        particle = new (<any> Bullets)[this.bulletCls]();
        Sim.Instance.things[particle.id] = particle;
        particle.side = this.unit.side;
        particle.owner = this.unit.owner;
        particle.life = 0;
        particle.dead = false;
        particle.z = this.unit.z + .001;
        particle.turretNum = this.turretNum;
        particle.origin = this.unit;
        particle.weapon = this;
        particle.target = this.target;
        particle.speed = this.bulletSpeed;
        particle.damage = this.damage;
        particle.energyDamage = this.energyDamage;
        particle.hitsMissiles = this.hitsMissiles;
        particle.aoe = this.aoe;
        particle.burnAmount = this.burnAmount;
        v2.set(this.worldPos, particle.pos);
        v2.pointTo(particle.vel, this.rot);
        v2.scale(particle.vel, particle.speed, null);
        particle.rot = this.rot;
        if (this.instant) {
            particle.targetPos = v2.create(particle.target.pos);
            if (this.target.maxLife) {
                this.target.life = this.target.maxLife;
                this.target.explode = false;
                exp = new HitExplosion();
                exp.z = 1000;
                exp.pos = new Float64Array([this.target.pos[0], this.target.pos[1]]);
                exp.vel = new Float64Array([0, 0]);
                exp.rot = 0;
                exp.radius = .5;
                Sim.Instance.things[exp.id] = exp;
            } else {
                this.target.applyDamage(particle.damage, this.unit);
            }
        } else if (this.exactRange) {
            particle.maxLife = Math.floor(distance / particle.speed);
            particle.hitPos = v2.create(null);
            v2.add(particle.hitPos, particle.vel, null);
            v2.scale(particle.hitPos, distance / particle.speed, null);
            v2.add(particle.hitPos, particle.pos, null);
        } else {
            particle.maxLife = Math.floor(this.range / particle.speed * (1 + this.overshoot));
        }
        return typeof particle.postFire === "function" ? particle.postFire() : void 0;
    }
}

import {Bullets} from "./96bullets";
import TorpBullet = Bullets.TorpBullet;
import {Explosions} from "./97explosions";
import HitExplosion = Explosions.HitExplosion;