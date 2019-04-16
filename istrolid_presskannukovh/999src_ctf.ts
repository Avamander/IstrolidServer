import {IstrolidServer} from "../server";
import {Sim} from "./6src_sim";
import {Utils} from "./993src_utils";
import {Player} from "./94src_things";

export class CTF {

    numFlags = 8;
    numComPoints = 2;
    mapScale = 1;
    flagImage = "parts/decals/Symbol12.png";

    constructor() {
        this.victoryConditions.prototype.bind(this);
    }

    canStart(say_stuff: boolean) {
        let alpha, beta;
        if (say_stuff == null) {
            say_stuff = false;
        }
        alpha = this.numInTeam("alpha");
        beta = this.numInTeam("beta");
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
        let capped, cappedArr, i, id, k, len, player, ref, ref1, stillThere, thing;
        if (this.state !== "running") {
            return;
        }
        capped = {};
        ref = Sim.Instance.things;
        for (id in ref) {
            thing = ref[id];
            if (thing.flag) {
                capped[thing.side] = (capped[thing.side] || 0) + 1;
            }
        }
        cappedArr = (function () {
            var results;
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
                return;
            }
        }
        if (this.step > 16 * 60 * 30) {
            this.winningSide = false;
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
        if (this.local && !Sim.Instance.galaxyStar && !Sim.Instance.challenge) {
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


