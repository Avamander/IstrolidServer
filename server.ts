import {Player} from "./istrolid_presskannukovh/94src_things";
import {Sim} from "./istrolid_presskannukovh/6src_sim";
import {Utils} from "./istrolid_presskannukovh/993src_utils";
import Timeout = NodeJS.Timeout;
//import {CommandsManager} from "./istrolid_presskannukovh/995src_commands";

let ws = require("ws");
//require("./fix"); // Enable DLC when server and replace window with global
//let istrolid = require("./istrolid.js");

const allowedCmds = [
    "playerJoin",
    "alpha",
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


export class Server {
    wss = new ws.Server({
        port: 5053,
        perMessageDeflateOptions: {
            chunkSize: 256,
            memLevel: 9,
            level: 5
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

    players: Player[];
    lastInfoTime = 0;
    interval: Timeout;
    static _instance: Server = null;

    public static get Instance(){
        return this._instance;
    }

    constructor () {
        this.connectToRoot();

        this.wss.on("connection", function (ws: { on: { (arg0: string, arg1: (msg: any) => void): void; (arg0: string, arg1: (e: any) => void): void; }; }, req: { headers: { [x: string]: any; }; }) {
            console.log("connection from", req.headers["x-forwarded-for"]);

            let id = req.headers["sec-websocket-key"];

            ws.on("message", function (msg) {
                let packet = new DataView(new Uint8Array(msg).buffer);
                // @ts-ignore
                let data: string[] = Sim.Instance.zJson.loadDv(packet);
                //console.log(data);
                if (data[0] === "playerJoin") {
                    // @ts-ignore
                    let player = Sim.Instance.playerJoin(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
                    player.ws = ws;
                    Sim.Instance.players[id] = player;
                    Sim.Instance.clearNetState();
                } else if (allowedCmds.includes(data[0])) {
                    // @ts-ignore Look up function in simulation and execute it with arguments given
                    if (typeof Sim.Instance[data[0]] === "function") {
                        // @ts-ignore
                        Sim.Instance[data[0]].apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                    // @ts-ignore
                    } else if (typeof Sim[data[0]] === "function") {
                        // @ts-ignore
                        Sim[data[0]].apply(Sim.Instance, [Sim.Instance.players[id], ...data.slice(1)]);
                    }
                }
            });

            ws.on("close", function (e) {
                if (Sim.Instance.players[id]) {
                    Sim.Instance.players[id].connected = false;
                    delete Sim.Instance.players[id];
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

                Server.Instance.wss.clients.forEach((client: { readyState: any; send: (arg0: DataView) => void; }) => {
                    if (client.readyState === ws.OPEN) {
                        client.send(packet);
                    }
                });
            }

            if (rightNow - Server.Instance.lastInfoTime > 15000) {
                Server.Instance.sendInfo();
                Server.Instance.lastInfoTime = rightNow;
            }
        }, 17);

        Server._instance = this;
    }

    send (player: Player, data: any) {
        let packet = Sim.Instance.zJson.dumpDv(data);
        let client = player.ws;
        if (client && client.readyState === ws.OPEN) {
            client.send(packet);
        }
    };

    sendToRoot (data: any) {
        this.rootsendData(data);
    };

    stop () {
        console.log("stopping server");
        this.wss.close();
        clearInterval(this.interval);
    };

    say (msg: any) {
        this.rootsendData(["message", {
            text: msg,
            channel: Server.config.name,
            color: "FFFFFF",
            name: "Avama",
            server: true
        }]);
    };

    root: any;
    private static readonly config = require("./config.json");

    connectToRoot () {
        this.root = new ws(Server.config.root_addr);

        this.root.on("open", function () {
            console.log("Connected to root!");
            Server.Instance.sendInfo();
            let account_info = {
                email: Server.config.user_email,
                fingerprint: Server.config.user_fingerprint,
                steamid: Server.config.user_steam_id,
                token: Server.config.user_token,
            };
            Server.Instance.rootsendData(["authSignIn", account_info]);
            Server.Instance.rootsendData(["registerBot"]);
            Server.Instance.lastInfoTime = Utils.now();
        });

        this.root.on("message", function (msg: string) {
            let data = JSON.parse(msg);
            switch (data[0]) {
                case "message":
                    if (data[1].channel === Server.config.name && data[1].text.startsWith("!")) {
                        let p = Sim.Instance.players.filter(function (p) {
                            return p.name === data[1].name;
                        })[0];

                        if (p != null) {
                            let cmds = data[1].text.slice(1).split(" ");
                            console.log("Command issued, ", cmds);
                            //return CommandsManager.Instance.processCommand(p, cmds); // TODO:
                            return;
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

        this.root.on("close", function () {
            console.log("cannot connect to root, retrying");
            setTimeout(this.connectToRoot, 5000);
        });

        this.root.on("error", function (e: string) {
            console.log("connection to root failed", e);
        });
    };

    rootsendData (data: any) {
        if (this.root.readyState === ws.OPEN) {
            this.root.send(JSON.stringify(data));
        }
    };

    sendInfo () {
        // Send server info
        let info = {
            name: Server.config.name,
            address: "wss://" + Server.config.addr + ":" + Server.config.port,

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
        this.rootsendData(["setServer", info]);
    };
}

let server = new Server();
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