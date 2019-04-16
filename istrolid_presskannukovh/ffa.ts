import {HSpace} from "./hspace";

export class FFA {
    hasProp = {}.hasOwnProperty;
    ffa = true;
    numComPoints = 13;
    return
    FFA;

    constructor() {
        this.victoryConditions = this.victoryConditions.prototype.bind(this);
    }

    init() {
        let i, len, p, ref, results;
        ref = this.players;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
            p = ref[i];
            if (p.side === "beta") {
                results.push(p.side = "alpha");
            }
        }
        return results;
    }
    ;

    surrender(player) {
    };

    spacesRebuild() {
        let _, bspace, i, len, maxr, p, ref, ref1, results, t, uspace;
        uspace = new HSpace(500);
        bspace = new HSpace(100);
        maxr = 0;
        ref = this.things;
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
        this.unitSpaces = {
            alpha: uspace,
            beta: uspace
        };
        this.bulletSpaces = {
            alpha: bspace,
            beta: uspace
        };
        this.maxRadius = {
            alpha: maxr,
            beta: maxr
        };
        ref1 = this.players;
        results = [];
        for (i = 0, len = ref1.length; i < len; i++) {
            p = ref1[i];
            if (p.side === "spectators") {
                continue;
            }
            this.unitSpaces[p.side] = uspace;
            this.bulletSpaces[p.side] = bspace;
            results.push(this.maxRadius[p.side] = maxr);
        }
        return results;
    }
    ;

    switchSide(player, side) {
        if (!player) {
            return;
        }
        if (player.kickTime > now() - 15000) {
            return;
        }
        if (this.local && !sim.galaxyStar && !sim.challenge) {
            player.side = side;
            return;
        }
        if (side === "beta") {
            side = "alpha";
        }
        if (this.state !== "waiting") {
            return;
        }
        player.side = side;
        if (side === "spectators") {
            player.streek = 0;
        }
        return player.lastActiveTime = Date.now();
    }
    ;

    startGame(player, real) {
        if (real == null) {
            real = false;
        }
        if (FFA.__super__.startGame.call(this, player, real)) {
            this.say("For better gameplay either install the FFA UI script");
            this.say("or use https://presskannuk.ovh (if you're in the EU)");
            this.say("https://gist.github.com/Rio6/df4b990ddd0d25f9ad3b48e0fc8d0f35");
            return;
        }
    }
    ;

    start() {
        let i, len, p, ref;
        ref = this.players;
        for (i = 0, len = ref.length; i < len; i++) {
            p = ref[i];
            if (p.side === "alpha") {
                p.side = p.name;
            }
        }
        return FFA.__super__.start.call(this);
    }
    ;

    canStart(sayStuff) {
        if (sayStuff == null) {
            sayStuff = false;
        }

        if (this.numInTeam("alpha") > 1) {
            return true;
        }

        this.say("Not enough players");
        return false;
    }
    ;

    victoryConditions() {
        let _, i, len, p, players, ref, spawns, t;
        if (this.state !== "running") {
            return;
        }
        players = [];
        ref = this.players;
        for (i = 0, len = ref.length; i < len; i++) {
            p = ref[i];
            if (p.side === "spectators") {
                continue;
            }
            spawns = (function () {
                let ref1, results;
                ref1 = this.things;
                results = [];
                for (_ in ref1) {
                    t = ref1[_];
                    if (t.spawn === p.side) {
                        results.push(t);
                    }
                }
                return results;
            }).call(this);
            if (spawns.length !== p.lastSpawnCount) {
                if (spawns.length === 0) {
                    this.say(p.name + " lost their spawn");
                }
                p.lastSpawnCount = spawns.length;
            }
            if (spawns.length > 0) {
                players.push(p);
            }
        }
        if (players.length === 1) {
            this.winningSide = players[0].side;
        } else if (players.length === 0) {
            if (!this.local && !this.aiTestMode) {
                this.say("Every one left. Ending game.");
                this.winningSide = false;
                this.endOfGame();
                return;
            }
        }
        if (this.winningSide) {
            this.endOfGame();
        } else if (this.step > 16 * 60 * 30) {
            this.winningSide = false;
            this.endOfGame();
        }
    }
    ;

    endOfGame() {
        let i, len, p, ref, results;
        FFA.__super__.endOfGame.call(this);
        ref = this.players;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
            p = ref[i];
            if (p.side === "spectators") {
                continue;
            }
            results.push(p.side = "alpha");
        }
        return results;
    }
    ;

}