export class Survival {
    hasProp = {}.hasOwnProperty;
    waveFreq = 30;
    numComPoints = 12;

    constructor() {
        this.victoryConditions = this.victoryConditions.prototype.bind(this);
    }

    start() {
        let p, results;
        super.start.call(this);
        this.waveNum = 0;
        results = [];
        for (let key in this.players) {
            p = this.players[key];
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
        let key, object, p, results;
        Survival.__super__.endOfGame.call(this);
        this.say("The survivors survived " + this.waveNum + " waves!");
        for (let id in this.things) {
            object = this.things[id];
            if (object.unit) {
                object.selfDestruct();
            }
        }

        results = [];
        for (let key in this.players) {
            p = this.players[key];
            if (p && p.connected) {
                if (p.moneyRatio === 0) {
                    results.push(p.moneyRatio = 1);
                } else {
                    results.push(void 0);
                }
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    canStart() {
        return this.numInTeam("alpha") + this.numInTeam("beta") > 0;
    };

    simulate() {
        let betaCount, i, len, p, ref, results;
        Survival.__super__.simulate.call(this);
        if (this.state === 'running') {
            if ((this.step / 16) % this.waveFreq === 0 && this.step !== 0) {
                this.waveNum += 1;
                this.say("Spawning wave " + this.waveNum + "!");
                betaCount = this.players.filter(function (p) {
                    return p.side === 'beta';
                }).length;
                ref = this.players;
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                    p = ref[i];
                    if (p.side === "beta") {
                        results.push(p.money = Math.round((2750 + Math.pow(1.1, this.waveNum) * 500) / betaCount));
                    } else {
                        results.push(void 0);
                    }
                }
                return results;
            }
        }
    };

    victoryConditions() {
        let capped, cappedArr, i, id, k, len, player, ref, ref1, stillThere, thing;
        if (this.state !== "running") {
            return;
        }
        capped = {};
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
        if (cappedArr.length === 1 && cappedArr[0] === "beta") {
            this.winningSide = cappedArr[0];
        }
        if (this.winningSide) {
            this.endOfGame();
            return;
        }
        if (!this.local && !this.aiTestMode) {
            stillThere = false;
            ref1 = this.players;
            for (i = 0, len = ref1.length; i < len; i++) {
                player = ref1[i];
                if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                    stillThere = true;
                }
            }
            if (!stillThere) {
                this.say("Every one left. Ending game.");
                this.winningSide = false;
                this.endOfGame();
            }
        }
    };

    switchSide(player, side) {
        if (!player) {
            return;
        }
        if (player.kickTime > now() - 15000) {
            return;
        }
        if (this.local && !Sim.galaxyStar && !Sim.challenge) {
            player.side = side;
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
};