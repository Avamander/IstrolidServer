//require('../src/collision.js');
// Generated by CoffeeScript 1.12.7
(function () {
    let closestPointOnLine, closestPointToOrigin, furthestPoint, support;

    furthestPoint = function (points, d) {
        let i, len, maxProduct, p, product, rst;
        maxProduct = -2e308;
        rst = null;
        for (i = 0, len = points.length; i < len; i++) {
            p = points[i];
            product = v2.dot(d, p);
            if (product > maxProduct) {
                rst = p;
                maxProduct = product;
            }
        }
        return rst;
    };

    closestPointOnLine = function (a, b, p) {
        let ab, ap, d, l, t;
        ap = [p[0] - a[0], p[1] - a[1]];
        ab = [b[0] - a[0], b[1] - a[1]];
        d = v2.dot(ab, ab);
        if (d === 0) {
            return a;
        }
        l = v2.dot(ap, ab);
        t = l / d;
        t = Math.min(Math.max(t, 0), 1);
        return v2.add(v2.scale(ab, t), a);
    };

    closestPointToOrigin = function (a, b) {
        return closestPointOnLine(a, b, [0, 0]);
    };

    support = function (points1, points2, d) {

        return [
            furthestPoint(points1, d)[0] - furthestPoint(points2, v2.neg(d, []))[0],
            furthestPoint(points1, d)[1] - furthestPoint(points2, v2.neg(d, []))[1]];
    };

    window.closestDistance = function (points1, points2) {
        let _p, a, b, c, d, da, db, p;
        d = v2.create(X);
        a = support(points1, points2, d);
        v2.neg(d);
        b = support(points1, points2, d);
        while (true) {
            p = closestPointToOrigin(a, b);
            if (p[0] === 0 && p[1] === 0) {
                return 0;
            }
            if ((typeof _p !== "undefined" && _p !== null) && v2.dot(p, p) >= v2.dot(_p, _p)) {
                da = v2.dot(a, d);
                db = v2.dot(b, d);
                return v2.mag(_p) * Math.sign(da * db);
            }
            d = v2.neg(p, []);
            c = support(points1, points2, d);
            if (v2.dot(a, a) < v2.dot(b, b)) {
                b = c;
            } else {
                a = c;
            }
            _p = p;
        }
        return 0;
    };

}).call(this);
;
  


