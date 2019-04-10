import {v2} from "./4src_maths";
import {Sim} from "./6src_sim";
import {Bullet, Debree, HitExplosion, Particle, Player, ShipExplosion, Thing, Trail} from "./94src_things";
import {Utils} from "./993src_utils";
import {Server} from "../server";
import {Colors} from "./992src_colors";
import {EnergyTransfer, FlameBulletGhost, JumpEngine, ModProjector, StasisField} from "./96src_parts";
import {baseAtlas, battleMode, commander, control, intp} from "./0dummy";
import {CollisionUtils} from "./991src_collision";


export class UnitUtils {
    static readonly legacyParts = [null, "Mount360", "Mount180", "Mount270", "Mount90", "Mount30", "HArmor2x2", "HArmor1x2", "HArmor1x1", "HArmor2x1", "HArmor1x1Angle", "UArmor1x1", "UArmor1x2", "UArmor2x1", "UArmor1x1Angle", "Reactor2x2", "Reactor1x2", "Reactor1x1", "Reactor2x1", "EnergyTransfer", "ShieldGen2x2", "ShieldGen2x1", "Battery1x2", "Battery1x1", "Battery2x1", "Battery2x2", "Engine01", "Engine02", "Engine03", "Engine04", "Engine05", "Engine06", "Engine07", "HArmor2x2Front1", "HArmor2x2Front2", "HArmor1x2Font1", "HArmor1x2Front2", "HArmor2x2Back1", "HArmor2x2Back2", "HArmor1x2Back1", "HArmor1x2Back2", "Wing1x2", "Wing2x2", "Wing2x1", "Wing1x1Notch", "Wing1x1Angle", "Wing1x1Round", "PDTurret", "HeavyPDTurret", "RingTurret", "TorpTurret", "MissileTurret", "ArtilleryTurret", "PlasmaTurret", "LightBeamTurret", "HeavyBeamTurret", "FlackTurret", "SniperGun", "EMPGun", "AOEWarhead", "TargetingMod", "DamageMod", "ReloaderMod", "BulletSpeedMod", "Ai1", "OverKillAi", "Ai3", "Ai4", "ShapedWarhead", "BombGun", "HArmor1x1AngleBack", "UArmor1x1AngleBack", "HArmor2x2Angle", "HArmor2x2AngleBack", "VArmor1x2SideBar", "VArmor1x2SideBarFilled", "VArmor1x2IBeam", "VArmor1x2Corner4", "VArmor1x2End", "VArmor1x1Corner1", "VArmor1x1Corner2", "VArmor1x1Corner3", "VArmor1x1Hook", "VArmor1x1CornerBack", "Mount360Micro", "AutoTurret", "TeslaTurret", "WavePullTurret", "ShieldGen1x1", "WavePushTurret", "CloakGenerator", "SymbolDecal1", "SymbolDecal2", "SymbolDecal3", "SymbolDecal4", "SymbolDecal5", "SymbolDecal6", "SymbolDecal7", "SymbolDecal8", "SymbolDecal9", "SymbolDecal10", "SymbolDecal11", "SymbolDecal12", "SymbolDecal13", "SymbolDecal14", "SymbolDecal15", "SymbolDecal16", "SymbolDecal17", "SymbolDecal18", "SymbolDecal19", "SymbolDecal20", "SymbolDecal21", "SymbolDecal22", "SymbolDecal23", "SymbolDecal24", null, null, null, null, null, "UArmor2x2", "UArmor1x2Notch1", "UArmor1x2Notch2", "UArmor1x1Notch1", "UArmor1x1Notch2", "UArmor1x1Spike", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "VArmor2x2", "VArmor1x2", "VArmor1x1", "VArmor1x1Angle", "VArmor2x2Angle", "VArmor2x2Curve", "VArmor1x1Curve", null, null, null, "HAarmor1x2Curved", "HArmor2x2Curved", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Stripe1x1", "Stripe1x1Corner", "Stripe1x2", "Stripe2x1", "Stripe2x2", "Stripe2x2Corner", "Stripe2x2Round", "StripeDouble2x1", "StripeDouble2x2", null, null, null, null, null, null, null, null, null, null, null, "LetterA", "LetterB", "LetterC", "LetterD", "LetterE", "LetterF", "LetterG", "LetterH", "LetterI", "LetterJ", "LetterK", "LetterL", "LetterM", "LetterN", "LetterO", "LetterP", "LetterQ", "LetterR", "LetterS", "LetterT", "LetterU", "LetterV", "LetterW", "LetterX", "LetterY", "LetterZ", "LetterPound", "LetterDot", null, null, "Letter0", "Letter1", "Letter2", "Letter3", "Letter4", "Letter5", "Letter6", "Letter7", "Letter8", "Letter9", "DroneBody", "Mount10Range", "FlameTurret", "StasisField", "Faction2", "Faction3", "Faction4", "Faction5", "Faction6", "Faction7", "Faction1", null, null, null, null];

    static toShort(spec: { parts: { pos: any[]; type: any; dir: any; ghostCopy: boolean; }[]; name: string; aiRules: any; }) {
        if (!spec) {
            return null;
        }
        return JSON.stringify(spec);
    };

    static fromShort(rawShort: string) {
        let bin, e, i, j, ref, short, spec, type;
        if (!rawShort) {
            return {
                parts: []
            };
        }
        try {
            if (typeof rawShort === "object") {
                // @ts-ignore
                if (rawShort.parts != null) {
                    return rawShort;
                }
            }
            if (rawShort[0] === "{") {
                spec = JSON.parse(rawShort);
                if (!spec.parts) {
                    spec = {
                        parts: []
                    };
                }
                return spec;
            } else {
                short = decodeURIComponent(rawShort);
                bin = new Uint8Array(atob(short).split("").map(function (c) {
                    return c.charCodeAt(0);
                }));
                spec = [];
                for (i = j = 0, ref = bin.length / 3; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                    type = UnitUtils.legacyParts[bin[i * 3 + 2]];
                    if (type) {
                        spec.push({
                            pos: [(bin[i * 3 + 0] - 20) * 10, (bin[i * 3 + 1] - 20) * 10],
                            type: type
                        });
                    }
                }
                return {
                    parts: spec
                };
            }
        } catch (error) {
            e = error;
            console.log("Can't decode ship", e, rawShort);
        }
        return {
            parts: []
        };
    }

    static specCost(spec: { parts: Part[]; }) {
        let cost, j, len, part, partCls;
        cost = 0;
        if (!Array.isArray(spec)) {
            // @ts-ignore
            spec = UnitUtils.fromShort(spec);
        }
        for (j = 0, len = spec.parts.length; j < len; j++) {
            part = spec.parts[j];
            if (partCls) {
                cost += part.cost;
            }
        }
        return cost;
    }
}

export class Unit extends Thing {
    parts: any;
    maxRange: number;
    spec: any;
    slice = [].slice;
    id: number;
    side: string;
    color: number[];
    hasProp = {}.hasOwnProperty;
    thumb_cache = {};
    name = "";
    canCapture = true;
    multiShoot = false;
    unit = true;
    maxHP = 10;
    buildHP = 0;
    buildSpeed = 10;
    buildRadius = 500;
    radius = 60;
    fixed = false;
    maxSpeed = 100;
    turnSpeed = 1;
    cloak = 0;
    burn = 0;
    jump = 0;
    limitBonus = 0;
    maxJump = 500;
    cost = 100;
    size = [1, 1];
    building = false;
    holdPosition = false;
    stopFriction = 0.9;
    underPlayerControl = false;
    center: Float64Array;
    z: number;
    dead: boolean;
    weapons: any[];
    pos: Float64Array;
    active: boolean;
    cooldown: number;
    preOrders: any[];
    vel: Float64Array;
    rot: number;
    owner: any;
    number: number;
    minArc: number;
    aiRules: any;
    storeEnergy: number;
    genEnergy: any;
    baseGenEnergy: number;
    energy: number;
    mass: number;
    hp: number;
    speed: number;
    jumpCount: number;
    jumpDistance: number;
    closestEnemyBullets: any[];
    closestFriends: any[];
    closestEnemies: any[];
    orders: any[];
    testStep: any[];
    testIntp: any[];
    warpIn: number;
    weaponArc: number;
    shield: number;
    genShield: number;
    data: any;
    thrust: number;
    weaponRange: number;
    damageRatio: number;
    weaponDamage: number;
    weaponDPS: number;
    maxShield: number;
    fireEnergy: number;
    moveEnergy: number;
    mainWeapon: any;
    ghostCopy: boolean;
    maxBurn: number;
    lastDamager: any;
    boundPoints: any;
    cloakFade: number;
    stasisRange: number;
    slowed: boolean;
    boundPointsLocal: any[];
    target: any;
    warhead: any;
    stopDistance: any;
    gotoDistance: any;
    onOrderId: number;
    energyCaster: boolean;
    warheadTest: number;
    shapeDamage: any;
    commandPoint: boolean = false;
    softTarget: any;
    effect: number;
    export: any;
    projector: any;
    _pos: number[];
    _pos2: number[];

    constructor(spec1: string) {
        super();
        this.spec = spec1;
        this.closestUncloaked.prototype.bind(this);
        this.closestEnemy.prototype.bind(this);
        if (this.spec === null) {
            this.spec = [];
        }

        this.side = "0";
        this.color = [255, 0, 0, 255];
        this.center = v2.create(null);
        this.parts = [];
        this.weapons = [];
        this.fromSpec(this.spec);
        this.dead = false;
        this.z = Math.random();
        this.pos = v2.create(null);
        this.vel = v2.create(null);
        this.active = true;
        this.rot = 0;
        this.warpIn = 0;
        this.cooldown = 0;
        this.testIntp = [];
        this.testStep = [];
        this.orders = [];
        this.preOrders = [];
        this.closestEnemies = [];
        this.closestFriends = [];
        this.closestEnemyBullets = [];
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
            size = [part.size[0], part.size[1]];
        } else {
            size = [part.size[1], part.size[0]];
        }
        v2.scale(new Float64Array(size), 10, null);
        return [
            v2.add(
                v2.create(new Float64Array([-size[0], size[1]])), part.pos, null),
            v2.add(
                v2.create(new Float64Array([size[0], size[1]])), part.pos, null),
            v2.add(
                v2.create(new Float64Array([size[0], -size[1]])), part.pos, null),
            v2.add(
                v2.create(new Float64Array([-size[0], -size[1]])), part.pos, null)
        ];
    }

    static diffCross(u: Float64Array, v: Float64Array, p: Float64Array) {
        return v2.cross(v2.sub(p, u, new Float64Array([0, 0])), v2.sub(v, u, new Float64Array([0, 0])));
    }

    fromSpec(spec: string) {
        this.cost = 0;
        this.hp = 5;
        this.jumpDistance = 0;
        this.jumpCount = 0;
        this.speed = 0;
        this.turnSpeed = 1;
        this.mass = 0;
        this.energy = 0;
        this.baseGenEnergy = 2.5;
        this.genEnergy = this.baseGenEnergy;
        this.storeEnergy = 0;
        this.genShield = 0;
        this.shield = 0;
        this.cloak = 0;
        this.radius = 20;
        this.weaponArc = 0;
        this.minArc = 0;
        this.maxRange = 0;
        this.thrust = 0;
        this.data = UnitUtils.fromShort(spec);
        this.name = this.data.name || "";
        this.aiRules = this.data.aiRules || [];

        for (let i = 0; i < this.data.parts.length; i++) {
            let p = this.data.parts[i];
            if (!this.parts[p.type]) {
                continue;
            }
            let part = new this.parts[p.type];
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

            if (p.type === EnergyTransfer) {
                if (part.range > this.maxRange) {
                    this.maxRange = part.range;
                }
            }

            if (p.type === StasisField) {
                // @ts-ignore
                this.stasisRange = part.range + Math.sqrt(part.pos * part.pos + this.center * this.center) + 100;
                if (this.stasisRange > this.maxRange) {
                    this.maxRange = this.stasisRange;
                }
            }
        }

        this.maxHP = this.hp;
        this.energy = this.storeEnergy;
        this.turnSpeed = this.turnSpeed / this.mass;
        this.maxSpeed = this.thrust / this.mass * 9;
        this.maxShield = this.shield;
        this.damageRatio = 1;
        this.jumpDistance = this.jump = Math.min(this.maxJump / 500, 41 * this.jumpCount / this.mass) * 500;
        this.computeCenter();

        for (let i = 0; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (typeof part.init === "function") {
                part.init();
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

        let results = [];
        for (let i = 0; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (part.fireEnergy > 0) {
                results.push(this.fireEnergy += part.fireEnergy);
            } else {
                results.push(void 0);
            }
        }
        return results;
    }

    toSpecObj() {
        let j, len, part, partSpec, ref, specParts;
        specParts = [];
        ref = this.parts;
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
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
    ;

    computeRadius() {
        let j, len, part, radius, ref, results, v;
        v = v2.create(null);
        ref = this.parts;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
            if (!(!part.decal)) {
                continue;
            }
            v2.set(part.pos, v);
            v2.sub(v, this.center, null);
            radius = v2.mag(v);
            if (radius > this.radius) {
                results.push(this.radius = radius);
            } else {
                results.push(void 0);
            }
        }
        return results;
    }

    fn1(p: Float64Array) {
        return v2.sub(p, this.center, null);
    }

    min(points: Float64Array, fn: Function) {
        return points.sort(function (a, b) {
            return fn(a) - fn(b);
        })[0];
    }

    max(points: Float64Array, fn: Function) {
        return points.sort(function (a, b) {
            return fn(b) - fn(a);
        })[0];
    }

    split(u: Float64Array, v: Float64Array, points: Float64Array) {
        let p;
        return (function () {
            let j, len, results;
            results = [];
            for (j = 0, len = points.length; j < len; j++) {
                p = points[j];
                if (Unit.diffCross(u, v, new Float64Array(p)) < 0) {
                    results.push(p);
                }
            }
            return results;
        })();
    }

    extend(u: Float64Array, v: Float64Array, points: Float64Array): number[] {
        let p1, p2, w;
        if (!(points != null ? points.length : void 0)) {
            return [];
        }
        w = new Float64Array(this.min(points, function (p: Float64Array) {
            return Unit.diffCross(u, v, p);
        }));
        p1 = new Float64Array(this.split(w, v, points));
        p2 = new Float64Array(this.split(u, w, points));
        // @ts-ignore
        return this.slice(this.extend(w, v, p1)).concat([w], this.slice.call(this.extend(u, w, p2)));
    }

    findPartPoints(parts: Part[]) {
        let j;
        let l;
        let len;
        let len1;
        let p;
        let part;
        let rst: number[] = [];
        for (j = 0, len = parts.length; j < len; j++) {
            part = parts[j];
            if (!part.decal) {
                rst.push.apply(rst, Unit.partPoints(part));
            }
        }


        for (l = 0, len1 = rst.length; l < len1; l++) {
            p = rst[l];
            this.fn1(new Float64Array(p));
        }
        return new Float64Array(rst);
    }

    computeBoundary() {
        Sim.Instance.timeStart("computeBoundary");
        let left: Float64Array;
        let points: Float64Array;
        let right: Float64Array;
        let u;
        let v;

        points = this.findPartPoints(this.parts);
        u = this.min(points, function (p: Float64Array) {
            return p[0];
        });
        v = this.max(points, function (p: Float64Array) {
            return p[0];
        });
        left = new Float64Array(this.split(new Float64Array(u), new Float64Array(v), points));
        right = new Float64Array(this.split(new Float64Array(v), new Float64Array(u), points));
        Sim.Instance.timeEnd("computeBoundary");
        return this.boundPointsLocal = [v].concat(
            this.slice.call(this.extend(new Float64Array(u), new Float64Array(v), left)),
            [u],
            this.slice.call(this.extend(new Float64Array(v), new Float64Array(u), right)));
    }


    toWorld(from: Float64Array) {
        let p = v2.create(from);
        v2.rotate(p, this.rot + Math.PI, null);
        return v2.add(p, this.pos, null);
    }

    computeBoundPoints() {
        let p;
        Sim.Instance.timeStart("computeBoundPoints");

        this.boundPoints = (function () {
            let j, len, ref, results;
            ref = this.boundPointsLocal;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                p = ref[j];
                results.push(this.toWorld(p));
            }
            return results;
        }).call(this);
        return Sim.Instance.timeEnd("computeBoundPoints");
    }


    getBoundPoints() {
        if (this.boundPoints == null) {
            this.computeBoundPoints();
        }
        return this.boundPoints;
    }


    applyDamage(d: number, damager: Thing) {
        if (damager) {
            this.lastDamager = damager;
        }
        this.shield -= d;
        if (this.shield < 0) {
            this.hp += this.shield;
            return this.shield = 0;
        }
    }

    applyEnergyDamage(d: number) {
        return this.energy -= d;
    }

    applyBurnAmount(d: number) {
        this.maxBurn = (this.hp + this.shield) * 1.0;
        if (this.burn < this.maxBurn) {
            this.burn += d;
            if (this.burn > this.maxBurn) {
                return this.burn = this.maxBurn;
            }
        }
    }

    //@ts-ignore
    postDeath() {
        let j, len, part, ref;
        ref = this.parts;
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
            if (typeof part.postDeath === "function") {
                part.postDeath();
            }
        }
        return Sim.Instance.deaths += 1;
    }

    createDebree() {
        let exp, j, len, part, ref, results;
        ref = this.parts;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
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
            results.push(intp.particles[exp.id] = exp);
        }
        return results;
    }

    gotoAndStop(goto: Float64Array) {
        return this.setOrder({
            type: "Move",
            dest: goto,
            noStop: true
        });
    }
    ;

    gotoNoStop(goto: Float64Array) {
        return this.setOrder({
            type: "Move",
            dest: goto,
            noStop: true
        });
    }

    cloaked() {
        return this.cloakFade > 0;
    }

    tick() {
        Sim.Instance.timeStart("unittick");
        let burnTick, cloakOn, cloakRange, exp, killer, l, len1, p, part, penalty, ref2, ref4, speed, target;

        this.closestEnemies = [];
        this.closestFriends = [];
        this.closestEnemyBullets = [];

        Sim.Instance.timeStart("sorts");

        Sim.Instance.unitSpaces[Sim.otherSide(this.side)].findInRange(this.pos,
            this.maxRange + Sim.Instance.maxRadius[Sim.otherSide(this.side)] + 500, (function (_this) {
                return function (u: Unit) {
                    if (u.id !== _this.id) {
                        _this.closestEnemies.push(u);
                    }
                    return false;
                };
            })(this));

        Sim.Instance.unitSpaces[this.side].findInRange(this.pos, this.maxRange + Sim.Instance.maxRadius[this.side] + 500, (function (_this) {
            return function (u: Unit) {
                if (u.id !== _this.id) {
                    _this.closestFriends.push(u);
                }
                return false;
            };
        })(this));


        Sim.Instance.bulletSpaces[Sim.otherSide(this.side)].findInRange(this.pos, this.maxRange + 100, (function (_this) {
            return function (b: any) {
                _this.closestEnemyBullets.push(b);
                return false;
            };
        })(this));

        this.closestEnemies.sort((function (_this) {
            return function (a: { pos: Float64Array; }, b: { pos: Float64Array; }) {
                return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
            };
        })(this));

        this.closestFriends.sort((function (_this) {
            return function (a: { pos: Float64Array; }, b: { pos: Float64Array; }) {
                return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
            };
        })(this));

        this.closestEnemyBullets.sort((function (_this) {
            return function (a: { pos: Float64Array; }, b: { pos: Float64Array; }) {
                return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
            };
        })(this));

        if (this.cloak > 0) {
            target = this.closestEnemy();
            if ((target != null) && CollisionUtils.closestDistance(this.getBoundPoints(), target.getBoundPoints()) < 100) {
                this.cloak = 0;
            }
        }
        Sim.Instance.timeEnd("sorts");

        Sim.Instance.timeStart("untilparts");
        if (this.topOrderIs("Follow") &&
            (Sim.Instance.things[this.orders[0].targetId] != null) &&
            (Sim.Instance.ffa &&
                Sim.Instance.things[this.orders[0].targetId].side !== this.side ||
                Sim.Instance.things[this.orders[0].targetId].owner !== this.owner)) {
            this.target = Sim.Instance.things[this.orders[0].targetId];
        }

        this.boundPoints = null;
        if (this.cooldown > 0) {
            this.cooldown -= 1;
            this.energy = -this.genEnergy * 2;
        } else if (this.cooldown <= 0) {
            this.energy = this.storeEnergy;
            this.cooldown = 0 / 0;
        }

        this.slowed = false;
        if (this.warpIn < 1) {
            this.warpIn += 1 / 16;
        } else {
            this.warpIn = 1;
        }

        this.cloakFade = 0;
        if (this.cloak > 0) {
            speed = v2.mag(this.vel);
            if (speed > 1) {
                this.cloak -= 0.20 / 16 * this.mass;
            }
            if (Sim.Instance.step % 16 === 0) {
                this.cloak -= 0.01 * this.mass;
            }
            cloakOn = this.mass * .5;
            if (this.cloak > cloakOn) {
                cloakRange = this.mass - cloakOn;
                this.cloakFade = (this.cloak - cloakOn) / cloakRange;
            }
        }

        if (this.energy < -this.genEnergy * 16 * 3) {
            this.energy = -this.genEnergy * 16 * 3;
        }
        this.energy += this.baseGenEnergy;

        Sim.Instance.timeEnd("untilparts");

        Sim.Instance.timeStart("parts");
        ref2 = this.parts;
        for (l = 0, len1 = ref2.length; l < len1; l++) {
            part = ref2[l];
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
        if ((ref4 = this.target) != null ? ref4.dead : void 0) {
            this.target = null;
        }

        if (Sim.Instance.step % 16 === 0) {
            if (this.burn > 4) {
                if (this.hp < 4) {
                    this.burn = 0;
                }
                burnTick = this.burn * 0.03;
                this.applyDamage(burnTick, this);
                this.burn -= burnTick;
            } else {
                this.burn = 0;
            }
        }

        //sim.timeStart("cooldowntick");
        if (isNaN(this.cooldown) && this.hp <= 0) {
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

    applyEffect(n: number, effect: number) {
        return 1 + (n - 1) * effect;
    };

    applyNearbyBuffs() {
        let buffs, j, l, len, len1, ref, ref1, results, u, w;
        buffs = {
            weaponRange: 1,
            weaponRangeFlat: 0,
            weaponDamage: 1,
            weaponEnergyDamage: 1,
            weaponSpeed: 1,
            weaponReload: 1,
            weaponEnergy: 1,
            noOverkill: false
        };

        ref = this.closestFriends;
        for (j = 0, len = ref.length; j < len; j++) {
            u = ref[j];
            if (u.projector && v2.distance(this.pos, u.pos) < ModProjector.range) {
                buffs.weaponRange *= this.applyEffect(u.projector.weaponRange, u.effect);
                buffs.weaponRangeFlat += u.projector.weaponRangeFlat * u.effect;
                buffs.weaponDamage *= this.applyEffect(u.projector.weaponDamage, u.effect);
                buffs.weaponEnergyDamage *= this.applyEffect(u.projector.weaponDamage, u.effect);
                buffs.weaponSpeed *= this.applyEffect(u.projector.weaponSpeed, u.effect);
                buffs.weaponReload *= this.applyEffect(u.projector.weaponReload, u.effect);
                buffs.weaponEnergy *= this.applyEffect(u.projector.weaponEnergy, u.effect);
                buffs.noOverkill = buffs.noOverkill || u.projector.noOverkill;
            }
        }
        ref1 = this.weapons;
        results = [];
        for (l = 0, len1 = ref1.length; l < len1; l++) {
            w = ref1[l];
            results.push(w.applyAdditionalBuffs(buffs));
        }
        return results;
    };

    canBuildHere() {
        return true;
    };

    move() {
        this.movement();
        if (this.orders.length === 0) {
            return this.idleAI();
        }
    };

    movement() {
        let current_speed, s;
        this.runOrders();
        v2.scale(this.vel, this.stopFriction, null);
        current_speed = v2.mag(this.vel);
        if (current_speed < .01) {
            this.vel[0] = 0;
            this.vel[1] = 0;
        } else {
            v2.add(this.pos, this.vel, null);
        }
        s = 20000;
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
            return this.pos[1] = -s;
        }
    };

    lookAt(goto: Float64Array) {
        let rot;
        let _where;
        v2.sub(goto, this.pos, _where);
        rot = v2.angle(_where);
        if (rot != null) {
            return this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
        }
    }

    moveTo(goto: Float64Array, noStop: boolean) {
        let arriveIn, c, curspeed, force, j, len, part, ratio, ref, rot, stopSpeed, turnIn, _where;
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
                stopSpeed = stopSpeed * this.stopFriction;
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
            v2.scale(_where, force / this.mass, null);
            v2.add(this.vel, _where, null);
        }
    };

    closestEnemy() {
        let enemy, j, len, ref, u;
        enemy = null;
        ref = this.closestEnemies;
        for (j = 0, len = ref.length; j < len; j++) {
            u = ref[j];
            if (u.owner !== this.owner) {
                enemy = u;
                break;
            }
        }
        return enemy;
    };

    closestUncloaked(range: number) {
        let enemyC, j, len, ref, u;
        enemyC = null;
        ref = this.closestEnemies;
        for (j = 0, len = ref.length; j < len; j++) {
            u = ref[j];
            if (u.owner !== this.owner) {
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
            target = this.closestUncloaked(null);
            if (target && v2.distance(target.pos, this.pos) < this.weaponRange * 3) {
                this.softTarget = target;
            }
        }
        if (this.softTarget && this.minArc < 360) {
            lookAt = this.softTarget.pos;
            let _where: Float64Array = null;
            v2.sub(lookAt, this.pos, _where);
            rot = v2.angle(_where);
            if (Math.abs(this.rot - rot) > .02) {
                dist = v2.mag(_where);
                return this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
            }
        }
    }
    ;

    draw() {
        let a, color, j, l, len, len1, part, partNum, r, ref, ref1, s, t, value;
        if (this.dead) {
            return;
        }
        ref = this.parts;
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
            if (typeof part.preDraw === "function") {
                part.preDraw();
            }
            part.computeWorldPos();
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
        for (partNum = l = 0, len1 = ref1.length; l < len1; partNum = ++l) {
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
            baseAtlas.drawSprite("img/pip1.png", this.pos, [1, 1], 0, null);
            return baseAtlas.drawSprite("img/pip1.png", this._pos2, [1, 1], 0, [255, 0, 0, 255]);
        }
    }
    ;

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
            return intp.particles[exp.id] = exp;
        }
    }
    ;

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
                return this.cloakFade = (this.cloak - cloakOn) / cloakRange;
            }
        }
    }
    ;

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
    ;

    drawSelection() {
        let alpha, angle, distance, i, j, len, order, orders, prev, results, target;
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
            results = [];
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
                    angle = v2.angle(v2.sub(order.dest, prev, v2.create(null)));
                    if (orders.length - 1 === i) {
                        baseAtlas.drawSprite("img/arrow01.png", order.dest, [.9, .9], angle, [255, 255, 255, alpha]);
                    } else {
                        baseAtlas.drawSprite("img/arrow01.png", order.dest, [.8, .8], angle, [255, 255, 255, alpha]);
                    }
                    results.push(prev = order.dest);
                } else if (order.type === "Follow") {
                    target = intp.things[order.targetId];
                    if (target != null) {
                        results.push(baseAtlas.drawSprite("img/unitBar/target.png", target.pos, [1, 1], 0, [255, 0, 0, 100]));
                    } else {
                        results.push(void 0);
                    }
                } else {
                    results.push(void 0);
                }
            }
            return results;
        }
    }
    ;

    drawEnergyBar() {
        let color, healthScale, i, j, max, number, pipScale, ref, results, s;
        max = this.storeEnergy;
        if (max < 30000) {
            healthScale = 1000;
            pipScale = .5;
        } else {
            healthScale = 10000;
            pipScale = 1;
        }
        number = Math.floor(this.storeEnergy / healthScale);
        results = [];
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
            results.push(baseAtlas.drawSprite("img/unitBar/energyPip.png", _pipPos, [pipScale, pipScale], 0, color));
        }
        return results;
    }


    drawHPBar() {
        let burnColor, color, healthScale, i, j, max, number, pipScale, ref, results, s;
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
        results = [];
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
                results.push(baseAtlas.drawSprite("img/unitBar/flame.png", _pipPos, [pipScale * .25, pipScale * .25], Math.PI, burnColor));
            } else {
                results.push(void 0);
            }
        }
        return results;
    }
    ;

    addOrder(order: any) {
        if (this.orders.length < 50) {
            return this.orders.push(order);
        }
    }

    setOrder(order: { type: string; dest: any; noStop?: boolean; rally?: boolean; }) {
        this.orders = [order];
        this.target = null;
    }

    aiOrder(order: { ai: boolean; }) {
        order.ai = true;
        if (this.orders.length > 0 && (this.orders[0].ai || this.orders[0].rally)) {
            return this.orders[0] = order;
        } else {
            return this.orders.unshift(order);
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

    giveOrder(order: { type: string; dest: any; noStop?: boolean; rally?: boolean; }, additive: any) {
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
        let running, topOrder;
        if (this.dead || this.orders.length === 0) {
            return;
        }
        while (this.orders.length > 0) {
            topOrder = this.orders[0];
            this.onOrderId = topOrder.id;
            running = this.runOrder(topOrder);
            if (running) {
                break;
            }
            this.orders.shift();
            this.onOrderId += 1;
        }
    }

    runOrder(order: {
                 type: string;
                 targetId: number;
                 range: number;
                 noStop: boolean;
                 noFinish: boolean;
                 dest: Float64Array;
                 begun: boolean;
                 pos: Float64Array;
                 target: Unit;
                 distance: number;
             }
    ) {
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
                dest = v2.create(null);
                v2.sub(this.pos, pos, dest);
                v2.scale(dest, order.distance / v2.mag(dest), null);
                v2.add(dest, this.pos, null);
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
        return this.hp = 0;
    }

    toggleHoldPosition() {
        return this.holdPosition = !this.holdPosition;
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
        if (this.jump > this.jumpDistance && this.energy > JumpEngine.useEnergy * this.mass && !this.holdPosition) {
            jumpDist = this.jumpDistance;
            needDist = v2.distance(this.pos, pos) - Math.max(this.stopDistance, 100);
            jumpDist = Math.min(jumpDist, needDist);
            if (jumpDist < this.jumpDistance) {
                this.energy -= JumpEngine.useEnergy * this.mass;
                this.cloak -= .25 * this.mass;
                jumpVec = v2.create(null);
                v2.sub(pos, this.pos, jumpVec);
                v2.add(this.pos, jumpVec, null);
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
        dif = v2.create(null);
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

export class Part {
    hp: number = 10;
    cost: number = 10;
    mass: number = 40;
    rot: number = 0;
    dir: number = 0;
    canRotate: boolean = true;
    flip: boolean = true;
    opacity: number = 1;
    size: any[];
    owner: Player;
    unit: Unit;
    scale: number;
    decal: boolean;
    ghostCopy: boolean;
    stripe: any;
    northWest: any;
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
    mount: boolean;
    overlap: boolean;
    solid: boolean;
    bad: boolean;
    struct: boolean;
    exhaust: boolean;
    noEffect: boolean;
    noTurret: boolean;
    fill: boolean;
    name: string;

    constructor() {
        this.pos = v2.create(null);
        this.worldPos = v2.create(null);
        this.orignalImage = this.image;
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
    ;

    tick() {
    };
}

export class Engine extends Part {
    trailSize = .1;
    trailTime = 500;
    canRotate = false;
    trail: any;

    constructor() {
        super();
        if (typeof Server.Instance === "undefined" || Server.Instance === null) {
            this.trail = new Trail(this.trailSize, this.trailTime);
        }
    }

    preDraw() {
        return this.trail.draw(this.worldPos, this.unit);
    };
}

export class Turret extends Part {
    tab: string = "weapons";
    image: string = "turret01.png";
    gimble: boolean = true;
    weapon: boolean = true;
    canRotate: boolean = false;
    target: Unit;
    bulletCls: Bullet;
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
    hitsMissiles: boolean;
    onlyInRange: boolean;
    turretNum: number;
    targetId: number;
    aoe: number;
    burnAmount: number;

    constructor() {
        super();
        this.canShoot.prototype.bind(this);
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
        let j, len, part, ref;
        ref = this.unit.parts;
        for (j = 0, len = ref.length; j < len; j++) {
            part = ref[j];
            if (part.mount && v2.distance(part.pos, this.pos) < .1) {
                part.turret = this;
                this.arc = part.arc;
                if (typeof part.initTurret === "function"){
                    part.initTurret(this)
                }
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
            if (this.unit.target !== null && this.canShoot(this.unit.target)) {
                this.target = this.unit.target;
                return this.fire();
            } else if (this.target !== null && this.canShoot(this.target)) {
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
    };

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
    };

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
    ;

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
        ref = this.aim(other), th = ref[0], aimDistance = ref[1];
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
        let j, l, len, len1, m, ref, ref1, results, u;
        if (this.unit.target && !this.hitsMissiles) {
            this.target = this.unit.target;
            return;
        }
        this.target = null;
        if (this.hitsMissiles) {
            ref = this.unit.closestEnemyBullets;
            for (j = 0, len = ref.length; j < len; j++) {
                m = ref[j];
                if (this.canShoot(m)) {
                    this.target = m;
                    break;
                }
            }
            if (this.target) {
                return;
            }
        }
        ref1 = this.unit.closestEnemies;

        for (l = 0, len1 = ref1.length; l < len1; l++) {
            u = ref1[l];
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
        //@ts-ignore
        particle = new this.bulletCls();
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