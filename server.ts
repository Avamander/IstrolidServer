import {Player} from "./istrolid_presskannukovh/things";
import {Sim} from "./istrolid_presskannukovh/sim";
import {Utils} from "./istrolid_presskannukovh/utils";
import {CommandsManager} from "./istrolid_presskannukovh/commands";
import {Thing} from "./istrolid_presskannukovh/things";

let bogus_thing = new Thing();

const WebSocket = require("ws");
//import {CommandsManager} from "./istrolid_presskannukovh/995src_commands";
//require("./fix"); // Enable DLC when server and replace window with global

export class IstrolidServer {
    private static readonly config = require("./config.json");
    static readonly allowedCmds = [
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

    static _instance: IstrolidServer;

    public static get Instance(){
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

            let webSocketKey: string = (req.headers["sec-websocket-key"] as string);
            let id: number = Sim.Instance.WSKeyToPlayerID[webSocketKey];

            console.log("Player with key:", req.headers["sec-websocket-key"]);

            ws.on("message", function (msg: Iterable<number>) {
                let packet = new DataView(new Uint8Array(msg).buffer);
                // @ts-ignore
                let data: string[] = Sim.Instance.zJson.loadDv(packet);
                //console.log(data);

                if (id !== undefined) {
                    if (Sim.Instance.players[id] !== undefined) {
                        if (Sim.Instance.players[id].webSocketKey !== webSocketKey &&
                            Sim.Instance.players[id].webSocketKey !== "") {
                            console.log("Player violated key check ", Sim.Instance.players[id].name);
                            ws.send("Stop it you dumb cunt");
                            ws.close();
                        } else if (Sim.Instance.players[id].webSocketKey === "") {
                            Sim.Instance.players[id].webSocketKey = webSocketKey;
                        }
                    }
                } else if (id === undefined && data[0] !== "playerJoin") {
                    console.log("Not a player joining and he doesn't have ID");
                }

                switch (data[0]) {
                    case "playerJoin": {
                        console.log("Player joined", data[0], data[1], data[2], data[3]);
                        for (let player_id in Sim.Instance.players) {
                            let player = Sim.Instance.players[player_id];
                            if (!player.ai) {
                                if (player.name === data[1]) {
                                    if (player.webSocketKey !== webSocketKey) {
                                        console.log(
                                            "Player ",
                                            player.name,
                                            " if attemted to be impersonated by commander.id ",
                                            data[0],
                                            " and IP address ",
                                            source_ip);
                                        ws.close();
                                    }
                                }
                            }
                        }
                        // @ts-ignore
                        let player = Sim.Instance.playerJoin(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
                        player.ws = ws;
                        if (!id) {
                            Sim.Instance.WSKeyToPlayerID[webSocketKey] = player.number;
                            id = player.number;
                        }
                        player.afk = false;
                        Sim.Instance.clearNetState();
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
                }
            });

            ws.on("close", function (e: any) {
                console.log("WebSocket closed", e);
                for (let player_id in Sim.Instance.players) {
                    if (Sim.Instance.players[player_id] &&
                        Sim.Instance.players[player_id].webSocketKey === webSocketKey) {
                        Sim.Instance.players[player_id].connected = false;
                        delete Sim.Instance.players[player_id];
                    }
                }
            });
        });

        this.interval = setInterval(function () {
            let rightNow = Utils.now();
            if (Sim.Instance.lastSimInterval + 1000 / 16 + Sim.Instance.cheatSimInterval <= rightNow) {
                Sim.Instance.lastSimInterval = rightNow;

                if (!Sim.Instance.paused) {
                    Sim.Instance.simulate();
                } else {
                    Sim.Instance.startingSim();
                }

                let packet = Sim.Instance.send();

                IstrolidServer.Instance.wss.clients.forEach((client: { readyState: any; send: (arg0: DataView) => void; }) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(packet);
                    }
                });
            }

            if (rightNow - IstrolidServer.Instance.lastInfoTime > 15000) {
                IstrolidServer.sendInfo();
                IstrolidServer.Instance.lastInfoTime = rightNow;
            }
        }, 17);


        this.root = new WebSocket(IstrolidServer.config.root_addr);

        IstrolidServer._instance = this;

        this.connectToRoot();
    }

    static send (player: Player, data: any) {
        let packet = Sim.Instance.zJson.dumpDv(data);
        let client = player.ws;
        if (client && client.readyState === WebSocket.OPEN) {
            client.send(packet);
        }
    }

    static readonly charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    static atob_number (input: string): number {
        let result: number = 0;

        for (var i = 0; i < input.length; i++) {
            result *= 64;
            result += IstrolidServer.charset.indexOf(input[i]);
        }

        return result;
    }

    sendToRoot (data: any) {
        IstrolidServer.rootsendData(data);
    }

    static stop () {
        console.log("stopping server");
        IstrolidServer.Instance.wss.close();
        clearInterval(IstrolidServer.Instance.interval);
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

                        if (p != null) {
                            let cmds = data[1].text.slice(1).split(" ");
                            console.log("Command issued, ", cmds);
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
        // Send server info
        let info = {
            name: IstrolidServer.config.name,
            address: "wss://" + IstrolidServer.config.addr + ":" + IstrolidServer.config.port,

            observers: Sim.Instance.players.filter(function (player: Player) {
                return player.connected && !player.ai;
            }).length,

            players: Sim.Instance.players.filter(function (player: Player) {
                return player.connected;
            }).map(function (player: Player) {
                return {
                    name: player.name,
                    side: player.side,
                    ai: false
                }
            }),

            type: Sim.Instance.serverType,
            version: Sim.Instance.VERSION,
            state: Sim.Instance.state
        };
        IstrolidServer.rootsendData(["setServer", info]);
    }
}

let server = new IstrolidServer();
Sim.Instance.cheatSimInterval = -12;
Sim.Instance.lastSimInterval = 0;

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