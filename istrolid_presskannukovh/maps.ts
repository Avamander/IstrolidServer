import {v2, v4} from "./maths";
import {MTwist} from "./mtwist";
import {Sim} from "./sim";
import {CommandPoint, Rock, SpawnPoint, Thing} from "./things";
import {Unit} from "./unit";
import {IstrolidServer} from "../server";

export class IstrolidMap {
    rockColor: [number, number, number, number];
    spotColor: [number, number, number, number];
    fillColor: [number, number, number, number];
    makeRocks: boolean;

    constructor(rockColor: [number, number, number, number],
                spotColor: [number, number, number, number],
                fillColor: [number, number, number, number],
                makeRocks: boolean) {
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
    static mr: MTwist;

    static chooseNumber(n: number) {
        let i, j;
        i = Math.floor((Math.random() * n) + 1);
        j = i.toString();
        if (j.length === 1) {
            return "0" + j;
        }
        return j;
    };

    static chooseOne(l: number[] | string[] | {}[]): any {
        return l[Math.floor(Math.random() * l.length)];
    };

    static randomVector(v: Float64Array) {
        v[0] = -0.5 + v2.random(new Float64Array([0, 0]))[0];
        v[1] = -0.5 + v2.random(new Float64Array([0, 0]))[1];
        return v2.norm_r(new Float64Array(v));
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

    static genSymmetrical() {
        let alpha_spawn = new SpawnPoint();
        alpha_spawn.side = "alpha";
        alpha_spawn.spawn = "alpha";
        alpha_spawn.pos[0] = -Sim.Instance.mapScale * 3000;
        alpha_spawn.pos[1] = Mapping.mr.random() * 3000 - 1500;
        Sim.Instance.things[alpha_spawn.id] = alpha_spawn;

        let beta_spawn = new SpawnPoint();
        beta_spawn.side = "beta";
        beta_spawn.spawn = "beta";
        beta_spawn.pos[0] = Sim.Instance.mapScale * 3000;
        beta_spawn.pos[1] = -alpha_spawn.pos[1];

        Sim.Instance.things[beta_spawn.id] = beta_spawn;

        for (let i = 0; i < Sim.Instance.numComPoints / 2; i++) {
            let commandPoint = new CommandPoint();
            commandPoint.z = -.01;
            if (i === 0) {
                v2.set(alpha_spawn.pos, commandPoint.pos);
                let from_center = v2.mag(commandPoint.pos);
                v2.scale_r(commandPoint.pos, (from_center - 1500) / from_center);
            } else {
                for (let o = 0; o < 10; o++) {
                    let tooClose = false;
                    Mapping.randomVector(commandPoint.pos);
                    v2.scale_r(commandPoint.pos, (300 + this.mr.random() * 2000) * Sim.Instance.mapScale);

                    for (let id in Sim.Instance.things) {
                        let thing: Thing = Sim.Instance.things[id];
                        if (v2.distance(thing.pos, commandPoint.pos) < (thing.radius + commandPoint.radius + 100)) {
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
            beta_commandpoint.z = -0.01;
            beta_commandpoint.pos[0] = -commandPoint.pos[0];
            beta_commandpoint.pos[1] = -commandPoint.pos[1];
            commandPoint.side = "alpha";
            beta_commandpoint.side = "beta";
            Sim.Instance.things[beta_commandpoint.id] = beta_commandpoint;
        }
    };

    static genTower() {
        let spec, thing, u;
        for (let _ in Sim.Instance.things) {
            thing = Sim.Instance.things[_];
            if (thing.commandPoint) {
                spec = Mapping.chooseOne(Mapping.forts);
            } else {
                continue;
            }
            u = new Unit(spec);
            u.pos = v2.create(thing.pos);
            u.side = thing.side;
            u.rot = v2.angle(u.pos) + Math.PI;
            Sim.Instance.things[u.id] = (u as Thing);

            for (let i = 0; i < 6; i++) {
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
                Sim.Instance.things[u.id] = (u as Thing);
            }
        }
    };

    static genClouds() {
        let alpha, c, cloud, clouds, i, len, m, n, o, otherCloud, overlaps, ref, results, s, type;
        if (Mapping.mr.random() < .3) {
            c = 0;
        } else {
            c = 255;
        }
        alpha = 15 + 20 * Mapping.mr.random();
        type = Mapping.chooseOne(["s", "v", "a", "g"]);
        n = Math.PI * Sim.Instance.mapScale * Sim.Instance.mapScale * 8;
        clouds = [];
        for (i = m = 0, ref = n * Mapping.mr.random(); 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
            cloud = new Rock();
            cloud.image = "img/debree/" + type + "cloud" + (Mapping.chooseNumber(4)) + ".png";
            Mapping.randomVector(cloud.pos);
            v2.scale_r(cloud.pos, (Mapping.mr.random() * 3200) * Sim.Instance.mapScale);
            overlaps = 0;
            for (o = 0, len = clouds.length; o < len; o++) {
                otherCloud = clouds[o];
                if (v2.distance(cloud.pos, otherCloud.pos) < 1200) {
                    overlaps += 1;
                }
            }
            if (overlaps > 2) {
                continue;
            }
            cloud.color = Sim.Instance.theme.rockColor;
            cloud.color[0] = c;
            cloud.color[1] = c;
            cloud.color[2] = c;
            cloud.color[3] = alpha;
            s = 4 + Mapping.mr.random() * 4;
            cloud.size = new Float64Array([s, s]);
            cloud.z = (Mapping.mr.random() - .5) * 200;
            cloud.rot = Mapping.mr.random() * Math.PI * 2;
            if (Mapping.mr.random() > .5) {
                cloud.z *= 5;
            }
            Sim.Instance.things[cloud.id] = cloud;
            clouds.push(cloud);
        }
    }

    static genRocks() {
        let i, m, ref, rock;
        for (i = m = 0, ref = Sim.Instance.numRocks; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
            rock = new Rock();
            rock.image = Mapping.chooseOne(["img/rocks/srock01.png", "img/rocks/srock02.png", "img/rocks/srock03.png", "img/rocks/srock04.png", "img/rocks/srock05.png", "img/rocks/srock06.png", "img/rocks/srock07.png", "img/rocks/mrock01.png", "img/rocks/mrock02.png", "img/rocks/mrock03.png", "img/rocks/mrock04.png", "img/rocks/mrock05.png", "img/rocks/mrock06.png", "img/rocks/lrock01.png", "img/rocks/lrock02.png", "img/rocks/lrock03.png", "img/rocks/lrock04.png", "img/rocks/lrock05.png"]);
            Mapping.randomVector(rock.pos);
            v2.scale_r(rock.pos, (300 + Mapping.mr.random() * 3000) * Sim.Instance.mapScale);
            rock.color = Sim.Instance.theme.spotColor;
            rock.rot = 2 * Math.PI * Mapping.mr.random();
            rock.z = (Mapping.mr.random() - .5) * 200;
            if (rock.z > 0) {
                rock.z += 1;
            }
            Sim.Instance.things[rock.id] = rock;
        }
    }

    static genBox() {
        let rock, a;
        for (let x = -5; x <= 5; x++) {
            for (let y = -5; y <= 5; y++) {
                for (let z = -5; z <= 5; z++) {
                    rock = new Rock();
                    a = 1000;
                    rock.pos = new Float64Array([x * a, y * a]);
                    rock.z = z * 50;
                    rock.color = [255, 255, 255, 255];
                    rock.image = "img/pip1.png";
                    Sim.Instance.things[rock.id] = rock;
                }
            }
        }
    }

    static genDebree() {
        let c, clusterCenter, debree, debreeColor, i, m, n, ref, results;
        debreeColor = Sim.Instance.theme.spotColor;
        n = Math.PI * Sim.Instance.mapScale * Sim.Instance.mapScale * 4;

        for (c = m = 0, ref = n * Mapping.mr.random(); 0 <= ref ? m < ref : m > ref; c = 0 <= ref ? ++m : --m) {
            clusterCenter = v2.create_r();
            Mapping.randomVector(clusterCenter);
            v2.scale_r(clusterCenter, (300 + Mapping.mr.random() * 3000) * Sim.Instance.mapScale);
            if (Mapping.mr.random() < .7) {
                debree = new Rock();
                if (Mapping.mr.random() > .2) {
                    debree.image = "img/debree/bigdebree" + (Mapping.chooseNumber(12)) + ".png";
                } else {
                    debree.image = "img/debree/civ" + (Mapping.chooseNumber(5)) + ".png";
                }
                v2.add_r(debree.pos, clusterCenter);
                debree.z = (Mapping.mr.random() - .5) * 200;
                debree.color = debreeColor;
                debree.rot = Mapping.mr.random() * 2 * Math.PI;
                Sim.Instance.things[debree.id] = debree;
            }

            let o, ref1;

            for (i = o = 0, ref1 = 20 * Mapping.mr.random(); 0 <= ref1 ? o < ref1 : o > ref1; i = 0 <= ref1 ? ++o : --o) {
                debree = new Rock();
                debree.image = "img/debree/debree" + (Mapping.chooseNumber(25)) + ".png";
                Mapping.randomVector(debree.pos);
                v2.scale_r(debree.pos, Mapping.mr.random() * 600);
                v2.add_r(debree.pos, clusterCenter);
                debree.z = (Mapping.mr.random() - .5) * 200;
                debree.color = debreeColor;
                debree.rot = Mapping.mr.random() * 2 * Math.PI;
                Sim.Instance.things[debree.id] = debree;
            }
        }
    };

    static genRing(pos: Float64Array, radius: number) {
        let dodad, i, image, level, m, ref;
        let z;
        image = Mapping.chooseDodad();
        z = -Mapping.mr.random() * 6 - 3;
        for (level = m = 0, ref = Mapping.mr.random() * 4; 0 <= ref ? m < ref : m > ref; level = 0 <= ref ? ++m : --m) {
            let o;
            for (i = o = 0; o < 6; i = ++o) {
                dodad = new Rock();
                dodad.image = image;
                dodad.color = Sim.Instance.theme.spotColor;
                dodad.pos = pos;
                dodad.pos[0] += Math.sin(i / 3 * Math.PI) * radius * .8;
                dodad.pos[1] += Math.cos(i / 3 * Math.PI) * radius * .8;
                dodad.rot = (6 - i) / 3 * Math.PI + Math.PI / 2;
                dodad.z = z - level * 10;
                Sim.Instance.things[dodad.id] = dodad;
            }
        }
    }

    static chooseDodad() {
        return Mapping.chooseOne([
            "img/dodads/bigdodad01.png",
            "img/dodads/bigdodad02.png",
            "img/dodads/bigdodad03.png",
            "img/dodads/bigdodad04.png",
            "img/dodads/bigdodad05.png",
            "img/dodads/meddodad01.png",
            "img/dodads/meddodad02.png",
            "img/dodads/meddodad03.png",
            "img/dodads/meddodad04.png"
        ]);
    }

    static single(pos: Float64Array) {
        let image = Mapping.chooseDodad();
        let dodad = new Rock();
        dodad.image = image;
        dodad.color = Sim.Instance.theme.spotColor;
        dodad.pos = pos;
        dodad.rot = Mapping.mr.random() * 2 * Math.PI;
        dodad.z = -2 + Mapping.mr.random();
        Sim.Instance.things[dodad.id] = dodad;
    }


    static genDodads() {
        let thing;
        for (let thing_id in Sim.Instance.things) {
            thing = Sim.Instance.things[thing_id];
            if (Mapping.mr.random() < .5) {
                continue;
            }
            if (!(thing.spawn || thing.commandPoint)) {
                continue;
            }
            if (Mapping.mr.random() < 0.5) {
                Mapping.genRing(thing.pos, thing.radius * 3);
            } else {
                Mapping.single(thing.pos);
            }
        }
    };
}