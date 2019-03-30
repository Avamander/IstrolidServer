var config = require("./config.json");
var WebSocket = require("ws");
require("./fix");
var Istrolid = require("./istrolid.js");

const allowedCmds = ["playerJoin", "alpha", "mouseMove", "playerSelected", "setRallyPoint", "buildRq", "stopOrder", "holdPositionOrder", "followOrder", "selfDestructOrder", "moveOrder", "configGame", "startGame", "addAi", "switchSide", "kickPlayer", "surrender"]

global.sim = new Sim();
Sim.prototype.cheatSimInterval = -12;
Sim.prototype.lastSimInterval = 0;

global.Server = function () {
    const wss = new WebSocket.Server({
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

    var root = null;

    var players = {};

    var lastInfoTime = 0;

    this.send = function (player, data) {
        let packet = sim.zJson.dumpDv(data);
        let client = player.ws;
        if (client && client.readyState === WebSocket.OPEN) {
            client.send(packet);
        }
    };

    this.sendToRoot = function (data) {
        root.sendData(data);
    };

    this.stop = function () {
        console.log("stopping server");
        wss.close();
        clearInterval(interval);
    };

    this.say = function (msg) {
        root.sendData(["message", {
            text: msg,
            channel: config.name,
            color: "FFFFFF",
            name: "Avama",
            server: true
        }]);
    };

    var connectToRoot = function () {
        root = new WebSocket(config.root_addr);

        root.on("open", () => {
            console.log("connected to root");
            sendInfo();
            root.sendData(["registerBot"]);
            lastInfoTime = now();
        });

        root.on("message", function (msg) {
            let data = JSON.parse(msg);
            if (data[0] === "message") {
                if (data[1].channel === config.name && data[1].text.startsWith("!")) {
                    p = sim.players.filter(function (p) {
                        return p.name === data[1].name;
                    })[0];
                    if (p != null) {
                        cmds = data[1].text.slice(1).split(" ");
                        return processCommand(p, cmds);
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
            }
        });

        root.on("close", function () {
            console.log("cannot connect to root, retrying");
            setTimeout(connectToRoot, 5000);
        });

        root.on("error", function (e) {
            console.log("connection to root failed", e);
        });

        root.sendData = function (data) {
            if (root.readyState === WebSocket.OPEN) {
                root.send(JSON.stringify(data));
            }
        }
    };

    var sendInfo = function () {
        // Send server info
        let info = {
            name: config.name,
            address: "wss://" + config.addr + ":" + config.port,
            observers: sim.players.filter(p => p.connected && !p.ai).length,
            players: sim.players.filter(p => p.connected).map(function (p) {
                return {
                    name: p.name,
                    side: p.side,
                    ai: false
                }
            }),
            type: sim.serverType,
            version: VERSION,
            state: sim.state
        };
        root.sendData(["setServer", info]);
    };

    connectToRoot();

    wss.on("connection", function (ws, req) {
        console.log("connection from", req.headers["x-forwarded-for"]);

        let id = req.headers["sec-websocket-key"];

        ws.on("message", function (msg) {
            let packet = new DataView(new Uint8Array(msg).buffer);
            let data = sim.zJson.loadDv(packet);
            //console.log(data);
            if (data[0] === "playerJoin") {
                let player = sim.playerJoin(...data);
                player.ws = ws;
                players[id] = player;
                sim.clearNetState();
            } else if (allowedCmds.includes(data[0])) {
                sim[data[0]].apply(sim, [players[id], ...data.slice(1)]);
            }
        });

        ws.on("close", function (e) {
            if (players[id]) {
                players[id].connected = false;
                delete players[id];
            }
        });
    });

    var interval = setInterval(function () {
        let rightNow = now();
        if (sim.lastSimInterval + 1000 / 16 + sim.cheatSimInterval <= rightNow) {
            sim.lastSimInterval = rightNow;

            if (!sim.paused) {
                sim.simulate();
            } else {
                sim.startingSim();
            }

            let packet = sim.send();
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(packet);
                }
            });
        }
        if (rightNow - lastInfoTime > 15000) {
            sendInfo();
            lastInfoTime = rightNow;
        }
    }, 17);
}
;

global.server = new Server();

// Remote repl
var repl = require("repl");
var net = require("net");
net.createServer(function (socket) {
    repl.start({
        input: socket,
        output: socket,
        terminal: true
    }).on("exit", () => socket.end());
}).listen(5003, "localhost");
