var extend
(child, parent)
{
    for (let key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
        this.constructor = child;
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
}
,
hasProp = {}.hasOwnProperty;

modes.TicTacToe = (function (superClass) {
    extend(TicTacToe, superClass);

    function TicTacToe() {
        return TicTacToe.__super__.constructor.apply(this, arguments);
    }

    TicTacToe.prototype.makeRocks = false;

    TicTacToe.prototype.turn = "alpha";

    TicTacToe.prototype.defaultMoney = 1;

    TicTacToe.prototype.moneyRatio = 0;

    TicTacToe.prototype.start()
    {
        TicTacToe.__super__.start.call(this);
        return this.turn = Math.random() < .5 ? "alpha" : "beta";
    }
    ;

    TicTacToe.prototype.playersPerTeam(side)
    {
        return 1;
    }
    ;

    TicTacToe.prototype.playerSelected(player, selection)
    {
        let id, ref, results, t;
        if ((player != null ? player.side : void 0) !== this.turn) {
            return;
        }
        player.selection = [];
        if (this.state !== "running") {
            return;
        }
        ref = this.things;
        results = [];
        for (id in ref) {
            t = ref[id];
            if (t.id === selection[0] && (t.ttt != null) && t.ttt !== "alpha" && t.ttt !== "beta") {
                t.ttt = player.side;
                this.turn = otherSide(this.turn);
                break;
            } else {
                results.push(void 0);
            }
        }
        return results;
    }
    ;

    TicTacToe.prototype.victoryConditions()
    {
        let _, c, grid, i, j, k, l, len, len1, len2, len3, m, n, o, p, player, q, r, ref, ref1, ref2, s, spaces,
            stillThere, t, u;
        if (this.state !== "running") {
            return;
        }
        grid = [[], [], []];
        ref = this.things;
        for (_ in ref) {
            t = ref[_];
            if (t.ttt != null) {
                grid[t.grid[0] + 1][t.grid[1] + 1] = t.ttt;
            }
        }
        ref1 = ["alpha", "beta"];
        for (k = 0, len = ref1.length; k < len; k++) {
            t = ref1[k];
            for (i = l = 0; l < 3; i = ++l) {
                for (j = m = 0; m < 3; j = ++m) {
                    if (grid[i][j] !== t) {
                        break;
                    }
                    if (j === 2) {
                        this.winningSide = t;
                    }
                }
                for (j = n = 0; n < 3; j = ++n) {
                    if (grid[j][i] !== t) {
                        break;
                    }
                    if (j === 2) {
                        this.winningSide = t;
                    }
                }
            }
            for (i = o = 0; o < 3; i = ++o) {
                if (grid[i][i] !== t) {
                    break;
                }
                if (i === 2) {
                    this.winningSide = t;
                }
            }
            for (i = p = 0; p < 3; i = ++p) {
                if (grid[i][2 - i] !== t) {
                    break;
                }
                if (i === 2) {
                    this.winningSide = t;
                }
            }
        }
        if (this.winningSide) {
            this.endOfGame();
            return;
        }
        spaces = 9;
        for (q = 0, len1 = grid.length; q < len1; q++) {
            r = grid[q];
            for (s = 0, len2 = r.length; s < len2; s++) {
                c = r[s];
                if (c === "alpha" || c === "beta") {
                    spaces -= 1;
                }
            }
        }
        if (spaces <= 0) {
            this.endOfGame();
        }
        if (!this.local && !this.aiTestMode) {
            stillThere = false;
            ref2 = this.players;
            for (u = 0, len3 = ref2.length; u < len3; u++) {
                player = ref2[u];
                if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                    stillThere = true;
                }
            }
            if (!stillThere) {
                Server.say("Every one left. Ending game.");
                this.winningSide = false;
                this.endOfGame();
            }
        } else if (this.step > 16 * 60 * 30) {
            this.winningSide = false;
            this.endOfGame();
            return;
        }
    }
    ;

    return TicTacToe;

})(window.Sim);


