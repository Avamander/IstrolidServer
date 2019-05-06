import {RaceMap} from "./race_map";

export class Sim {
    static defaultBattleType = "3v3";
    private static _instance: Sim;
    DEBUG = false;
    VERSION = 49;
    MINOR_VERSION = 2;

    local: boolean = false;
    awaitRestart: boolean = false;
    galaxyStar: boolean = false;
    challenge: boolean = false;
    noAIPlayers: boolean = false;
    aiOnly: boolean = false;
    paused: boolean = false;
    sound: boolean = false;
    ffa: boolean = false;
    gainsMoney: boolean = true;
    makeRocks: boolean = true;
    aiTestMode: boolean = false;

    step: number = 0;
    timeDelta: number = 0;
    numBattles: number = 0;
    deaths: number = 0;
    captures: number = 0;
    counting: number = 0;
    numRocks: number = 0;
    mapSeed: number = 0;
    countDown: number = 0;
    axisSort: number = 0;
    deathPenalty: number = 0;
    ticksPerSec: number = 16;
    nGamesPlayed: number = 0;
    lastId: number = 0;
    moneyInc: number = 0;
    lastSimInterval: number = 0;
    tickTime: number = 63;

    winningSide: string;
    battleType: string;
    state: string = "waiting";
    serverType: string = "3v3";

    // @ts-ignore
    net: {};

    commandPoint: CommandPoint[] = [];
    things: Thing[] = [];
    particles: Particle[] = [];
    bullets: Bullet[] = [];
    units: Unit[] = [];
    players: Player[] = [];
    WSKeyToPlayerID: { [key: string]: number } = {};
    chat: {
        players: {
            [key: string]: Player; // Return ID based on name
        };
    };

    axisSortedMissles: Bullet[] = [];
    axisSortedUnits: Unit[] = [];
    timePath: string[] = [];

    _pos: Float64Array = new Float64Array(2);

    modes: { [x: string]: typeof Sim; } = {};
    surrender_votes: { [key: string]: number; } = {};
    maxRadius: { [key: string]: number } = {};

    timeings: { [x: string]: any; } = {};
    timeStarts: { [x: string]: number; } = {};
    projSpaces: { [key: string]: HSpace; } = {};
    unitSpaces: { [key: string]: HSpace; } = {};
    bulletSpaces: { [key: string]: HSpace; } = {};

    // @ts-ignore
    ais: {
        useAiFleet: {
            (arg0: any, arg1: any, arg2: any): void;
            (arg0: any, arg1: any, arg2: any): void;
        };
    };

    validTypes: { [x: string]: any; } = {
        "1v1": "1v1",
        "1v1r": "1v1r",
        "1v1t": "1v1t",
        "2v2": "2v2",
        "3v3": "3v3",
        "nvn": "nvn",
        "Survival": "Survival",
        //"IO": "IO",
        "CTF": "CTF",
        ///"TicTacToe": "TicTacToe",
        "FFA": "FFA",
        "Tournament": "Tournament",
        "Race": "Race"
    };

    gameFields = ["players", "things", "aiTestMode", "nGamesPlayed", "numBattles", "local", "step", "timeDelta", "winningSide", "numBattles", "unitSpaces", "projSpaces", "zJson", "serverType", "theme"];
    thingFields = ["onOrderId", "holdPosition", "hp", "energy", "shield", "cloak", "burn", "dead", "radius", "size", "rot", "image", "warpIn", "color", "sliceImage", "side", "owner", "capping", "spawn", "aoe", "damage", "life", "maxLife", "turretNum", "targetPos", "hitPos"];
    playerFields = ["name", "side", "afk", "host", "money", "connected", "dead", "color", "mouse", "action", "buildQ", "validBar", "ai", "apm", "capps", "kills", "unitsBuilt", "moneyEarned", "rallyPoint"];
    simFields = ["serverType", "step", "theme", "state", "winningSide", "countDown"];

    data: any;

    theme: IstrolidMap;
    zJson: ZJson;
    gameMode: GameMode;
    aimanager: AI = AI.Instance;

    waveNum: number = 0;
    victoryGoal: number = 1;
    numFlags: number = 1;

    // Variables changeable with !sim
    overrideSpeed: boolean = false;
    NxN: number = 24;
    numComPoints: number = 8;
    mapScale: number = 1.5;
    moneyRatio: number = 1;
    unitLimit: number = 100;
    fullUpdate: boolean = false;
    defaultMoney: number = 2000;
    costLimit: number = 1000;
    cheatSimInterval: number = -12;
    enableAi: boolean = true;
    check: boolean = true;
    load_protection: boolean = false;
    connection_limit: number = 20;

    connection_count: number = 0;

    strong_collision: boolean = false;
    collision_enabled: boolean = true;

    constructor(battleType: string) {
        this.battleType = battleType;
        this.victoryConditions.bind(this);
        this.local = false;
        this.players = [];
        this.chat = {players: {}};
        this.step = 0;
        this.timeDelta = 0;
        this.winningSide = "";
        this.numBattles = 0;
        this.unitSpaces = {};
        this.projSpaces = {};
        this.zJson = new ZJson(prot.commonWords);
        this.net = {};
        this.lastId = 0;
        this.counting = 0;

        this.theme = Mapping.bluepurple;

        this.gameMode = new (<any>GameModes)["g" + battleType](this);
    }

    public static get Instance(): Sim {
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
        if (typeof IstrolidServer.Instance !== "undefined" && IstrolidServer.Instance !== null) {
            IstrolidServer.say(message);
        } else {
            console.log(message);
        }
    };

    static setRallyPoint(player: Player, point: Float64Array) {
        if (!player) {
            return;
        }

        let thing;

        for (let thing_id in Sim.Instance.things) {
            thing = Sim.Instance.things[thing_id];
            if (thing.spawnPoint &&
                thing.spawn === player.side &&
                v2.distance(thing.pos, point) < thing.radius) {
                player.usingSpawn = (thing as SpawnPoint);
                player.rallyPoint = new Float64Array([0, 0]);
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
        player.action = action;
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
        let e, i, k, len1, v;

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
            for (i = 0, len1 = a.length; i < len1; i++) {
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
    }

    nid() {
        let id = this.lastId;
        this.lastId += 1;
        return id;
    }

    start() {
        // Cleanup first
        console.log("Cleaning up!");
        this.net = {};
        this.step = 0;
        this.timeDelta = 0;
        this.winningSide = "";
        this.lastId = 0;
        this.counting = 0;

        if (this.players == null) {
            this.players = [];
        } else {
            for (let player_id in this.players) {
                this.players[player_id].reset();
                if (this.players[player_id].connected) {
                    this.validateBuildBar(this.players[player_id]);
                }
            }
        }

        if (!this.things) {
            this.things = [];
        } else {
            for (let id in this.things) {
                delete this.things[id];
            }
            delete this.things;
            this.things = [];
        }

        if (!this.units) {
            this.units = [];
        } else {
            for (let id in this.units) {
                delete this.units[id];
            }
            delete this.units;
            this.units = [];
        }

        this.state = "starting";
        this.captures = 0;
        this.deaths = 0;
        this.nGamesPlayed += 1;
        this.clearNetState();
        console.log("Cleaned up!");
        this.generateMap(
            this.mapScale,
            this.numComPoints,
            this.mapSeed);
        this.gameMode.start();
        console.log("Game started, cleaning net state!");
        this.clearNetState();
    };

    configGame(p: { host: boolean; name: string; }, config: { type: string; }) {
        let player;
        console.log("config game!", config);
        if (this.state !== "waiting") {
            console.log("Can't set config on game in progress");
            return;
        }
        if (!p.host) {
            console.log("Can't set config when not a host");
            return;
        }

        for (let l in this.players) {
            player = this.players[l];
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

            this.gameMode = new (<any>GameModes)["g" + config.type](this);
        }
    };

    localConfigGame(p: { name: string; }, config: { type: string; }) {
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
            this.gameMode = new (<any>GameModes)["g" + config.type](this);
        }
    }

    playersPerTeam() {
        switch (this.gameMode.serverType.slice(0, 3)) {
            case "1v1": {
                return 1;
            }
            case "2v2": {
                return 2;
            }
            case "3v3": {
                return 3;
            }
            case "FFA": {
                return 8;
            }
            case "Rac": {
                return 10;
            }
            case "Tou": {
                return 60;
            }
            default: {
                return 3;
            }
        }
    };

    generateMap(mapScale: number, numComPoints: number, mapSeed: number) {
        this.mapScale = mapScale != null ? mapScale : 1.5;
        this.numComPoints = numComPoints != null ? numComPoints : 8;
        this.mapSeed = mapSeed;
        this.numRocks = 60 * this.mapScale;
        this.gameMode.generateMap(mapScale, numComPoints, mapSeed);
    }

    playerJoin(_: any, pid: number | string, name: any, color: any, buildBar: any, aiRules: any, ai: boolean) {
        let dcIndex, p, player;
        if (ai == null) {
            ai = false;
        }

        for (let l in this.players) {
            p = this.players[l];
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

            for (let i in this.players) {
                p = this.players[i];
                if (!p.connected && p.side === "spectators") {
                    dcIndex = i;
                }
            }

            if (!dcIndex) {
                player.number = this.players.length;
                this.players.push(player);
            } else {
                // @ts-ignore
                player.number = parseInt(dcIndex);
                // @ts-ignore
                this.players[parseInt(dcIndex)] = player;
            }

            if (this.local) {
                this.clearNetState();
            }
        } else {
            // this.clearNetState(); Let's do this manually
        }
        this.playerEdit(_, pid, name, color, buildBar, aiRules, ai);
        return player;
    };

    playerEdit(_: any, pid: number | string, name: any, color: any, buildBar: any[], aiRules: any, ai: boolean) {
        let canEditShips, i, m, o, p;

        // @ts-ignore Wait for it to be filled in and abort if not
        let player: Player = null;
        for (let l in this.players) {
            p = this.players[l];
            if (p.id === pid) {
                player = p;
                break;
            }
        }

        if (!player) {
            console.log("Edit without player??");
            return;
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
            for (i = 0; i < 10; i++) {
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
            for (i = 0; i < 10; i++) {
                player.buildBar[i] = buildBar[i] || null;
            }
            this.validateBuildBar(player);
        }
        player.actions += 1;
        return player;
    };

    switchSide(player: Player, side: string) {
        this.gameMode.switchSide(player, side);
    };

    whoIsHost() {
        let haveHost, p;
        haveHost = false;
        for (let l in this.players) {
            p = this.players[l];
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
            for (let m in this.players) {
                p = this.players[m];
                if (!p.ai && p.connected && p.side !== "spectators") {
                    p.host = true;
                    break;
                }
            }
        }
    };

    addAi(player: Player, name: any, side: any, aiBuildBar: any, nocheck: boolean) {
        let p;
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
                return AI.useAiFleet(name, side, aiBuildBar); // TODO:
            }

            if (this.numInTeam(side) >= this.playersPerTeam() && (player && player.name !== "Avamander")) {
                console.log("Enough players in team");
                return;
            }

            if (this.state !== "waiting") {
                return;
            }

            let numAi = 0;

            for (let l in this.players) {
                p = this.players[l];
                if (p.ai && p.connected && p.side !== "spectators") {
                    numAi += 1;
                }
            }

            if (numAi === (this.playersPerTeam() * 2) - 1) {
                console.log("All players can't be AI");
                return;
            }
        }
        return AI.useAiFleet(name, side, aiBuildBar);
    }

    kickPlayer(kicker: Player, target_number: number) {
        if (this.state !== "waiting") {
            return;
        }

        if (!kicker.host) {
            return;
        }

        let player = this.players[target_number];

        if (player) {
            player.side = "spectators";
            player.kickTime = Utils.now();
            if (player.ai) {
                player.connected = false;
            }
            return Sim.say(kicker.name + " kicked " + player.name);
        }
    };

    kickAllAis() {
        let player;
        if (this.aiTestMode) {
            return;
        }

        for (let l in this.players) {
            player = this.players[l];
            if (player.ai) {
                player.connected = false;
                player.side = "spectators";
            }
        }
    }

    startGame(player: Player, real: boolean) {
        if (!player) {
            return;
        }

        this.fullUpdate = true;
        this.gameMode.startGame(player, real);
    }

    canStart(sayStuff: boolean): boolean {
        return this.gameMode.canStart(sayStuff);
    }

    validateBuildBar(player: Player) {
        if (!this.check) {
            player.validBar = [true, true, true, true, true, true, true, true, true, true];
            return;
        }

        let spec;
        for (let i = 0; i < player.buildBar.length; i++) {
            spec = player.buildBar[i];
            player.validBar[i] = Grid.validSpec(player, spec);
        }
    }

    moveOrder(player: Player, points: any[], additive: any, orderId: any) {
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;

        let n = 0;
        let u;

        for (let l = 0; l < player.selection.length; l++) {
            u = player.selection[l];
            if (u &&
                u.owner === player.number &&
                !u.dead) {
                u.giveOrder({
                    ai: false,
                    begun: false,
                    distance: 0,
                    noFinish: false,
                    noStop: false,
                    rally: false,
                    targetId: 0,
                    id: orderId,
                    type: "Move",
                    dest: points[n],
                    range: 0
                }, additive);
                n += 1;
                if (n === points.length) {
                    n = points.length - 1;
                }
                u.underPlayerControl = true;
            }
        }
    };

    followOrder(player: Player, unitId: number, additive: any, orderId: any) {
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;
        let u;
        for (let l = 0; l < player.selection.length; l++) {
            u = player.selection[l];
            if (u.owner === player.number) {
                u.giveOrder({
                    id: orderId,
                    type: "Follow",
                    targetId: unitId,
                    noFinish: true
                }, additive);
                u.underPlayerControl = true;
            }
        }
    }

    stopOrder(player: Player, additive: any) {
        let u;
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;

        for (let l = 0; l < player.selection.length; l++) {
            u = player.selection[l];
            if (u.owner === player.number) {
                u.stopAndClearOrders();
            }
        }
    };

    holdPositionOrder(player: Player, additive: any) {
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;

        let someHolding = false;
        let u;
        for (let l = 0; l < player.selection.length; l++) {
            u = player.selection[l];
            if (u.owner === player.number && u.holdPosition) {
                someHolding = true;
                break;
            }
        }

        for (let m = 0; m < player.selection.length; m++) {
            u = player.selection[m];
            if (u.owner === player.number) {
                if (someHolding) {
                    u.holdPosition = false;
                } else {
                    u.holdPosition = !u.holdPosition;
                }
            }
        }
    }

    selfDestructOrder(player: Player, additive: any) {
        if (!player) {
            return;
        }
        if (this.aiOnly) {
            return;
        }
        player.actions += 1;

        let u;
        for (let l = 0; l < player.selection.length; l++) {
            u = player.selection[l];
            if (u.owner === player.number) {
                u.selfDestruct();
            }
        }
    };

    buildUnit(pid: number, number: number, pos: Float64Array) {
        let _where, player, spec, totalUnits, u, unit, w;
        player = this.players[pid];

        if (!player) {
            return;
        }

        if (!player.validBar[number]) {
            return;
        }

        totalUnits = 0;
        for (let thing_id in this.things) {
            u = this.things[thing_id];
            if (u.unit && u.owner === player.number) {
                totalUnits += 1;
            }
        }
        if (totalUnits >= this.unitLimit) {
            return;
        }

        spec = player.buildBar[number];
        if (!(spec && spec.parts && spec.parts.length > 0) &&
            !(spec && spec.length > 35)) {
            return;
        }

        if (player.money < UnitUtils.specCost(spec)) {
            return;
        }
        player.actions += 1;

        unit = new Unit(spec);
        unit.owner = player.number;
        unit.side = player.side;
        unit.color = player.color;
        unit.number = number;
        if (player.money < unit.cost) {
            return;
        }
        player.money -= unit.cost;
        this.things[unit.id] = (unit as Thing);

        if (pos) {
            v2.set(pos, unit.pos);
            unit.rot = v2.angle(unit.pos) + Math.PI;
            for (let l = 0; l < unit.weapons.length; l++) {
                w = unit.weapons[l];
                w.rot = unit.rot;
            }
        }
        if (player.rallyPoint != null) {
            _where = [player.rallyPoint[0] - unit.pos[0], player.rallyPoint[1] - unit.pos[1]];
            unit.rot = v2.angle(new Float64Array(_where));
        }
        return unit;
    }

    placeUnit(pid: number, bar_number: number, pos: Float64Array) {
        console.log("placeUnit", pid, bar_number, pos);

        let player: Player = this.players[pid];
        if (!player) {
            return;
        }


        let cls = player.buildBar[bar_number];
        console.log("Requested to place unit with type:", bar_number);
        if (this.canBuildHere(pos, player.side, cls)) {
            this.buildUnit(pid, bar_number, pos);
        }
    }

    buildRq(player: Player, name: number, number: number) {
        if (!player) {
            return;
        }

        if (number > 0) {
            for (let i = 0; i < number; i++) {
                player.buildQ.push(name);
            }
        } else if (number < 0) {
            for (let i = 0; i < (number * -1); i++) {
                player.buildQ.splice(player.buildQ.indexOf(name), 1);
            }
        }
    }

    findSpawnPoint(player: Player) {
        let unit;
        if ((player != null ? player.usingSpawn : void 0)) {
            if (player.usingSpawn.side === player.side) {
                return player.usingSpawn;
            } else {
                // @ts-ignore
                player.usingSpawn = null;
            }
        }

        for (let thing_id in this.things) {
            unit = this.things[thing_id];
            if (unit.spawn === player.side) {
                return unit;
            }
        }
    }

    findSpawnPointBySide(side: string): SpawnPoint | null {
        let unit: Thing | null = null;
        let found_spawn: SpawnPoint | null = null;
        for (let thing_id in this.things) {
            unit = this.things[thing_id];

            if (unit.spawnPoint) {
                if (unit.side === side) {
                    if (this.serverType === "Race") {
                        if ((found_spawn === null || found_spawn === undefined) ||
                            ((unit as SpawnPoint).race_index > found_spawn.race_index)) {
                            found_spawn = (unit as SpawnPoint);

                            // Exit the loop if we've found the last point
                            if (found_spawn.race_index >= RaceMap.spawn_points.length) {
                                break;
                            }
                        }
                    } else {
                        return (unit as SpawnPoint);
                    }
                }
            }
        }

        return found_spawn;
    }

    canBuildHere(pos: Float64Array, side: string, cls: Unit) {
        let dist, inRange, unit;
        inRange = false;
        for (let thing_id in this.things) {
            unit = this.things[thing_id];
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
    }

    playerSelected(player: Player, selection: any[]) {
        if (!player) {
            return;
        }

        let u;
        for (let l = 0; l < player.selection.length; l++) {
            u = player.selection[l];
            if (u.owner === player.number) {
                u.underPlayerControl = false;
            }
        }

        player.selection = [];
        let thing;
        for (let id in this.things) {
            thing = this.things[id];
            for (let m = 0; m < selection.length; m++) {
                let selection_id = selection[m];
                if (thing.id === selection_id) {
                    player.selection.push(thing);
                }
            }
        }
    }

    surrender(player: Player): void {
        this.gameMode.surrender(player);
    }

    checkAfkPlayers() {
        let player;
        for (let l in this.players) {
            player = this.players[l];

            if (player.ai) {
                if (player.side !== "spectators") {
                    player.afk = false;
                    player.connected = true;
                }
            } else if (!player.connected) {
                player.afk = true
            } else if (player.lastActiveTime < (Date.now() - 1000 * 60 * 10)) {
                if (this.serverType !== "1v1r") {
                    player.afk = true
                }
            } else {
                player.afk = false
            }
        }
    }

    numInTeam(side: string) {
        let num = 0;
        let player;
        for (let l in this.players) {
            player = this.players[l];
            if (player.side === side) {
                num += 1;
            }
        }
        return num;
    }

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
    }

    simulate() {
        this.timeStart("sim");
        this.step += 1;
        this.startingSim();
        this.checkAfkPlayers();
        this.whoIsHost();

        this.timeStart("spacesRebuild");
        this.spacesRebuild();
        this.timeEnd("spacesRebuild");

        this.timeStart("units");
        this.units = [];
        for (let id in this.things) {
            if (this.things[id].unit) {
                this.units.push((this.things[id] as Unit));
            }
        }
        this.timeEnd("units");

        this.timeStart("bullets");
        this.bullets = [];
        for (let id in this.things) {
            if (this.things[id].bullet) {
                this.bullets.push((this.things[id] as Bullet));
            }
        }
        this.timeEnd("bullets");

        this.timeStart("commandPoint");
        this.commandPoint = [];
        for (let id in this.things) {
            if (this.things[id].commandPoint) {
                this.commandPoint.push((this.things[id] as CommandPoint));
            }
        }
        this.timeEnd("commandPoint");

        this.timeStart("death");
        for (let id in this.things) {
            if (this.things[id].dead) {
                if (typeof this.things[id].postDeath === "function") {
                    this.things[id].postDeath();
                }

                delete this.things[id];
                if (this.things[id]) {
                    //this.things.splice(parseInt(id), 1);
                    console.log("Thing exists after deletion", this.things[id]);
                }
            }
        }
        this.timeEnd("death");

        this.timeStart("tick");
        for (let id in this.things) {
            if (typeof this.things[id].tick === "function") {
                if (!this.things[id].dead) {
                    this.things[id].tick();
                }
            }
        }
        this.timeEnd("tick");

        this.timeStart("move");
        for (let id in this.things) {
            if (typeof this.things[id].move === "function") {
                this.things[id].move();
            }
        }
        this.timeEnd("move");

        this.timeStart("unitsCollide");
        this.unitsCollide();
        this.timeEnd("unitsCollide");


        this.timeStart("players");
        if (this.state === "running" || this.serverType === "sandbox") {
            for (let l in this.players) {
                if (this.players[l].side !== "spectators") {
                    this.players[l].tick();
                }
            }
        }

        for (let m in this.players) {
            if (this.state === "waiting" &&
                this.players[m].afk === true) {
                this.players[m].side = "spectators";
            }
            if (this.players[m].side === null) {
                this.players[m].side = "spectators";
            }
        }
        this.timeEnd("players");

        this.timeStart("victoryConditions");
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
        this.timeEnd("victoryConditions");

        this.timeStart("extrasim");
        this.gameMode.extra_simulate();
        this.timeEnd("extrasim");


        this.timeEnd("sim");
    }

    spacesRebuild() {
        this.gameMode.spacesRebuild();
    }

    victoryConditions() {
        this.gameMode.victoryConditions();
    }

    endOfGame() {
        this.gameMode.endOfGame();
    }

    unitsCollide() {
        let distance, force, j, ratio, t, u, u2;

        let units: Unit[] = [];
        for (let k in Sim.Instance.things) {
            t = Sim.Instance.things[k];
            if (t.unit && !t.fixed && t.active) {
                units.push((t as Unit));
            }
        }

        let n = this.step % 2;
        units.sort(
            function (a: Unit, b: Unit) {
                return a.pos[n] - b.pos[n];
            }
        );

        this.axisSort = n;
        this.axisSortedUnits = units;
        let missles: Bullet[] = [];

        for (let k in Sim.Instance.things) {
            t = Sim.Instance.things[k];
            if (t.missile) {
                missles.push((t as Bullet));
            }
        }

        missles.sort(
            function (a: Bullet, b: Bullet) {
                return a.pos[n] - b.pos[n];
            }
        );
        this.axisSortedMissles = missles;

        if (this.collision_enabled) {
            for (let i = 0; i < units.length; i++) {
                u = units[i];
                for (j = -4; j <= 4; j++) {
                    u2 = units[i + j];
                    if (j !== 0 && u2) {
                        let _offset: Float64Array = new Float64Array([u.pos[0] - u2.pos[0], u.pos[1] - u2.pos[1]]);
                        distance = v2.mag(_offset);
                        if (distance < .001) {
                            _offset = new Float64Array([0, -1]);
                            distance = 1;
                        }

                        if (distance < u.radius + u2.radius) {
                            if (!this.strong_collision) {
                                force = (u.radius + u2.radius) - distance;

                                let _push = v2.create_r();
                                let ratio = u2.mass / (u.mass + u2.mass);
                                v2.scale(_offset, ratio * force / distance * .02, _push);
                                v2.add_r(u.pos, _push);
                                v2.scale(_offset, -(1 - ratio) * force / distance * .02, _push);
                                v2.add_r(u2.pos, _push);
                            } else {
                                // This implements perfectly elastic 2d collision with masses
                                // First calculate the collision axis and the velocities on that
                                let collision_angle = Math.atan2(u2.pos[1] - u.pos[1], u2.pos[0] - u.pos[0]);
                                let direction_1 = Math.atan2(u.vel[1], u.vel[0]);
                                let vel_1_new_x_axis = u.vel[0] * Math.cos(direction_1 - collision_angle);
                                let vel_1_new_y_axis = u.vel[0] * Math.sin(direction_1 - collision_angle);

                                let direction_2 = Math.atan2(u2.vel[1], u2.vel[1]);
                                let vel_2_new_x_axis = u2.vel[0] * Math.cos(direction_2 - collision_angle);
                                let vel_2_new_y_axis = u2.vel[0] * Math.sin(direction_2 - collision_angle);

                                let vel_1_new_x = ((u.mass - u2.mass) * vel_1_new_x_axis + (u2.mass + u2.mass) * vel_2_new_x_axis) / (u.mass + u2.mass);
                                let vel_2_new_x = ((u.mass + u.mass) * vel_1_new_x_axis + (u2.mass - u.mass) * vel_2_new_x_axis) / (u.mass + u2.mass);

                                let vel_1_new_y = vel_1_new_y_axis;
                                let vel_2_new_y = vel_2_new_y_axis;

                                let cos_a = Math.cos(collision_angle);
                                let sin_a = Math.sin(collision_angle);

                                // Convert from collision axis back to regular axis
                                u.vel[0] = cos_a * vel_1_new_x - sin_a * vel_1_new_y;
                                u.vel[1] = sin_a * vel_1_new_x - cos_a * vel_1_new_y;
                                v2.scale_r(u.vel, 0.9);

                                u2.vel[0] = cos_a * vel_2_new_x - sin_a * vel_2_new_y;
                                u2.vel[1] = sin_a * vel_2_new_x - cos_a * vel_2_new_y;
                                v2.scale_r(u2.vel, 0.9);

                                let delta_pos = v2.sub(u.pos, u2.pos, new Float64Array(2));
                                let distance = v2.distance(u.pos, u2.pos);
                                let inverse_mass_1 = 1 / u.mass;
                                let inverse_mass_2 = 1 / u2.mass;

                                let minimum_anti_intersect = v2.scale_r(delta_pos, (((u.radius + u2.radius) - distance) / distance));

                                let ratio_1 = inverse_mass_1 / (inverse_mass_1 + inverse_mass_2); // TODO: I think this can be sped up
                                u.pos[0] = u.pos[0] + (minimum_anti_intersect[0] * ratio_1);
                                u.pos[1] = u.pos[1] + (minimum_anti_intersect[1] * ratio_1);

                                let ratio_2 = inverse_mass_2 / (inverse_mass_1 + inverse_mass_2);
                                u2.pos[0] = u2.pos[0] - (minimum_anti_intersect[0] * ratio_2);
                                u2.pos[1] = u2.pos[1] - (minimum_anti_intersect[1] * ratio_2);
                            }
                        }
                    }
                }
            }
        }
    }

    send() {
        let _, changes, e, f, i, id, l, len1, len5, len6, packet, part,
            partId, player, predictable, r, ref2, ref3, ref4, ref5, ref6,
            ref7, ref9, send, splayers, sthings, t, targetId, thing, v, x, y;

        this.timeStart("send");
        this.timeStart("things");
        sthings = [];
        for (id in this.things) {
            thing = this.things[id];


            if (parseInt(id) !== thing.id) {
                if (!this.things[thing.id]) {
                    console.log("ID mismatch:", id, thing.id, thing);
                }
            }

            changes = [];
            changes.push(["thingId", thing.id]);
            let s: { [key: string]: any; length?: number; } = {};
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

            for (l = 0, len1 = this.thingFields.length; l < len1; l++) {
                f = this.thingFields[l];
                // @ts-ignore
                v = thing[f];
                // WARN: undefined is okay but null is not!
                if ((v != null) && !this.simpleEquals(s[f], v)) {
                    if (Sim.isArray(v)) {
                        if (s.length !== v.length) {
                            s[f] = new Array(v.length);
                        }
                        for (i = 0; i < v.length; i++) {
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
            if (s.vel && s.pos) {
                v2.add(s.pos, s.vel, this._pos);
                if (v2.distance(this._pos, thing.pos) < .1) {
                    v2.set(this._pos, s.pos);
                    predictable = true;
                }
            }
            if (!predictable) {
                if (!s.vel) {
                    s.vel = v2.create_r();
                }
                if (!s.pos) {
                    s.pos = v2.create_r();
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
            if (thing.parts) {
                for (partId = 0; partId < thing.parts.length; partId++) {
                    part = thing.parts[partId];
                    changes.push(["partId", partId]);
                    let s: { targetId: number, working: boolean, range: number } = part.net;

                    if (!s) {
                        // @ts-ignore
                        part.net = s = {};
                    }

                    if ((part.working != null) && (s.working !== part.working)) {
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

        let s;
        for (let q in this.players) {
            player = this.players[q];
            changes = [];
            changes.push(["playerNumber", player.number]);
            if (player.net == null) {
                player.net = s = {};
            } else {
                s = player.net;
            }

            for (r = 0, len5 = this.playerFields.length; r < len5; r++) {
                f = this.playerFields[r];
                // @ts-ignore
                v = player[f];
                if (v && !this.simpleEquals(s[f], v)) {
                    if (Sim.isArray(v)) {
                        if (s.length !== v.length) {
                            s[f] = new Array(v.length);
                        }
                        for (i = 0, len6 = v.length; i < len6; i++) {
                            e = v[i];
                            s[f][i] = e;
                        }
                    } else {
                        s[f] = v;
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

        let data = {};
        s = this.net;
        if (!s) {
            this.net = s = {};
        }
        for (y = 0; y < this.simFields.length; y++) {
            f = this.simFields[y];

            // @ts-ignore
            if (!this.simpleEquals(s[f], this[f])) {
                // @ts-ignore
                data[f] = this[f];
                // @ts-ignore
                s[f] = this[f];
            }
        }
        if (splayers.length > 0) {
            // @ts-ignore
            data.players = splayers;
        }
        if (sthings.length > 0) {
            // @ts-ignore
            data.things = sthings;
        }
        if (this.fullUpdate) {
            // @ts-ignore
            data.fullUpdate = true;
            this.fullUpdate = false;
        }

        if (this.step % 16 === 0) {
            send = false;
            if (this.DEBUG) {
                send = true;
            } else {
                /*for (z = 0, len8 = this.players.length; z < len8; z++) {
                    player = this.players[z];
                    if ((player.name === "treeform") &&
                        player.connected) {
                        send = true;
                    }
                }*/
            }

            if (send) {
                // @ts-ignore
                data.perf = {
                    numbers: {
                        things: Sim.Instance.things.length,
                        sthings: sthings.length,
                        players: Sim.Instance.players.length,
                        splayers: splayers.length,
                        units: Sim.Instance.things.length,
                        bullets: ((function () {
                            let results = 0;
                            for (_ in Sim.Instance.things) {
                                t = Sim.Instance.things[_];
                                if (t.bullet) {
                                    results += 1;
                                }
                            }
                            return results;
                        }).call(this)),
                        others: ((function () {
                            let results = 0;
                            for (_ in Sim.Instance.things) {
                                t = Sim.Instance.things[_];
                                if (!t.bullet && !t.unit) {
                                    results += 1;
                                }
                            }
                            return results;
                        }).call(this))
                    },
                    timeings: this.timeings
                };
            }
            this.timeings = {};
        }
        this.timeEnd("other");
        this.timeStart("zJson");
        // @ts-ignore
        packet = this.zJson.dumpDv(data);
        this.timeEnd("zJson");
        this.timeEnd("send");
        return packet;
    }

    clearNetState() {
        console.log("Clearing net state");
        this.fullUpdate = true;

        delete this.net;

        for (let id in this.things) {
            delete this.things[id].net;
            if (this.things[id].parts) {
                for (let l = 0; l < this.things[id].parts.length; l++) {
                    delete this.things[id].parts[l].net;
                }
            }
        }

        for (let m in this.players) {
            if (this.players[m]) {
                delete this.players[m].net;
            }
        }
    }

    timeStart(what: string) {
        this.timePath.push(what);
        this.timeStarts[this.timePath.join(">")] = Utils.now();
    }

    timeEnd(what: string) {
        let delta, key;
        key = this.timePath.join(">");
        if (this.timePath.pop() !== what) {
            throw "timeEnd does not match timeStart";
        }
        delta = Utils.now() - this.timeStarts[key];
        if (this.timeings[key] == null) {
            this.timeings[key] = delta;
        } else {
            this.timeings[key] += delta;
        }
    }

    timeIt(what: string, fn: { (): void; }) {
        this.timeStart(what);
        let ret = fn();
        this.timeEnd(what);
        return ret;
    }

    timeReport() {
        let bar, i, l;
        for (let k in this.timeings) {
            let v = this.timeings[k];
            bar = "";
            for (i = l = 0; 0 <= v ? l < v : l > v; i = 0 <= v ? ++l : --l) {
                bar += "*";
            }
            console.log(bar, k, v);
        }
        this.timeings = {};
    }
}

import {v2} from "./maths";
import {prot} from "./protocol";
import {IstrolidMap, Mapping} from "./maps";
import {ZJson} from "./zjson";
import {Colors} from "./colors";
import {HSpace} from "./hspace";
import {Utils} from "./utils";
import {CommandPoint, Player, SpawnPoint, Thing} from "./things";
import {Unit} from "./unit";
import {Grid} from "./grid";
import {UnitUtils} from "./unitutils";
import {AI} from "./ai";
import {Bullets} from "./bullets";
import {GameMode, GameModes} from "./gamemode";
import {Particle} from "./particle";
import Bullet = Bullets.Bullet;

import {IstrolidServer} from "../server";