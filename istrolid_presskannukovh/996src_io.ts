import {Sim} from "./6src_sim";

export class IO {
    hasProp = {}.hasOwnProperty;
    defaultMoney = 80;
    moneyInc = 100;
    serverType = "IO";
    victoryGoal = 2000;
    deathPenalty = 0.2;
    numComPoints = 16;
    mapScale = 1.2;

    constructor() {
        this.victoryConditions = this.victoryConditions.prototype.bind(this);
        return IO.__super__.constructor.apply(this, arguments);
    }

    start() {
        let _, i, len, p, ref, results, spawns, t;
        super.start.call(this);
        ref = Sim.Instance.players;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
            p = ref[i];
            p.maxMoney = this.defaultMoney;
            spawns = (function () {
                var ref1, results1;
                ref1 = this.things;
                results1 = [];
                for (_ in ref1) {
                    t = ref1[_];
                    if (t.spawn === p.side) {
                        results1.push(t);
                    }
                }
                return results1;
            }).call(this);
            if (spawns.length > 0) {
                results.push(p.usingSpawn = spawns[Math.floor(Math.random() * spawns.length)]);
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    victoryConditions() {
        let i, j, len, len1, player, ref, ref1, stillThere;
        if (this.state !== "running") {
            return;
        }
        ref = this.players;
        for (i = 0, len = ref.length; i < len; i++) {
            player = ref[i];
            if (player.connected && !player.afk && player.side !== "spectators" && player.money >= this.victoryGoal) {
                this.winningSide = player.name;
                this.endOfGame();
            }
        }
        if (!this.local && !this.aiTestMode) {
            stillThere = false;
            ref1 = this.players;
            for (j = 0, len1 = ref1.length; j < len1; j++) {
                player = ref1[j];
                if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                    stillThere = true;
                }
            }
            if (!stillThere) {
                this.winningSide = false;
                this.endOfGame();
            }
        }
    };
}