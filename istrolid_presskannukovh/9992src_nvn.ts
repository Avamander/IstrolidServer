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

modes.nvn = (function (superClass) {
    extend(nvn, superClass);

    function nvn() {
        return nvn.__super__.constructor.apply(this, arguments);
    }

    nvn.prototype.switchSide(player, side)
    {
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

    nvn.prototype.canStart(sayStuff)
    {
        if (sayStuff == null) {
            sayStuff = false;
        }

        if (this.numInTeam("alpha") + this.numInTeam("beta") >= 1) {
            return true;
        }

        this.say("Not enough players");
        return false;
    }
    ;

    return nvn;
})(window.Sim);