import {Player, Thing} from "./things";
import {v2} from "./maths";
import {Sim} from "./sim";
import {Utils} from "./utils";
import {Colors} from "./colors";
import {baseAtlas, battleMode, commander, control, intp} from "./dummy";
import {CollisionUtils} from "./collision";
import {Parts} from "./parts";
import {UnitUtils} from "./unitutils";
import {Part, Turret} from "./part";
import {Debree} from "./particle";

export class Unit extends Thing {
    slice = [].slice;
    hasProp = {}.hasOwnProperty;
    thumb_cache = {};

    center: Float64Array;
    pos: Float64Array;
    vel: Float64Array;
    preOrders: any[] | { id: number; }[] = [];
    size: [number, number] = [1, 1];
    weapons: Turret[] = [];
    color: [number, number, number, number] = [255, 0, 0, 255];
    parts: Part[] = [];
    closestEnemyBullets: Bullet[] = [];
    closestFriends: Unit[] = [];
    closestEnemies: Unit[] = [];
    testStep: any[] = [];
    testIntp: any[] = [];
    boundPoints: Float64Array[] | null = null;
    boundPointsLocal: Float64Array[] | null = null;
    orders: {
        type: string;
        dest: Float64Array;
        noStop: boolean;
        targetId: number;
        rally: boolean;
        ai: boolean;
        id: number;
        range: number;
        noFinish: boolean;
        begun: boolean
        pos: Float64Array;
        target: Unit;
        distance: number;
    }[] = [];


    z: number;
    cooldown: number = 0;
    rot: number = 0;

    maxHP: number = 10;
    buildHP: number = 0;
    buildSpeed: number = 10;
    buildRadius: number = 500;
    radius: number = 60;
    maxSpeed: number = 100;
    turnSpeed: number = 1;
    cloak: number = 0;
    burn: number = 0;
    jump: number = 0;
    limitBonus: number = 0;
    maxJump: number = 500;
    cost: number = 0;
    static stopFriction: number = 0.9;
    maxRange: number = 0;
    number: number = 0;
    minArc: number = 0;
    aiRules: any;
    storeEnergy: number = 0;
    genEnergy: number = 0;
    static baseGenEnergy: number = 2.5;
    energy: number = 0;
    mass: number = 0;
    hp: number = 5;
    speed: number = 0;
    jumpCount: number = 0;
    jumpDistance: number = 0;
    warpIn: number = 0;
    weaponArc: number = 0;
    shield: number = 0;
    genShield: number = 0;
    thrust: number = 0;
    weaponRange: number = 0;
    damageRatio: number = 0;
    weaponDamage: number = 0;
    weaponDPS: number = 0;
    maxShield: number = 0;
    fireEnergy: number = 0;
    moveEnergy: number = 0;
    maxBurn: number = 0;
    cloakFade: number = 0;
    stasisRange: number = 0;
    shapeDamage: number = 0;
    wait: number = 0;
    wiggling: number = 0;

    ghostCopy: boolean = false;
    underPlayerControl: boolean = false;
    building: { "dead": boolean } | undefined = undefined;
    holdPosition: boolean = false;
    canCapture: boolean = true;
    multiShoot: boolean = false;
    unit: boolean = true;
    fixed: boolean = false;
    dead: boolean = false;
    active: boolean = true;
    slowed: boolean = false;
    warhead: boolean = false;
    energyCaster: boolean = false;
    commandPoint: boolean = false;
    needsCloak: boolean = false;

    forcecloak: boolean = false; // Force cloak
    disable_friends_check_and_follow: boolean = false;

    haspointdefenseweapons: boolean = false;
    hasenergytransfer: boolean = false;
    hasturrets: boolean = false;
    hascloakgenerator: boolean = false;
    hasmodprojector: boolean = false;
    hasstasis: boolean = false;

    // Should be set
    data!: { name: string; aiRules: any[]; parts: any[]; };
    target: Thing | null = null;
    softTarget: Thing | null = null;
    export: any;
    shipClass: any;
    gardingCP: Thing | null = null;
    needsFullCharge: any;

    lastDamager: Thing | null = null;

    spec: string;
    side: string = "";
    name: string = "";

    // @ts-ignore
    projector: { weaponRange: number; weaponRangeFlat: number; weaponDamage: number; weaponEnergyDamage: number; weaponSpeed: number; weaponReload: number; weaponEnergy: number; noOverkill: any; };
    // @ts-ignore
    _pos: number[];
    // @ts-ignore
    _pos2: number[];
    // @ts-ignore
    effect: number;
    // @ts-ignore
    warheadTest: number;
    // @ts-ignore
    stopDistance: number;
    // @ts-ignore
    gotoDistance: number;
    // @ts-ignore
    onOrderId: number;
    // @ts-ignore
    mainWeapon: { range: number; bulletSpeed: number; };

    constructor(spec1: string) {
        super();

        if (!spec1) {
            this.spec = "{}";
        } else {
            this.spec = spec1;
        }

        this.center = v2.create_r();
        this.fromSpec(this.spec);
        this.z = Math.random();
        this.pos = v2.create_r();
        this.vel = v2.create_r();
        this.closestUncloaked.bind(this);
        this.closestEnemy.bind(this);
    }

    static turnAngle(a: number, b: number, speed: number) {
        let turn = b - a;
        if (turn > Math.PI) {
            a += 2 * Math.PI;
        } else if (turn < -Math.PI) {
            a -= 2 * Math.PI;
        }
        turn = b - a;
        if (turn < speed && turn > -speed) {
            return b;
        }
        if (turn > speed) {
            turn = speed;
        }
        if (turn < -speed) {
            turn = -speed;
        }
        return a + turn;
    };

    static angleBetween(a: number, b: number) {
        let turn = b - a;
        while (turn > Math.PI) {
            turn -= 2 * Math.PI;
        }
        while (turn < -Math.PI) {
            turn += 2 * Math.PI;
        }
        return turn;
    };

    static partPoints(part: Part) {
        let size;
        if (part.dir % 2 === 0) {
            size = new Float64Array([part.size[0], part.size[1]]);
        } else {
            size = new Float64Array([part.size[1], part.size[0]]);
        }

        v2.scale_r(size, 10);

        let result: Float64Array[] = [
            v2.add_r(
                v2.create(new Float64Array([-size[0], size[1]])), part.pos),
            v2.add_r(
                v2.create(new Float64Array([size[0], size[1]])), part.pos),
            v2.add_r(
                v2.create(new Float64Array([size[0], -size[1]])), part.pos),
            v2.add_r(
                v2.create(new Float64Array([-size[0], -size[1]])), part.pos)
        ];
        return result;
    }

    static diffCross(u: Float64Array, v: Float64Array, p: Float64Array) {
        return v2.cross(v2.sub(p, u, new Float64Array([0, 0])), v2.sub(v, u, new Float64Array([0, 0])));
    }

    static min(points: Float64Array[]) {
        return points.sort(function (a, b) {
            return a[0] - b[0];
        })[0];
    }

    static max(points: Float64Array[]) {
        return points.sort(function (a, b) {
            return b[0] - a[0];
        })[0];
    }

    static split(u: Float64Array, v: Float64Array, points: Float64Array[]) {
        let p;
        let results = [];
        for (let j = 0; j < points.length; j++) {
            p = points[j];
            if (Unit.diffCross(u, v, p) < 0) {
                results.push(p);
            }
        }
        return results;
    }

    static min_diffCross(points: Float64Array[], u: Float64Array, v: Float64Array): Float64Array {
        return points.sort(function (point: Float64Array) {
            return Unit.diffCross(u, v, point);
        })[0];
    }

    fromSpec(spec: string) {
        this.genEnergy = Unit.baseGenEnergy;
        this.data = UnitUtils.fromShort(spec);
        this.name = this.data.name || "";
        this.aiRules = this.data.aiRules || [];

        for (let i = 0; i < this.data.parts.length; i++) {
            let p = this.data.parts[i];
            if (!((<any>Parts)[p.type])) {
                continue;
            }
            let part = new (<any>Parts)[p.type]();
            part.unit = this;
            part.pos = v2.create(p.pos);
            part.dir = p.dir || 0;
            part.partNum = i;

            if (part.weapon) {
                this.weapons.push(part);
            }

            if (p.ghostCopy) {
                part.ghostCopy = true;
            }

            this.parts.push(part);
            this.cost += part.cost || 0;
            this.hp += part.hp || 0;
            this.thrust += part.thrust || 0;
            this.mass += part.mass;
            this.turnSpeed += part.turnSpeed || 0;
            this.genEnergy += part.genEnergy || 0;
            this.storeEnergy += part.storeEnergy || 0;
            this.genShield += part.genShield || 0;
            this.shield += part.shield || 0;
            this.jumpCount += part.jumpCount || 0;
            this.limitBonus += part.limitBonus || 0;

            if (part.arc && this.weaponArc < part.arc) {
                this.weaponArc = part.arc;
            }

            if (part.arc && (this.minArc === 0 || this.minArc > part.arc)) {
                this.minArc = part.arc;
            }

            if (p.type === "EnergyTransfer") {
                this.hasenergytransfer = true;
                if (part.range > this.maxRange) {
                    this.maxRange = part.range;
                }
            }

            if (p.type === "StasisField") {
                this.hasstasis = true;
                this.stasisRange = part.range + Math.sqrt(part.pos * part.pos + this.center[0] * this.center[1]) + 100;
                if (this.stasisRange > this.maxRange) {
                    this.maxRange = this.stasisRange;
                }
            }

            if (p.turret) {
                this.hasturrets = true;
                if ((p as Turret).hitsMissiles) {
                    this.haspointdefenseweapons = true;
                }
            }

            if (p.type === "ModProjector") {
                this.hasmodprojector = true;
            }

            if (p.type === "CloakGenerator") {
                this.hascloakgenerator = true;
            }
        }

        this.maxHP = this.hp;
        this.energy = this.storeEnergy;
        this.turnSpeed = this.turnSpeed / this.mass;
        this.maxSpeed = this.thrust / this.mass * 9;
        this.maxShield = this.shield;
        this.damageRatio = 1;
        this.jump = Math.min(this.maxJump / 500, 41 * this.jumpCount / this.mass) * 500;
        this.jumpDistance = this.jump;
        this.computeCenter();

        for (let i = 0; i < this.parts.length; i++) {
            if (typeof this.parts[i].init == "function") {
                this.parts[i].init();
            }
        }

        this.computeRadius();
        this.computeBoundary();
        this.weaponRange = 0;
        this.weaponDPS = 0;
        this.weaponDamage = 0;

        for (let i = 0; i < this.weapons.length; i++) {
            let w = this.weapons[i];
            w.applyBuffs();
            w.reloadTime = Math.ceil(w.reloadTime);
            if (w.reloadTime < 1) {
                w.reloadTime = 1;
            }
            if (w.range > this.weaponRange) {
                this.weaponRange = w.range;
            }
            let reachRange = w.range + v2.distance(w.pos, this.center);
            if (reachRange > this.maxRange) {
                this.maxRange = reachRange;
            }
            w.dps = w.damage / w.reloadTime;
            this.weaponDamage += w.damage;
            this.weaponDPS += w.dps;
        }

        this.weapons.sort(function (a, b) {
            return b.dps - a.dps;
        });
        this.mainWeapon = this.weapons[0];

        for (let i = 0; i < this.weapons.length; i++) {
            let w = this.weapons[i];
            w.turretNum = i;
        }
        this.moveEnergy = 0;

        for (let i = 0; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (part.thrust > 0) {
                this.moveEnergy += part.useEnergy;
            }
        }

        this.fireEnergy = 0;

        for (let i = 0; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (part.fireEnergy > 0) {
                this.fireEnergy += part.fireEnergy;
            }
        }
    }

    toSpecObj() {
        let part, partSpec;
        let specParts = [];
        for (let j = 0; j < this.parts.length; j++) {
            part = this.parts[j];
            partSpec = {
                pos: [part.pos[0], part.pos[1]],
                type: part.constructor.name,
                dir: part.dir,
                ghostCopy: false,
            };

            if (this.ghostCopy || part.ghostCopy) {
                partSpec.ghostCopy = true;
                if (part.decal) {
                    continue;
                }
            }
            specParts.push(partSpec);
        }
        return {
            parts: specParts,
            name: this.name,
            aiRules: this.aiRules
        };
    }

    toSpec() {
        return UnitUtils.toShort(this.toSpecObj());
    }

    computeCenter() {
        let ix, iy, j, len, mass, part, ref;
        ix = 0;
        iy = 0;
        mass = 0;
        ref = this.parts;
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
            mass += part.mass;
            ix += part.mass * part.pos[0];
            iy += part.mass * part.pos[1];
        }
        if (mass > 0) {
            this.center[0] = ix / mass;
            return this.center[1] = iy / mass;
        } else {
            this.center[0] = 0;
            return this.center[1] = 0;
        }
    }

    computeRadius() {
        let part, radius;
        for (let j = 0; j < this.parts.length; j++) {
            part = this.parts[j];
            if (part.decal) {
                continue;
            }
            radius = v2.distance(part.pos, this.center);
            if (radius > this.radius) {
                this.radius = radius; // + 40 if shield
            }
        }
    }

    extend(u: Float64Array, v: Float64Array, points: Float64Array[]): Float64Array[] {
        if (!(points != null ? points.length : void 0)) {
            return [];
        }
        let w = Unit.min_diffCross(points, u, v);
        let p1 = Unit.split(w, v, points);
        let p2 = Unit.split(u, w, points);
        let a: Float64Array[] = [];
        Array.prototype.push.apply(a, this.extend(w, v, p1));
        Array.prototype.push.apply(a, [w]);
        Array.prototype.push.apply(a, this.extend(u, w, p2));
        return a;
    }

    findPartPoints(parts: Part[]) {
        let p;
        let part;
        let result: Float64Array[] = [];
        for (let j = 0; j < parts.length; j++) {
            part = parts[j];
            if (!part.decal) {
                Array.prototype.push.apply(result, Unit.partPoints(part));
            }
        }


        for (let l = 0; l < result.length; l++) {
            p = result[l];
            v2.sub_r(p, this.center);
        }
        return result;
    }

    computeBoundary() {
        Sim.Instance.timeStart("computeBoundary");
        let points: Float64Array[] = this.findPartPoints(this.parts);

        let u = Unit.min(points);
        let v = Unit.max(points);

        let left = Unit.split(u, v, points);
        let right = Unit.split(v, u, points);

        this.boundPointsLocal = [];

        // @ts-ignore Float64Array is array
        Array.prototype.push.apply(this.boundPointsLocal, v);
        Array.prototype.push.apply(this.boundPointsLocal, this.extend(u, v, left));
        // @ts-ignore Float64Array is array
        Array.prototype.push.apply(this.boundPointsLocal, u);
        Array.prototype.push.apply(this.boundPointsLocal, this.extend(v, u, right));

        Sim.Instance.timeEnd("computeBoundary");
    }


    toWorld(from: Float64Array) {
        let p = v2.create(from);
        v2.rotate_r(p, this.rot + Math.PI);
        return v2.add_r(p, this.pos);
    }

    getBoundPoints(): Float64Array[] {
        if (!this.boundPoints) {
            Sim.Instance.timeStart("computeBoundPoints");
            let results = [];
            // @ts-ignore
            for (let j = 0; j < this.boundPointsLocal.length; j++) {
                // @ts-ignore
                results.push(this.toWorld(this.boundPointsLocal[j]));
            }
            this.boundPoints = results;
            Sim.Instance.timeEnd("computeBoundPoints");
        }
        // @ts-ignore
        return this.boundPoints;
    }


    applyDamage(d: number, damager: Thing) {
        if (damager) {
            this.lastDamager = damager;
        }
        this.shield -= d;
        if (this.shield < 0) {
            this.hp += this.shield;
            this.shield = 0;
        }
    }

    applyEnergyDamage(d: number) {
        this.energy -= d;
    }

    applyBurnAmount(d: number) {
        this.maxBurn = (this.hp + this.shield) * 1.0;
        if (this.burn < this.maxBurn) {
            this.burn += d;
            if (this.burn > this.maxBurn) {
                this.burn = this.maxBurn;
            }
        }
    }

    postDeath() {
        for (let j = 0; j < this.parts.length; j++) {
            this.parts[j].postDeath();
        }
        Sim.Instance.deaths += 1;
    }

    createDebree() {
        let exp, j, len, part;

        for (j = 0, len = this.parts.length; j < len; j++) {
            part = this.parts[j];
            if (Math.random() < .5 || part.decal) {
                continue;
            }
            exp = new Debree();
            if (part.stripe) {
                exp.image = "parts/gray-" + part.image;
            } else {
                exp.image = "parts/" + part.image;
            }
            exp.z = this.z + (Math.random() - 0.5) * .01;
            exp.pos = new Float64Array([0, 0]);
            part.computeWorldPos();
            v2.set(part.worldPos, exp.pos);
            v2.set(this.vel, exp.vel);
            exp.vel[0] += (part.worldPos[0] - this.pos[0]) * .1 + (Math.random() - 0.5);
            exp.vel[1] += (part.worldPos[1] - this.pos[1]) * .1 + (Math.random() - 0.5);
            exp.rot = this.rot;
            exp.vrot = Math.random() - 0.5;
            intp.particles[exp.id] = exp;
        }
    }

    gotoAndStop(goto: Float64Array) {
        return this.setOrder({
            type: "Move",
            dest: goto,
            noStop: true,
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            range: 0,
            // @ts-ignore
            target: undefined,
            targetId: 0
        });
    }

    gotoNoStop(goto: Float64Array) {
        return this.setOrder({
            type: "Move",
            dest: goto,
            noStop: true,
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            range: 0,
            // @ts-ignore
            target: undefined,
            targetId: 0
        });
    }

    cloaked() {
        return this.cloakFade > 0;
    }

    tick() {
        Sim.Instance.timeStart("unittick");
        let burnTick, exp, killer, l, p, part, penalty, speed, target;

        this.closestEnemies = [];
        this.closestFriends = [];
        this.closestEnemyBullets = [];

        Sim.Instance.timeStart("sorts");

        if (Sim.Instance.unitSpaces[Sim.otherSide(this.side)]) {
            Sim.Instance.unitSpaces[Sim.otherSide(this.side)].findInRange(this.pos,
                this.maxRange + Sim.Instance.maxRadius[Sim.otherSide(this.side)] + 500,
                // @ts-ignore because unitSpaces contains Unit
                (function (_this) {
                    return function (u: Unit) {
                        if (u.id !== _this.id) {
                            _this.closestEnemies.push(u);
                        }
                        return false;
                    };
                })(this));
        } else {
            Sim.Instance.timeEnd("sorts");
            Sim.Instance.timeEnd("unittick");
            return;
        }

        if (this.hasenergytransfer || this.hasmodprojector) {
            if (Sim.Instance.unitSpaces[this.side]) {
                Sim.Instance.unitSpaces[this.side].findInRange(this.pos, this.maxRange + Sim.Instance.maxRadius[this.side] + 500,
                    // @ts-ignore because unitSpaces contains Unit
                    (function (_this) {
                        return function (u: Unit) {
                            if (u.id !== _this.id) {
                                _this.closestFriends.push(u);
                            }
                            return false;
                        };
                    })(this));
            } else {
                Sim.Instance.timeEnd("sorts");
                Sim.Instance.timeEnd("unittick");
                return;
            }
        }

        if (this.haspointdefenseweapons) {
            if (Sim.Instance.bulletSpaces[Sim.otherSide(this.side)]) {
                Sim.Instance.bulletSpaces[Sim.otherSide(this.side)].findInRange(this.pos, this.maxRange + 100,
                    // @ts-ignore because bulletSpaces contains Unit
                    (function (_this) {
                        return function (b: Bullet) {
                            _this.closestEnemyBullets.push(b);
                            return false;
                        };
                    })(this));
            } else {
                Sim.Instance.timeEnd("sorts");
                Sim.Instance.timeEnd("unittick");
                return;
            }
        }

        if (this.hasturrets && this.hascloakgenerator) {
            this.closestEnemies.sort((function (_this) {
                return function (a: { pos: Float64Array; }, b: { pos: Float64Array; }) {
                    return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
                };
            })(this));
        }

        if (!this.disable_friends_check_and_follow || this.hasenergytransfer || this.hasmodprojector) {
            this.closestFriends.sort((function (_this) {
                return function (a: { pos: Float64Array; }, b: { pos: Float64Array; }) {
                    return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
                };
            })(this));
        }

        if (this.haspointdefenseweapons) {
            this.closestEnemyBullets.sort((function (_this) {
                return function (a: { pos: Float64Array; }, b: { pos: Float64Array; }) {
                    return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
                };
            })(this));
        }

        if (this.cloak > 0) {
            target = this.closestEnemy();
            if ((target != null) && CollisionUtils.closestDistance(this.getBoundPoints(), target.getBoundPoints()) < 100) {
                this.cloak = 0;
            }
        }
        Sim.Instance.timeEnd("sorts");

        Sim.Instance.timeStart("untilparts");
        if (!this.disable_friends_check_and_follow) {
            if (this.topOrderIs("Follow") &&
                // @ts-ignore
                (Sim.Instance.things[this.orders[0].targetId] != null) &&
                (Sim.Instance.ffa &&
                    // @ts-ignore
                    Sim.Instance.things[this.orders[0].targetId].side !== this.side ||
                    // @ts-ignore
                    Sim.Instance.things[this.orders[0].targetId].owner !== this.owner)) {
                // @ts-ignore
                this.target = Sim.Instance.things[this.orders[0].targetId];
            }
        }

        this.boundPoints = null;
        if (this.cooldown > 0) {
            this.cooldown -= 1;
            this.energy = -this.genEnergy * 2;
        } else if (this.cooldown <= 0) {
            this.energy = this.storeEnergy;
            this.cooldown = NaN;
        }

        this.slowed = false;
        if (this.warpIn < 1) {
            this.warpIn += 1 / 16;
        } else {
            this.warpIn = 1;
        }

        if (!this.forcecloak) {
            this.cloakFade = 0;
            if (this.cloak > 0) {
                speed = v2.mag(this.vel);
                if (speed > 1) {
                    this.cloak -= 0.20 / 16 * this.mass;
                }
                if (Sim.Instance.step % 16 === 0) {
                    this.cloak -= 0.01 * this.mass;
                }

                if (this.cloak > this.mass * .5) {
                    this.cloakFade = (this.cloak - this.mass * .5) / (this.mass * .5);
                }
            }
        } else {
            this.cloakFade = 1.27; // Leave one point of alpha
            this.cloak = this.mass;
        }

        if (this.energy < -this.genEnergy * 16 * 3) {
            this.energy = -this.genEnergy * 16 * 3;
        }
        this.energy += Unit.baseGenEnergy;

        Sim.Instance.timeEnd("untilparts");

        Sim.Instance.timeStart("parts");
        for (l = 0; l < this.parts.length; l++) {
            part = this.parts[l];
            part.computeWorldPos();
            if (part.genEnergy) {
                this.energy += part.genEnergy;
            }
            part.tick();
        }
        Sim.Instance.timeEnd("parts");

        Sim.Instance.timeStart("cooldown");
        if (this.energy > this.storeEnergy) {
            this.energy = this.storeEnergy;
        }

        if (this.shield > this.maxShield) {
            this.shield = this.maxShield;
        }

        if (this.target !== undefined && this.target !== null && this.target.dead) {
            this.target = null;
        }

        if (Sim.Instance.step % 16 === 0) {
            if (this.burn > 4) {
                if (this.hp < 4) {
                    this.burn = 0;
                }
                burnTick = this.burn * 0.03;
                this.applyDamage(burnTick, (this as Thing));
                this.burn -= burnTick;
            } else {
                this.burn = 0;
            }
        }

        //sim.timeStart("cooldowntick");
        if (isNaN(this.cooldown) && this.hp <= 0 && !this.dead) {
            exp = new ShipExplosion();
            exp.z = 1000;
            exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
            exp.vel = new Float64Array([0, 0]);
            exp.rot = 0;
            exp.radius = Math.max(this.mass / 5, 50);
            Sim.Instance.things[exp.id] = exp;
            this.dead = true;
            if (this.building) {
                //this.building.dead = true;
            }

            if (Sim.Instance.serverType === "IO") {
                p = Sim.Instance.players[this.owner];
                penalty = Math.round(p.maxMoney * Sim.Instance.deathPenalty);
                p.maxMoney = Math.max(p.maxMoney - penalty, Sim.Instance.defaultMoney);
                p.money = Math.min(p.money, p.maxMoney);
                if (this.lastDamager) {
                    killer = Sim.Instance.players[this.lastDamager.owner];
                    if (killer != null) {
                        killer.earnMoney(Math.round(this.cost * .5));
                        killer.maxMoney = Math.max(killer.maxMoney, killer.money);
                    }
                }
            }
        }

        //sim.timeEnd("cooldowntick");
        if (this.weapons.length > 0) {
            Sim.Instance.timeEnd("cooldown");
            Sim.Instance.timeEnd("unittick");
            return this.applyNearbyBuffs();
        }
        Sim.Instance.timeEnd("cooldown");
        Sim.Instance.timeEnd("unittick");
    };

    applyNearbyBuffs() {
        let j, l, len, len1, u;
        let buffs = {
            weaponRange: 1,
            weaponRangeFlat: 0,
            weaponDamage: 1,
            weaponEnergyDamage: 1,
            weaponSpeed: 1,
            weaponReload: 1,
            weaponEnergy: 1,
            noOverkill: false
        };


        for (j = 0, len = this.closestFriends.length; j < len; j++) {
            u = this.closestFriends[j];
            if (u.projector && v2.distance(this.pos, u.pos) < ModProjector.range) {
                buffs.weaponRange *= UnitUtils.applyEffect(u.projector.weaponRange, u.effect);
                buffs.weaponRangeFlat += u.projector.weaponRangeFlat * u.effect;
                buffs.weaponDamage *= UnitUtils.applyEffect(u.projector.weaponDamage, u.effect);
                buffs.weaponEnergyDamage *= UnitUtils.applyEffect(u.projector.weaponDamage, u.effect);
                buffs.weaponSpeed *= UnitUtils.applyEffect(u.projector.weaponSpeed, u.effect);
                buffs.weaponReload *= UnitUtils.applyEffect(u.projector.weaponReload, u.effect);
                buffs.weaponEnergy *= UnitUtils.applyEffect(u.projector.weaponEnergy, u.effect);
                buffs.noOverkill = buffs.noOverkill || u.projector.noOverkill;
            }
        }

        for (l = 0, len1 = this.weapons.length; l < len1; l++) {
            this.weapons[l].applyAdditionalBuffs(buffs);
        }

    }

    canBuildHere() {
        return true;
    }

    move(): void {
        this.movement();
        if (this.orders.length === 0) {
            this.idleAI();
        }
    }

    movement() {
        this.runOrders();
        v2.scale_r(this.vel, Unit.stopFriction);
        let current_speed = v2.mag(this.vel);
        if (current_speed < .01) {
            this.vel[0] = 0;
            this.vel[1] = 0;
        } else {
            v2.add_r(this.pos, this.vel);
        }
        let s = 20000;
        if (this.pos[0] > s) {
            this.pos[0] = s;
        }
        if (this.pos[0] < -s) {
            this.pos[0] = -s;
        }
        if (this.pos[1] > s) {
            this.pos[1] = s;
        }
        if (this.pos[1] < -s) {
            this.pos[1] = -s;
        }
    }

    lookAt(goto: Float64Array) {
        let rot;
        let _where: Float64Array = new Float64Array([0, 0]);
        v2.sub(goto, this.pos, _where);
        rot = v2.angle(_where);
        if (rot != null) {
            this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
        }
    }

    moveTo(goto: Float64Array, noStop: boolean) {
        let arriveIn, c, curspeed, force, j, len, part, ratio, ref, rot, stopSpeed, turnIn;
        let _where = new Float64Array([0, 0]);
        if (noStop == null) {
            noStop = false;
        }
        if (goto == null) {
            return;
        }
        v2.sub(goto, this.pos, _where);
        this.gotoDistance = v2.mag(_where);
        rot = v2.angle(_where);
        if (rot != null) {
            this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
        }
        if (this.holdPosition) {
            return;
        }
        arriveIn = this.gotoDistance / this.maxSpeed;
        turnIn = Math.abs(Unit.angleBetween(this.rot, rot)) / this.turnSpeed;
        curspeed = v2.mag(this.vel);
        this.stopDistance = 0;
        if (!noStop) {
            stopSpeed = curspeed;
            c = 25;
            while (stopSpeed > 1 && c > 0) {
                this.stopDistance += stopSpeed;
                stopSpeed = stopSpeed * Unit.stopFriction;
                c -= 1;
            }
        }
        if (turnIn < arriveIn * .2 && this.gotoDistance > this.stopDistance && this.energy > 0) {
            force = 0;
            ref = this.parts;
            for (j = 0, len = ref.length; j < len; j++) {
                part = ref[j];
                if (part.thrust) {
                    if (part.useEnergy < this.energy) {
                        ratio = 1;
                    } else {
                        ratio = this.energy / part.useEnergy;
                    }
                    force += part.thrust * ratio;
                    this.energy -= part.useEnergy * ratio;
                }
            }
            v2.pointTo(_where, this.rot);
            v2.scale_r(_where, force / this.mass);
            v2.add_r(this.vel, _where);
        }
    }

    closestEnemy() {
        let enemy, j, len, ref, u;
        enemy = null;
        for (j = 0, len = this.closestEnemies.length; j < len; j++) {
            u = this.closestEnemies[j];
            if (u.side !== this.side) {
                enemy = u;
                break;
            }
        }
        return enemy;
    }

    closestUncloaked(range: number) {
        let u;
        let enemyC = null;
        for (let j = 0; j < this.closestEnemies.length; j++) {
            u = this.closestEnemies[j];
            if (u.side !== this.side) {
                if (u.cloaked() && !enemyC) {
                    enemyC = u;
                } else {
                    return u;
                }
            }
        }
        return enemyC;
    }

    idleAI() {
        let dist, lookAt, rot, target;
        if (this.target) {
            this.softTarget = this.target;
        } else if (Sim.Instance.step % 16 === 0) {
            this.softTarget = null;
            target = this.closestUncloaked(1000);
            if (target &&
                v2.distance(target.pos, this.pos) < this.weaponRange * 3) {
                this.softTarget = (target as Thing);
            }
        }
        if (this.softTarget && this.minArc < 360) {
            lookAt = this.softTarget.pos;
            let _where: Float64Array = new Float64Array(2);
            v2.sub(lookAt, this.pos, _where);
            rot = v2.angle(_where);
            if (Math.abs(this.rot - rot) > .02) {
                dist = v2.mag(_where);
                this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
            }
        }
    }

    draw() {
        let a, color, l, len1, part, partNum, r, ref1, s, t, value;
        if (this.dead) {
            return;
        }

        for (let j = 0; j < this.parts.length; j++) {
            this.parts[j].preDraw();
            this.parts[j].computeWorldPos();
        }

        /*
        drawLine = (from, to) ->
            offset = v2.create()
            v2.sub(to, from, offset)
            rot = v2.angle(offset)
            d = v2.mag(offset) / 380
            v2.scale(offset, .5)
            v2.add(offset, from)
            baseAtlas.drawSpirte("img/laser01.png", offset, [.2, d], rot, [0, 255, 0, 255]);

        for i in [0 ... @boundPoints.length]
            j = (i + 1) % @boundPoints.length
            drawLine(@boundPoints[i], @boundPoints[j])
         */
        if (this.maxShield > 0) {
            s = this.warpIn * 2 - 1;
            if (s > 0) {
                color = [this.color[0], this.color[1], this.color[2], 255 * this.shield / this.maxShield * s];
                r = (this.radius + 40) / 255;
                baseAtlas.drawSprite("img/point02.png", this.pos, [r, r], 0, color);
            }
        }
        if (this.warpIn < 1) {
            this.warpIn += 1 / 60;
        }
        ref1 = this.parts;
        for (partNum = 0, len1 = ref1.length; partNum < len1; partNum++) {
            part = ref1[partNum];
            value = part.pos[1] / 700 - .5 + this.warpIn;
            if (value > 0) {
                part.draw();
            } else if (value > -0.2) {
                a = -Math.sin(value / Math.PI * 50);
                baseAtlas.drawSprite("img/unitBar/fire02.png", part.worldPos, [1, 1], 0, [255, 255, 255, 255 * a]);

            }
        }
        if (this.energy / this.storeEnergy < .05) {
            t = Math.abs(Math.sin(Date.now() / 300));
            baseAtlas.drawSprite("img/unitBar/energy1.png", [this.pos[0], this.pos[1] + 100 + this.radius], [1, 1], 0, [255, 100, 100, t * 200]);
        }
        if (control.debug && (this._pos2 != null) && this._pos) {
            a = 16;
            let _offset = new Float64Array([0, 0]);
            _offset[0] = this._pos2[0] + (this._pos[0] - this._pos2[0]) * a;
            _offset[1] = this._pos2[1] + (this._pos[1] - this._pos2[1]) * a;
            baseAtlas.drawSprite("img/pip1.png", this._pos, [1, 1], 0, [0, 255, 0, 255]);
            baseAtlas.drawSprite("img/pip1.png", this.pos, [1, 1], 0, [255, 255, 0, 255]);
            return baseAtlas.drawSprite("img/pip1.png", this._pos2, [1, 1], 0, [255, 0, 0, 255]);
        }
    }

    createFlameEffect() {
        let exp, part, s;
        if (Math.random() < .8) {
            return;
        }
        part = this.parts[Math.floor(Math.random() * this.parts.length)];
        if (part) {
            exp = new FlameBulletGhost();
            exp.main = false;
            exp.image = "parts/fireFlame" + "1.png"; //(chooseInt(1, 4)) + ".png";
            exp.z = this.z + (Math.random() - 0.5) * .01;
            exp.pos = new Float64Array([0, 0]);
            v2.set(part.worldPos, exp.pos);
            exp.vel[0] = (Math.random() - 0.5) - .5;
            exp.vel[1] = (Math.random() - 0.5) - .5;
            s = .3 + .4 * Math.random();
            exp.size = [s, s];
            exp.maxRadius = 300;
            exp.radius = 10;
            exp.rot = (Math.random() - 0.5) * Math.PI * 2;
            exp.vrot = 0;
            exp.maxLife = 100;
            exp._pos = v2.create(exp.pos);
            exp._pos2 = v2.create(exp.pos);
            exp._rot = exp.rot;
            exp._rot2 = exp.rot;
            intp.particles[exp.id] = exp;
        }
    }

    clientTick() {
        let cloakOn, cloakRange, j, len, ref, w;
        ref = this.weapons;
        for (j = 0, len = ref.length; j < len; j++) {
            w = ref[j];
            if (typeof w.clientTick === "function") {
                w.clientTick();
            }
        }
        if (this.burn > 0) {
            this.createFlameEffect();
        }
        this.cloakFade = 0;
        if (this.cloak > 0) {
            cloakOn = this.mass * .5;
            if (this.cloak > cloakOn) {
                cloakRange = this.mass - cloakOn;
                this.cloakFade = (this.cloak - cloakOn) / cloakRange;
            }
        }
    }

    thumb() {
        let image_data_url, j, k, len, part, ref, ref1, scale;
        k = JSON.stringify(this.spec) + this.color;
        // @ts-ignore
        if (!this.thumb_cache[k]) {
            baseAtlas.startOffscreenFrame();
            scale = this.radius / 64 * 1.5;
            if (scale < 1) {
                scale = 1;
            }
            baseAtlas.beginSprites([0, 0], scale, [0, 0, -baseAtlas.rtt.width, baseAtlas.rtt.height]);
            ref = this.parts;
            for (j = 0, len = ref.length; j < len; j++) {
                part = ref[j];
                part.working = true;
            }
            this.draw();
            if (((ref1 = this.aiRules) != null ? ref1.length : void 0) > 0) {
                baseAtlas.drawSprite("img/pip1.png", [-scale * 64, -scale * 64], [scale, scale], 0, [0, 0, 0, 255]);
            }
            baseAtlas.finishSprites(false);
            image_data_url = baseAtlas.endOffscreenFrame();
            // @ts-ignore
            this.thumb_cache[k] = image_data_url;
            return image_data_url;
        }
        // @ts-ignore
        return this.thumb_cache[k];
    }

    drawSelection() {
        let alpha, angle, distance, i, j, len, order, orders, prev, target;
        this.drawHPBar();
        this.drawEnergyBar();
        if (this.holdPosition) {
            baseAtlas.drawSprite("img/unitBar/circle.png", this.pos, [1, 1], 0, [255, 255, 255, 100]);
        }
        while (this.preOrders.length > 0 && this.preOrders[0].id < this.onOrderId) {
            this.preOrders.shift();
        }
        if (!battleMode.shiftOrder && battleMode.ordering) {
            return;
        }
        if (this.owner === commander.number) {
            prev = this.pos;
            orders = this.preOrders;
            for (i = j = 0, len = orders.length; j < len; i = ++j) {
                order = orders[i];
                if (order.type === "Move") {
                    if (order.dest == null) {
                        continue;
                    }
                    distance = v2.distance(order.dest, prev);
                    if (i === 0 && distance < 255 + 10) {
                        alpha = distance - 10;
                    } else {
                        alpha = 255;
                    }
                    angle = v2.angle(v2.sub(order.dest, prev, v2.create_r()));
                    if (orders.length - 1 === i) {
                        baseAtlas.drawSprite("img/arrow01.png", order.dest, [.9, .9], angle, [255, 255, 255, alpha]);
                    } else {
                        baseAtlas.drawSprite("img/arrow01.png", order.dest, [.8, .8], angle, [255, 255, 255, alpha]);
                    }
                    prev = order.dest;
                } else if (order.type === "Follow") {
                    target = intp.things[order.targetId];
                    if (target != null) {
                        baseAtlas.drawSprite("img/unitBar/target.png", target.pos, [1, 1], 0, [255, 0, 0, 100]);
                    }
                }
            }
        }
    }

    drawEnergyBar() {
        let color, healthScale, i, j, max, number, pipScale, ref, s;
        max = this.storeEnergy;
        if (max < 30000) {
            healthScale = 1000;
            pipScale = .5;
        } else {
            healthScale = 10000;
            pipScale = 1;
        }
        number = Math.floor(this.storeEnergy / healthScale);

        for (i = j = 0, ref = number; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            s = 20;
            let _pipPos = new Float64Array([0, 0]);
            _pipPos[0] = (i * s - number * s / 2 - s / 2) * pipScale;
            _pipPos[1] = 100;
            if (i < this.energy / healthScale) {
                color = [169, 208, 232, 255];
            } else {
                color = [20, 20, 20, 50];
            }
            v2.add(this.pos, _pipPos, _pipPos);
            baseAtlas.drawSprite("img/unitBar/energyPip.png", _pipPos, [pipScale, pipScale], 0, color);
        }
    }


    drawHPBar() {
        let burnColor, color, healthScale, i, j, max, number, pipScale, ref, s;
        burnColor = Colors.blackOrWhite(this.color);
        max = this.maxHP + this.maxShield;
        if (max < 300) {
            healthScale = 10;
            pipScale = .5;
        } else {
            healthScale = 100;
            pipScale = 1;
        }
        number = Math.floor(this.maxHP / healthScale) + Math.floor(this.maxShield / healthScale);

        for (i = j = 0, ref = number; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            s = 20;
            let _pipPos = new Float64Array([0, 0]);
            _pipPos[0] = (i * s - number * s / 2 - s / 2) * pipScale;
            _pipPos[1] = 60;
            if (i < Math.floor(this.maxHP / healthScale)) {
                if (i < this.hp / healthScale) {
                    color = [this.color[0], this.color[1], this.color[2], 255];
                } else {
                    color = [20, 20, 20, 50];
                }
                if (i < this.cloak / this.mass * this.maxHP / healthScale) {
                    color[3] = 100;
                } else if (this.cloakFade > 0) {
                    color[3] = 175;
                }
            } else {
                if (i < Math.floor(this.maxHP / healthScale) + this.shield / healthScale) {
                    color = [this.color[0], this.color[1], this.color[2], 100];
                } else {
                    color = [0, 0, 0, 50];
                }
            }
            v2.add(this.pos, new Float64Array(_pipPos), _pipPos);
            baseAtlas.drawSprite("img/pip1.png", _pipPos, [pipScale, pipScale], 0, color);
            if (this.burn * 1 / healthScale > i) {
                baseAtlas.drawSprite("img/unitBar/flame.png", _pipPos, [pipScale * .25, pipScale * .25], Math.PI, burnColor);
            }
        }
    }

    addOrder(order: {
        type: string;
        dest: Float64Array;
        noStop: boolean;
        targetId: number;
        rally: boolean;
        ai: boolean;
        id: number;
        range: number;
        noFinish: boolean;
        begun: boolean;
        pos: Float64Array;
        target: Unit;
        distance: number;
    }) {
        if (this.orders.length < 50) {
            return this.orders.push(order);
        }
    }

    setOrder(order: {
        type: string;
        dest: Float64Array;
        noStop: boolean;
        targetId: number;
        rally: boolean;
        ai: boolean;
        id: number;
        range: number;
        noFinish: boolean;
        begun: boolean;
        pos: Float64Array;
        target: Unit;
        distance: number;
    }) {
        this.orders = [order];
        this.target = null;
    }

    aiOrder(order: {
        type: string;
        dest: Float64Array;
        noStop: boolean;
        targetId: number;
        rally: boolean;
        ai: boolean;
        id: number;
        range: number;
        noFinish: boolean;
        begun: boolean;
        pos: Float64Array;
        target: Unit;
        distance: number;
    }) {

        order.ai = true;

        if (this.orders.length > 0 && (this.orders[0].ai || this.orders[0].rally)) {
            this.orders[0] = order;
        } else {
            this.orders.unshift(order);
        }
    }

    stopAi() {
        if (this.orders.length && this.orders[0].ai) {
            this.orders.shift();
            return this.onOrderId += 1;
        }
    }

    hasHumanOrder() {
        let j, len, order, ref;
        ref = this.orders;
        for (j = 0, len = ref.length; j < len; j++) {
            order = ref[j];
            if (!order.ai) {
                return true;
            }
        }
        return false;
    }

    giveOrder(order: {
        type: string;
        dest: Float64Array;
        noStop: boolean;
        targetId: number;
        rally: boolean;
        ai: boolean;
        id: number;
        range: number;
        noFinish: boolean;
        begun: boolean;
        pos: Float64Array;
        target: Unit;
        distance: number;
    }, additive: any) {
        if (additive) {
            return this.addOrder(order);
        } else {
            return this.setOrder(order);
        }
    }

    topOrderIs(type: string) {
        return this.orders.length > 0 && this.orders[0].type === type;
    }

    runOrders() {
        if (this.dead || this.orders.length === 0) {
            return;
        }
        while (this.orders.length > 0) {
            this.onOrderId = this.orders[0].id;
            let running = this.runOrder(this.orders[0]);
            if (running) {
                break;
            }
            this.orders.shift();
            this.onOrderId += 1;
        }
    }

    runOrder(order: {
        type: string;
        dest: Float64Array;
        noStop: boolean;
        targetId: number;
        rally: boolean;
        ai: boolean;
        id: number;
        range: number;
        noFinish: boolean;
        begun: boolean;
        pos: Float64Array;
        target: Unit;
        distance: number;
    }) {
        let canTarget, dest, dist;
        let pos;
        let range, ref, target;
        switch (order.type) {
            case "Follow":
                target = Sim.Instance.things[order.targetId];
                if (!target || target.dead) {
                    this.target = null;
                    return false;
                }

                canTarget = target.side !== this.side || Sim.Instance.ffa && target.owner !== this.owner;
                if (canTarget) {
                    this.target = target;
                }

                if (!order.range) {
                    if (this.warhead) {
                        order.range = 0;
                    } else {
                        if (canTarget && this.weapons.length > 0) {
                            order.range = this.weaponRange * .9;
                        } else {
                            order.range = (this.radius + target.radius) * 1.5;
                        }
                    }
                }
                range = order.range;
                if (canTarget && this.weapons.length > 0) {
                    range = Math.max(0, 0.9 * this.mainWeapon.range * (this.mainWeapon.bulletSpeed - v2.mag(target.vel)) / this.mainWeapon.bulletSpeed);
                }
                if (target.cloak > 0 && target.cloaked() && canTarget) {
                    range = Math.min(order.range, 50);
                }
                return this.moveWithinRange(target.pos, range, order.noStop, order.noFinish) || this.orders.length === 1 || canTarget || !(this.target = null);
            case "Move":
                if (order.dest == null) {
                    return false;
                }
                range = (ref = order.range) != null ? ref : 0;
                if (this.orders.length > 1) {
                    range += this.radius * 3;
                }
                if (order.begun) {
                    if (this.gotoDistance <= this.stopDistance) {
                        return false;
                    }
                } else {
                    order.begun = true;
                }
                return this.moveWithinRange(order.dest, range, order.noStop, order.noFinish);
            case "Flee":
                pos = order.pos;
                if (!pos) {
                    pos = order.target.pos;
                }
                if (!order.distance) {
                    order.distance = 10000;
                }
                dist = v2.distance(this.pos, pos);
                if (dist > order.distance) {
                    return order.noFinish;
                }
                dest = v2.create_r();
                v2.sub(this.pos, pos, dest);
                v2.scale_r(dest, order.distance / v2.mag(dest));
                v2.add_r(dest, this.pos);
                return this.moveWithinRange(dest, 0, order.noStop, order.noFinish);
            default:
                Sim.say("invalid order" + JSON.stringify(order));
        }
        return true;
    }

    selfDestruct() {
        if (Sim.Instance.serverType === "IO") {
            this.cooldown = 16 * (this.cost / 300 + 2);
        }
        this.hp = 0;
    }

    toggleHoldPosition() {
        this.holdPosition = !this.holdPosition;
    }

    stopAndClearOrders() {
        if (this.orders.length > 0) {
            this.onOrderId = Utils.last(this.orders).id + 1;
            this.orders = [];
        }
        this.holdPosition = false;
        this.target = null;
    }

    moveWithinRange(pos: Float64Array, range: number, noStop: boolean, noFinish: boolean) {
        let dist, jumpDist, jumpVec, needDist;
        dist = v2.distance(this.pos, pos);
        if (dist < range || (noStop && dist <= this.maxSpeed)) {
            if (noStop || !this.shouldLookAt(pos)) {
                this.stopDistance = 0;
                this.gotoDistance = Number.MAX_SAFE_INTEGER;
                return false;
            }
            return true;
        }
        if (this.jump > this.jumpDistance &&
            this.energy > JumpEngine.useEnergy * this.mass &&
            !this.holdPosition) {
            jumpDist = this.jumpDistance;
            needDist = v2.distance(this.pos, pos) - Math.max(this.stopDistance, 100);
            jumpDist = Math.min(jumpDist, needDist);
            if (jumpDist < this.jumpDistance) {
                this.energy -= JumpEngine.useEnergy * this.mass;
                this.cloak -= .25 * this.mass;
                jumpVec = v2.create_r();
                v2.sub(pos, this.pos, jumpVec);
                v2.add_r(this.pos, jumpVec);
                this.warpIn = 0;
                this.vel[0] /= 100;
                this.vel[1] /= 100;
                this.jump = 0;
                this.rot = v2.angle(jumpVec);
                return false;
            } else {
                this.moveTo(pos, noStop);
            }
            return true;
        }
        this.moveTo(pos, noStop);
        return true;
    }

    shouldLookAt(pos: Float64Array) {
        let dif, rot;
        dif = v2.create_r();
        v2.sub(pos, this.pos, dif);
        if (v2.mag(dif) < 0.1) {
            return false;
        }
        rot = v2.angle(dif);
        if (Math.abs(rot - this.rot) < 0.1) {
            return false;
        } else {
            this.lookAt(pos);
            return true;
        }
    }
}

import JumpEngine = Parts.JumpEngine;
import ModProjector = Parts.ModProjector;
import EnergyTransfer = Parts.EnergyTransfer;
import StasisField = Parts.StasisField;
import {Bullets} from "./bullets";
import FlameBulletGhost = Bullets.FlameBulletGhost;
import {Explosions} from "./explosions";
import ShipExplosion = Explosions.ShipExplosion;
import Bullet = Bullets.Bullet;
import CloakGenerator = Parts.CloakGenerator;