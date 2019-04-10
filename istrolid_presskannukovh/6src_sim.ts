import {v2} from "./4src_maths";
import {prot} from "./3src_protocol";
import {IstrolidMap, Mapping} from "./5src_maps";
import {ZJson} from "./994src_zjson";
import {Colors} from "./992src_colors";
import {HSpace} from "./2src_hspace";
import {Utils} from "./993src_utils";
import {Bullet, Particle, Player, Thing,} from "./94src_things";
import {Server} from "../server";
import {Unit, UnitUtils} from "./95src_unit";
import {Grid} from "./99src_grid";

export class Sim {
    static defaultBattleType = "3v3";
    private static _instance: Sim;
    DEBUG = false;
    VERSION = 49;
    MINOR_VERSION = 2;
    battleType: string;
    local: boolean;
    players: Player[];
    chat: {
        players: {
            [key: string]: Player; // Return ID based on name
        };
    };
    step: number;
    timeDelta: number;
    winningSide: string;
    numBattles: number;
    zJson: ZJson;
    projSpaces: { [key: string]: HSpace; };
    unitSpaces: { [key: string]: HSpace; };
    deaths: number;
    captures: number;
    net: {};
    counting: number;
    numRocks: number;
    mapSeed: number;
    countDown: number;
    modes: { [x: string]: typeof Sim; };
    fullUpdate: boolean;
    surrender_votes: { [key: string]: number; };
    commandPoint: any[];
    bulletSpaces: { [key: string]: HSpace };
    maxRadius: { [key: string]: number };
    things: Thing[];
    awaitRestart: boolean;
    axisSortedMissles: { [key: number]: Bullet };
    axisSort: number;
    units: { [key: number]: Unit };
    axisSortedUnits: { [key: number]: Unit };
    galaxyStar: boolean;
    theme: IstrolidMap;
    lastSimInterval: number;
    sound: boolean;
    ais: { useAiFleet: { (arg0: any, arg1: any, arg2: any): void; (arg0: any, arg1: any, arg2: any): void; }; };
    challenge: boolean;
    noAIPlayers: boolean;
    aiOnly: boolean;
    paused: boolean;
    cheatSimInterval: number;
    particles: Particle[];
    bullets: Bullet[];
    _pos: Float64Array;
    ffa: boolean;
    mapping: Mapping;
    deathPenalty: number;
    ticksPerSec = 16;
    defaultMoney = 2000;
    gainsMoney = true;
    makeRocks = true;
    state = "waiting";
    serverType = "3v3";
    lastId = 0;
    costLimit = 1000;
    aiTestMode = false;
    nGamesPlayed = 0;
    validTypes: { [x: string]: any; };
    numComPoints = 8;
    mapScale = 1.5;
    moneyRatio = 1;
    tickTime = 63;
    unitLimit = 100;
    enableAi = true;
    check = true;
    NxN = 24;
    gameFields = ["players", "things", "aiTestMode", "nGamesPlayed", "numBattles", "local", "step", "timeDelta", "winningSide", "numBattles", "unitSpaces", "projSpaces", "zJson", "serverType", "theme"];
    thingFields = ["onOrderId", "holdPosition", "hp", "energy", "shield", "cloak", "burn", "dead", "radius", "size", "rot", "image", "warpIn", "color", "sliceImage", "side", "owner", "capping", "spawn", "aoe", "damage", "life", "maxLife", "turretNum", "targetPos", "hitPos"];
    playerFields = ["name", "side", "afk", "host", "money", "connected", "dead", "color", "mouse", "action", "buildQ", "validBar", "ai", "apm", "capps", "kills", "unitsBuilt", "moneyEarned", "rallyPoint"];
    simFields = ["serverType", "step", "theme", "state", "winningSide", "countDown"];
    data: {};
    timeings: { [x: string]: any; };
    timeStarts: { [x: string]: number; };
    timePath: string[];
    moneyInc: number;

    constructor(battleType: string) {
        this.battleType = battleType;
        this.victoryConditions = this.victoryConditions.prototype.bind(this);
        this.local = false;
        this.players = [];
        this.chat = {players: {}};
        this.step = 0;
        this.timeDelta = 0;
        this.winningSide = null;
        this.numBattles = 0;
        this.unitSpaces = {};
        this.projSpaces = {};
        this.zJson = new ZJson(prot.commonWords);
    }

    public static get Instance() {
        return this._instance || (this._instance = new this(this.defaultBattleType));
    }

    static otherSide(side: string) {
        if (side === "alpha") {
            return "beta";
        } else if (side === "beta") {
            return "alpha";
        } else {
            return "alpha";
        }
    };

    static say(message: string) {
        if (typeof Server !== "undefined" && Server.Instance !== null) {
            Sim.say(message);
        } else {
            console.log(message);
        }
    };

    static setRallyPoint(player: Player, point: Float64Array) {
        let _, ref, thing;
        if (!player) {
            return;
        }
        ref = Sim.Instance.things;
        for (_ in ref) {
            thing = ref[_];
            if (thing.spawn === player.side && v2.distance(thing.pos, point) < thing.radius) {
                player.usingSpawn = thing;
                player.rallyPoint = [0, 0];
                return;
            }
        }
        return player.rallyPoint = point;
    };

    static mouseMove(player: Player, pos: Float64Array, action: any) {
        if (!player) {
            return;
        }
        player.lastActiveTime = Date.now();
        v2.set(pos, player.mouse);
        return player.action = action;
    };

    static rand() {
        return Math.random() - 0.5;
    };

    static rid() {
        return Math.random().toString(32).slice(2);
    };

    static choose(list: number[]) {
        return list[Math.floor(Math.random() * list.length)];
    };

    static shuffle(list: any[]) {
        let ref = ((function () {
            let results1 = [];
            for (let m = 0; m < list.length; m++) {
                let e = list[m];
                results1.push([Math.random(), e]);
            }
            return results1;
        })()).sort();

        let results = [];
        for (let l = 0; l < ref.length; l++) {
            results.push(ref[l][1]);
        }
        return results;
    };

    static isArray(a: any) {
        if (Array.isArray(a)) {
            return true;
        }
        return a instanceof Float64Array;
    };

    simpleEquals(a: any, b: any) {
        let e, i, k, l, len1, v;

        if (a === b) {
            return true;
        }

        if (a === null || b === null) {
            return false;
        }

        if (a === void 0 || b === void 0) {
            return false;
        }

        if (typeof a !== typeof b) {
            return false;
        }

        if (Sim.isArray(a) && Sim.isArray(b)) {
            if (a.length !== b.length) {
                return false;
            }
            for (i = l = 0, len1 = a.length; l < len1; i = ++l) {
                e = a[i];
                if (!this.simpleEquals(e, b[i])) {
                    return false;
                }
            }
            return true;
        }
        if (typeof a === "object") {
            for (k in a) {
                v = a[k];
                if (!this.simpleEquals(v, b[k])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };

    nid() {
        let id = this.lastId;
        this.lastId += 1;
        return id;
    };

    start() {
        let l, len1, p, ref;
        this.net = {};
        this.step = 0;
        this.timeDelta = 0;
        this.winningSide = null;
        this.lastId = 0;
        this.counting = 0;
        this.generateMap(this.mapScale, this.numComPoints, this.mapSeed);
        if (this.players == null) {
            this.players = [];
        } else {
            ref = this.players;
            for (l = 0, len1 = ref.length; l < len1; l++) {
                p = ref[l];
                p.reset();
                if (p.connected) {
                    this.validateBuildBar(p);
                }
            }
        }
        if (this.chat == null) {
            this.chat = {players: {}};
        }
        this.winningSide = null;
        this.state = "starting";
        this.regenerateMap();
        this.captures = 0;
        this.deaths = 0;
        this.nGamesPlayed += 1;
        return this.clearNetState();
    };

    configGame(p: { host: boolean; name: string; }, config: { type: string; }) {
        let l, len1, player, ref;
        console.log("config game!", config);
        if (this.state !== "waiting") {
            console.log("Can't set config on game in progress");
            return;
        }
        if (!p.host) {
            console.log("Can't set config when not a host");
            return;
        }
        ref = this.players;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            player = ref[l];
            if (player.host) {
                continue;
            }
            player.side = "spectators";
            if (player.ai) {
                player.connected = false;
            }
        }
        if (!this.validTypes[config.type]) {
            console.log("Config type is not valid");
            return;
        }

        if (this.serverType !== config.type) {
            this.serverType = config.type;
            Sim.say(p.name + " changed server type to " + config.type);
            /*
            // TODO:

            if (typeof serverTick === "function") {
                serverTick();
            }

            newMode = this.modes[config.type] || Sim;
            if (this.constructor.name !== newMode.name) {
                newSim = new newMode(newMode.name);
                for (let m = 0; m < this.gameFields.length; m++) {
                    field = ref1[m];
                    newSim[field] = this[field];
                }
                if (typeof newSim.init === "function") {
                    newSim.init();
                }
                Sim.Instance.sim = newSim;
                if (typeof applyDiff === "function") {
                    applyDiff(diffStats, true);
                }
            }
            */
        }
    };

    localConfigGame(p: { name: string; }, config: { type: string; }) {
        let newMode;
        console.log("Config game!", config);

        if (this.state !== "waiting") {
            console.log("Can't set config on game in progress");
            return;
        }
        if (!this.validTypes[config.type]) {
            console.log("Config type is not valid");
            return;
        }
        if (this.serverType !== config.type) {
            this.serverType = config.type;
            Sim.say(p.name + " changed server type to " + config.type);

            /*
            for player in @players
                continue if player.host
                player.side = "spectators"
                if player.ai
                    player.connected = false
             */
            // TODO:
            /*
            if (typeof serverTick === "function") {
                serverTick();
            }

            newMode = this.modes[config.type] || Sim;
            if (this.constructor.name !== newMode.name) {
            newSim = new newMode();
            ref = this.gameFields;
            for (l = 0, len1 = ref.length; l < len1; l++) {
                field = ref[l];
                newSim[field] = this[field];
            }
            //window.sim = newSim;
            if (typeof applyDiff === "function") {
                applyDiff(diffStats, true);
            }

            if (typeof Sim.Instance.init === "function") {
                Sim.Instance.init();
            }*/
        }
    }

    playersPerTeam() {
        if (this.serverType.slice(0, 3) === "1v1") {
            return 1;
        }
        if (this.serverType === "2v2") {
            return 2;
        }
        if (this.serverType === "3v3") {
            return 3;
        }
        if (this.serverType === "FFA") {
            return 6;
        }
        return 3;
    };

    generateMap(mapScale: number, numComPoints: number, mapSeed: any) {
        this.mapScale = mapScale != null ? mapScale : 1.5;
        this.numComPoints = numComPoints != null ? numComPoints : 8;
        this.mapSeed = mapSeed;
        this.numRocks = 60 * this.mapScale;
        return this.regenerateMap();
    };

    regenerateMap() {
        return this.mapping.generate(this.mapSeed);
    };

    playerJoin(_: any, pid: any, name: any, color: any, buildBar: any, aiRules: any, ai: boolean) {
        let dcIndex, i, l, len1, len2, m, p, player, ref, ref1;
        if (ai == null) {
            ai = false;
        }
        console.log("playerJoin", pid, name, color);
        ref = this.players;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            p = ref[l];
            if (p.id === pid) {
                player = p;
                break;
            }
        }
        if (!player) {
            player = new Player(pid);
            player.streak = 0;
            if (this.local) {
                player.side = "alpha";
            } else {
                player.side = "spectators";
            }
            dcIndex = null;
            ref1 = this.players;
            for (i = m = 0, len2 = ref1.length; m < len2; i = ++m) {
                p = ref1[i];
                if (!p.connected && p.side === "spectators") {
                    dcIndex = i;
                }
            }
            if (dcIndex === null) {
                player.number = this.players.length;
                this.players.push(player);
            } else {
                player.number = dcIndex;
                this.players[dcIndex] = player;
            }
            if (this.local) {
                this.clearNetState();
            }
        } else {
            this.clearNetState();
        }
        this.playerEdit(_, pid, name, color, buildBar, aiRules, ai);
        return player;
    };

    playerEdit(_: any, pid: any, name: any, color: any, buildBar: any[], aiRules: any, ai: boolean) {
        let canEditShips, i, l, len1, m, o, p, player, ref;
        ref = this.players;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            p = ref[l];
            if (p.id === pid) {
                player = p;
                break;
            }
        }
        player.name = name;
        player.color = Colors.validate(color);
        player.color[3] = 255;
        player.ai = ai;
        player.aiRules = aiRules;
        if (!player.buildBar) {
            player.buildBar = [[], [], [], [], [], [], [], [], [], []];
        }

        if (!player.validBar) {
            player.validBar = [false, false, false, false, false, false, false, false, false, false];
        }
        player.connected = true;
        if (this.serverType === "1v1t" && this.state !== "waiting" && player.side !== "spectators") {
            for (i = m = 0; m < 10; i = ++m) {
                if (JSON.stringify(player.buildBar[i]) !== JSON.stringify(buildBar[i]) && player.side !== "spectators") {
                    console.log("---");
                    console.log(JSON.stringify(player.buildBar[i]));
                    console.log(JSON.stringify(buildBar[i]));
                }
            }
            canEditShips = false;
        } else {
            canEditShips = true;
        }
        if (canEditShips) {
            for (i = o = 0; o < 10; i = ++o) {
                player.buildBar[i] = buildBar[i] || null;
            }
            this.validateBuildBar(player);
        }
        player.actions += 1;
        return player;
    };

    switchSide(player: { kickTime: number; side: any; streek: number; lastActiveTime: number; }, side: string) {
        if (!player) {
            return;
        }
        if (player.kickTime > Utils.now() - 15000) {
            return;
        }
        if (this.local && !Sim.Instance.galaxyStar && !Sim.Instance.challenge) {
            player.side = side;
            return;
        }
        if (side !== "spectators" && this.numInTeam(side) >= this.playersPerTeam()) {
            return;
        }
        if (this.state !== "waiting") {
            return;
        }
        player.side = side;
        if (side === "spectators") {
            player.streek = 0;
        }
        return player.lastActiveTime = Date.now();
    };

    whoIsHost() {
        let haveHost, l, len1, len2, m, p, ref, ref1;
        haveHost = false;
        ref = this.players;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            p = ref[l];
            if (p.host === true) {
                if (!p.connected || p.side === "spectators") {
                    p.host = false;
                    haveHost = false;
                    break;
                } else {
                    haveHost = true;
                    break;
                }
            }
        }
        if (!haveHost) {
            ref1 = this.players;
            for (m = 0, len2 = ref1.length; m < len2; m++) {
                p = ref1[m];
                if (!p.ai && p.connected && p.side !== "spectators") {
                    p.host = true;
                    break;
                }
            }
        }
    };

    addAi(player: any, name: any, side: any, aiBuildBar: any, nocheck: boolean) {
        let l, len1, numAi, p, ref, total;
        if (nocheck == null) {
            nocheck = false;
        }
        console.log("addAI", name, side);
        if (!this.local) {
            if (this.noAIPlayers) {
                return;
            }

            /*
            if @serverType == "1v1r"
                return
            if @serverType == "1v1"
                return
             */
            if (nocheck) {
                return this.ais.useAiFleet(name, side, aiBuildBar);
            }
            if (this.numInTeam(side) >= this.playersPerTeam()) {
                console.log("Enough players in team");
                return;
            }
            if (this.state !== "waiting") {
                return;
            }
            total = this.playersPerTeam() * 2;
            numAi = 0;
            ref = this.players;
            for (l = 0, len1 = ref.length; l < len1; l++) {
                p = ref[l];
                if (p.ai && p.connected && p.side !== "spectators") {
                    numAi += 1;
                }
            }
            if (numAi === total - 1) {
                console.log("All players can't be AI");
                return;
            }
        }
        return this.ais.useAiFleet(name, side, aiBuildBar);
    };

    kickPlayer(p: Player, number: number) {
        let player;
        if (this.state !== "waiting") {
            return;
        }
        if (!p.host) {
            return;
        }
        player = this.players[number];
        if (player) {
            player.side = "spectators";
            player.kickTime = Utils.now();
            if (player.ai) {
                player.connected = false;
            }
            return Sim.say(p.name + " kicked " + player.name);
        }
    };

    kickAllAis() {
        let l, len1, player, ref, results;
        if (this.aiTestMode) {
            return;
        }
        ref = this.players;
        results = [];
        for (l = 0, len1 = ref.length; l < len1; l++) {
            player = ref[l];
            if (player.ai) {
                player.connected = false;
                results.push(player.side = "spectators");
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    startGame(player: { host: any; name: string; }, real: boolean) {
        if (real == null) {
            real = false;
        }

        if (this.local) {
            this.start();
            return;
        }

        if (!player.host || !(player.name === "Avamander")) {
            console.log("A non-host player is trying to start game.");
            return;
        }

        if (this.state !== "waiting") {
            console.log("Trying to start a game when a game is already in progress. State:", this.state);
            return;
        }

        if (!this.canStart(true)) {
            return;
        }

        Sim.say("Game is about to start!");
        return this.countDown = 16 * 6;
    };

    canStart(sayStuff: boolean) {
        if (sayStuff == null) {
            sayStuff = false;
        }
        if (this.numInTeam("alpha") < this.playersPerTeam()) {
            if (sayStuff) {
                Sim.say("Team alpha does not have enough players.");
            }
            return false;
        }
        if (this.numInTeam("beta") < this.playersPerTeam()) {
            if (sayStuff) {
                Sim.say("Team beta does not have enough players.");
            }
            return false;
        }
        return true;
    };

    validateBuildBar(player: Player) {
        let i, l, len1, n, ref, spec;
        if (!this.check) {
            player.validBar = (function () {
                let l, results;
                results = [];
                for (n = l = 0; l < 10; n = ++l) {
                    results.push(true);
                }
                return results;
            })();
            return;
        }
        ref = player.buildBar;
        for (i = l = 0, len1 = ref.length; l < len1; i = ++l) {
            spec = ref[i];
            player.validBar[i] = Grid.validSpec(player, spec);
        }
    };

    moveOrder(player: Player, points: any[], additive: any, orderId: any) {
        let l, len1, n, ref, results, u;
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;
        n = 0;
        ref = player.selection;
        results = [];
        for (l = 0, len1 = ref.length; l < len1; l++) {
            u = ref[l];
            if ((u != null) && u.owner === player.number && !u.dead) {
                u.giveOrder({
                    id: orderId,
                    type: "Move",
                    dest: points[n],
                    range: 0
                }, additive);
                n += 1;
                if (n === points.length) {
                    n = points.length - 1;
                }
                results.push(u.underPlayerControl = true);
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    followOrder(player: Player, unitId: any, additive: any, orderId: any) {
        let l, len1, ref, results, u;
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;
        ref = player.selection;
        results = [];
        for (l = 0, len1 = ref.length; l < len1; l++) {
            u = ref[l];
            if (u.owner === player.number) {
                u.giveOrder({
                    id: orderId,
                    type: "Follow",
                    targetId: unitId,
                    noFinish: true
                }, additive);
                results.push(u.underPlayerControl = true);
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    stopOrder(player: Player, additive: any) {
        let l, len1, ref, results, u;
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;
        ref = player.selection;
        results = [];
        for (l = 0, len1 = ref.length; l < len1; l++) {
            u = ref[l];
            if (u.owner === player.number) {
                results.push(u.stopAndClearOrders());
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    holdPositionOrder(player: Player, additive: any) {
        let l, len1, len2, m, ref, ref1, results, someHolding, u;
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;
        someHolding = false;
        ref = player.selection;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            u = ref[l];
            if (u.owner === player.number && u.holdPosition) {
                someHolding = true;
                break;
            }
        }
        ref1 = player.selection;
        results = [];
        for (m = 0, len2 = ref1.length; m < len2; m++) {
            u = ref1[m];
            if (u.owner === player.number) {
                if (someHolding) {
                    results.push(u.holdPosition = false);
                } else {
                    results.push(u.holdPosition = !u.holdPosition);
                }
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    selfDestructOrder(player: Player, additive: any) {
        let l, len1, ref, results, u;
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;
        ref = player.selection;
        results = [];
        for (l = 0, len1 = ref.length; l < len1; l++) {
            u = ref[l];
            if (u.owner === player.number) {
                results.push(u.selfDestruct());
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    buildUnit(pid: number, number: number, pos: Float64Array) {
        let _, _where, l, len1, player, ref, ref1, spec, totalUnits, u, unit, w;
        player = this.players[pid];
        if (!player) {
            return;
        }
        if (!player.validBar[number]) {
            return;
        }
        totalUnits = 0;
        ref = this.things;
        for (_ in ref) {
            u = ref[_];
            if (u.unit && u.owner === player.number) {
                totalUnits += 1;
            }
        }
        if (totalUnits >= this.unitLimit) {
            return;
        }
        spec = player.buildBar[number];
        if (player.money < UnitUtils.specCost(spec)) {
            return;
        }
        player.actions += 1;
        unit = new Unit(spec);
        unit.owner = player.number;
        unit.side = player.side;
        unit.color = player.color.slice(0);
        unit.number = number;
        player.money -= unit.cost;
        this.things[unit.id] = unit;
        if (pos) {
            v2.set(pos, unit.pos);
            unit.rot = v2.angle(unit.pos) + Math.PI;
            ref1 = unit.weapons;
            for (l = 0, len1 = ref1.length; l < len1; l++) {
                w = ref1[l];
                w.rot = unit.rot;
            }
        }
        if (player.rallyPoint != null) {
            _where = [player.rallyPoint[0] - unit.pos[0], player.rallyPoint[1] - unit.pos[1]];
            unit.rot = v2.angle(new Float64Array(_where));
        }
        return unit;
    };

    placeUnit(pid: number, bar_number: Unit, pos: Float64Array) {
        let cls, player;
        player = this.players[pid];
        if (!player) {
            return;
        }

        // @ts-ignore
        cls = player.buildBar[bar_number];
        console.log("Requested to place unit with type:", bar_number);
        if (this.canBuildHere(pos, player.side, cls)) {
            // @ts-ignore
            return this.buildUnit(pid, bar_number, pos);
        }
    };

    buildRq(player: Player, name: number, number: number) {
        let i, l, len, m, n, ref, ref1;
        if (!player) {
            return;
        }
        if (number > 0) {
            for (i = l = 0, ref = number; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                player.buildQ.push(name);
            }
        } else if (number < 0) {
            len = player.buildQ.length;
            for (i = m = ref1 = len - 1; ref1 <= -1 ? m < -1 : m > -1; i = ref1 <= -1 ? ++m : --m) {
                if (player.buildQ[i] === name) {
                    player.buildQ[i] = null;
                    number += 1;
                    if (number === 0) {
                        break;
                    }
                }
            }
            player.buildQ = (function () {
                let len1, o, ref2, results;
                ref2 = player.buildQ;
                results = [];
                for (o = 0, len1 = ref2.length; o < len1; o++) {
                    n = ref2[o];
                    if (n !== null) {
                        results.push(n);
                    }
                }
                return results;
            })();
        }
    };

    findSpawnPoint(player: Player) {
        let _, ref, unit;
        if ((player != null ? player.usingSpawn : void 0)) {
            if (player.usingSpawn.side === player.side) {
                return player.usingSpawn;
            } else {
                player.usingSpawn = null;
            }
        }
        ref = this.things;
        for (_ in ref) {
            unit = ref[_];
            if (unit.spawn === player.side) {
                return unit;
            }
        }
    };

    canBuildHere(pos: Float64Array, side: string, cls: Unit) {
        let _, dist, inRange, ref, unit;
        inRange = false;
        ref = this.things;
        for (_ in ref) {
            unit = ref[_];
            if (unit.unit || unit.commandPoint) {
                dist = v2.distance(pos, unit.pos);
                if (unit.unit) {
                    if (dist < unit.radius + cls.radius) {
                        return false;
                    }
                }
                if (unit.commandPoint) {
                    if (unit.side === side && dist < unit.radius) {
                        inRange = true;
                    }
                }
            }
        }
        return inRange;
    };

    playerSelected(player: Player, selection: any[]) {
        let id, l, len1, ref, ref1, results, t, u;
        if (!player) {
            return;
        }
        ref = player.selection;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            u = ref[l];
            if (u.owner === player.number) {
                u.underPlayerControl = false;
            }
        }
        player.selection = [];
        ref1 = this.things;
        results = [];
        for (id in ref1) {
            t = ref1[id];
            results.push((function () {
                let len2, m, results1;
                results1 = [];
                for (m = 0, len2 = selection.length; m < len2; m++) {
                    id = selection[m];
                    if (t.id === id) {
                        results1.push(player.selection.push(t));
                    } else {
                        results1.push(void 0);
                    }
                }
                return results1;
            })());
        }
        return results;
    };

    surrender(player: Player) {
        if (!player) {
            return;
        }
        if (this.winningSide) {
            return;
        }
        if (this.state !== "running") {
            return;
        }

        if (this.surrender_votes === undefined) {
            this.surrender_votes = {};
        }

        let team_players = this.players.filter(function (filter_players: Player) {
            return filter_players.ai === false &&
                filter_players.side === player.side;
        });

        if (team_players.length === 1) {
            if (player.side === "beta") {
                this.winningSide = "alpha";
            } else if (player.side === "alpha") {
                this.winningSide = "beta";
            } else {
                return;
            }

            Sim.say(player.name + " surrendered");

            return this.endOfGame();
        } else if (team_players.length >= 1) {
            if (!player.surrendered === undefined) {
                player.surrendered = false;
            }

            if (!player.surrendered) {
                if (this.surrender_votes[player.side] === undefined) {
                    this.surrender_votes[player.side] = 1;
                } else {
                    this.surrender_votes[player.side] += 1;
                }
                player.surrendered = true;
            } else {
                return;
            }

            if (this.surrender_votes[player.side] > (team_players.length - 1)) {
                if (player.side === "beta") {
                    this.winningSide = "alpha";
                } else if (player.side === "alpha") {
                    this.winningSide = "beta";
                } else {
                    return;
                }

                Sim.say(player.name + " surrendered");
                return this.endOfGame();
            } else {
                Sim.say(player.name + " voted to surrender");
                Sim.say((team_players.length - this.surrender_votes[player.side]) + " vote(s) more required");
                return;
            }
        }
    };

    checkAfkPlayers() {
        let l, len1, player, ref, results;
        ref = this.players;
        results = [];
        for (l = 0, len1 = ref.length; l < len1; l++) {
            player = ref[l];
            if (player.ai) {
                if (player.side !== "spectators") {
                    player.afk = false;
                    results.push(player.connected = true);
                } else {
                    results.push(void 0);
                }
            } else if (!player.connected) {
                results.push(player.afk = true);
            } else if (player.lastActiveTime < Date.now() - 1000 * 60 * 10) {
                if (this.serverType !== "1v1r") {
                    results.push(player.afk = true);
                } else {
                    results.push(void 0);
                }
            } else {
                results.push(player.afk = false);
            }
        }
        return results;
    };

    numInTeam(side: string) {
        let l, len1, num, player, ref;
        num = 0;
        ref = this.players;
        for (l = 0, len1 = ref.length; l < len1; l++) {
            player = ref[l];
            if (player.side === side) {
                num += 1;
            }
        }
        return num;
    };

    startingSim() {
        if (this.state === "starting") {
            this.state = "running";
        }
        if (this.state === "ended") {
            this.state = "waiting";
        }
        if (this.countDown > 0) {
            this.countDown -= 1;
            if (!this.canStart(true)) {
                this.state = "waiting";
                this.countDown = 0;
                return;
            }
            if (this.countDown === 0) {
                this.start();
            }
        }
        if (this.state === "waiting" && this.serverType === "1v1r" && this.canStart(false) && this.countDown === 0) {
            Sim.say("Challenger appears, game is about to start!");
            return this.countDown = 16 * 6;
        }
    };

    simulate() {
        let id, l, len1, len2, m, player, ref, ref1, ref2, ref3, ref4, ref5, t, thing;
        this.timeStart("sim");
        this.step += 1;
        this.startingSim();
        this.checkAfkPlayers();
        this.whoIsHost();
        this.timeIt("spacesRebuild", (function (_this) {
            return function () {
                return _this.spacesRebuild();
            };
        })(this));

        this.timeStart("units");
        this.units = [
            (function () {
                let ref, results;
                ref = Sim.Instance.things;
                results = [];
                for (id in ref) {
                    t = ref[id];
                    if (t.unit) {
                        results.push(t);
                    }
                }
                return results;
            }).call(this)
        ];
        this.timeEnd("units");

        this.timeStart("bullets");
        this.bullets = [
            (function () {
                let ref, results;
                ref = Sim.Instance.things;
                results = [];
                for (id in ref) {
                    t = ref[id];
                    if (t.bullet) {
                        results.push(t);
                    }
                }
                return results;
            }).call(this)
        ];
        this.timeEnd("bullets");

        this.timeStart("commandPoint");
        this.commandPoint = [
            (function () {
                let ref, results;
                ref = Sim.Instance.things;
                results = [];
                for (id in ref) {
                    t = ref[id];
                    if (t.bullet) {
                        results.push(t);
                    }
                }
                return results;
            }).call(this)
        ];
        this.timeEnd("commandPoint");

        this.timeStart("death");
        ref = Sim.Instance.things;
        for (id in ref) {
            thing = ref[id];
            if (thing.dead) {
                if (typeof thing.postDeath === "function") {
                    thing.postDeath();
                }
                delete this.things[id];
            }
        }
        this.timeEnd("death");

        this.timeStart("tick");
        ref1 = this.things;
        for (id in ref1) {
            thing = ref1[id];
            if (typeof thing.tick === "function") {
                thing.tick();
            }
        }
        this.timeEnd("tick");

        this.timeStart("move");
        ref2 = this.things;
        for (id in ref2) {
            thing = ref2[id];
            if (typeof thing.move === "function") {
                thing.move();
            }
        }
        this.timeEnd("move");

        this.timeIt("unitsCollide", (function (_this) {
            return function () {
                return _this.unitsCollide();
            };
        })(this));


        this.timeStart("players");
        if (this.state === "running" || this.serverType === "sandbox") {
            ref3 = this.players;
            for (l = 0, len1 = ref3.length; l < len1; l++) {
                player = ref3[l];
                if (player.side !== "spectators") {
                    player.tick();
                }
            }
        }
        ref4 = this.players;
        for (m = 0, len2 = ref4.length; m < len2; m++) {
            player = ref4[m];
            if (this.state === "waiting" && player.afk) {
                player.side = "spectators";
            }
            if (player.side === null) {
                player.side = "spectators";
            }
        }
        this.timeEnd("players");

        this.victoryConditions();
        // @ts-ignore
        if (typeof this.extra === "function") {
            // @ts-ignore
            this.extra();
        }
        /* TODO:
        if ((ref5 = Sim.Instance.galaxyStar) != null) {
            if (typeof ref5.tick === "function") {
                ref5.tick();
            }
        }*/
        return this.timeEnd("sim");
    };

    spacesRebuild() {
        let ref1, thing;
        this.unitSpaces = {
            "alpha": new HSpace(500),
            "beta": new HSpace(500)
        };
        this.bulletSpaces = {
            "alpha": new HSpace(100),
            "beta": new HSpace(100)
        };
        this.maxRadius = {
            alpha: 0,
            beta: 0
        };

        for (let id in this.things) {
            thing = this.things[id];
            if (thing.dead) {
                continue;
            }
            if (thing.unit) {
                if ((ref1 = this.unitSpaces[thing.side]) != null) {
                    ref1.insert(thing);
                }
                if (this.maxRadius[thing.side] != null) {
                    if (thing.radius > this.maxRadius[thing.side]) {
                        this.maxRadius[thing.side] = thing.radius;
                    }
                }
            }
            if (thing.bullet) {
                this.bulletSpaces[thing.side].insert(thing);
            }
        }
    };

    victoryConditions() {
        let cappedArr, id, k, l, len1, player, ref, ref1, stillThere, thing;
        if (this.state !== "running") {
            return;
        }
        let capped: { [key: string]: number; } = {};
        ref = this.things;
        for (id in ref) {
            thing = ref[id];
            if (thing.commandPoint) {
                capped[thing.side] = (capped[thing.side] || 0) + 1;
            }
        }
        cappedArr = (function () {
            let results;
            results = [];
            for (k in capped) {
                results.push(k);
            }
            return results;
        })();
        if (cappedArr.length === 0) {
            return;
        }
        if (cappedArr.length === 1 && cappedArr[0] !== "neutral") {
            this.winningSide = cappedArr[0];
        }
        if (this.winningSide) {
            this.endOfGame();
            return;
        }
        if (!this.local && !this.aiTestMode) {
            stillThere = false;
            ref1 = this.players;
            for (l = 0, len1 = ref1.length; l < len1; l++) {
                player = ref1[l];
                if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                    stillThere = true;
                }
            }
            if (!stillThere) {
                Sim.say("Every one left. Ending game.");
                this.winningSide = "";
                this.endOfGame();
            }
        } else if (this.step > 16 * 60 * 30) {
            this.winningSide = "";
            this.endOfGame();
        }
    };

    endOfGame() {
        let player;

        if (this.surrender_votes === undefined) {
            this.surrender_votes = {};
        }
        this.surrender_votes["alpha"] = 0;
        this.surrender_votes["beta"] = 0;

        if (this.winningSide) {
            Sim.say(this.winningSide + " has won!");
        } else {
            Sim.say("Game ends in a draw!");
        }
        this.numBattles += 1;
        if (this.numBattles > 100) {
            this.awaitRestart = true;
        }
        // TODO: READD
        //if (typeof this.sendGameReport === "function") {
        //    this.sendGameReport();
        //}
        if (this.serverType === "1v1r" && this.winningSide) {
            for (let l = 0; l < this.players.length; l++) {
                player = this.players[l];
                if (player.side !== "spectators") {
                    if (player.side === this.winningSide) {
                        player.streak += 1;
                        if (player.streak === 1) {
                            Sim.say(player.name + " wins a battle");
                        } else {
                            Sim.say(player.name + " wins " + player.streak + " battles");
                        }
                        player.host = true;
                    } else {
                        player.side = "spectators";
                        player.host = false;
                        player.streak = 0;
                        Sim.say(player.name + " lost and was kicked");
                        player.kickTime = Utils.now();
                    }
                }
            }
        }
        return this.state = "ended";
    };

    unitsCollide() {
        let distance, force, i, j, k, l, len1, missles, ratio, results, t, u, u2, units;
        units = (function () {
            let ref, results;
            ref = Sim.Instance.things;
            results = [];
            for (k in ref) {
                t = ref[k];
                if (t.unit && !t.fixed && t.active) {
                    results.push(t);
                }
            }
            return results;
        }).call(this);

        let n = this.step % 2;
        units.sort(function (a: { pos: number[]; }, b: { pos: number[]; }) {
            return a.pos[n] - b.pos[n];
        });

        this.axisSort = n;
        this.axisSortedUnits = units;
        missles = (function () {
            let ref, results;
            ref = Sim.Instance.things;
            results = [];
            for (k in ref) {
                t = ref[k];
                if (t.missile) {
                    results.push(t);
                }
            }
            return results;
        }).call(this);
        missles.sort(function (a: { pos: number[]; }, b: { pos: number[]; }) {
            return a.pos[n] - b.pos[n];
        });
        this.axisSortedMissles = missles;
        results = [];
        for (i = l = 0, len1 = units.length; l < len1; i = ++l) {
            u = units[i];
            results.push((function () {
                let m, results1 = [];
                for (j = m = -4; m <= 4; j = ++m) {
                    u2 = units[i + j];
                    if (j !== 0 && u2) {
                        let _offset: Float64Array = new Float64Array([u.pos[0] - u2.pos[0], u.pos[1] - u2.pos[1]]);
                        distance = v2.mag(_offset);
                        if (distance < .001) {
                            _offset = new Float64Array([0, -1]);
                            distance = 1;
                        }
                        if (distance < u.radius + u2.radius) {
                            force = (u.radius + u2.radius) - distance;
                            ratio = u2.mass / (u.mass + u2.mass);
                            let _push = v2.create(null);
                            v2.scale(_offset, ratio * force / distance * .02, _push);
                            v2.add(u.pos, _push, null);
                            v2.scale(_offset, -(1 - ratio) * force / distance * .02, _push);
                            results1.push(v2.add(u2.pos, _push, null));
                        } else {
                            results1.push(void 0);
                        }
                    } else {
                        results1.push(void 0);
                    }
                }
                return results1;
            })());
        }
        return results;
    };

    send() {
        let _, changes, e, f, i, id, l, len1, len2, len3, len4, len5, len6, len8, m, o, p, packet, part,
            partId, player, predictable, q, r, ref1, ref10, ref11, ref13, ref2, ref3, ref4, ref5, ref6,
            ref7, ref8, ref9, s, send, splayers, sthings, t, targetId, thing, v, x, y, z;

        this.timeStart("send");
        this.timeStart("things");
        sthings = [];
        for (id in this.things) {
            thing = this.things[id];
            changes = [];
            changes.push(["thingId", thing.id]);
            if (thing.net == null) {
                thing.net = s = {};
                changes.push(["name", thing.constructor.name]);
                changes.push(["spec", thing.spec]);
                changes.push(["color", thing.color]);
                changes.push(["z", thing.z]);
            } else {
                // @ts-ignore
                if (thing["static"]) {
                    continue;
                } else {
                    s = thing.net;
                }
            }
            ref1 = this.thingFields;
            for (l = 0, len1 = ref1.length; l < len1; l++) {
                f = ref1[l];
                // @ts-ignore
                v = thing[f];
                if ((v != null) && !this.simpleEquals(s[f], v)) {
                    if (Sim.isArray(v)) {
                        if (s.length !== v.length) {
                            s[f] = new Array(v.length);
                        }
                        for (i = m = 0, len2 = v.length; m < len2; i = ++m) {
                            e = v[i];
                            s[f][i] = e;
                        }
                    } else {
                        s[f] = v;
                    }
                    changes.push([f, v]);
                }
            }
            predictable = false;
            if ((s.vel != null) && (s.pos != null)) {
                v2.add(s.pos, s.vel, this._pos);
                if (v2.distance(this._pos, thing.pos) < .1) {
                    v2.set(this._pos, s.pos);
                    predictable = true;
                }
            }
            if (!predictable) {
                if (s.vel == null) {
                    s.vel = v2.create(null);
                }
                if (s.pos == null) {
                    s.pos = v2.create(null);
                }
                v2.set(thing.vel, s.vel);
                v2.set(thing.pos, s.pos);
                changes.push(["vel", thing.vel]);
                changes.push(["pos", thing.pos]);
            }
            if (s.targetId !== ((ref2 = thing.target) != null ? ref2.id : void 0)) {
                s.targetId = (ref3 = thing.target) != null ? ref3.id : void 0;
                changes.push(["targetId", s.targetId]);
            }
            if (s.originId !== ((ref4 = thing.origin) != null ? ref4.id : void 0)) {
                s.originId = (ref5 = thing.origin) != null ? ref5.id : void 0;
                changes.push(["originId", s.originId]);
            }
            if (s.followId !== ((ref6 = thing.follow) != null ? ref6.id : void 0)) {
                s.followId = (ref7 = thing.follow) != null ? ref7.id : void 0;
                changes.push(["followId", s.followId]);
            }
            if (this.local) {
                if (s.message !== thing.message) {
                    s.message = thing.message;
                    changes.push(["message", s.message]);
                }
            }
            if (thing.parts != null) {
                ref8 = thing.parts;
                for (partId = o = 0, len3 = ref8.length; o < len3; partId = ++o) {
                    part = ref8[partId];
                    changes.push(["partId", partId]);
                    s = part.net;
                    if (!s) {
                        part.net = s = {};
                    }
                    if ((part.working != null) && s.working !== part.working) {
                        changes.push(["partWorking", part.working]);
                        s.working = part.working;
                    }
                    if (part.weapon) {
                        targetId = ((ref9 = part.target) != null ? ref9.id : void 0) || 0;
                        if (s.targetId !== targetId) {
                            changes.push(["partTargetId", targetId]);
                            s.targetId = targetId;
                        }
                        if (s.range !== part.range) {
                            changes.push(["partRange", part.range]);
                            s.range = part.range;
                        }
                    }
                    if (changes[changes.length - 1][0] === "partId") {
                        changes.pop();
                    }
                }
            }
            if (changes.length > 1) {
                sthings.push(changes);
            }
        }
        this.timeEnd("things");
        this.timeStart("players");
        splayers = [];
        ref10 = this.players;
        for (q = 0, len4 = ref10.length; q < len4; q++) {
            player = ref10[q];
            changes = [];
            changes.push(["playerNumber", player.number]);
            if (player.net == null) {
                player.net = {};
            }

            ref11 = this.playerFields;
            for (r = 0, len5 = ref11.length; r < len5; r++) {
                f = ref11[r];
                // @ts-ignore
                v = player[f];
                if ((v != null) && !this.simpleEquals(player.net[f], v)) {
                    if (Sim.isArray(v)) {
                        if (player.net.length !== v.length) {
                            player.net[f] = new Array(v.length);
                        }
                        for (i = x = 0, len6 = v.length; x < len6; i = ++x) {
                            e = v[i];
                            player.net[f][i] = e;
                        }
                    } else {
                        player.net[f] = v;
                    }
                    changes.push([f, v]);
                }
            }
            if (changes.length > 1) {
                splayers.push(changes);
            }
        }
        this.timeEnd("players");
        this.timeStart("other");

        player.net = this.net;
        for (y = 0; y < this.simFields.length; y++) {
            f = this.simFields[y];
            // @ts-ignore
            if (!this.simpleEquals(player.net[f], this[f])) {
                // @ts-ignore
                this.data[f] = this[f];
                // @ts-ignore
                player.net[f] = this[f];
            }
        }
        if (splayers.length > 0) {
            // @ts-ignore
            this.data.players = splayers;
        }
        if (sthings.length > 0) {
            // @ts-ignore
            this.data.things = sthings;
        }
        if (this.fullUpdate) {
            // @ts-ignore
            this.data.fullUpdate = true;
            this.fullUpdate = false;
        }

        if (this.step % 16 === 0) {
            send = false;
            if (this.DEBUG) {
                send = true;
            } else {
                ref13 = this.players;
                for (z = 0, len8 = ref13.length; z < len8; z++) {
                    player = ref13[z];
                    if ((player.name === "treeform") && player.connected) {
                        send = true;
                    }
                }
            }
            if (send) {
                // @ts-ignore
                this.data.perf = {
                    numbers: {
                        things: ((function () {
                            let results = [];
                            for (t in Sim.Instance.things) {
                                results.push(t);
                            }
                            return results;
                        }).call(this)).length,
                        sthings: sthings.length,
                        players: ((function () {
                            let i1, len9, ref14 = Sim.Instance.players;
                            let results = [];
                            for (i1 = 0, len9 = ref14.length; i1 < len9; i1++) {
                                p = ref14[i1];
                                results.push(p);
                            }
                            return results;
                        }).call(this)).length,
                        splayers: splayers.length,
                        units: ((function () {
                            let ref14 = Sim.Instance.things;
                            let results = [];
                            for (_ in ref14) {
                                t = ref14[_];
                                if (t.unit) {
                                    results.push(t);
                                }
                            }
                            return results;
                        }).call(this)).length,
                        bullets: ((function () {
                            let ref14 = Sim.Instance.things;
                            let results = [];
                            for (_ in ref14) {
                                t = ref14[_];
                                if (t.bullet) {
                                    results.push(t);
                                }
                            }
                            return results;
                        }).call(this)).length,
                        others: ((function () {
                            let ref14 = Sim.Instance.things;
                            let results = [];
                            for (_ in ref14) {
                                t = ref14[_];
                                if (!t.bullet && !t.unit) {
                                    results.push(t);
                                }
                            }
                            return results;
                        }).call(this)).length
                    },
                    timeings: this.timeings
                };
            }
            this.timeings = {};
        }
        this.timeEnd("other");
        this.timeStart("zJson");
        // @ts-ignore
        packet = this.zJson.dumpDv(this.data);
        this.timeEnd("zJson");
        this.timeEnd("send");
        return packet;
    };

    clearNetState() {
        let id, l, len1, len2, m, part, player, ref, ref1, ref2, results, thing;
        console.log("Clearing net state");
        this.fullUpdate = true;
        delete this.net;
        for (id in this.things) {
            thing = this.things[id];
            delete thing.net;
            if (thing.parts != null) {
                ref1 = thing.parts;
                for (l = 0, len1 = ref1.length; l < len1; l++) {
                    part = ref1[l];
                    delete part.net;
                }
            }
        }
        ref2 = this.players;
        results = [];
        for (m = 0, len2 = ref2.length; m < len2; m++) {
            player = ref2[m];
            results.push(delete player.net);
        }
        return results;
    };

    timeStart(what: string) {
        this.timePath.push(what);
        return this.timeStarts[this.timePath.join(">")] = Utils.now();
    };

    timeEnd(what: string) {
        let delta, key;
        key = this.timePath.join(">");
        if (this.timePath.pop() !== what) {
            throw "timeEnd does not match timeStart";
        }
        delta = Utils.now() - this.timeStarts[key];
        if (this.timeings[key] == null) {
            return this.timeings[key] = delta;
        } else {
            return this.timeings[key] += delta;
        }
    };

    timeIt(what: string, fn: { (): void; }) {
        this.timeStart(what);
        let ret = fn();
        this.timeEnd(what);
        return ret;
    };

    timeReport() {
        let bar, i, l, ref1;
        for (let k in this.timeings) {
            let v = this.timeings[k];
            bar = "";
            for (i = l = 0, ref1 = v; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
                bar += "*";
            }
            console.log(bar, k, v);
        }
        return this.timeings = {};
    };
}