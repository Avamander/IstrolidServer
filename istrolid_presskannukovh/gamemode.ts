import {IstrolidServer} from "../server";
import {Utils} from "./utils";
import {CommandPoint, Player, SpawnPoint} from "./things";
import {HSpace} from "./hspace";
import {Sim} from "./sim";
import {MTwist} from "./mtwist";
import {Mapping} from "./maps";
import {Unit} from "./unit";
import {v2} from "./maths";
import {Parts} from "./parts";
import {CommandsManager} from "./commands";

export class GameMode {
    sim: Sim;
    serverType: string = "unknown";

    /*
     * Sets sim variables
     */
    constructor(sim: Sim) {
        this.sim = sim;
    }

    /*
     * This should start the game (reset gamemode-specific variables)
     */
    start(): void {

    }

    /*
     * This should check if the game can be started by the player and canStart()
     * and then start the game using start()
     *
     * This is a command sent by the client AFAIK
     */
    startGame(player: Player, real: boolean): void {
        if (real == null) {
            real = false;
        }

        if (this.sim.local) {
            this.start();
            return;
        }

        if (!player.host &&
            player.name !== "Avamander") {
            console.log("A non-host player is trying to start game.");
            return;
        }

        if (this.sim.state !== "waiting") {
            console.log("Trying to start a game when a game is already in progress. State:", this.sim.state);
            return;
        }

        if (!this.canStart(true)) {
            return;
        }

        Sim.say("Game is about to start!");
        this.sim.countDown = 16 * 6;
    }


    /*
     * This should check if victory conditions have been satisfied
     */
    victoryConditions(): void {
        let cappedArr, id, k, player, stillThere, thing;
        if (this.sim.state !== "running") {
            return;
        }

        let capped: { [key: string]: number; } = {};

        for (id in this.sim.things) {
            thing = this.sim.things[id];
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
        if (cappedArr.length === 1 &&
            cappedArr[0] !== "neutral") {
            this.sim.winningSide = cappedArr[0];
        }
        if (this.sim.winningSide) {
            this.endOfGame();
            return;
        }
        if (!this.sim.local && !this.sim.aiTestMode) {
            stillThere = false;

            for (let l in this.sim.players) {
                player = this.sim.players[l];
                if (!player.ai &&
                    player.connected &&
                    !player.afk &&
                    player.side !== "spectators") {
                    stillThere = true;
                }
            }
            if (!stillThere) {
                Sim.say("Every one left. Ending game.");
                this.sim.winningSide = "";
                this.endOfGame();
            }
        } else if (this.sim.step > 16 * 60 * 30) {
            this.sim.winningSide = "";
            this.endOfGame();
        }
    }

    /*
     * Extra simulation check that has to be done
     */
    extra_simulate() {

    }

    /*
     * Returns if the game can be started
     */
    canStart(sayStuff: boolean): boolean {
        if (sayStuff == null) {
            sayStuff = false;
        }

        if (this.sim.numInTeam("alpha") < this.sim.playersPerTeam()) {
            if (sayStuff) {
                Sim.say("Team alpha does not have enough players.");
            }
            return false;
        }

        if (this.sim.numInTeam("beta") < this.sim.playersPerTeam()) {
            if (sayStuff) {
                Sim.say("Team beta does not have enough players.");
            }
            return false;
        }

        return true;
    }

    /*
     * Handles surrendering
     */
    surrender(player: Player): void {
        if (!player) {
            return;
        }
        if (this.sim.winningSide) {
            return;
        }
        if (this.sim.state !== "running") {
            return;
        }

        if (this.sim.surrender_votes === undefined) {
            this.sim.surrender_votes = {};
        }

        let team_players = this.sim.players.filter(function (filter_players: Player) {
            return filter_players.ai === false &&
                filter_players.side === player.side;
        });

        if (team_players.length === 1) {
            if (player.side === "beta") {
                this.sim.winningSide = "alpha";
            } else if (player.side === "alpha") {
                this.sim.winningSide = "beta";
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
                if (this.sim.surrender_votes[player.side] === undefined) {
                    this.sim.surrender_votes[player.side] = 1;
                } else {
                    this.sim.surrender_votes[player.side] += 1;
                }
                player.surrendered = true;
            } else {
                return;
            }

            if (this.sim.surrender_votes[player.side] > (team_players.length - 1)) {
                if (player.side === "beta") {
                    this.sim.winningSide = "alpha";
                } else if (player.side === "alpha") {
                    this.sim.winningSide = "beta";
                } else {
                    return;
                }

                Sim.say(player.name + " surrendered");
                return this.endOfGame();
            } else {
                Sim.say(player.name + " voted to surrender");
                Sim.say((team_players.length - this.sim.surrender_votes[player.side]) + " vote(s) more required");
                return;
            }
        }
    }

    /*
     * Generate map
     */
    generateMap(mapScale: number, numComPoints: number, mapSeed: number) {
        Mapping.mr = new MTwist(mapSeed);
        Sim.Instance.theme = Mapping.chooseOne(Mapping.themes);

        Mapping.genSymmetrical();

        if (Sim.Instance.theme.makeRocks) {
            let fns = Utils.shuffle([
                Mapping.genClouds,
                Mapping.genDebree,
                Mapping.genRocks,
                Mapping.genDodads]
            );

            let r = Mapping.mr.random();
            if (r < .2) {
                fns.pop()();
                fns.pop()();
                return fns.pop()();
            } else if (r < .5) {
                fns.pop()();
                return fns.pop()();
            } else if (r < .9) {
                return fns.pop()();
            } else {
                return "nothing";
            }
        }
    }

    /*
     * Handles side switching
     */
    switchSide(player: Player, side: string): void {
        if (!player) {
            return;
        }

        if (player.kickTime > Utils.now() - 15000) {
            return;
        }

        if (this.sim.local &&
            !Sim.Instance.galaxyStar &&
            !Sim.Instance.challenge) {
            player.side = side;
            return;
        }

        if (side !== "spectators" &&
            this.sim.numInTeam(side) >= this.sim.playersPerTeam()) {
            return;
        }

        if (this.sim.state !== "waiting") {
            return;
        }

        player.side = side;
        if (side === "spectators") {
            player.streek = 0;
        }

        player.lastActiveTime = Date.now();
    }

    /*
     * Handles end of the game
     */
    endOfGame(): void {
        let player;

        if (this.sim.surrender_votes === undefined) {
            this.sim.surrender_votes = {};
        }
        this.sim.surrender_votes["alpha"] = 0;
        this.sim.surrender_votes["beta"] = 0;

        if (this.sim.winningSide) {
            Sim.say(this.sim.winningSide + " has won!");
        } else {
            Sim.say("Game ends in a draw!");
        }
        this.sim.numBattles += 1;
        if (this.sim.numBattles > 100) {
            this.sim.awaitRestart = true;
        }
        // TODO: READD
        //if (typeof this.sendGameReport === "function") {
        //    this.sendGameReport();
        //}
        if (this.serverType === "1v1r" &&
            this.sim.winningSide) {
            for (let l in this.sim.players) {
                player = this.sim.players[l];
                if (player.side !== "spectators") {
                    if (player.side === this.sim.winningSide) {
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
        this.sim.state = "ended";
    }

    /*
     * Rebuilds unit spaces based on the gamemode
     */
    spacesRebuild(): void {
        let ref1, thing;
        this.sim.unitSpaces = {
            "alpha": new HSpace(500),
            "beta": new HSpace(500)
        };
        this.sim.bulletSpaces = {
            "alpha": new HSpace(100),
            "beta": new HSpace(100)
        };
        this.sim.maxRadius = {
            alpha: 0,
            beta: 0
        };

        for (let id in this.sim.things) {
            thing = this.sim.things[id];
            if (thing.dead) {
                continue;
            }
            if (thing.unit) {
                if ((ref1 = this.sim.unitSpaces[thing.side]) != null) {
                    ref1.insert(thing);
                }
                if (this.sim.maxRadius[thing.side] != null) {
                    if (thing.radius > this.sim.maxRadius[thing.side]) {
                        this.sim.maxRadius[thing.side] = thing.radius;
                    }
                }
            }
            if (thing.bullet) {
                this.sim.bulletSpaces[thing.side].insert(thing);
            }
        }
    }
}


export namespace GameModes {
    import Flag = Parts.Flag;

    export class gFFA extends GameMode {
        ffa = true;
        numComPoints = 13;
        serverType = "FFA";

        constructor(sim: Sim) {
            super(sim);
            this.victoryConditions.bind(this);
            let p;
            for (let i in sim.players) {
                p = this.sim.players[i];
                if (p.side === "beta") {
                    p.side = "alpha";
                }
            }
            this.sim.ffa = true;
            this.sim.serverType = "FFA";
        }

        surrender(player: Player) {

        }

        makePoint(r: number, th: number, side: any, type: new () => CommandPoint | SpawnPoint) {
            let point;
            point = new type();
            point.z = -.01;
            point.pos[0] = Math.cos(th) * r * Sim.Instance.mapScale;
            point.pos[1] = Math.sin(th) * r * Sim.Instance.mapScale;
            point.side = side;
            point["static"] = false;
            Sim.Instance.things[point.id] = point;
            return point;
        }

        generateMap(mapScale: number, numComPoints: number, mapSeed: number) {
            Mapping.mr = new MTwist(mapSeed);
            Sim.Instance.theme = Mapping.chooseOne(Mapping.themes);

            let cp, i, m, o, p, player, players, ref, ref1, th;

            players = (function () {
                let results;
                results = [];
                for (let m in Sim.Instance.players) {
                    p = Sim.Instance.players[m];
                    if (p.side !== "spectators") {
                        results.push(p);
                    }
                }
                return results;
            })();

            for (i = m = 0, ref = players.length; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
                th = i * Math.PI * 2 / players.length;
                player = players[i];
                let sp: SpawnPoint = this.makePoint(1800, th, player.side, SpawnPoint);
                sp.spawn = player.name;
                sp.side = player.name;
                let cp: CommandPoint = (this.makePoint(1800, th, player.side, CommandPoint) as CommandPoint);
                cp.linkedSpawn = sp;
                cp.radius = sp.radius;
                cp.size = [cp.radius / 250, cp.radius / 250];
                players[i].usingSpawn = sp;
            }

            cp = (this.makePoint(0, 0, "neutral", CommandPoint) as CommandPoint);
            cp.radius = 300;
            cp.size = [cp.radius / 250, cp.radius / 250];
            cp.value = 1.2;

            for (i = o = 0, ref1 = Sim.Instance.numComPoints - 1; 0 <= ref1 ? o < ref1 : o > ref1; i = 0 <= ref1 ? ++o : --o) {
                th = i * Math.PI * 2 / (Sim.Instance.numComPoints - 1);
                if (i % 2 === 0) {
                    this.makePoint(640, th, "neutral", CommandPoint);
                } else {
                    cp = this.makePoint(880, th, "neutral", CommandPoint);
                    cp.radius = 200;
                    cp.size = [cp.radius / 250, cp.radius / 250];
                    // @ts-ignore
                    cp.value = 0.8
                }
            }
        }

        spacesRebuild() {
            let _, bspace, i, len, maxr, p, ref, ref1, results, t, uspace;
            uspace = new HSpace(500);
            bspace = new HSpace(100);
            maxr = 0;
            ref = this.sim.things;
            for (_ in ref) {
                t = ref[_];
                if (t.dead) {
                    continue;
                }
                if (t.unit) {
                    uspace.insert(t);
                    if (t.radius > maxr) {
                        maxr = t.radius;
                    }
                }
                if (t.bullet) {
                    bspace.insert(t);
                }
            }
            this.sim.unitSpaces = {
                alpha: uspace,
                beta: uspace
            };
            this.sim.bulletSpaces = {
                alpha: bspace,
                beta: uspace
            };
            this.sim.maxRadius = {
                alpha: maxr,
                beta: maxr
            };


            for (let i in this.sim.players) {
                p = this.sim.players[i];
                if (p.side === "spectators") {
                    continue;
                }
                this.sim.unitSpaces[p.side] = uspace;
                this.sim.bulletSpaces[p.side] = bspace;
                this.sim.maxRadius[p.side] = maxr;
            }
        }

        startGame(player: Player, real: boolean) {
            if (real == null) {
                real = false;
            }

            Sim.say("For better gameplay either install the FFA UI script");
            Sim.say("or use https://presskannuk.ovh (if you're in the EU)");
            Sim.say("https://gist.github.com/Rio6/df4b990ddd0d25f9ad3b48e0fc8d0f35");
            super.startGame.call(this, player, real);
        }

        start() {
            let p;
            for (let i in this.sim.players) {
                p = this.sim.players[i];
                if (p.side === "alpha") {
                    p.side = p.name;
                }
            }
            super.start.call(this);
        }

        canStart(sayStuff: boolean) {
            if (sayStuff == null) {
                sayStuff = false;
            }

            if (this.sim.numInTeam("alpha") > 1) {
                return true;
            }

            Sim.say("Not enough players");
            return false;
        }

        victoryConditions() {
            let i, len;
            let player: Player;
            let players, spawns, thing;
            if (this.sim.state !== "running") {
                return;
            }
            players = [];

            for (let i in this.sim.players) {
                player = this.sim.players[i];
                if (player.side === "spectators") {
                    continue;
                }
                spawns = (function () {
                    let results = [];
                    for (let _ in Sim.Instance.things) {
                        thing = Sim.Instance.things[_];
                        if (thing.spawn === player.side) {
                            results.push(thing);
                        }
                    }
                    return results;
                }).call(this);

                if (spawns.length !== player.lastSpawnCount) {
                    if (spawns.length === 0) {
                        Sim.say(player.name + " lost their spawn");
                    }
                    player.lastSpawnCount = spawns.length;
                }
                if (spawns.length > 0) {
                    players.push(player);
                }
            }

            if (players.length === 1) {
                this.sim.winningSide = players[0].side;
            } else if (players.length === 0) {
                if (!this.sim.local && !this.sim.aiTestMode) {
                    Sim.say("Everyone left. Ending game.");
                    this.sim.winningSide = "";
                    this.endOfGame();
                    return;
                }
            }

            if (this.sim.winningSide) {
                this.endOfGame();
            } else if (this.sim.step > 16 * 60 * 30) {
                this.sim.winningSide = "";
                this.endOfGame();
            }
        }

        endOfGame() {
            let p;
            for (let i in this.sim.players) {
                p = this.sim.players[i];
                if (p.side === "spectators") {
                    continue;
                }
                p.side = "alpha";
            }
            super.endOfGame.call(this);
        }
    }

    export class gCTF extends GameMode {
        serverType = "CTF";
        numFlags = 8;
        numComPoints = 2;
        mapScale = 1;
        flagImage = "parts/decals/Symbol12.png";

        constructor(sim: Sim) {
            super(sim);
        }

        canStart(say_stuff: boolean) {
            let alpha, beta;
            if (say_stuff == null) {
                say_stuff = false;
            }

            alpha = this.sim.numInTeam("alpha");
            beta = this.sim.numInTeam("beta");

            if (alpha === 0 && beta === 0) {
                if (say_stuff) {
                    IstrolidServer.say("Not enough players.");
                }
                return false;
            }
            if (beta - alpha > 1) {
                if (say_stuff) {
                    IstrolidServer.say("Team alpha does not have enough players.");
                }
                return false;
            } else if (alpha - beta > 1) {
                if (say_stuff) {
                    IstrolidServer.say("Team beta does not have enough players.");
                }
                return false;
            }
            return true;
        };

        victoryConditions() {
            let cappedArr, i, id, k, len, player, ref, ref1, stillThere, thing;
            if (this.sim.state !== "running") {
                return;
            }
            let capped: { [key: string]: number } = {};
            ref = Sim.Instance.things;
            for (id in ref) {
                thing = ref[id];
                if (thing.flag) {
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
            if (cappedArr.length === 1 && cappedArr[0] !== 'neutral') {
                this.sim.winningSide = cappedArr[0];
            }
            if (this.sim.winningSide) {
                this.endOfGame();
                return;
            }
            if (!this.sim.local && !this.sim.aiTestMode) {
                stillThere = false;

                for (let i in this.sim.players) {
                    player = this.sim.players[i];
                    if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                        stillThere = true;
                    }
                }
                if (!stillThere) {
                    Sim.say("Everyone left. Ending game.");
                    this.sim.winningSide = "";
                    this.endOfGame();
                    return;
                }
            }
            if (this.sim.step > 16 * 60 * 30) {
                this.sim.winningSide = "";
                this.endOfGame();
            }
        };

        switchSide(player: Player, side: string) {
            if (!player) {
                return;
            }
            if (player.kickTime > Utils.now() - 15000) {
                return;
            }
            if (this.sim.local && !Sim.Instance.galaxyStar && !Sim.Instance.challenge) {
                player.side = side;
                return;
            }
            if (this.sim.state !== "waiting") {
                return;
            }
            player.side = side;
            if (side === "spectators") {
                player.streek = 0;
            }
            player.lastActiveTime = Date.now();
        };

        generateMap(mapScale: number, numComPoints: number, mapSeed: number): void {
            Mapping.mr = new MTwist(mapSeed);
            Sim.Instance.theme = Mapping.chooseOne(Mapping.themes);

            let _, a, alphaSpawn, b, betaSpawn, createFlag, flag, from_center;
            let homePoints: SpawnPoint[];
            let i, len, m, o, point, pos, q, ref,
                ref1, ref2, results, t, tooClose;
            createFlag = function () {
                let flag = new Flag();
                Sim.Instance.things[flag.id] = flag;
                return flag;
            };
            alphaSpawn = a = new SpawnPoint();
            a.side = "alpha";
            a.spawn = "alpha";
            a.pos[0] = -Sim.Instance.mapScale * 3000;
            a.pos[1] = Mapping.mr.random() * 3000 - 1500;
            Sim.Instance.things[a.id] = a;
            betaSpawn = b = new SpawnPoint();
            b.side = "beta";
            b.spawn = "beta";
            b.pos[0] = Sim.Instance.mapScale * 3000;
            b.pos[1] = -a.pos[1];
            Sim.Instance.things[b.id] = b;
            pos = [];
            homePoints = [];
            for (i = m = 0, ref = Sim.Instance.numComPoints / 2; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
                a = new CommandPoint();
                a.z = -.01;
                if (i === 0) {
                    v2.set(alphaSpawn.pos, a.pos);
                    from_center = v2.mag(a.pos);
                    v2.scale_r(a.pos, (from_center - 1500) / from_center);
                } else {
                    for (o = 0; o < 10; o++) {
                        tooClose = false;
                        Mapping.randomVector(a.pos);
                        v2.scale_r(a.pos, (300 + Mapping.mr.random() * 2000) * Sim.Instance.mapScale);
                        ref1 = Sim.Instance.things;
                        for (_ in ref1) {
                            t = ref1[_];
                            if (v2.distance(t.pos, a.pos) < (t.radius + a.radius + 100)) {
                                tooClose = true;
                                break;
                            }
                        }
                        if (!tooClose) {
                            break;
                        }
                    }
                }
                Sim.Instance.things[a.id] = a;
                b = new CommandPoint();
                b.z = -.01;
                b.pos[0] = -a.pos[0];
                b.pos[1] = -a.pos[1];
                a.side = "alpha";
                b.side = "beta";
                Sim.Instance.things[b.id] = b;
                if (i === 0) {
                    homePoints = [a, b];
                }
            }

            a = homePoints[0] || alphaSpawn;
            b = homePoints[1] || betaSpawn;
            ref2 = [a, b];
            for (q = 0, len = ref2.length; q < len; q++) {
                point = ref2[q];
                let ref3, results1, w;
                results1 = [];
                for (i = w = 0, ref3 = Sim.Instance.numFlags; 0 <= ref3 ? w < ref3 : w > ref3; i = 0 <= ref3 ? ++w : --w) {
                    flag = createFlag();
                    flag.side = point.side;
                    v2.add_r(v2.scale_r(v2.random(flag.pos), Math.random() * point.radius), point.pos);
                }
            }
        }
    }

    export class gnvn extends GameMode {
        serverType = "nvn";

        constructor(sim: Sim) {
            super(sim);
        }

        canStart(sayStuff: boolean) {
            if (sayStuff == null) {
                sayStuff = false;
            }

            if (Sim.Instance.numInTeam("alpha") + Sim.Instance.numInTeam("beta") >= 1) {
                return true;
            }

            Sim.say("Not enough players");
            return false;
        }
    }

    export class gSurvival extends GameMode {
        serverType = "Survival";
        waveFreq = 30;
        numComPoints = 12;

        constructor(sim: Sim) {
            super(sim);
            this.victoryConditions = this.victoryConditions.prototype.bind(this);
        }

        start() {
            let p, results;
            super.start.call(this);
            this.sim.waveNum = 0;
            results = [];
            for (let key in this.sim.players) {
                p = this.sim.players[key];
                if (p && p.connected) {
                    if (p.side === 'beta') {
                        p.money = 1;
                        results.push(p.moneyRatio = 0);
                    } else {
                        results.push(void 0);
                    }
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };

        endOfGame() {
            let object, p;
            super.endOfGame.call(this);
            Sim.say("The survivors survived " + this.sim.waveNum + " waves!");
            for (let id in this.sim.things) {
                object = this.sim.things[id];
                if (object.unit) {
                    (object as Unit).selfDestruct();
                }
            }

            for (let key in this.sim.players) {
                p = this.sim.players[key];
                if (p && p.connected) {
                    if (p.moneyRatio === 0) {
                        p.moneyRatio = 1;
                    }
                }
            }
        }

        canStart() {
            return this.sim.numInTeam("alpha") + this.sim.numInTeam("beta") > 0;
        }

        extra_simulate() {
            let betaCount, i, len, p, ref, results;
            if (this.sim.state === 'running') {
                if ((this.sim.step / 16) % this.waveFreq === 0 && this.sim.step !== 0) {
                    this.sim.waveNum += 1;
                    Sim.say("Spawning wave " + this.sim.waveNum + "!");
                    betaCount = this.sim.players.filter(function (p) {
                        return p.side === 'beta';
                    }).length;


                    for (let i in this.sim.players) {
                        p = this.sim.players[i];
                        if (p.side === "beta") {
                            p.money = Math.round((2750 + Math.pow(1.1, this.sim.waveNum) * 500) / betaCount);
                        }
                    }
                }
            }
        }

        victoryConditions() {
            let cappedArr, i, id, k, len, player, ref, ref1, stillThere, thing;
            if (this.sim.state !== "running") {
                return;
            }

            let capped: { [key: string]: number } = {};

            for (id in this.sim.things) {
                thing = this.sim.things[id];
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
            if (cappedArr.length === 1 && cappedArr[0] === "beta") {
                this.sim.winningSide = cappedArr[0];
            }
            if (this.sim.winningSide) {
                this.endOfGame();
                return;
            }
            if (!this.sim.local && !this.sim.aiTestMode) {
                stillThere = false;

                for (let i in this.sim.players) {
                    player = this.sim.players[i];
                    if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                        stillThere = true;
                    }
                }
                if (!stillThere) {
                    Sim.say("Everyone left. Ending game.");
                    this.sim.winningSide = "";
                    this.endOfGame();
                }
            }
        }

        switchSide(player: Player, side: string) {
            if (!player) {
                return;
            }
            if (player.kickTime > Utils.now() - 15000) {
                return;
            }
            if (this.sim.local && !this.sim.galaxyStar && !this.sim.challenge) {
                player.side = side;
                return;
            }
            if (this.sim.state !== "waiting") {
                return;
            }
            player.side = side;
            if (side === "spectators") {
                player.streek = 0;
            }
            return player.lastActiveTime = Date.now();
        }
    }

    export class g1v1 extends GameMode {
        serverType = "1v1";

        constructor(sim: Sim) {
            super(sim);
        }
    }

    export class g1v1r extends GameMode {
        serverType = "1v1r";

        constructor(sim: Sim) {
            super(sim);
        }
    }

    export class g1v1t extends GameMode {
        serverType = "1v1t";

        constructor(sim: Sim) {
            super(sim);
        }
    }

    export class g2v2 extends GameMode {
        serverType = "2v2";

        constructor(sim: Sim) {
            super(sim);
        }
    }

    export class g3v3 extends GameMode {
        serverType = "3v3";

        constructor(sim: Sim) {
            super(sim);
        }
    }

    export class gTournament extends GameMode {
        serverType = "Tournament";              // Tournament gamemode
        playing_players: Player[] = [];         // All the playing players in a tournament
        playing_pairs: [Player, Player][] = []; // All the pairs of players in a tournament
        roundMatchCount!: number;               // Amount of rounds in a tournament
        matchCount: number = 0;                 // The current index of the match
        current_pair!: [Player, Player];        // The current playing players
        roundCount: number = 0;                 // The amount of rounds so far
        totalMatchCount: number = 0;            // The amount of matches in total


        constructor(sim: Sim) {
            super(sim);
        }

        start(): void {
            if (this.playing_pairs.length === 0 || this.playing_pairs === []) {
                Sim.say("--------------- ROUND " + (this.roundCount + 1) + " COMMENCE! --------------");
                this.movePlayersAndGeneratePairs();
            }
            this.setupNextGame();
        }


        startGame(player: Player, real: boolean): void {
            if (real == null) {
                real = false;
            }

            if (this.sim.local) {
                this.start();
                return;
            }

            if (!real &&
                (!player.host && player.name !== "Avamander")) {
                console.log("A non-host player is trying to start game: ", player.name);
                return;
            }

            if (!real && (this.sim.state !== "waiting")) {
                console.log("Trying to start a game when a game is already in progress. State:", this.sim.state);
                return;
            }

            if (!real && (!this.canStart(true))) {
                return;
            }

            Sim.say("A tournament is about to start! \n " +
                "Please do not AFK!");
            this.sim.countDown = 16 * 10;
        }

        victoryConditions(): void {
            let cappedArr, id, k, l, len1, player, stillThere, thing;
            if (this.sim.state !== "running") {
                return;
            }

            let capped: { [key: string]: number; } = {};

            for (id in this.sim.things) {
                thing = this.sim.things[id];
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

            if (cappedArr.length === 1 &&
                cappedArr[0] !== "neutral") {
                this.sim.winningSide = cappedArr[0];

                for (l = 0, len1 = this.playing_players.length; l < len1; l++) {
                    player = this.playing_players[l];
                    if ((player.side !== cappedArr[0] && player.side !== "waiting")) {
                        player.side = "spectators";
                        this.playing_players.slice(l, 1);
                    }
                }
            }

            if (this.sim.winningSide) {
                this.endOfGame();
                return;
            }

            if (!this.sim.local && !this.sim.aiTestMode) {
                stillThere = false;

                for (let player_id in this.sim.players) {
                    let player = this.sim.players[player_id];
                    if (!player) {
                        console.log("Player was lost somewhere", player_id);
                        continue;
                    }

                    if (player.connected &&
                        !player.afk &&
                        (player.side !== "spectators")) {
                        stillThere = true;
                    }
                }

                if (!stillThere) {
                    Sim.say("Everyone left this match, ending it!");
                    this.sim.winningSide = "";
                    let player;
                    for (let l = 0; l < this.playing_players.length; l++) {
                        player = this.playing_players[l];
                        if ((player.side === "alpha" || player.side === "beta")) {
                            this.playing_players.slice(l, 1);
                            player.side = "spectators";
                        }
                    }
                    this.endOfGame();
                }
            } else if (this.sim.step > 16 * 60 * 30) {
                this.sim.winningSide = "";
                this.endOfGame();
            }
        }

        extra_simulate() {

        }

        canStart(sayStuff: boolean): boolean {
            if (sayStuff == null) {
                sayStuff = false;
            }

            if (this.sim.numInTeam("alpha") + this.sim.numInTeam("beta") < 2) {
                if (sayStuff) {
                    Sim.say("Not enough players for a tournament");
                }
                return false;
            }

            return true;
        }

        surrender(player: Player): void {
            if (!player) {
                return;
            }

            if (this.sim.winningSide) {
                return;
            }

            if (this.sim.state !== "running") {
                return;
            }

            if (player.side === "beta") {
                this.sim.winningSide = "alpha";
            } else if (player.side === "alpha") {
                this.sim.winningSide = "beta";
            } else {
                return;
            }

            for (let i = 0; i < this.playing_players.length; i++) {
                if (this.playing_players[i] === player) {
                    this.playing_players.splice(i, 1);
                }
            }

            Sim.say(player.name + " surrendered and has lost!");
            player.side = "spectators";

            this.endOfGame();
        }

        cleanupMore() {
            // Cleanup first
            console.log("Cleaning up!");
            this.sim.net = {};
            this.sim.step = 0;
            this.sim.timeDelta = 0;
            this.sim.winningSide = "";
            this.sim.lastId = 0;
            this.sim.counting = 0;

            if (this.sim.players == null) {
                this.sim.players = [];
            } else {
                for (let player_id in this.sim.players) {
                    this.sim.players[player_id].reset();
                    if (this.sim.players[player_id].connected) {
                        this.sim.validateBuildBar(this.sim.players[player_id]);
                    }
                }
            }

            if (!this.sim.things) {
                this.sim.things = [];
            } else {
                for (let id in this.sim.things) {
                    if (this.sim.things[id]) {
                        // @ts-ignore
                        if (this.sim.things[id].hp) {
                            // @ts-ignore
                            this.sim.things[id].hp = 0;
                        }
                    }
                    delete this.sim.things[id];
                }
                delete this.sim.things;
                this.sim.things = [];
            }

            if (!this.sim.units) {
                this.sim.units = [];
            } else {
                for (let id in this.sim.units) {
                    delete this.sim.units[id];
                }
                delete this.sim.units;
                this.sim.units = [];
            }

            this.sim.state = "starting";
            this.sim.captures = 0;
            this.sim.deaths = 0;
            this.sim.nGamesPlayed += 1;
            this.sim.clearNetState();
            this.sim.fullUpdate = true;
            console.log("Cleaned up!");
        }

        generateMap(mapScale: number, numComPoints: number, mapSeed: number) {
            Mapping.mr = new MTwist(mapSeed);
            Sim.Instance.theme = Mapping.chooseOne(Mapping.themes);

            Mapping.genSymmetrical();

            if (Sim.Instance.theme.makeRocks) {
                let fns = Utils.shuffle([
                    Mapping.genClouds,
                    Mapping.genDebree,
                    Mapping.genRocks,
                    Mapping.genDodads]
                );

                let r = Mapping.mr.random();
                if (r < .2) {
                    fns.pop()();
                    fns.pop()();
                    return fns.pop()();
                } else if (r < .5) {
                    fns.pop()();
                    return fns.pop()();
                } else if (r < .9) {
                    return fns.pop()();
                } else {
                    return "nothing";
                }
            }
        }


        switchSide(player: Player, side: string): void {
            if (!player) {
                return;
            }

            if (player.kickTime > Utils.now() - 15000) {
                return;
            }

            if (this.sim.local &&
                !Sim.Instance.galaxyStar &&
                !Sim.Instance.challenge) {
                player.side = side;
                return;
            }

            if (side !== "spectators" &&
                this.sim.numInTeam(side) >= this.sim.playersPerTeam()) {
                return;
            }

            if (this.sim.state !== "waiting") {
                return;
            }

            player.side = side;
            if (side === "spectators") {
                player.streek = 0;
            }

            player.lastActiveTime = Date.now();
        }

        endOfGame(): void {
            if (this.sim.winningSide) {
                Sim.say(this.sim.winningSide + " has won this match!");
            } else {
                Sim.say("Boo! You both are the weakest links.");
            }

            this.cleanupMore();

            this.recountPlayers();
            if (this.playing_players.length <= 1) {
                this.sim.state = "waiting";
                Sim.say("The winner is " + this.playing_players[0].name);
                Sim.say("After " +
                    this.totalMatchCount +
                    " matches and " +
                    (this.roundCount + 1) +
                    " rounds! 🎉🎉🎉");
                this.totalMatchCount = 0;
                this.roundCount = 0;

                if (this.playing_pairs[this.matchCount]) {
                    if (this.playing_pairs[this.matchCount][1]) {
                        Sim.say("The second place goes to " + this.playing_players[1].name);

                        if (this.playing_pairs[this.matchCount - 1]) {
                            if (this.playing_pairs[this.matchCount - 1][0]) {
                                if (this.playing_pairs[this.matchCount - 1][0].name !== this.playing_pairs[this.matchCount][1].name) {
                                    Sim.say("The third place goes to " + this.playing_pairs[this.matchCount - 1][0].name);
                                }
                            } else if (this.playing_pairs[this.matchCount - 1][1]) {
                                if (this.playing_pairs[this.matchCount - 1][1].name !== this.playing_pairs[this.matchCount][1].name) {
                                    Sim.say("The third place goes to " + this.playing_pairs[this.matchCount - 1][1].name);
                                }
                            }
                        }
                    }
                }

                for (let player_id in this.sim.players) {
                    let player: Player = this.sim.players[player_id];
                    player.side = "spectators";
                }

                this.playing_pairs = [];
                this.playing_players = [];
                this.matchCount = 0;
            } else {
                if (this.matchCount >= this.roundMatchCount) {
                    this.roundCount += 1;
                    this.totalMatchCount += this.matchCount;
                    this.matchCount = 0;
                    this.playing_pairs = [];
                    // @ts-ignore
                    this.current_pair = undefined;
                    Sim.say("Next round of matches! Everyone prepare your donkey!")
                }

                this.sim.start(); // This calls start();
            }
        }

        recountPlayers() {
            this.playing_players = [];

            for (let player_id in this.sim.players) {
                let player = this.sim.players[player_id];
                if (player.side === "alpha" ||
                    player.side === "beta" ||
                    player.side === "waiting") {
                    player.side = "waiting";
                    this.playing_players.push(player);
                }
            }
        }

        /*
         * Called when the game is first starting
         */
        movePlayersAndGeneratePairs() {
            this.recountPlayers();

            Sim.say("Epic match table:");
            this.playing_pairs = [];
            for (let i = 0; i < this.playing_players.length; i++) {
                //this.playing_players[i].side = "" + Math.floor(i / 2);
                if (i % 2 === 1) {
                    Sim.say(
                        "Pair " +
                        (Math.floor(i / 2) + 1) +
                        ": " +
                        this.playing_players[i].name +
                        " vs. " +
                        this.playing_players[i - 1].name);
                    this.playing_pairs.push([this.playing_players[i], this.playing_players[i - 1]]);
                }
            }

            if (this.playing_players.length % 2 === 1) {
                Sim.say(this.playing_players[this.playing_players.length - 1].name + " will have to wait for new round");
            }

            this.roundMatchCount = Math.floor(this.playing_players.length / 2);
        }

        /*
         * Called when new game is going to start
         */
        setupNextGame() {
            this.current_pair = this.playing_pairs[this.matchCount];
            if (!this.current_pair) {
                Sim.say("Next pair is undefined, crashing!");
            }
            Sim.say("Next up " + this.current_pair[0].name + " and " + this.current_pair[1].name);
            CommandsManager.runText(this.current_pair[0].name + " vs " + this.current_pair[1].name, [0, 0, 0, 255]);
            this.current_pair[0].side = "alpha";
            this.current_pair[1].side = "beta";
            this.matchCount += 1;
        }
    }
}