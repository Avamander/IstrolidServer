import {v2} from "./maths";
import {Unit} from "./unit";
import {CommandPoint, Player, Thing} from "./things";
import {Sim} from "./sim";
import {Utils} from "./utils";
import {AIData} from "./aidata";
import {Bullets} from "./bullets";
import Bullet = Bullets.Bullet;
import MissileBullet = Bullets.MissileBullet;
import BulletUtils = Bullets.BulletUtils;

export class AI {
    all: {
        [key: string]:
            ({
                parts:
                    {
                        pos: number[];
                        type: string;
                        dir: number
                    }[];
                name: string;
                aiRules: (string | number)[][]
            } | string)[];
    } = AIData.all;

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
        //"decal": []
    };

    allRuleSet: { [x: string]: boolean; } = {};
    _angleVec = new Float64Array(2);
    _leftVec = new Float64Array(2);
    _rightVec = new Float64Array(2);
    _backPos = new Float64Array(2);
    _goto = new Float64Array(2);
    _next = new Float64Array(2);
    _mid = new Float64Array(2);
    _rvec = new Float64Array(2);
    _lvec = new Float64Array(2);
    _upos = new Float64Array(2);
    _uvec = new Float64Array(2);
    _avec = new Float64Array(2);
    _apos = new Float64Array(2);
    _aAvgPos = new Float64Array(2);
    _avoidVec = new Float64Array(2);


    private static _instance: AI;

    public static get Instance(): AI {
        return this._instance || (this._instance = new this());
    }

    static esc_string(s: string): string {
        return '"' + s.replace(/[\\"]/g, '\\$1') + '"';
    }

    csonify(obj: any | any[], indent: number): string {
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

        if (typeof obj === "string") {
            return prefix + AI.esc_string(obj);
        }

        if (typeof obj !== "object") {
            return prefix + obj;
        }

        if (Array.isArray(obj)) {
            let j, len, results;
            results = [];
            for (j = 0, len = obj.length; j < len; j++) {
                value = obj[j];
                results.push(this.csonify(value, indent));
            }
            return prefix + "[\n" + results.join("\n") + "\n" + prefix + "]";
        }

        let results;
        results = [];
        for (key in obj) {
            value = obj[key];
            results.push(prefix +
                AI.esc_string(key) +
                ":\n" +
                this.csonify(value, indent));
        }
        return results.join("\n");
    }

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
    goodRule(rule: string) {
        return this.allRuleSet[rule[0]] === true;
    }

    static ruleToStr(rule: string[]): string {
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

    static closest(pos: Float64Array, fn: Function, maxDist: number): Unit {
        let dist, minDist, minT, ref, t;
        if (maxDist == null) {
            maxDist = 10000000;
        }
        minDist = 0;
        minT = null;
        ref = Sim.Instance.things;
        for (let _ in ref) {
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
        return (minT as Unit);
    }

    static goThere(unit: Unit, thing: Thing) {
        if (!thing) {
            return false;
        }
        AI.goInRange(thing.radius * .75, thing.radius, unit, thing);
        return true;
    }

    static stayInRange(range: number, unit: Unit, thing: Thing) {
        if (!thing) {
            return false;
        }
        let g = new Float64Array(2);
        v2.sub(unit.pos, thing.pos, g);
        v2.norm_r(g);
        v2.scale_r(g, range);
        v2.add(g, thing.pos, g);
        return unit.aiOrder({
            type: "Move",
            dest: g,
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            noStop: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            range: 0,
            // @ts-ignore
            target: undefined,
            targetId: 0
        });
    }

    static goInRange(spread: number, range: number, unit: Unit, thing: Thing) {
        if (!thing) {
            return false;
        }
        if (unit.topOrderIs("Move") && v2.distance(unit.orders[0].dest, thing.pos) < spread) {
            return true;
        }
        if (v2.distance(unit.pos, thing.pos) < range) {
            return true;
        }
        let r = new Float64Array(2);
        v2.random(r);
        v2.scale_r(r, spread * Math.random());
        v2.add_r(r, thing.pos);
        unit.aiOrder({
            type: "Move",
            dest: r,
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            noStop: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            range: 0,
            // @ts-ignore
            target: undefined,
            targetId: 0
        });
        return true;
    }

    static goAway(unit: Unit, thing: Thing, range: number) {
        let dest, dist;
        if (!thing || !thing.pos || !unit || !unit.pos) {
            return false;
        }
        dist = v2.distance(unit.pos, thing.pos);
        if (dist > range) {
            return false;
        }
        dest = new Float64Array(2);
        v2.sub(unit.pos, thing.pos, dest);
        v2.add(unit.pos, dest, dest);
        unit.aiOrder({
            type: "Move",
            dest: dest,
            range: 0,
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            noStop: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            // @ts-ignore
            target: undefined,
            targetId: 0
        });
        return true;
    }

    static unitCompair(unit: Unit, enemy: Unit) {
        let enemyKillsIn, unitKillsIn;
        enemyKillsIn = unit.hp / enemy.weaponDPS;
        unitKillsIn = enemy.hp / unit.weaponDPS;
        if (unitKillsIn > enemyKillsIn) {
            return enemyKillsIn / unitKillsIn - 1;
        } else {
            return 1 - unitKillsIn / enemyKillsIn;
        }
    }

    static willBeAt(unit: Unit, thing: Thing) {
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


    static spreadCapCP(unit: Unit, rule: string) {
        let closestUnguarded, cp, guarded, ref, ref1, tallyCps, u;
        if (unit.gardingCP && (unit.gardingCP.side === Sim.otherSide(unit.side) || (unit.commandPoint === true && (unit.gardingCP as CommandPoint).capping > 0))) {
            AI.goThere(unit, unit.gardingCP);
            return true;
        }
        tallyCps = [];
        ref = Sim.Instance.things;
        for (let _ in ref) {
            cp = ref[_];
            if (cp.commandPoint && (cp.side === Sim.otherSide(unit.side) || (unit.commandPoint === true && (cp as CommandPoint).capping > 0))) {
                guarded = 0;
                ref1 = Sim.Instance.things;
                for (let __ in ref1) {
                    u = ref1[__];
                    if (u.unit && u.side === unit.side && u.id !== unit.id && (u as Unit).number === unit.number) {
                        let unit = (u as Unit);
                        if (unit.gardingCP === cp) {
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
        this.goThere(unit, closestUnguarded.cp);
        unit.gardingCP = closestUnguarded.cp;
        return true;
    }

    static capAndGuardCP(unit: Unit) {
        let closestUnguarded, cp, guarded, ref, ref1, tallyCps, u;
        tallyCps = [];
        ref = Sim.Instance.things;
        for (let _ in ref) {
            cp = ref[_];
            if (cp.commandPoint) {
                guarded = false;
                ref1 = Sim.Instance.things;
                for (let __ in ref1) {
                    u = ref1[__];
                    if (u.unit && u.side === unit.side && u.id !== unit.id && (u as Unit).number === unit.number) {
                        if (AI.willBeAt((u as Unit), cp)) {
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
        this.goThere(unit, closestUnguarded.cp);
        return true;
    }

    static attack(enemy: Unit, unit: Unit) {
        if (enemy && AI.goInRange(0, unit.weaponRange, unit, (enemy as Thing))) {
            unit.softTarget = (enemy as Thing);
            return true;
        }
    }

    static kite(enemy: Unit, unit: Unit) {
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
        if (AI.stayInRange(unit.weaponRange, unit, (enemy as Thing))) {
            return true;
        }
    }

    static ram(enemy: Unit, unit: Unit) {
        if (enemy && AI.goInRange(0, unit.radius + enemy.radius, unit, (enemy as Thing))) {
            return true;
        }
    }

    run_by(enemy: Unit, unit: Unit) {
        return this.gotoNoStop(unit, enemy.pos);
    }

    static stayClose(enemy: Unit, unit: Unit) {
        if (enemy && AI.goInRange(0, enemy.radius, unit, (enemy as Thing))) {
            return true;
        }
    }

    circle(enemy: Unit, unit: Unit) {
        let k, range, th;
        v2.direction(unit.pos, enemy.pos, this._angleVec);
        //let dist = v2.distance(unit.pos, enemy.pos);
        range = Math.max(enemy.weaponRange, 300);
        k = 3;
        th = v2.angle(this._angleVec);
        v2.pointTo(this._leftVec, th + Math.PI / 2);
        v2.scale_r(this._leftVec, range * k);
        v2.pointTo(this._rightVec, th - Math.PI / 2);
        v2.scale_r(this._rightVec, range * k);
        v2.add_r(this._leftVec, enemy.pos);
        v2.add_r(this._rightVec, enemy.pos);
        v2.add(unit.pos, unit.vel, this._angleVec);
        if (v2.distance(this._angleVec, this._leftVec) < v2.distance(this._angleVec, this._rightVec)) {
            unit.aiOrder({
                type: "Move",
                dest: this._leftVec,
                ai: false,
                begun: false,
                distance: 0,
                id: 0,
                noFinish: false,
                noStop: false,
                // @ts-ignore
                pos: undefined,
                rally: false,
                range: 0,
                // @ts-ignore
                target: undefined,
                targetId: 0
            });
        } else {
            unit.aiOrder({
                type: "Move",
                ai: false,
                begun: false,
                distance: 0,
                id: 0,
                noFinish: false,
                noStop: false,
                // @ts-ignore
                pos: undefined,
                rally: false,
                range: 0,
                // @ts-ignore
                target: undefined,
                targetId: 0,
                dest: this._rightVec
            });
        }
        return true;
    }
    ;

    backstab(enemy: Unit, unit: Unit, amount: number) {
        if (amount == null) {
            amount = 0.7;
        }
        v2.pointTo(this._backPos, enemy.rot + Math.PI);
        v2.scale_r(this._backPos, unit.weaponRange * amount);
        v2.add_r(this._backPos, enemy.pos);
        return unit.aiOrder({
            type: "Move",
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            noStop: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            range: 0,
            // @ts-ignore
            target: undefined,
            targetId: 0,
            dest: v2.create(this._backPos)
        });
    }
    ;

    static attackFilter(enemy: Thing, unit: Unit, type: string, range: string) {
        if (!enemy) {
            return false;
        }

        if (!enemy.unit) {
            return false;
        }

        if ((enemy as Unit).side !== Sim.otherSide(unit.side)) {
            return false;
        }

        if ((enemy as Unit).cloakFade > 0) {
            type = type.toLowerCase();
            if (type === "ram" || type === "circle" || type === "flee") {
                return true;
            }
            return false;
        }
        return true;
    }

    attackMoves(enemy: Unit, unit: Unit, type: string, range: number) {
        let wiggle;
        if (!enemy) {
            return false;
        }
        switch (type.toLowerCase()) {
            case "attack":
                return AI.attack(enemy, unit);
            case "flee":
                return AI.goAway(unit, (enemy as Thing), enemy.weaponRange + enemy.radius + enemy.maxSpeed * 16);
            case "kite":
                return AI.kite(enemy, unit);
            case "ram":
                return AI.ram(enemy, unit);
            case "run-by":
                if (v2.distance(enemy.pos, unit.pos) > 500) {
                    return this.run_by(enemy, unit);
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
                    this.run_by(enemy, unit);
                    return true;
                }
                break;
            case "circle":
                return this.circle(enemy, unit);
            case "backstab":
                return this.backstab(enemy, unit, 0);
            case "wiggle":
                if (unit.wiggling > 0) {
                    unit.wiggling -= 1;
                    return true;
                } else if (Math.random() < .2) {
                    unit.wiggling = 2;
                    wiggle = new Float64Array(2);
                    v2.random(wiggle);
                    v2.scale_r(wiggle, 1000);
                    v2.add_r(wiggle, unit.pos);
                    unit.aiOrder({
                        type: "Move",
                        dest: wiggle,
                        ai: false,
                        begun: false,
                        distance: 0,
                        id: 0,
                        noFinish: false,
                        noStop: false,
                        // @ts-ignore
                        pos: undefined,
                        rally: false,
                        range: 0,
                        // @ts-ignore
                        target: undefined,
                        targetId: 0
                    });
                    return true;
                }
                break;
            case "stay at range":
                return AI.goAway(unit, (enemy as Thing), enemy.weaponRange + enemy.radius + unit.radius);
        }
    }

    gotoNoStop(unit: Unit, goto: Float64Array) {
        let go;
        v2.sub(goto, unit.pos, this._next);
        v2.scale_r(this._next, 10000 / v2.mag(this._next));
        go = new Float64Array(2);
        v2.add(unit.pos, this._next, go);
        return unit.aiOrder({
            type: "Move",
            dest: go,
            ai: false,
            begun: false,
            distance: 0,
            id: 0,
            noFinish: false,
            // @ts-ignore
            pos: undefined,
            rally: false,
            range: 0,
            // @ts-ignore
            target: undefined,
            targetId: 0,
            noStop: true
        });
    }


    gotoNoStopSmooth(unit: Unit, goto: Float64Array) {
        let dest, i, l;
        v2.sub(this._goto, unit.pos, this._next);
        v2.scale_r(this._next, 10000 / v2.mag(this._next));
        v2.add(unit.pos, this._next, this._goto);
        if (unit.topOrderIs("Move")) {
            dest = new Float64Array(2);
            for (i = l = 0; l < 1; i = ++l) {
                dest[i] = unit.orders[0].dest[i] * .7 + this._goto[i] * .3;
            }
            return unit.aiOrder({
                type: "Move",
                dest: dest,
                noStop: true,
                ai: false,
                begun: false,
                distance: 0,
                id: 0,
                noFinish: false,
                // @ts-ignore
                pos: undefined,
                rally: false,
                range: 0,
                // @ts-ignore
                target: undefined,
                targetId: 0
            });
        } else {
            return unit.aiOrder({
                type: "Move",
                dest: v2.create(this._goto),
                noStop: true,
                ai: false,
                begun: false,
                distance: 0,
                id: 0,
                noFinish: false,
                // @ts-ignore
                pos: undefined,
                rally: false,
                range: 0,
                // @ts-ignore
                target: undefined,
                targetId: 0
            });
        }
    }

    capAI(unit: Unit, rule: [string, string, string, string, string]) {
        let cp;
        switch (rule[1].toLowerCase()) {
            case "capture":
                cp = AI.closest(unit.pos, (function (t: Thing) {
                    return t.commandPoint &&
                        (t.side === Sim.otherSide(unit.side) ||
                            (
                                unit.commandPoint === true &&
                                ((t as CommandPoint).capping > 0)
                            ));
                }), parseInt(rule[2]));
                if (cp && AI.goThere(unit, (cp as Thing))) {
                    return true;
                }
                break;
            case "spread to":
                if (AI.spreadCapCP(unit, rule[1])) {
                    return true;
                }
                break;
            case "guard":
                if (AI.capAndGuardCP(unit)) {
                    return true;
                }
                break;
            case "protect":
                cp = AI.closest(unit.pos, (function (t: Thing) {
                    return t.commandPoint &&
                        t.side === unit.side &&
                        (unit.commandPoint === true &&
                            (t as CommandPoint).capping > 0);
                }), parseInt(rule[2]));
                if (cp && AI.goThere(unit, (cp as Thing))) {
                    return true;
                }
                break;
            default:
                return console.log("invalid capAI option", rule);
        }
    }

    static filter(t: Thing, unit: Unit) {
        return t && unit && t.unit && t.id !== unit.id && t.side === unit.side && t.energyCaster;
    };

    chargeAI(unit: Unit, rule: [string, string, string, string, string]) {
        let enemy: Unit;
        let friendly: Unit;
        let recharger: Unit;
        if (unit.energy / unit.storeEnergy < parseInt(rule[1]) / 100 || unit.needsFullCharge) {
            if (unit.needsFullCharge) {
                unit.message += "[needs full charge]";
            }
            switch (rule[2].toLowerCase()) {
                case "find recharger":
                    recharger = AI.closest(unit.pos, AI.filter, 3000);
                    if (recharger) {
                        AI.goInRange(500, 600, unit, (recharger as Thing));
                        if (v2.distance(unit.pos, recharger.pos) < 600) {
                            unit.needsFullCharge = (unit.energy <= (unit.storeEnergy * .98));
                        }
                        return true;
                    }
                    return false;
                case "rest":
                    return true;
                case "flee enemies":
                    enemy = AI.closest(unit.pos, (function (t: Thing) {
                        return t.unit && t.side === Sim.otherSide(unit.side);
                    }), 3000);
                    if (this.attackMoves(enemy, unit, "flee", 3000)) {
                        return true;
                    }
                    break;
                case "return to spawn":
                    return this.gotoLocation(unit, ["-", "friendly spawn", "", "", ""]);
                case "find friendlies":
                case "find friendies":
                    friendly = AI.closest(unit.pos, (function (t: Thing) {
                        return t.unit && t.id !== unit.id && t.side === unit.side;
                    }), 3000);
                    if (friendly && v2.distance(unit.pos, friendly.pos) > 500) {
                        AI.stayClose(friendly, unit);
                        return true;
                    }
                    break;
                default:
                    return console.log("invalid chargeAI option", rule);
            }
        }
    }


    thingsMiddle(fn: Function): Float64Array {
        let number, ref, thing;
        v2.zero(this._mid);
        number = 0;
        ref = Sim.Instance.things;
        for (let _ in ref) {
            thing = ref[_];
            if (fn(thing)) {
                v2.add_r(this._mid, thing.pos);
                number += 1;
            }
        }
        if (number === 0) {
            number = 1;
        }
        v2.scale_r(this._mid, 1 / number);
        return this._mid;
    }


    gotoLocation(unit: Unit, rule: [string, string, string, string, string]) {
        let cp, spawn;
        let pos: Float64Array = new Float64Array(2);
        switch (rule[1].toLowerCase()) {
            case "enemy spawn":
                spawn = AI.closest(unit.pos, (function (t: Thing) {
                    return t.spawn &&
                        t.side === Sim.otherSide(unit.side);
                }), 10000);
                if (spawn) {
                    pos = spawn.pos;
                }
                break;
            case "friendly spawn":
                spawn = AI.closest(unit.pos, (function (t: Thing) {
                    return t.spawn &&
                        t.side === unit.side;
                }), 10000);
                if (spawn) {
                    pos = spawn.pos;
                }
                break;
            case "enemy home point":
                spawn = AI.closest(unit.pos, (function (t: Thing) {
                    return t.spawn &&
                        t.side === Sim.otherSide(unit.side);
                }), 10000);
                if (spawn) {
                    cp = AI.closest(spawn.pos, (function (t: Thing) {
                        return t.commandPoint;
                    }), 10000);
                }
                if (cp) {
                    pos = cp.pos;
                }
                break;
            case "friendly home point":
                spawn = AI.closest(unit.pos, (function (t: Thing) {
                    return t.spawn &&
                        t.side === unit.side;
                }), 10000);
                if (spawn) {
                    cp = AI.closest(spawn.pos, (function (t: Thing) {
                        return t.commandPoint;
                    }), 10000);
                }
                if (cp) {
                    pos = cp.pos;
                }
                break;
            case "enemy army middle":
                pos = this.thingsMiddle(function (t: Thing) {
                    return t.unit &&
                        t.side === Sim.otherSide(unit.side);
                });
                break;
            case "friendly army middle":
                pos = this.thingsMiddle(function (t: Thing) {
                    return t.unit &&
                        t.side === unit.side;
                });
        }
        if (pos) {
            if (v2.distance(unit.pos, pos) > 300) {
                unit.aiOrder({
                    type: "Move",
                    dest: pos,
                    ai: false,
                    begun: false,
                    distance: 0,
                    id: 0,
                    noFinish: false,
                    noStop: false,
                    // @ts-ignore
                    pos: undefined,
                    rally: false,
                    range: 0,
                    // @ts-ignore
                    target: undefined,
                    targetId: 0
                });
                return true;
            }
        }
    }

    static ifRelative(clause: string, unit: Unit, other: Unit) {
        let l, len1, len2, m, ref, ref1, w;
        switch (clause.toLowerCase()) {
            case "---":
                return true;
            case "stronger":
                return AI.unitCompair(unit, other) <= 0;
            case "weaker":
                return AI.unitCompair(unit, other) >= 0;
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

    static ifAbsolute(clause: string, value: string, unit: Unit) {
        let numerical_value = parseInt(value);
        switch (clause.toLowerCase()) {
            case "---":
                return true;
            case "faster":
                return unit.maxSpeed * 16 >= numerical_value;
            case "slower":
                return unit.maxSpeed * 16 <= numerical_value;
            case "more range":
                return unit.weaponRange >= numerical_value;
            case "less range":
                return unit.weaponRange <= numerical_value;
            case "more hp":
                return unit.hp >= numerical_value;
            case "less hp":
                return unit.hp <= numerical_value;
            case "more expensive":
                return unit.cost >= numerical_value;
            case "less expensive":
                return unit.cost <= numerical_value;
            case "more dps":
                return unit.weaponDPS * 16 >= numerical_value;
            case "less dps":
                return unit.weaponDPS * 16 <= numerical_value;
            case "more arc":
                return unit.weaponArc >= numerical_value;
            case "less arc":
                return unit.weaponArc <= numerical_value;
            default:
                return console.log("clause not defined", numerical_value);
        }
    }

    static counterNeed(needType: string, player: Player) {
        let l, len1, need, part, ref, ref1, ref2, ref3, u;
        need = 0;
        switch (needType.toLowerCase()) {
            case "point defense need":
                ref = Sim.Instance.things;
                for (let _ in ref) {
                    u = ref[_];
                    if (u.unit && u.side === Sim.otherSide(player.side)) {
                        ref1 = u.parts;
                        for (l = 0, len1 = ref1.length; l < len1; l++) {
                            part = ref1[l];
                            if (part.weapon && (<any> Bullets)[part.bulletCls].missile) {
                                need += part.dps;
                            }
                        }
                    }
                }
                break;
            case "fighter counter need":
                ref2 = Sim.Instance.things;
                for (let _ in ref2) {
                    u = ref2[_];
                    if (u.unit && u.side === Sim.otherSide(player.side)) {
                        if (u.maxHP < 100 && (u as Unit).maxSpeed * 16 > 200) {
                            need += .25;
                        }
                    }
                }
                break;
            case "cloak counter need":
                ref3 = Sim.Instance.things;
                for (let _ in ref3) {
                    u = ref3[_];
                    if (u.unit && u.side === Sim.otherSide(player.side)) {
                        if (u.cloaked()) {
                            need += 1;
                        }
                    }
                }
        }
        return need;
    }

    static checkBulletSth(b: Bullet, unit: Unit, avoidDamage: number, bulletType: string) {
        let _rvec = new Float64Array(2);
        let _lvec = new Float64Array(2);
        let _upos = new Float64Array(2);
        let _uvec = new Float64Array(2);
        let _avec = new Float64Array(2);
        let _apos = new Float64Array(2);
        let _avoidVec = new Float64Array(2);
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
        if (b.missile) {
            return;
        }
        if (b.missile && (b as MissileBullet).tracking && ((ref = b.target) != null ? ref.id : void 0) === unit.id) {
            v2.sub(unit.pos, b.pos, _avec);
            if (v2.mag(_avec) < 600) {
                v2.norm_r(_avec);
                return v2.add_r(_avoidVec, _avec);
            }
        } else if (b.hitPos) {
            v2.sub(unit.pos, b.hitPos, _avec);
            if (v2.mag(_avec) < b.aoe + unit.radius + 100) {
                v2.norm_r(_avec);
                return v2.add_r(_avoidVec, _avec);
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
                            results.push(v2.add_r(_avoidVec, _lvec));
                        } else {
                            results.push(v2.add_r(_avoidVec, _rvec));
                        }
                    } else {
                        v2.add_r(_upos, _uvec);
                        results.push(v2.add_r(_apos, _avec));
                    }
                }
                return results;
            }
        }
    }


    avoidShots(unit: Unit, avoidDamage: number, bulletType: string) {
        v2.zero(this._avoidVec);
        Sim.Instance.bulletSpaces[Sim.otherSide(unit.side)].findInRange(
            unit.pos,
            unit.radius + 500,
            // @ts-ignore
            (function (_this) {
                return function (b: Bullet) {
                    return AI.checkBulletSth(b, unit, avoidDamage, bulletType);
                };
            })(this));
        if (v2.mag(this._avoidVec) > .1) {
            v2.scale_r(this._avoidVec, 10);
            v2.add(this._avoidVec, unit.pos, this._apos);
            this.gotoNoStopSmooth(unit, this._apos);
            return true;
        }
        return false;
    }

    static priorityBuild(need: number, priority: number, number: number, buildPriority: { number: number; priority: number; }[]) {
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

    doPlayerAIRules(player: Player) {
        let b, enemyHave, l, len1, len2, len3, len4,
            m, myUnits, need, number, o, otherSlot, p, ratio, ref, ref1, ref2, rule, rules,
            start, type, u, unit;
        if (Sim.Instance.serverType === "1v1t") {
            return;
        }
        if (!Sim.Instance.enableAi) {
            return;
        }

        let countsTotal = 0;
        let enemysFielded: { [x: string]: any; } = {};
        let countsFielded = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ref = Sim.Instance.things;
        for (let _ in ref) {
            u = ref[_];
            if (u && player && u.unit && u.owner === player.number && u.side === player.side) {
                countsFielded[(u as Unit).number] += 1;
                countsTotal += 1;
            }
            if (u && player && u.unit && u.owner !== player.number && u.side === Sim.otherSide(player.side)) {
                type = AI.classifyShip((u as Unit));
                enemysFielded[type] = (enemysFielded[type] || 0) + 1;
            }
        }
        let buildQ = [];
        let buildPriority: {
            number: number,
            priority: number
        }[] = [];

        ref1 = player.aiRules;
        for (number = l = 0, len1 = ref1.length; l < len1; number = ++l) {
            rules = ref1[number];
            for (m = 0, len2 = rules.length; m < len2; m++) {
                rule = rules[m];
                switch (rule[0].toLowerCase()) {
                    case "field # at priority #":
                        need = rule[1] - countsFielded[number];
                        if (need > 0) {
                            AI.priorityBuild(need, rule[2], number, buildPriority);
                        }
                        break;
                    case "field # for # of enemy * at priority #":
                        ratio = rule[1] / rule[2];
                        enemyHave = enemysFielded[rule[3]] || 0;
                        need = Math.floor(enemyHave * ratio) - countsFielded[number];
                        if (need > 0) {
                            AI.priorityBuild(need, rule[4], number, buildPriority);
                        }
                        break;
                    case "field # for # of ship in slot # at priority #":
                        ratio = rule[1] / rule[2];
                        otherSlot = parseInt(rule[3]) - 1;
                        need = Math.floor(countsFielded[otherSlot] * ratio) - countsFielded[number];
                        if (need > 0) {
                            AI.priorityBuild(need, rule[4], number, buildPriority);
                        }
                        break;
                    case "try to field # every # seconds":
                        if (Sim.Instance.step !== 0 && Sim.Instance.step % (rule[2] * 16) === 0) {
                            need = rule[1];
                            AI.priorityBuild(need, 0, number, buildPriority);
                        }
                        break;
                    case "field # at start":
                        if (Sim.Instance.step < 16 * 5) {
                            need = rule[1] - countsFielded[number];
                            AI.priorityBuild(need, 0, number, buildPriority);
                        }
                        break;
                    case "field # for # of @needtypes at priority #":
                        ratio = rule[1] / rule[2] * AI.counterNeed(rule[3], player);
                        need = Math.floor(ratio - countsFielded[number]);
                        if (need > 0) {
                            AI.priorityBuild(need, rule[4], number, buildPriority);
                        }
                        break;
                    case "field # when money over # at priority #":
                        if (player.money > rule[2]) {
                            AI.priorityBuild(rule[1], rule[3], number, buildPriority);
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

        ref2 = Sim.Instance.things;
        for (let _ in ref2) {
            unit = ref2[_];
            if (unit.unit) {
                if ((unit as Unit).underPlayerControl) {
                    unit.message = "";
                    continue;
                }
            }
            if (unit.unit && unit.owner === player.number) {
                myUnits.push(unit);
            }
        }

        start = Utils.now();
        myUnits = Utils.shuffle(myUnits);

        for (p = 0, len4 = myUnits.length; p < len4; p++) {
            unit = myUnits[p];
            this.doUnitAi(unit, player.aiRules[unit.number], player);
            if (Utils.now() - start > 2) {
                break;
            }
        }
    }


    doUnitAi(unit: Unit, rules: any[], player: Player) {
        let l, len1, rule, used;
        unit.message = "";
        if (unit.wait && unit.wait > 0) {
            unit.wait -= 1;
            return;
        }
        if (rules.length) {
            unit.stopAi();
            for (l = 0, len1 = rules.length; l < len1; l++) {
                rule = rules[l];
                used = false;
                used = this.doUnitRules(unit, rule, player);
                if (used) {
                    unit.message += AI.ruleToStr(rule);
                    break;
                }
            }
        }
    }


    doUnitRules(unit: Unit, rule: [string, string, string, string, string], player: Player) {
        let enemy, filter, friendly, target;
        if (!unit) {
            return true;
        }

        switch (rule[0].toLowerCase()) {
            case "@captypes command points within #m":
                return this.capAI(unit, rule);
            case "@attacktypes enemy within #m":
                filter = function (t: Thing) {
                    return AI.attackFilter(t, unit, rule[1], rule[2]);
                };
                enemy = AI.closest(unit.pos, filter, parseInt(rule[2]));
                if (this.attackMoves(enemy, unit, rule[1], parseInt(rule[2]))) {
                    return true;
                }
                break;
            case "@attacktypes enemy @unittypes within #m":
                filter = function (t: Thing) {
                    if (!AI.attackFilter(t, unit, rule[1], rule[2])) {
                        return false;
                    }

                    return AI.classifyShip((t as Unit)) === rule[2];
                };

                enemy = AI.closest(unit.pos, filter, parseInt(rule[3]));
                if (this.attackMoves(enemy, unit, rule[1], parseInt(rule[2]))) {
                    return true;
                }
                break;
            case "@attacktypes enemy that is @relativetypes and @relativetypes within #m":
                filter = function (t: Thing) {
                    if (!AI.attackFilter(t, unit, rule[1], rule[2])) {
                        return false;
                    }
                    return AI.ifRelative(rule[2], unit, (t as Unit)) && AI.ifRelative(rule[3], unit, (t as Unit));
                };
                enemy = AI.closest(unit.pos, filter, parseInt(rule[4]));
                if (this.attackMoves(enemy, unit, rule[1], parseInt(rule[4]))) {
                    return true;
                }
                break;
            case "@attacktypes enemy that is @absolutetypes then # within #m":
                filter = function (t: Thing) {
                    if (!AI.attackFilter(t, unit, rule[1], rule[2])) {
                        return false;
                    }
                    return AI.ifAbsolute(rule[2], rule[3], (t as Unit));
                };

                enemy = AI.closest(unit.pos, filter, parseInt(rule[4]));
                if (this.attackMoves(enemy, unit, rule[1], parseInt(rule[4]))) {
                    return true;
                }
                break;
            case "find units that are out of energy":
                target = AI.closest(unit.pos, function (t: Thing) {
                    return unit && t.unit && t.id !== unit.id && t.side === unit.side && (t as Unit).energy < t.storeEnergy * .75;
                }, 4000);
                if (target) {
                    AI.goInRange(500, 600, unit, (target as Thing));
                    return true;
                }
                break;
            case "when #% of energy, @chargetypes":
                return this.chargeAI(unit, rule);
            case "when below #% cloak, rest":
                if (unit.unit && (unit.cloak / unit.mass < parseInt(rule[1]) / 100 || (unit as Unit).needsCloak)) {
                    (unit as Unit).needsCloak = unit.cloak < unit.mass;
                    return true;
                }
                break;
            case "when shields down to #%, flee":
                if (unit.shield / unit.maxShield < parseInt(rule[1]) / 100) {
                    enemy = AI.closest(unit.pos, (function (t: Thing) {
                        return t.unit && t.side === Sim.otherSide(unit.side);
                    }), 4000);
                    if (enemy) {
                        AI.goAway(unit, (enemy as Thing), enemy.weaponRange * 1.5);
                        return true;
                    }
                }
                break;
            case "stay in #m range of friendly units":
                friendly = AI.closest(unit.pos, (function (t: Thing) {
                    return unit && t.unit && t.id !== unit.id && t.side === unit.side;
                }), 4000);
                if (friendly && v2.distance(unit.pos, friendly.pos) > parseInt(rule[1])) {
                    AI.stayClose(friendly, unit);
                    return true;
                }
                break;
            case "stay in #m range of slot # units":
                friendly = AI.closest(unit.pos, (function (t: Thing) {
                    return unit && t.unit && (t as Unit).number === (parseInt(rule[2]) - 1) && t.id !== unit.id && t.side === unit.side && t.owner === unit.owner;
                }), 4000);
                if (friendly && v2.distance(unit.pos, friendly.pos) > parseInt(rule[1])) {
                    AI.stayClose(friendly, unit);
                    return true;
                }
                break;
            case "stayaway in #m range from slot # units":
                friendly = AI.closest(unit.pos, (function (t: Thing) {
                    return unit && t.unit && (t as Unit).number === (parseInt(rule[2]) - 1) && t.id !== unit.id && t.side === unit.side && t.owner === unit.owner;
                }), 4000);
                if (friendly && AI.goAway(unit, (friendly as Thing), parseInt(rule[1]))) {
                    return true;
                }
                break;
            case "goto @locationtypes":
                return this.gotoLocation(unit, rule);
            case "avoid everything":
                if (this.avoidShots(unit, 1, "Any") || this.avoidEnemies(unit, 1)) {
                    return true;
                }
                break;
            case "avoid #dps danger areas":
                if (this.avoidEnemies(unit, parseInt(rule[1]))) {
                    return true;
                }
                break;
            case "avoid over #damage @bullettypes shots":
                if (this.avoidShots(unit, parseInt(rule[1]), rule[2])) {
                    return true;
                }
                break;
            case "avoid over #damage shots":
                if (this.avoidShots(unit, parseInt(rule[1]), "any")) {
                    return true;
                }
                break;
            case "finish player orders":
                if (unit && unit.hasHumanOrder()) {
                    if (unit.orders[0].ai) {
                        unit.orders.shift();
                    }
                    return true;
                }
                return false;
        }
    }

    avoidEnemies(unit: Unit, dps: number) {
        let minDist: number = 9000000;
        let minEnemy: Unit;
        let doWhat: string;
        let stayAwayRange: number = 0;
        if (Sim.Instance.unitSpaces[Sim.otherSide(unit.side)]) {
            // @ts-ignore
            Sim.Instance.unitSpaces[Sim.otherSide(unit.side)].findInRange(unit.pos, 3000, (function (_this) {
                return function (enemy: Unit) {
                    let dist: number;
                    if (enemy.weaponDPS * 16 > dps) {
                        dist = v2.distance(unit.pos, enemy.pos);
                        if (dist < minDist) {
                            stayAwayRange = enemy.weaponRange + enemy.radius + unit.radius + enemy.maxSpeed * 16;
                            if (dist < stayAwayRange) {
                                minDist = dist;
                                minEnemy = enemy;
                                doWhat = "Flee";
                            } else if (dist < stayAwayRange * 1.10) {
                                minDist = dist;
                                minEnemy = enemy;
                                doWhat = "Stop";
                            }
                        }
                    }
                    return false;
                };
            })(this));
        } else {
            return false;
        }

        // @ts-ignore
        if (doWhat === "Flee") {
            // @ts-ignore
            AI.goAway(unit, minEnemy, stayAwayRange);
            return true;
        }
        // @ts-ignore
        if (doWhat === "Stop") {
            return true;
        }
    }

    static rymarq_system(unit: Unit) {
        let k, l, len1, list, part, ref, v;
        let type: { [key: string]: number } = {
            brick: 0,
            scout: 0,
            fighter: 0,
            swarmer: 0,
            bomber: 0,
            interceptor: 0,
            destroyer: 0,
            cruiser: 0,
            battleship: 0,
            carrier: 0,
            support: 0
        };
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
            let results: [number, string][] = [];
            for (k in type) {
                v = type[k];
                results.push([Math.floor(v), k]);
            }
            return results;
        })();


        list = list.sort(function (a: [number, string], b: [number, string]) {
            return b[0] - a[0];
        });
        return list[0][1];
    }

    static saktoth_system(unit: Unit) {
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


    static classifyShip(unit: Unit) {
        if (unit.shipClass != null) {
            return unit.shipClass;
        }

        unit.shipClass = AI.rymarq_system(unit);
        return unit.shipClass;
    }


    static useAiFleet(aiName: string, side: string, aiBuildBar:
        ({
            parts:
                { pos: number[]; type: string; dir: number }[];
            name: string;
            aiRules: (string | number)[][]
        } | string)[]
    ) {
        let color, i, l, len1, player, u;
        if (!aiName) {
            return;
        }
        if (Sim.Instance.gameMode.serverType !== "Tournament") {
            if (side === "beta") {
                color = [46, 204, 113, 255];
            } else {
                color = [230, 126, 34, 255];
            }
        } else {
            color = BulletUtils.rainbow_colors[Math.floor(Math.random() * (BulletUtils.rainbow_colors.length - 1))];
        }
        for (i = l = 0, len1 = aiBuildBar.length; l < len1; i = ++l) {
            u = aiBuildBar[i];
            if (typeof u === "object") {
                aiBuildBar[i] = JSON.stringify(u);
            }
        }

        player = Sim.Instance.playerJoin("", "ai" + Sim.rid(), aiName, color, aiBuildBar, AI.buildBar2aiRules(aiBuildBar), true);
        player.side = side;
        player.afk = false;
        player.connected = true;
        player.ready = true;
        player.ai = true;
        return player;
    }

    useAi(aiName: string, side: string) {
        if (side == null) {
            side = "beta";
        }
        if (!aiName) {
            return;
        }
        return AI.useAiFleet(aiName, side, this.all[aiName]);
    }

    static buildBar2aiRules(buildBar:
                         ({
                             parts:
                                 { pos: number[]; type: string; dir: number }[];
                             name: string;
                             aiRules: (string | number)[][]
                         } | string)[]
    ) {

        let aiRules, data;
        let unitSpec: string;
        aiRules = [];

        for (let l = 0; l < buildBar.length; l++) {
            if (typeof buildBar[l] === "object") {
                aiRules.push((buildBar[l] as {
                    parts:
                        { pos: number[]; type: string; dir: number }[];
                    name: string;
                    aiRules: (string | number)[][]
                }).aiRules);
                continue;// @ts-ignore
            }

            unitSpec = (buildBar[l] as string);
            if (unitSpec && unitSpec[0] === "{") {
                data = JSON.parse(unitSpec);
                if (data.aiRules) {
                    aiRules.push(data.aiRules);
                    continue;
                }
            }
            aiRules.push([]);
        }
        return aiRules;
    }

    /*
    simulateUnitFight(specA: string, specB: string) {
        let a, b, i, l, oldSim, ref;
        a = new Unit(specA);
        b = new Unit(specB);

        let newsim = new Sim("1v1");
        Sim.Instance.sound = false;
        Sim.Instance.local = true;
        a.pos = new Float64Array([0, 0]);
        b.pos = new Float64Array([0, 100]);
        a.side = "alpha";
        b.side = "beta";
        Sim.Instance.things[a.id] = a;
        Sim.Instance.things[b.id] = b;
        for (i = l = 0, ref = 16 * 10; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
            Sim.Instance.simulate();
            console.log(i, a.hp, b.hp);
            if (a.dead || b.dead) {
                break;
            }
        }
        console.log(newsim);
        if (a.hp > b.hp) {
            return true;
        }
    }

    simulateAiFight(ai1: string, ai2: string) {
        let fightSim, i, id, l, oldSim, player1, player2, ref, ref1, sides, thing;
        fightSim = new Sim("1v1");
        fightSim.sound = false;
        fightSim.local = true;
        player1 = this.ais.useAi(ai1, "alpha");
        player2 = this.useAi(ai2, "beta");
        fightSim.start();
        for (i = l = 0, ref = 16 * (60 * 15); 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
            fightSim.simulate();
            if (fightSim.step % 16 === 0) {
                sides = {
                    "alpha": 0,
                    "beta": 0
                };
                ref1 = fightSim.things;
                for (id in ref1) {
                    thing = ref1[id];
                    if (thing.commandPoint) {
                        sides[thing.side] += 1;
                    }
                }
            }
            if (fightSim.winningSide) {
                break;
            }
        }
        console.log("ends at", fightSim.step, "winner:", fightSim.winningSide);
        if (fightSim.winningSide === "alpha") {
            return 1;
        } else if (fightSim.winningSide === "beta") {
            return -1;
        } else {
            return 0;
        }
    }


    winMatrix() {
        let ai, header, i, k1, k2, l, len1, len2, len3, list, m, o, p, row, score, table, vsScore, wins;
        list = (function () {
            let results;
            results = [];
            for (ai in this.ais.all) {
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
                } else if (this.vsScore[k2 + "v" + k1] != null) {
                    wins -= this.vsScore[k2 + "v" + k1];
                    row.push(-this.vsScore[k2 + "v" + k1]);
                } else {
                    score = 0;
                    for (i = p = 0; p < 1; i = ++p) {
                        score += this.simulateAiFight(ais.all[k1], ais.all[k2]);
                    }
                    wins += score;
                    this.vsScore[k1 + "v" + k2] = score;
                    row.push(score);
                }
            }
            row.push(wins);
        }
        return console.table(table);
    }

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

    "import"(aiName: string) {
        let aiBuildBar, i, l;
        aiBuildBar = this.all[aiName];
        for (i = l = 0; l < 10; i = ++l) {
            if (aiBuildBar[i]) {
                buildBar.setSpec(i, JSON.stringify(aiBuildBar[i]));
            } else {
                buildBar.setSpec(i, "");
            }
        }
    }
    */
}