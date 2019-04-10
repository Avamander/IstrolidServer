import {v2} from "./4src_maths";


export class AI {
    ais = {};

    easy = ["BetaSwarm", "DeltaSwarm", "NukeSwarm", "Cython", "Novice", "Yarki", "Kornine", "Orbiter", "Zyro", "PointDefender", "BladeRanger", "BatteryRam", "TurtleFence"];

    med = ["AlphaSwarm", "Micor", "TorpMan", "BeamMan", "NodeSwarm", "FlamethrowerArmadillo", "Orblin", "Belfry", "Ficon", "TorpSwarm", "Sidewinder", "FighterBomber", "Electro", "LazerBlade", "Rearguard", "Waxon", "LightShower", "Parity", "WaveMotion", "SparkShower", "FireFly", "AssaultandBattery", "RushDown", "BaitandMissile", "SiegeCore", "AlphaStriker"];

    hard = ["Anubis", "LongPoint", "BullDogs", "Furia", "Dreadnaught", "SuperBelfry", "Razorback", "BattleStar", "CreepingHoard", "DoomTrain", "ThePounder", "Liberty", "CubeCollective", "DarkStar", "Podlings", "Keystone", "MBT", "Nayenne", "PushForce", "MiniCharger", "MeteorShower", "nulitor", "FireShower"];

    unitProps = ["cost", "range", "energy%", "speed", "HP", "DPS"];

    unitTypes = ["brick", "scout", "swarmer", "fighter", "interceptor", "bomber", "destroyer", "cruiser", "carrier", "battleship"];

    attackTypes = ["Attack", "Flee", "Kite", "Ram", "Bomb", "Run-by", "Circle", "Backstab", "Wiggle", "Stay at range"];

    capTypes = ["Capture", "Spread to", "Guard", "Protect"];

    locationTypes = ["enemy spawn", "friendly spawn", "enemy home point", "friendly home point", "enemy army middle", "friendly army middle"];

    relativeTypes = ["---", "stronger", "weaker", "faster", "slower", "more range", "less range", "more HP", "less HP", "more expensive", "less expensive", "has PD", "no PD", "cloaked", "not cloaked", "more DPS", "less DPS", "more brawling value", "less brawling value", "armed", "unarmed"];

    absoluteTypes = ["faster", "slower", "more range", "less range", "more HP", "less HP", "more expensive", "less expensive", "more DPS", "less DPS", "more arc", "less arc"];

    bulletTypes = ["any", "PD immune"];

    chargeTypes = ["find recharger", "rest", "flee enemies", "find friendlies", "return to spawn"];

    needTypes = ["point defense need", "fighter counter need", "cloak counter need"];

    allAiRules = {
        "energy": [
            ["Field # at start", 2],
            ["Field # at priority #", 1, 2],
            ["Try to field # every # seconds", 2, 30],
            ["Field # for # of ship in slot # at priority #", 1, 1, 1, 5],
            ["Field # for # of @needTypes at priority #", 1, 1, "point defense need", 3],
            ["Field # when money over # at priority #", 1, 1000, 1]
        ],
        "engines": [
            ["@capTypes command points within #m", "Capture", 10000],
            ["Goto @locationTypes", "enemy spawn"],
            ["Stay in #m range of friendly units", 500],
            ["Stay in #m range of slot # units", 500, 1],
            ["Stayaway in #m range from slot # units", 400, 1],
            ["Finish player orders"]
        ],
        "weapons": [
            ["@attackTypes enemy within #m", "Attack", 1000],
            ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "slower", "weaker", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "slower", 100, 1000]],
        "armor": [
            ["Avoid everything"],
            ["Avoid #dps danger areas", 5],
            ["Avoid over #damage shots", 20],
            ["Avoid over #damage @bulletTypes shots", 20, "any"],
            ["When Shields down to #%, flee", 30],
            ["When #% of energy, @chargeTypes", 20, "find recharger"],
            ["When below #% cloak, rest", 60],
            ["Find units that are out of energy"]
        ],
        "decal": []
    };
    allRuleSet = {};
    _angleVec = v2.create();
    _leftVec = v2.create();
    _rightVec = v2.create();
    _backPos = v2.create();
    _goto = v2.create();
    _next = v2.create();
    _mid = v2.create();
    _rvec = v2.create();
    _lvec = v2.create();
    _upos = v2.create();
    _uvec = v2.create();
    _avec = v2.create();
    _apos = v2.create();
    _aAvgPos = v2.create();
    _avoidVec = v2.create();
    window

    esc_string(s) {
        return '"' + s.replace(/[\\"]/g, '\\$1') + '"';
    }
    ;

    csonify(obj, indent) {
        let json, key, prefix, value;
        if (indent == null) {
            indent = 0;
        }
        indent = indent ? indent + 1 : 1;
        prefix = Array(indent).join("    ");
        json = JSON.stringify(obj);
        if (json.length < 80) {
            return prefix + json;
        }
        if (typeof obj === 'string') {
            return prefix + esc_string(obj);
        }
        if (typeof obj !== 'object') {
            return prefix + obj;
        }
        if (Array.isArray(obj)) {
            return prefix + '[\n' + ((function () {
                let j, len, results;
                results = [];
                for (j = 0, len = obj.length; j < len; j++) {
                    value = obj[j];
                    results.push(csonify(value, indent));
                }
                return results;
            })()).join('\n') + '\n' + prefix + ']';
        }
        return ((function () {
            let results;
            results = [];
            for (key in obj) {
                value = obj[key];
                results.push(prefix + esc_string(key) + ':\n' + csonify(value, indent));
            }
            return results;
        })()).join('\n');
    }
    ;

    /*
    for(_

    in
    allAiRules
) {
    g = allAiRules[_];

    for(j = 0, len = g.length;

    j < len;

    j
++
) {
    r = g[j];
    ais
.
    allRuleSet
    [r[0]] = true;
}
}
*/
    goodRule(rule) {
        return ais.allRuleSet[rule[0]] === true;
    }

    ruleToStr(rule) {
        let count, i, l, len1, part, parts, string;
        string = "";
        count = 1;
        parts = rule[0].split(/(\#|\@\w+)/);
        for (i = l = 0, len1 = parts.length; l < len1; i = ++l) {
            part = parts[i];
            if (part === "#" || part[0] === "@") {
                string += rule[count];
                count += 1;
            } else {
                string += part;
            }
        }
        return string;
    }

    closest(pos, fn, maxDist) {
        let dist, minDist, minT, ref, t;
        if (maxDist == null) {
            maxDist = 10000000;
        }
        minDist = 0;
        minT = null;
        ref = sim.things;
        for (_ in ref) {
            t = ref[_];
            if (fn(t)) {
                dist = v2.distance(pos, t.pos);
                if (dist > maxDist) {
                    continue;
                }
                if (dist < minDist || minT === null) {
                    minDist = dist;
                    minT = t;
                }
            }
        }
        return minT;
    }

    goThere(unit, thing) {
        if (!thing) {
            return false;
        }
        goInRange(thing.radius * .75, thing.radius, unit, thing);
        return true;
    }

    stayInRange(range, unit, thing) {
        if (!thing) {
            return false;
        }
        g = v2.create();
        v2.sub(unit.pos, thing.pos, g);
        v2.norm(g);
        v2.scale(g, range);
        v2.add(g, thing.pos, g);
        return unit.aiOrder({
            type: "Move",
            dest: g
        });
    }

    goInRange(spread, range, unit, thing) {
        if (!thing) {
            return false;
        }
        if (unit.topOrderIs("Move") && v2.distance(unit.orders[0].dest, thing.pos) < spread) {
            return true;
        }
        if (v2.distance(unit.pos, thing.pos) < range) {
            return true;
        }
        r = v2.create();
        v2.random(r);
        v2.scale(r, spread * Math.random());
        v2.add(r, thing.pos);
        unit.aiOrder({
            type: "Move",
            dest: r
        });
        return true;
    }

    goAway(unit, thing, range) {
        let dest, dist;
        if (!thing || !thing.pos || !unit || !unit.pos) {
            return false;
        }
        dist = v2.distance(unit.pos, thing.pos);
        if (dist > range) {
            return false;
        }
        dest = v2.create();
        v2.sub(unit.pos, thing.pos, dest);
        v2.add(unit.pos, dest, dest);
        unit.aiOrder({
            type: "Move",
            dest: dest,
            range: 0
        });
        return true;
    }

    unitCompair(unit, enemy) {
        let enemyKillsIn, unitKillsIn;
        enemyKillsIn = unit.hp / enemy.weaponDPS;
        unitKillsIn = enemy.hp / unit.weaponDPS;
        if (unitKillsIn > enemyKillsIn) {
            return enemyKillsIn / unitKillsIn - 1;
        } else {
            return 1 - unitKillsIn / enemyKillsIn;
        }
    }

    willBeAt(unit, thing) {
        if (!thing || !unit || unit.dead) {
            return false;
        }
        if (unit.topOrderIs("Move")) {
            if (unit.orders[0].dest && v2.distance(unit.orders[0].dest, thing.pos) < thing.radius) {
                return true;
            }
        } else if (unit.topOrderIs("Follow")) {
            if (unit.orders[0].target && v2.distance(unit.orders[0].target.pos, thing.pos) < thing.radius) {
                return true;
            }
        } else {
            if (v2.distance(unit.pos, thing.pos) < thing.radius) {
                return true;
            }
        }
        return false;
    }
    ;

    spreadCapCP(unit, rule) {
        var closestUnguarded, cp, guarded, ref, ref1, tallyCps, u;
        if (unit.gardingCP && (unit.gardingCP.side === otherSide(unit.side) || unit.gardingCP.capping > 0)) {
            goThere(unit, unit.gardingCP);
            return true;
        }
        tallyCps = [];
        ref = sim.things;
        for (_ in ref) {
            cp = ref[_];
            if (cp.commandPoint && (cp.side === otherSide(unit.side) || cp.capping > 0)) {
                guarded = 0;
                ref1 = sim.things;
                for (_ in ref1) {
                    u = ref1[_];
                    if (u.unit && u.side === unit.side && u.id !== unit.id && u.number === unit.number) {
                        if (u.gardingCP === cp) {
                            guarded += 1;
                        }
                    }
                }
                tallyCps.push({
                    cp: cp,
                    dist: v2.distance(cp.pos, unit.pos),
                    guarded: guarded
                });
            }
        }
        if (tallyCps.length === 0) {
            return false;
        }
        tallyCps.sort(function (a, b) {
            if (a.guarded !== b.guarded) {
                return a.guarded - b.guarded;
            } else {
                return a.dist - b.dist;
            }
        });
        closestUnguarded = tallyCps[0];
        goThere(unit, Mapping.cp);
        unit.gardingCP = Mapping.cp;
        return true;
    }
    ;

    capAndGuardCP(unit) {
        let closestUnguarded, cp, guarded, ref, ref1, tallyCps, u;
        tallyCps = [];
        ref = sim.things;
        for (_ in ref) {
            cp = ref[_];
            if (cp.commandPoint) {
                guarded = false;
                ref1 = sim.things;
                for (_ in ref1) {
                    u = ref1[_];
                    if (u.unit && u.side === unit.side && u.id !== unit.id && u.number === unit.number) {
                        if (willBeAt(u, cp)) {
                            guarded = true;
                            break;
                        }
                    }
                }
                if (!guarded) {
                    tallyCps.push({
                        cp: cp,
                        dist: v2.distance(cp.pos, unit.pos)
                    });
                }
            }
        }
        if (tallyCps.length === 0) {
            return;
        }
        tallyCps.sort(function (a, b) {
            return a.dist - b.dist;
        });
        closestUnguarded = tallyCps[0];
        goThere(unit, Mapping.cp);
        return true;
    }
    ;

    attack(enemy, unit) {
        if (enemy && goInRange(0, unit.weaponRange, unit, enemy)) {
            unit.softTarget = enemy;
            return true;
        }
    }
    ;

    kite(enemy, unit) {
        let distacne, w;
        if (!enemy) {
            return false;
        }
        w = unit.weapons[0];
        if (w) {
            distacne = v2.distance(enemy.pos, unit.pos);
            if (w.arc !== 360 && w.reload === 0 && distacne < unit.weaponRange) {
                return true;
            }
        }
        if (stayInRange(unit.weaponRange, unit, enemy)) {
            return true;
        }
    }
    ;

    ram(enemy, unit) {
        if (enemy && goInRange(0, unit.radius + enemy.radius, unit, enemy)) {
            return true;
        }
    }
    ;

    run_by(enemy, unit) {
        return gotoNoStop(unit, enemy.pos);
    }
    ;

    stayClose(enemy, unit) {
        if (enemy && goInRange(0, enemy.radius, unit, enemy)) {
            return true;
        }
    }
    ;

    circle(enemy, unit) {
        let dist, k, range, th;
        v2.direction(unit.pos, enemy.pos, _angleVec);
        dist = v2.distance(unit.pos, enemy.pos);
        range = Math.max(enemy.weaponRange, 300);
        k = 3;
        th = v2.angle(_angleVec);
        v2.pointTo(_leftVec, th + Math.PI / 2);
        v2.scale(_leftVec, range * k);
        v2.pointTo(_rightVec, th - Math.PI / 2);
        v2.scale(_rightVec, range * k);
        v2.add(_leftVec, enemy.pos);
        v2.add(_rightVec, enemy.pos);
        v2.add(unit.pos, unit.vel, _angleVec);
        if (v2.distance(_angleVec, _leftVec) < v2.distance(_angleVec, _rightVec)) {
            unit.aiOrder({
                type: "Move",
                dest: _leftVec
            });
        } else {
            unit.aiOrder({
                type: "Move",
                dest: _rightVec
            });
        }
        return true;
    }
    ;

    backstab(enemy, unit, amount) {
        if (amount == null) {
            amount = 0.7;
        }
        v2.pointTo(_backPos, enemy.rot + Math.PI);
        v2.scale(_backPos, unit.weaponRange * amount);
        v2.add(_backPos, enemy.pos);
        return unit.aiOrder({
            type: "Move",
            dest: v2.create(_backPos)
        });
    }
    ;

    attackFilter(enemy, unit, type, range) {
        if (!enemy) {
            return false;
        }
        if (!enemy.unit) {
            return false;
        }
        if (enemy.side !== otherSide(unit.side)) {
            return false;
        }
        if (enemy.cloakFade > 0) {
            type = type.toLowerCase();
            if (type === "ram" || type === "circle" || type === "flee") {
                return true;
            }
            return false;
        }
        return true;
    }
    ;

    attackMoves(enemy, unit, type, range) {
        let wiggle;
        if (!enemy) {
            return false;
        }
        switch (type.toLowerCase()) {
            case "attack":
                return attack(enemy, unit);
            case "flee":
                return goAway(unit, enemy, enemy.weaponRange + enemy.radius + enemy.maxSpeed * 16);
            case "kite":
                return kite(enemy, unit);
            case "ram":
                return ram(enemy, unit);
            case "run-by":
                if (v2.distance(enemy.pos, unit.pos) > 500) {
                    return run_by(enemy, unit);
                } else {
                    return true;
                }
                break;
            case "bomb":
                if (unit.energy < unit.moveEnergy * 160) {
                    return false;
                }
                if (unit.weapons.length > 0 && unit.weapons[0].reload > unit.weapons[0].reloadTime * .5) {
                    unit.message += "[coast]";
                    return true;
                } else {
                    unit.message += "[run-by]";
                    run_by(enemy, unit);
                    return true;
                }
                break;
            case "circle":
                return circle(enemy, unit);
            case "backstab":
                return backstab(enemy, unit);
            case "wiggle":
                if (unit.wiggling > 0) {
                    unit.wiggling -= 1;
                    return true;
                } else if (Math.random() < .2) {
                    unit.wiggling = 2;
                    wiggle = v2.create();
                    v2.random(wiggle);
                    v2.scale(wiggle, 1000);
                    v2.add(wiggle, unit.pos);
                    unit.aiOrder({
                        type: "Move",
                        dest: wiggle
                    });
                    return true;
                }
                break;
            case "stay at range":
                return goAway(unit, enemy, enemy.weaponRange + enemy.radius + unit.radius);
        }
    }
    ;

    gotoNoStop(unit, goto) {
        let go;
        v2.sub(goto, unit.pos, _next);
        v2.scale(_next, 10000 / v2.mag(_next));
        go = v2.create();
        v2.add(unit.pos, _next, go);
        return unit.aiOrder({
            type: "Move",
            dest: go,
            noStop: true
        });
    }
    ;

    gotoNoStopSmooth(unit, goto) {
        let dest, i, l;
        v2.sub(_goto, unit.pos, _next);
        v2.scale(_next, 10000 / v2.mag(_next));
        v2.add(unit.pos, _next, _goto);
        if (unit.topOrderIs("Move")) {
            dest = v2.create();
            for (i = l = 0; l < 1; i = ++l) {
                dest[i] = unit.orders[0].dest[i] * .7 + _goto[i] * .3;
            }
            return unit.aiOrder({
                type: "Move",
                dest: dest,
                noStop: true
            });
        } else {
            return unit.aiOrder({
                type: "Move",
                dest: v2.create(_goto),
                noStop: true
            });
        }
    }
    ;

    capAI(unit, rule) {
        let cp;
        switch (rule[1].toLowerCase()) {
            case "capture":
                cp = closest(unit.pos, (function (t) {
                    return t.commandPoint && (t.side === otherSide(unit.side) || t.capping > 0);
                }), rule[2]);
                if (cp && goThere(unit, cp)) {
                    return true;
                }
                break;
            case "spread to":
                if (spreadCapCP(unit, rule, rule[2])) {
                    return true;
                }
                break;
            case "guard":
                if (capAndGuardCP(unit, rule, rule[2])) {
                    return true;
                }
                break;
            case "protect":
                cp = closest(unit.pos, (function (t) {
                    return t.commandPoint && t.side === unit.side && t.capping > 0;
                }), rule[2]);
                if (cp && goThere(unit, cp)) {
                    return true;
                }
                break;
            default:
                return console.log("invalid capAI option", rule);
        }
    }
    ;

    chargeAI(unit, rule) {
        let enemy, filter, friendly, recharger;
        if (unit.energy / unit.storeEnergy < rule[1] / 100 || unit.needsFullCharge) {
            if (unit.needsFullCharge) {
                unit.message += "[needs full charge]";
            }
            switch (rule[2].toLowerCase()) {
                case "find recharger":
                    filter(t)
                {
                    return t.unit && t.id !== unit.id && t.side === unit.side && t.energyCaster;
                }
                    ;
                    recharger = closest(unit.pos, filter);
                    if (recharger) {
                        goInRange(500, 600, unit, recharger);
                        if (v2.distance(unit.pos, recharger.pos) < 600) {
                            unit.needsFullCharge = true;
                            if (unit.energy > unit.storeEnergy * .98) {
                                unit.needsFullCharge = false;
                            }
                        }
                        return true;
                    }
                    return false;
                case "rest":
                    return true;
                case "flee enemies":
                    enemy = closest(unit.pos, (function (t) {
                        return t.unit && t.side === otherSide(unit.side);
                    }), 3000);
                    if (attackMoves(enemy, unit, "flee", 3000)) {
                        return true;
                    }
                    break;
                case "return to spawn":
                    return gotoLocation(unit, ["-", "friendly spawn"]);
                case "find friendlies":
                case "find friendies":
                    friendly = closest(unit.pos, (function (t) {
                        return t.unit && t.id !== unit.id && t.side === unit.side;
                    }));
                    if (friendly && v2.distance(unit.pos, friendly.pos) > 500) {
                        stayClose(friendly, unit);
                        return true;
                    }
                    break;
                default:
                    return console.log("invalid chargeAI option", rule);
            }
        }
    }
    ;

    thingsMiddle(fn) {
        let number, ref, thing;
        v2.zero(_mid);
        number = 0;
        ref = sim.things;
        for (_ in ref) {
            thing = ref[_];
            if (fn(thing)) {
                v2.add(_mid, thing.pos);
                number += 1;
            }
        }
        if (number === 0) {
            return false;
        }
        v2.scale(_mid, 1 / number);
        return _mid;
    }
    ;

    gotoLocation(unit, rule) {
        let cp, pos, spawn;
        pos = null;
        switch (rule[1].toLowerCase()) {
            case "enemy spawn":
                spawn = closest(unit.pos, (function (t) {
                    return t.spawn && t.side === otherSide(unit.side);
                }));
                if (spawn) {
                    pos = spawn.pos;
                }
                break;
            case "friendly spawn":
                spawn = closest(unit.pos, (function (t) {
                    return t.spawn && t.side === unit.side;
                }));
                if (spawn) {
                    pos = spawn.pos;
                }
                break;
            case "enemy home point":
                spawn = closest(unit.pos, (function (t) {
                    return t.spawn && t.side === otherSide(unit.side);
                }));
                if (spawn) {
                    cp = closest(spawn.pos, (function (t) {
                        return t.commandPoint;
                    }));
                }
                if (cp) {
                    pos = cp.pos;
                }
                break;
            case "friendly home point":
                spawn = closest(unit.pos, (function (t) {
                    return t.spawn && t.side === unit.side;
                }));
                if (spawn) {
                    cp = closest(spawn.pos, (function (t) {
                        return t.commandPoint;
                    }));
                }
                if (cp) {
                    pos = cp.pos;
                }
                break;
            case "enemy army middle":
                pos = thingsMiddle(function (t) {
                    return t.unit && t.side === otherSide(unit.side);
                });
                break;
            case "friendly army middle":
                pos = thingsMiddle(function (t) {
                    return t.unit && t.side === unit.side;
                });
        }
        if (pos) {
            if (v2.distance(unit.pos, pos) > 300) {
                unit.aiOrder({
                    type: "Move",
                    dest: pos
                });
                return true;
            }
        }
    }
    ;

    ifRelative(clause, unit, other) {
        let l, len1, len2, m, ref, ref1, w;
        switch (clause.toLowerCase()) {
            case "---":
                return true;
            case "stronger":
                return unitCompair(unit, other) <= 0;
            case "weaker":
                return unitCompair(unit, other) >= 0;
            case "faster":
                return other.maxSpeed >= unit.maxSpeed;
            case "slower":
                return other.maxSpeed <= unit.maxSpeed;
            case "more range":
                return other.weaponRange >= unit.weaponRange;
            case "less range":
                return other.weaponRange <= unit.weaponRange;
            case "more hp":
                return other.hp >= unit.hp;
            case "less hp":
                return other.hp <= unit.hp;
            case "more expensive":
                return other.cost >= unit.cost;
            case "less expensive":
                return other.cost <= unit.cost;
            case "has pd":
                ref = other.weapons;
                for (l = 0, len1 = ref.length; l < len1; l++) {
                    w = ref[l];
                    if (w.hitsMissiles) {
                        return true;
                    }
                }
                return false;
            case "no pd":
                ref1 = other.weapons;
                for (m = 0, len2 = ref1.length; m < len2; m++) {
                    w = ref1[m];
                    if (w.hitsMissiles) {
                        return false;
                    }
                }
                return true;
            case "cloaked":
                return other.cloaked();
            case "not cloaked":
                return !other.cloaked();
            case "more dps":
                return other.weaponDPS >= unit.weaponDPS;
            case "less dps":
                return other.weaponDPS <= unit.weaponDPS;
            case "more brawling value":
                return other.hp * other.weaponDPS / other.cost >= unit.hp * unit.weaponDPS / unit.cost;
            case "less brawling value":
                return other.hp * other.weaponDPS / other.cost <= unit.hp * unit.weaponDPS / unit.cost;
            case "armed":
                return other.weaponDPS >= 0.01;
            case "unarmed":
                return other.weaponDPS <= 0;
            default:
                return console.log("clause not defined", clause);
        }
    }
    ;

    ifAbsolute(clause, value, unit) {
        switch (clause.toLowerCase()) {
            case "---":
                return true;
            case "faster":
                return unit.maxSpeed * 16 >= value;
            case "slower":
                return unit.maxSpeed * 16 <= value;
            case "more range":
                return unit.weaponRange >= value;
            case "less range":
                return unit.weaponRange <= value;
            case "more hp":
                return unit.hp >= value;
            case "less hp":
                return unit.hp <= value;
            case "more expensive":
                return unit.cost >= value;
            case "less expensive":
                return unit.cost <= value;
            case "more dps":
                return unit.weaponDPS * 16 >= value;
            case "less dps":
                return unit.weaponDPS * 16 <= value;
            case "more arc":
                return unit.weaponArc >= value;
            case "less arc":
                return unit.weaponArc <= value;
            default:
                return console.log("clause not defined", clause);
        }
    }
    ;

    counterNeed(needType, player) {
        let l, len1, need, part, ref, ref1, ref2, ref3, u;
        need = 0;
        switch (needType.toLowerCase()) {
            case "point defense need":
                ref = sim.things;
                for (_ in ref) {
                    u = ref[_];
                    if (u.unit && u.side === otherSide(player.side)) {
                        ref1 = u.parts;
                        for (l = 0, len1 = ref1.length; l < len1; l++) {
                            part = ref1[l];
                            if (part.weapon && part.bulletCls.prototype.missile) {
                                need += part.dps;
                            }
                        }
                    }
                }
                break;
            case "fighter counter need":
                ref2 = sim.things;
                for (_ in ref2) {
                    u = ref2[_];
                    if (u.unit && u.side === otherSide(player.side)) {
                        if (u.maxHP < 100 && u.maxSpeed * 16 > 200) {
                            need += .25;
                        }
                    }
                }
                break;
            case "cloak counter need":
                ref3 = sim.things;
                for (_ in ref3) {
                    u = ref3[_];
                    if (u.unit && u.side === otherSide(player.side)) {
                        if (u.cloaked()) {
                            need += 1;
                        }
                    }
                }
        }
        return need;
    }
    ;

    avoidShots(unit, avoidDamage, bulletType) {
        v2.zero(_avoidVec);
        sim.bulletSpaces[otherSide(unit.side)].findInRange(unit.pos, unit.radius + 500, (function (_this) {
            return function (b) {

                /*
                 * insta hit weapons
                if b.unit and b.side != unit.side
                    for w in b.weapons
                        if w.instant
                            if w.damage < avoidDamage
                                continue
                            if w.target and w.target != unit
                                 * weapon is targeting other unit
                                continue
                            v2.sub(unit.pos, w.worldPos, _avec)
                            if v2.mag(_avec) < w.range * 1.2
                                 * avoid insta hit weapon
                                v2.norm(_avec)
                                v2.add(_avoidVec, _avec)
                 */
                let i, l, ref, ref1, results;
                if (b.damage < avoidDamage) {
                    return;
                }
                if (bulletType === "PD immune" && b.missile) {
                    return;
                }
                if (b.missile && b.tracking && ((ref = b.target) != null ? ref.id : void 0) === unit.id) {
                    v2.sub(unit.pos, b.pos, _avec);
                    if (v2.mag(_avec) < 600) {
                        v2.norm(_avec);
                        return v2.add(_avoidVec, _avec);
                    }
                } else if (b.hitPos) {
                    v2.sub(unit.pos, b.hitPos, _avec);
                    if (v2.mag(_avec) < b.aoe + unit.radius + 100) {
                        v2.norm(_avec);
                        return v2.add(_avoidVec, _avec);
                    }
                } else {
                    v2.sub(unit.pos, b.pos, _avec);
                    if (v2.mag(_avec) < unit.radius + (b.maxLife - b.life) * b.speed) {
                        v2.set(unit.pos, _upos);
                        v2.set(unit.vel, _uvec);
                        v2.set(b.pos, _apos);
                        v2.set(b.vel, _avec);
                        results = [];
                        for (i = l = 0, ref1 = Math.min(64, b.maxLife - b.life); 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
                            if (v2.distance(_upos, _apos) < unit.radius + 100) {
                                v2.sub(_apos, _upos, _avec);
                                v2.pointTo(_lvec, unit.rot + .3);
                                v2.pointTo(_rvec, unit.rot - .3);
                                if (v2.distance(_lvec, _avec) > v2.distance(_rvec, _avec)) {
                                    results.push(v2.add(_avoidVec, _lvec));
                                } else {
                                    results.push(v2.add(_avoidVec, _rvec));
                                }
                            } else {
                                v2.add(_upos, _uvec);
                                results.push(v2.add(_apos, _avec));
                            }
                        }
                        return results;
                    }
                }
            };
        })(this));
        if (v2.mag(_avoidVec) > .1) {
            v2.scale(_avoidVec, 10);
            v2.add(_avoidVec, unit.pos, _apos);
            gotoNoStopSmooth(unit, _apos);
            return true;
        }
        return false;
    }
    ;
.

    doPlayerAIRules(player) {
        let b, buildPriority, buildQ, countsFielded, countsTotal, enemyHave, enemysFielded, l, len1, len2, len3, len4,
            m, myUnits, need, number, o, otherSlot, p, priorityBuild, ratio, ref, ref1, ref2, results, rule, rules,
            start, type, u, unit;
        if (sim.serverType === "1v1t") {
            return;
        }
        if (!sim.enableAi) {
            return;
        }
        countsTotal = 0;
        enemysFielded = {};
        countsFielded = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ref = sim.things;
        for (_ in ref) {
            u = ref[_];
            if (u.unit && u.owner === player.number && u.side === player.side) {
                countsFielded[u.number] += 1;
                countsTotal += 1;
            }
            if (u.unit && u.owner !== player.number && u.side === otherSide(player.side)) {
                type = ais.classifyShip(u);
                enemysFielded[type] = (enemysFielded[type] || 0) + 1;
            }
        }
        buildQ = [];
        buildPriority = [];
        priorityBuild(need, priority, number)
        {
            let i, l, ref1, results;
            if (need > 100) {
                need = 100;
            }
            results = [];
            for (i = l = 0, ref1 = need; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
                results.push(buildPriority.push({
                    number: number,
                    priority: priority + Math.random() * .1
                }));
            }
            return results;
        }
        ;
        ref1 = player.aiRules;
        for (number = l = 0, len1 = ref1.length; l < len1; number = ++l) {
            rules = ref1[number];
            for (m = 0, len2 = rules.length; m < len2; m++) {
                rule = rules[m];
                switch (rule[0].toLowerCase()) {
                    case "field # at priority #":
                        need = rule[1] - countsFielded[number];
                        if (need > 0) {
                            priorityBuild(need, rule[2], number);
                        }
                        break;
                    case "field # for # of enemy * at priority #":
                        ratio = rule[1] / rule[2];
                        enemyHave = enemysFielded[rule[3]] || 0;
                        need = Math.floor(enemyHave * ratio) - countsFielded[number];
                        if (need > 0) {
                            priorityBuild(need, rule[4], number);
                        }
                        break;
                    case "field # for # of ship in slot # at priority #":
                        ratio = rule[1] / rule[2];
                        otherSlot = parseInt(rule[3]) - 1;
                        need = Math.floor(countsFielded[otherSlot] * ratio) - countsFielded[number];
                        if (need > 0) {
                            priorityBuild(need, rule[4], number);
                        }
                        break;
                    case "try to field # every # seconds":
                        if (sim.step !== 0 && sim.step % (rule[2] * 16) === 0) {
                            need = rule[1];
                            priorityBuild(need, 0, number);
                        }
                        break;
                    case "field # at start":
                        if (sim.step < 16 * 5) {
                            need = rule[1] - countsFielded[number];
                            priorityBuild(need, 0, number);
                        }
                        break;
                    case "field # for # of @needtypes at priority #":
                        ratio = rule[1] / rule[2] * counterNeed(rule[3], player);
                        need = Math.floor(ratio - countsFielded[number]);
                        if (need > 0) {
                            priorityBuild(need, rule[4], number);
                        }
                        break;
                    case "field # when money over # at priority #":
                        if (player.money > rule[2]) {
                            priorityBuild(rule[1], rule[3], number);
                        }
                }
            }
        }
        buildPriority.sort(function (a, b) {
            return a.priority - b.priority;
        });
        for (o = 0, len3 = buildPriority.length; o < len3; o++) {
            b = buildPriority[o];
            buildQ.push(b.number);
        }
        if (buildQ.length !== 0) {
            player.buildQ = buildQ;
        }
        myUnits = [];
        ref2 = sim.things;
        for (_ in ref2) {
            unit = ref2[_];
            if (unit.underPlayerControl) {
                unit.message = "";
                continue;
            }
            if (unit.unit && unit.owner === player.number) {
                myUnits.push(unit);
            }
        }
        start = now();
        myUnits = shuffle(myUnits);
        results = [];
        for (p = 0, len4 = myUnits.length; p < len4; p++) {
            unit = myUnits[p];
            doUnitAi(unit, player.aiRules[unit.number], player);
            if (now() - start > 2) {
                break;
            } else {
                results.push(void 0);
            }
        }
        return results;
    }
    ;

    doUnitAi(unit, rules, player) {
        let l, len1, results, rule, used;
        unit.message = "";
        if (unit.wait && unit.wait > 0) {
            unit.wait -= 1;
            return;
        }
        if (rules.length) {
            unit.stopAi();
            results = [];
            for (l = 0, len1 = rules.length; l < len1; l++) {
                rule = rules[l];
                used = false;
                used = doUnitRules(unit, rule, player);
                if (used) {
                    unit.message += ais.ruleToStr(rule);
                    break;
                } else {
                    results.push(void 0);
                }
            }
            return results;
        }
    }
    ;

    doUnitRules(unit, rule, player) {
        var clause, clause1, clause2, enemy, filter, friendly, range, target, type, value;
        switch (rule[0].toLowerCase()) {
            case "@captypes command points within #m":
                return capAI(unit, rule);
            case "@attacktypes enemy within #m":
                range = rule[2];
                filter(t)
            {
                return attackFilter(t, unit, rule[1], rule[2]);
            }
                ;
                enemy = closest(unit.pos, filter, range);
                if (attackMoves(enemy, unit, rule[1], rule[2])) {
                    return true;
                }
                break;
            case "@attacktypes enemy @unittypes within #m":
                range = rule[3];
                filter(t)
            {
                if (!attackFilter(t, unit, rule[1], rule[2])) {
                    return false;
                }
                return ais.classifyShip(t) === rule[2];
            }
                ;
                enemy = closest(unit.pos, filter, range);
                if (attackMoves(enemy, unit, rule[1], rule[2])) {
                    return true;
                }
                break;
            case "@attacktypes enemy that is @relativetypes and @relativetypes within #m":
                type = rule[1];
                clause1 = rule[2];
                clause2 = rule[3];
                range = rule[4];
                filter(t)
            {
                if (!attackFilter(t, unit, rule[1], rule[2])) {
                    return false;
                }
                return ifRelative(clause1, unit, t) && ifRelative(clause2, unit, t);
            }
                ;
                enemy = closest(unit.pos, filter, range);
                if (attackMoves(enemy, unit, type, range)) {
                    return true;
                }
                break;
            case "@attacktypes enemy that is @absolutetypes then # within #m":
                type = rule[1];
                clause = rule[2];
                value = rule[3];
                range = rule[4];
                filter(t)
            {
                if (!attackFilter(t, unit, rule[1], rule[2])) {
                    return false;
                }
                return ifAbsolute(clause, value, t);
            }
                ;
                enemy = closest(unit.pos, filter, range);
                if (attackMoves(enemy, unit, type, range)) {
                    return true;
                }
                break;
            case "find units that are out of energy":
                target = closest(unit.pos, function (t) {
                    return t.unit && t.id !== unit.id && t.side === unit.side && t.energy < t.storeEnergy * .75;
                });
                if (target) {
                    goInRange(500, 600, unit, target);
                    return true;
                }
                break;
            case "when #% of energy, @chargetypes":
                return chargeAI(unit, rule);
            case "when below #% cloak, rest":
                if (unit.cloak / unit.mass < rule[1] / 100 || unit.needsCloak) {
                    if (unit.cloak < unit.mass) {
                        unit.needsCloak = true;
                    } else {
                        unit.needsCloak = false;
                    }
                    return true;
                }
                break;
            case "when shields down to #%, flee":
                if (unit.shield / unit.maxShield < rule[1] / 100) {
                    enemy = closest(unit.pos, (function (t) {
                        return t.unit && t.side === otherSide(unit.side);
                    }));
                    if (enemy) {
                        goAway(unit, enemy, enemy.weaponRange * 1.5);
                        return true;
                    }
                }
                break;
            case "stay in #m range of friendly units":
                friendly = closest(unit.pos, (function (t) {
                    return t.unit && t.id !== unit.id && t.side === unit.side;
                }));
                if (friendly && v2.distance(unit.pos, friendly.pos) > rule[1]) {
                    stayClose(friendly, unit);
                    return true;
                }
                break;
            case "stay in #m range of slot # units":
                friendly = closest(unit.pos, (function (t) {
                    return t.unit && t.number === (parseInt(rule[2]) - 1) && t.id !== unit.id && t.side === unit.side && t.owner === unit.owner;
                }));
                if (friendly && v2.distance(unit.pos, friendly.pos) > rule[1]) {
                    stayClose(friendly, unit);
                    return true;
                }
                break;
            case "stayaway in #m range from slot # units":
                friendly = closest(unit.pos, (function (t) {
                    return t.unit && t.number === (parseInt(rule[2]) - 1) && t.id !== unit.id && t.side === unit.side && t.owner === unit.owner;
                }));
                if (friendly && goAway(unit, friendly, rule[1])) {
                    return true;
                }
                break;
            case "goto @locationtypes":
                return gotoLocation(unit, rule);
            case "avoid everything":
                if (ais.avoidShots(unit, 1, "Any") || ais.avoidEnemies(unit, 1)) {
                    return true;
                }
                break;
            case "avoid #dps danger areas":
                if (ais.avoidEnemies(unit, rule[1])) {
                    return true;
                }
                break;
            case "avoid over #damage @bullettypes shots":
                if (ais.avoidShots(unit, rule[1], rule[2])) {
                    return true;
                }
                break;
            case "avoid over #damage shots":
                if (ais.avoidShots(unit, rule[1], "any")) {
                    return true;
                }
                break;
            case "finish player orders":
                if (unit.hasHumanOrder()) {
                    if (unit.orders[0].ai) {
                        unit.orders.shift();
                    }
                    return true;
                }
                return false;
        }
    }
    ;

    avoidEnemies(unit, dps) {
        let doWhat, minDist, minEnemy, stayAwayRange;
        minDist = 9000000;
        minEnemy = null;
        doWhat = null;
        stayAwayRange = 0;
        sim.unitSpaces[otherSide(unit.side)].findInRange(unit.pos, 3000, (function (_this) {
            return function (enemy) {
                var dist;
                if (enemy.weaponDPS * 16 > dps) {
                    dist = v2.distance(unit.pos, enemy.pos);
                    if (dist < minDist) {
                        stayAwayRange = enemy.weaponRange + enemy.radius + unit.radius + enemy.maxSpeed * 16;
                        if (dist < stayAwayRange) {
                            minDist = dist;
                            minEnemy = enemy;
                            return doWhat = "Flee";
                        } else if (dist < stayAwayRange * 1.10) {
                            minDist = dist;
                            minEnemy = enemy;
                            return doWhat = "Stop";
                        }
                    }
                }
            };
        })(this));
        if (doWhat === "Flee") {
            goAway(unit, minEnemy, stayAwayRange);
            return true;
        }
        if (doWhat === "Stop") {
            return true;
        }
    }
    ;

    classifyShip(unit) {
        let rymarq_system, saktoth_system;
        if (unit.shipClass != null) {
            return unit.shipClass;
        }
        rymarq_system()
        {
            let k, l, len1, list, part, ref, type, v;
            type = {};
            if (unit.weapons.length === 0) {
                type.brick = (unit.hp + unit.shield) * 2;
                type.scout = unit.maxSpeed * 16 * 2;
            } else {
                if (unit.cost < 150) {
                    type.swarmer = (210 - unit.cost) * 5;
                }
                if (unit.maxSpeed * 16 > 200 && unit.weaponDPS * 16 > 20) {
                    type.fighter = unit.weaponDPS * 16 * 6 + unit.maxSpeed * 16 * 1.5 + (unit.hp + unit.shield);
                }
                if (unit.weaponDamage >= 200) {
                    type.bomber = unit.weaponDamage * 4 + unit.maxSpeed * 16 * 0.5 - 100;
                    ref = unit.parts;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        part = ref[l];
                        if (part.name === "Phase Bomb Launcher") {
                            type.bomber += 100;
                        }
                    }
                }
                if (unit.maxSpeed * 16 > 400) {
                    type.interceptor = unit.weaponDPS * 16 * 2 + unit.maxSpeed * 16 * 3 + unit.weaponDamage * 2 - 20;
                }
                if (unit.weaponRange > 500 && unit.cost > 150) {
                    type.destroyer = unit.maxSpeed * 16 * 3 + unit.weaponRange * 3 - 700;
                }
                if (unit.maxSpeed * 16 > 100) {
                    type.cruiser = unit.maxSpeed * 16 * 1.5 + unit.weaponDPS * 16 * 3 + (unit.hp + unit.shield * 2) * 2;
                }
                if (unit.hp > 500) {
                    type.battleship = (unit.hp + unit.shield) * 2 + unit.weaponRange * 3 - 700;
                }
            }
            if (unit.energyCaster) {
                type.carrier = 200 + unit.genEnergy * 16 * 10 + unit.storeEnergy / 800;
            }
            type.support = 10;
            list = (function () {
                let results;
                results = [];
                for (k in type) {
                    v = type[k];
                    results.push([Math.floor(v), k]);
                }
                return results;
            })();
            list = list.sort(function (a, b) {
                return b[0] - a[0];
            });
            return list[0][1];
        }
        ;
        saktoth_system()
        {
            let ref, ref1;
            if (unit.weaponDPS === 0) {
                return "scout";
            }
            if (unit.turnSpeed * 16 > .7 && unit.weaponRange > 700) {
                if (unit.maxSpeed * 16 > 300) {
                    return "destroyer";
                } else {
                    return "cruiser";
                }
            }
            if ((400 < (ref = unit.maxSpeed * 16) && ref < 600)) {
                return "interceptor";
            }
            if ((250 < (ref1 = unit.maxSpeed * 16) && ref1 < 400)) {
                return "fighter";
            }
            if (unit.energyCaster) {
                return "carrier";
            }
            if (unit.cost > 800 || unit.hp > 1000) {
                return "battleship";
            }
            if (unit.weaponDPS * 16 > 370) {
                return "godslayer";
            }
            return "unknown";
        }
        ;
        unit.shipClass = rymarq_system();
        return unit.shipClass;
    }
    ;

    useAiFleet(aiName, side, aiBuildBar) {
        let color, i, l, len1, player, u;
        if (!aiName) {
            return;
        }
        if (side === "beta") {
            color = [46, 204, 113, 255];
        } else {
            color = [230, 126, 34, 255];
        }
        for (i = l = 0, len1 = aiBuildBar.length; l < len1; i = ++l) {
            u = aiBuildBar[i];
            if (typeof u === "object") {
                aiBuildBar[i] = JSON.stringify(u);
            }
        }
        player = sim.playerJoin("", "ai" + rid(), aiName, color, aiBuildBar, ais.buildBar2aiRules(aiBuildBar), true);
        player.side = side;
        player.afk = false;
        player.connected = true;
        player.ready = true;
        player.ai = true;
        return player;
    }
    ;

    useAi(aiName, side) {
        if (side == null) {
            side = "beta";
        }
        if (!aiName) {
            return;
        }
        return ais.useAiFleet(aiName, side, ais.all[aiName]);
    }
    ;

    buildBar2aiRules(buildBar) {
        let aiRules, data, l, len1, unitSpec;
        aiRules = [];
        for (l = 0, len1 = buildBar.length; l < len1; l++) {
            unitSpec = buildBar[l];
            if (unitSpec && unitSpec[0] === "{") {
                data = JSON.parse(unitSpec);
                if (data.aiRules) {
                    aiRules.push(data.aiRules);
                    continue;
                }
            }
            if (typeof unitSpec === "object") {
                aiRules.push(unitSpec.aiRules);
                continue;
            }
            aiRules.push([]);
        }
        return aiRules;
    }
    ;

    simulateUnitFight(specA, specB) {
        let a, b, i, l, oldSim, ref;
        a = new types.Unit(specA);
        b = new types.Unit(specB);
        oldSim = window.sim;
        window.sim = new Sim();
        sim.sound = false;
        sim.local = true;
        a.pos = [0, 0];
        b.pos = [0, 100];
        a.side = "alpha";
        b.side = "beta";
        sim.things[a.id] = a;
        sim.things[b.id] = b;
        for (i = l = 0, ref = 16 * 10; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
            sim.simulate();
            console.log(i, a.hp, b.hp);
            if (a.dead || b.dead) {
                break;
            }
        }
        console.log(sim);
        window.sim = oldSim;
        if (a.hp > b.hp) {
            return true;
        }
    }
    ;

    simulateAiFight(ai1, ai2) {
        let fightSim, i, id, l, oldSim, player1, player2, ref, ref1, sides, thing;
        oldSim = window.sim;
        fightSim = window.sim = new Sim();
        sim.sound = false;
        sim.local = true;
        player1 = ais.useAi(ai1, "alpha");
        player2 = useAi(ai2, "beta");
        sim.start();
        for (i = l = 0, ref = 16 * (60 * 15); 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
            sim.simulate();
            if (sim.step % 16 === 0) {
                sides = {
                    "alpha": 0,
                    "beta": 0
                };
                ref1 = sim.things;
                for (id in ref1) {
                    thing = ref1[id];
                    if (thing.commandPoint) {
                        sides[thing.side] += 1;
                    }
                }
            }
            if (sim.winningSide) {
                break;
            }
        }
        console.log("ends at", sim.step, "winner:", sim.winningSide, window.sim = oldSim);
        if (fightSim.winningSide === "alpha") {
            return 1;
        } else if (fightSim.winningSide === "beta") {
            return -1;
        } else {
            return 0;
        }
    }
    ;

    winMatrix() {
        let ai, header, i, k1, k2, l, len1, len2, len3, list, m, o, p, row, score, table, vsScore, wins;
        list = (function () {
            let results;
            results = [];
            for (ai in ais.all) {
                if (ai !== "StaticAI" && ai !== "BossAI") {
                    results.push(ai);
                }
            }
            return results;
        })();
        console.log(list);
        header = [""];
        for (l = 0, len1 = list.length; l < len1; l++) {
            k1 = list[l];
            header.push(k1);
        }
        header.push("wins");
        table = [header];
        vsScore = {};
        for (m = 0, len2 = list.length; m < len2; m++) {
            k1 = list[m];
            row = [k1];
            table.push(row);
            wins = 0;
            for (o = 0, len3 = list.length; o < len3; o++) {
                k2 = list[o];
                if (k1 === k2) {
                    row.push("-");
                } else if (vsScore[k2 + "v" + k1] != null) {
                    wins -= vsScore[k2 + "v" + k1];
                    row.push(-vsScore[k2 + "v" + k1]);
                } else {
                    score = 0;
                    for (i = p = 0; p < 1; i = ++p) {
                        score += ais.simulateAiFight(ais.all[k1], ais.all[k2]);
                    }
                    wins += score;
                    vsScore[k1 + "v" + k2] = score;
                    row.push(score);
                }
            }
            row.push(wins);
        }
        return console.table(table);
    }
    ;

    "export"(aiName) {
        let aiArray, i, l, n, name, ref, spec;
        ref = commander.fleet.ais;
        for (i in ref) {
            name = ref[i];
            if (name === aiName) {
                aiArray = [];
                for (n = l = 0; l < 10; n = ++l) {
                    try {
                        spec = JSON.parse(commander.fleet[i + "," + n]);
                        aiArray.push(spec);
                    } catch (error) {
                        aiArray.push("");
                    }
                }
                console.log(JSON.stringify(aiArray, null, 4));
                return;
            }
        }
        console.error("ai not found");
    }
    ;

    "import"(aiName) {
        let aiBuildBar, i, l;
        aiBuildBar = ais.all[aiName];
        for (i = l = 0; l < 10; i = ++l) {
            if (aiBuildBar[i]) {
                buildBar.setSpec(i, JSON.stringify(aiBuildBar[i]));
            } else {
                buildBar.setSpec(i, "");
            }
        }
    }
    ;
}