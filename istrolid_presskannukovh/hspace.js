//require('../src/hspace.js');
// Generated by CoffeeScript 1.12.7
(function () {
    var PRIME, clamp, overlapRectCircle;

    PRIME = 677;

    clamp = function (value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    };

    overlapRectCircle = function (point, radius, x, y, w, h) {
        let dx, dy;
        dx = point[0] - clamp(point[0], x, x + w);
        dy = point[1] - clamp(point[1], y, y + h);
        return (dx * dx + dy * dy) <= (radius * radius);
    };

    window.HSpace = (function () {
        function HSpace(resolution) {
            this.resolution = resolution;
            this.hash = new Map();
        }

        HSpace.prototype.key = function (pos) {
            return Math.floor(pos[0] / this.resolution) + Math.floor(pos[1] / this.resolution) * PRIME;
        };

        HSpace.prototype.insert = function (thing) {
            let posKey, things;
            posKey = this.key(thing.pos);
            things = this.hash.get(posKey);
            if (things == null) {
                return this.hash.set(posKey, [thing]);
            } else {
                return things.push(thing);
            }
        };

        HSpace.prototype.findInRange = function (point, range, cb) {
            let d, k, len, posKey, px, py, rx, ry, thing, things, x, y;
            sim.timeStart("findInRange");
            d = Math.floor(range / this.resolution) + 1;
            px = Math.floor(point[0] / this.resolution);
            py = Math.floor(point[1] / this.resolution);
            for (x = -d; x < d; x++) {
                for (y = -d; y < d; y++) {
                    rx = px + x;
                    ry = py + y;
                    if (overlapRectCircle(point, range, rx * this.resolution, ry * this.resolution, this.resolution, this.resolution)) {
                        posKey = rx + ry * PRIME;
                        things = this.hash.get(posKey);
                        if (things) {
                            for (k = 0, len = things.length; k < len; k++) {
                                thing = things[k];
                                if (cb(thing)) {
                                    sim.timeEnd("findInRange");
                                    return;
                                }
                            }
                        }
                    }
                }
            }
            sim.timeEnd("findInRange");
        };

        return HSpace;

    })();

}).call(this);
;