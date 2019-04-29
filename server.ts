import {Player} from "./istrolid_presskannukovh/things";
import {Sim} from "./istrolid_presskannukovh/sim";
import {Utils} from "./istrolid_presskannukovh/utils";
import {CommandsManager} from "./istrolid_presskannukovh/commands";
import {Thing} from "./istrolid_presskannukovh/things";
const WebSocket = require("ws");
//import {CommandsManager} from "./istrolid_presskannukovh/995src_commands";
//require("./fix"); // Enable DLC when server and replace window with global

export class IstrolidServer {
    private static readonly config = require("./config.json");
    static readonly allowedCmds: string[] = [
        "playerJoin",
        "mouseMove",
        "playerSelected",
        "setRallyPoint",
        "buildRq",
        "stopOrder",
        "holdPositionOrder",
        "followOrder",
        "selfDestructOrder",
        "moveOrder",
        "configGame",
        "startGame",
        "addAi",
        "switchSide",
        "kickPlayer",
        "surrender"
    ];

    wss: any;
    root: any;

    players: Player[] = [];
    lastInfoTime: number = 0;
    interval: NodeJS.Timeout;
    serverInfoInterval: NodeJS.Timeout;

    static _instance: IstrolidServer;

    public static get Instance(): IstrolidServer {
        return this._instance;
    }

    constructor () {
        this.wss = new WebSocket.Server({
            port: 5053,
            perMessageDeflateOptions: {
                chunkSize: 256,
                memLevel: 9,
                level: 9
            },
            zlibInflateOptions: {
                chunkSize: 256
            },
            clientNoContextTakeover: true,
            serverNoContextTakeover: true,
            serverMaxWindowBits: 10,
            concurrencyLimit: 5,
            threshold: 512
        });

        this.wss.on("connection", function (ws: any, req: any) {
            let source_ip: string = (req.headers["x-forwarded-for"] as string);
            console.log("Connection from", source_ip);
            Sim.Instance.connection_count += 1;

            let webSocketKey: string = (req.headers["sec-websocket-key"] as string);
            let id: number | undefined = Sim.Instance.WSKeyToPlayerID[webSocketKey];

            console.log("Player with key:", req.headers["sec-websocket-key"]);

            ws.on("message", function (msg: Iterable<number>) {
                let packet = new DataView(new Uint8Array(msg).buffer);
                // @ts-ignore
                let data: string[] = Sim.Instance.zJson.loadDv(packet);
                //console.log(data);

                switch (data[0]) {
                    case "playerJoin": {
                        console.log("Player joined", data[0], data[1], data[2], data[3]);

                        // Clearly this player is unknown, let's hope it's returning
                        if (id === undefined || id === null) {
                            let player_id: string;
                            for (player_id in Sim.Instance.players) {
                                let player = Sim.Instance.players[player_id];
                                if (!player.ai) {
                                    if (player.name === data[2]) {
                                        if (player.id !== data[1]) {
                                            // Player ID doesn't match, if websocket
                                            // key doesn't either then disconnect
                                            if (player.webSocketKey !== webSocketKey) {
                                                console.log(
                                                    "Player ",
                                                    player.name,
                                                    "if attemted to be impersonated by commander.id",
                                                    data[0],
                                                    "and IP address",
                                                    source_ip);
                                                ws.close();
                                            } else {
                                                // Surprisingly the player changed his ID
                                                console.log(
                                                    "Player ",
                                                    player.name,
                                                    "changed their commander.id",
                                                    data[0],
                                                    "and maybe IP address",
                                                    source_ip);
                                                player.ip = source_ip;
                                                player.id = data[0];
                                                id = player.number;
                                                if (typeof id !== "number") {
                                                    id = parseInt(id);
                                                }
                                                if (typeof player.number !== "number") {
                                                    player.number = parseInt(player.number);
                                                }
                                            }
                                        } else {
                                            if (player.webSocketKey !== webSocketKey) {
                                                console.log(
                                                    "Player",
                                                    player.name,
                                                    "reconnected with commander.id",
                                                    isNaN(parseInt(data[1])) ? parseInt(data[1]) : data[1],
                                                    "and IP address",
                                                    source_ip);
                                                // Key doesn't match but the rest does
                                                // Let's assume commander.id is a secret :P
                                                player.ip = source_ip;
                                                player.webSocketKey = webSocketKey;
                                                Sim.Instance.WSKeyToPlayerID[webSocketKey] = player.number;

                                                id = player.number;
                                                player.afk = false;
                                                player.connected = true;
                                                player.lastActiveTime = Date.now();
                                                if (typeof id !== "number") {
                                                    id = parseInt(id);
                                                }
                                                if (typeof player.number !== "number") {
                                                    player.number = parseInt(player.number);
                                                    // @ts-ignore
                                                    Sim.Instance.WSKeyToPlayerID[webSocketKey] = parseInt(player.number);
                                                }
                                                Sim.Instance.clearNetState();
                                            } else {
                                                // Everything is fine, set ID
                                                player.ip = source_ip;
                                                id = player.number;
                                                player.afk = false;
                                                player.connected = true;
                                                player.lastActiveTime = Date.now();
                                                if (typeof id !== "number") {
                                                    id = parseInt(id);
                                                }
                                                if (typeof player.number !== "number") {
                                                    player.number = parseInt(player.number);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        // Turns out no such player exists already, let's enforce connection limit
                        if (id === undefined || id === null) {
                            if ((Sim.Instance.connection_count > Sim.Instance.connection_limit) &&
                                (data[2] !== "Avamander")) {
                                console.log("Load limit exceeded, disconnecting new client");
                                Sim.say(data[2] + ", you have been disconnected because the server has reached the connection limit");
                                ws.close();
                                break;
                            }
                        }

                        // @ts-ignore
                        let player: Player = Sim.Instance.playerJoin(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
                        player.ws = ws;
                        player.afk = false;
                        player.connected = true;
                        player.lastActiveTime = Date.now();

                        // Now we have a new player, let's remember it
                        if (id === undefined || id === null) {
                            Sim.Instance.WSKeyToPlayerID[webSocketKey] = player.number;
                            id = player.number;
                            player.webSocketKey = webSocketKey;
                            player.ip = source_ip;

                            if (typeof id !== "number") {
                                id = parseInt(id);
                            }
                            if (typeof player.number !== "number") {
                                player.number = parseInt(player.number);
                                // @ts-ignore
                                Sim.Instance.WSKeyToPlayerID[webSocketKey] = player.number;
                            }
                            Sim.Instance.clearNetState();
                        }
                        break;
                    }
                    case "mouseMove": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.mouseMove.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "playerSelected": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.playerSelected.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "setRallyPoint": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.setRallyPoint.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "buildRq": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.buildRq.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "stopOrder": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.stopOrder.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "holdPositionOrder": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.holdPositionOrder.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "followOrder": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.followOrder.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "selfDestructOrder": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.selfDestructOrder.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "moveOrder": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.moveOrder.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "configGame": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.configGame.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "startGame": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.startGame.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "addAi": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.addAi.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "switchSide": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.switchSide.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "kickPlayer": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.kickPlayer.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "surrender": {
                        //console.log("What the fuck is alpha", data)
                        // @ts-ignore Look up function in simulation and execute it with arguments given
                        Sim.Instance.surrender.apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                        break;
                    }
                    case "gameKey": {
                        console.log(data);
                        break;
                    }
                    default: {
                        console.log(data);
                        break;
                    }
                }
            });

            ws.on("close", function (e: any) {
                Sim.Instance.connection_count -= 1;
                console.log("WebSocket closed: ", e);
                for (let player_id in Sim.Instance.players) {
                    let player = Sim.Instance.players[player_id];
                    if (player &&
                        player.webSocketKey === webSocketKey) {
                        player.connected = false;
                        player.afk = true;
                        player.ws = undefined;
                        if (Sim.Instance.state === "waiting") {
                            player.side = "spectators";
                            player.host = false;
                        }
                        console.log("Player disconnected:", player_id, player.name);
                        //delete Sim.Instance.players[player_id];
                    }
                }
            });
        });

        this.interval = setInterval(function () {
            let rightNow = Utils.now();
            let current_sim = Sim.Instance;
            if (rightNow - current_sim.lastSimInterval >= ((1000 / 16) + current_sim.cheatSimInterval)) {
                current_sim.lastSimInterval = rightNow;

                if (!current_sim.paused) {
                    current_sim.simulate();
                } else {
                    current_sim.startingSim();
                }

                let packet = current_sim.send();

                try {
                    IstrolidServer.Instance.wss.clients.forEach((client: { readyState: any; send: (arg0: DataView) => void; }) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(packet);
                        }
                    });
                } catch (e) {
                    console.log("Error at sending packet!", e);
                }
            }
        }, 5);

        this.serverInfoInterval = setInterval(function () {
            IstrolidServer.sendInfo();
            IstrolidServer.Instance.lastInfoTime = Utils.now();
        }, 10000);

        this.root = new WebSocket(IstrolidServer.config.root_addr);

        IstrolidServer._instance = this;

        this.connectToRoot();
    }

    static send (player: Player, data: any) {
        let packet = Sim.Instance.zJson.dumpDv(data);
        let client = player.ws;
        if (client !== null &&
            client !== undefined &&
            client.readyState === WebSocket.OPEN) {
            client.send(packet);
        }
    }

    sendToRoot (data: any) {
        IstrolidServer.rootsendData(data);
    }

    static stop () {
        console.log("Stopping server");
        IstrolidServer.Instance.wss.close();
        clearInterval(IstrolidServer.Instance.interval);
        clearInterval(IstrolidServer.Instance.serverInfoInterval);
    }

    static say (msg: string) {
        IstrolidServer.rootsendData(["message", {
            text: msg,
            channel: IstrolidServer.config.name,
            color: "FFFFFF",
            name: "Avama",
            server: true
        }]);
    }

    connectToRoot () {
        IstrolidServer.Instance.root = new WebSocket(IstrolidServer.config.root_addr);

        IstrolidServer.Instance.root.on("open", function () {
            console.log("Connected to root!");
            IstrolidServer.sendInfo();
            let account_info = {
                email: IstrolidServer.config.user_email,
                fingerprint: IstrolidServer.config.user_fingerprint,
                steamid: IstrolidServer.config.user_steam_id,
                token: IstrolidServer.config.user_token,
            };
            IstrolidServer.rootsendData(["authSignIn", account_info]);
            IstrolidServer.rootsendData(["registerBot"]);
            IstrolidServer.Instance.lastInfoTime = Utils.now();
            Sim.say("I'm now back online!");
        });

        IstrolidServer.Instance.root.on("message", function (msg: string) {
            let data = JSON.parse(msg);
            switch (data[0]) {
                case "message":
                    if (data[1].channel === IstrolidServer.config.name && data[1].text.startsWith("!")) {
                        let p = Sim.Instance.players.filter(function (p: Player) {
                            return p.name === data[1].name;
                        })[0];

                        if (p !== undefined && p !== null) {
                            let cmds = data[1].text.slice(1).split(" ");
                            console.log(p.name, "issued command:", cmds);
                            p.afk = false;
                            p.lastActiveTime = Date.now();
                            return CommandsManager.Instance.processCommand(p, cmds);
                        }
                    } /*else if (data[1].channel === config.name && data[1].text.startsWith("#")) {
                    text = data[1].text.slice(1);
                    switch (text.toLowerCase().replace(" ", "")) {
                        case "muhahahahaha":
                        case "muhahahaha":
                        case "muhahaha":
                        case "muhaha":
                            return runText(text, [255, 0, 0, 255]);
                        case "lol":
                        case "lool":
                        case "loool":
                            return runText(text, [255, 255, 0, 255]);
                        case "gg":
                        case "ggnore":
                            return runText(text, [0, 255, 0, 255]);
                        case "gl":
                        case "glhf":
                            return runText(text, [80, 80, 180, 255]);
                        case "rip":
                        case "oof":
                            return runText(text, [255, 165, 0, 255]);
                        case "petri":
                            return runText("ISTROLID IS PETRI DISH", [40, 40, 255, 255]);
                        case "gtg":
                        case "bye":
                        case "cya":
                        case "cyu":
                            return runText(text, [85, 26, 139, 255]);
                        default:
                            return runText(text);
                    }
                }*/
                    break;
                case "serversStats":
                    console.log("Server stats received");
                    //return _this.serversStats = msg[1];
                    break;
                case "servers":
                    /*_this.servers = {};
                    ref = msg[1];
                    for (_ in ref) {
                        s = ref[_];
                        _this.servers[s.name] = s;
                    }
                    if (typeof battleMode !== "undefined" && battleMode !== null ? battleMode.serverName : void 0) {
                        battleMode = (ref1 = rootNet.servers) != null ? ref1[battleMode.serverName] : void 0;
                    }
                    return onecup.refresh();*/
                    console.log("Servers received");
                    break;
                case "serversDiff":
                    /*ref2 = msg[1];
                    for (name in ref2) {
                        server = ref2[name];
                        if (server === null) {
                            delete _this.servers[name];
                        } else {
                            if (_this.servers[name] == null) {
                                _this.servers[name] = {};
                            }
                            for (k in server) {
                                v = server[k];
                                _this.servers[name][k] = v;
                            }
                        }
                    }
                    return onecup.refresh();*/
                    console.log("Servers diff received");
                    break;
                case "players":
                    if (Sim.Instance.chat === undefined) {
                        Sim.Instance.chat = {players: {}};
                    }
                    Sim.Instance.chat.players = data[1];
                    //return onecup.refresh();
                    console.log("Players received!");
                    break;
                case "playersDiff":
                    for (let name in data[1]) {
                        let player = data[1][name];
                        if (Sim.Instance.chat === undefined) {
                            console.log("Player diff without sim.chat");
                            Sim.Instance.chat = {players: {}};
                        }

                        if (player === null) {
                            delete Sim.Instance.chat.players[name];
                        } else {
                            if (Sim.Instance.chat.players[name] == null) {
                                // @ts-ignore
                                Sim.Instance.chat.players[name] = {};
                            }
                            for (let k in player) {
                                // @ts-ignore
                                Sim.Instance.chat.players[name][k] = player[k];
                            }
                        }
                    }
                    // return onecup.refresh();
                    console.log("Player diff received");
                    break;
                case "messageLog":
                    //msg[1].time = 0;
                    //return chat.lines.push(msg[1]);
                    console.log("Message log received");
                    break;
                case "authError":
                    //return account.authError(msg[1]);
                    console.log("Auth error received");
                    break;
                case "authPasswordChanged":
                    //return ui.changePassword = false;
                    console.log("Password changed received");
                    break;
                case "login":
                    //return account.signinReply(msg[1]);
                    console.log("Login received");
                    break;
                case "windowClose":
                    //return window.close();
                    console.log("Window close received");
                    break;
                case "modInfo":
                    console.log("modInfo received", data);
                    //return mod.info = msg[1];
                    break;
                case "modLog":
                    console.log("modLog received", data);
                    //return mod.log = msg[1];
                    break;
                case "gameKey":
                    console.log("Game key received", data[1]);
                    break;
                //return _this.gameKey = msg[1];
                default:
                    console.log("Unknown message", data);
                    break;
            }
        });

        IstrolidServer.Instance.root.on("close", function () {
            console.log("Cannot connect to root, retrying!");
            setTimeout(IstrolidServer.Instance.connectToRoot, 5000);
        });

        IstrolidServer.Instance.root.on("error", function (e: string) {
            console.log("connection to root failed", e);
        });
    };

    static rootsendData (data: any) {
        if (IstrolidServer.Instance.root.readyState === WebSocket.OPEN) {
            IstrolidServer.Instance.root.send(JSON.stringify(data));
        }
    }

    static sendInfo () {
        let observer_count: number = Sim.Instance.players.filter(function (player: Player) {
            return player.connected && !player.ai;
        }).length;

        if (!Sim.Instance.load_protection && observer_count > 10) {
            observer_count = 10;
        }

        let connected_players: { side: string; name: string; ai: boolean }[] = Sim.Instance.players.filter(
            function (player: Player) {
                return player.connected;
            }).map(function (player: Player) {
            return {
                name: player.name,
                side: player.side,
                ai: player.ai
            }
        });

        if (!Sim.Instance.load_protection) {
            connected_players = connected_players.splice(0, 10);
        }
        // Send server info
        let info = {
            name: IstrolidServer.config.name,
            address: "wss://" + IstrolidServer.config.addr + ":" + IstrolidServer.config.port,
            observers: observer_count,
            players: connected_players,
            type: Sim.Instance.serverType,
            version: Sim.Instance.VERSION,
            state: Sim.Instance.state
        };
        IstrolidServer.rootsendData(["setServer", info]);
    }
}

let server = new IstrolidServer();


/*
// Remote repl
let repl = require("repl");
let net = require("net");
net.createServer(function (socket) {
    repl.start({
        input: socket,
        output: socket,
        terminal: true
    }).on("exit", () => socket.end());
}).listen(5003, "localhost");


const profiler = require("v8-profiler-node8");
const fss = require("fs");
const id = Date.now() + ".profile";
// start profiling
profiler.startProfiling(id);
// stop profiling in n seconds and exit

const process = require("process");

function on_exit(a, b) {
    const profile = JSON.stringify(profiler.stopProfiling(id));
    fss.writeFile(`${__dirname}/${id}`, profile, () => {
        console.log("profiling done, written to:", id);
        process.exit() // if you want
    });
}

process.on("SIGINT", on_exit.bind(null, null));
*/