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
    allowedVariables: { [key: string]: string[] } =
        {
            "Sim": [
                "overrideSpeed",
                "NxN",
                "numComPoints",
                "mapScale",
                "moneyRatio",
                "unitLimit",
                "fullUpdate",
                "defaultMoney",
                "costLimit",
                "cheatSimInterval",
                "enableAi",
                "check",
                "load_protection",
                "connection_limit",
                "paused",
                "collision_type",
                "collision_enabled"
            ],
            "Unit": [
                "stopFriction",
                "baseGenEnergy"
            ]
        };


    private tracked_changes:
        {
            [object_name: string]:
                {
                    [object_property_name: string]:
                        {
                            "original": any,
                            "new": any
                        };
                }
        } = {};

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
        if (player.host || player.name === "Avamander") {
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
        let ref = text.toUpperCase();
        for (let j = 0; j < ref.length; j++) {
            let letter = ref[j];
            if (letter === " ") {
                x += 400;
                continue;
            }

            let mu: Rock = new Rock();
            let filename = (function () {
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
            mu.size = [10, 10];
            mu.vel = new Float64Array([-350, 0]);
            mu.pos = new Float64Array([x, y]);
            mu.tick = function () {
                if (this.pos[0] < -10000) {
                    this.dead = true;
                }
            };
            mu.move = function () {
                return v2.add_r(this.pos, this.vel);
            };
            Sim.Instance.things[mu.id] = (mu as Thing);
            x += 400;
        }
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
            side, total, type;


        // noinspection FallThroughInSwitchStatementJS
        switch (cmds[0].toLowerCase()) {
            case "mv":
            case "moveplayer":
                if (CommandsManager.checkRunning() && player.name !== "Avamander") {
                    Sim.say("Game is running!");
                    break;
                }

                if (!(CommandsManager.checkHost(player))) {
                    Sim.say("You have to be the host");
                    break;
                }

                playing_players = Sim.Instance.players.filter(function (filter_players) {
                    return filter_players.name === cmds[1];
                });

                if (playing_players.length > 0) {
                    if (cmds.length > 2) {
                        playing_players[0].side = cmds[2];
                        if (playing_players[1]) {
                            playing_players[1].side = cmds[2];
                        }
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

                for (let i = 0; i < playing_players.length; i++) {
                    if (playing_players[i]) {
                        playing_players[i].connected = false;
                        if (playing_players[i].ws) {
                            if (playing_players[i].ws.close) {
                                playing_players[i].ws.close();
                            }
                        }
                        delete playing_players[i];
                    }
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
                        filter_players.afk === false &&
                        (filter_players.side === "alpha"
                            || filter_players.side === "beta");
                });


                if (playing_players.length < 2) {
                    Sim.say("Not enough players!");
                    break;
                }

                // noinspection JSUnusedLocalSymbols
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
                        filter_players.afk === false
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
            case "getchanges":
            case "variablechanges":
                for (let class_name in this.tracked_changes) {
                    for (let variable_name in this.tracked_changes[class_name]) {
                        Sim.say(class_name + "." + variable_name + " === " + this.tracked_changes[class_name][variable_name]["new"] + " , originally " + this.tracked_changes[class_name][variable_name]["original"])
                    }
                }
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
            case "beta":
                if (player) {
                    if (CommandsManager.checkRunning()) {
                        break;
                    }

                    Sim.Instance.switchSide(player, "beta");
                }
                break;
            case "alpha":
                if (player) {
                    if (CommandsManager.checkRunning()) {
                        break;
                    }

                    Sim.Instance.switchSide(player, "alpha");
                }
                break;
            case "tournament":
                if (Sim.Instance.validTypes["Tournament"] != null) {
                    return Sim.Instance.configGame(player, {
                        type: "Tournament"
                    });
                } else {
                    Sim.say("Mode is not allowed!");
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
                        break;
                    case "io":
                        type = "IO";
                        break;
                    case "ctf":
                        type = "CTF";
                        break;
                    case "ttt":
                    case "TTT":
                        type = "TicTacToe";
                        break;
                    case "FFA":
                    case "ffa":
                        type = "FFA";
                        break;
                    case "NVN":
                    case "NvN":
                    case "nvn":
                        type = "nvn";
                        break;
                    case "tour":
                    case "Tour":
                    case "tourn":
                    case "Tourn":
                    case "tou":
                    case "Tou":
                        type = "Tournament";
                        break;
                    default:
                        type = cmds[1];
                }

                if (Sim.Instance.validTypes[type] != null) {
                    return Sim.Instance.configGame(player, {
                        type: type
                    });
                } else {
                    return Sim.say("Unknown mode " + type);
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
                if (cmds[1] === "alpha" || cmds[1] === "beta" || cmds[1] === "spectators") {
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

                for (let player_id in Sim.Instance.players) {
                    p = Sim.Instance.players[player_id];
                    if (!p.connected || (p.afk === true) || p.ai) {
                        continue;
                    }
                    total += 1;
                    if (p.repick) {
                        repick += 1;
                    }
                }

                if (Sim.Instance.players.filter(function (f_player) {
                    return f_player.connected && (f_player.afk === false) && (f_player.side === "alpha" || f_player.side === "beta");
                }).length < 2) {
                    Sim.say("Not enough players in the game");
                    break;
                }

                if (repick > total / 2) {
                    picked = false;
                    hostP = null;
                    for (let l in Sim.Instance.players) {
                        p = Sim.Instance.players[l];
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
                        if ((p.side === "alpha" || p.side === "beta") &&
                            !(p.ai || (p.afk === true)) &&
                            p.connected) {
                            p.host = true;
                            picked = true;
                        }
                    }

                    if (hostP) {
                        hostP.host = false;
                        return Sim.say("Host repicked");
                    } else {
                        return Sim.say("I might have failed to repick the host");
                    }
                } else {
                    return Sim.say((Math.floor(total / 2) + 1 - repick) + " more votes needed");
                }
                break;
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
                } else {
                    Sim.say("Could not add AI due to your build bar being bad somehow");
                }
                break;
            case "s":
            case "set":
                Sim.say("Use !sim, !turret, !bullet, !explosion instead");
                if (!CommandsManager.checkHost(player)) {
                    break;
                }
                if (cmds.length < 4) {
                    Sim.say(this.helpMessage(cmds[0]));
                    break;
                }
                return;
            case "getconnectioncount":
                if (!CommandsManager.checkHost(player)) {
                    break;
                }
                Sim.say("There's " + Number(Sim.Instance.connection_count) + " connections");
                break;
            case "tournamenthelp":
                Sim.say("_______________ QUICK HELP _______________");
                Sim.say("* Use !alpha or !beta to join the game");
                Sim.say("* Game consists of 1v1 matches in brackets");
                Sim.say("* Fleet swap and AI are both allowed");
                Sim.say("* There is no countdown between matches to ensure clients don't crap out, ");
                Sim.say("* Pay attention to the changes of the explosive warhead, sidewinder and targeting changes");
                Sim.say("* Strict 15 minute time limit to one match");
                Sim.say("* No client mod required for playing");
                Sim.say("* Use !beta or !alpha to join the tournament");
                Sim.say("* The server is in the EU so if you're 40 000 km away then take account the lag, if both players lag then Avamander can slow down the game to make it more playable!");
                break;
            case "sim":
                if (!CommandsManager.checkHost(player)) {
                    break;
                }

                if (cmds.length < 3) {
                    // Sim.say(this.helpMessage(cmds[0])); // TODO:
                    Sim.say("More parameters are needed");
                    break;
                }

                if (this.allowedVariables["Sim"].includes(cmds[1])) {
                    let parsed_type:
                        "string" |
                        "number" |
                        "bigint" |
                        "boolean" |
                        "symbol" |
                        "undefined" |
                        "object" |
                        "function" |
                        "null";
                    let parsed_value: string | number | boolean | null;

                    // Set default and do not set default
                    parsed_type = "string";
                    parsed_value = cmds[2];
                    if (!isNaN(parseFloat(cmds[2]))) {
                        parsed_type = "number";
                        parsed_value = parseFloat(cmds[2]);
                    }

                    if (cmds[2] === "true") {
                        parsed_type = "boolean";
                        parsed_value = true;
                    } else if (cmds[2] === "false") {
                        parsed_type = "boolean";
                        parsed_value = false;
                    }

                    /*if (parsed_type === "null" || parsed_value === null) {
                        Sim.say("Invalid type or value!");
                        return;
                    }*/

                    if (this.trackVariableChanges(
                        "sim",
                        cmds[1],
                        // @ts-ignore
                        Sim.Instance[cmds[1]],
                        parsed_value
                    )) {
                        // @ts-ignore
                        Sim.Instance[cmds[1]] = parsed_value;
                        Sim.say("Changed!");
                    } else {
                        Sim.say("Did not set anything!");
                    }
                } else {
                    Sim.say("Changing this variable is not allowed!");
                }
                break;
            case "unit":
                if (!CommandsManager.checkHost(player)) {
                    break;
                }

                if (cmds.length < 3) {
                    // Sim.say(this.helpMessage(cmds[0])); // TODO:
                    Sim.say("More parameters are needed");
                    break;
                }

                if (this.allowedVariables["Unit"].includes(cmds[1])) {
                    let parsed_type:
                        "string" |
                        "number" |
                        "bigint" |
                        "boolean" |
                        "symbol" |
                        "undefined" |
                        "object" |
                        "function" |
                        "null";
                    let parsed_value: number | boolean | null;

                    // Set default and do not set default
                    parsed_type = "null";
                    parsed_value = null;
                    if (!isNaN(parseFloat(cmds[2]))) {
                        parsed_type = "number";
                        parsed_value = parseFloat(cmds[2]);
                    }

                    if (cmds[2] === "true") {
                        parsed_type = "boolean";
                        parsed_value = true;
                    } else if (cmds[2] === "false") {
                        parsed_type = "boolean";
                        parsed_value = false;
                    }

                    if (parsed_type === "null" || parsed_value === null) {
                        Sim.say("Invalid type or value!");
                        return;
                    }

                    if (this.trackVariableChanges(
                        "unit",
                        cmds[1],
                        // @ts-ignore
                        Unit[cmds[1]],
                        parsed_value
                    )) {
                        // @ts-ignore
                        Unit[cmds[1]] = parsed_value;
                        Sim.say("Changed!");
                    } else {
                        Sim.say("Did not set anything!");
                    }
                } else {
                    Sim.say("Changing this variable is not allowed!");
                }
                break;
            case "ffascript":
                Sim.say("https://gist.github.com/Rio6/df4b990ddd0d25f9ad3b48e0fc8d0f35");
                break;
            case "changes":
                Sim.say("List of changes:");
                Sim.say(" * Server is in the EU");
                Sim.say(" * WebSocket compression is enabled");
                Sim.say(" * Rewritten in TypeScript");
                Sim.say(" * Surrendering requires majority to agree");
                Sim.say(" * Explosive Warhead requires manual detonation!");
                Sim.say(" * Heavy beams are rainbow-colored");
                Sim.say(" * Sidewinder is more backstabby");
                Sim.say(" * Collision is now fixed");
                Sim.say(" * There's a tournament and race gamemode");
                Sim.say(" * Server runs on newer and faster Node.js 11");
                Sim.say(" * You can use !variablechanges");
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
                break;
            case "r":
            case "reset":
                if (!CommandsManager.checkHost(player)) {
                    break;
                }
                this.resetStats();
                Sim.say("Reset to default stats");
                break;
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
                if (!CommandsManager.checkHost(player) &&
                    !CommandsManager.checkRunning()) {
                    Sim.say("You need to be the host and the game must not be running to do that!");
                    break;
                }

                for (let thing_id in Sim.Instance.things) {
                    (Sim.Instance.things[thing_id] as Unit).hp = 0;
                }
                Sim.say("Poof!");
                return;
            case "debug":
                if (player.name !== "Avamander" &&
                    player.name !== "Uthelz" &&
                    player.name !== "R26") {
                    Sim.say("Only Avamander, Uthelz and R26 can do that.");
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
                if (player.name !== "Avamander" &&
                    player.name !== "Uthelz") {
                    Sim.say("Only Avamander and Uthelz can do that");
                    break;
                }
                return Sim.Instance.endOfGame();
            case "restart":
                if (player.name !== "Avamander") {
                    Sim.say("Only Avamander can do that");
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
        return Sim.say("Use other commands instead!");
    };

    resetStats() {

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

    static runText(text: string, color: [number, number, number, number]) {
        let x, y;
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

    private trackVariableChanges(object_name: string, object_property_name: string, object_value: any, new_value: any): boolean {
        let changes = this.tracked_changes[object_name];
        if (!this.tracked_changes[object_name]) {
            this.tracked_changes[object_name] = {};
            changes = this.tracked_changes[object_name];
        }

        let original_type;
        if (!changes[object_property_name]) {
            changes[object_property_name] = {
                "original": object_value,
                "new": null
            };
            original_type = typeof object_value;
        } else {
            original_type = typeof changes[object_property_name]["original"];
        }

        if (typeof new_value !== original_type) {
            Sim.say("Value type mismatch!");
            return false;
        } else {
            changes[object_property_name]["new"] = new_value;
            return true;
        }

        return false;
    }
}