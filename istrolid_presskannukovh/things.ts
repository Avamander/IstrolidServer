/*
General Game Objects live here
 */
export class ThingUtil {
    hasProp = {}.hasOwnProperty;

    static sideColor(side: string) {
        let color;
        let mySide = typeof commander !== "undefined" && commander !== null ? commander.side : void 0;
        if (mySide === side) {
            color = [230, 230, 230, 255];
        } else {
            color = [20, 20, 20, 255];
        }
        return color;
    };

    static antiSideColor(side: string) {
        let color;
        let mySide = typeof commander !== "undefined" && commander !== null ? commander.side : void 0;
        if (mySide === "spectators") {
            mySide = "alpha";
        }
        if (mySide !== side) {
            color = [230, 230, 230, 255];
        } else {
            color = [20, 20, 20, 255];
        }
        return color;
    };

    static drawAllArcs(unit_id: { id: number }) {
        let arc, cur, i, j, l, len, n, pos, range, ref, ref1, ref2, results, th, w, x, y;
        // @ts-ignore
        let unit: Unit = Sim.Instance.things[unit_id.id];
        if (!unit) {
            return;
        }
        ref = unit.weapons;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
            w = ref[j];
            if (w.projector) {
                continue;
            }
            range = w.range;
            arc = w.arc;
            cur = Math.PI * range * 2;
            n = Math.floor(cur / 40 * arc / 360);
            for (i = l = ref1 = -n, ref2 = n; ref1 <= ref2 ? l < ref2 : l > ref2; i = ref1 <= ref2 ? ++l : --l) {
                th = i / (n * 2) * arc / 180 * Math.PI + unit.rot + Math.PI;
                x = Math.sin(-th) * range;
                y = Math.cos(-th) * range;
                pos = [w.worldPos[0] + x, w.worldPos[1] + y];
                baseAtlas.drawSprite("img/arrow02.png", pos, [.25, .25], th + Math.PI, [255, 0, 0, 255]);
            }
            if (w.minRange > 0) {
                cur = Math.PI * w.minRange * 2;
                n = Math.floor(cur / 40 * arc / 360);
                results.push((function () {
                    let m, ref3, ref4, results1;
                    results1 = [];
                    for (i = m = ref3 = -n, ref4 = n; ref3 <= ref4 ? m < ref4 : m > ref4; i = ref3 <= ref4 ? ++m : --m) {
                        th = i / (n * 2) * arc / 180 * Math.PI + unit.rot + Math.PI;
                        x = Math.sin(-th) * w.minRange;
                        y = Math.cos(-th) * w.minRange;
                        pos = [w.worldPos[0] + x, w.worldPos[1] + y];
                        results1.push(baseAtlas.drawSprite("img/arrow02.png", pos, [.25, .25], th, [255, 0, 0, 255]));
                    }
                    return results1;
                })());
            } else {
                results.push(void 0);
            }
        }
        return results;
    };
}

export class Player {
    gainsMoney: boolean = true;
    ready: boolean = false;
    streek: number = 0;
    actions: number = 0;
    apm: number = 0;
    capps: number = 0;
    kills: number = 0;
    unitsBuilt: number = 0;
    moneyEarned: number = 0;
    moneyRatio: number = 1;
    aiRules: any;
    host: boolean = false;
    ai: boolean = false;
    lastActiveTime: number = 0;
    connected: boolean = false;
    name: string = "";
    mouse: any;
    id: string | number;
    color: [number, number, number, number];
    maxMoney: number = 90000;
    money: number = 0;
    buildQ: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    validBar: boolean[] = [true, true, true, true, true, true, true, true, true, true];

    // @ts-ignore
    rallyPoint: Float64Array;
    // @ts-ignore
    selection: any[] | Thing[];
    // @ts-ignore
    mouseTrail: any[];
    // @ts-ignore
    usingSpawn: Thing;
    // Set by playerJoin
    number!: number;
    // @ts-ignore
    _mouse: Float64Array;

    side: string = "spectators";
    action: any;
    buildBar: any;
    kickTime: number = 0;
    ws: any;
    streak: number = 0;
    surrendered: boolean = false;
    afk: boolean = false;
    net: any;
    t: any;
    repick: any;
    lastSpawnCount: number = 0;
    webSocketKey: string = "";

    constructor(id1: number | string) {
        this.id = id1;
        this.color = [255, 255, 255, 255]; //randColor(200); // TODO:
        this.reset();
    }

    reset() {
        this.money = Sim.Instance.defaultMoney;
        this.maxMoney = 2e308;
        this.mouse = [0, 0];
        this.rallyPoint = new Float64Array([0, 0]);
        this.selection = [];
        this.buildQ = [];
        this.validBar = [false, false, false, false, false, false, false, false, false, false];
        this.actions = 0;
        this.apm = 0;
        this.capps = 0;
        this.kills = 0;
        this.unitsBuilt = 0;
        this.moneyEarned = 0;
        this.mouseTrail = [];
        // @ts-ignore
        this.usingSpawn = null;
    }

    earnMoney(amount: number) {
        amount = Math.round(amount * this.moneyRatio * Sim.Instance.moneyRatio);
        this.money += amount;
        return this.moneyEarned += amount;
    }

    tick() {
        Sim.Instance.timeStart("playertick");
        this.gainsMoney = false;
        if (Sim.Instance.serverType !== "IO") {
            for (let thing_id in Sim.Instance.things) {
                if (Sim.Instance.things[thing_id].commandPoint &&
                    Sim.Instance.things[thing_id].side === this.side) {
                    this.gainsMoney = true;
                    break;
                }
            }
        }

        if (Sim.Instance.step % 16 === 0) {
            let toEarn = Math.min(this.maxMoney - this.money, 10);
            if (toEarn > 0 && this.gainsMoney && Sim.Instance.gainsMoney) {
                this.earnMoney(toEarn);
            }
            this.apm = this.actions / (Sim.Instance.step / 16 / 60);
        }

        if (this.aiRules) {
            Sim.Instance.timeIt("ai", (function (_this) {
                return function () {
                    return Sim.Instance.aimanager.doPlayerAIRules(_this);
                };
            })(this));
        }
        Sim.Instance.timeEnd("playertick");
        return this.wave();
    }

    wave() {
        let build, slot, waitTime;
        waitTime = 16 * 2;
        if (Sim.Instance.step > waitTime && Sim.Instance.step % 16 === 0) {
            build = false;
            if (Sim.Instance.serverType === "IO") {
                if ((this.buildQ[0] != null) && this.rqUnit(this.buildQ[0])) {
                    // @ts-ignore
                    this.buildQ[0] = null;
                    build = true;
                }
            } else {
                for (let j = 0; j < this.buildQ.length; j++) {
                    slot = this.buildQ[j];
                    if (this.rqUnit(slot)) {
                        // @ts-ignore
                        this.buildQ[j] = null;
                        build = true;
                    } else {
                        break;
                    }
                }
            }

            if (build) {
                return this.buildQ = this.get_build_q();
            }
        }
    }

    get_build_q() {
        let results = [];
        for (let l = 0; l < this.buildQ.length; l++) {
            if (this.buildQ[l] !== null) {
                results.push(this.buildQ[l]);
            }
        }
        return results;
    }

    rqUnit(slot: number) {
        if (Sim.Instance.serverType === "Survival" && this.side === "beta") {
            let pos = v2.scale_r(
                v2.pointTo(
                    new Float64Array([]),
                    Math.random() * Math.PI * 2),
                2000 * Sim.Instance.mapScale
            );
            return Sim.Instance.buildUnit(this.number, slot, pos);
        }

        if (Sim.Instance.serverType === "IO") {
            let units = (function () {
                let results: Unit[] = [];
                for (let element in Sim.Instance.things) {
                    if (Sim.Instance.things[element].unit &&
                        // @ts-ignore
                        Sim.Instance.things[element].owner === this.number) {
                        results.push((Sim.Instance.things[element] as Unit));
                    }
                }
                return results;
            }).call(this);

            if (units.length > 0) {
                let upgraded = Sim.Instance.buildUnit(this.number, slot, units[0].pos);
                if (upgraded != null) {
                    upgraded.rot = units[0].rot;
                    upgraded.orders = units[0].orders;
                    units[0].dead = true;
                    upgraded.cooldown = 16 * (upgraded.cost / 300 + 2);
                    this.unitsBuilt += 1;
                }
                return upgraded;
            }
        }

        let spawn = Sim.Instance.findSpawnPoint(this);
        if (spawn) {
            let unit = Sim.Instance.buildUnit(this.number, slot, spawn.pos);
            if (unit) {
                v2.random(unit.pos);
                v2.scale_r(unit.pos, 100 + Math.random() * (spawn.radius - 100));
                v2.add_r(unit.pos, spawn.pos);
                this.unitsBuilt += 1;
                if (this.rallyPoint[0] !== 0 && this.rallyPoint[1] !== 0) {
                    unit.setOrder({
                        type: "Move",
                        dest: this.rallyPoint,
                        rally: true,
                        ai: false,
                        begun: false,
                        distance: 0,
                        id: 0,
                        noFinish: false,
                        noStop: false,
                        // @ t s -igno re
                        pos: this.rallyPoint,
                        range: 0,
                        // @ts-ignore
                        target: undefined,
                        targetId: 0
                    });
                }
                return unit;
            }
        }
        return null;
    };

    draw() {
        if (!ui.show) {
            return;
        }

        if (Sim.Instance.galaxyStar != null) {
            // @ts-ignore
            if (typeof Sim.Instance.galaxyStar.draw === "function") {
                // @ts-ignore
                Sim.Instance.galaxyStar.draw();
            }
        }

        if (battleMode.rallyPlacing) {
            baseAtlas.drawSprite("img/unitBar/rallyPoint.png", battleMode.mouse, [1, 1], 0, [255, 0, 255, 255]);
        } else if (commander.rallyPoint && commander.rallyPoint[0] !== 0 && commander.rallyPoint[1] !== 0) {
            baseAtlas.drawSprite("img/unitBar/rallyPoint.png", commander.rallyPoint, [1, 1], 0, [255, 255, 0, 255]);
        }

        if (!this.selection) {
            return;
        }

        for (let j = 0; j < this.selection.length; j++) {
            if (this.selection[j].dead) {
                continue;
            }
            let color = this.color;
            if (typeof this.selection[j].drawSelection === "function") {
                //@ts-ignore
                this.selection[j].drawSelection(color);
            }
            if (this.selection.length === 1) {
                if (this.selection[j].weapons) {
                    ThingUtil.drawAllArcs(this.selection[j]);
                }
            } else {
                if (this.selection[j].weapons != null && this.selection[j].weapons.length > 0) {
                    let range = this.selection[j].weaponRange;
                    let arc = this.selection[j].weaponArc;
                    let cur = Math.PI * range * 2;
                    let n = Math.floor(cur / 80 * arc / 360);

                    let th, x, y;
                    for (let i = -n; i !== 0; i++) {
                        th = i / (n * 2) * arc / 180 * Math.PI + this.t.rot + Math.PI;
                        x = Math.sin(-th) * range;
                        y = Math.cos(-th) * range;
                        let _pos = v2.create_r();
                        let _vec = v2.create_r();
                        _pos[0] = this.selection[j].pos[0] + x;
                        _pos[1] = this.selection[j].pos[1] + y;
                        let other, drawIt = true;
                        for (let m = 0; m < this.selection.length; m++) {
                            other = this.selection[m];
                            if (other.unit
                                && other.id !== this.selection[j].id
                                && other.owner === this.selection[j].owner) {
                                if ((other.weapons != null) && other.weapons.length > 0) {
                                    _pos[0] = other.pos[0] - _vec[0];
                                    _pos[1] = other.pos[1] - _vec[1];
                                    if (v2.mag(_vec) < other.weaponRange) {
                                        let angle = v2.angle(_vec);
                                        let arcRad = other.weaponArc / 180 * Math.PI;
                                        if (Math.abs(Unit.angleBetween(angle, other.rot)) < arcRad / 2) {
                                            drawIt = false;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (drawIt) {
                            baseAtlas.drawSprite("img/arrow02.png", _pos, [.5, .5], th + Math.PI, [255, 0, 0, 255]);
                        }
                    }
                }
            }
        }
    }
}

export class Trail {
    trailSize: number;
    trailTime: number;
    trail: any[];

    constructor(trailSize: number, trailTime: number) {
        this.trailSize = trailSize;
        this.trailTime = trailTime;
        this.trail = [];
    }

    draw(pos: Float64Array, unit: Thing) {
        if (v2.mag(unit.vel) > 1) {
            if (this.trail.length === 0 ||
                v2.distance(this.trail[this.trail.length - 1][0], pos) > 2) {
                this.trail.push([[pos[0], pos[1]], intp.t]);
            }
        }

        while (this.trail.length > 0 && intp.t - this.trail[0][1] > this.trailTime) {
            this.trail.shift();
        }
        let _color: number[] = [];
        _color[0] = 155 + unit.color[0] / 255 * 100;
        _color[1] = 155 + unit.color[1] / 255 * 100;
        _color[2] = 155 + unit.color[2] / 255 * 100;
        _color[3] = 0;

        let results = [], alive;
        for (let j = 0; j < this.trail.length; j++) {
            alive = (intp.t - this.trail[j][1]) / this.trailTime;
            if (alive < 1) {
                _color[3] = 255 - 255 * alive;
            } else {
                _color[3] = 0;
            }

            results.push(
                baseAtlas.drawSprite("img/fire02.png",
                    this.trail[j][0],
                    [this.trailSize, this.trailSize],
                    0,
                    _color
                )
            );
        }
        return results;
    };
}

export class Thing {
    dead: boolean = false;
    active: boolean = false;
    commandPoint: boolean = false;
    missile: boolean = false;
    unit: boolean = false; // Is unit
    explode: boolean = false;
    bullet: boolean = false;
    "static": boolean = false;
    energyCaster: boolean = false;
    flag: boolean = false;
    spawnPoint: boolean = false;

    storeEnergy: number = 0;
    maxHP: number = 10;
    z: number = 0.01;

    // @ts-ignore
    color: [number, number, number, number];

    id: number;
    // @ts-ignore
    radius: number;
    // @ts-ignore
    life: number = 5;

    maxLife: number = 5;
    cloak: number = 0;

    // @ts-ignore
    spawn: string;
    // @ts-ignore
    spec: string | any[];
    // @ts-ignore
    net: {};
    // @ts-ignore
    target: Thing | null = null;
    // @ts-ignore
    origin: Unit;

    message: any;
    follow: any;
    parts!: Part[];
    fixed: any;
    canCapture: any;
    carryFlag: boolean = false;

    side: string = "spectators";
    owner!: number;

    vel!: Float64Array;
    pos!: Float64Array;
    lastDamager: Thing | null = null;
    maxSpeed: number = 100;

    constructor() {
        this.id = Sim.Instance.nid();
    }

    postDeath(): void {

    }

    getBoundPoints(): Float64Array[] {
        throw new Error("getBoundPoints was called, must be overrided")
    }

    cloaked(): boolean {
        return false;
    }

    applyDamage(damage: number, damager: Thing): void {

    }

    applyEnergyDamage(damage: number): void {

    }

    applyBurnAmount(damage: number): void {

    }

    move(): void {

    }

    tick(): void {

    }

    draw(): void {

    }
}

export class Rock extends Thing {
    flag: boolean = false;
    image: string = "img/unitBar/pip1.png";
    size: Float64Array = new Float64Array([1, 1]);
    "static" = true;
    maxHP = 1000;
    color: [number, number, number, number];
    id: number;
    dead: boolean;
    hp: number;
    pos: Float64Array;
    vel: Float64Array;
    rot: number;
    commandPoint: boolean = false;
    bullet: boolean = false;

    z: number = 0.01;
    player!: Player;
    torq: number = 0;
    home: boolean = false;

    constructor() {
        super();
        this.image = "img/rocks/srock01.png";
        this.color = Sim.Instance.theme.fillColor;
        this.id = Sim.Instance.nid();
        this.dead = false;
        this.hp = this.maxHP;
        this.pos = new Float64Array([0, 0]);
        this.vel = new Float64Array([0, 0]);
        this.rot = 0;
        this.size = new Float64Array([1, 1]);
    }

    tick(): void {

    }

    move() {

    }

    draw() {
        baseAtlas.drawSprite(this.image, this.pos, [this.size[0], -this.size[0]], this.rot, this.color); // TODO: , this.z);
    }
}

export class CommandPoint extends Thing {
    image = "img/point02.png";
    sliceImage = "img/map/slice02.png";
    size = [1, 1];
    maxHP = 1000;
    radius = 250;
    commandPoint = true;
    capping = 0;
    maxCapp = 10;
    value = 1;
    z: number;
    side: string;
    pos: Float64Array;
    id: number;
    color: [number, number, number, number];
    rot: number;
    vel: Float64Array;
    hp: number;
    dead: boolean;
    linkedSpawn: any;

    constructor() {
        super();
        this.id = Sim.Instance.nid();
        this.dead = false;
        this.z = .01;
        this.hp = this.maxHP;
        this.pos = new Float64Array([0, 0]);
        this.vel = new Float64Array([0, 0]);
        this.rot = 0;
        this.color = [255, 255, 255, 255];
        this.side = "neutral";
        this.capping = 0;
    };

    static object_to_array(sides: { [key: string]: boolean; }) {
        let results = [];
        for (let side in sides) {
            results.push(side);
        }
        return results;
    };

    tick() {
        Sim.Instance.timeStart("commandPoint");
        if (Sim.Instance.state !== "running") {
            Sim.Instance.timeEnd("commandPoint");
            return;
        }
        if (Sim.Instance.serverType === "CTF") {
            Sim.Instance.timeEnd("commandPoint");
            return;
        }
        if (Sim.Instance.step % 16 === 0) {
            if (this.side !== null) {
                for (let curr_player in Sim.Instance.players) {
                    if (Sim.Instance.players[curr_player]
                        && Sim.Instance.players[curr_player].side === this.side) {
                        if (Sim.Instance.players[curr_player].gainsMoney && Sim.Instance.gainsMoney) {
                            Sim.Instance.players[curr_player].earnMoney(this.value);
                        }
                    }
                }
            }

            let sides: { [key: string]: boolean; } = {};
            let playerOnPoint = [];
            for (let thing_id in Sim.Instance.things) {
                if (Sim.Instance.things[thing_id].unit && Sim.Instance.things[thing_id].canCapture) {
                    if (v2.distance(this.pos, Sim.Instance.things[thing_id].pos) < this.radius) {
                        sides[Sim.Instance.things[thing_id].side] = true;
                        if (Sim.Instance.players[Sim.Instance.things[thing_id].owner]) {
                            playerOnPoint.push(Sim.Instance.players[Sim.Instance.things[thing_id].owner]);
                        }
                    }
                }
            }

            let sides_arr = CommandPoint.object_to_array(sides);

            if (sides_arr.length === 1 && (this.side !== sides_arr[0] || Sim.Instance.serverType === "IO")) {
                this.capping += 1 / this.value;
                if (this.capping >= this.maxCapp) {
                    if (Sim.Instance.serverType !== "IO") {
                        this.side = sides_arr[0];
                        this.bonus(this.side, 100);
                        if (this.linkedSpawn) {
                            this.linkedSpawn.side = this.linkedSpawn.spawn = this.side;
                        }
                    } else {
                        this.pos = new Float64Array([(Math.random() * 2 - 1) * 2000, (Math.random() * 2 - 1) * 2000]);
                        for (let thing_id in Sim.Instance.things) {
                            if ((Sim.Instance.things[thing_id].spawn || Sim.Instance.things[thing_id].commandPoint)
                                && v2.distance(Sim.Instance.things[thing_id].pos, this.pos) < (Sim.Instance.things[thing_id].radius + this.radius + 100)) {
                                break;
                            }
                        }
                    }
                    Sim.Instance.captures += 1;
                    this.capping = 0;
                    let results = [];
                    for (let l = 0; l < playerOnPoint.length; l++) {
                        playerOnPoint[l].capps += 1;
                        if (Sim.Instance.serverType === "IO") {
                            playerOnPoint[l].earnMoney(Math.round(Sim.Instance.moneyInc * this.value));
                            results.push(playerOnPoint[l].maxMoney = Math.max(playerOnPoint[l].maxMoney, playerOnPoint[l].money));
                        } else {
                            results.push(void 0);
                        }
                    }
                    Sim.Instance.timeEnd("commandPoint");
                    return results;
                }
            } else {
                if (this.capping > 0) {
                    Sim.Instance.timeEnd("commandPoint");
                    return this.capping -= 1 / this.value;
                }
            }
        }
        Sim.Instance.timeEnd("commandPoint");
    };

    bonus(side: string, amount: number) {
        let results = [];
        for (let player in Sim.Instance.players) {
            if (Sim.Instance.players[player].side === this.side) {
                if (Sim.Instance.players[player].gainsMoney) {
                    results.push(Sim.Instance.players[player].earnMoney(amount));
                } else {
                    results.push(void 0);
                }
            }
        }
        return results;
    };

    draw() {
        if (Sim.Instance.theme) {
            let color = [255, 255, 255, 255]; // TODO: Sim.sideColor(this.side);
            baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot, color);
            if (this.capping > 0) {
                color = [255, 255, 255, 255]; // TODO: Sim.antiSideColor(this.side);
                let results = [];
                for (let i = 0; i < this.maxCapp; i++) {
                    if (this.capping < i) {
                        break;
                    }
                    let th = (i / this.maxCapp) * 2 * Math.PI;
                    let x = this.pos[0] + Math.sin(th) * (this.radius + 50);
                    let y = this.pos[1] + Math.cos(th) * (this.radius + 50);
                    results.push(baseAtlas.drawSprite(this.sliceImage, [x, y], [1, 1], Math.PI - th, color));
                }
                return results;
            }
        }
    };
}

export class SpawnPoint extends Thing {
    image: string = "";
    sliceImage: string = "img/map/spawnSlice.png";
    maxHP: number = 1000;
    size: number[] = [1, 1];
    static: boolean = true;
    radius: number = 400;
    spawn: string = "";
    side: string;
    id: number;
    pos: Float64Array;
    dead: boolean;
    z: number;
    vel: Float64Array;
    rot: number;
    hp: number;
    color: [number, number, number, number];
    commandPoint: boolean = false;
    bullet: boolean = false;
    spawnPoint: boolean = true;

    constructor() {
        super();
        this.id = Sim.Instance.nid();
        this.dead = false;
        this.z = .01;
        this.hp = this.maxHP;
        this.pos = new Float64Array([0, 0]);
        this.vel = new Float64Array([0, 0]);
        this.rot = 0;
        this.color = [255, 255, 255, 255];
        this.side = "neutral";
    }

    draw() {
        if (!Sim.Instance.theme) {
            return;
        }

        let color = ThingUtil.sideColor(this.side);
        let to = ((Sim.Instance.step - 8) / (16 * 2)) * 20;
        let results = [];

        let x, y, th;
        for (let i = 0; i < 20; i++) {
            if (to < i) {
                break;
            }

            th = (i / 20) * 2 * Math.PI;
            x = this.pos[0] + Math.sin(th) * (this.radius + 50);
            y = this.pos[1] + Math.cos(th) * (this.radius + 50);
            results.push(baseAtlas.drawSprite(this.sliceImage, [x, y], [1, 1], Math.PI / 2 - th, color));
        }
        return results;
    };
}

import {Part} from "./part";
import {Sim} from "./sim";
import {v2} from "./maths";
import {Unit} from "./unit";
import {baseAtlas, battleMode, commander, intp, ui} from "./dummy";