import {v2} from "./4src_maths";
import {MTwist} from "./1src_mtwist";
import {Sim} from "./6src_sim";
import {CommandPoint, SpawnPoint} from "./94src_things";
import {Unit} from "./95src_unit";
import {Server} from "../server";

export class IstrolidMap {
    rockColor: number[];
    spotColor: number[];
    fillColor: number[];
    makeRocks: boolean;

    constructor(rockColor: number[], spotColor: number[], fillColor: number[], makeRocks: boolean) {
        this.rockColor = rockColor;
        this.spotColor = spotColor;
        this.fillColor = fillColor;
        this.makeRocks = makeRocks;
    }
}

export class Mapping {
    static main = new IstrolidMap(
        [63, 85, 96, 255],
        [115, 193, 226, 255],
        [123, 63, 68, 255],
        true
    );
    static grayblue = new IstrolidMap(
        [127, 140, 141, 255],
        [189, 195, 199, 255],
        [44, 62, 80, 255],
        true
    );
    static orange = new IstrolidMap(
        [219, 136, 79, 255],
        [243, 156, 18, 255],
        [192, 70, 53, 255],
        true
    );
    static blue = new IstrolidMap(
        [211, 241, 240, 255],
        [24, 203, 193, 255],
        [28, 107, 132, 255],
        true
    );
    static fadered = new IstrolidMap(
        [34, 32, 86, 255],
        [255, 187, 132, 255],
        [240, 88, 82, 255],
        true
    );
    static tealwhite = new IstrolidMap(
        [209, 202, 185, 255],
        [159, 200, 170, 255],
        [85, 134, 120, 255],
        true
    );
    static whitepurple = new IstrolidMap(
        [23, 41, 117, 255],
        [188, 210, 219, 255],
        [106, 86, 133, 255],
        true
    );
    static darkness = new IstrolidMap(
        [27, 36, 40, 255],
        [202, 222, 232, 255],
        [48, 62, 75, 255],
        false
    );
    static moonyellow = new IstrolidMap(
        [171, 164, 136, 255],
        [228, 211, 159, 255],
        [55, 81, 92, 255],
        true
    );
    static pinkpurple = new IstrolidMap(
        [181, 154, 146, 255],
        [220, 171, 169, 255],
        [90, 54, 99, 255],
        true
    );
    static greenbrown = new IstrolidMap(
        [50, 36, 40, 255],
        [178, 188, 170, 255],
        [100, 64, 62, 255],
        true
    );
    static bluebrown = new IstrolidMap(
        [123, 109, 141, 255],
        [132, 153, 177, 255],
        [73, 59, 42, 255],
        true
    );
    static tealorange = new IstrolidMap(
        [255, 74, 0, 255],
        [68, 206, 197, 255],
        [200, 52, 0, 255],
        false,
    );
    static greenpurple = new IstrolidMap(
        [77, 83, 130, 255],
        [140, 186, 128, 255],
        [81, 70, 99, 255],
        true
    );
    static lemondarkred = new IstrolidMap(
        [193, 188, 106, 255],
        [240, 230, 145, 255],
        [120, 25, 25, 255],
        true
    );
    static tanslate = new IstrolidMap(
        [61, 44, 46, 255],
        [173, 144, 136, 255],
        [66, 76, 85, 255],
        true
    );
    static redgreen = new IstrolidMap(
        [115, 226, 167, 255],
        [110, 190, 155, 255],
        [170, 130, 150, 255],
        true
    );
    static yellowpuce = new IstrolidMap(
        [230, 175, 46, 255],
        [230, 213, 99, 255],
        [99, 43, 48, 255],
        true
    );
    static yellowcyan = new IstrolidMap(
        [228, 207, 116, 255],
        [185, 175, 95, 255],
        [60, 133, 111, 255],
        true
    );
    static space = new IstrolidMap(
        [200, 255, 200, 255],
        [0, 0, 0, 255],
        [0, 0, 50, 255],
        true
    );
    static ghostly = new IstrolidMap(
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 255],
        true
    );
    static green = new IstrolidMap(
        [33, 33, 33, 255],
        [67, 160, 71, 10],
        [135, 205, 142, 255],
        true
    );
    static purpleyellow = new IstrolidMap(
        [0, 105, 92, 255],
        [94, 53, 177, 255],
        [255, 235, 59, 100],
        true
    );
    static blackred = new IstrolidMap(
        [255, 234, 0, 255],
        [15, 15, 15, 255],
        [200, 0, 0, 255],
        true
    );
    static greenorange = new IstrolidMap(
        [255, 234, 0, 255],
        [27, 94, 32, 255],
        [255, 111, 0, 255],
        true
    );
    // rock, map, border
    static bluepurple = new IstrolidMap(
        [255, 234, 0, 255],
        [1, 87, 155, 255],
        [216, 27, 96, 255],
        true
    );
    static themes: IstrolidMap[] = [
        Mapping.main,
        Mapping.green,
        Mapping.purpleyellow,
        Mapping.ghostly,
        Mapping.grayblue,
        Mapping.blue,
        Mapping.fadered,
        Mapping.tealwhite,
        Mapping.whitepurple,
        Mapping.darkness,
        Mapping.moonyellow,
        Mapping.pinkpurple,
        Mapping.greenbrown,
        Mapping.bluebrown,
        Mapping.greenpurple,
        Mapping.lemondarkred,
        Mapping.tanslate,
        Mapping.yellowpuce,
        Mapping.space
    ];
    static blocks = ["ExULFRUIERUIExcIExMI", "FBQUExgHGBUJFRAHEBMJEBUJFRgHExAHGBMJ"];
    static towers = ["ERQQFxQQEREIFxEIFBcJFBEJERcKFxcKFBQBFBQw", "FBQDERQQFxQQEREIFxEIFBcJFBEJERcKFxcKFBQy", "ERQQFBcJFxQQEREIFxEIFBQDERcKFxcKFBESFBQ4", "ERQQFBcJFxQQEREIFxEIFBQDERcKFxcKFBESFBQ1"];
    static forts = ["FBQDGRcKEBQPDxcKDxEIGBQPGREIEhcJEhEJFhcJFhEJFBQ3", "GREIFBQDEBQPDxcKDxEIGBQPGRcKEhcJEhEJFhcJFhEJFBQz", "DRAHDRgHGBQ9EBQ/FBgDEBgPGBgPFBEJFBQDGBADFA8JEBADDRQHGxgHGxQHGxAHEBsJGBsJEA0JGA0JEBAvGBAvFBgwFBQ0", "FAwGGBAPEBQGGBQGHBQGDBQGCBQDFBQDFCADFAgDEBAPEBgPGBgPFBgGFBAGFBwGIBQDBBQBFCQDJBQDFAQBBBQvFCQvJBQvFAQvCBQ0IBQ0FBQ0FAg0FCA0"];
    mr: MTwist;

    static chooseNumber(n: number) {
        let i, j;
        i = Math.floor(v2.random(new Float64Array([0, 0]))[0] * n) + 1;
        j = i.toString();
        if (j.length === 1) {
            return "0" + j;
        }
        return j;
    };

    static chooseOne(l: number[] | string[] | {}[]): any {
        return l[Math.floor(v2.random(new Float64Array([0, 0]))[0] * l.length)];
    };

    static randomVector(v: Float64Array) {
        v[0] = -0.5 + v2.random(new Float64Array([0, 0]))[0];
        v[1] = -0.5 + v2.random(new Float64Array([0, 0]))[1];
        return v2.norm(new Float64Array(v), null);
    };

    static cp(r: number, th: number, side: string) {
        let point;
        point = new CommandPoint();
        point.z = -.01;
        point.pos[0] = Math.cos(th) * r * Sim.Instance.mapScale;
        point.pos[1] = Math.sin(th) * r * Sim.Instance.mapScale;
        point.side = side;
        return Sim.Instance.things[point.id] = point;
    };

    static closest(pos: Float64Array, fn: (arg0: any) => boolean, maxDist: number) {
        let _, dist, minDist, minT, ref, t;
        if (maxDist == null) {
            maxDist = 10000000;
        }
        minDist = 0;
        minT = null;
        ref = Sim.Instance.things;
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
    };

    static p(pos: number[]) {
        return [Math.floor(pos[0]), Math.floor(pos[1])];
    }

    generate(seed: number) {
        this.mr = new MTwist(seed);
        Sim.Instance.things = [];

        /*
        if mr.random() < .1
            sim.theme = chooseOne(mapping.themes)
        else
            a = mr.random()
            spotColor = colors.hsl2rgb([a, .5, .7, 255])
            fillColor = colors.hsl2rgb([a+mr.random()*.8-.4, .3, .2, 255])
            sim.theme =
                rockColor: spotColor
                spotColor: spotColor
                fillColor: fillColor
         */
        Sim.Instance.theme = Mapping.chooseOne(Mapping.themes);
        switch (Sim.Instance.serverType) {
            case "Survival":
            //genSurvival();
            //break;
            case "IO":
            //genIO();
            //break;
            case "CTF":
            //genCTF();
            //break;
            case "TicTacToe":
            //genTTT();
            //break;
            case "FFA":
                //genFFA();
                //break;
                Server.Instance.say("Other gamemodes are currently not migrated");
                break;
            default:
                this.genSymmetrical();
        }
        /* // TODO:
        if (Sim.Instance.makeRocks) {
            fns = this.shuffle([genClouds, genDebris, genRocks, genDodads]);
            r = v2.random(null);
            if (r < .2) {
                fns.pop()();
                fns.pop()();
                return fns.pop()();
            } else if (r < .5) {
                fns.pop()();
                return fns.pop()();
            } else if (r < .9) {
                return fns.pop()();
            } else {
                return "nothing";
            }
        }*/
    };

    genSymmetrical() {
        let _, i, m, o, ref, tooClose;

        let alpha_spawn = new SpawnPoint();
        alpha_spawn.side = "alpha";
        alpha_spawn.spawn = "alpha";
        alpha_spawn.pos[0] = -Sim.Instance.mapScale * 3000;
        alpha_spawn.pos[1] = this.mr.random() * 3000 - 1500;
        Sim.Instance.things[alpha_spawn.id] = alpha_spawn;

        let beta_spawn = new SpawnPoint();
        beta_spawn.side = "beta";
        beta_spawn.spawn = "beta";
        beta_spawn.pos[0] = Sim.Instance.mapScale * 3000;
        beta_spawn.pos[1] = -alpha_spawn.pos[1];

        Sim.Instance.things[beta_spawn.id] = beta_spawn;
        let results = [];
        for (i = m = 0, ref = Sim.Instance.numComPoints / 2; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
            let commandPoint = new CommandPoint();
            commandPoint.z = -.01;
            if (i === 0) {
                v2.set(alpha_spawn.pos, commandPoint.pos);
                let from_center = v2.mag(commandPoint.pos);
                v2.scale(commandPoint.pos, (from_center - 1500) / from_center, null);
            } else {
                for (i = o = 0; o < 10; i = ++o) {
                    tooClose = false;
                    Mapping.randomVector(commandPoint.pos);
                    v2.scale(commandPoint.pos, (300 + this.mr.random() * 2000) * Sim.Instance.mapScale, null);
                    let ref1 = Sim.Instance.things;
                    for (_ in ref1) {
                        let t = ref1[_];
                        if (v2.distance(t.pos, commandPoint.pos) < (t.radius + commandPoint.radius + 100)) {
                            tooClose = true;
                            break;
                        }
                    }
                    if (!tooClose) {
                        break;
                    }
                }
            }
            Sim.Instance.things[commandPoint.id] = commandPoint;
            let beta_commandpoint = new CommandPoint();
            beta_commandpoint.z = -.01;
            beta_commandpoint.pos[0] = -commandPoint.pos[0];
            beta_commandpoint.pos[1] = -commandPoint.pos[1];
            commandPoint.side = "alpha";
            beta_commandpoint.side = "beta";
            results.push(Sim.Instance.things[beta_commandpoint.id] = beta_commandpoint);
        }
        return results;
    };

    genTower() {
        let _, i, ref, results, spec, thing, u;
        ref = Sim.Instance.things;
        results = [];
        for (_ in ref) {
            thing = ref[_];
            if (thing.commandPoint) {
                spec = Mapping.chooseOne(Mapping.forts);
            } else {
                continue;
            }
            u = new Unit(spec);
            u.pos = v2.create(thing.pos);
            u.side = thing.side;
            u.rot = v2.angle(u.pos) + Math.PI;
            Sim.Instance.things[u.id] = u;
            results.push((function () {
                let m, results1;
                results1 = [];
                for (i = m = 0; m < 6; i = ++m) {
                    if (thing.commandPoint) {
                        spec = Mapping.blocks[0];
                    } else {
                        continue;
                    }
                    u = new Unit(spec);
                    u.pos = v2.create(thing.pos);
                    u.pos[0] += Math.sin(i / 3 * Math.PI) * thing.radius * .8;
                    u.pos[1] += Math.cos(i / 3 * Math.PI) * thing.radius * .8;
                    u.side = thing.side;
                    u.rot = Math.PI / 2;
                    results1.push(Sim.Instance.things[u.id] = u);
                }
                return results1;
            })());
        }
        return results;
    };
}