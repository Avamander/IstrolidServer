import {Sim} from "./sim";
import {v2} from "./maths";
import {Player, Rock, Thing} from "./things";
import {Unit} from "./unit";

export class CommandsManager {
    indexOf = [].indexOf;

    defStats = {
        parts: {},
        types: {}
    };

    diffStats = {
        sim: {}
    };

    allowedSim = ["mapScale", "numComPoints", "defaultMoney", "costLimit", "makeRocks", "awaitRestart", "tickTime", "moneyRatio", "unitLimit", "victoryGoal", "NxN", "enableAi", "check", "numFlags"];

    current_teams: string[] = ["alpha", "beta"];


    static _instance: CommandsManager;

    repick: number = 0;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    constructor() {

    }

    static findChatPlayer(name: string): Player {
        if (Sim.Instance.chat.players) {
            let player = Sim.Instance.chat.players[name];
            if (player) {
                return player;
            }
        }

        // @ts-ignore // There should be one lookup table for Name -> ID, but currently //TODO
        return {
            // @ts-ignore
            rank: 0
        };
    };

    static findRank(name: string): number {
        let chatPlayer = CommandsManager.findChatPlayer(name);
        if (!chatPlayer) {
            return 0;
        }

        // @ts-ignore // There should be one lookup table for Name -> ID, but currently //TODO
        return Math.round(chatPlayer.rank || 0);
    };

    static permute(input: any[]) {
        let r = [[input[0]]],
            t = [],
            s = [];

        if (input.length <= 1) return input;

        for (let i = 1, la = input.length; i < la; i++) {
            for (let j = 0, lr = r.length; j < lr; j++) {
                r[j].push(input[i]);
                t.push(r[j]);
                for (let k = 1, lrj = r[j].length; k < lrj; k++) {
                    for (let l = 0; l < lrj; l++) s[l] = r[j][(k + l) % lrj];
                    t[t.length] = s;
                    s = [];
                }
            }
            r = t;
            t = [];
        }
        return r;
    };

    static get_balance_index() {
        let alpha_players = Sim.Instance.players.filter(function (filter_players) {
            return filter_players.connected &&
                filter_players.side === "alpha";
        });

        let beta_players = Sim.Instance.players.filter(function (filter_players) {
            return filter_players.connected &&
                filter_players.side === "beta";
        });

        let beta_sum = 1;
        for (let i = 0; i < beta_players.length; i++) {
            beta_sum += CommandsManager.findRank(beta_players[i].name);
        }

        let alpha_sum = 1;
        for (let i = 0; i < alpha_players.length; i++) {
            alpha_sum += CommandsManager.findRank(alpha_players[i].name);
        }

        if (alpha_sum > beta_sum) {
            return (alpha_sum / beta_sum).toFixed(4);
        } else if (alpha_sum < beta_sum) {
            return (beta_sum / alpha_sum).toFixed(4);
        } else {
            return "perfect! :O";
        }
    };

    static checkHost(player: Player) {
        if (player != null ? player.host : void 0) {
            return true;
        }
        if ((player != null ? player.name : void 0) === "Avamander") {
            return true;
        }
        Sim.say("Only host can do that");
        return false;
    };

    static checkRunning() {
        if (Sim.Instance.state !== "running") {
            return false;
        }
        Sim.say("Game already started");
        return true;
    };

    static muha(x: number, y: number, color: [number, number, number, number], text: string) {
        let filename, letter, ref, results;
        ref = text.toUpperCase();
        results = [];
        for (let j = 0; j < ref.length; j++) {
            letter = ref[j];
            if (letter === " ") {
                x += 400;
                continue;
            }

            let mu: Rock = new Rock();
            filename = (function () {
                switch (letter) {
                    case "#":
                        return "letterPound.png";
                    case ".":
                        return "letterDot.png";
                    default:
                        return "letter" + letter + ".png";
                }
            })();
            mu.image = "parts/decals/" + filename;
            mu.color = color;
            mu.z = 10;
            mu["static"] = false;
            mu.size = new Float64Array([10, 10]);
            mu.vel = new Float64Array([-350, 0]);
            mu.pos = new Float64Array([x, y]);
            mu.tick = function () {
                if (this.pos[0] < -10000) {
                    return this.dead = true;
                }
            };
            mu.move = function () {
                return v2.add_r(this.pos, this.vel);
            };
            Sim.Instance.things[mu.id] = (mu as Thing);
            results.push(x += 400);
        }
        return results;
    };

    find_best_teams(players: Player[]): Player[][] {
        players.sort(function (a, b) {
            return CommandsManager.findRank(a.name) - CommandsManager.findRank(b.name)
        });

        let combinations = CommandsManager.permute(players);

        let best_combination = [];
        let best_combination_score = 256 * 256 * 256;
        let combination_score = 0;

        for (let i = 0; i < combinations.length; i++) {
            let half_length = Math.floor(combinations[i].length / 2);

            let alpha_score = 0;
            for (let j = 0; j < half_length; j++) {
                alpha_score += CommandsManager.findRank(combinations[i][j].name);
            }

            let beta_score = 0;
            for (let j = half_length; j < combinations[i].length; j++) {
                beta_score += CommandsManager.findRank(combinations[i][j].name);
            }

            combination_score = Math.abs(alpha_score - beta_score);

            //console.log(combination_score, best_combination_score);
            if (combination_score < best_combination_score) {
                best_combination = combinations[i];
                best_combination_score = combination_score;
            }
        }

        let result: Player[][] = [];
        result.push([]);
        result.push([]);

        for (let j = 0; j < Math.floor(best_combination.length / 2); j++) {
            result[0].push(best_combination[j]);
        }

        for (let j = Math.floor(best_combination.length / 2); j < best_combination.length; j++) {
            result[1].push(best_combination[j]);
        }
        return result;
    };

    find_worst_teams(players: Player[]): Player[][] {
        players.sort(function (a, b) {
            return CommandsManager.findRank(a.name) - CommandsManager.findRank(b.name)
        });

        let combinations = CommandsManager.permute(players);

        let best_combination = undefined;
        let best_combination_score = 0;
        let combination_score = 0;

        for (let i = 0; i < combinations.length; i++) {
            let half_length = Math.floor(combinations[i].length / 2);

            let alpha_score = 0;
            for (let j = 0; j < half_length; j++) {
                alpha_score += CommandsManager.findRank(combinations[i][j].name);
            }

            let beta_score = 0;
            for (let j = half_length; j < combinations[i].length; j++) {
                beta_score += CommandsManager.findRank(combinations[i][j].name);
            }

            combination_score = Math.abs(alpha_score - beta_score);

            //console.log(combination_score, best_combination_score);
            if (combination_score > best_combination_score) {
                best_combination = combinations[i];
                best_combination_score = combination_score;
            }
        }

        let result: Player[][] = [];
        result.push([]);
        result.push([]);

        for (let j = 0; j < Math.floor(best_combination.length / 2); j++) {
            result[0].push(best_combination[j]);
        }

        for (let j = Math.floor(best_combination.length / 2); j < best_combination.length; j++) {
            result[1].push(best_combination[j]);
        }
        return result;
    }


    processCommand(player: Player, cmds: string[]) {
        let aiBuildBar, debug, hostP, index, l, len, len1, name, p, picked, ref, current_players, ref2,
            repick, playing_players, playing_teams,
            results, side, total, type;


        // noinspection FallThroughInSwitchStatementJS
        switch (cmds[0].toLowerCase()) {
            case "mv":
            case "moveplayer":
                if (CommandsManager.checkRunning() && player.name !== "Avamander") {
                    Sim.say("Game is running!");
                    break;
                }

                if (!(CommandsManager.checkHost(player))) {
                    break;
                }

                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.name === cmds[1];
                });

                if (playing_players.length > 0) {
                    if (cmds.length > 2) {
                        playing_players[0].side = cmds[2];
                    } else {
                        Sim.say("Specify the team too!");
                    }
                } else {
                    Sim.say("No such player!");
                }
                break;
            case "rm":
            case "kick":
                if (player.name !== "Avamander") {
                    Sim.say("Not allowed!");
                    break;
                }
                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.name === cmds[1];
                });

                if (playing_players.length > 0) {
                    playing_players[0].side = "spectators";
                }
                break;
            case "rmrf":
            case "disconnect":
                if (player.name !== "Avamander") {
                    Sim.say("Not allowed!");
                    break;
                }

                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.name === cmds[1];
                });

                if (playing_players.length > 0) {
                    playing_players[0].connected = false;
                }
                break;
            case "takehost":
            case "removehost":
                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.name === cmds[1];
                });

                if (playing_players.length > 0) {
                    playing_players[0].host = false;
                }
                break;
            case "belence":
                if (CommandsManager.checkRunning() && player.name !== "Avamander") {
                    Sim.say("Game is running, not making things unfair!");
                    Sim.say("Current (im)balance index is " + CommandsManager.get_balance_index());
                    break;
                }

                if (!(CommandsManager.checkHost(player))) {
                    break;
                }

                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.connected &&
                        !filter_players.afk
                        && (filter_players.side === "alpha"
                            || filter_players.side === "beta");
                });

                playing_teams = this.find_worst_teams(playing_players);
                if (playing_teams === undefined) {
                    console.log("Playing teams undefined", playing_teams);
                    break;
                }

                for (let team_index = 0; team_index < playing_teams.length; team_index++) {
                    for (let team_player of playing_teams[team_index]) {
                        team_player.side = this.current_teams[team_index]
                    }
                }

                Sim.say("B E L E N C E D");
                Sim.say("Current (im)balance index is " + CommandsManager.get_balance_index());
                break;
            case "shuffle":
                if (CommandsManager.checkRunning() && player.name !== "Avamander") {
                    Sim.say("Game is running, not shuffling!");
                    Sim.say("Current (im)balance index is " + CommandsManager.get_balance_index());
                    break;
                }

                if (!(CommandsManager.checkHost(player))) {
                    break;
                }

                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.connected &&
                        !filter_players.afk
                        && (filter_players.side === "alpha"
                            || filter_players.side === "beta");
                });


                if (playing_players.length < 2) {
                    Sim.say("Not enough players!");
                    break;
                }

                playing_players = playing_players.sort(function (a, b) {
                    return Math.random() - 0.5;
                });


                for (let i = 0; i < playing_players.length; i++) {
                    if (i % 2 === 0) {
                        playing_players[i].side = "alpha"
                    } else {
                        playing_players[i].side = "beta"
                    }
                }

                Sim.say("Shuffled");
                break;
            case "balance":
                if (CommandsManager.checkRunning() && player.name !== "Avamander") {
                    Sim.say("Game is running, not balancing!");
                    Sim.say("Current (im)balance index is " + CommandsManager.get_balance_index());
                    break;
                }

                if (!(CommandsManager.checkHost(player))) {
                    break;
                }

                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.connected &&
                        !filter_players.afk
                        && (filter_players.side === "alpha"
                            || filter_players.side === "beta");
                });

                if (playing_players.length < 2) {
                    Sim.say("Not enough players!");
                    break;
                }

                playing_teams = this.find_best_teams(playing_players);
                if (playing_teams === undefined) {
                    console.log("Playing teams undefined", playing_teams);
                    break;
                }

                for (let team_index = 0; team_index < playing_teams.length; team_index++) {
                    for (let team_player of playing_teams[team_index]) {
                        team_player.side = this.current_teams[team_index]
                    }
                }

                Sim.say("Balanced!");
                Sim.say("Current (im)balance index is " + CommandsManager.get_balance_index());
                break;
            case "getbalance":
                Sim.say("Current (im)balance index is " + CommandsManager.get_balance_index());
                break;
            case "gethost":
                if (!(CommandsManager.checkHost(player))) {
                    break;
                }
                player.host = true;
                Sim.say("Host given");
                break;
            case "givehost":
            case "sethost":
                if (!(CommandsManager.checkHost(player))) {
                    break;
                }
                player.host = false;

                let target_player = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.connected &&
                        (filter_players.side === "alpha" || filter_players.side === "beta") &&
                        filter_players.name === cmds[1];
                });

                if (target_player.length > 0) {
                    target_player[0].host = true;
                    Sim.say("Given!")
                } else {
                    Sim.say("No such player was found on either of the teams!");
                }
                break;
            case "m":
            case "mode":
                if (cmds.length < 2) {
                    Sim.say(this.helpMessage(cmds[0]));
                    break;
                }
                if (!CommandsManager.checkHost(player)) {
                    break;
                }

                if (CommandsManager.checkRunning()) {
                    break;
                }

                switch (cmds[1]) {
                    case "surv":
                    case "Surv":
                    case "survival":
                        type = "Survival";
                    case "io":
                        type = "IO";
                    case "ctf":
                        type = "CTF";
                    case "ttt":
                    case "TTT":
                        type = "TicTacToe";
                    case "FFA":
                    case "ffa":
                        type = "FFA";
                    case "NVN":
                    case "NvN":
                    case "nvn":
                        type = "nvn";
                    default:
                        type = cmds[1];
                }

                if (Sim.Instance.validTypes[type] != null) {
                    return Sim.Instance.configGame(player, {
                        type: type
                    });
                } else {
                    return Sim.say("unknown mode " + type);
                }
                break;
            case "start":
                if (CommandsManager.checkRunning()) {
                    break;
                }

                if (!CommandsManager.checkHost(player)) {
                    break;
                }

                return Sim.Instance.startGame(player, true);
            case "j":
            case "join":
                if (cmds.length < 2) {
                    Sim.say(this.helpMessage(cmds[0]));
                    break;
                }
                if (CommandsManager.checkRunning()) {
                    break;
                }
                if ((ref = cmds[1]) === "alpha" || ref === "beta" || ref === "spectators") {
                    return Sim.Instance.switchSide(player, cmds[1]);
                } else {
                    return Sim.say("Unknown team");
                }
            case "abs":
            case "abstain":
                if (!player.repick) {
                    Sim.say("You haven't voted!");
                    break;
                } else {
                    if (this.repick !== undefined && this.repick > 0) {
                        this.repick -= 1;
                        player.repick = false;
                        Sim.say("Abstained");
                        break;
                    } else {
                        Sim.say("There's nothing to abstain?");
                        break;
                    }
                }
            case "rpck":
            case "repick":
                player.repick = true;
                total = 0;
                repick = 0;
                current_players = Sim.Instance.players;

                for (index = 0, len = current_players.length; index < len; index++) {
                    p = current_players[index];
                    if (!p.connected || p.afk || p.ai) {
                        continue;
                    }
                    total += 1;
                    if (p.repick) {
                        repick += 1;
                    }
                }

                if (Sim.Instance.players.filter(function (f_player) {
                    return f_player.connected && !f_player.afk && (f_player.side === "alpha" || f_player.side === "beta");
                }).length < 2) {
                    Sim.say("Not enough players in the game");
                    break;
                }

                if (repick > total / 2) {
                    picked = false;
                    hostP = {};
                    ref2 = Sim.Instance.players;
                    for (l = 0, len1 = ref2.length; l < len1; l++) {
                        p = ref2[l];
                        p.repick = false;
                        if (p.host) {
                            hostP = p;
                        }
                    }
                    while (!picked) {
                        p = Sim.Instance.players[Math.floor(Math.random() * Sim.Instance.players.length)];
                        if (p.host) {
                            continue;
                        }
                        if ((p.side === "alpha" || p.side === "beta") && !(p.ai || p.afk) && p.connected) {
                            p.host = true;
                            picked = true;
                        }
                    }
                    // @ts-ignore
                    hostP.host = false;
                    return Sim.say("Host repicked");
                } else {
                    return Sim.say((Math.floor(total / 2) + 1 - repick) + " more votes needed");
                }
            case "addai":
                if (cmds.length < 3) {
                    Sim.say(this.helpMessage(cmds[0]));
                    break;
                }
                if (CommandsManager.checkRunning() && player.name !== "Avamander") {
                    break;
                }
                if (!(player.side === "alpha" || player.side === "beta" || player.name === "Avamander")) {
                    Sim.say("You need to be on a team");
                    break;
                }
                name = cmds[1];
                side = cmds[2].toLowerCase();
                if (side !== "alpha" && side !== "beta") {
                    Sim.say("Unknown team");
                    break;
                }
                aiBuildBar = Sim.Instance.aimanager.all[name];
                if (!aiBuildBar) {
                    Sim.say("Cannot find " + name + ", using your current fleet");
                    aiBuildBar = player.buildBar;
                }
                if (aiBuildBar) {
                    Sim.Instance.addAi(player, name, side, aiBuildBar, true);
                    return Sim.say("Added " + name + " to " + side);
                }
                break;
            case "s":
            case "set":
                if (!CommandsManager.checkHost(player)) {
                    break;
                }
                if (cmds.length < 4) {
                    Sim.say(this.helpMessage(cmds[0]));
                    break;
                }
                return this.changeStat(cmds[1], cmds[2], cmds[3], false);
            case "changes":
                Sim.say("List of changes:");
                Sim.say(" * WebSocket compression");
                Sim.say(" * Rewritten in TypeScript");
                Sim.say(" * Surrendering requires majority to agree");
                Sim.say(" * Explosive Warhead requires manual detonation");
                /*
                results = [];
                for (n in this.diffStats) {
                    p = this.diffStats[n];
                    results.push((function () {
                        let results1 = [];
                        for (k in p) {
                            v = p[k];
                            results1.push(Sim.say(n + "." + k + " = " + (typeof v === "function" ? v.name : v)));
                        }
                        return results1;
                    })());
                }
                return results*/
                return;
            case "r":
            case "reset":
                if (!CommandsManager.checkHost(player)) {
                    break;
                }
                this.resetStats();
                return Sim.say("Reset to default stats");
            case "export":
                return Sim.say("Not implemented due to being hacky");
            /*
            Sim.Instance.things = Sim.Instance.things || {};
            ref3 = Sim.Instance.things;
            for (_ in ref3) {
                t = ref3[_];
                if (t.owner === -1) {
                    t.hp = 0;
                }
            }
            u = this.genStatUnit(diffStats);
            u.pos = [0, 0];
            u.rot = Math.PI;
            u.owner = -1;
            u.color = [255, 255, 0, 255];
            u.canCapture = false;
            Sim.Instance.things[u.id] = u;
            return Sim.say("Stat changes exported, copy the unit with copy script to save it");
            */
            case "import":
                return Sim.say("Not implemented due to being hacky");
            /*
            if (!this.checkHost(player)) {
                break;
            }
            if (cmds.length < 2) {
                Sim.say(this.helpMessage(cmds[0]));
                break;
            }
            this.resetStats();
            i = parseInt(cmds[1]);
            Sim.say("Loading stats from " + player.name + "'s slot: " + i);
            window.diffStats = statFromSpec(player.buildBar[i - 1]);
            return applyDiff(diffStats);
            */
            case "fw":
            case "firework":
            case "fireworks":
                if (player.name !== "Avamander" &&
                    (CommandsManager.checkHost(player) && !CommandsManager.checkRunning())) {
                    Sim.say("You need to be the host and the game must not be running to do that!");
                    break;
                }

                for (let _ in Sim.Instance.things) {
                    (Sim.Instance.things[_] as Unit).hp = 0;
                }
                Sim.say("Poof!");
                return;
            case "debug":
                if (player.name !== "Avamander") {
                    Sim.say("only Avamander can do that");
                    break;
                }
                if (cmds.length > 1) {
                    debug = (function () {
                        switch (cmds[1].toLowerCase()) {
                            case "true":
                            case "on":
                            case "yes":
                                return true;
                            default:
                                return false;
                        }
                    })();
                } else {
                    debug = !Sim.Instance.DEBUG;
                }
                Sim.Instance.DEBUG = debug;
                return Sim.say("Debug is now " + (debug ? "on" : "off"));
            case "end":
                if (player.name !== "Avamander") {
                    Sim.say("only Avamander can do that");
                    break;
                }
                return Sim.Instance.endOfGame();
            case "restart":
                if (player.name !== "Avamander") {
                    Sim.say("only Avamander can do that");
                    break;
                }
                Sim.say("Restarting server");
                return process.exit();
            case "h":
            case "help":
                return Sim.say(this.helpMessage(cmds[1]));
            default:
                return Sim.say(this.helpMessage(""));
        }
    };

    helpMessage(cmd: string) {
        let t;
        switch (cmd) {
            case "mode":
                return "!mode <mode> - switch gamemode. available modes: " + ((function () {
                    let results;
                    results = [];
                    for (t in Sim.Instance.validTypes) {
                        results.push(t);
                    }
                    return results;
                })());
            case "start":
                return "!start - start the game";
            case "join":
                return "!join <side> - join a team";
            case "addai":
                return "!addai <name> <side> - add ai <name> to <side> team, use your current fleet if not found";
            case "repick":
                return "!repick - vote to repick the host";
            case "set":
                return "!set <part> <field> <value> - set a stat of a part";
            case "changes":
                return "!changes - list all the changes";
            case "reset":
                return "!reset - reset stats to defaule";
            case "end":
                return "!end - end the game";
            case "restart":
                return "!restart - restart the server";
            case "balance":
                return "!balance - balances the teams";
            case "belence":
                return "!belence - absolutely doesn't balance the teams";
            case "shuffle":
                return "!shuffle - shuffles the teams randomly";
            case "abstain":
                return "!abstain - undoes host repick vote";
            case "givehost":
                return "!givehost <name> - gives host to the specified user currently playing";
            default:
                return "available commands: abstain givehost belence balance shuffle mode start join addai repick set changes reset end restart help";
        }
    };

    parseStat(t: any, str: string) {
        return Sim.say("Not implemented");
        /*
        let v, value;
        if (typeof stat === t) {
            value = str;
        } else {
            value = (function () {
                let j, len, ref, results;
                switch (t) {
                    case "number":
                        return Number(str);
                    case "boolean":
                        return str.toLowerCase() === "true";
                    case "string":
                        return str;
                    case "object":
                        if (/(\d*.\d*,)*(\d*.\d*)/.test(str)) {
                            ref = str.split(",");
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                v = ref[j];
                                results.push(Number(v));
                            }
                            return results;
                        } else {
                            if (!this.quiet) {
                                Sim.say("Cannot parse " + str + " to " + t);
                            }
                            return null;
                        }
                        break;
                    default:
                        return null;
                }
            })();
        }
        return value;
        */
    };

    /*
    genStatUnit(stats) {
        return new types.Unit({
            parts: [
                {
                    type: "HArmor2x2",
                    pos: [0, 0],
                    dir: 0
                }, {
                    type: "Battery1x1",
                    pos: [-10, -30],
                    dir: 0
                }, {
                    type: "Engine04",
                    pos: [10, -40],
                    dir: 0
                }
            ],
            aiRules: [
                [
                    "Code Block", JSON.stringify(stats, function (k, v) {
                    let name;
                    if (v === 2e308) {
                        return "Infinity";
                    } else if (typeof v === "function") {
                        name = v.name;
                        if (types.hasOwnProperty(name)) {
                            return name;
                        }
                    }
                    return v;
                })
                ]
            ]
        });
    };

    statFromSpec(spec) {
        let e, json, ref, ref1;
        if (spec == null) {
            return {
                sim: {}
            };
        }
        json = (ref = spec.aiRules) != null ? (ref1 = ref[0]) != null ? ref1[1] : void 0 : void 0;
        try {
            return JSON.parse(json, function (k, v) {
                if (v === "Infinity") {
                    return 2e308;
                } else if (types.hasOwnProperty(v)) {
                    return types[v];
                }
                return v;
            });
        } catch (error) {
            e = error;
        }
        return {
            sim: {}
        };
    };*/

    applyDiff(diff: any, quiet: any) {
        return Sim.say("Not implemented");
        /*
        let k, n, p, results, v;
        if (quiet == null) {
            quiet = false;
        }
        results = [];
        for (n in diffStats) {
            p = diffStats[n];
            results.push((function () {
                var results1;
                results1 = [];
                for (k in p) {
                    v = p[k];
                    results1.push(changeStat(n, k, v, quiet));
                }
                return results1;
            })());
        }
        return results;
        */
    };

    // @ts-ignore
    changeStat(type, field, stat, quiet) {
        return Sim.say("Not implemented");
    };

    resetStats() {
        return Sim.say("Not implemented");
        /*
            let k, ref, ref1, ref2, stat, type, v;
            ref = this.defStats.parts;
            for (type in ref) {
                stat = ref[type];
                for (k in stat) {
                    v = stat[k];
                    parts[type].prototype[k] = v;
                }
            }
            ref1 = this.defStats.types;
            for (type in ref1) {
                stat = ref1[type];
                for (k in stat) {
                    v = stat[k];
                    types[type].prototype[k] = v;
                }
            }
            ref2 = this.diffStats.sim;
            for (k in ref2) {
                v = ref2[k];
                Sim.Instance[k] = Sim.constructor.prototype[k];
            }
            return window.diffStats = {
                sim: {}
            };*/
    };

    runText(text: string, color: [number, number, number, number]) {
        let j, results, x, y;
        if (!Sim.Instance.things) {
            return;
        }
        text = text.replace(/[^a-zA-Z0-9#.]/g, " ").slice(0, 25);

        if (!color) {
            color = [
                Math.random() * 255,
                Math.random() * 255,
                Math.random() * 255,
                255
            ];
        }

        results = [];

        for (let x = 0; x < 4000; x += 4000) {
            for (let y = -5000; y < 5000; y += 500) {
                CommandsManager.muha(
                    Math.random() * 10000 + 6000,
                    y,
                    color,
                    text
                );
            }
        }
    };
}