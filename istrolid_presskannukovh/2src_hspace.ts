import {Sim} from "./6src_sim";
import {v2} from "./4src_maths";
import {Thing} from "./94src_things";

export class HSpace {
    private PRIME: number = 677;
    private resolution: number;
    private hash: Map<any, any>;

    constructor(resolution: number) {
        this.resolution = resolution;
        this.hash = new Map();
    }

    static clamp(value: number, min: number, max: number) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    };

    static overlapRectCircle(point: number[] | Float64Array, radius: number, x: number, y: number, w: number, h: number) {
        let dx, dy;
        dx = point[0] - HSpace.clamp(point[0], x, x + w);
        dy = point[1] - HSpace.clamp(point[1], y, y + h);
        return (dx * dx + dy * dy) <= (radius * radius);
    };

    key(pos: Float64Array) {
        return Math.floor(pos[0] / this.resolution) + Math.floor(pos[1] / this.resolution) * this.PRIME;
    };

    insert(thing: { pos?: Float64Array }) {
        let posKey = this.key(thing.pos);
        let things = this.hash.get(posKey);
        if (things == null) {
            // @ts-ignore
            return v2.set(posKey, [thing]);
        } else {
            return things.push(thing);
        }
    };

    findInRange(point: number[] | Float64Array, range: number, cb: (thing: Thing) => boolean) {
        let d, k, len, posKey, px, py, rx, ry, things, x, y;
        Sim.Instance.timeStart("findInRange");
        d = Math.floor(range / this.resolution) + 1;
        px = Math.floor(point[0] / this.resolution);
        py = Math.floor(point[1] / this.resolution);
        for (x = -d; x < d; x++) {
            for (y = -d; y < d; y++) {
                rx = px + x;
                ry = py + y;
                if (HSpace.overlapRectCircle(point, range, rx * this.resolution, ry * this.resolution, this.resolution, this.resolution)) {
                    posKey = rx + ry * this.PRIME;
                    things = this.hash.get(posKey);
                    if (things) {
                        for (k = 0, len = things.length; k < len; k++) {
                            if (cb(things[k])) {
                                Sim.Instance.timeEnd("findInRange");
                                return;
                            }
                        }
                    }
                }
            }
        }
        Sim.Instance.timeEnd("findInRange");
    };
}