//require('../src/io.js');
// Generated by CoffeeScript 1.12.7
(function () {
    var bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        },
        extend = function (child, parent) {
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
        },
        hasProp = {}.hasOwnProperty;

    window.modes.IO = (function (superClass) {
        extend(IO, superClass);

        function IO() {
            this.victoryConditions = bind(this.victoryConditions, this);
            return IO.__super__.constructor.apply(this, arguments);
        }

        IO.prototype.defaultMoney = 80;

        IO.prototype.moneyInc = 100;

        IO.prototype.serverType = "IO";

        IO.prototype.victoryGoal = 2000;

        IO.prototype.deathPenalty = 0.2;

        IO.prototype.numComPoints = 16;

        IO.prototype.mapScale = 1.2;

        IO.prototype.start = function () {
            var _, i, len, p, ref, results, spawns, t;
            IO.__super__.start.call(this);
            ref = this.players;
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

        IO.prototype.victoryConditions = function () {
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

        return IO;

    })(modes.FFA);

}).call(this);