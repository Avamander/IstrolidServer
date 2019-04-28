import {v2} from "./maths"
import {Unit} from "./unit";
import {Player, Thing, Trail} from "./things";
import {baseAtlas, intp} from "./dummy";
import {IstrolidServer} from "../server";
import {Sim} from "./sim";
import {CollisionUtils} from "./collision";

export class Part {
    turret!: this;

    net!: {
        targetId: number;
        working: boolean;
        range: number;
    };

    pos: Float64Array;
    worldPos: Float64Array;

    owner!: Player;

    unit!: Unit;
    target!: Unit;

    size!: number[];

    scale!: number;
    partNum!: number;
    arc!: number;
    range: number = 0;
    dps: number = 0;
    genEnergy: number = 0;
    useEnergy: number = 0;
    thrust: number = 0;
    fireEnergy: number = 0;
    hp: number = 10;
    cost: number = 10;
    mass: number = 40;
    rot: number = 0;
    dir: number = 0;
    opacity: number = 1;

    bulletCls: string = BattleCannonBullet.name;
    tab: string = "decals";
    image: string = "decals/Symbol15.png";
    orignalImage: string = "decals/Symbol15.png";
    name: string = "";
    dlc: string | null = null;

    stripe: boolean = false;
    northWest: boolean = false;
    disabled: boolean = false;
    locked: boolean = false;
    overPaint: boolean = false;
    painted: boolean = false;
    paintable: boolean = true;
    cantPaint: boolean = false;
    mount: boolean = false;
    overlap: boolean = false;
    solid: boolean = false;
    bad: boolean = false;
    struct: boolean = false;
    exhaust: boolean = false;
    noEffect: boolean = false;
    noTurret: boolean = false;
    fill: boolean = false;
    doesShapedDamage: boolean = false;
    disable: boolean = false;
    attach: boolean = false;
    weapon: boolean = false;
    canRotate: boolean = true;
    flip: boolean = true;
    decal: boolean = false;
    ghostCopy: boolean = false;
    canShowDamage: boolean = false;
    gimble: boolean = false;
    working: boolean = true;

    constructor() {
        this.pos = v2.create_r();
        this.worldPos = v2.create_r();
        this.orignalImage = this.image;
    }

    postDeath() {
        return;
    }

    init() {
        return;
    }

    preDraw() {
        return;
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
        v2.sub_r(this.worldPos, this.unit.center);
        v2.rotate(this.worldPos, Math.PI + this.unit.rot, this.worldPos);
        v2.add_r(this.worldPos, this.unit.pos);
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
    trail!: Trail;

    constructor() {
        super();
        if (typeof IstrolidServer.Instance === "undefined" || IstrolidServer.Instance === null) {
            this.trail = new Trail(this.trailSize, this.trailTime);
        }
    }

    preDraw() {
        this.trail.draw(this.worldPos, (this.unit as Thing));
    }
}

export class Turret extends Part {
    tab: string = "weapons";
    image: string = "turret01.png";
    // @ts-ignore
    bulletCls: string;
    orignalImage: string;

    gimble: boolean = true;
    weapon: boolean = true;
    canRotate: boolean = false;
    exactRange: boolean = false;
    hitsMissiles: boolean = false;
    instant: boolean = false;
    working: boolean = true;
    onlyInRange: boolean = false;
    noOverkill = false;

    // @ts-ignore
    target: Thing;
    unit!: Unit;

    pos: Float64Array;
    worldPos: Float64Array;

    baseStats: {
        [x: string]: any;
        range?: any;
        damage?: any;
        energyDamage?: any;
        bulletSpeed?: any;
        reloadTime?: any;
        shotEnergy?: any;
    };

    dps: number = 0;
    fireEnergy: number = 0;
    shotEnergy: number = 0;
    turretNum: number = 0;
    targetId: number = 0;
    aoe: number = 0;
    burnAmount: number = 0;
    reload: number;
    fireTimer: number;
    _rot: number;
    _rot2: number;
    range: number = 500;
    damage: number = 0;
    energyDamage: number = 0;
    bulletSpeed: number = 1;
    reloadTime: number = 10;
    overshoot: number = 0.3;
    minRange: number = -1000;
    accuracy: number = 0;
    arc: number = 0;
    weaponRange: number = 1;
    weaponRangeFlat: number = 0;
    weaponDamage: number = 1;
    weaponEnergyDamage: number = 1;
    weaponSpeed: number = 1;
    weaponReload: number = 1;
    weaponEnergy: number = 1;

    maxLife: number | undefined = undefined;

    constructor() {
        super();
        this.canShoot.bind(this);
        this.reload = 0;
        this.rot = 0;
        this.fireTimer = 0;
        this.pos = v2.create_r();
        this.worldPos = v2.create_r();
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
                // @ts-ignore because this is Part
                part.turret = (this as Part);
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
            } else if (this.target !== undefined && this.target !== null && this.canShoot((this.target as Thing))) {
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
            this.target = (this.unit.target as Unit);
            return;
        }
        // @ts-ignore
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
            if (this.canShoot((u as Thing))) {
                this.target = (u as Thing);
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
        v2.scale_r(particle.vel, particle.speed);
        particle.rot = this.rot;
        if (this.instant) {
            particle.targetPos = v2.create(particle.target.pos);
            if (!this.target.unit) {
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
                this.target.applyDamage(particle.damage, (this.unit as Thing));
            }
        } else if (this.exactRange) {
            particle.maxLife = Math.floor(distance / particle.speed);
            particle.hitPos = v2.create_r();
            v2.add_r(particle.hitPos, particle.vel);
            v2.scale_r(particle.hitPos, distance / particle.speed);
            v2.add_r(particle.hitPos, particle.pos);
        } else {
            particle.maxLife = Math.floor(this.range / particle.speed * (1 + this.overshoot));
        }

        particle.postFire();
    }
}


import {Bullets} from "./bullets";
import {Explosions} from "./explosions";
import HitExplosion = Explosions.HitExplosion;
import BattleCannonBullet = Bullets.BattleCannonBullet;