import {v2} from "./maths";

export class CollisionUtils {
    static furthestPoint(points: Float64Array[], d: Float64Array): Float64Array {
        let p: Float64Array;
        let product;
        let maxProduct = -2e308;
        let rst: Float64Array;
        for (let i = 0; i < points.length; i++) {
            p = points[i];
            product = v2.dot(d, p);
            if (product > maxProduct) {
                rst = p;
                maxProduct = product;
            }
        }
        // @ts-ignore
        return rst;
    };

    static closestPointOnLine(a: Float64Array, b: Float64Array, p: Float64Array) {
        let ap: Float64Array = new Float64Array([p[0] - a[0], p[1] - a[1]]);
        let ab: Float64Array = new Float64Array([b[0] - a[0], b[1] - a[1]]);
        let d = v2.dot(ab, ab);
        if (d === 0) {
            return a;
        }
        let l = v2.dot(ap, ab);
        let t = l / d;
        t = Math.min(Math.max(t, 0), 1);
        return v2.add_r(v2.scale_r(ab, t), a);
    };

    static closestPointToOrigin(a: Float64Array, b: Float64Array) {
        return CollisionUtils.closestPointOnLine(a, b, new Float64Array([0, 0]));
    };

    static support(points1: Float64Array[], points2: Float64Array[], d: Float64Array): Float64Array {
        return new Float64Array([
                CollisionUtils.furthestPoint(points1, d)[0] - CollisionUtils.furthestPoint(points2, v2.neg(d, new Float64Array([0, 0])))[0],
                CollisionUtils.furthestPoint(points1, d)[1] - CollisionUtils.furthestPoint(points2, v2.neg(d, new Float64Array([0, 0])))[1]
            ]
        );
    };

    static closestDistance(points1: Float64Array[], points2: Float64Array[]) {
        let _p, a, b, c, d, da, db, p;
        d = v2.create_r();
        a = CollisionUtils.support(points1, points2, d);
        v2.neg(d, d);
        b = CollisionUtils.support(points1, points2, d);
        while (true) {
            p = CollisionUtils.closestPointToOrigin(a, b);
            if (p[0] === 0 && p[1] === 0) {
                return 0;
            }
            if ((typeof _p !== "undefined" && _p !== null) && v2.dot(p, p) >= v2.dot(_p, _p)) {
                da = v2.dot(a, d);
                db = v2.dot(b, d);
                return v2.mag(_p) * Math.sign(da * db);
            }
            d = v2.neg(p, new Float64Array([0, 0]));
            c = CollisionUtils.support(points1, points2, d);
            if (v2.dot(a, a) < v2.dot(b, b)) {
                b = c;
            } else {
                a = c;
            }
            _p = p;
        }
    };

    static closestPointOnPolygon(point: Float64Array, points: Float64Array[]) {
        let closest, dist, i, j, k, minDist, p, ref;
        if (points.length === 1) {
            return points[0];
        }
        minDist = 2e308;
        closest = null;
        for (i = k = 0, ref = points.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
            j = (i + 1) % points.length;
            p = CollisionUtils.closestPointOnLine(points[i], points[j], point);
            dist = v2.distanceSq(p, point);
            if (dist < minDist) {
                closest = p;
                minDist = dist;
            }
        }
        return closest;
    };
}


