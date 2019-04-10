System.register("istrolid_presskannukovh/4src_maths", [], function (exports_1, context_1) {
    "use strict";
    var v2, v3, v4, m3, m4;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            v2 = class v2 {
                constructor() {
                    this.RAD = Math.PI / 180;
                    this.X = [1, 0, 0];
                    this.Y = [0, 1, 0];
                    this.Z = [0, 0, 1];
                }
                static create(a) {
                    this.created += 1;
                    let d = new Float64Array(2);
                    if (a != null) {
                        d[0] = a[0];
                        d[1] = a[1];
                    }
                    return d;
                }
                ;
                static zero(d) {
                    d[0] = 0;
                    d[1] = 0;
                    return d;
                }
                ;
                static set(a, d) {
                    d[0] = a[0];
                    d[1] = a[1];
                    return d;
                }
                ;
                static add(a, b, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = a[0] + b[0];
                    d[1] = a[1] + b[1];
                    return d;
                }
                ;
                static sub(a, b, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = a[0] - b[0];
                    d[1] = a[1] - b[1];
                    return d;
                }
                ;
                static neg(a, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = -a[0];
                    d[1] = -a[1];
                    return d;
                }
                ;
                static scale(v, n, d) {
                    if (d == null) {
                        d = v;
                    }
                    d[0] = v[0] * n;
                    d[1] = v[1] * n;
                    return d;
                }
                ;
                static norm(a, d) {
                    let len, x, y;
                    if (d == null) {
                        d = a;
                    }
                    x = a[0];
                    y = a[1];
                    len = Math.sqrt(x * x + y * y);
                    if (len === 0) {
                        d[0] = 0;
                        d[1] = 0;
                        return d;
                    }
                    else if (len === 1) {
                        d[0] = x;
                        d[1] = y;
                        return d;
                    }
                    d[0] = x / len;
                    d[1] = y / len;
                    return d;
                }
                ;
                static cross(a, b) {
                    return a[0] * b[1] - b[0] * a[1];
                }
                ;
                static angle(a) {
                    let b = Math.atan2(a[1], a[0]) + Math.PI / 2;
                    while (b > Math.PI) {
                        b -= Math.PI * 2;
                    }
                    while (b < -Math.PI) {
                        b += Math.PI * 2;
                    }
                    return b;
                }
                ;
                static angleBetween(a, b) {
                    return Math.atan2(a[1] - b[1], a[0] - b[1]);
                }
                ;
                static mag(v) {
                    let x, y;
                    x = v[0];
                    y = v[1];
                    return Math.sqrt(x * x + y * y);
                }
                ;
                static dot(a, b) {
                    return a[0] * b[0] + a[1] * b[1];
                }
                ;
                static direction(from, to, d) {
                    if (d == null) {
                        d = from;
                    }
                    d[0] = from[0] - to[0];
                    d[1] = from[1] - to[1];
                    v2.norm(d, d);
                    return d;
                }
                ;
                static distance(from, to) {
                    let x, y;
                    x = to[0] - from[0];
                    y = to[1] - from[1];
                    return Math.sqrt(x * x + y * y);
                }
                ;
                static distanceSq(from, to) {
                    let x, y;
                    x = to[0] - from[0];
                    y = to[1] - from[1];
                    return x * x + y * y;
                }
                ;
                static lerp(a, b, lerp, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = a[0] + lerp * (b[0] - a[0]);
                    d[1] = a[1] + lerp * (b[1] - a[1]);
                    return d;
                }
                ;
                static random(v) {
                    v[0] = Math.random() - .5;
                    v[1] = Math.random() - .5;
                    return v2.norm(v, v);
                }
                ;
                static rotate(v, th, d) {
                    let cos, sin, v0, v1;
                    if (d == null) {
                        d = v;
                    }
                    sin = Math.sin(th);
                    cos = Math.cos(th);
                    v0 = v[0];
                    v1 = v[1];
                    d[0] = v0 * cos - v1 * sin;
                    d[1] = v0 * sin + v1 * cos;
                    return d;
                }
                ;
                static pointTo(d, th) {
                    d[0] = Math.cos(th - Math.PI / 2);
                    d[1] = Math.sin(th - Math.PI / 2);
                    return d;
                }
                ;
                static str(v) {
                    return "(" + (v3.print_friendly(v[0])) + "," + (v3.print_friendly(v[1])) + ")";
                }
                ;
            };
            v2.created = 0;
            exports_1("v2", v2);
            v3 = class v3 {
                static create(a) {
                    let d = new Float64Array(3);
                    if (a != null) {
                        d[0] = a[0];
                        d[1] = a[1];
                        d[2] = a[2];
                    }
                    return d;
                }
                ;
                static zero(d) {
                    d[0] = 0;
                    d[1] = 0;
                    d[2] = 0;
                    return d;
                }
                ;
                static set(a, d) {
                    d[0] = a[0];
                    d[1] = a[1];
                    d[2] = a[2];
                    return d;
                }
                ;
                static add(a, b, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = a[0] + b[0];
                    d[1] = a[1] + b[1];
                    d[2] = a[2] + b[2];
                    return d;
                }
                ;
                static sub(a, b, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = a[0] - b[0];
                    d[1] = a[1] - b[1];
                    d[2] = a[2] - b[2];
                    return d;
                }
                ;
                static neg(a, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = -a[0];
                    d[1] = -a[1];
                    d[2] = -a[2];
                    return d;
                }
                ;
                static scale(v, n, d) {
                    if (d == null) {
                        d = v;
                    }
                    d[0] = v[0] * n;
                    d[1] = v[1] * n;
                    d[2] = v[2] * n;
                    return d;
                }
                ;
                static norm(a, d) {
                    let len, x, y, z;
                    if (d == null) {
                        d = a;
                    }
                    x = a[0];
                    y = a[1];
                    z = a[2];
                    len = Math.sqrt(x * x + y * y + z * z);
                    if (len === 0) {
                        d[0] = 0;
                        d[1] = 0;
                        d[2] = 0;
                        return d;
                    }
                    else if (len === 1) {
                        d[0] = x;
                        d[1] = y;
                        d[2] = z;
                        return d;
                    }
                    d[0] = x / len;
                    d[1] = y / len;
                    d[2] = z / len;
                    return d;
                }
                ;
                static cross(a, b, d) {
                    let x, y, z;
                    if (d == null) {
                        d = a;
                    }
                    x = a[0];
                    y = a[1];
                    z = a[2];
                    d[0] = y * b[2] - z * b[1];
                    d[1] = z * b[0] - x * b[2];
                    d[2] = x * b[1] - y * b[0];
                    return d;
                }
                ;
                static angle(a, b) {
                    let cosa, cross, mg, sina, th;
                    mg = v3.mag(a) * v3.mag(b);
                    cross = v3.cross(a, b, v3.create(null));
                    sina = v3.mag(cross);
                    sina /= mg;
                    cosa = v3.dot(a, b);
                    cosa /= mg;
                    th = Math.atan(sina / cosa);
                    return th;
                }
                ;
                static mag(v) {
                    let x, y, z;
                    x = v[0];
                    y = v[1];
                    z = v[2];
                    return Math.sqrt(x * x + y * y + z * z);
                }
                ;
                static dot(a, b) {
                    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
                }
                ;
                static direction(from, to, d) {
                    if (d == null) {
                        d = from;
                    }
                    v3.sub(from, to, d);
                    v3.norm(d, null);
                    return d;
                }
                ;
                static distance(from, to) {
                    let x, y, z;
                    x = to[0] - from[0];
                    y = to[1] - from[1];
                    z = to[2] - from[2];
                    return Math.sqrt(x * x + y * y + z * z);
                }
                ;
                static lerp(a, b, lerp, d) {
                    if (d == null) {
                        d = a;
                    }
                    d[0] = a[0] + lerp * (b[0] - a[0]);
                    d[1] = a[1] + lerp * (b[1] - a[1]);
                    d[2] = a[2] + lerp * (b[2] - a[2]);
                    return d;
                }
                ;
                static random(v) {
                    v[0] = Math.random() - .5;
                    v[1] = Math.random() - .5;
                    v[2] = Math.random() - .5;
                    return v3.norm(v, null);
                }
                ;
                static print_friendly(n) {
                    return Math.round(n * 10000) / 10000;
                }
                ;
                static str(v) {
                    return "(" + (v3.print_friendly(v[0])) + "," + (v3.print_friendly(v[1])) + "," + (v3.print_friendly(v[2])) + ")";
                }
                ;
            };
            exports_1("v3", v3);
            v4 = class v4 {
                static create(a) {
                    let d = new Float64Array(4);
                    if (a != null) {
                        d[0] = a[0];
                        d[1] = a[1];
                        d[2] = a[2];
                        d[3] = a[3];
                    }
                    return d;
                }
                ;
                static str(v) {
                    return "(" + (v3.print_friendly(v[0])) + "," + (v3.print_friendly(v[1])) + "," + (v3.print_friendly(v[2])) + "," + (v3.print_friendly(v[3])) + ")";
                }
                ;
            };
            exports_1("v4", v4);
            m3 = class m3 {
                static create(m) {
                    let d = new Float64Array(9);
                    if (m) {
                        d[0] = m[0];
                        d[1] = m[1];
                        d[2] = m[2];
                        d[3] = m[3];
                        d[4] = m[4];
                        d[5] = m[5];
                        d[6] = m[6];
                        d[7] = m[7];
                        d[8] = m[8];
                    }
                    return d;
                }
                ;
                static set(m, d) {
                    d[0] = m[0];
                    d[1] = m[1];
                    d[2] = m[2];
                    d[3] = m[3];
                    d[4] = m[4];
                    d[5] = m[5];
                    d[6] = m[6];
                    d[7] = m[7];
                    d[8] = m[8];
                    return d;
                }
                ;
                static identity(d) {
                    d[0] = 1;
                    d[1] = 0;
                    d[2] = 0;
                    d[3] = 0;
                    d[4] = 1;
                    d[5] = 0;
                    d[6] = 0;
                    d[7] = 0;
                    d[8] = 1;
                    return d;
                }
                ;
                static transpose(m, d) {
                    let a01, a02, a12;
                    if ((d == null) || m === d) {
                        a01 = m[1];
                        a02 = m[2];
                        a12 = m[5];
                        m[1] = m[3];
                        m[2] = m[6];
                        m[3] = a01;
                        m[5] = m[7];
                        m[6] = a02;
                        m[7] = a12;
                        return m;
                    }
                    d[0] = m[0];
                    d[1] = m[3];
                    d[2] = m[6];
                    d[3] = m[1];
                    d[4] = m[4];
                    d[5] = m[7];
                    d[6] = m[2];
                    d[7] = m[5];
                    d[8] = m[8];
                    return d;
                }
                ;
                static to_m4(m, d) {
                    if (d == null) {
                        d = m4.create(null);
                    }
                    d[0] = m[0];
                    d[1] = m[1];
                    d[2] = m[2];
                    d[3] = 0.0;
                    d[4] = m[3];
                    d[5] = m[4];
                    d[6] = m[5];
                    d[7] = 0.0;
                    d[8] = m[6];
                    d[9] = m[7];
                    d[10] = m[8];
                    d[11] = 0.0;
                    d[12] = 0.0;
                    d[13] = 0.0;
                    d[14] = 0.0;
                    d[15] = 1.0;
                    return d;
                }
                ;
                static str(m) {
                    return [v3.print_friendly(m[0]), v3.print_friendly(m[1]), v3.print_friendly(m[2]), v3.print_friendly(m[3]), "|", v3.print_friendly(m[4]), v3.print_friendly(m[5]), v3.print_friendly(m[6]), v3.print_friendly(m[7]), "|", v3.print_friendly(m[8]), v3.print_friendly(m[9]), v3.print_friendly(m[10]), v3.print_friendly(m[11]), "|", v3.print_friendly(m[12]), v3.print_friendly(m[13]), v3.print_friendly(m[14]), v3.print_friendly(m[15])].join(" ");
                }
                ;
            };
            exports_1("m3", m3);
            m4 = class m4 {
                static create(m) {
                    let d = new Float64Array(16);
                    if (m) {
                        d[0] = m[0];
                        d[1] = m[1];
                        d[2] = m[2];
                        d[3] = m[3];
                        d[4] = m[4];
                        d[5] = m[5];
                        d[6] = m[6];
                        d[7] = m[7];
                        d[8] = m[8];
                        d[9] = m[9];
                        d[10] = m[10];
                        d[11] = m[11];
                        d[12] = m[12];
                        d[13] = m[13];
                        d[14] = m[14];
                        d[15] = m[15];
                    }
                    return d;
                }
                ;
                static set(m, d) {
                    d[0] = m[0];
                    d[1] = m[1];
                    d[2] = m[2];
                    d[3] = m[3];
                    d[4] = m[4];
                    d[5] = m[5];
                    d[6] = m[6];
                    d[7] = m[7];
                    d[8] = m[8];
                    d[9] = m[9];
                    d[10] = m[10];
                    d[11] = m[11];
                    d[12] = m[12];
                    d[13] = m[13];
                    d[14] = m[14];
                    d[15] = m[15];
                    return d;
                }
                ;
                static identity(d) {
                    d[0] = 1.0;
                    d[1] = 0.0;
                    d[2] = 0.0;
                    d[3] = 0.0;
                    d[4] = 0.0;
                    d[5] = 1.0;
                    d[6] = 0.0;
                    d[7] = 0.0;
                    d[8] = 0.0;
                    d[9] = 0.0;
                    d[10] = 1.0;
                    d[11] = 0.0;
                    d[12] = 0.0;
                    d[13] = 0.0;
                    d[14] = 0.0;
                    d[15] = 1.0;
                    return d;
                }
                ;
                static transpose(m, d) {
                    let a01, a02, a03, a12, a13, a23;
                    if (!d || m === d) {
                        a01 = m[1];
                        a02 = m[2];
                        a03 = m[3];
                        a12 = m[6];
                        a13 = m[7];
                        a23 = m[11];
                        m[1] = m[4];
                        m[2] = m[8];
                        m[3] = m[12];
                        m[4] = a01;
                        m[6] = m[9];
                        m[7] = m[13];
                        m[8] = a02;
                        m[9] = a12;
                        m[11] = m[14];
                        m[12] = a03;
                        m[13] = a13;
                        m[14] = a23;
                        return m;
                    }
                    d[0] = m[0];
                    d[1] = m[4];
                    d[2] = m[8];
                    d[3] = m[12];
                    d[4] = m[1];
                    d[5] = m[5];
                    d[6] = m[9];
                    d[7] = m[13];
                    d[8] = m[2];
                    d[9] = m[6];
                    d[10] = m[10];
                    d[11] = m[14];
                    d[12] = m[3];
                    d[13] = m[7];
                    d[14] = m[11];
                    d[15] = m[15];
                    return d;
                }
                ;
                static determinant(m) {
                    let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33;
                    a00 = m[0];
                    a01 = m[1];
                    a02 = m[2];
                    a03 = m[3];
                    a10 = m[4];
                    a11 = m[5];
                    a12 = m[6];
                    a13 = m[7];
                    a20 = m[8];
                    a21 = m[9];
                    a22 = m[10];
                    a23 = m[11];
                    a30 = m[12];
                    a31 = m[13];
                    a32 = m[14];
                    a33 = m[15];
                    return a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 + a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 + a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 + a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 + a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 + a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33;
                }
                ;
                static inverse(m, d) {
                    let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33, b00, b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, invDet;
                    if (d == null) {
                        d = m;
                    }
                    a00 = m[0];
                    a01 = m[1];
                    a02 = m[2];
                    a03 = m[3];
                    a10 = m[4];
                    a11 = m[5];
                    a12 = m[6];
                    a13 = m[7];
                    a20 = m[8];
                    a21 = m[9];
                    a22 = m[10];
                    a23 = m[11];
                    a30 = m[12];
                    a31 = m[13];
                    a32 = m[14];
                    a33 = m[15];
                    b00 = a00 * a11 - a01 * a10;
                    b01 = a00 * a12 - a02 * a10;
                    b02 = a00 * a13 - a03 * a10;
                    b03 = a01 * a12 - a02 * a11;
                    b04 = a01 * a13 - a03 * a11;
                    b05 = a02 * a13 - a03 * a12;
                    b06 = a20 * a31 - a21 * a30;
                    b07 = a20 * a32 - a22 * a30;
                    b08 = a20 * a33 - a23 * a30;
                    b09 = a21 * a32 - a22 * a31;
                    b10 = a21 * a33 - a23 * a31;
                    b11 = a22 * a33 - a23 * a32;
                    invDet = 1 / (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);
                    d[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
                    d[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
                    d[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
                    d[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
                    d[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
                    d[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
                    d[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
                    d[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
                    d[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
                    d[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
                    d[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
                    d[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
                    d[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
                    d[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
                    d[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
                    d[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
                    return d;
                }
                ;
                static only_rot(m, d) {
                    if (d == null) {
                        d = m4.create(null);
                    }
                    d[0] = m[0];
                    d[1] = m[1];
                    d[2] = m[2];
                    d[3] = m[3];
                    d[4] = m[4];
                    d[5] = m[5];
                    d[6] = m[6];
                    d[7] = m[7];
                    d[8] = m[8];
                    d[9] = m[9];
                    d[10] = m[10];
                    d[11] = m[11];
                    d[12] = 0.0;
                    d[13] = 0.0;
                    d[14] = 0.0;
                    d[15] = 1.0;
                    return d;
                }
                ;
                static to_m3(m, d) {
                    if (d == null) {
                        d = m3.create(null);
                    }
                    d[0] = m[0];
                    d[1] = m[1];
                    d[2] = m[2];
                    d[3] = m[4];
                    d[4] = m[5];
                    d[5] = m[6];
                    d[6] = m[8];
                    d[7] = m[9];
                    d[8] = m[10];
                    return d;
                }
                ;
                static to_inv_m3(m, d) {
                    let a00, a01, a02, a10, a11, a12, a20, a21, a22, b01, b11, b21, det, id;
                    a00 = m[0];
                    a01 = m[1];
                    a02 = m[2];
                    a10 = m[4];
                    a11 = m[5];
                    a12 = m[6];
                    a20 = m[8];
                    a21 = m[9];
                    a22 = m[10];
                    b01 = a22 * a11 - a12 * a21;
                    b11 = -a22 * a10 + a12 * a20;
                    b21 = a21 * a10 - a11 * a20;
                    det = a00 * b01 + a01 * b11 + a02 * b21;
                    if (det === 0) {
                        return null;
                    }
                    id = 1 / det;
                    if (d == null) {
                        d = m3.create(null);
                    }
                    d[0] = b01 * id;
                    d[1] = (-a22 * a01 + a02 * a21) * id;
                    d[2] = (a12 * a01 - a02 * a11) * id;
                    d[3] = b11 * id;
                    d[4] = (a22 * a00 - a02 * a20) * id;
                    d[5] = (-a12 * a00 + a02 * a10) * id;
                    d[6] = b21 * id;
                    d[7] = (-a21 * a00 + a01 * a20) * id;
                    d[8] = (a11 * a00 - a01 * a10) * id;
                    return d;
                }
                ;
                static mul(m, m2, d) {
                    let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33, b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33;
                    if (d == null) {
                        d = m;
                    }
                    a00 = m[0];
                    a01 = m[1];
                    a02 = m[2];
                    a03 = m[3];
                    a10 = m[4];
                    a11 = m[5];
                    a12 = m[6];
                    a13 = m[7];
                    a20 = m[8];
                    a21 = m[9];
                    a22 = m[10];
                    a23 = m[11];
                    a30 = m[12];
                    a31 = m[13];
                    a32 = m[14];
                    a33 = m[15];
                    b00 = m2[0];
                    b01 = m2[1];
                    b02 = m2[2];
                    b03 = m2[3];
                    b10 = m2[4];
                    b11 = m2[5];
                    b12 = m2[6];
                    b13 = m2[7];
                    b20 = m2[8];
                    b21 = m2[9];
                    b22 = m2[10];
                    b23 = m2[11];
                    b30 = m2[12];
                    b31 = m2[13];
                    b32 = m2[14];
                    b33 = m2[15];
                    d[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
                    d[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
                    d[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
                    d[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
                    d[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
                    d[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
                    d[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
                    d[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
                    d[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
                    d[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
                    d[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
                    d[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
                    d[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
                    d[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
                    d[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
                    d[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
                    return d;
                }
                ;
                static mul_v3(m, v, d) {
                    let x, y, z;
                    if (d == null) {
                        d = v;
                    }
                    x = v[0];
                    y = v[1];
                    z = v[2];
                    d[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
                    d[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
                    d[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
                    return d;
                }
                ;
                static pos(m, v) {
                    if (v == null) {
                        v = v3.create(null);
                    }
                    v[0] = m[12];
                    v[1] = m[13];
                    v[2] = m[14];
                    return v;
                }
                ;
                static set_pos(m, v) {
                    m[12] = v[0];
                    m[13] = v[1];
                    m[14] = v[2];
                    return v;
                }
                ;
                static forward(m, v) {
                    if (v == null) {
                        v = v3.create(null);
                    }
                    v[0] = -m[8];
                    v[1] = -m[9];
                    v[2] = -m[10];
                    return v;
                }
                ;
                static distance(a, b) {
                    let x, y, z;
                    x = a[12] - b[12];
                    y = a[13] - b[13];
                    z = a[14] - b[14];
                    return Math.sqrt(x * x + y * y + z * z);
                }
                ;
                static translate(m, v, d) {
                    let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, x, y, z;
                    x = v[0];
                    y = v[1];
                    z = v[2];
                    if ((d == null) || m === d) {
                        m[12] = m[0] * x + m[4] * y + m[8] * z + m[12];
                        m[13] = m[1] * x + m[5] * y + m[9] * z + m[13];
                        m[14] = m[2] * x + m[6] * y + m[10] * z + m[14];
                        m[15] = m[3] * x + m[7] * y + m[11] * z + m[15];
                        return m;
                    }
                    a00 = m[0];
                    a01 = m[1];
                    a02 = m[2];
                    a03 = m[3];
                    a10 = m[4];
                    a11 = m[5];
                    a12 = m[6];
                    a13 = m[7];
                    a20 = m[8];
                    a21 = m[9];
                    a22 = m[10];
                    a23 = m[11];
                    d[0] = a00;
                    d[1] = a01;
                    d[2] = a02;
                    d[3] = a03;
                    d[4] = a10;
                    d[5] = a11;
                    d[6] = a12;
                    d[7] = a13;
                    d[8] = a20;
                    d[9] = a21;
                    d[10] = a22;
                    d[11] = a23;
                    d[12] = a00 * x + a10 * y + a20 * z + m[12];
                    d[13] = a01 * x + a11 * y + a21 * z + m[13];
                    d[14] = a02 * x + a12 * y + a22 * z + m[14];
                    d[15] = a03 * x + a13 * y + a23 * z + m[15];
                    return d;
                }
                ;
                static scale(mat, vec, dest) {
                    let x, y, z;
                    x = vec[0];
                    y = vec[1];
                    z = vec[2];
                    if ((dest == null) || mat === dest) {
                        mat[0] *= x;
                        mat[1] *= x;
                        mat[2] *= x;
                        mat[3] *= x;
                        mat[4] *= y;
                        mat[5] *= y;
                        mat[6] *= y;
                        mat[7] *= y;
                        mat[8] *= z;
                        mat[9] *= z;
                        mat[10] *= z;
                        mat[11] *= z;
                        return mat;
                    }
                    dest[0] = mat[0] * x;
                    dest[1] = mat[1] * x;
                    dest[2] = mat[2] * x;
                    dest[3] = mat[3] * x;
                    dest[4] = mat[4] * y;
                    dest[5] = mat[5] * y;
                    dest[6] = mat[6] * y;
                    dest[7] = mat[7] * y;
                    dest[8] = mat[8] * z;
                    dest[9] = mat[9] * z;
                    dest[10] = mat[10] * z;
                    dest[11] = mat[11] * z;
                    dest[12] = mat[12];
                    dest[13] = mat[13];
                    dest[14] = mat[14];
                    dest[15] = mat[15];
                    return dest;
                }
                ;
                static create_rot(d, angle, axis) {
                    let W, X, Y, Z, cosa, sina, xw, xx, xy, xz, yw, yy, yz, zw, zz;
                    sina = Math.sin(angle / 2);
                    cosa = Math.cos(angle / 2);
                    X = axis[0] * sina;
                    Y = axis[1] * sina;
                    Z = axis[2] * sina;
                    W = cosa;
                    xx = X * X;
                    xy = X * Y;
                    xz = X * Z;
                    xw = X * W;
                    yy = Y * Y;
                    yz = Y * Z;
                    yw = Y * W;
                    zz = Z * Z;
                    zw = Z * W;
                    d[0] = 1 - 2 * (yy + zz);
                    d[1] = 2 * (xy - zw);
                    d[2] = 2 * (xz + yw);
                    d[4] = 2 * (xy + zw);
                    d[5] = 1 - 2 * (xx + zz);
                    d[6] = 2 * (yz - xw);
                    d[8] = 2 * (xz - yw);
                    d[9] = 2 * (yz + xw);
                    d[10] = 1 - 2 * (xx + yy);
                    d[3] = d[7] = d[11] = d[12] = d[13] = d[14] = 0;
                    d[15] = 1;
                    return d;
                }
                ;
                static set_rot_only(d, angle, axis) {
                    let W, X, Y, Z, cosa, sina, xw, xx, xy, xz, yw, yy, yz, zw, zz;
                    sina = Math.sin(angle / 2);
                    cosa = Math.cos(angle / 2);
                    X = axis[0] * sina;
                    Y = axis[1] * sina;
                    Z = axis[2] * sina;
                    W = cosa;
                    xx = X * X;
                    xy = X * Y;
                    xz = X * Z;
                    xw = X * W;
                    yy = Y * Y;
                    yz = Y * Z;
                    yw = Y * W;
                    zz = Z * Z;
                    zw = Z * W;
                    d[0] = 1 - 2 * (yy + zz);
                    d[1] = 2 * (xy - zw);
                    d[2] = 2 * (xz + yw);
                    d[4] = 2 * (xy + zw);
                    d[5] = 1 - 2 * (xx + zz);
                    d[6] = 2 * (yz - xw);
                    d[8] = 2 * (xz - yw);
                    d[9] = 2 * (yz + xw);
                    d[10] = 1 - 2 * (xx + yy);
                    d[3] = d[7] = d[11] = 0;
                    d[15] = 1;
                    return d;
                }
                ;
                static rotate(mat, angle, axis, dest) {
                    let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, b00, b01, b02, b10, b11, b12, b20, b21, b22, c, len, s, t, x, y, z;
                    x = axis[0];
                    y = axis[1];
                    z = axis[2];
                    len = Math.sqrt(x * x + y * y + z * z);
                    if (len === 0) {
                        return null;
                    }
                    if (len !== 1) {
                        x /= len;
                        y /= len;
                        z /= len;
                    }
                    s = Math.sin(angle);
                    c = Math.cos(angle);
                    t = 1 - c;
                    a00 = mat[0];
                    a01 = mat[1];
                    a02 = mat[2];
                    a03 = mat[3];
                    a10 = mat[4];
                    a11 = mat[5];
                    a12 = mat[6];
                    a13 = mat[7];
                    a20 = mat[8];
                    a21 = mat[9];
                    a22 = mat[10];
                    a23 = mat[11];
                    b00 = x * x * t + c;
                    b01 = y * x * t + z * s;
                    b02 = z * x * t - y * s;
                    b10 = x * y * t - z * s;
                    b11 = y * y * t + c;
                    b12 = z * y * t + x * s;
                    b20 = x * z * t + y * s;
                    b21 = y * z * t - x * s;
                    b22 = z * z * t + c;
                    if (dest == null) {
                        dest = mat;
                    }
                    else if (mat !== dest) {
                        dest[12] = mat[12];
                        dest[13] = mat[13];
                        dest[14] = mat[14];
                        dest[15] = mat[15];
                    }
                    dest[0] = a00 * b00 + a10 * b01 + a20 * b02;
                    dest[1] = a01 * b00 + a11 * b01 + a21 * b02;
                    dest[2] = a02 * b00 + a12 * b01 + a22 * b02;
                    dest[3] = a03 * b00 + a13 * b01 + a23 * b02;
                    dest[4] = a00 * b10 + a10 * b11 + a20 * b12;
                    dest[5] = a01 * b10 + a11 * b11 + a21 * b12;
                    dest[6] = a02 * b10 + a12 * b11 + a22 * b12;
                    dest[7] = a03 * b10 + a13 * b11 + a23 * b12;
                    dest[8] = a00 * b20 + a10 * b21 + a20 * b22;
                    dest[9] = a01 * b20 + a11 * b21 + a21 * b22;
                    dest[10] = a02 * b20 + a12 * b21 + a22 * b22;
                    dest[11] = a03 * b20 + a13 * b21 + a23 * b22;
                    return dest;
                }
                ;
                static rotateX(mat, angle, dest) {
                    let a10, a11, a12, a13, a20, a21, a22, a23, c, s;
                    s = Math.sin(angle);
                    c = Math.cos(angle);
                    a10 = mat[4];
                    a11 = mat[5];
                    a12 = mat[6];
                    a13 = mat[7];
                    a20 = mat[8];
                    a21 = mat[9];
                    a22 = mat[10];
                    a23 = mat[11];
                    if (dest == null) {
                        dest = mat;
                    }
                    else if (mat !== dest) {
                        dest[0] = mat[0];
                        dest[1] = mat[1];
                        dest[2] = mat[2];
                        dest[3] = mat[3];
                        dest[12] = mat[12];
                        dest[13] = mat[13];
                        dest[14] = mat[14];
                        dest[15] = mat[15];
                    }
                    dest[4] = a10 * c + a20 * s;
                    dest[5] = a11 * c + a21 * s;
                    dest[6] = a12 * c + a22 * s;
                    dest[7] = a13 * c + a23 * s;
                    dest[8] = a10 * -s + a20 * c;
                    dest[9] = a11 * -s + a21 * c;
                    dest[10] = a12 * -s + a22 * c;
                    dest[11] = a13 * -s + a23 * c;
                    return dest;
                }
                ;
                static rotateY(mat, angle, dest) {
                    let a00, a01, a02, a03, a20, a21, a22, a23, c, s;
                    s = Math.sin(angle);
                    c = Math.cos(angle);
                    a00 = mat[0];
                    a01 = mat[1];
                    a02 = mat[2];
                    a03 = mat[3];
                    a20 = mat[8];
                    a21 = mat[9];
                    a22 = mat[10];
                    a23 = mat[11];
                    if (dest == null) {
                        dest = mat;
                    }
                    else if (mat !== dest) {
                        dest[4] = mat[4];
                        dest[5] = mat[5];
                        dest[6] = mat[6];
                        dest[7] = mat[7];
                        dest[12] = mat[12];
                        dest[13] = mat[13];
                        dest[14] = mat[14];
                        dest[15] = mat[15];
                    }
                    dest[0] = a00 * c + a20 * -s;
                    dest[1] = a01 * c + a21 * -s;
                    dest[2] = a02 * c + a22 * -s;
                    dest[3] = a03 * c + a23 * -s;
                    dest[8] = a00 * s + a20 * c;
                    dest[9] = a01 * s + a21 * c;
                    dest[10] = a02 * s + a22 * c;
                    dest[11] = a03 * s + a23 * c;
                    return dest;
                }
                ;
                static rotateZ(mat, angle, dest) {
                    let a00, a01, a02, a03, a10, a11, a12, a13, c, s;
                    s = Math.sin(angle);
                    c = Math.cos(angle);
                    a00 = mat[0];
                    a01 = mat[1];
                    a02 = mat[2];
                    a03 = mat[3];
                    a10 = mat[4];
                    a11 = mat[5];
                    a12 = mat[6];
                    a13 = mat[7];
                    if (!dest) {
                        dest = mat;
                    }
                    else if (mat !== dest) {
                        dest[8] = mat[8];
                        dest[9] = mat[9];
                        dest[10] = mat[10];
                        dest[11] = mat[11];
                        dest[12] = mat[12];
                        dest[13] = mat[13];
                        dest[14] = mat[14];
                        dest[15] = mat[15];
                    }
                    dest[0] = a00 * c + a10 * s;
                    dest[1] = a01 * c + a11 * s;
                    dest[2] = a02 * c + a12 * s;
                    dest[3] = a03 * c + a13 * s;
                    dest[4] = a00 * -s + a10 * c;
                    dest[5] = a01 * -s + a11 * c;
                    dest[6] = a02 * -s + a12 * c;
                    dest[7] = a03 * -s + a13 * c;
                    return dest;
                }
                ;
                static get_hpr(m, v) {
                    let heading, pitch, roll;
                    if (v == null) {
                        v = v3.create(null);
                    }
                    if (m[1] > 0.998) {
                        heading = Math.atan2(m[2], m[10]);
                        pitch = Math.PI / 2;
                        roll = 0;
                    }
                    else if (m[1] < -0.998) {
                        heading = Math.atan2(m[2], m[10]);
                        pitch = -Math.PI / 2;
                        roll = 0;
                    }
                    else {
                        heading = Math.atan2(-m[8], m[0]);
                        pitch = Math.atan2(-m[6], m[5]);
                        roll = Math.asin(m[4]);
                    }
                    v[0] = heading;
                    v[1] = pitch;
                    v[2] = roll;
                    return v;
                }
                ;
                static set_quat(dest, w, x, y, z) {
                    let xw, xx, xy, xz, yw, yy, yz, zw, zz;
                    xx = x * x;
                    xy = x * y;
                    xz = x * z;
                    xw = x * w;
                    yy = y * y;
                    yz = y * z;
                    yw = y * w;
                    zz = z * z;
                    zw = z * w;
                    dest[0] = 1 - 2 * (yy + zz);
                    dest[4] = 2 * (xy - zw);
                    dest[8] = 2 * (xz + yw);
                    dest[1] = 2 * (xy + zw);
                    dest[5] = 1 - 2 * (xx + zz);
                    dest[9] = 2 * (yz - xw);
                    dest[2] = 2 * (xz - yw);
                    dest[6] = 2 * (yz + xw);
                    dest[10] = 1 - 2 * (xx + yy);
                    return dest;
                }
                ;
                static frustum(left, right, bottom, top, near, far, dest) {
                    let fn, rl, tb;
                    if (dest == null) {
                        dest = m4.create(null);
                    }
                    rl = right - left;
                    tb = top - bottom;
                    fn = far - near;
                    dest[0] = (near * 2) / rl;
                    dest[1] = 0;
                    dest[2] = 0;
                    dest[3] = 0;
                    dest[4] = 0;
                    dest[5] = (near * 2) / tb;
                    dest[6] = 0;
                    dest[7] = 0;
                    dest[8] = (right + left) / rl;
                    dest[9] = (top + bottom) / tb;
                    dest[10] = -(far + near) / fn;
                    dest[11] = -1;
                    dest[12] = 0;
                    dest[13] = 0;
                    dest[14] = -(far * near * 2) / fn;
                    dest[15] = 0;
                    return dest;
                }
                ;
                static perspective(fovy, aspect, near, far, dest) {
                    let right, top;
                    top = near * Math.tan(fovy * Math.PI / 360.0);
                    right = top * aspect;
                    return m4.frustum(-right, right, -top, top, near, far, dest);
                }
                ;
                static ortho(left, right, bottom, top, near, far, dest) {
                    let fn, rl, tb;
                    if (dest == null) {
                        dest = m4.create(null);
                    }
                    rl = right - left;
                    tb = top - bottom;
                    fn = far - near;
                    dest[0] = 2 / rl;
                    dest[1] = 0;
                    dest[2] = 0;
                    dest[3] = 0;
                    dest[4] = 0;
                    dest[5] = 2 / tb;
                    dest[6] = 0;
                    dest[7] = 0;
                    dest[8] = 0;
                    dest[9] = 0;
                    dest[10] = -2 / fn;
                    dest[11] = 0;
                    dest[12] = -(left + right) / rl;
                    dest[13] = -(top + bottom) / tb;
                    dest[14] = -(far + near) / fn;
                    dest[15] = 1;
                    return dest;
                }
                ;
                static lookAt(eye, center, up, dest) {
                    let centerx, centery, centerz, eyex, eyey, eyez, len, upx, upy, upz, x0, x1, x2, y0, y1, y2, z0, z1, z2;
                    if (!dest) {
                        dest = m4.create(null);
                    }
                    eyex = eye[0];
                    eyey = eye[1];
                    eyez = eye[2];
                    upx = up[0];
                    upy = up[1];
                    upz = up[2];
                    centerx = center[0];
                    centery = center[1];
                    centerz = center[2];
                    if (eyex === centerx && eyey === centery && eyez === centerz) {
                        return m4.identity(dest);
                    }
                    z0 = eyex - center[0];
                    z1 = eyey - center[1];
                    z2 = eyez - center[2];
                    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
                    z0 *= len;
                    z1 *= len;
                    z2 *= len;
                    x0 = upy * z2 - upz * z1;
                    x1 = upz * z0 - upx * z2;
                    x2 = upx * z1 - upy * z0;
                    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
                    if (!len) {
                        x0 = 0;
                        x1 = 0;
                        x2 = 0;
                    }
                    else {
                        len = 1 / len;
                        x0 *= len;
                        x1 *= len;
                        x2 *= len;
                    }
                    y0 = z1 * x2 - z2 * x1;
                    y1 = z2 * x0 - z0 * x2;
                    y2 = z0 * x1 - z1 * x0;
                    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
                    if (!len) {
                        y0 = 0;
                        y1 = 0;
                        y2 = 0;
                    }
                    else {
                        len = 1 / len;
                        y0 *= len;
                        y1 *= len;
                        y2 *= len;
                    }
                    dest[0] = x0;
                    dest[1] = y0;
                    dest[2] = z0;
                    dest[3] = 0;
                    dest[4] = x1;
                    dest[5] = y1;
                    dest[6] = z1;
                    dest[7] = 0;
                    dest[8] = x2;
                    dest[9] = y2;
                    dest[10] = z2;
                    dest[11] = 0;
                    dest[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
                    dest[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
                    dest[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
                    dest[15] = 1;
                    return dest;
                }
                ;
                static to_array(mat) {
                    return [mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]];
                }
                ;
                static m4(mat) {
                    return [v3.print_friendly(mat[0]), v3.print_friendly(mat[1]), v3.print_friendly(mat[2]), v3.print_friendly(mat[3]), "|", v3.print_friendly(mat[4]), v3.print_friendly(mat[5]), v3.print_friendly(mat[6]), v3.print_friendly(mat[7]), "|", v3.print_friendly(mat[8]), v3.print_friendly(mat[9]), v3.print_friendly(mat[10]), v3.print_friendly(mat[11]), "|", v3.print_friendly(mat[12]), v3.print_friendly(mat[13]), v3.print_friendly(mat[14]), v3.print_friendly(mat[15])].join(" ");
                }
                ;
            };
            exports_1("m4", m4);
        }
    };
});
System.register("istrolid_presskannukovh/3src_protocol", [], function (exports_2, context_2) {
    "use strict";
    var prot;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            prot = class prot {
            };
            prot.commonWords = ["1v1",
                "1v1r",
                "2v2",
                "3v3",
                "@attackTypes enemy @unitTypes within #m",
                "@attackTypes enemy that is @absoluteTypes then # within #m",
                "@attackTypes enemy that is @relativeTypes and @relativeTypes within #m",
                "@attackTypes enemy within #m",
                "@capTypes Command Points within #m",
                "action",
                "addAi",
                "ai",
                "Ai1",
                "Ai3",
                "Ai4",
                "aiRules",
                "alpha",
                "AOEWarhead",
                "apm",
                "ArtilleryTurret",
                "Attack",
                "AutoTurret",
                "Avoid #dps danger areas",
                "Avoid everything",
                "Avoid over #damage shots",
                "Backstab",
                "Battery1x1",
                "Battery1x2",
                "Battery2x1",
                "Battery2x2",
                "Battleship",
                "beta",
                "Bomb",
                "Bomber",
                "Bomber",
                "BombGun",
                "buildQ",
                "buildRq",
                "BulletSpeedMod",
                "burn",
                "capping",
                "capps",
                "Capture",
                "Carrier",
                "Carrier",
                "Circle",
                "cloak",
                "Cloak Counter Need",
                "Cloaked",
                "CloakGenerator",
                "color",
                "CommandPoint",
                "connected",
                "Cruiser",
                "DamageMod",
                "dead",
                "Destroyer",
                "Destroyer",
                "dir",
                "DroneBody",
                "EMPGun",
                "EMPGun2",
                "Empty",
                "Enemy Army Middle",
                "Enemy Spawn",
                "energy",
                "EnergyTransfer",
                "Engine01",
                "Engine02",
                "Engine03",
                "Engine04",
                "Engine05",
                "Engine06",
                "Engine07",
                "Faction1",
                "Faction2",
                "Faction3",
                "Faction4",
                "Faction5",
                "Faction6",
                "Faction7",
                "Faster",
                "Field # at priority #",
                "Field # at start",
                "Field # for # of @needTypes at priority #",
                "Field # for # of enemy @unitTypes at priority #",
                "Field # for # of ship in slot # at priority #",
                "Field # when money over # at priority #",
                "Fighter",
                "fillColor",
                "Find recharger",
                "Find units that are out of energy",
                "FlackTurret",
                "FlameTurret",
                "Flee",
                "Flee enemies",
                "Follow",
                "Friendly Army Middle",
                "Friendly Spawn",
                "Friendly Spawn",
                "fullUpdate",
                "ghostCopy",
                "goto",
                "Goto @locationTypes",
                "Guard",
                "HAarmor1x2Curved",
                "HArmor1x1",
                "HArmor1x1Angle",
                "HArmor1x1AngleBack",
                "HArmor1x2",
                "HArmor1x2Back1",
                "HArmor1x2Back2",
                "HArmor1x2Curved2",
                "HArmor1x2Font1",
                "HArmor1x2Front2",
                "HArmor2x1",
                "HArmor2x1Curved2",
                "HArmor2x2",
                "HArmor2x2Angle",
                "HArmor2x2AngleBack",
                "HArmor2x2Back1",
                "HArmor2x2Back2",
                "HArmor2x2Curved",
                "HArmor2x2Front1",
                "HArmor2x2Front2",
                "HeavyBeamTurret",
                "HeavyPDTurret",
                "Hold Position",
                "holdPosition",
                "host",
                "hp",
                "image",
                "img/debree/acloud01.png",
                "img/debree/acloud02.png",
                "img/debree/acloud03.png",
                "img/debree/acloud04.png",
                "img/debree/bigdebree01.png",
                "img/debree/bigdebree02.png",
                "img/debree/bigdebree03.png",
                "img/debree/bigdebree04.png",
                "img/debree/bigdebree05.png",
                "img/debree/bigdebree06.png",
                "img/debree/bigdebree07.png",
                "img/debree/bigdebree08.png",
                "img/debree/bigdebree09.png",
                "img/debree/bigdebree10.png",
                "img/debree/bigdebree11.png",
                "img/debree/bigdebree12.png",
                "img/debree/civ01.png",
                "img/debree/civ02.png",
                "img/debree/civ03.png",
                "img/debree/civ04.png",
                "img/debree/civ05.png",
                "img/debree/debree01.png",
                "img/debree/debree02.png",
                "img/debree/debree03.png",
                "img/debree/debree04.png",
                "img/debree/debree05.png",
                "img/debree/debree06.png",
                "img/debree/debree07.png",
                "img/debree/debree08.png",
                "img/debree/debree09.png",
                "img/debree/debree10.png",
                "img/debree/debree11.png",
                "img/debree/debree12.png",
                "img/debree/debree13.png",
                "img/debree/debree14.png",
                "img/debree/debree15.png",
                "img/debree/debree16.png",
                "img/debree/debree17.png",
                "img/debree/debree18.png",
                "img/debree/debree19.png",
                "img/debree/debree20.png",
                "img/debree/debree21.png",
                "img/debree/debree22.png",
                "img/debree/debree23.png",
                "img/debree/debree24.png",
                "img/debree/debree25.png",
                "img/debree/gcloud01.png",
                "img/debree/gcloud02.png",
                "img/debree/gcloud03.png",
                "img/debree/gcloud04.png",
                "img/debree/scloud01.png",
                "img/debree/scloud02.png",
                "img/debree/scloud03.png",
                "img/debree/scloud04.png",
                "img/debree/vcloud01.png",
                "img/debree/vcloud02.png",
                "img/debree/vcloud03.png",
                "img/debree/vcloud04.png",
                "img/dodads/bigdodad01.png",
                "img/dodads/bigdodad02.png",
                "img/dodads/bigdodad03.png",
                "img/dodads/bigdodad04.png",
                "img/dodads/bigdodad05.png",
                "img/dodads/meddodad01.png",
                "img/dodads/meddodad02.png",
                "img/dodads/meddodad03.png",
                "img/dodads/meddodad04.png",
                "img/point02.png",
                "img/rocks/lrock01.png",
                "img/rocks/lrock02.png",
                "img/rocks/lrock03.png",
                "img/rocks/lrock04.png",
                "img/rocks/lrock05.png",
                "img/rocks/mrock01.png",
                "img/rocks/mrock02.png",
                "img/rocks/mrock03.png",
                "img/rocks/mrock04.png",
                "img/rocks/mrock05.png",
                "img/rocks/mrock06.png",
                "img/rocks/srock01.png",
                "img/rocks/srock02.png",
                "img/rocks/srock03.png",
                "img/rocks/srock04.png",
                "img/rocks/srock05.png",
                "img/rocks/srock06.png",
                "img/rocks/srock07.png",
                "img/rocks/srock08.png",
                "Interceptor",
                "JumpEngine",
                "kickPlayer",
                "kills",
                "Kite",
                "Less Brawling Value",
                "Less DPS",
                "Less expensive",
                "Less HP",
                "Less Range",
                "Letter0",
                "Letter1",
                "Letter2",
                "Letter3",
                "Letter4",
                "Letter5",
                "Letter6",
                "Letter7",
                "Letter8",
                "Letter9",
                "LetterA",
                "LetterB",
                "LetterC",
                "LetterD",
                "LetterDot",
                "LetterE",
                "LetterF",
                "LetterG",
                "LetterH",
                "LetterI",
                "LetterJ",
                "LetterK",
                "LetterL",
                "LetterM",
                "LetterN",
                "LetterO",
                "LetterP",
                "LetterPound",
                "LetterQ",
                "LetterR",
                "LetterS",
                "LetterT",
                "LetterU",
                "LetterV",
                "LetterW",
                "LetterX",
                "LetterY",
                "LetterZ",
                "LightBeamTurret",
                "message",
                "MineTurret",
                "MissileTurret",
                "money",
                "moneyEarned",
                "More Arc",
                "More Brawling Value",
                "More DPS",
                "More expensive",
                "More HP",
                "More Range",
                "More Range",
                "Mount10Range",
                "Mount180",
                "Mount270",
                "Mount30",
                "Mount360",
                "Mount360Micro",
                "Mount90",
                "mouse",
                "mouseMove",
                "Move",
                "moveOrder",
                "name",
                "No PD",
                "Not Cloaked",
                "numbers",
                "OverKillAi",
                "owner",
                "Pad2x2",
                "partId",
                "parts",
                "partTargetId",
                "partWorking",
                "PDTurret",
                "perf",
                "PlasmaTurret",
                "playerJoin",
                "playerNumber",
                "players",
                "playerSelected",
                "pos",
                "Protect",
                "radius",
                "rallyPoint",
                "Ram",
                "Reactor1x1",
                "Reactor1x2",
                "Reactor2x1",
                "Reactor2x2",
                "ReloaderMod",
                "Rest",
                "Rest",
                "RingTurret",
                "Rock",
                "rockColor",
                "rot",
                "running",
                "Scout",
                "Self Destruct",
                "send other",
                "send players",
                "send things",
                "send things fields",
                "send things parts",
                "send things roots",
                "send zJson",
                "serverType",
                "ShadowNArmor1x1",
                "ShadowNArmor1x2",
                "ShadowNArmor2x1",
                "ShadowNArmor2x2",
                "ShadowNArmor2x2Angle",
                "ShapedWarhead",
                "shield",
                "ShieldGen1x1",
                "ShieldGen2x1",
                "ShieldGen2x2",
                "side",
                "sim",
                "size",
                "Slower",
                "SniperGun",
                "Solar1x1",
                "Solar2x2",
                "Solar3x3",
                "spacesRebuild",
                "SpawnPoint",
                "spec",
                "splayers",
                "spotColor",
                "Spread to",
                "startGame",
                "StasisField",
                "state",
                "Stay at range",
                "Stay in #m range of friendly units",
                "Stay in #m range of slot # units",
                "Stayaway in #m range from slot # units",
                "step",
                "sthings",
                "Stop",
                "stopOrder",
                "Stripe1x1",
                "Stripe1x1Corner",
                "Stripe1x2",
                "Stripe2x1",
                "Stripe2x2",
                "Stripe2x2Corner",
                "Stripe2x2Round",
                "StripeDouble2x1",
                "StripeDouble2x2",
                "Stronger",
                "Swarmer",
                "SymbolDecal1",
                "SymbolDecal10",
                "SymbolDecal11",
                "SymbolDecal12",
                "SymbolDecal13",
                "SymbolDecal14",
                "SymbolDecal15",
                "SymbolDecal16",
                "SymbolDecal17",
                "SymbolDecal18",
                "SymbolDecal19",
                "SymbolDecal2",
                "SymbolDecal20",
                "SymbolDecal21",
                "SymbolDecal22",
                "SymbolDecal23",
                "SymbolDecal24",
                "SymbolDecal3",
                "SymbolDecal4",
                "SymbolDecal5",
                "SymbolDecal6",
                "SymbolDecal7",
                "SymbolDecal8",
                "SymbolDecal9",
                "TargetingMod",
                "TeslaTurret",
                "theme",
                "thingId",
                "things",
                "timeings",
                "TorpTurret",
                "treeform",
                "Try to field # every # seconds",
                "type",
                "UArmor1x1",
                "UArmor1x1Angle",
                "UArmor1x1AngleBack",
                "UArmor1x1Notch1",
                "UArmor1x1Notch2",
                "UArmor1x1Spike",
                "UArmor1x2",
                "UArmor1x2Notch1",
                "UArmor1x2Notch2",
                "UArmor2x1",
                "UArmor2x2",
                "Unit",
                "unitsBuilt",
                "unitsCollide",
                "validBar",
                "VArmor1x1",
                "VArmor1x1Angle",
                "VArmor1x1Corner1",
                "VArmor1x1Corner2",
                "VArmor1x1Corner3",
                "VArmor1x1CornerBack",
                "VArmor1x1Curve",
                "VArmor1x1Hook",
                "VArmor1x2",
                "VArmor1x2Corner4",
                "VArmor1x2Curved",
                "VArmor1x2End",
                "VArmor1x2IBeam",
                "VArmor1x2SideBar",
                "VArmor1x2SideBarFilled",
                "VArmor2x1Curved",
                "VArmor2x2",
                "VArmor2x2Angle",
                "VArmor2x2Curve",
                "VArmor2x2Curved",
                "vel",
                "warpIn",
                "WavePullTurret",
                "WavePushTurret",
                "Weaker",
                "When #% of energy, @chargeTypes",
                "Wing1x1Angle",
                "Wing1x1Notch",
                "Wing1x1Round",
                "Wing1x2",
                "Wing2x1",
                "Wing2x2",
                "winningSide",
                "z"];
            exports_2("prot", prot);
        }
    };
});
System.register("istrolid_presskannukovh/1src_mtwist", [], function (exports_3, context_3) {
    "use strict";
    var MTwist;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            MTwist = class MTwist {
                constructor(seed) {
                    if (seed == null) {
                        seed = Math.random() * 4294967295;
                    }
                    this.mt = new Array(624);
                    this.mt[0] = seed >>> 0;
                    for (let mti = 1; mti < 624; mti++) {
                        this.mt[mti] = (MTwist.uint32mul(1812433253, this.mt[mti - 1] ^ (this.mt[mti - 1] >>> 30)) + mti) >>> 0;
                    }
                    this.mti = 623;
                    this.randomIntBetween = this.randomIntBetween.bind(this);
                    this.randomIntBelow = this.randomIntBelow.bind(this);
                    this.random = this.random.bind(this);
                    this.randomUint32 = this.randomUint32.bind(this);
                }
                static uint32mul(n1, n2) {
                    return ((((n1 & 0xffff0000) * n2) >>> 0) + (((n1 & 0x0000ffff) * n2) >>> 0)) >>> 0;
                }
                ;
                static test() {
                    let mtwist;
                    let seed = 1234567890;
                    let iterationFactor = 10000;
                    for (let i = 0; i < 1000; i++) {
                        mtwist = new MTwist(seed);
                        let iterations = Math.floor(mtwist.randomUint32() / iterationFactor);
                        for (let j = 0; j < iterations; j++) {
                            mtwist.randomUint32();
                        }
                        seed = mtwist.randomUint32();
                    }
                    return seed === 1240212512;
                }
                ;
                randomUint32() {
                    let i;
                    let y;
                    if (this.mti >= 624) {
                        for (i = 0; i < 227; i++) {
                            y = ((this.mt[i] & 0x80000000) | (this.mt[i + 1] & 0x7fffffff)) >>> 0;
                            this.mt[i] = (this.mt[i + 397] ^ (y >>> 1) ^ (y & 1 ? 0x9908b0df : 0)) >>> 0;
                        }
                        for (i = 227; i < 623; i++) {
                            y = ((this.mt[i] & 0x80000000) | (this.mt[i + 1] & 0x7fffffff)) >>> 0;
                            this.mt[i] = (this.mt[i - 227] ^ (y >>> 1) ^ (y & 1 ? 0x9908b0df : 0)) >>> 0;
                        }
                        y = ((this.mt[623] & 0x80000000) | (this.mt[0] & 0x7fffffff)) >>> 0;
                        this.mt[623] = (this.mt[396] ^ (y >>> 1) ^ (y & 1 ? 0x9908b0df : 0)) >>> 0;
                        this.mti = 0;
                    }
                    y = this.mt[this.mti++];
                    y = (y ^ (y >>> 11)) >>> 0;
                    y = (y ^ ((y << 7) & 0x9d2c5680)) >>> 0;
                    y = (y ^ ((y << 15) & 0xefc60000)) >>> 0;
                    y = (y ^ (y >>> 18)) >>> 0;
                    return y;
                }
                ;
                random() {
                    return this.randomUint32() / 4294967296;
                }
                ;
                randomIntBelow(maxPlusOne) {
                    let bitMask;
                    let bitsNeeded;
                    let int;
                    if (maxPlusOne < 1) {
                        throw "Upper bound must be greater than or equal to 1";
                    }
                    if (maxPlusOne === 1) {
                        return 0;
                    }
                    bitsNeeded = (maxPlusOne - 1).toString(2).length;
                    bitMask = (1 << bitsNeeded) - 1;
                    while (true) {
                        int = this.randomUint32() & bitMask;
                        if (int < maxPlusOne) {
                            return int;
                        }
                    }
                }
                ;
                randomIntBetween(inclusiveMin, inclusiveMax) {
                    return inclusiveMin + this.randomIntBelow(inclusiveMax - inclusiveMin + 1);
                }
                ;
            };
            exports_3("MTwist", MTwist);
        }
    };
});
System.register("istrolid_presskannukovh/993src_utils", ["istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/0dummy"], function (exports_4, context_4) {
    "use strict";
    var _6src_sim_1, _0dummy_1, Utils;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (_6src_sim_1_1) {
                _6src_sim_1 = _6src_sim_1_1;
            },
            function (_0dummy_1_1) {
                _0dummy_1 = _0dummy_1_1;
            }
        ],
        execute: function () {
            Utils = class Utils {
                static choose(list) {
                    return list[Math.floor(Math.random() * list.length)];
                }
                ;
                static chooseInt(a, b) {
                    return Math.floor(a + Math.random() * (b - a));
                }
                ;
                static deepEq(a, b) {
                    return JSON.stringify(a) === JSON.stringify(b);
                }
                ;
                static formatTime(t) {
                    let minutes, seconds;
                    t = Math.floor(t);
                    seconds = t % 60;
                    minutes = Math.floor(t / 60);
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }
                    return minutes + ":" + seconds;
                }
                ;
                static track(name, kargs) {
                    return;
                    let xhr;
                    if (!kargs) {
                        kargs = {};
                    }
                    console.log("track:", name, JSON.stringify(kargs));
                    if (window.location && window.location.href.indexOf("gamedev.html") !== -1) {
                        return;
                    }
                    xhr = new XMLHttpRequest();
                    xhr.open("POST", "https://andrelytics.com/track");
                    kargs.name = "game_" + name;
                    kargs.api_key = "pub_H4TvK8mxcRPextxxIHOhtstH7YRCAHM2";
                    kargs.version = _6src_sim_1.Sim.Instance.VERSION + "." + _6src_sim_1.Sim.Instance.MINOR_VERSION;
                    return xhr.send(JSON.stringify(kargs));
                }
                ;
                static after(ms, fn) {
                    return setTimeout(fn, ms);
                }
                ;
                static doAfter(ms, fn) {
                    return setTimeout(fn, ms);
                }
                ;
                static now() {
                    let n, ref, s;
                    if (typeof process !== "undefined" && process !== null) {
                        ref = process.hrtime();
                        s = ref[0];
                        n = ref[1];
                        return (s * 1000000 + n / 1000) / 1000;
                    }
                    else {
                        return performance.now();
                    }
                }
                ;
                static ab2str(buf) {
                    let bufView, i, j, ref, str;
                    str = "";
                    bufView = new Uint8Array(buf);
                    for (i = j = 0, ref = bufView.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        str += String.fromCharCode(bufView[i]);
                    }
                    return str;
                }
                ;
                static str2ab(str) {
                    let buf, bufView, i, j, ref;
                    buf = new ArrayBuffer(str.length);
                    bufView = new Uint8Array(buf);
                    for (i = j = 0, ref = str.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        bufView[i] = str.charCodeAt(i);
                    }
                    return buf;
                }
                ;
                static dv2str(dv) {
                    let i, j, ref, str;
                    str = "";
                    for (i = j = 0, ref = dv.byteLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        str += String.fromCharCode(dv.getUint8(i));
                    }
                    return str;
                }
                ;
                static str2dv(str) {
                    return new DataView(Utils.str2ab(str));
                }
                ;
                static strBuff(buf) {
                    let j, len, n, str, u8;
                    str = "";
                    u8 = new Uint8Array(buf);
                    for (j = 0, len = u8.length; j < len; j++) {
                        n = u8[j];
                        str += n + " ";
                    }
                    return str;
                }
                ;
                static randColor(a) {
                    return [Math.floor(a + (255 - a) * Math.random()), Math.floor(a + (255 - a) * Math.random()), Math.floor(a + (255 - a) * Math.random()), 255];
                }
                ;
                static add(frames, n) {
                    let sec;
                    sec = Math.floor(Date.now() / 1000);
                    if (frames[sec] != null) {
                        return frames[sec] += n;
                    }
                    else {
                        return frames[sec] = n;
                    }
                }
                ;
                static rotl(n, s) {
                    return n << s | n >>> 32 - s;
                }
                ;
                static tohex(i) {
                    for (let h = "", s = 28;; s -= 4) {
                        h += (i >>> s & 0xf).toString(16);
                        if (!s)
                            return h;
                    }
                }
                ;
                static sha1(msg) {
                    let fcc = String.fromCharCode;
                    let H0 = 0x67452301, H1 = 0xEFCDAB89, H2 = 0x98BADCFE, H3 = 0x10325476, H4 = 0xC3D2E1F0, M = 0x0ffffffff;
                    let i, t, W = new Array(80);
                    let ml = msg.length;
                    let wa = [];
                    msg += fcc(0x80);
                    while (msg.length % 4)
                        msg += fcc(0);
                    for (i = 0; i < msg.length; i += 4)
                        wa.push(msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3));
                    while (wa.length % 16 != 14)
                        wa.push(0);
                    wa.push(ml >>> 29);
                    wa.push((ml << 3) & M);
                    for (let bo = 0; bo < wa.length; bo += 16) {
                        for (i = 0; i < 16; i++)
                            W[i] = wa[bo + i];
                        for (i = 16; i <= 79; i++)
                            W[i] = Utils.rotl(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
                        let A = H0, B = H1, C = H2, D = H3, E = H4;
                        for (i = 0; i <= 19; i++) {
                            t = (Utils.rotl(A, 5) + (B & C | ~B & D) + E + W[i] + 0x5A827999) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
                        }
                        for (i = 20; i <= 39; i++) {
                            t = (Utils.rotl(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
                        }
                        for (i = 40; i <= 59; i++) {
                            t = (Utils.rotl(A, 5) + (B & C | B & D | C & D) + E + W[i] + 0x8F1BBCDC) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
                        }
                        for (i = 60; i <= 79; i++) {
                            t = (Utils.rotl(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
                        }
                        H0 = H0 + A & M;
                        H1 = H1 + B & M;
                        H2 = H2 + C & M;
                        H3 = H3 + D & M;
                        H4 = H4 + E & M;
                    }
                    return Utils.tohex(H0) + Utils.tohex(H1) + Utils.tohex(H2) + Utils.tohex(H3) + Utils.tohex(H4);
                }
                ;
                static last(array) {
                    return array[array.length - 1];
                }
                ;
                fpsAdd(n) {
                    if (n == null) {
                        n = 1;
                    }
                    return this.stats.add(this.stats.fps, n);
                }
                ;
                netAdd(n) {
                    if (n == null) {
                        n = 1;
                    }
                    return this.stats.add(this.stats.net, n);
                }
                ;
                simAdd(n) {
                    if (n == null) {
                        n = 1;
                    }
                    return this.stats.add(this.stats.Sim, n);
                }
                ;
                draw() {
                    if (!_0dummy_1.control.perf) {
                        return;
                    }
                    this.stats.drawFrames(this.stats.fps, 10, 60, 160);
                    this.stats.drawFrames(this.stats.Sim, 1, 16, 320);
                    return this.stats.drawFrames(this.stats.net, 1024 * 10, 1024, 720);
                }
                ;
                drawFrames(frames, div, max, yadj) {
                    let color, j, nFrames, results, sec, sx, sy, x, y;
                    sec = Math.floor(Date.now() / 1000);
                    results = [];
                    for (x = j = 0; j < 31; x = ++j) {
                        sx = -x * 16 + window.innerWidth - 20;
                        sy = window.innerHeight - yadj;
                        nFrames = frames[sec - 30 + x] || 0;
                        color = [255, 255, 255, 100];
                        results.push((function () {
                            let k, ref, results1;
                            results1 = [];
                            for (y = k = 0, ref = Math.ceil(nFrames / div); 0 <= ref ? k < ref : k > ref; y = 0 <= ref ? ++k : --k) {
                                results1.push(_0dummy_1.baseAtlas.drawSprite("parts/sel1x1.png", [sx, sy - y * 16], [.5, .5], 0, color));
                            }
                            return results1;
                        })());
                    }
                    return results;
                }
                ;
            };
            exports_4("Utils", Utils);
        }
    };
});
System.register("server", ["istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/993src_utils"], function (exports_5, context_5) {
    "use strict";
    var _6src_sim_2, _993src_utils_1, ws, istrolid, allowedCmds, Server, server;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (_6src_sim_2_1) {
                _6src_sim_2 = _6src_sim_2_1;
            },
            function (_993src_utils_1_1) {
                _993src_utils_1 = _993src_utils_1_1;
            }
        ],
        execute: function () {
            ws = require("ws");
            require("./fix");
            istrolid = require("./istrolid.js");
            allowedCmds = [
                "playerJoin",
                "alpha",
                "mouseMove",
                "playerSelected",
                "setRallyPoint",
                "buildRq",
                "stopOrder",
                "holdPositionOrder",
                "followOrder",
                "selfDestructOrder",
                "moveOrder",
                "configGame",
                "startGame",
                "addAi",
                "switchSide",
                "kickPlayer",
                "surrender"
            ];
            Server = class Server {
                constructor() {
                    this.wss = new ws.Server({
                        port: 5053,
                        perMessageDeflateOptions: {
                            chunkSize: 256,
                            memLevel: 9,
                            level: 5
                        },
                        zlibInflateOptions: {
                            chunkSize: 256
                        },
                        clientNoContextTakeover: true,
                        serverNoContextTakeover: true,
                        serverMaxWindowBits: 10,
                        concurrencyLimit: 5,
                        threshold: 512
                    });
                    this.lastInfoTime = 0;
                    this.config = require("./config.json");
                    this.connectToRoot();
                    this.wss.on("connection", function (ws, req) {
                        console.log("connection from", req.headers["x-forwarded-for"]);
                        let id = req.headers["sec-websocket-key"];
                        ws.on("message", function (msg) {
                            let packet = new DataView(new Uint8Array(msg).buffer);
                            let data = _6src_sim_2.Sim.Instance.zJson.loadDv(packet);
                            if (data[0] === "playerJoin") {
                                let player = _6src_sim_2.Sim.Instance.playerJoin(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
                                player.ws = ws;
                                _6src_sim_2.Sim.Instance.players[id] = player;
                                _6src_sim_2.Sim.Instance.clearNetState();
                            }
                            else if (allowedCmds.includes(data[0])) {
                                _6src_sim_2.Sim.Instance[data[0]].apply(_6src_sim_2.Sim.Instance, [_6src_sim_2.Sim.Instance.Players[id], ...data.slice(1)]);
                            }
                        });
                        ws.on("close", function (e) {
                            if (_6src_sim_2.Sim.Instance.players[id]) {
                                _6src_sim_2.Sim.Instance.players[id].connected = false;
                                delete _6src_sim_2.Sim.Instance.players[id];
                            }
                        });
                    });
                    this.interval = setInterval(function () {
                        let rightNow = _993src_utils_1.Utils.now();
                        if (_6src_sim_2.Sim.Instance.lastSimInterval + 1000 / 16 + _6src_sim_2.Sim.Instance.cheatSimInterval <= rightNow) {
                            _6src_sim_2.Sim.Instance.lastSimInterval = rightNow;
                            if (!_6src_sim_2.Sim.Instance.paused) {
                                _6src_sim_2.Sim.Instance.simulate();
                            }
                            else {
                                _6src_sim_2.Sim.Instance.startingSim();
                            }
                            let packet = _6src_sim_2.Sim.Instance.send();
                            Server.Instance.wss.clients.forEach((client) => {
                                if (client.readyState === WebSocket.OPEN) {
                                    client.send(packet);
                                }
                            });
                        }
                        if (rightNow - Server.Instance.lastInfoTime > 15000) {
                            Server.Instance.sendInfo();
                            Server.Instance.lastInfoTime = rightNow;
                        }
                    }, 17);
                }
                static get Instance() {
                    return this._instance || (this._instance = new this());
                }
                send(player, data) {
                    let packet = _6src_sim_2.Sim.Instance.zJson.dumpDv(data);
                    let client = player.ws;
                    if (client && client.readyState === WebSocket.OPEN) {
                        client.send(packet);
                    }
                }
                ;
                sendToRoot(data) {
                    this.rootsendData(data);
                }
                ;
                stop() {
                    console.log("stopping server");
                    this.wss.close();
                    clearInterval(this.interval);
                }
                ;
                say(msg) {
                    this.rootsendData(["message", {
                            text: msg,
                            channel: this.config.name,
                            color: "FFFFFF",
                            name: "Avama",
                            server: true
                        }]);
                }
                ;
                connectToRoot() {
                    this.root = new ws(this.config.root_addr);
                    this.root.on("open", function () {
                        console.log("connected to root");
                        Server.Instance.sendInfo();
                        let account_info = {
                            email: "avamander@gmail.com",
                            fingerprint: "299ad9fc522ffa86eb43e32ba5230aaf",
                            steamid: "STEAM_0:0:52998691",
                            token: "9703d921791bad0571f0c78cfa62284136dc51f8"
                        };
                        Server.Instance.rootsendData(["authSignIn", account_info]);
                        Server.Instance.rootsendData(["registerBot"]);
                        Server.Instance.lastInfoTime = _993src_utils_1.Utils.now();
                    });
                    this.root.on("message", function (msg) {
                        let data = JSON.parse(msg);
                        switch (data[0]) {
                            case "message":
                                if (data[1].channel === this.config.name && data[1].text.startsWith("!")) {
                                    let p = _6src_sim_2.Sim.Instance.players.filter(function (p) {
                                        return p.name === data[1].name;
                                    })[0];
                                    if (p != null) {
                                        let cmds = data[1].text.slice(1).split(" ");
                                        console.log("Command issued, ", cmds);
                                        return;
                                    }
                                }
                                break;
                            case "serversStats":
                                console.log("Server stats received");
                                break;
                            case "servers":
                                console.log("Servers received");
                                break;
                            case "serversDiff":
                                console.log("Servers diff received");
                                break;
                            case "players":
                                if (_6src_sim_2.Sim.Instance.chat === undefined) {
                                    _6src_sim_2.Sim.Instance.chat = { players: {} };
                                }
                                _6src_sim_2.Sim.Instance.chat.players = data[1];
                                console.log("Players received!");
                                break;
                            case "playersDiff":
                                for (let name in data[1]) {
                                    let player = data[1][name];
                                    if (_6src_sim_2.Sim.Instance.chat === undefined) {
                                        console.log("Player diff without sim.chat");
                                        _6src_sim_2.Sim.Instance.chat = { players: {} };
                                    }
                                    if (player === null) {
                                        delete _6src_sim_2.Sim.Instance.chat.players[name];
                                    }
                                    else {
                                        if (_6src_sim_2.Sim.Instance.chat.players[name] == null) {
                                            _6src_sim_2.Sim.Instance.chat.players[name] = {};
                                        }
                                        for (let k in player) {
                                            _6src_sim_2.Sim.Instance.chat.players[name][k] = player[k];
                                        }
                                    }
                                }
                                console.log("Player diff received");
                                break;
                            case "messageLog":
                                console.log("Message log received");
                                break;
                            case "authError":
                                console.log("Auth error received");
                                break;
                            case "authPasswordChanged":
                                console.log("Password changed received");
                                break;
                            case "login":
                                console.log("Login received");
                                break;
                            case "windowClose":
                                console.log("Window close received");
                                break;
                            case "modInfo":
                                console.log("modInfo received", data);
                                break;
                            case "modLog":
                                console.log("modLog received", data);
                                break;
                            case "gameKey":
                                console.log("Game key received", data[1]);
                                break;
                            default:
                                console.log("Unknown message", data);
                                break;
                        }
                    });
                    this.root.on("close", function () {
                        console.log("cannot connect to root, retrying");
                        setTimeout(this.connectToRoot, 5000);
                    });
                    this.root.on("error", function (e) {
                        console.log("connection to root failed", e);
                    });
                }
                ;
                rootsendData(data) {
                    if (this.root.readyState === WebSocket.OPEN) {
                        this.root.send(JSON.stringify(data));
                    }
                }
                ;
                sendInfo() {
                    let info = {
                        name: this.config.name,
                        address: "wss://" + this.config.addr + ":" + this.config.port,
                        observers: _6src_sim_2.Sim.Instance.players.filter(player => player.connected && !player.ai).length,
                        players: _6src_sim_2.Sim.Instance.players.filter(player => player.connected).map(function (player) {
                            return {
                                name: player.name,
                                side: player.side,
                                ai: false
                            };
                        }),
                        type: _6src_sim_2.Sim.Instance.serverType,
                        version: _6src_sim_2.Sim.Instance.VERSION,
                        state: _6src_sim_2.Sim.Instance.state
                    };
                    this.rootsendData(["setServer", info]);
                }
                ;
            };
            exports_5("Server", Server);
            server = Server.Instance;
            _6src_sim_2.Sim.Instance.cheatSimInterval = -12;
            _6src_sim_2.Sim.Instance.lastSimInterval = 0;
        }
    };
});
System.register("istrolid_presskannukovh/992src_colors", [], function (exports_6, context_6) {
    "use strict";
    var Colors;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            Colors = class Colors {
                constructor() {
                    for (let j = 0; j < Colors.niceHex.length; j++) {
                        this.nice.push(Colors.fromHex(Colors.niceHex[j]));
                    }
                }
                static validate(a) {
                    let b, i, j, ref;
                    b = [0, 0, 0, 0];
                    for (i = j = 0; j < 4; i = ++j) {
                        if (Number.isInteger(a[i]) && (0 <= (ref = a[i]) && ref < 256)) {
                            b[i] = Math.floor(a[i]);
                        }
                    }
                    return b;
                }
                ;
                static brightness(c) {
                    return (c[0] + c[1] + c[2]) / 3;
                }
                ;
                static copy(c) {
                    return [c[0], c[1], c[2], c[3]];
                }
                ;
                static blackOrWhite(c) {
                    if ((c[0] + c[1] + c[2]) / 3 > 128) {
                        return [0, 0, 0, 255];
                    }
                    else {
                        return [255, 255, 255, 255];
                    }
                }
                ;
                static hue2rgb(p, q, t) {
                    if (t < 0) {
                        t += 1;
                    }
                    if (t > 1) {
                        t -= 1;
                    }
                    if (t < 1 / 6) {
                        return p + (q - p) * 6 * t;
                    }
                    if (t < 1 / 2) {
                        return q;
                    }
                    if (t < 2 / 3) {
                        return p + (q - p) * (2 / 3 - t) * 6;
                    }
                    return p;
                }
                ;
                static hsl2rgb(c) {
                    let a, b, g, h, l, p, q, r, s;
                    h = c[0];
                    s = c[1];
                    l = c[2];
                    a = c[3];
                    if (s === 0) {
                        r = g = b = l;
                    }
                    else {
                        q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                        p = 2 * l - q;
                        r = Colors.hue2rgb(p, q, h + 1 / 3);
                        g = Colors.hue2rgb(p, q, h);
                        b = Colors.hue2rgb(p, q, h - 1 / 3);
                    }
                    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
                }
                ;
                static rgb2hsl(c) {
                    let a, b, d, g, h, l, max, min, r, s;
                    r = c[0];
                    g = c[1];
                    b = c[2];
                    a = c[3];
                    r /= 255;
                    g /= 255;
                    b /= 255;
                    max = Math.max(r, g, b);
                    min = Math.min(r, g, b);
                    l = (max + min) / 2;
                    if (max === min) {
                        h = s = 0;
                    }
                    else {
                        d = max - min;
                        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                        switch (max) {
                            case r:
                                h = (g - b) / d + (g < b ? 6 : 0);
                                break;
                            case g:
                                h = (b - r) / d + 2;
                                break;
                            case b:
                                h = (r - g) / d + 4;
                        }
                        h /= 6;
                    }
                    return [h, s, l, a];
                }
                ;
                static fromHex(c) {
                    let a, b, g, r;
                    r = parseInt(c.slice(0, 2), 16);
                    g = parseInt(c.slice(2, 4), 16);
                    b = parseInt(c.slice(4, 6), 16);
                    a = 255;
                    return Colors.validate([r, g, b, a]);
                }
                ;
                static toHex(c) {
                    return Colors.chr(c[0]) + Colors.chr(c[1]) + Colors.chr(c[2]);
                }
                ;
                static chr(i) {
                    if (!i) {
                        return "00";
                    }
                    let b = i.toString(16);
                    if (b.length === 1) {
                        b = "0" + b;
                    }
                    return b;
                }
                ;
                static cssRgba(c) {
                    return "rgba(" + (c[0] || 0) + "," + (c[1] || 0) + "," + (c[2] || 0) + "," + (c[3] || 255) + ")";
                }
                ;
            };
            Colors.niceHex = [
                "D24D57",
                "F22613",
                "D91E18",
                "96281B",
                "EF4836",
                "D64541",
                "C0392B",
                "CF000F",
                "E74C3C",
                "DB0A5B",
                "F64747",
                "F1A9A0",
                "D2527F",
                "E08283",
                "F62459",
                "E26A6A",
                "DCC6E0",
                "663399",
                "674172",
                "AEA8D3",
                "913D88",
                "9A12B3",
                "BF55EC",
                "BE90D4",
                "8E44AD",
                "9B59B6",
                "446CB3",
                "E4F1FE",
                "4183D7",
                "59ABE3",
                "81CFE0",
                "52B3D9",
                "C5EFF7",
                "22A7F0",
                "3498DB",
                "2C3E50",
                "19B5FE",
                "336E7B",
                "22313F",
                "6BB9F0",
                "1E8BC3",
                "3A539B",
                "34495E",
                "67809F",
                "2574A9",
                "1F3A93",
                "89C4F4",
                "4B77BE",
                "5C97BF",
                "4ECDC4",
                "A2DED0",
                "87D37C",
                "90C695",
                "26A65B",
                "03C9A9",
                "68C3A3",
                "65C6BB",
                "1BBC9B",
                "1BA39C",
                "66CC99",
                "BADA55",
                "36D7B7",
                "C8F7C5",
                "86E2D5",
                "2ECC71",
                "16A085",
                "3FC380",
                "019875",
                "03A678",
                "4DAF7C",
                "2ABB9B",
                "00B16A",
                "1E824C",
                "049372",
                "26C281",
                "F5D76E",
                "F7CA18",
                "F4D03F",
                "e9d460",
                "FDE3A7",
                "F89406",
                "EB9532",
                "E87E04",
                "F4B350",
                "F2784B",
                "EB974E",
                "F5AB35",
                "D35400",
                "F39C12",
                "F9690E",
                "F9BF3B",
                "F27935",
                "E67E22",
                "ECECEC",
                "6C7A89",
                "D2D7D3",
                "EEEEEE",
                "BDC3C7",
                "ECF0F1",
                "95A5A6",
                "DADFE1",
                "ABB7B7",
                "F2F1EF",
                "BFBFBF"
            ];
            exports_6("Colors", Colors);
        }
    };
});
System.register("istrolid_presskannukovh/991src_collision", ["istrolid_presskannukovh/4src_maths"], function (exports_7, context_7) {
    "use strict";
    var _4src_maths_1, CollisionUtils;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (_4src_maths_1_1) {
                _4src_maths_1 = _4src_maths_1_1;
            }
        ],
        execute: function () {
            CollisionUtils = class CollisionUtils {
                static furthestPoint(points, d) {
                    let i, len, maxProduct;
                    let p;
                    let product;
                    maxProduct = -2e308;
                    let rst;
                    for (i = 0, len = points.length; i < len; i++) {
                        p = points[i];
                        product = _4src_maths_1.v2.dot(d, p);
                        if (product > maxProduct) {
                            rst = p;
                            maxProduct = product;
                        }
                    }
                    return rst;
                }
                ;
                static closestPointOnLine(a, b, p) {
                    let ap = new Float64Array([p[0] - a[0], p[1] - a[1]]);
                    let ab = new Float64Array([b[0] - a[0], b[1] - a[1]]);
                    let d = _4src_maths_1.v2.dot(ab, ab);
                    if (d === 0) {
                        return a;
                    }
                    let l = _4src_maths_1.v2.dot(ap, ab);
                    let t = l / d;
                    t = Math.min(Math.max(t, 0), 1);
                    return _4src_maths_1.v2.add(_4src_maths_1.v2.scale(ab, t, null), a, null);
                }
                ;
                static closestPointToOrigin(a, b) {
                    return CollisionUtils.closestPointOnLine(a, b, new Float64Array([0, 0]));
                }
                ;
                static support(points1, points2, d) {
                    return new Float64Array([
                        CollisionUtils.furthestPoint(points1, d)[0] - CollisionUtils.furthestPoint(points2, _4src_maths_1.v2.neg(d, new Float64Array([0, 0])))[0],
                        CollisionUtils.furthestPoint(points1, d)[1] - CollisionUtils.furthestPoint(points2, _4src_maths_1.v2.neg(d, new Float64Array([0, 0])))[1]
                    ]);
                }
                ;
                static closestDistance(points1, points2) {
                    let _p, a, b, c, d, da, db, p;
                    d = _4src_maths_1.v2.create(null);
                    a = CollisionUtils.support(points1, points2, d);
                    _4src_maths_1.v2.neg(d, d);
                    b = CollisionUtils.support(points1, points2, d);
                    while (true) {
                        p = CollisionUtils.closestPointToOrigin(a, b);
                        if (p[0] === 0 && p[1] === 0) {
                            return 0;
                        }
                        if ((typeof _p !== "undefined" && _p !== null) && _4src_maths_1.v2.dot(p, p) >= _4src_maths_1.v2.dot(_p, _p)) {
                            da = _4src_maths_1.v2.dot(a, d);
                            db = _4src_maths_1.v2.dot(b, d);
                            return _4src_maths_1.v2.mag(_p) * Math.sign(da * db);
                        }
                        d = _4src_maths_1.v2.neg(p, new Float64Array([0, 0]));
                        c = CollisionUtils.support(points1, points2, d);
                        if (_4src_maths_1.v2.dot(a, a) < _4src_maths_1.v2.dot(b, b)) {
                            b = c;
                        }
                        else {
                            a = c;
                        }
                        _p = p;
                    }
                }
                ;
                static closestPointOnPolygon(point, points) {
                    let closest, dist, i, j, k, minDist, p, ref;
                    if (points.length === 1) {
                        return points[0];
                    }
                    minDist = 2e308;
                    closest = null;
                    for (i = k = 0, ref = points.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
                        j = (i + 1) % points.length;
                        p = CollisionUtils.closestPointOnLine(points[i], points[j], point);
                        dist = _4src_maths_1.v2.distanceSq(p, point);
                        if (dist < minDist) {
                            closest = p;
                            minDist = dist;
                        }
                    }
                    return closest;
                }
                ;
            };
            exports_7("CollisionUtils", CollisionUtils);
        }
    };
});
System.register("istrolid_presskannukovh/96src_parts", ["istrolid_presskannukovh/94src_things", "istrolid_presskannukovh/95src_unit", "istrolid_presskannukovh/4src_maths", "istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/0dummy", "istrolid_presskannukovh/991src_collision"], function (exports_8, context_8) {
    "use strict";
    var _94src_things_1, _95src_unit_1, _4src_maths_2, _6src_sim_3, _0dummy_2, _991src_collision_1, Mount360, Mount270, Mount180, Mount90, Mount30, Mount360Micro, Mount10Range, Mount10Demi, DroneBody, Pad2x2, HArmor, HArmor2x2, HArmor1x2, HArmor1x1, HArmor2x1, HArmor1x1Angle, HArmor1x1AngleBack, HArmor2x2Angle, HArmor2x2AngleBack, HArmor2x2Front1, HArmor2x2Front2, HArmor1x2Font1, HArmor1x2Front2, HArmor2x2Back1, HArmor2x2Back2, HArmor1x2Back1, HArmor1x2Back2, HArmor2x2Curved, HArmor2x1Curved, HArmor1x2Curved, ShadowArmor, ShadowNArmor2x2Angle, ShadowNArmor2x2, ShadowNArmor2x1, ShadowNArmor1x1, ShadowNArmor1x2, ShadowNArmor2x2Curve, ShadowNArmor1x1Angle, ShadowNArmor1x1Corner, ShadowNArmor1x1CornerInner, ShadowNArmor2x1Curved, ShadowNArmor1x2Curved, ShadowNArmor1x2Font1, UArmor, UArmor1x1, UArmor1x2, UArmor2x1, UArmor1x1Angle, UArmor1x1AngleBack, UArmor2x2, UArmor1x2Notch1, UArmor1x2Notch2, UArmor1x1Notch1, UArmor1x1Notch2, UArmor1x1Spike, VArmor, VArmor1x2SideBar, VArmor1x2SideBarFilled, VArmor1x2IBeam, VArmor1x2Corner4, VArmor1x2End, VArmor1x1Corner1, VArmor1x1Corner2, VArmor1x1Corner3, VArmor1x1Hook, VArmor1x1CornerBack, VArmor2x2, VArmor1x2, VArmor1x1, VArmor1x1Angle, VArmor2x2Angle, VArmor2x2Curve, VArmor1x1Curve, VArmor2x1Curved, VArmor1x2Curved, VArmor2x2Curved, VShadowArmor, VShadowNArmor2x2Angle, VShadowNArmor2x2, VShadowNArmor2x1, VShadowNArmor1x1, VShadowNArmor1x2, VShadowNArmor2x2Curve, VShadowNArmor1x1Angle, VShadowNArmor1x1Corner, VShadowNArmor1x1CornerInner, Reactor2x2, Reactor1x2, Reactor2x1, Reactor1x1, Solar1x1, Solar2x2, Solar3x3, EnergyTransfer, StasisField, SupercapitalBridge, ShieldGen2x2, ShieldGen2x1, ShieldGen1x1, CloakGenerator, Battery, Battery1x2, Battery1x1, Battery2x1, Battery2x2, Engine05, Engine09, Engine02, Engine01, Engine08, Engine04, Engine043Long, Engine06, Engine03, Engine03Long, Engine07, JumpEngine, Wing, Wing2x2, Wing1x2, Wing2x1, Wing1x1Angle, Wing1x1Round, Wing1x1Notch, PDLaserBullet, PDTurret, HeavyPDBullet, HeavyPDTurret, RingBullet, RingTurret, RamBullet, RamTurret, TorpBullet, TorpTurret, MissileBullet, MissileTurret, ArtilleryExplosion, ArtilleryBullet, ArtilleryTurret, SidewinderBullet, SidewinderTurret, PlasmaBullet, PlasmaTurret, LightPlasmaBullet, LightPlasmaTurret, LightBeam, LightBeamTurret, HeavyBeam, HeavyBeamTurret, FlackExplosion, FlackBullet, FlackTurret, SniperLaser, SniperGun, EMPOrb, EMPGun, EMPOrb2, EMPGun2, BombExplosion, Bomb, BombGun, AutoBullet, AutoTurret, ShotgunBullet, Shotgun, MachineBullet, MachineGun, TeslaBolt, TeslaTurret, WavePullArch, WavePullTurret, WavePushArch, WavePushTurret, FlameBulletGhost, FlameBullet, FlameTurret, AOEWarhead, EMPWarhead, FlameWarhead, ShapedWarhead, ModPart, TargetingMod, DamageMod, ReloaderMod, BulletSpeedMod, DampenerMod, AiPart, Ai1, OverKillAi, Ai3, Ai4, SymbolDecal1, SymbolDecal2, SymbolDecal3, SymbolDecal4, SymbolDecal5, SymbolDecal6, SymbolDecal7, SymbolDecal8, SymbolDecal9, SymbolDecal10, SymbolDecal11, SymbolDecal12, SymbolDecal13, SymbolDecal14, SymbolDecal15, SymbolDecal16, SymbolDecal17, SymbolDecal18, SymbolDecal19, SymbolDecal20, SymbolDecal21, SymbolDecal22, SymbolDecal23, SymbolDecal24, SymbolDecal25, SymbolDecal26, SymbolDecal27, SymbolDecal28, SymbolDecal29, SymbolDecal30, SymbolDecal31, SymbolDecal32, SymbolDecal33, SymbolDecal34, SymbolDecal35, SymbolDecal36, SymbolDecal37, SymbolDecal38, SymbolDecal39, SymbolDecal40, Stripe1x1, Stripe1x1Corner, Stripe1x2, Stripe2x1, Stripe2x2, Stripe2x2Corner, Stripe2x2Round, StripeDouble2x1, StripeDouble2x2, Stripe1x1Slash, Stripe1x1SlashInside, Stripe2x2Slash, Stripe2x2End, Stripe1x1Fill1, Stripe1x1Fill2, Stripe1x1Fill3, Stripe1x1Fill4, Stripe1x1Fill5, Stripe1x1Fill6, LetterA, LetterB, LetterC, LetterD, LetterE, LetterF, LetterG, LetterH, LetterI, LetterJ, LetterK, LetterL, LetterM, LetterN, LetterO, LetterP, LetterQ, LetterR, LetterS, LetterT, LetterU, LetterV, LetterW, LetterX, LetterY, LetterZ, LetterPound, LetterDot, Letter0, Letter1, Letter2, Letter3, Letter4, Letter5, Letter6, Letter7, Letter8, Letter9, Faction, Faction1, Faction2, Faction3, Faction4, Faction5, Faction6, Faction7, PartUtils, BattleCannonBullet, BattleCannon, Flag, NeedleGunBullet, NeedleGun, ModProjector;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (_94src_things_1_1) {
                _94src_things_1 = _94src_things_1_1;
            },
            function (_95src_unit_1_1) {
                _95src_unit_1 = _95src_unit_1_1;
            },
            function (_4src_maths_2_1) {
                _4src_maths_2 = _4src_maths_2_1;
            },
            function (_6src_sim_3_1) {
                _6src_sim_3 = _6src_sim_3_1;
            },
            function (_0dummy_2_1) {
                _0dummy_2 = _0dummy_2_1;
            },
            function (_991src_collision_1_1) {
                _991src_collision_1 = _991src_collision_1_1;
            }
        ],
        execute: function () {
            Mount360 = class Mount360 extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "360 Turret Mount";
                    this.desc = "Use this to mount weapons.";
                    this.hp = 10;
                    this.cost = 36;
                    this.image = "mount360.png";
                    this.mount = true;
                    this.arc = 360;
                    this.attach = true;
                    this.size = [2, 2];
                    this.mass = 30;
                    this.stripe = true;
                    this.tab = "weapons";
                    this.canRotate = false;
                }
            };
            exports_8("Mount360", Mount360);
            Mount270 = class Mount270 extends Mount360 {
                constructor() {
                    super();
                    this.name = "270 Turret Mount";
                    this.desc = "Use this to mount weapons.";
                    this.hp = 20;
                    this.cost = 27;
                    this.image = "mount300.png";
                    this.arc = 270;
                    this.size = [2, 2];
                    this.mass = 10;
                }
            };
            exports_8("Mount270", Mount270);
            Mount180 = class Mount180 extends Mount360 {
                constructor() {
                    super();
                    this.name = "200 Turret Mount";
                    this.desc = "Use this to mount weapons.";
                    this.hp = 20;
                    this.cost = 15;
                    this.image = "mount180.png";
                    this.arc = 200;
                    this.size = [2, 2];
                    this.mass = 10;
                }
            };
            exports_8("Mount180", Mount180);
            Mount90 = class Mount90 extends Mount360 {
                constructor() {
                    super();
                    this.name = "90 Turret Mount";
                    this.desc = "Use this to mount weapons.";
                    this.hp = 10;
                    this.cost = 9;
                    this.image = "mount90.png";
                    this.arc = 90;
                    this.size = [2, 2];
                    this.mass = 5;
                }
            };
            exports_8("Mount90", Mount90);
            Mount30 = class Mount30 extends Mount360 {
                constructor() {
                    super();
                    this.name = "30 Turret Mount";
                    this.desc = "Use this to mount weapons.";
                    this.hp = 5;
                    this.cost = 3;
                    this.image = "mount30.png";
                    this.arc = 30;
                    this.size = [2, 2];
                    this.mass = 5;
                }
            };
            exports_8("Mount30", Mount30);
            Mount360Micro = class Mount360Micro extends Mount360 {
                constructor() {
                    super();
                    this.name = "Micro 360 Turret Mount";
                    this.desc = "A cheaper lighter 360 mount that has only 66% of the range of mounted weapons.";
                    this.hp = 20;
                    this.cost = 15;
                    this.image = "mount360short.png";
                    this.mount = true;
                    this.arc = 360;
                    this.attach = true;
                    this.size = [2, 2];
                    this.mass = 5;
                    this.rangeBuffMul = .66;
                }
                initTurret(turret) {
                    return turret.range *= this.rangeBuffMul;
                }
            };
            exports_8("Mount360Micro", Mount360Micro);
            Mount10Range = class Mount10Range extends Mount360 {
                constructor() {
                    super();
                    this.name = "Spinal Turret Mount";
                    this.desc = "A narrow angle forward mount that grants a large flat range bonus range.";
                    this.hp = 5;
                    this.cost = 20;
                    this.image = "mount10range.png";
                    this.mount = true;
                    this.arc = 20;
                    this.attach = true;
                    this.size = [2, 4];
                    this.mass = 40;
                    this.weaponRangeFlat = 450;
                }
                initTurret(turret) {
                    return turret.weaponRangeFlat += this.weaponRangeFlat;
                }
                ;
            };
            exports_8("Mount10Range", Mount10Range);
            Mount10Demi = class Mount10Demi extends Mount360 {
                constructor() {
                    super();
                    this.name = "Demispinal Turret Mount";
                    this.desc = "A smaller narrow angle forward mount that grants a moderate flat range bonus.";
                    this.hp = 5;
                    this.cost = 7;
                    this.image = "mount10wide.png";
                    this.mount = true;
                    this.arc = 20;
                    this.attach = true;
                    this.size = [4, 2];
                    this.mass = 15;
                    this.weaponRangeFlat = 250;
                }
                initTurret(turret) {
                    return turret.weaponRangeFlat += this.weaponRangeFlat;
                }
                ;
            };
            exports_8("Mount10Demi", Mount10Demi);
            DroneBody = class DroneBody extends Mount360 {
                constructor() {
                    super();
                    this.name = "DroneBody";
                    this.desc = "An independent drone with the mounted weapon.";
                    this.hp = 5;
                    this.cost = 15;
                    this.image = "droneBody.png";
                    this.mount = true;
                    this.arc = 360;
                    this.attach = false;
                    this.solid = false;
                    this.size = [4, 4];
                    this.mass = 10;
                    this.stripe = false;
                    this.disable = true;
                }
            };
            exports_8("DroneBody", DroneBody);
            Pad2x2 = class Pad2x2 extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Fighter pad";
                    this.desc = "Allows fighters to land and repair.";
                    this.hp = 10;
                    this.cost = 36;
                    this.image = "pad2x2.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.mass = 30;
                    this.tab = "armor";
                    this.disable = true;
                }
            };
            exports_8("Pad2x2", Pad2x2);
            HArmor = class HArmor extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.desc = "Adds HP but also adds a lot of weight, making a ship slower.";
                    this.canShowDamage = true;
                    this.paintable = true;
                    this.tab = "armor1";
                }
            };
            exports_8("HArmor", HArmor);
            HArmor2x2 = class HArmor2x2 extends HArmor {
                constructor() {
                    super();
                    this.hp = 64;
                    this.cost = 8;
                    this.image = "HArmor2x2.png";
                    this.size = [2, 2];
                    this.mass = 40;
                }
            };
            exports_8("HArmor2x2", HArmor2x2);
            HArmor1x2 = class HArmor1x2 extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 32;
                    this.cost = 4;
                    this.image = "HArmor1x2.png";
                    this.size = [1, 2];
                    this.mass = 20;
                }
            };
            exports_8("HArmor1x2", HArmor1x2);
            HArmor1x1 = class HArmor1x1 extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 16;
                    this.cost = 2;
                    this.image = "HArmor1x1.png";
                    this.size = [1, 1];
                    this.mass = 10;
                }
            };
            exports_8("HArmor1x1", HArmor1x1);
            HArmor2x1 = class HArmor2x1 extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 32;
                    this.cost = 4;
                    this.image = "HArmor2x1.png";
                    this.size = [2, 1];
                    this.mass = 20;
                }
            };
            exports_8("HArmor2x1", HArmor2x1);
            HArmor1x1Angle = class HArmor1x1Angle extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 8;
                    this.cost = 1;
                    this.image = "HArmor1x1Angle.png";
                    this.size = [1, 1];
                    this.mass = 5;
                }
            };
            exports_8("HArmor1x1Angle", HArmor1x1Angle);
            HArmor1x1AngleBack = class HArmor1x1AngleBack extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 8;
                    this.cost = 1;
                    this.image = "HArmor1x1AngleBack.png";
                    this.size = [1, 1];
                    this.mass = 5;
                }
            };
            exports_8("HArmor1x1AngleBack", HArmor1x1AngleBack);
            HArmor2x2Angle = class HArmor2x2Angle extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 64;
                    this.cost = 8;
                    this.image = "HArmor2x2Angle.png";
                    this.size = [2, 2];
                    this.mass = 40;
                }
            };
            exports_8("HArmor2x2Angle", HArmor2x2Angle);
            HArmor2x2AngleBack = class HArmor2x2AngleBack extends HArmor {
                constructor() {
                    super();
                    this.name = "Heavyweight Armor";
                    this.hp = 64;
                    this.cost = 8;
                    this.image = "HArmor2x2AngleBack.png";
                    this.size = [2, 2];
                    this.mass = 40;
                }
            };
            exports_8("HArmor2x2AngleBack", HArmor2x2AngleBack);
            HArmor2x2Front1 = class HArmor2x2Front1 extends HArmor {
                constructor() {
                    super();
                    this.hp = 56;
                    this.mass = 35;
                    this.cost = 7;
                    this.image = "HArmor2x2Front1.png";
                    this.size = [2, 2];
                }
            };
            exports_8("HArmor2x2Front1", HArmor2x2Front1);
            HArmor2x2Front2 = class HArmor2x2Front2 extends HArmor {
                constructor() {
                    super();
                    this.hp = 48;
                    this.mass = 30;
                    this.cost = 6;
                    this.image = "HArmor2x2Front2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("HArmor2x2Front2", HArmor2x2Front2);
            HArmor1x2Font1 = class HArmor1x2Font1 extends HArmor {
                constructor() {
                    super();
                    this.hp = 24;
                    this.mass = 15;
                    this.cost = 3;
                    this.image = "HArmor1x2Font1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("HArmor1x2Font1", HArmor1x2Font1);
            HArmor1x2Front2 = class HArmor1x2Front2 extends HArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "HArmor1x2Front2.png";
                    this.size = [2, 1];
                }
            };
            exports_8("HArmor1x2Front2", HArmor1x2Front2);
            HArmor2x2Back1 = class HArmor2x2Back1 extends HArmor {
                constructor() {
                    super();
                    this.hp = 56;
                    this.mass = 35;
                    this.cost = 7;
                    this.image = "HArmor2x2Back1.png";
                    this.size = [2, 2];
                }
            };
            exports_8("HArmor2x2Back1", HArmor2x2Back1);
            HArmor2x2Back2 = class HArmor2x2Back2 extends HArmor {
                constructor() {
                    super();
                    this.hp = 48;
                    this.mass = 30;
                    this.cost = 6;
                    this.image = "HArmor2x2Back2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("HArmor2x2Back2", HArmor2x2Back2);
            HArmor1x2Back1 = class HArmor1x2Back1 extends HArmor {
                constructor() {
                    super();
                    this.hp = 24;
                    this.mass = 15;
                    this.cost = 3;
                    this.image = "HArmor1x2Back1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("HArmor1x2Back1", HArmor1x2Back1);
            HArmor1x2Back2 = class HArmor1x2Back2 extends HArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "HArmor1x2Back2.png";
                    this.size = [2, 1];
                }
            };
            exports_8("HArmor1x2Back2", HArmor1x2Back2);
            HArmor2x2Curved = class HArmor2x2Curved extends HArmor {
                constructor() {
                    super();
                    this.hp = 64;
                    this.mass = 40;
                    this.cost = 8;
                    this.image = "HArmor2x2Curved.png";
                    this.size = [2, 2];
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("HArmor2x2Curved", HArmor2x2Curved);
            HArmor2x1Curved = class HArmor2x1Curved extends HArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "HArmor2x1Curved.png";
                    this.size = [2, 1];
                }
            };
            exports_8("HArmor2x1Curved", HArmor2x1Curved);
            HArmor1x2Curved = class HArmor1x2Curved extends HArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "HArmor1x2Curved.png";
                    this.size = [1, 2];
                }
            };
            exports_8("HArmor1x2Curved", HArmor1x2Curved);
            ShadowArmor = class ShadowArmor extends HArmor {
                constructor() {
                    super();
                    this.dlc = "Curves and Shadows";
                    this.northWest = true;
                    this.canShowDamage = false;
                }
            };
            exports_8("ShadowArmor", ShadowArmor);
            ShadowNArmor2x2Angle = class ShadowNArmor2x2Angle extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 64;
                    this.mass = 40;
                    this.cost = 8;
                    this.image = "ShadowNArmor2x2Angle.png";
                    this.size = [2, 2];
                }
            };
            exports_8("ShadowNArmor2x2Angle", ShadowNArmor2x2Angle);
            ShadowNArmor2x2 = class ShadowNArmor2x2 extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 64;
                    this.mass = 40;
                    this.cost = 8;
                    this.image = "ShadowNArmor2x2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("ShadowNArmor2x2", ShadowNArmor2x2);
            ShadowNArmor2x1 = class ShadowNArmor2x1 extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 32;
                    this.mass = 20;
                    this.cost = 4;
                    this.image = "ShadowNArmor2x1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("ShadowNArmor2x1", ShadowNArmor2x1);
            ShadowNArmor1x1 = class ShadowNArmor1x1 extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "ShadowNArmor1x1.png";
                    this.size = [1, 1];
                }
            };
            exports_8("ShadowNArmor1x1", ShadowNArmor1x1);
            ShadowNArmor1x2 = class ShadowNArmor1x2 extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 32;
                    this.mass = 20;
                    this.cost = 4;
                    this.image = "ShadowNArmor1x2.png";
                    this.size = [1, 2];
                }
            };
            exports_8("ShadowNArmor1x2", ShadowNArmor1x2);
            ShadowNArmor2x2Curve = class ShadowNArmor2x2Curve extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 64;
                    this.mass = 40;
                    this.cost = 8;
                    this.image = "ShadowNArmor2x2Curve.png";
                    this.size = [2, 2];
                }
            };
            exports_8("ShadowNArmor2x2Curve", ShadowNArmor2x2Curve);
            ShadowNArmor1x1Angle = class ShadowNArmor1x1Angle extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 8;
                    this.mass = 5;
                    this.cost = 1;
                    this.image = "ShadowNArmor1x1Angle.png";
                    this.size = [1, 1];
                }
            };
            exports_8("ShadowNArmor1x1Angle", ShadowNArmor1x1Angle);
            ShadowNArmor1x1Corner = class ShadowNArmor1x1Corner extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "ShadowNArmor1x1Corner.png";
                    this.size = [1, 1];
                }
            };
            exports_8("ShadowNArmor1x1Corner", ShadowNArmor1x1Corner);
            ShadowNArmor1x1CornerInner = class ShadowNArmor1x1CornerInner extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "ShadowNArmor1x1CornerInner.png";
                    this.size = [1, 1];
                }
            };
            exports_8("ShadowNArmor1x1CornerInner", ShadowNArmor1x1CornerInner);
            ShadowNArmor2x1Curved = class ShadowNArmor2x1Curved extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "ShadowNArmor2x1Curved.png";
                    this.size = [2, 1];
                }
            };
            exports_8("ShadowNArmor2x1Curved", ShadowNArmor2x1Curved);
            ShadowNArmor1x2Curved = class ShadowNArmor1x2Curved extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.mass = 10;
                    this.cost = 2;
                    this.image = "ShadowNArmor1x2Curved.png";
                    this.size = [1, 2];
                }
            };
            exports_8("ShadowNArmor1x2Curved", ShadowNArmor1x2Curved);
            ShadowNArmor1x2Font1 = class ShadowNArmor1x2Font1 extends ShadowArmor {
                constructor() {
                    super();
                    this.hp = 24;
                    this.mass = 15;
                    this.cost = 3;
                    this.image = "ShadowNArmor1x2Font1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("ShadowNArmor1x2Font1", ShadowNArmor1x2Font1);
            UArmor = class UArmor extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Ultralight Armor";
                    this.desc = "Minimizes weight and size, great for fighters, but is more expensive than other armors.";
                    this.tab = "armor3";
                    this.paintable = true;
                }
            };
            exports_8("UArmor", UArmor);
            UArmor1x1 = class UArmor1x1 extends UArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.cost = 10;
                    this.image = "UArmor1x1.png";
                    this.size = [1, 1];
                    this.mass = 1;
                }
            };
            exports_8("UArmor1x1", UArmor1x1);
            UArmor1x2 = class UArmor1x2 extends UArmor {
                constructor() {
                    super();
                    this.hp = 32;
                    this.cost = 20;
                    this.image = "UArmor1x2.png";
                    this.size = [1, 2];
                    this.mass = 2;
                }
            };
            exports_8("UArmor1x2", UArmor1x2);
            UArmor2x1 = class UArmor2x1 extends UArmor {
                constructor() {
                    super();
                    this.name = "Ultralight Armor";
                    this.hp = 32;
                    this.cost = 20;
                    this.image = "UArmor2x1.png";
                    this.size = [2, 1];
                    this.mass = 2;
                }
            };
            exports_8("UArmor2x1", UArmor2x1);
            UArmor1x1Angle = class UArmor1x1Angle extends UArmor {
                constructor() {
                    super();
                    this.name = "Ultralight Armor";
                    this.hp = 8;
                    this.cost = 5;
                    this.image = "UArmor1x1Angle.png";
                    this.size = [1, 1];
                    this.mass = .5;
                }
            };
            exports_8("UArmor1x1Angle", UArmor1x1Angle);
            UArmor1x1AngleBack = class UArmor1x1AngleBack extends UArmor {
                constructor() {
                    super();
                    this.hp = 8;
                    this.cost = 5;
                    this.image = "UArmor1x1AngleBack.png";
                    this.size = [1, 1];
                    this.mass = .5;
                }
            };
            exports_8("UArmor1x1AngleBack", UArmor1x1AngleBack);
            UArmor2x2 = class UArmor2x2 extends UArmor {
                constructor() {
                    super();
                    this.hp = 64;
                    this.cost = 40;
                    this.image = "UArmor2x2.png";
                    this.size = [2, 2];
                    this.mass = 4;
                }
            };
            exports_8("UArmor2x2", UArmor2x2);
            UArmor1x2Notch1 = class UArmor1x2Notch1 extends UArmor {
                constructor() {
                    super();
                    this.hp = 32;
                    this.cost = 20;
                    this.image = "UArmor1x2Notch1.png";
                    this.size = [1, 2];
                    this.mass = 2;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("UArmor1x2Notch1", UArmor1x2Notch1);
            UArmor1x2Notch2 = class UArmor1x2Notch2 extends UArmor {
                constructor() {
                    super();
                    this.hp = 32;
                    this.cost = 20;
                    this.image = "UArmor1x2Notch2.png";
                    this.size = [1, 2];
                    this.mass = 2;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("UArmor1x2Notch2", UArmor1x2Notch2);
            UArmor1x1Notch1 = class UArmor1x1Notch1 extends UArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.cost = 10;
                    this.image = "UArmor1x1Notch1.png";
                    this.size = [1, 1];
                    this.mass = 1;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("UArmor1x1Notch1", UArmor1x1Notch1);
            UArmor1x1Notch2 = class UArmor1x1Notch2 extends UArmor {
                constructor() {
                    super();
                    this.hp = 16;
                    this.cost = 10;
                    this.image = "UArmor1x1Notch2.png";
                    this.size = [1, 1];
                    this.mass = 1;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("UArmor1x1Notch2", UArmor1x1Notch2);
            UArmor1x1Spike = class UArmor1x1Spike extends UArmor {
                constructor() {
                    super();
                    this.hp = 8;
                    this.cost = 5;
                    this.image = "UArmor1x1Spike.png";
                    this.size = [1, 1];
                    this.mass = .5;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("UArmor1x1Spike", UArmor1x1Spike);
            VArmor = class VArmor extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Volumetric Armor";
                    this.desc = "Balanced in cost and weight, but takes up more space than other armours.";
                    this.tab = "armor2";
                    this.canShowDamage = true;
                    this.paintable = true;
                }
            };
            exports_8("VArmor", VArmor);
            VArmor1x2SideBar = class VArmor1x2SideBar extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2SideBar.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x2SideBar", VArmor1x2SideBar);
            VArmor1x2SideBarFilled = class VArmor1x2SideBarFilled extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2SideBarFilled.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x2SideBarFilled", VArmor1x2SideBarFilled);
            VArmor1x2IBeam = class VArmor1x2IBeam extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2IBeam.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x2IBeam", VArmor1x2IBeam);
            VArmor1x2Corner4 = class VArmor1x2Corner4 extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2Corner4.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x2Corner4", VArmor1x2Corner4);
            VArmor1x2End = class VArmor1x2End extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2End.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x2End", VArmor1x2End);
            VArmor1x1Corner1 = class VArmor1x1Corner1 extends VArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.cost = 1;
                    this.image = "VArmor1x1Corner1.png";
                    this.size = [1, 1];
                    this.mass = 1.3;
                }
            };
            exports_8("VArmor1x1Corner1", VArmor1x1Corner1);
            VArmor1x1Corner2 = class VArmor1x1Corner2 extends VArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.cost = 1;
                    this.image = "VArmor1x1Corner2.png";
                    this.size = [1, 1];
                    this.mass = 1.3;
                }
            };
            exports_8("VArmor1x1Corner2", VArmor1x1Corner2);
            VArmor1x1Corner3 = class VArmor1x1Corner3 extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x1Corner3.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x1Corner3", VArmor1x1Corner3);
            VArmor1x1Hook = class VArmor1x1Hook extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x1Hook.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x1Hook", VArmor1x1Hook);
            VArmor1x1CornerBack = class VArmor1x1CornerBack extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x1CornerBack.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x1CornerBack", VArmor1x1CornerBack);
            VArmor2x2 = class VArmor2x2 extends VArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.cost = 4;
                    this.image = "VArmor2x2.png";
                    this.size = [2, 2];
                    this.mass = 5.2;
                }
            };
            exports_8("VArmor2x2", VArmor2x2);
            VArmor1x2 = class VArmor1x2 extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                }
            };
            exports_8("VArmor1x2", VArmor1x2);
            VArmor1x1 = class VArmor1x1 extends VArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.cost = 1;
                    this.image = "VArmor1x1.png";
                    this.size = [1, 1];
                    this.mass = 1.3;
                }
            };
            exports_8("VArmor1x1", VArmor1x1);
            VArmor1x1Angle = class VArmor1x1Angle extends VArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.cost = 1;
                    this.image = "VArmor1x1Angle.png";
                    this.size = [1, 1];
                    this.mass = 1.3;
                }
            };
            exports_8("VArmor1x1Angle", VArmor1x1Angle);
            VArmor2x2Angle = class VArmor2x2Angle extends VArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.cost = 4;
                    this.image = "VArmor2x2Angle.png";
                    this.size = [2, 2];
                    this.mass = 5.2;
                }
            };
            exports_8("VArmor2x2Angle", VArmor2x2Angle);
            VArmor2x2Curve = class VArmor2x2Curve extends VArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.cost = 4;
                    this.image = "VArmor2x2Curve.png";
                    this.size = [2, 2];
                    this.mass = 5.2;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("VArmor2x2Curve", VArmor2x2Curve);
            VArmor1x1Curve = class VArmor1x1Curve extends VArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.cost = 1;
                    this.image = "VArmor1x1Curve.png";
                    this.size = [1, 1];
                    this.mass = 1.3;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("VArmor1x1Curve", VArmor1x1Curve);
            VArmor2x1Curved = class VArmor2x1Curved extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor2x1Curved.png";
                    this.size = [2, 1];
                    this.mass = 2.6;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("VArmor2x1Curved", VArmor2x1Curved);
            VArmor1x2Curved = class VArmor1x2Curved extends VArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 2;
                    this.image = "VArmor1x2Curved.png";
                    this.size = [1, 2];
                    this.mass = 2.6;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("VArmor1x2Curved", VArmor1x2Curved);
            VArmor2x2Curved = class VArmor2x2Curved extends VArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.cost = 4;
                    this.image = "VArmor2x2Curved.png";
                    this.size = [2, 2];
                    this.mass = 5.2;
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("VArmor2x2Curved", VArmor2x2Curved);
            VShadowArmor = class VShadowArmor extends VArmor {
                constructor() {
                    super();
                    this.name = "Volumetric Shadow Armor";
                    this.dlc = "Curves and Shadows";
                    this.northWest = true;
                    this.canShowDamage = false;
                }
            };
            exports_8("VShadowArmor", VShadowArmor);
            VShadowNArmor2x2Angle = class VShadowNArmor2x2Angle extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.mass = 5.2;
                    this.cost = 4;
                    this.image = "VShadowNArmor2x2Angle.png";
                    this.size = [2, 2];
                }
            };
            exports_8("VShadowNArmor2x2Angle", VShadowNArmor2x2Angle);
            VShadowNArmor2x2 = class VShadowNArmor2x2 extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.mass = 5.2;
                    this.cost = 4;
                    this.image = "VShadowNArmor2x2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("VShadowNArmor2x2", VShadowNArmor2x2);
            VShadowNArmor2x1 = class VShadowNArmor2x1 extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.mass = 2.6;
                    this.cost = 2;
                    this.image = "VShadowNArmor2x1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("VShadowNArmor2x1", VShadowNArmor2x1);
            VShadowNArmor1x1 = class VShadowNArmor1x1 extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.mass = 1.3;
                    this.cost = 1;
                    this.image = "VShadowNArmor1x1.png";
                    this.size = [1, 1];
                }
            };
            exports_8("VShadowNArmor1x1", VShadowNArmor1x1);
            VShadowNArmor1x2 = class VShadowNArmor1x2 extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 10;
                    this.mass = 2.6;
                    this.cost = 2;
                    this.image = "VShadowNArmor1x2.png";
                    this.size = [1, 2];
                }
            };
            exports_8("VShadowNArmor1x2", VShadowNArmor1x2);
            VShadowNArmor2x2Curve = class VShadowNArmor2x2Curve extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 20;
                    this.mass = 5.2;
                    this.cost = 4;
                    this.image = "VShadowNArmor2x2Curve.png";
                    this.size = [2, 2];
                }
            };
            exports_8("VShadowNArmor2x2Curve", VShadowNArmor2x2Curve);
            VShadowNArmor1x1Angle = class VShadowNArmor1x1Angle extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.mass = 1.3;
                    this.cost = 1;
                    this.image = "VShadowNArmor1x1Angle.png";
                    this.size = [1, 1];
                }
            };
            exports_8("VShadowNArmor1x1Angle", VShadowNArmor1x1Angle);
            VShadowNArmor1x1Corner = class VShadowNArmor1x1Corner extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.mass = 1.3;
                    this.cost = 1;
                    this.image = "VShadowNArmor1x1Corner.png";
                    this.size = [1, 1];
                }
            };
            exports_8("VShadowNArmor1x1Corner", VShadowNArmor1x1Corner);
            VShadowNArmor1x1CornerInner = class VShadowNArmor1x1CornerInner extends VShadowArmor {
                constructor() {
                    super();
                    this.hp = 5;
                    this.mass = 1.3;
                    this.cost = 1;
                    this.image = "VShadowNArmor1x1CornerInner.png";
                    this.size = [1, 1];
                }
            };
            exports_8("VShadowNArmor1x1CornerInner", VShadowNArmor1x1CornerInner);
            Reactor2x2 = class Reactor2x2 extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "2x2 Reactor";
                    this.desc = "Use this to power your ship. Reactors are heavy and expensive.";
                    this.hp = 60;
                    this.cost = 100;
                    this.mass = 100;
                    this.genEnergy = 62.5;
                    this.storeEnergy = 8000;
                    this.image = "Reactor2x2.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.tab = "energy";
                }
            };
            exports_8("Reactor2x2", Reactor2x2);
            Reactor1x2 = class Reactor1x2 extends Reactor2x2 {
                constructor() {
                    super();
                    this.name = "1x2 Reactor";
                    this.hp = 30;
                    this.cost = 50;
                    this.mass = 50;
                    this.genEnergy = 25;
                    this.storeEnergy = 10000;
                    this.image = "Reactor1x2.png";
                    this.size = [1, 2];
                }
            };
            exports_8("Reactor1x2", Reactor1x2);
            Reactor2x1 = class Reactor2x1 extends Reactor2x2 {
                constructor() {
                    super();
                    this.name = "2x1 Reactor";
                    this.hp = 30;
                    this.cost = 50;
                    this.mass = 50;
                    this.genEnergy = 25;
                    this.storeEnergy = 10000;
                    this.image = "Reactor2x1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("Reactor2x1", Reactor2x1);
            Reactor1x1 = class Reactor1x1 extends Reactor2x2 {
                constructor() {
                    super();
                    this.name = "1x1 Reactor";
                    this.hp = 15;
                    this.cost = 25;
                    this.mass = 10;
                    this.genEnergy = 10;
                    this.storeEnergy = 2000;
                    this.image = "Reactor1x1.png";
                    this.size = [1, 1];
                }
            };
            exports_8("Reactor1x1", Reactor1x1);
            Solar1x1 = class Solar1x1 extends Reactor2x2 {
                constructor() {
                    super();
                    this.name = "1x1 Solar Panel";
                    this.desc = "Use this to power your ship. Solar panels are light but don't generate much energy.";
                    this.hp = 0;
                    this.cost = 4;
                    this.mass = 2.5;
                    this.genEnergy = 3;
                    this.storeEnergy = 0;
                    this.flip = false;
                    this.image = "solar1x1.png";
                    this.size = [1, 1];
                }
            };
            exports_8("Solar1x1", Solar1x1);
            Solar2x2 = class Solar2x2 extends Solar1x1 {
                constructor() {
                    super();
                    this.name = "2x2 Solar Panel";
                    this.hp = 0;
                    this.cost = 16;
                    this.mass = 10;
                    this.genEnergy = 12;
                    this.storeEnergy = 0;
                    this.flip = false;
                    this.image = "solar2x2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("Solar2x2", Solar2x2);
            Solar3x3 = class Solar3x3 extends Solar1x1 {
                constructor() {
                    super();
                    this.name = "3x3 Solar Panel";
                    this.hp = 0;
                    this.cost = 36;
                    this.mass = 22.5;
                    this.genEnergy = 3 * 9;
                    this.storeEnergy = 0;
                    this.flip = false;
                    this.image = "solar3x3.png";
                    this.size = [3, 3];
                }
            };
            exports_8("Solar3x3", Solar3x3);
            EnergyTransfer = class EnergyTransfer extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Energy Transfer";
                    this.desc = "Gives energy to units in 800m range. Gives 960e per ship.";
                    this.hp = 0;
                    this.cost = 30;
                    this.mass = 40;
                    this.image = "EnergyTransfer.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.tab = "energy";
                    this.range = 800;
                    this.trasferEnergy = 60;
                }
                init() {
                    return this.unit.energyCaster = true;
                }
                ;
                shuffle(list) {
                    let e, l, len1, ref, results;
                    ref = ((function () {
                        let len1, m, results1;
                        results1 = [];
                        for (m = 0, len1 = list.length; m < len1; m++) {
                            e = list[m];
                            results1.push([Math.random(), e]);
                        }
                        return results1;
                    })()).sort();
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        e = ref[l];
                        results.push(e[1]);
                    }
                    return results;
                }
                ;
                tick() {
                    let amount, distance, giveTo, i, j, len, len1, ref, ref1, results, thing;
                    if ((_6src_sim_3.Sim.Instance.step + this.unit.id) % 16 === 0 && this.unit.energy > 100) {
                        this.working = false;
                        giveTo = [];
                        ref = this.unit.closestFriends;
                        for (i = 0, len = ref.length; i < len; i++) {
                            thing = ref[i];
                            if (thing.energy < thing.storeEnergy && thing.energy > -1) {
                                if (thing.energyCaster && thing.energy / thing.storeEnergy > this.unit.energy / this.unit.storeEnergy) {
                                    continue;
                                }
                                distance = _4src_maths_2.v2.distance(this.unit.pos, thing.pos);
                                if (distance < this.range) {
                                    giveTo.push(thing);
                                }
                            }
                        }
                        ref1 = this.shuffle(giveTo);
                        results = [];
                        for (j = 0, len1 = ref1.length; j < len1; j++) {
                            thing = ref1[j];
                            amount = thing.storeEnergy - thing.energy;
                            if (amount > this.trasferEnergy * 16) {
                                amount = this.trasferEnergy * 16;
                            }
                            if (amount > this.unit.energy) {
                                amount = this.unit.energy;
                            }
                            thing.energy += amount;
                            this.unit.energy -= amount;
                            results.push(this.working = true);
                        }
                        return results;
                    }
                }
                ;
                draw() {
                    let r;
                    super.draw.call(this);
                    if (this.working) {
                        r = (this.range + 40) / 255;
                        return _0dummy_2.baseAtlas.drawSprite("img/point02.png", this.unit.pos, [r, r], 0, [255, 255, 255, 10]);
                    }
                }
                ;
            };
            exports_8("EnergyTransfer", EnergyTransfer);
            StasisField = class StasisField extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Stasis Field";
                    this.desc = "Slows and decloaks enemy ships.";
                    this.hp = 10;
                    this.cost = 10;
                    this.mass = 6;
                    this.image = "StasisField.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.tab = "defence";
                    this.range = 290;
                    this.maxSlow = 2.5;
                    this.slow = 2.5;
                    this.working = false;
                }
                tick() {
                    let distance, i, len, other, ref, results, speed;
                    this.unit.cloak = 0;
                    this.working = false;
                    this.stasisPos = new Float64Array([this.worldPos[0] + (Math.sin(this.unit.rot) * 100), this.worldPos[1] - (Math.cos(this.unit.rot) * 100)]);
                    ref = this.unit.closestEnemies;
                    results = [];
                    for (i = 0, len = ref.length; i < len; i++) {
                        other = ref[i];
                        if (other.slowed === true) {
                            continue;
                        }
                        if (other.owner === this.unit.owner) {
                            continue;
                        }
                        distance = _991src_collision_1.CollisionUtils.closestDistance(other.getBoundPoints(), [this.stasisPos]);
                        if (distance < this.range) {
                            other.jump = 0;
                            other.cloak = 0;
                            speed = _4src_maths_2.v2.mag(other.vel);
                            if (speed > this.maxSlow) {
                                _4src_maths_2.v2.scale(other.vel, 0.9, null);
                            }
                            this.working = true;
                            results.push(other.slowed = true);
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                draw() {
                    let a, r;
                    super.draw.call(this);
                    if (this.working) {
                        a = 100;
                    }
                    else {
                        a = 25;
                    }
                    r = (this.range + 40) / 255;
                    return _0dummy_2.baseAtlas.drawSprite("img/point02.png", [this.worldPos[0] + (Math.sin(this.unit.rot) * 100), this.worldPos[1] - (Math.cos(this.unit.rot) * 100)], [r, r], 0, [0, 0, 0, a]);
                }
                ;
            };
            exports_8("StasisField", StasisField);
            SupercapitalBridge = class SupercapitalBridge extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Supercapital Bridge";
                    this.desc = "Extends a ships cost limit by $500.";
                    this.hp = 100;
                    this.cost = 100;
                    this.mass = 500;
                    this.image = "pad4x4.png";
                    this.attach = true;
                    this.size = [4, 4];
                    this.tab = "defence";
                    this.limitBonus = 500;
                    this.hide = true;
                    this.disable = true;
                }
            };
            exports_8("SupercapitalBridge", SupercapitalBridge);
            ShieldGen2x2 = class ShieldGen2x2 extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Heavy Shield Generator";
                    this.desc = "A powerful shield generator that guzzles energy.";
                    this.hp = 0;
                    this.cost = 50;
                    this.mass = 25;
                    this.genShield = 1;
                    this.useEnergy = 135;
                    this.energyLine = .50;
                    this.shield = 25;
                    this.image = "Shield2x2.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.tab = "defence";
                }
                tick() {
                    if (this.unit.energy > this.useEnergy && this.unit.energy > this.unit.storeEnergy * this.energyLine) {
                        this.unit.energy -= this.useEnergy * Math.max(0, Math.min(1, (this.unit.maxShield - this.unit.shield) / this.genShield));
                        return this.unit.shield += this.genShield;
                    }
                }
                ;
            };
            exports_8("ShieldGen2x2", ShieldGen2x2);
            ShieldGen2x1 = class ShieldGen2x1 extends ShieldGen2x2 {
                constructor() {
                    super();
                    this.name = "Advanced Shield Generator";
                    this.desc = "An efficient, light-weight shield generator.";
                    this.hp = 0;
                    this.cost = 30;
                    this.mass = 2;
                    this.genShield = .2;
                    this.useEnergy = 18;
                    this.energyLine = .75;
                    this.shield = 15;
                    this.image = "Shield2x1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("ShieldGen2x1", ShieldGen2x1);
            ShieldGen1x1 = class ShieldGen1x1 extends ShieldGen2x2 {
                constructor() {
                    super();
                    this.name = "Shield Capacitor";
                    this.desc = "Grants 15HP of shields and offers low regeneration.";
                    this.hp = 0;
                    this.cost = 15;
                    this.mass = 8;
                    this.genShield = 0.0625 * 1.5;
                    this.useEnergy = 0.0625 * 3;
                    this.energyLine = .99;
                    this.shield = 15;
                    this.image = "Shield1x1.png";
                    this.size = [1, 1];
                }
            };
            exports_8("ShieldGen1x1", ShieldGen1x1);
            CloakGenerator = class CloakGenerator extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Cloak Generator";
                    this.desc = "Cloaks 66T/second while stationary. Keeps 165T cloaked while moving.";
                    this.cost = 25;
                    this.mass = 10;
                    this.hp = 5;
                    this.image = "CloakGenerator.png";
                    this.tab = "defence";
                    this.attach = true;
                    this.size = [2, 2];
                    this.genCloak = 33 / 16;
                    this.useEnergy = 400 / 16;
                }
                tick() {
                    if (this.unit.energy > this.useEnergy && this.unit.cloak < this.unit.mass) {
                        if (this.unit.cloak > this.unit.mass / 2) {
                            this.unit.energy -= this.useEnergy;
                        }
                        this.unit.cloak += this.genCloak;
                        if (this.unit.cloak > this.unit.mass) {
                            return this.unit.cloak = this.unit.mass;
                        }
                    }
                }
                ;
            };
            exports_8("CloakGenerator", CloakGenerator);
            Battery = class Battery extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Battery";
                    this.desc = "Batteries store energy and come with a full charge to power your ship.";
                    this.tab = "energy";
                    this.paintable = true;
                }
            };
            exports_8("Battery", Battery);
            Battery1x2 = class Battery1x2 extends Battery {
                constructor() {
                    super();
                    this.hp = 10;
                    this.cost = 20;
                    this.mass = 20;
                    this.storeEnergy = 16000;
                    this.image = "Battery1x2.png";
                    this.attach = true;
                    this.size = [1, 2];
                }
            };
            exports_8("Battery1x2", Battery1x2);
            Battery1x1 = class Battery1x1 extends Battery {
                constructor() {
                    super();
                    this.name = "Battery";
                    this.hp = 5;
                    this.cost = 10;
                    this.mass = 10;
                    this.storeEnergy = 8000;
                    this.image = "Battery1x1.png";
                    this.size = [1, 1];
                }
            };
            exports_8("Battery1x1", Battery1x1);
            Battery2x1 = class Battery2x1 extends Battery {
                constructor() {
                    super();
                    this.name = "Battery";
                    this.hp = 10;
                    this.cost = 20;
                    this.mass = 20;
                    this.storeEnergy = 16000;
                    this.image = "Battery2x1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("Battery2x1", Battery2x1);
            Battery2x2 = class Battery2x2 extends Battery {
                constructor() {
                    super();
                    this.name = "Battery";
                    this.hp = 20;
                    this.cost = 40;
                    this.mass = 40;
                    this.storeEnergy = 32000;
                    this.image = "Battery2x2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("Battery2x2", Battery2x2);
            Engine05 = class Engine05 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Battleship Thruster";
                    this.desc = "An ultra-heavy thruster to provide a minimum speed for the heaviest ships.";
                    this.trailTime = 100;
                    this.trailSize = .4;
                    this.hp = 0;
                    this.cost = 80;
                    this.mass = 700;
                    this.thrust = 1000;
                    this.turnSpeed = 1;
                    this.image = "engine05.png";
                    this.size = [2, 2];
                    this.useEnergy = 30;
                    this.exhaust = true;
                    this.attach = true;
                    this.disable = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine05", Engine05);
            Engine09 = class Engine09 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Large Bulk Thruster";
                    this.desc = "Low energy thruster for high mass. Rated for 0-150 m/s ";
                    this.trailTime = 100;
                    this.trailSize = .2;
                    this.hp = 0;
                    this.cost = 47;
                    this.mass = 135;
                    this.thrust = 271;
                    this.turnSpeed = 1;
                    this.image = "engine09.png";
                    this.size = [2, 2];
                    this.useEnergy = 4;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine09", Engine09);
            Engine02 = class Engine02 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Bulk Thruster";
                    this.desc = "Low energy thruster for high mass. Rated for 0-125 m/s ";
                    this.trailTime = 100;
                    this.trailSize = .2;
                    this.hp = 0;
                    this.cost = 35;
                    this.mass = 100;
                    this.thrust = 200;
                    this.turnSpeed = 1;
                    this.image = "engine02.png";
                    this.size = [1, 3];
                    this.useEnergy = 3;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine02", Engine02);
            Engine01 = class Engine01 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Cruiser Thruster";
                    this.desc = "Efficient thruster for medium ships. Rated for 100-350 m/s";
                    this.trailTime = 100;
                    this.trailSize = .26;
                    this.hp = 0;
                    this.cost = 65;
                    this.mass = 60;
                    this.thrust = 270;
                    this.turnSpeed = 1;
                    this.image = "engine01.png";
                    this.size = [1, 3];
                    this.useEnergy = 13;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine01", Engine01);
            Engine08 = class Engine08 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Compact Cruiser Thruster";
                    this.desc = "Efficient thruster for medium ships. Rated for 100-350 m/s";
                    this.trailTime = 100;
                    this.trailSize = .26;
                    this.hp = 0;
                    this.cost = 44;
                    this.mass = 40;
                    this.thrust = 180;
                    this.turnSpeed = 1;
                    this.image = "engine08.png";
                    this.size = [2, 1];
                    this.useEnergy = 8;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine08", Engine08);
            Engine04 = class Engine04 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Scout Thruster";
                    this.desc = "The smallest thruster available. Rated for 100-400 m/s";
                    this.trailTime = 1000;
                    this.trailSize = .1;
                    this.hp = 0;
                    this.cost = 20;
                    this.mass = 15;
                    this.thrust = 85;
                    this.turnSpeed = 1;
                    this.image = "engine04.png";
                    this.size = [1, 2];
                    this.useEnergy = 9;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine04", Engine04);
            Engine043Long = class Engine043Long extends Engine04 {
                constructor() {
                    super();
                    this.size = [2, 1];
                    this.image = "engine04long.png";
                }
            };
            exports_8("Engine043Long", Engine043Long);
            Engine06 = class Engine06 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.hp = 0;
                    this.cost = 55;
                    this.mass = 60;
                    this.thrust = 157;
                    this.turnSpeed = 3;
                    this.image = "engine06.png";
                    this.size = [2, 2];
                    this.useEnergy = 25;
                    this.exhaust = true;
                    this.attach = true;
                    this.hide = true;
                    this.disable = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine06", Engine06);
            Engine03 = class Engine03 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Fighter Thruster";
                    this.desc = "A light thruster good for fast ships. Rated for 250+ m/s";
                    this.trailTime = 1000;
                    this.trailSize = .13;
                    this.hp = 0;
                    this.cost = 45;
                    this.mass = 15;
                    this.thrust = 135;
                    this.turnSpeed = 1;
                    this.image = "engine03.png";
                    this.size = [1, 2];
                    this.useEnergy = 12;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine03", Engine03);
            Engine03Long = class Engine03Long extends Engine03 {
                constructor() {
                    super();
                    this.size = [2, 1];
                    this.image = "engine03long.png";
                }
            };
            exports_8("Engine03Long", Engine03Long);
            Engine07 = class Engine07 extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Interceptor Afterburner";
                    this.desc = "A huge inefficient thruster. Burns a lot of energy to make ships move very fast. ";
                    this.trailTime = 1000;
                    this.hp = 0;
                    this.cost = 145;
                    this.mass = 80;
                    this.thrust = 900;
                    this.turnSpeed = 4;
                    this.image = "engine07.png";
                    this.size = [2, 2];
                    this.trailSize = .22;
                    this.useEnergy = 169;
                    this.exhaust = true;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
            };
            exports_8("Engine07", Engine07);
            JumpEngine = class JumpEngine extends _95src_unit_1.Engine {
                constructor() {
                    super();
                    this.name = "Jump Engine";
                    this.desc = "Allows you to perform short jumps.";
                    this.trailTime = 0;
                    this.hp = 25;
                    this.cost = 20;
                    this.mass = 6;
                    this.jumpCount = 1;
                    this.rechargeRate = 160;
                    this.thrust = 0;
                    this.turnSpeed = 0;
                    this.useEnergy = 15;
                    this.exhaust = false;
                    this.image = "engineJump.png";
                    this.size = [2, 1];
                    this.trailSize = 0;
                    this.attach = true;
                    this.stripe = true;
                    this.tab = "engines";
                }
                tick() {
                    this.unit.jump += this.rechargeRate / this.unit.mass;
                    return this.working = this.unit.jump > this.unit.jumpDistance && this.unit.energy > this.unit.mass * this.useEnergy;
                }
                ;
                draw() {
                    super.draw.call(this);
                    if (this.working) {
                        return _0dummy_2.baseAtlas.drawSprite("export class engineJumpPip.png", this.worldPos, [1, 1], this.unit.rot, null);
                    }
                }
                ;
            };
            exports_8("JumpEngine", JumpEngine);
            Wing = class Wing extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Wing";
                    this.desc = "Adds turn rate to your units, more wings make ships turn faster.";
                    this.tab = "engines";
                    this.stripe = true;
                    this.attach = false;
                    this.canShowDamage = true;
                }
            };
            exports_8("Wing", Wing);
            Wing2x2 = class Wing2x2 extends Wing {
                constructor() {
                    super();
                    this.hp = 16;
                    this.cost = 32;
                    this.mass = 8;
                    this.turnSpeed = 30;
                    this.image = "Wing2x2.png";
                    this.size = [2, 2];
                }
            };
            exports_8("Wing2x2", Wing2x2);
            Wing1x2 = class Wing1x2 extends Wing {
                constructor() {
                    super();
                    this.hp = 8;
                    this.cost = 16;
                    this.mass = 4;
                    this.turnSpeed = 15;
                    this.image = "Wing1x2.png";
                    this.size = [1, 2];
                }
            };
            exports_8("Wing1x2", Wing1x2);
            Wing2x1 = class Wing2x1 extends Wing {
                constructor() {
                    super();
                    this.hp = 6;
                    this.cost = 12;
                    this.mass = 3;
                    this.turnSpeed = 11.25;
                    this.image = "Wing2x1.png";
                    this.size = [2, 1];
                }
            };
            exports_8("Wing2x1", Wing2x1);
            Wing1x1Angle = class Wing1x1Angle extends Wing {
                constructor() {
                    super();
                    this.hp = 4;
                    this.cost = 8;
                    this.mass = 2;
                    this.turnSpeed = 7.5;
                    this.image = "Wing1x1Angle.png";
                    this.size = [1, 1];
                }
            };
            exports_8("Wing1x1Angle", Wing1x1Angle);
            Wing1x1Round = class Wing1x1Round extends Wing {
                constructor() {
                    super();
                    this.hp = 4;
                    this.cost = 8;
                    this.mass = 2;
                    this.turnSpeed = 7.5;
                    this.image = "Wing1x1Round.png";
                    this.size = [1, 1];
                }
            };
            exports_8("Wing1x1Round", Wing1x1Round);
            Wing1x1Notch = class Wing1x1Notch extends Wing {
                constructor() {
                    super();
                    this.hp = 0;
                    this.cost = 4;
                    this.mass = 0.1;
                    this.turnSpeed = 3.15;
                    this.image = "Wing1x1Notch.png";
                    this.size = [1, 1];
                }
            };
            exports_8("Wing1x1Notch", Wing1x1Notch);
            PDLaserBullet = class PDLaserBullet extends _94src_things_1.LaserBullet {
                constructor() {
                    super();
                    this.image = "fireBeamLarge.png";
                    this.sound = "sounds/weapons/lightPD.wav";
                    this.size = [.3, .3];
                    this.color = [179, 207, 255, 255];
                }
            };
            exports_8("PDLaserBullet", PDLaserBullet);
            PDTurret = class PDTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Point Defence";
                    this.desc = "Point defence laser. Counters missiles.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turHex2.png";
                    this.size = [2, 2];
                    this.range = 400;
                    this.reloadTime = 40;
                    this.trackSpeed = 25;
                    this.bulletCls = PDLaserBullet;
                    this.shotEnergy = 1100;
                    this.instant = true;
                    this.mass = 10;
                    this.bulletSpeed = 2000;
                    this.damage = 20;
                    this.maxLife = .5;
                    this.hitsMissiles = true;
                }
            };
            exports_8("PDTurret", PDTurret);
            HeavyPDBullet = class HeavyPDBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireHex1.png";
                    this.sound = "sounds/weapons/heavyPD.wav";
                    this.size = [.7, .7];
                    this.color = [179, 207, 255, 255];
                    this.radius = 12;
                    this.hitsMultiple = true;
                }
            };
            exports_8("HeavyPDBullet", HeavyPDBullet);
            HeavyPDTurret = class HeavyPDTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Heavy Point Defence Turret";
                    this.desc = "Point defence turret. Hits multiple projectiles. Counters missiles.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turHex1.png";
                    this.size = [2, 2];
                    this.reloadTime = 52;
                    this.trackSpeed = 90;
                    this.bulletCls = HeavyPDBullet;
                    this.range = 405;
                    this.shotEnergy = 250 * 16;
                    this.mass = 30;
                    this.bulletSpeed = 55;
                    this.damage = 60;
                    this.hitsMissiles = true;
                }
            };
            exports_8("HeavyPDTurret", HeavyPDTurret);
            RingBullet = class RingBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireRing.png";
                    this.sound = "sounds/weapons/zingg.wav";
                    this.hitExplosion = _94src_things_1.RingHitExplosion;
                    this.size = [1, 1];
                    this.color = [179, 207, 255, 255];
                }
            };
            exports_8("RingBullet", RingBullet);
            RingTurret = class RingTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Fusion Ring";
                    this.desc = "Close ranged burst weapon.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turRing.png";
                    this.size = [2, 2];
                    this.reloadTime = 80;
                    this.trackSpeed = 90;
                    this.bulletCls = RingBullet;
                    this.range = 330;
                    this.shotEnergy = 250 * 16;
                    this.mass = 20;
                    this.bulletSpeed = 35;
                    this.damage = 100;
                    this.spin = 0;
                }
                draw() {
                    if (this.working) {
                        this.spin += .0010 * this.damage;
                        this.image = "turRing.png";
                    }
                    else {
                        this.spin += .0001 * this.damage;
                        this.image = "turRingReload.png";
                    }
                    _0dummy_2.baseAtlas.drawSprite("export class " + this.image, this.worldPos, [1, 1], this.spin, null);
                }
                ;
            };
            exports_8("RingTurret", RingTurret);
            RamBullet = class RamBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "export class fireWavePull.png";
                    this.sound = "sounds/weapons/WavePull.wav";
                    this.size = [.5, .5];
                    this.color = [179, 207, 255, 255];
                    this.radius = 30;
                    this.direction = -1;
                    this.waveEffect = 300;
                }
                hitUnit(unit) {
                    let amount, dot, p, _wave;
                    unit.applyDamage(this.damage, this);
                    p = this.waveEffect * this.damage / unit.mass;
                    _4src_maths_2.v2.norm(this.vel, _wave);
                    _4src_maths_2.v2.scale(_wave, -this.direction, null);
                    dot = _4src_maths_2.v2.dot(unit.vel, _wave);
                    amount = 0;
                    if (dot < p) {
                        amount = p;
                    }
                    _4src_maths_2.v2.scale(_wave, amount, null);
                    _4src_maths_2.v2.add(unit.vel, _wave, null);
                    return this.dead = true;
                }
                ;
            };
            exports_8("RamBullet", RamBullet);
            RamTurret = class RamTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Kinetic Ram";
                    this.desc = "Knocks a target back with speed depending on its mass.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turWavePush.png";
                    this.size = [2, 2];
                    this.reloadTime = 96;
                    this.trackSpeed = 90;
                    this.bulletCls = RamBullet;
                    this.range = 125;
                    this.shotEnergy = 1200;
                    this.mass = 10;
                    this.bulletSpeed = 35;
                    this.damage = 80;
                    this.hide = true;
                    this.disable = true;
                }
            };
            exports_8("RamTurret", RamTurret);
            TorpBullet = class TorpBullet extends _94src_things_1.StraightMissile {
                constructor() {
                    super();
                    this.image = "export class fireTorp1.png";
                    this.sound = "sounds/weapons/torp2.wav";
                    this.size = [1, 1];
                    this.radius = 25;
                    this.missile = true;
                    this.trailTime = 750;
                    this.trailSize = 0.06;
                }
            };
            exports_8("TorpBullet", TorpBullet);
            TorpTurret = class TorpTurret extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.name = "Torpedo Launcher";
                    this.desc = "Launches torpedos that move in straight line.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turTorp.png";
                    this.size = [2, 2];
                    this.reloadTime = 52;
                    this.trackSpeed = 45;
                    this.bulletCls = TorpBullet;
                    this.range = 1100;
                    this.shotEnergy = 1300;
                    this.mass = 10;
                    this.bulletSpeed = 16;
                    this.damage = 24;
                }
            };
            exports_8("TorpTurret", TorpTurret);
            MissileBullet = class MissileBullet extends _94src_things_1.TrackingMissile {
                constructor() {
                    super();
                    this.image = "export class fireMis1.png";
                    this.sound = "sounds/weapons/torp1.wav";
                    this.size = [.8, .8];
                    this.color = [0, 0, 0, 255];
                    this.missile = true;
                    this.tracking = true;
                }
            };
            exports_8("MissileBullet", MissileBullet);
            MissileTurret = class MissileTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Missile Launcher";
                    this.desc = "Launches tracking missiles that chase targets.";
                    this.onlyInRange = true;
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turMissile.png";
                    this.size = [2, 2];
                    this.reloadTime = 33;
                    this.trackSpeed = 45;
                    this.bulletCls = MissileBullet;
                    this.range = 1000;
                    this.shotEnergy = 100 * 30;
                    this.mass = 30;
                    this.bulletSpeed = 22;
                    this.damage = 27;
                    this.radius = 40;
                    this.overshoot = 0.5;
                }
            };
            exports_8("MissileTurret", MissileTurret);
            ArtilleryExplosion = class ArtilleryExplosion extends _94src_things_1.AoeExplosion {
                constructor() {
                    super();
                    this.sound = "sounds/weapons/thud3.wav";
                    this.soundVolume = .20;
                    this.maxLife = 10;
                }
                draw() {
                    let color, fade, s;
                    super.draw.call(this);
                    if (this.dead) {
                        return;
                    }
                    fade = this.life / this.maxLife;
                    s = this.radius / 2;
                    color = [255, 255, 255, (1 - Math.pow(fade, 2)) * 180];
                    return _0dummy_2.baseAtlas.drawSprite("img/fire02.png", this.pos, [s, s], this.rot, color);
                }
                ;
            };
            exports_8("ArtilleryExplosion", ArtilleryExplosion);
            ArtilleryBullet = class ArtilleryBullet extends _94src_things_1.AoeBullet {
                constructor() {
                    super();
                    this.image = "export class fireLong1.png";
                    this.sound = "sounds/weapons/artillery.wav";
                    this.color = [255, 240, 244, 255];
                    this.size = [1, 1];
                    this.missile = true;
                    this.explodeClass = ArtilleryExplosion;
                }
                draw() {
                    let color, dist, size;
                    super.draw.call(this);
                    if (this.hitPos) {
                        dist = Math.min(_4src_maths_2.v2.distance(this.pos, new Float64Array(this.hitPos)), 1000);
                        size = Math.pow(1.003, -dist) * this.aoe / 162;
                        color = [255, 0, 0, 80];
                        _0dummy_2.baseAtlas.drawSprite("img/point02.png", this.hitPos, [this.aoe / 256, this.aoe / 256], 0, color);
                        _0dummy_2.baseAtlas.drawSprite("img/fire02.png", this.hitPos, [size * 2, size * 2], 0, color);
                    }
                }
                ;
            };
            exports_8("ArtilleryBullet", ArtilleryBullet);
            ArtilleryTurret = class ArtilleryTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Artillery Gun";
                    this.desc = "Launches a slow moving shell that explodes at the targeted area.";
                    this.onlyInRange = false;
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turLong1.png";
                    this.size = [2, 2];
                    this.reloadTime = 89;
                    this.trackSpeed = 25;
                    this.bulletCls = ArtilleryBullet;
                    this.exactRange = true;
                    this.range = 1600;
                    this.minRange = 500;
                    this.shotEnergy = 4500;
                    this.mass = 70;
                    this.bulletSpeed = 7;
                    this.damage = 120;
                    this.aoe = 220;
                }
            };
            exports_8("ArtilleryTurret", ArtilleryTurret);
            SidewinderBullet = class SidewinderBullet extends _94src_things_1.TrackingMissile {
                constructor() {
                    super();
                    this.image = "export class fireMine.png";
                    this.sound = "sounds/weapons/torp4.wav";
                    this.soundVolume = .05;
                    this.size = [.8, .8];
                    this.color = [0, 0, 0, 255];
                    this.missile = true;
                    this.tracking = true;
                    this.turnVel = [1, 1];
                    this.trailTime = 500;
                    this.trailSize = 0.12;
                }
                tick() {
                    let minDistance, minUnit;
                    super.tick.call(this);
                    if ((_6src_sim_3.Sim.Instance.step + this.id) % 4 === 0) {
                        if (!this.target || this.target.dead || this.target.cloaked()) {
                            _6src_sim_3.Sim.Instance.unitSpaces[_6src_sim_3.Sim.otherSide(this.side)].findInRange(this.pos, _6src_sim_3.Sim.Instance.maxRadius[_6src_sim_3.Sim.otherSide(this.side)], (function (_this) {
                                return function (unit) {
                                    let dist;
                                    if (unit.owner === _this.owner) {
                                        return false;
                                    }
                                    dist = _4src_maths_2.v2.distance(unit.pos, _this.pos);
                                    if (null === null || dist < 0) {
                                        if (!unit.cloaked()) {
                                            minUnit = unit;
                                            minDistance = dist;
                                        }
                                    }
                                    return false;
                                };
                            })(this));
                            if (minUnit) {
                                return this.target = minUnit;
                            }
                        }
                    }
                }
                ;
                move() {
                    if (this.dead) {
                        return;
                    }
                    if (this.target && !this.target.dead && !this.target.cloaked()) {
                        this.dist = _4src_maths_2.v2.distance(this.target.pos, this.pos);
                        this.vel = new Float64Array([this.target.pos[0] - this.pos[0], this.target.pos[1] - this.pos[1]]);
                    }
                    _4src_maths_2.v2.norm(this.vel, null);
                    this.rot = _4src_maths_2.v2.angle(this.vel);
                    _4src_maths_2.v2.scale(new Float64Array(this.turnVel), Math.max(0.01, (this.maxLife - this.life * 2) / this.maxLife), new Float64Array(this.turnVel));
                    _4src_maths_2.v2.scale(this.vel, Math.max(0.01, (this.life * 2) / this.maxLife), this.vel);
                    _4src_maths_2.v2.add(this.vel, new Float64Array(this.turnVel), null);
                    _4src_maths_2.v2.scale(this.vel, this.speed, null);
                    _4src_maths_2.v2.add(this.pos, this.vel, null);
                    this.rot = _4src_maths_2.v2.angle(this.vel);
                    return this.life += 1;
                }
                ;
            };
            exports_8("SidewinderBullet", SidewinderBullet);
            SidewinderTurret = class SidewinderTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Sidewinder Missile";
                    this.desc = "Sidewinder is a slow moving tracking missile.";
                    this.onlyInRange = true;
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turMine.png";
                    this.size = [2, 2];
                    this.reloadTime = 96;
                    this.trackSpeed = 45;
                    this.bulletCls = SidewinderBullet;
                    this.range = 780;
                    this.shotEnergy = 2000;
                    this.mass = 10;
                    this.bulletSpeed = 17;
                    this.damage = 35;
                    this.radius = 40;
                    this.overshoot = 0.5;
                    this.volley = 2;
                    this.volleyDelay = 1;
                    this.spread = [1, -1];
                    this.ticks = 1;
                    this.shots = 0;
                }
                tick() {
                    super.tick.call(this);
                    this.ticks -= 1;
                    if (this.ticks <= 0) {
                        this.ticks = this.volleyDelay;
                        if (this.shots > 0) {
                            return this.makeRealBullet(this.shots % 2);
                        }
                    }
                }
                ;
                makeRealBullet(direction) {
                    let particle;
                    this.shots -= 1;
                    particle = new SidewinderBullet();
                    _6src_sim_3.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.owner = this.unit.owner;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    particle.turretNum = this.turretNum;
                    particle.origin = this.unit;
                    particle.target = this.target;
                    particle.direction = direction;
                    particle.speed = this.bulletSpeed;
                    particle.damage = this.damage / 2;
                    particle.maxLife = this.range / particle.speed * 1.5;
                    _4src_maths_2.v2.set(this.worldPos, particle.pos);
                    _4src_maths_2.v2.pointTo(particle.vel, this.rot);
                    _4src_maths_2.v2.scale(particle.vel, particle.speed, null);
                    return particle.rot = this.rot;
                }
                ;
                makeBullet(distance) {
                    this.unit.cloak = 0;
                    this.shots = this.volley;
                    return this.ticks = 0;
                }
                ;
            };
            exports_8("SidewinderTurret", SidewinderTurret);
            PlasmaBullet = class PlasmaBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "export class fireShot1.png";
                    this.sound = "sounds/weapons/blaster2.wav";
                    this.size = [.6, .6];
                    this.color = [179, 207, 255, 255];
                }
            };
            exports_8("PlasmaBullet", PlasmaBullet);
            PlasmaTurret = class PlasmaTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Plasma Turret";
                    this.desc = "Fires powerful long range projectiles.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turPlasma.png";
                    this.size = [2, 2];
                    this.reloadTime = 52;
                    this.trackSpeed = 25;
                    this.bulletCls = PlasmaBullet;
                    this.range = 820;
                    this.shotEnergy = 100 * 48;
                    this.mass = 40;
                    this.bulletSpeed = 20;
                    this.damage = 53;
                }
            };
            exports_8("PlasmaTurret", PlasmaTurret);
            LightPlasmaBullet = class LightPlasmaBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "export class fireShot1.png";
                    this.sound = "sounds/weapons/blaster2.wav";
                    this.size = [.6, .6];
                    this.color = [179, 207, 255, 255];
                }
            };
            exports_8("LightPlasmaBullet", LightPlasmaBullet);
            LightPlasmaTurret = class LightPlasmaTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.hide = true;
                    this.disable = true;
                    this.name = "Light Plasma Turret";
                    this.desc = "Fires a moderate long range projectile.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turPlasma.png";
                    this.size = [2, 2];
                    this.reloadTime = 64;
                    this.trackSpeed = 25;
                    this.bulletCls = LightPlasmaBullet;
                    this.range = 950;
                    this.shotEnergy = 1700;
                    this.mass = 10;
                    this.bulletSpeed = 22;
                    this.damage = 26;
                }
            };
            exports_8("LightPlasmaTurret", LightPlasmaTurret);
            LightBeam = class LightBeam extends _94src_things_1.LaserBullet {
                constructor() {
                    super();
                    this.image = "export class fireBeamLarge.png";
                    this.sound = "sounds/weapons/beam2.wav";
                    this.size = [.5, .5];
                    this.color = [179, 207, 255, 255];
                }
            };
            exports_8("LightBeam", LightBeam);
            LightBeamTurret = class LightBeamTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Light Beam";
                    this.desc = "Close range beam weapon.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turBeam2.png";
                    this.size = [2, 2];
                    this.reloadTime = 7;
                    this.trackSpeed = 25;
                    this.bulletCls = LightBeam;
                    this.range = 350;
                    this.instant = true;
                    this.shotEnergy = 80 * 7;
                    this.mass = 5;
                    this.bulletSpeed = 15;
                    this.damage = 9;
                    this.maxLife = 8;
                }
            };
            exports_8("LightBeamTurret", LightBeamTurret);
            HeavyBeam = class HeavyBeam extends _94src_things_1.LaserBullet {
                constructor() {
                    super();
                    this.image = "export class fireBeamLarge.png";
                    this.sound = "sounds/weapons/beam4.wav";
                    this.size = [1, 1];
                    this.color = [179, 207, 255, 255];
                }
            };
            exports_8("HeavyBeam", HeavyBeam);
            HeavyBeamTurret = class HeavyBeamTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Heavy Beam";
                    this.desc = "Mid range beam weapon.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turBeam1.png";
                    this.size = [2, 2];
                    this.reloadTime = 40;
                    this.trackSpeed = 25;
                    this.bulletCls = HeavyBeam;
                    this.shotEnergy = 5000;
                    this.instant = true;
                    this.range = 610;
                    this.mass = 40;
                    this.bulletSpeed = 2000;
                    this.damage = 38;
                    this.maxLife = .5;
                }
            };
            exports_8("HeavyBeamTurret", HeavyBeamTurret);
            FlackExplosion = class FlackExplosion extends _94src_things_1.AoeExplosion {
                constructor() {
                    super();
                    this.maxLife = 10;
                    this.sound = null;
                }
                draw() {
                    let color, fade, s;
                    super.draw.call(this);
                    if (this.dead) {
                        return;
                    }
                    fade = this.life / this.maxLife;
                    s = this.aoe / 80;
                    color = [255, 255, 255, (1 - Math.pow(fade, 2)) * 180];
                    return _0dummy_2.baseAtlas.drawSprite("export class fireFlackExp1.png", this.pos, [s, s], this.rot, color);
                }
                ;
            };
            exports_8("FlackExplosion", FlackExplosion);
            FlackBullet = class FlackBullet extends _94src_things_1.AoeBullet {
                constructor() {
                    super();
                    this.image = "fireFlack1.png";
                    this.sound = "sounds/weapons/zingg.wav";
                    this.color = [255, 240, 244, 255];
                    this.size = [1, 1];
                    this.explodeClass = FlackExplosion;
                }
            };
            exports_8("FlackBullet", FlackBullet);
            FlackTurret = class FlackTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Heavy Flak";
                    this.desc = "Anti-fighter weapon that explodes with AoE at the targeted area.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turFlack.png";
                    this.size = [2, 2];
                    this.reloadTime = 32;
                    this.trackSpeed = 25;
                    this.bulletCls = FlackBullet;
                    this.range = 460;
                    this.mass = 30;
                    this.shotEnergy = 100 * 32;
                    this.exactRange = true;
                    this.bulletSpeed = 27;
                    this.damage = 35;
                    this.aoe = 210;
                }
            };
            exports_8("FlackTurret", FlackTurret);
            SniperLaser = class SniperLaser extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "hit1.png";
                    this.sound = "sounds/weapons/blaster2.wav";
                    this.size = [2, 2];
                    this.color = [179, 207, 255, 255];
                    this.hitOnce = {};
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    _0dummy_2.baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot + _0dummy_2.intp.t, this.color);
                }
                hitUnit(unit) {
                    if (!this.hitOnce[unit.id]) {
                        unit.applyDamage(this.damage, this);
                        this.hitOnce[unit.id] = true;
                    }
                }
            };
            exports_8("SniperLaser", SniperLaser);
            SniperGun = class SniperGun extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.hide = true;
                    this.disable = true;
                    this.name = "Sniper Gun";
                    this.desc = "Fires a sniper round with high DPS. Its only good at max range and requires massive banks. The sniper ship must not be moving, and it has 18% chance of firing in any one second.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turSnipe1.png";
                    this.size = [2, 2];
                    this.reloadTime = 120;
                    this.trackSpeed = 25;
                    this.bulletCls = SniperLaser;
                    this.shotEnergy = 100000;
                    this.range = 1700;
                    this.minRange = 300;
                    this.mass = 80;
                    this.bulletSpeed = 15;
                    this.damage = 500;
                    this.hitsMultiple = true;
                    this.hitsCloak = true;
                }
                fire() {
                    if (this.unit.vel[0] === 0 && this.unit.vel[1] === 0 && Math.random() < .1) {
                        return super.fire.call(this);
                    }
                }
                ;
            };
            exports_8("SniperGun", SniperGun);
            EMPOrb = class EMPOrb extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "export class fireEnergyBall.png";
                    this.sound = "sounds/weapons/blaster1.wav";
                    this.soundVolume = .05;
                    this.size = [1, 1];
                    this.color = [179, 207, 255, 255];
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    _0dummy_2.baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot + _0dummy_2.intp.t, this.color);
                }
                ;
            };
            exports_8("EMPOrb", EMPOrb);
            EMPGun = class EMPGun extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "EMP Gun";
                    this.desc = "Fires an EMP orb that drains energy from targets and deals low damage.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turEMP.png";
                    this.size = [2, 2];
                    this.reloadTime = 61;
                    this.trackSpeed = 25;
                    this.bulletCls = EMPOrb;
                    this.shotEnergy = 3600;
                    this.range = 620;
                    this.mass = 2;
                    this.bulletSpeed = 36;
                    this.damage = 24;
                    this.energyDamage = 4200;
                }
            };
            exports_8("EMPGun", EMPGun);
            EMPOrb2 = class EMPOrb2 extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "export class fizzleMine.png";
                    this.sound = "sounds/weapons/blaster1.wav";
                    this.soundVolume = .05;
                    this.size = [1, 1];
                    this.color = [179, 207, 255, 255];
                    this.split = 0;
                }
                clientTick() {
                    let exp, exp2;
                    if (this.life > this.maxLife / 4 && this.split === 0) {
                        exp = new _94src_things_1.Debree();
                        exp.image = "export class fizzleMinePart.png";
                        exp.z = this.z + (Math.random() - 0.5) * .01;
                        exp.pos = _4src_maths_2.v2.create(this.pos);
                        exp.rot = this.rot;
                        exp.vel[0] = Math.cos(this.rot) * 3;
                        exp.vel[1] = Math.sin(this.rot) * 3;
                        exp.vrot = 0;
                        _0dummy_2.intp.particles[exp.id] = exp;
                        exp2 = new _94src_things_1.Debree();
                        exp2.image = "export class fizzleMinePart.png";
                        exp2.z = exp.z;
                        exp2.pos = _4src_maths_2.v2.create(this.pos);
                        _4src_maths_2.v2.set(exp.vel, exp2.vel);
                        _4src_maths_2.v2.scale(exp2.vel, -1, null);
                        exp2.rot = exp.rot + Math.PI;
                        exp2.vrot = 0;
                        _0dummy_2.intp.particles[exp2.id] = exp2;
                        return this.split = 1;
                    }
                }
                ;
                draw() {
                    let image;
                    if (this.dead) {
                        return;
                    }
                    if (this.life > this.maxLife / 4 && this.split === 0) {
                        image = "img/fire02.png";
                    }
                    else if (this.life > this.maxLife / 4) {
                        image = "export class fizzleMineEnergy.png";
                    }
                    else {
                        image = this.image;
                    }
                    return _0dummy_2.baseAtlas.drawSprite(image, this.pos, this.size, this.rot + _0dummy_2.intp.t, this.color);
                }
                ;
                postFire() {
                    this.maxLife += 24;
                    this._slowVel = _4src_maths_2.v2.create(this.vel);
                    return _4src_maths_2.v2.scale(this._slowVel, 0.2, null);
                }
                ;
                move() {
                    if (this.dead) {
                        return;
                    }
                    if (this.life > this.maxLife / 4) {
                        _4src_maths_2.v2.add(this.pos, this.vel, null);
                    }
                    else {
                        _4src_maths_2.v2.add(this.pos, this._slowVel, null);
                    }
                }
                ;
                tick() {
                    let exp;
                    if (this.life < this.maxLife / 4) {
                        this.life += Math.round(Math.random());
                    }
                    else {
                        this.life += 1;
                        this.scan();
                    }
                    if (this.life > this.maxLife) {
                        this.dead = true;
                    }
                    if (this.dead) {
                        exp = new this.hitExplosion();
                        exp.z = 1000;
                        exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                        if (this.t !== null) {
                            _4src_maths_2.v2.add(exp.pos, _4src_maths_2.v2.scale(this.vel, this.t, null), null);
                        }
                        exp.vel = new Float64Array([0, 0]);
                        exp.rot = 0;
                        exp.radius = 1;
                        _6src_sim_3.Sim.Instance.things[exp.id] = exp;
                    }
                }
                ;
            };
            exports_8("EMPOrb2", EMPOrb2);
            EMPGun2 = class EMPGun2 extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Orb Launcher";
                    this.desc = "Deploys an orb that launches out after a second, at high speed.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turFizzleGun.png";
                    this.size = [2, 2];
                    this.reloadTime = 64;
                    this.trackSpeed = 25;
                    this.bulletCls = EMPOrb2;
                    this.shotEnergy = 2000;
                    this.range = 1400;
                    this.minRange = 450;
                    this.mass = 20;
                    this.bulletSpeed = 39;
                    this.damage = 15;
                    this.energyDamage = 0;
                    this.disable = false;
                }
            };
            exports_8("EMPGun2", EMPGun2);
            BombExplosion = class BombExplosion extends _94src_things_1.AoeExplosion {
                constructor() {
                    super();
                    this.maxLife = 10;
                    this.sound = "sounds/weapons/thud3.wav";
                    this.soundVolume = .25;
                }
                draw() {
                    let ex, i, n, results;
                    super.draw.call(this);
                    if (this.life === 0) {
                        results = [];
                        for (n = i = 1; i < 15; n = ++i) {
                            ex = new _94src_things_1.Debree();
                            ex.image = "fireFlame" + "1.png";
                            ex.z = this.z + (Math.random() - 0.5) * .01;
                            ex.pos = new Float64Array([0, 0]);
                            ex.vel = new Float64Array([0, 0]);
                            _4src_maths_2.v2.set(this.pos, ex.pos);
                            _4src_maths_2.v2.scale(_4src_maths_2.v2.random(ex.vel), Math.random() * 6, null);
                            ex.rot = (Math.random() - 0.5) * Math.PI * 2;
                            ex.vrot = (Math.random() - 0.5);
                            ex.maxLife = 16;
                            ex._pos = _4src_maths_2.v2.create(ex.pos);
                            ex._pos2 = _4src_maths_2.v2.create(ex.pos);
                            ex._rot = ex.rot;
                            ex._rot2 = ex.rot;
                            results.push(_0dummy_2.intp.particles[ex.id] = ex);
                        }
                        return results;
                    }
                }
                ;
            };
            exports_8("BombExplosion", BombExplosion);
            Bomb = class Bomb extends _94src_things_1.AoeBullet {
                constructor() {
                    super();
                    this.image = "bombDormant.png";
                    this.sound = "sounds/weapons/wewewee.wav";
                    this.soundVolume = .03;
                    this.size = [1, 1];
                    this.color = [255, 255, 255, 255];
                    this.explodeClass = BombExplosion;
                    this.trailSize = .1;
                    this.trailTime = 500;
                    this.trail = new _94src_things_1.Trail(this.trailSize, this.trailTime);
                }
                postFire() {
                    this.maxLife += 28;
                    this._slowVel = _4src_maths_2.v2.create(this.vel);
                    _4src_maths_2.v2.scale(this._slowVel, 0, null);
                }
                ;
                move() {
                    if (this.dead) {
                        return;
                    }
                    if (this.life > 28) {
                        return _4src_maths_2.v2.add(this.pos, this.vel, null);
                    }
                    else {
                        return _4src_maths_2.v2.add(this.pos, this._slowVel, null);
                    }
                }
                ;
                tick() {
                    let exp;
                    this.life += 1;
                    if (this.life > this.maxLife) {
                        this.dead = true;
                        if (this.explode) {
                            exp = new BombExplosion();
                            exp.z = 1000;
                            exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                            exp.vel = new Float64Array([0, 0]);
                            exp.rot = 0;
                            exp.aoe = this.aoe;
                            exp.side = this.side;
                            exp.owner = this.owner;
                            exp.damage = this.damage;
                            _6src_sim_3.Sim.Instance.things[exp.id] = exp;
                        }
                    }
                }
                ;
                draw() {
                    let color, dist, size;
                    this.trail.draw(this.pos, this);
                    super.draw.call(this);
                    this.z = 1;
                    if (this.life === 28) {
                        this.image = "export class bombActive.png";
                    }
                    if (this.hitPos) {
                        dist = Math.min(_4src_maths_2.v2.distance(this.pos, new Float64Array(this.hitPos)), 1000);
                        size = Math.pow(1.003, -dist) * this.aoe / 162;
                        color = [255, 0, 0, 80];
                        _0dummy_2.baseAtlas.drawSprite("img/point02.png", this.hitPos, [this.aoe / 256, this.aoe / 256], 0, color);
                        _0dummy_2.baseAtlas.drawSprite("img/fire02.png", this.hitPos, [size * 2, size * 2], 0, color);
                    }
                }
                ;
            };
            exports_8("Bomb", Bomb);
            BombGun = class BombGun extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Phase Bomb Launcher";
                    this.desc = "Fires a powerful mid-range but easy to dodge projectile.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turBomb.png";
                    this.size = [2, 2];
                    this.reloadTime = 60;
                    this.trackSpeed = 25;
                    this.bulletCls = Bomb;
                    this.shotEnergy = 3600;
                    this.range = 650;
                    this.mass = 20;
                    this.bulletSpeed = 16;
                    this.damage = 160;
                    this.onlyInRange = true;
                    this.exactRange = true;
                    this.aoe = 100;
                }
            };
            exports_8("BombGun", BombGun);
            AutoBullet = class AutoBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireAuto.png";
                    this.sound = "sounds/weapons/autocannon.wav";
                    this.size = [.6, .6];
                    this.color = [179, 207, 255, 255];
                    this.hitExplosion = _94src_things_1.SmallHitExplosion;
                }
            };
            exports_8("AutoBullet", AutoBullet);
            AutoTurret = class AutoTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Auto Cannon";
                    this.desc = "Fires five bullets in rapid bursts.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turAutoCannon.png";
                    this.size = [2, 2];
                    this.reloadTime = 53;
                    this.trackSpeed = 25;
                    this.bulletCls = AutoBullet;
                    this.range = 560;
                    this.shotEnergy = 355 * 5;
                    this.mass = 10;
                    this.bulletSpeed = 40;
                    this.damage = 8 * 5;
                    this.fired = 10;
                    this.volley = 5;
                    this.volleyDelay = 2;
                    this.spread = [0, .1, -.1, .2, -.2];
                }
                tick() {
                    super.tick.call(this);
                    if (this.fired < this.volley * this.volleyDelay) {
                        if (this.fired % this.volleyDelay === 0) {
                            this.rot += this.spread[this.fired / 2];
                            this.makeRealBullet();
                        }
                        this.fired += 1;
                        return this.working = true;
                    }
                }
                ;
                makeBullet(distance) {
                    this.unit.cloak = 0;
                    this.fired = 0;
                }
                ;
                makeRealBullet() {
                    let particle;
                    particle = new this.bulletCls();
                    _6src_sim_3.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.owner = this.unit.owner;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    particle.turretNum = this.turretNum;
                    particle.origin = this.unit;
                    particle.target = this.target;
                    particle.speed = this.bulletSpeed;
                    particle.damage = this.damage / 5;
                    particle.maxLife = this.range / particle.speed * 1.5;
                    _4src_maths_2.v2.set(this.worldPos, particle.pos);
                    _4src_maths_2.v2.pointTo(particle.vel, this.rot);
                    _4src_maths_2.v2.scale(particle.vel, particle.speed, null);
                    return particle.rot = this.rot;
                }
                ;
            };
            exports_8("AutoTurret", AutoTurret);
            ShotgunBullet = class ShotgunBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireAuto.png";
                    this.sound = "sounds/weapons/autocannon.wav";
                    this.size = [.6, .6];
                    this.color = [179, 207, 255, 255];
                    this.hitExplosion = _94src_things_1.SmallHitExplosion;
                }
            };
            exports_8("ShotgunBullet", ShotgunBullet);
            Shotgun = class Shotgun extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Shotgun";
                    this.desc = "Fires five bullets in rapid bursts.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turAutoCannon.png";
                    this.size = [2, 2];
                    this.reloadTime = 96;
                    this.trackSpeed = 25;
                    this.bulletCls = AutoBullet;
                    this.range = 450;
                    this.shotEnergy = 355 * 5;
                    this.mass = 15;
                    this.bulletSpeed = 30;
                    this.damage = 8 * 9;
                    this.fired = 9;
                    this.volley = 9;
                    this.spread = [0, .25, -.25, .5, -.5, .75, -.75, 1, -1];
                    this.hide = true;
                    this.disable = true;
                }
                tick() {
                    super.tick.call(this);
                    if (this.fired < this.volley) {
                        if (this.fired % 1 === 0) {
                            this.rot += this.spread[this.fired / 1];
                            this.makeRealBullet();
                        }
                        this.fired += 1;
                        return this.working = true;
                    }
                }
                ;
                makeBullet(distance) {
                    this.unit.cloak = 0;
                    return this.fired = 0;
                }
                ;
                makeRealBullet() {
                    let particle;
                    particle = new this.bulletCls();
                    _6src_sim_3.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.owner = this.unit.owner;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    particle.turretNum = this.turretNum;
                    particle.origin = this.unit;
                    particle.target = this.target;
                    particle.speed = this.bulletSpeed;
                    particle.damage = this.damage / 5;
                    particle.maxLife = this.range / particle.speed * 1.5;
                    _4src_maths_2.v2.set(this.worldPos, particle.pos);
                    _4src_maths_2.v2.pointTo(particle.vel, this.rot);
                    _4src_maths_2.v2.scale(particle.vel, particle.speed, null);
                    return particle.rot = this.rot;
                }
                ;
            };
            exports_8("Shotgun", Shotgun);
            MachineBullet = class MachineBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireBeamSmall.png";
                    this.sound = "sounds/weapons/autocannon.wav";
                    this.size = [.6, .6];
                    this.color = [179, 207, 255, 255];
                    this.hitExplosion = _94src_things_1.SmallHitExplosion;
                }
            };
            exports_8("MachineBullet", MachineBullet);
            MachineGun = class MachineGun extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Machine Gun";
                    this.desc = "Fires fast bullets.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turAutoCannon.png";
                    this.size = [2, 2];
                    this.reloadTime = 5;
                    this.trackSpeed = 25;
                    this.bulletCls = MachineBullet;
                    this.range = 780;
                    this.shotEnergy = 200;
                    this.mass = 10;
                    this.bulletSpeed = 100;
                    this.damage = 4;
                    this.hide = true;
                    this.disable = true;
                }
                makeBullet(distance) {
                    this.rot += (Math.random() - 0.5) * 0.3;
                    super.makeBullet.call(this);
                }
                ;
            };
            exports_8("MachineGun", MachineGun);
            TeslaBolt = class TeslaBolt extends _94src_things_1.LaserBullet {
                constructor() {
                    super();
                    this.image = "ap1.png";
                    this.sound = "sounds/weapons/tesla2.wav";
                    this.size = [.6, .6];
                    this.color = [179, 207, 255, 255];
                    this.drawLength = 250;
                    if (this.image === "zap1.png") {
                        this.image = "zap" + (Math.floor(Math.random() * 4 + 1)) + ".png";
                    }
                }
            };
            exports_8("TeslaBolt", TeslaBolt);
            TeslaTurret = class TeslaTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Tesla Turret";
                    this.desc = "Fires lighting bolts that arc between units.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turTesla.png";
                    this.size = [2, 2];
                    this.reloadTime = 10;
                    this.trackSpeed = 25;
                    this.bulletCls = TeslaBolt;
                    this.range = 540;
                    this.bounceRange = 540;
                    this.shotEnergy = 1500;
                    this.mass = 40;
                    this.damage = 13;
                    this.instant = true;
                    this.bulletSpeed = 2000;
                    this.maxLife = 1;
                    this.maxZap = 10;
                }
                makeBullet(distance) {
                    let i, id, len, ref, results, unit;
                    this.unit.cloak = 0;
                    this.zapped = [];
                    this.zap(this.worldPos, this.target);
                    ref = this.zapped;
                    results = [];
                    for (i = 0, len = ref.length; i < len; i++) {
                        id = ref[i];
                        unit = _6src_sim_3.Sim.Instance.things[id];
                        results.push(unit.applyDamage(this.damage / this.zapped.length, this.unit));
                    }
                    return results;
                }
                ;
                zap(from, unit) {
                    let closestUnit, minD, particle, range;
                    this.zapped.push(unit.id);
                    particle = new this.bulletCls();
                    _6src_sim_3.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.owner = this.unit.owner;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    if (this.zapped.length === 1) {
                        particle.turretNum = this.turretNum;
                        particle.origin = this.unit;
                        if (typeof unit.applyEnergyDamage === "function") {
                            unit.applyEnergyDamage(this.energyDamage);
                        }
                    }
                    else {
                        particle.sound = null;
                    }
                    particle.target = unit;
                    _4src_maths_2.v2.set(from, particle.pos);
                    particle.targetPos = _4src_maths_2.v2.create(particle.target.pos);
                    if (this.zapped.length === this.maxZap) {
                        return;
                    }
                    range = this.bounceRange;
                    minD = range;
                    closestUnit = null;
                    _6src_sim_3.Sim.Instance.unitSpaces[_6src_sim_3.Sim.otherSide(this.unit.side)].findInRange(unit.pos, range + _6src_sim_3.Sim.Instance.maxRadius[_6src_sim_3.Sim.otherSide(this.unit.side)], (function (_this) {
                        return function (other) {
                            let d, ref;
                            if (other.owner === _this.unit.owner) {
                                return false;
                            }
                            if (other.cloakFade === 0 && (ref = other.id, [].indexOf.call(_this.zapped, ref) < 0)) {
                                d = _4src_maths_2.v2.distance(unit.pos, other.pos) - other.radius;
                                if (d < 0) {
                                    d = 0;
                                }
                                if (d < minD) {
                                    minD = d;
                                    closestUnit = other;
                                }
                            }
                            return false;
                        };
                    })(this));
                    if (this.hitsMissiles) {
                        _6src_sim_3.Sim.Instance.bulletSpaces[_6src_sim_3.Sim.otherSide(this.unit.side)].findInRange(unit.pos, range, (function (_this) {
                            return function (other) {
                                let d, ref;
                                if (other.owner === _this.unit.owner) {
                                    return false;
                                }
                                if (ref = other.id, [].indexOf.call(_this.zapped, ref) < 0) {
                                    d = _4src_maths_2.v2.distance(unit.pos, other.pos) - other.radius;
                                    if (d < 0) {
                                        d = 0;
                                    }
                                    if (d < minD) {
                                        minD = d;
                                        closestUnit = other;
                                    }
                                }
                                return false;
                            };
                        })(this));
                    }
                    if (closestUnit) {
                        return this.zap(unit.pos, closestUnit);
                    }
                }
                ;
            };
            exports_8("TeslaTurret", TeslaTurret);
            WavePullArch = class WavePullArch extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireWavePull.png";
                    this.sound = "sounds/weapons/WavePull.wav";
                    this.size = [.5, .5];
                    this.color = [179, 207, 255, 255];
                    this.radius = 30;
                    this.maxRadius = 100;
                    this.direction = 1;
                    this.waveEffect = 0.5;
                    this.hitsMultiple = true;
                    this.hitsCloak = true;
                    this.size = [.5, .5];
                    this.hitOnce = {};
                }
                draw() {
                    this.color[3] = 128 * (1 - this.radius / this.maxRadius);
                    this.size[0] = this.radius / 100;
                    this.size[1] = this.radius / 100;
                    super.draw.call(this);
                }
                ;
                tick() {
                    super.tick.call(this);
                    this.radius += (this.maxRadius - 30) / this.maxLife;
                    if (this.radius > this.maxRadius) {
                        return this.radius = this.maxRadius;
                    }
                }
                ;
                hitUnit(unit) {
                    let amount, dot, p, _wave;
                    if (!this.hitOnce[unit.id]) {
                        unit.applyDamage(this.damage, this);
                        this.hitOnce[unit.id] = true;
                    }
                    p = this.waveEffect * this.damage;
                    _4src_maths_2.v2.norm(this.vel, _wave);
                    _4src_maths_2.v2.scale(_wave, -this.direction, null);
                    dot = _4src_maths_2.v2.dot(unit.vel, _wave);
                    amount = 0;
                    if (dot < p) {
                        amount = p;
                    }
                    _4src_maths_2.v2.scale(_wave, amount, null);
                    _4src_maths_2.v2.add(unit.vel, _wave, null);
                }
                ;
            };
            exports_8("WavePullArch", WavePullArch);
            WavePullTurret = class WavePullTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Gravity Pull Wave";
                    this.desc = "Projects a gravity wave that pulls and damages as it passes through units.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turWavePull.png";
                    this.size = [2, 2];
                    this.reloadTime = 64;
                    this.trackSpeed = 90;
                    this.bulletCls = WavePullArch;
                    this.range = 850;
                    this.shotEnergy = 1200;
                    this.mass = 10;
                    this.bulletSpeed = 35;
                    this.damage = 4;
                    this.multiHit = true;
                }
            };
            exports_8("WavePullTurret", WavePullTurret);
            WavePushArch = class WavePushArch extends WavePullArch {
                constructor() {
                    super();
                    this.image = "fireWavePush.png";
                    this.sound = "sounds/weapons/WavePush.wav";
                    this.direction = -1;
                    this.maxRadius = 100;
                    this.waveEffect = 0.5;
                }
            };
            exports_8("WavePushArch", WavePushArch);
            WavePushTurret = class WavePushTurret extends WavePullTurret {
                constructor() {
                    super();
                    this.name = "Gravity Push Wave";
                    this.desc = "Projects a gravity wave that pushes and damages as it passes through units.";
                    this.image = "turWavePush.png";
                    this.bulletCls = WavePushArch;
                    this.range = 775;
                    this.damage = 5;
                    this.multiHit = true;
                }
            };
            exports_8("WavePushTurret", WavePushTurret);
            FlameBulletGhost = class FlameBulletGhost extends _94src_things_1.Bullet {
                constructor() {
                    super();
                }
                draw() {
                    this.color[0] = Math.max(0, 255 - (260 * this.radius / this.maxRadius));
                    this.color[1] = Math.max(0, 255 - (440 * this.radius / this.maxRadius));
                    this.color[2] = Math.max(0, 255 - (700 * this.radius / this.maxRadius));
                    this.color[3] = 64 * (1.2 - this.radius / this.maxRadius);
                    this.size[0] = this.radius / 100;
                    this.size[1] = this.radius / 100;
                    super.draw.call(this);
                }
                ;
                tick() {
                    super.tick.call(this);
                    this.radius += (this.maxRadius - 3) / this.maxLife;
                    if (this.radius > this.maxRadius) {
                        return this.radius = this.maxRadius;
                    }
                }
                ;
                scan() {
                }
                ;
            };
            exports_8("FlameBulletGhost", FlameBulletGhost);
            FlameBullet = class FlameBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "fireFlame1.png";
                    this.sound = "sounds/weapons/fireFlame.wav";
                    this.size = [0.7, 0.7];
                    this.color = [179, 207, 255, 255];
                    this.radius = 2;
                    this.maxRadius = 64;
                    this.hitsMultiple = true;
                    this.hitsCloak = true;
                    this.createGhost = 0;
                    this.originPos = [0, 0];
                    this.hitOnce = {};
                }
                draw() {
                    let ex, ref, s, w;
                    this.createGhost += 1;
                    if (this.life < 2 && this.createGhost % 3 === 0) {
                        if (this.origin) {
                            w = (ref = this.origin.weapons) != null ? ref[this.turretNum || 0] : void 0;
                            if (w) {
                                _4src_maths_2.v2.set(w.worldPos, new Float64Array(this.originPos));
                                ex = new FlameBulletGhost();
                                ex.main = false;
                                ex.image = "fireFlame" + "1.png";
                                ex.z = this.z + (Math.random() - 0.5) * .01;
                                ex.pos = new Float64Array(this.originPos);
                                ex.vel = new Float64Array(this.vel);
                                s = .3 + .4 * Math.random();
                                ex.size = [s, s];
                                ex.radius = this.radius * 5;
                                ex.maxRadius = this.maxRadius * 5;
                                ex.rot = (Math.random() - 0.5) * Math.PI * 2;
                                ex.vrot = 0;
                                ex.maxLife = this.maxLife;
                                ex._pos = _4src_maths_2.v2.create(ex.pos);
                                ex._pos2 = _4src_maths_2.v2.create(ex.pos);
                                ex._rot = ex.rot;
                                ex._rot2 = ex.rot;
                                _0dummy_2.intp.particles[ex.id] = ex;
                            }
                        }
                    }
                    this.color[0] = Math.max(0, 255 - (260 * this.radius / this.maxRadius));
                    this.color[1] = Math.max(0, 255 - (440 * this.radius / this.maxRadius));
                    this.color[2] = Math.max(0, 255 - (700 * this.radius / this.maxRadius));
                    this.color[3] = 64 * (1.2 - this.radius / this.maxRadius);
                    this.size[0] = this.radius * 0.1;
                    this.size[1] = this.radius * 0.1;
                    super.draw.call(this);
                }
                ;
                tick() {
                    super.tick.call(this);
                    this.radius += (this.maxRadius - 30) / this.maxLife;
                    if (this.radius > this.maxRadius) {
                        return this.radius = this.maxRadius;
                    }
                }
                ;
                hitUnit(unit) {
                    let maxBurn;
                    if (!this.hitOnce[unit.id]) {
                        unit.applyDamage(this.damage, this);
                        maxBurn = (unit.hp + unit.shield) * 1.0;
                        if (unit.burn < maxBurn) {
                            unit.burn += this.burnAmount * this.damage;
                            if (unit.burn > maxBurn) {
                                unit.burn = maxBurn;
                            }
                        }
                        this.hitOnce[unit.id] = true;
                    }
                }
                ;
                postFire() {
                    _4src_maths_2.v2.add(this.pos, this.vel, null);
                    _4src_maths_2.v2.add(this.pos, this.vel, null);
                    this.z += 10;
                    this.rot = Math.PI * 2 * Math.random();
                    this.image = "fireFlame" + "1.png";
                }
                ;
            };
            exports_8("FlameBullet", FlameBullet);
            FlameTurret = class FlameTurret extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Flamethrower";
                    this.desc = "Fires a flame that lights units on fire that deals burn damage over time.";
                    this.hp = 10;
                    this.cost = 5;
                    this.image = "turFlame.png";
                    this.size = [2, 2];
                    this.reloadTime = 8;
                    this.trackSpeed = 90;
                    this.bulletCls = FlameBullet;
                    this.range = 350;
                    this.shotEnergy = 400;
                    this.mass = 15;
                    this.bulletSpeed = 16;
                    this.damage = 2;
                    this.dealsBurnDamage = true;
                    this.burnAmount = 12;
                    this.disable = false;
                }
            };
            exports_8("FlameTurret", FlameTurret);
            AOEWarhead = class AOEWarhead extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Explosive Warhead";
                    this.desc = "Kamikaze warhead dealing damage within an area";
                    this.hp = 0;
                    this.cost = 5;
                    this.mass = 8;
                    this.image = "AOEWarhead.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.aoe = 325;
                    this.life = 16;
                    this.damage = 20;
                    this.tab = "defence";
                    this.explodes = true;
                }
                init() {
                    return this.unit.warhead = true;
                }
                ;
                tick() {
                    let i, len, other, ref, results;
                    if (this.unit.warheadTest !== _6src_sim_3.Sim.Instance.step && (this.unit.shapeDamage == null)) {
                        this.unit.warheadTest = _6src_sim_3.Sim.Instance.step;
                        ref = this.unit.closestEnemies;
                        results = [];
                        for (i = 0, len = ref.length; i < len; i++) {
                            other = ref[i];
                            if (other.owner === this.unit.owner) {
                                continue;
                            }
                            if (_991src_collision_1.CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) <= 50) {
                                results.push(this.unit.hp = 0);
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        return results;
                    }
                }
                ;
                postDeath() {
                    let exp;
                    exp = new _94src_things_1.AoeExplosion();
                    exp.side = this.unit.side;
                    exp.owner = this.unit.owner;
                    exp.z = 1000;
                    exp.pos = _4src_maths_2.v2.create(this.worldPos);
                    exp.vel = new Float64Array([0, 0]);
                    exp.rot = 0;
                    exp.maxLife = this.life;
                    exp.damage = this.damage;
                    exp.aoe = this.aoe;
                    exp.radius = 2;
                    _6src_sim_3.Sim.Instance.things[exp.id] = exp;
                }
                ;
            };
            exports_8("AOEWarhead", AOEWarhead);
            EMPWarhead = class EMPWarhead extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "EMP Warhead";
                    this.desc = "Kamikaze EMP blast draining energy within an area";
                    this.hp = 0;
                    this.cost = 10;
                    this.mass = 5;
                    this.image = "empField.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.aoe = 360;
                    this.life = 16;
                    this.energyDamage = 4000;
                    this.tab = "defence";
                    this.explodes = true;
                }
                init() {
                    return this.unit.warhead = true;
                }
                ;
                tick() {
                    let i, len, other, ref, results;
                    if (this.unit.warheadTest !== _6src_sim_3.Sim.Instance.step && (this.unit.shapeDamage == null)) {
                        this.unit.warheadTest = _6src_sim_3.Sim.Instance.step;
                        ref = this.unit.closestEnemies;
                        results = [];
                        for (i = 0, len = ref.length; i < len; i++) {
                            other = ref[i];
                            if (other.owner === this.unit.owner) {
                                continue;
                            }
                            if (_991src_collision_1.CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) <= 50) {
                                results.push(this.unit.hp = 0);
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        return results;
                    }
                }
                ;
                postDeath() {
                    let exp;
                    exp = new _94src_things_1.AoeExplosion();
                    exp.side = this.unit.side;
                    exp.image = "zaphit" + "1.png";
                    exp.z = 1000;
                    exp.pos = _4src_maths_2.v2.create(this.worldPos);
                    exp.vel = new Float64Array([0, 0]);
                    exp.rot = (Math.random() - 0.5) * 100;
                    exp.maxLife = this.life;
                    exp.energyDamage = this.energyDamage;
                    exp.aoe = this.aoe;
                    exp.radius = 8;
                    _6src_sim_3.Sim.Instance.things[exp.id] = exp;
                }
                ;
            };
            exports_8("EMPWarhead", EMPWarhead);
            FlameWarhead = class FlameWarhead extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.hide = true;
                    this.disable = true;
                    this.name = "Flame Warhead";
                    this.desc = "Kamikaze flame blast applying burn damage within an area";
                    this.hp = 0;
                    this.cost = 5;
                    this.mass = 5;
                    this.image = "decals/Symbol15.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.aoe = 250;
                    this.life = 25;
                    this.damage = 5;
                    this.burnAmount = 10;
                    this.tab = "defence";
                    this.explodes = true;
                }
                init() {
                    return this.unit.warhead = true;
                }
                ;
                tick() {
                    let i, len, other, ref, results;
                    if (this.unit.warheadTest !== _6src_sim_3.Sim.Instance.step && (this.unit.shapeDamage == null)) {
                        this.unit.warheadTest = _6src_sim_3.Sim.Instance.step;
                        ref = this.unit.closestEnemies;
                        results = [];
                        for (i = 0, len = ref.length; i < len; i++) {
                            other = ref[i];
                            if (other.owner === this.unit.owner) {
                                continue;
                            }
                            if (_991src_collision_1.CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) <= 50) {
                                results.push(this.unit.hp = 0);
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        return results;
                    }
                }
                ;
                postDeath() {
                    let exp;
                    exp = new _94src_things_1.AoeExplosion();
                    exp.side = this.unit.side;
                    exp.owner = this.unit.owner;
                    exp.image = "export class fireFlame";
                    exp.z = 1000;
                    exp.pos = _4src_maths_2.v2.create(this.worldPos);
                    exp.vel = new Float64Array([0, 0]);
                    exp.rot = (Math.random() - 0.5) * 100;
                    exp.maxLife = this.life;
                    exp.color[0] = 233;
                    exp.color[1] = 146;
                    exp.color[2] = 86;
                    exp.damage = this.damage;
                    exp.burnAmount = this.burnAmount * this.damage;
                    exp.aoe = this.aoe;
                    exp.radius = 8;
                    _6src_sim_3.Sim.Instance.things[exp.id] = exp;
                }
                ;
            };
            exports_8("FlameWarhead", FlameWarhead);
            ShapedWarhead = class ShapedWarhead extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Shaped Warhead";
                    this.desc = "Explodes on impact dealing instant damage";
                    this.hp = 25;
                    this.cost = 5;
                    this.mass = 20;
                    this.image = "ShapedWarhead.png";
                    this.attach = true;
                    this.size = [2, 2];
                    this.aoe = 0;
                    this.damage = 50;
                    this.doesShapedDamage = true;
                    this.explodes = true;
                    this.tab = "defence";
                }
                init() {
                    let i, len, part, ref, results;
                    this.unit.warhead = true;
                    if (this.unit.shapeDamage == null) {
                        this.unit.shapeDamage = 0;
                        ref = this.unit.export;
                        let results = [];
                        for (i = 0, len = ref.length; i < len; i++) {
                            part = ref[i];
                            if (part.doesShapedDamage) {
                                results.push(this.unit.shapeDamage += this.damage);
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        return results;
                    }
                }
                ;
                tick() {
                    let i, len, other, ref, results;
                    if (this.unit.warheadTest !== _6src_sim_3.Sim.Instance.step) {
                        this.unit.warheadTest = _6src_sim_3.Sim.Instance.step;
                        ref = this.unit.closestEnemies;
                        results = [];
                        for (i = 0, len = ref.length; i < len; i++) {
                            other = ref[i];
                            if (other.owner === this.unit.owner) {
                                continue;
                            }
                            if ((other.maxHP + other.maxShield) * 2 < this.unit.shapeDamage) {
                                continue;
                            }
                            if (_991src_collision_1.CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) > 0) {
                                continue;
                            }
                            this.unit.hp = 0;
                            results.push(other.applyDamage(this.unit.shapeDamage, this.unit.owner));
                        }
                        return results;
                    }
                }
                ;
            };
            exports_8("ShapedWarhead", ShapedWarhead);
            ModPart = class ModPart extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.adjacent = true;
                    this.attach = true;
                    this.size = [2, 2];
                    this.weaponRange = 0;
                    this.weaponRangeFlat = 0;
                    this.weaponDamage = 0;
                    this.weaponSpeed = 0;
                    this.weaponReload = 0;
                    this.weaponEnergy = 0;
                    this.stripe = true;
                    this.tab = "weapons";
                    this.effected_weapons.prototype.bind(this);
                }
                effected_weapons() {
                    let effected, i, len, ref, w;
                    effected = [];
                    ref = this.unit.weapons;
                    for (i = 0, len = ref.length; i < len; i++) {
                        w = ref[i];
                        if (_4src_maths_2.v2.distance(w.pos, this.pos) < 45) {
                            effected.push(w);
                        }
                    }
                    return effected;
                }
                ;
                init() {
                    let effect, i, len, results, w, ws;
                    ws = this.effected_weapons();
                    effect = (1 / 0.85) * (Math.pow(0.85, ws.length));
                    results = [];
                    for (i = 0, len = ws.length; i < len; i++) {
                        w = ws[i];
                        w.weaponRange *= 1 + this.weaponRange / 100 * effect;
                        w.weaponRangeFlat += this.weaponRangeFlat * effect;
                        w.weaponDamage *= 1 + this.weaponDamage / 100 * effect;
                        w.weaponSpeed += this.weaponSpeed / 100 * effect;
                        w.weaponReload *= 1 + this.weaponReload / 100 * effect;
                        results.push(w.weaponEnergy *= 1 + this.weaponEnergy / 100 * effect);
                    }
                    return results;
                }
                ;
            };
            exports_8("ModPart", ModPart);
            TargetingMod = class TargetingMod extends ModPart {
                constructor() {
                    super();
                    this.name = "Targeting Subsystem";
                    this.desc = "Increaces range of adjacent weapons at cost of reload rate. -15% effect for each supported weapon.";
                    this.hp = 10;
                    this.cost = 20;
                    this.mass = 30;
                    this.image = "TargetingMod.png";
                    this.weaponRange = 25;
                    this.weaponReload = 30;
                }
            };
            exports_8("TargetingMod", TargetingMod);
            DamageMod = class DamageMod extends ModPart {
                constructor() {
                    super();
                    this.name = "Overcharger";
                    this.desc = "Increases damage of adjacent weapons at cost of reload rate. -15% effect for each supported weapon";
                    this.cost = 10;
                    this.mass = 10;
                    this.image = "DamageMod.png";
                    this.weaponDamage = 30;
                    this.weaponReload = 15;
                }
            };
            exports_8("DamageMod", DamageMod);
            ReloaderMod = class ReloaderMod extends ModPart {
                constructor() {
                    super();
                    this.name = "Reloader";
                    this.desc = "Decreases reload time of adjacent weapons. -15% effect for each supported weapon";
                    this.cost = 20;
                    this.mass = 10;
                    this.image = "ReloaderMod.png";
                    this.weaponReload = -33;
                }
            };
            exports_8("ReloaderMod", ReloaderMod);
            BulletSpeedMod = class BulletSpeedMod extends ModPart {
                constructor() {
                    super();
                    this.name = "Speed Coils";
                    this.desc = "Adds flat range and flat % bullet speed to adjacent weapons at cost of reload rate. -15% effect for each supported weapon.";
                    this.cost = 5;
                    this.mass = 1;
                    this.hp = 5;
                    this.image = "BulletSpeedMod.png";
                    this.weaponSpeed = 50;
                    this.weaponReload = 15;
                    this.weaponRangeFlat = 50;
                }
            };
            exports_8("BulletSpeedMod", BulletSpeedMod);
            DampenerMod = class DampenerMod extends ModPart {
                constructor() {
                    super();
                    this.name = "Dampener";
                    this.desc = "Decreases energy usage of adjacent weapons at the cost of bullet speed. -15% effect for each supported weapon.";
                    this.cost = 5;
                    this.mass = 5;
                    this.hp = 10;
                    this.image = "dampener.png";
                    this.weaponSpeed = -8;
                    this.weaponEnergy = -25;
                }
            };
            exports_8("DampenerMod", DampenerMod);
            AiPart = class AiPart extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.hp = 0;
                    this.hide = true;
                    this.name = "Missile Only AI";
                    this.desc = "Makes the adjacent turrets shoot only at missiles if close to missile ships. (does not work yet)";
                    this.cost = 5;
                    this.image = "ai01.png";
                    this.attach = true;
                    this.adjacent = true;
                    this.size = [1, 1];
                    this.mass = 1;
                    this.stripe = true;
                    this.tab = "weapons";
                }
            };
            exports_8("AiPart", AiPart);
            Ai1 = class Ai1 extends AiPart {
                constructor() {
                    super();
                    this.hp = 0;
                    this.hide = true;
                    this.name = "Missile Only AI";
                    this.desc = "Makes the adjacent turrets shoot only at missiles if close to missile ships. (does not work yet)";
                    this.cost = 5;
                    this.image = "ai01.png";
                    this.attach = true;
                    this.adjacent = true;
                    this.size = [1, 1];
                    this.mass = 1;
                    this.stripe = true;
                    this.tab = "weapons";
                    this.disable = true;
                }
            };
            exports_8("Ai1", Ai1);
            OverKillAi = class OverKillAi extends AiPart {
                constructor() {
                    super();
                    this.hide = false;
                    this.name = "No Overkill";
                    this.desc = "Makes the adjacent turrets not shoot if it would kill an enemy twice in one shot.";
                    this.cost = 1;
                    this.hp = 4;
                    this.image = "OverKillAi.png";
                    this.attach = true;
                    this.adjacent = true;
                    this.size = [1, 1];
                    this.mass = 1;
                    this.effected_weapons.prototype.bind(this);
                }
                effected_weapons() {
                    let effected, i, len, ref, w;
                    effected = [];
                    ref = this.unit.weapons;
                    for (i = 0, len = ref.length; i < len; i++) {
                        w = ref[i];
                        if (_4src_maths_2.v2.distance(w.pos, this.pos) < 45) {
                            effected.push(w);
                        }
                    }
                    return effected;
                }
                ;
                init() {
                    let i, len, results, w, ws;
                    ws = this.effected_weapons();
                    results = [];
                    for (i = 0, len = ws.length; i < len; i++) {
                        w = ws[i];
                        results.push(w.noOverkill = true);
                    }
                    return results;
                }
                ;
            };
            exports_8("OverKillAi", OverKillAi);
            Ai3 = class Ai3 extends AiPart {
                constructor() {
                    super();
                    this.name = "Accurate AI";
                    this.desc = "Makes the adjacent turrets shoot only at targets is sure really to hit. (does not work yet)";
                    this.cost = 50;
                    this.image = "ai09.png";
                    this.attach = true;
                    this.adjacent = true;
                    this.size = [1, 1];
                    this.mass = 10;
                    this.disable = true;
                }
            };
            exports_8("Ai3", Ai3);
            Ai4 = class Ai4 extends AiPart {
                constructor() {
                    super();
                    this.name = "AOE AI";
                    this.desc = "Makes the adjacent turrets shoot in the middle of groups trying to hit it with AOE damage. (does not work yet)";
                    this.cost = 50;
                    this.image = "ai03.png";
                    this.attach = true;
                    this.adjacent = true;
                    this.size = [1, 1];
                    this.mass = 10;
                    this.disable = true;
                }
            };
            exports_8("Ai4", Ai4);
            SymbolDecal1 = class SymbolDecal1 extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Insignia";
                    this.desc = "Place this on your ship to show off your affiliation.";
                    this.hp = 0;
                    this.decal = true;
                    this.cost = 0;
                    this.image = "decals/Symbol1.png";
                    this.size = [2, 2];
                    this.mass = 0;
                    this.tab = "decal";
                    this.dlc = "Paint Job";
                    this.opacity = 1;
                }
            };
            exports_8("SymbolDecal1", SymbolDecal1);
            SymbolDecal2 = class SymbolDecal2 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol2.png";
                }
            };
            exports_8("SymbolDecal2", SymbolDecal2);
            SymbolDecal3 = class SymbolDecal3 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol3.png";
                }
            };
            exports_8("SymbolDecal3", SymbolDecal3);
            SymbolDecal4 = class SymbolDecal4 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol4.png";
                }
            };
            exports_8("SymbolDecal4", SymbolDecal4);
            SymbolDecal5 = class SymbolDecal5 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol5.png";
                }
            };
            exports_8("SymbolDecal5", SymbolDecal5);
            SymbolDecal6 = class SymbolDecal6 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol6.png";
                }
            };
            exports_8("SymbolDecal6", SymbolDecal6);
            SymbolDecal7 = class SymbolDecal7 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol7.png";
                }
            };
            exports_8("SymbolDecal7", SymbolDecal7);
            SymbolDecal8 = class SymbolDecal8 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol8.png";
                }
            };
            exports_8("SymbolDecal8", SymbolDecal8);
            SymbolDecal9 = class SymbolDecal9 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol9.png";
                }
            };
            exports_8("SymbolDecal9", SymbolDecal9);
            SymbolDecal10 = class SymbolDecal10 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol10.png";
                }
            };
            exports_8("SymbolDecal10", SymbolDecal10);
            SymbolDecal11 = class SymbolDecal11 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol11.png";
                }
            };
            exports_8("SymbolDecal11", SymbolDecal11);
            SymbolDecal12 = class SymbolDecal12 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol12.png";
                }
            };
            exports_8("SymbolDecal12", SymbolDecal12);
            SymbolDecal13 = class SymbolDecal13 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol13.png";
                }
            };
            exports_8("SymbolDecal13", SymbolDecal13);
            SymbolDecal14 = class SymbolDecal14 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol14.png";
                }
            };
            exports_8("SymbolDecal14", SymbolDecal14);
            SymbolDecal15 = class SymbolDecal15 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol15.png";
                }
            };
            exports_8("SymbolDecal15", SymbolDecal15);
            SymbolDecal16 = class SymbolDecal16 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol16.png";
                }
            };
            exports_8("SymbolDecal16", SymbolDecal16);
            SymbolDecal17 = class SymbolDecal17 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol17.png";
                }
            };
            exports_8("SymbolDecal17", SymbolDecal17);
            SymbolDecal18 = class SymbolDecal18 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol18.png";
                }
            };
            exports_8("SymbolDecal18", SymbolDecal18);
            SymbolDecal19 = class SymbolDecal19 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol19.png";
                }
            };
            exports_8("SymbolDecal19", SymbolDecal19);
            SymbolDecal20 = class SymbolDecal20 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol20.png";
                }
            };
            exports_8("SymbolDecal20", SymbolDecal20);
            SymbolDecal21 = class SymbolDecal21 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol21.png";
                }
            };
            exports_8("SymbolDecal21", SymbolDecal21);
            SymbolDecal22 = class SymbolDecal22 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol22.png";
                }
            };
            exports_8("SymbolDecal22", SymbolDecal22);
            SymbolDecal23 = class SymbolDecal23 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol23.png";
                }
            };
            exports_8("SymbolDecal23", SymbolDecal23);
            SymbolDecal24 = class SymbolDecal24 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol24.png";
                }
            };
            exports_8("SymbolDecal24", SymbolDecal24);
            SymbolDecal25 = class SymbolDecal25 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol25.png";
                }
            };
            exports_8("SymbolDecal25", SymbolDecal25);
            SymbolDecal26 = class SymbolDecal26 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol26.png";
                }
            };
            exports_8("SymbolDecal26", SymbolDecal26);
            SymbolDecal27 = class SymbolDecal27 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol27.png";
                }
            };
            exports_8("SymbolDecal27", SymbolDecal27);
            SymbolDecal28 = class SymbolDecal28 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol28.png";
                }
            };
            exports_8("SymbolDecal28", SymbolDecal28);
            SymbolDecal29 = class SymbolDecal29 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol29.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal29", SymbolDecal29);
            SymbolDecal30 = class SymbolDecal30 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol30.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal30", SymbolDecal30);
            SymbolDecal31 = class SymbolDecal31 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol31.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal31", SymbolDecal31);
            SymbolDecal32 = class SymbolDecal32 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol32.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal32", SymbolDecal32);
            SymbolDecal33 = class SymbolDecal33 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol33.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal33", SymbolDecal33);
            SymbolDecal34 = class SymbolDecal34 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol34.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal34", SymbolDecal34);
            SymbolDecal35 = class SymbolDecal35 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol35.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal35", SymbolDecal35);
            SymbolDecal36 = class SymbolDecal36 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol36.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal36", SymbolDecal36);
            SymbolDecal37 = class SymbolDecal37 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol37.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal37", SymbolDecal37);
            SymbolDecal38 = class SymbolDecal38 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol38.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal38", SymbolDecal38);
            SymbolDecal39 = class SymbolDecal39 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol39.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal39", SymbolDecal39);
            SymbolDecal40 = class SymbolDecal40 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.image = "decals/Symbol40.png";
                    this.disable = true;
                }
            };
            exports_8("SymbolDecal40", SymbolDecal40);
            Stripe1x1 = class Stripe1x1 extends SymbolDecal1 {
                constructor() {
                    super();
                    this.name = "Stripe";
                    this.desc = "Stripes make your ships cool.";
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1.png";
                    this.tab = "stripes";
                    this.opacity = 1;
                }
            };
            exports_8("Stripe1x1", Stripe1x1);
            Stripe1x1Corner = class Stripe1x1Corner extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Corner.png";
                }
            };
            exports_8("Stripe1x1Corner", Stripe1x1Corner);
            Stripe1x2 = class Stripe1x2 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 2];
                    this.image = "decals/Stripe1x2.png";
                }
            };
            exports_8("Stripe1x2", Stripe1x2);
            Stripe2x1 = class Stripe2x1 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 1];
                    this.image = "decals/Stripe2x1.png";
                }
            };
            exports_8("Stripe2x1", Stripe2x1);
            Stripe2x2 = class Stripe2x2 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 2];
                    this.image = "decals/Stripe2x2.png";
                }
            };
            exports_8("Stripe2x2", Stripe2x2);
            Stripe2x2Corner = class Stripe2x2Corner extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 2];
                    this.image = "decals/Stripe2x2Corner.png";
                }
            };
            exports_8("Stripe2x2Corner", Stripe2x2Corner);
            Stripe2x2Round = class Stripe2x2Round extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 2];
                    this.image = "decals/Stripe2x2Round.png";
                }
            };
            exports_8("Stripe2x2Round", Stripe2x2Round);
            StripeDouble2x1 = class StripeDouble2x1 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 1];
                    this.image = "decals/StripeDouble2x1.png";
                }
            };
            exports_8("StripeDouble2x1", StripeDouble2x1);
            StripeDouble2x2 = class StripeDouble2x2 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 2];
                    this.image = "decals/StripeDouble2x2.png";
                }
            };
            exports_8("StripeDouble2x2", StripeDouble2x2);
            Stripe1x1Slash = class Stripe1x1Slash extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Slash.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Slash", Stripe1x1Slash);
            Stripe1x1SlashInside = class Stripe1x1SlashInside extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1SlashInside.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1SlashInside", Stripe1x1SlashInside);
            Stripe2x2Slash = class Stripe2x2Slash extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 2];
                    this.image = "decals/Stripe2x2Slash.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe2x2Slash", Stripe2x2Slash);
            Stripe2x2End = class Stripe2x2End extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [2, 2];
                    this.image = "decals/Stripe2x2End.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe2x2End", Stripe2x2End);
            Stripe1x1Fill1 = class Stripe1x1Fill1 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Fill1.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Fill1", Stripe1x1Fill1);
            Stripe1x1Fill2 = class Stripe1x1Fill2 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Fill2.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Fill2", Stripe1x1Fill2);
            Stripe1x1Fill3 = class Stripe1x1Fill3 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Fill3.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Fill3", Stripe1x1Fill3);
            Stripe1x1Fill4 = class Stripe1x1Fill4 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Fill4.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Fill4", Stripe1x1Fill4);
            Stripe1x1Fill5 = class Stripe1x1Fill5 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Fill5.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Fill5", Stripe1x1Fill5);
            Stripe1x1Fill6 = class Stripe1x1Fill6 extends Stripe1x1 {
                constructor() {
                    super();
                    this.size = [1, 1];
                    this.image = "decals/Stripe1x1Fill6.png";
                    this.dlc = "Curves and Shadows";
                }
            };
            exports_8("Stripe1x1Fill6", Stripe1x1Fill6);
            LetterA = class LetterA extends SymbolDecal1 {
                constructor() {
                    super();
                    this.name = "Lettering";
                    this.desc = "Mark your ships.";
                    this.image = "decals/letterA.png";
                    this.tab = "letters";
                    this.flip = false;
                    this.opacity = 1;
                }
            };
            exports_8("LetterA", LetterA);
            LetterB = class LetterB extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterB.png";
                }
            };
            exports_8("LetterB", LetterB);
            LetterC = class LetterC extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterC.png";
                }
            };
            exports_8("LetterC", LetterC);
            LetterD = class LetterD extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterD.png";
                }
            };
            exports_8("LetterD", LetterD);
            LetterE = class LetterE extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterE.png";
                }
            };
            exports_8("LetterE", LetterE);
            LetterF = class LetterF extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterF.png";
                }
            };
            exports_8("LetterF", LetterF);
            LetterG = class LetterG extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterG.png";
                }
            };
            exports_8("LetterG", LetterG);
            LetterH = class LetterH extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterH.png";
                }
            };
            exports_8("LetterH", LetterH);
            LetterI = class LetterI extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterI.png";
                }
            };
            exports_8("LetterI", LetterI);
            LetterJ = class LetterJ extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterJ.png";
                }
            };
            exports_8("LetterJ", LetterJ);
            LetterK = class LetterK extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterK.png";
                }
            };
            exports_8("LetterK", LetterK);
            LetterL = class LetterL extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterL.png";
                }
            };
            exports_8("LetterL", LetterL);
            LetterM = class LetterM extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterM.png";
                }
            };
            exports_8("LetterM", LetterM);
            LetterN = class LetterN extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterN.png";
                }
            };
            exports_8("LetterN", LetterN);
            LetterO = class LetterO extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterO.png";
                }
            };
            exports_8("LetterO", LetterO);
            LetterP = class LetterP extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterP.png";
                }
            };
            exports_8("LetterP", LetterP);
            LetterQ = class LetterQ extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterQ.png";
                }
            };
            exports_8("LetterQ", LetterQ);
            LetterR = class LetterR extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterR.png";
                }
            };
            exports_8("LetterR", LetterR);
            LetterS = class LetterS extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterS.png";
                }
            };
            exports_8("LetterS", LetterS);
            LetterT = class LetterT extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterT.png";
                }
            };
            exports_8("LetterT", LetterT);
            LetterU = class LetterU extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterU.png";
                }
            };
            exports_8("LetterU", LetterU);
            LetterV = class LetterV extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterV.png";
                }
            };
            exports_8("LetterV", LetterV);
            LetterW = class LetterW extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterW.png";
                }
            };
            exports_8("LetterW", LetterW);
            LetterX = class LetterX extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterX.png";
                }
            };
            exports_8("LetterX", LetterX);
            LetterY = class LetterY extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterY.png";
                }
            };
            exports_8("LetterY", LetterY);
            LetterZ = class LetterZ extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterZ.png";
                }
            };
            exports_8("LetterZ", LetterZ);
            LetterPound = class LetterPound extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterPound.png";
                }
            };
            exports_8("LetterPound", LetterPound);
            LetterDot = class LetterDot extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letterDot.png";
                }
            };
            exports_8("LetterDot", LetterDot);
            Letter0 = class Letter0 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter0.png";
                }
            };
            exports_8("Letter0", Letter0);
            Letter1 = class Letter1 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter1.png";
                }
            };
            exports_8("Letter1", Letter1);
            Letter2 = class Letter2 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter2.png";
                }
            };
            exports_8("Letter2", Letter2);
            Letter3 = class Letter3 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter3.png";
                }
            };
            exports_8("Letter3", Letter3);
            Letter4 = class Letter4 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter4.png";
                }
            };
            exports_8("Letter4", Letter4);
            Letter5 = class Letter5 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter5.png";
                }
            };
            exports_8("Letter5", Letter5);
            Letter6 = class Letter6 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter6.png";
                }
            };
            exports_8("Letter6", Letter6);
            Letter7 = class Letter7 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter7.png";
                }
            };
            exports_8("Letter7", Letter7);
            Letter8 = class Letter8 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter8.png";
                }
            };
            exports_8("Letter8", Letter8);
            Letter9 = class Letter9 extends LetterA {
                constructor() {
                    super();
                    this.image = "decals/letter9.png";
                }
            };
            exports_8("Letter9", Letter9);
            Faction = class Faction extends _95src_unit_1.Part {
                constructor() {
                    super();
                    this.name = "Faction Insignia";
                    this.desc = "Place this in your ship to show off your faction affiliation.";
                    this.hp = 4;
                    this.cost = 1;
                    this.size = [2, 2];
                    this.mass = 1;
                    this.tab = "decal";
                    this.opacity = 1;
                    this.faction = "DEV";
                    this.image = "factions/DEV.png";
                    this.disable = true;
                }
            };
            exports_8("Faction", Faction);
            Faction1 = class Faction1 extends Faction {
                constructor() {
                    super();
                    this.faction = "DEV";
                    this.image = "factions/DEV.png";
                }
            };
            exports_8("Faction1", Faction1);
            Faction2 = class Faction2 extends Faction {
                constructor() {
                    super();
                    this.faction = "MOD";
                    this.image = "factions/MOD.png";
                }
            };
            exports_8("Faction2", Faction2);
            Faction3 = class Faction3 extends Faction {
                constructor() {
                    super();
                    this.faction = "KC";
                    this.image = "factions/KC.png";
                }
            };
            exports_8("Faction3", Faction3);
            Faction4 = class Faction4 extends Faction {
                constructor() {
                    super();
                    this.faction = "AUTO";
                    this.image = "factions/AUTO.png";
                }
            };
            exports_8("Faction4", Faction4);
            Faction5 = class Faction5 extends Faction {
                constructor() {
                    super();
                    this.faction = "SIEG";
                    this.image = "factions/SIEG.png";
                }
            };
            exports_8("Faction5", Faction5);
            Faction6 = class Faction6 extends Faction {
                constructor() {
                    super();
                    this.faction = "ISOI";
                    this.image = "factions/ISOI.png";
                }
            };
            exports_8("Faction6", Faction6);
            Faction7 = class Faction7 extends Faction {
                constructor() {
                    super();
                    this.faction = "TKKA";
                    this.image = "factions/TKKA.png";
                }
            };
            exports_8("Faction7", Faction7);
            PartUtils = class PartUtils {
            };
            exports_8("PartUtils", PartUtils);
            BattleCannonBullet = class BattleCannonBullet extends _94src_things_1.StraightMissile {
                constructor() {
                    super();
                    this.image = "battleCannonBullet";
                    this.sound = "sounds/weapons/torp2.wav";
                    this.size = [1, 1];
                    this.radius = 20;
                    this.trailTime = 500;
                }
            };
            exports_8("BattleCannonBullet", BattleCannonBullet);
            BattleCannon = class BattleCannon extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Battle Cannon";
                    this.desc = "Glory to PDables!";
                    this.cost = 5;
                    this.mass = 50;
                    this.hp = 10;
                    this.image = "turBattleCannon.png";
                    this.damage = 29 * 2;
                    this.reloadTime = 80;
                    this.shotEnergy = 3360;
                    this.bulletSpeed = 21;
                    this.size = [2, 2];
                    this.range = 900;
                    this.volley = 2;
                    this.fired = 2;
                    this.spread = [.01, -.01];
                    this.disable = true;
                    this.bulletCls = BattleCannonBullet;
                }
                makeBullet(distance) {
                    this.unit.cloak = 0;
                    this.makeRealBullet(this.spread[0] + this.rot, 0);
                    return this.makeRealBullet(this.spread[1] + this.rot, 1);
                }
                ;
                makeRealBullet(spread, pos) {
                    let particle, tempPos;
                    particle = new this.bulletCls();
                    _6src_sim_3.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    particle.turretNum = this.turretNum;
                    particle.origin = this.unit;
                    particle.target = this.target;
                    particle.speed = this.bulletSpeed;
                    particle.damage = this.damage / 2;
                    particle.maxLife = this.range / particle.speed * 1.5;
                    tempPos = _4src_maths_2.v2.create(this.worldPos);
                    if (pos === 0) {
                        tempPos[0] = 6 * Math.cos(spread) - 6 * Math.sin(spread) + tempPos[0];
                        tempPos[1] = 6 * Math.cos(spread) + 6 * Math.sin(spread) + tempPos[1];
                    }
                    else {
                        tempPos[0] = -6 * Math.cos(spread) + 6 * Math.sin(spread) + tempPos[0];
                        tempPos[1] = -8 * Math.cos(spread) - 8 * Math.sin(spread) + tempPos[1];
                    }
                    _4src_maths_2.v2.set(tempPos, particle.pos);
                    _4src_maths_2.v2.pointTo(particle.vel, spread);
                    _4src_maths_2.v2.scale(particle.vel, particle.speed, null);
                    return particle.rot = spread;
                }
                ;
            };
            exports_8("BattleCannon", BattleCannon);
            Flag = class Flag {
                constructor() {
                    this.image = "export class decals/Symbol12.png";
                    this.color = [245, 171, 53, 255];
                    this.size = [5, 5];
                    this.range = 100;
                    this.stopFriction = .8;
                    this.slow = .85;
                }
            };
            exports_8("Flag", Flag);
            NeedleGunBullet = class NeedleGunBullet extends _94src_things_1.Bullet {
                constructor() {
                    super();
                    this.image = "needleGunBullet";
                    this.sound = "sounds/weapons/blaster1.wav";
                    this.size = [1, 1];
                    this.radius = 20;
                    this.trailTime = 500;
                    this.trailSize = 0.02;
                }
            };
            exports_8("NeedleGunBullet", NeedleGunBullet);
            NeedleGun = class NeedleGun extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Needle Gun";
                    this.desc = "It shoots needles, what else do you expect?";
                    this.cost = 5;
                    this.mass = 15;
                    this.hp = 10;
                    this.image = "turNeedleGun.png";
                    this.damage = 4;
                    this.reloadTime = 5.12;
                    this.shotEnergy = 380;
                    this.bulletSpeed = 34;
                    this.size = [2, 2];
                    this.range = 700;
                    this.fired = 1;
                    this.bulletCls = NeedleGunBullet;
                    this.disable = true;
                }
                makeBullet() {
                    let particle;
                    this.unit.cloak = 0;
                    particle = new NeedleGunBullet();
                    _6src_sim_3.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.owner = this.unit.owner;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    particle.turretNum = this.turretNum;
                    particle.origin = this.unit;
                    particle.weapon = this;
                    particle.target = this.target;
                    particle.speed = this.bulletSpeed;
                    particle.damage = this.damage;
                    particle.energyDamage = this.energyDamage;
                    particle.hitsMissiles = this.hitsMissiles;
                    particle.aoe = this.aoe;
                    particle.burnAmount = this.burnAmount;
                    _4src_maths_2.v2.set(this.worldPos, particle.pos);
                    _4src_maths_2.v2.pointTo(particle.vel, this.rot + Math.random() * .14 - .07);
                    _4src_maths_2.v2.scale(particle.vel, particle.speed, null);
                    particle.rot = _4src_maths_2.v2.angle(particle.vel);
                    return particle.maxLife = Math.floor(this.range / particle.speed * (1 + this.overshoot));
                }
                ;
            };
            exports_8("NeedleGun", NeedleGun);
            ModProjector = class ModProjector extends _95src_unit_1.Turret {
                constructor() {
                    super();
                    this.name = "Mod Effect Projector";
                    this.desc = "Projects mod effects to nearby ships. -15% effect on each armed ship. -40% effect overall";
                    this.hp = 10;
                    this.cost = 30;
                    this.mass = 60;
                    this.image = "focus.png";
                    this.size = [2, 2];
                    this.tab = "weapons";
                    this.range = 500;
                    this.reductionRatio = .2;
                    this.splitRatio = .95;
                    this.useEnergy = 50 / 16;
                    this.projector = true;
                    this.disable = true;
                    this.shotEnergy = 10;
                    this.instant = true;
                    this.bulletCls = _94src_things_1.LaserBullet;
                    this.gimble = false;
                    this.arc = 360;
                    this.weaponRange = 1;
                    this.weaponRangeFlat = 0;
                    this.weaponDamage = 1;
                    this.weaponSpeed = 0;
                    this.weaponReload = 1;
                    this.weaponEnergy = 1;
                    this.noOverkill = false;
                }
                init() {
                    this.weaponRange = 1;
                    this.weaponRangeFlat = 0;
                    this.weaponDamage = 1;
                    this.weaponEnergyDamage = 1;
                    this.weaponSpeed = 1;
                    this.weaponReload = 1;
                    this.weaponEnergy = 1;
                    this.noOverkill = false;
                }
                ;
                tick() {
                    let distance, giveTo, i, len, ref, thing, w, weapons;
                    this.working = false;
                    giveTo = 0;
                    ref = this.unit.closestFriends;
                    for (i = 0, len = ref.length; i < len; i++) {
                        thing = ref[i];
                        weapons = (function () {
                            let j, len1, ref1, results;
                            ref1 = thing.weapons;
                            results = [];
                            for (j = 0, len1 = ref1.length; j < len1; j++) {
                                w = ref1[j];
                                if (!w.projector) {
                                    results.push(w);
                                }
                            }
                            return results;
                        })();
                        if (weapons.length > 0) {
                            distance = _4src_maths_2.v2.distance(this.unit.pos, thing.pos);
                            if (distance < this.range) {
                                giveTo += weapons.length;
                            }
                        }
                    }
                    if (this.unit.energy < this.useEnergy * giveTo) {
                        this.unit.effect = 0;
                        return;
                    }
                    if (giveTo > 0) {
                        this.unit.effect = (1 / this.splitRatio) * (Math.pow(this.splitRatio, giveTo));
                        this.unit.energy -= this.useEnergy * giveTo;
                        return this.working = true;
                    }
                }
                ;
                static applyEffect(n, effect) {
                    return 1 + (n - 1) * effect;
                }
                applyBuffs() {
                    this.unit.projector.weaponRange *= ModProjector.applyEffect(this.weaponRange, this.reductionRatio);
                    this.unit.projector.weaponRangeFlat += this.weaponRangeFlat * this.reductionRatio;
                    this.unit.projector.weaponDamage *= ModProjector.applyEffect(this.weaponDamage, this.reductionRatio);
                    this.unit.projector.weaponEnergyDamage *= ModProjector.applyEffect(this.weaponEnergyDamage, this.reductionRatio);
                    this.unit.projector.weaponSpeed += this.weaponSpeed * this.reductionRatio;
                    this.unit.projector.weaponReload *= ModProjector.applyEffect(this.weaponReload, this.reductionRatio);
                    this.unit.projector.weaponEnergy *= ModProjector.applyEffect(this.weaponEnergy, this.reductionRatio);
                    this.unit.projector.noOverkill = this.noOverkill || this.unit.projector.noOverkill;
                }
                ;
                applyAdditionalBuffs(buffs) {
                }
                ;
                preDraw() {
                    if (this.working) {
                        let r = (this.range + 40) / 255;
                        return _0dummy_2.baseAtlas.drawSprite("img/point02.png", this.unit.pos, [r, r], 0, [255, 128, 128, 30]);
                    }
                }
                ;
                draw() {
                    return this.draw.call(this);
                }
                ;
            };
            exports_8("ModProjector", ModProjector);
        }
    };
});
System.register("istrolid_presskannukovh/95src_unit", ["istrolid_presskannukovh/4src_maths", "istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/94src_things", "istrolid_presskannukovh/993src_utils", "server", "istrolid_presskannukovh/992src_colors", "istrolid_presskannukovh/96src_parts", "istrolid_presskannukovh/0dummy", "istrolid_presskannukovh/991src_collision"], function (exports_9, context_9) {
    "use strict";
    var _4src_maths_3, _6src_sim_4, _94src_things_2, _993src_utils_2, server_1, _992src_colors_1, _96src_parts_1, _0dummy_3, _991src_collision_2, UnitUtils, Unit, Part, Engine, Turret;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (_4src_maths_3_1) {
                _4src_maths_3 = _4src_maths_3_1;
            },
            function (_6src_sim_4_1) {
                _6src_sim_4 = _6src_sim_4_1;
            },
            function (_94src_things_2_1) {
                _94src_things_2 = _94src_things_2_1;
            },
            function (_993src_utils_2_1) {
                _993src_utils_2 = _993src_utils_2_1;
            },
            function (server_1_1) {
                server_1 = server_1_1;
            },
            function (_992src_colors_1_1) {
                _992src_colors_1 = _992src_colors_1_1;
            },
            function (_96src_parts_1_1) {
                _96src_parts_1 = _96src_parts_1_1;
            },
            function (_0dummy_3_1) {
                _0dummy_3 = _0dummy_3_1;
            },
            function (_991src_collision_2_1) {
                _991src_collision_2 = _991src_collision_2_1;
            }
        ],
        execute: function () {
            UnitUtils = class UnitUtils {
                static toShort(spec) {
                    if (!spec) {
                        return null;
                    }
                    return JSON.stringify(spec);
                }
                ;
                static fromShort(rawShort) {
                    let bin, e, i, j, ref, short, spec, type;
                    if (!rawShort) {
                        return {
                            parts: []
                        };
                    }
                    try {
                        if (typeof rawShort === "object") {
                            if (rawShort.parts != null) {
                                return rawShort;
                            }
                        }
                        if (rawShort[0] === "{") {
                            spec = JSON.parse(rawShort);
                            if (!spec.parts) {
                                spec = {
                                    parts: []
                                };
                            }
                            return spec;
                        }
                        else {
                            short = decodeURIComponent(rawShort);
                            bin = new Uint8Array(atob(short).split("").map(function (c) {
                                return c.charCodeAt(0);
                            }));
                            spec = [];
                            for (i = j = 0, ref = bin.length / 3; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                                type = UnitUtils.legacyParts[bin[i * 3 + 2]];
                                if (type) {
                                    spec.push({
                                        pos: [(bin[i * 3 + 0] - 20) * 10, (bin[i * 3 + 1] - 20) * 10],
                                        type: type
                                    });
                                }
                            }
                            return {
                                parts: spec
                            };
                        }
                    }
                    catch (error) {
                        e = error;
                        console.log("Can't decode ship", e, rawShort);
                    }
                    return {
                        parts: []
                    };
                }
                static specCost(spec) {
                    let cost, j, len, part, partCls;
                    cost = 0;
                    if (!Array.isArray(spec)) {
                        spec = UnitUtils.fromShort(spec);
                    }
                    for (j = 0, len = spec.parts.length; j < len; j++) {
                        part = spec.parts[j];
                        if (partCls) {
                            cost += part.cost;
                        }
                    }
                    return cost;
                }
            };
            UnitUtils.legacyParts = [null, "Mount360", "Mount180", "Mount270", "Mount90", "Mount30", "HArmor2x2", "HArmor1x2", "HArmor1x1", "HArmor2x1", "HArmor1x1Angle", "UArmor1x1", "UArmor1x2", "UArmor2x1", "UArmor1x1Angle", "Reactor2x2", "Reactor1x2", "Reactor1x1", "Reactor2x1", "EnergyTransfer", "ShieldGen2x2", "ShieldGen2x1", "Battery1x2", "Battery1x1", "Battery2x1", "Battery2x2", "Engine01", "Engine02", "Engine03", "Engine04", "Engine05", "Engine06", "Engine07", "HArmor2x2Front1", "HArmor2x2Front2", "HArmor1x2Font1", "HArmor1x2Front2", "HArmor2x2Back1", "HArmor2x2Back2", "HArmor1x2Back1", "HArmor1x2Back2", "Wing1x2", "Wing2x2", "Wing2x1", "Wing1x1Notch", "Wing1x1Angle", "Wing1x1Round", "PDTurret", "HeavyPDTurret", "RingTurret", "TorpTurret", "MissileTurret", "ArtilleryTurret", "PlasmaTurret", "LightBeamTurret", "HeavyBeamTurret", "FlackTurret", "SniperGun", "EMPGun", "AOEWarhead", "TargetingMod", "DamageMod", "ReloaderMod", "BulletSpeedMod", "Ai1", "OverKillAi", "Ai3", "Ai4", "ShapedWarhead", "BombGun", "HArmor1x1AngleBack", "UArmor1x1AngleBack", "HArmor2x2Angle", "HArmor2x2AngleBack", "VArmor1x2SideBar", "VArmor1x2SideBarFilled", "VArmor1x2IBeam", "VArmor1x2Corner4", "VArmor1x2End", "VArmor1x1Corner1", "VArmor1x1Corner2", "VArmor1x1Corner3", "VArmor1x1Hook", "VArmor1x1CornerBack", "Mount360Micro", "AutoTurret", "TeslaTurret", "WavePullTurret", "ShieldGen1x1", "WavePushTurret", "CloakGenerator", "SymbolDecal1", "SymbolDecal2", "SymbolDecal3", "SymbolDecal4", "SymbolDecal5", "SymbolDecal6", "SymbolDecal7", "SymbolDecal8", "SymbolDecal9", "SymbolDecal10", "SymbolDecal11", "SymbolDecal12", "SymbolDecal13", "SymbolDecal14", "SymbolDecal15", "SymbolDecal16", "SymbolDecal17", "SymbolDecal18", "SymbolDecal19", "SymbolDecal20", "SymbolDecal21", "SymbolDecal22", "SymbolDecal23", "SymbolDecal24", null, null, null, null, null, "UArmor2x2", "UArmor1x2Notch1", "UArmor1x2Notch2", "UArmor1x1Notch1", "UArmor1x1Notch2", "UArmor1x1Spike", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "VArmor2x2", "VArmor1x2", "VArmor1x1", "VArmor1x1Angle", "VArmor2x2Angle", "VArmor2x2Curve", "VArmor1x1Curve", null, null, null, "HAarmor1x2Curved", "HArmor2x2Curved", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Stripe1x1", "Stripe1x1Corner", "Stripe1x2", "Stripe2x1", "Stripe2x2", "Stripe2x2Corner", "Stripe2x2Round", "StripeDouble2x1", "StripeDouble2x2", null, null, null, null, null, null, null, null, null, null, null, "LetterA", "LetterB", "LetterC", "LetterD", "LetterE", "LetterF", "LetterG", "LetterH", "LetterI", "LetterJ", "LetterK", "LetterL", "LetterM", "LetterN", "LetterO", "LetterP", "LetterQ", "LetterR", "LetterS", "LetterT", "LetterU", "LetterV", "LetterW", "LetterX", "LetterY", "LetterZ", "LetterPound", "LetterDot", null, null, "Letter0", "Letter1", "Letter2", "Letter3", "Letter4", "Letter5", "Letter6", "Letter7", "Letter8", "Letter9", "DroneBody", "Mount10Range", "FlameTurret", "StasisField", "Faction2", "Faction3", "Faction4", "Faction5", "Faction6", "Faction7", "Faction1", null, null, null, null];
            exports_9("UnitUtils", UnitUtils);
            Unit = class Unit extends _94src_things_2.Thing {
                constructor(spec1) {
                    super();
                    this.slice = [].slice;
                    this.hasProp = {}.hasOwnProperty;
                    this.thumb_cache = {};
                    this.name = "";
                    this.canCapture = true;
                    this.multiShoot = false;
                    this.unit = true;
                    this.maxHP = 10;
                    this.buildHP = 0;
                    this.buildSpeed = 10;
                    this.buildRadius = 500;
                    this.radius = 60;
                    this.fixed = false;
                    this.maxSpeed = 100;
                    this.turnSpeed = 1;
                    this.cloak = 0;
                    this.burn = 0;
                    this.jump = 0;
                    this.limitBonus = 0;
                    this.maxJump = 500;
                    this.cost = 100;
                    this.size = [1, 1];
                    this.building = false;
                    this.holdPosition = false;
                    this.stopFriction = 0.9;
                    this.underPlayerControl = false;
                    this.commandPoint = false;
                    this.spec = spec1;
                    this.closestUncloaked.prototype.bind(this);
                    this.closestEnemy.prototype.bind(this);
                    if (this.spec === null) {
                        this.spec = [];
                    }
                    this.side = "0";
                    this.color = [255, 0, 0, 255];
                    this.center = _4src_maths_3.v2.create(null);
                    this.parts = [];
                    this.weapons = [];
                    this.fromSpec(this.spec);
                    this.dead = false;
                    this.z = Math.random();
                    this.pos = _4src_maths_3.v2.create(null);
                    this.vel = _4src_maths_3.v2.create(null);
                    this.active = true;
                    this.rot = 0;
                    this.warpIn = 0;
                    this.cooldown = 0;
                    this.testIntp = [];
                    this.testStep = [];
                    this.orders = [];
                    this.preOrders = [];
                    this.closestEnemies = [];
                    this.closestFriends = [];
                    this.closestEnemyBullets = [];
                }
                static turnAngle(a, b, speed) {
                    let turn = b - a;
                    if (turn > Math.PI) {
                        a += 2 * Math.PI;
                    }
                    else if (turn < -Math.PI) {
                        a -= 2 * Math.PI;
                    }
                    turn = b - a;
                    if (turn < speed && turn > -speed) {
                        return b;
                    }
                    if (turn > speed) {
                        turn = speed;
                    }
                    if (turn < -speed) {
                        turn = -speed;
                    }
                    return a + turn;
                }
                ;
                static angleBetween(a, b) {
                    let turn = b - a;
                    while (turn > Math.PI) {
                        turn -= 2 * Math.PI;
                    }
                    while (turn < -Math.PI) {
                        turn += 2 * Math.PI;
                    }
                    return turn;
                }
                ;
                static partPoints(part) {
                    let size;
                    if (part.dir % 2 === 0) {
                        size = [part.size[0], part.size[1]];
                    }
                    else {
                        size = [part.size[1], part.size[0]];
                    }
                    _4src_maths_3.v2.scale(new Float64Array(size), 10, null);
                    return [
                        _4src_maths_3.v2.add(_4src_maths_3.v2.create(new Float64Array([-size[0], size[1]])), part.pos, null),
                        _4src_maths_3.v2.add(_4src_maths_3.v2.create(new Float64Array([size[0], size[1]])), part.pos, null),
                        _4src_maths_3.v2.add(_4src_maths_3.v2.create(new Float64Array([size[0], -size[1]])), part.pos, null),
                        _4src_maths_3.v2.add(_4src_maths_3.v2.create(new Float64Array([-size[0], -size[1]])), part.pos, null)
                    ];
                }
                static diffCross(u, v, p) {
                    return _4src_maths_3.v2.cross(_4src_maths_3.v2.sub(p, u, new Float64Array([0, 0])), _4src_maths_3.v2.sub(v, u, new Float64Array([0, 0])));
                }
                fromSpec(spec) {
                    this.cost = 0;
                    this.hp = 5;
                    this.jumpDistance = 0;
                    this.jumpCount = 0;
                    this.speed = 0;
                    this.turnSpeed = 1;
                    this.mass = 0;
                    this.energy = 0;
                    this.baseGenEnergy = 2.5;
                    this.genEnergy = this.baseGenEnergy;
                    this.storeEnergy = 0;
                    this.genShield = 0;
                    this.shield = 0;
                    this.cloak = 0;
                    this.radius = 20;
                    this.weaponArc = 0;
                    this.minArc = 0;
                    this.maxRange = 0;
                    this.thrust = 0;
                    this.data = UnitUtils.fromShort(spec);
                    this.name = this.data.name || "";
                    this.aiRules = this.data.aiRules || [];
                    for (let i = 0; i < this.data.parts.length; i++) {
                        let p = this.data.parts[i];
                        if (!this.parts[p.type]) {
                            continue;
                        }
                        let part = new this.parts[p.type];
                        part.unit = this;
                        part.pos = _4src_maths_3.v2.create(p.pos);
                        part.dir = p.dir || 0;
                        part.partNum = i;
                        if (part.weapon) {
                            this.weapons.push(part);
                        }
                        if (p.ghostCopy) {
                            part.ghostCopy = true;
                        }
                        this.parts.push(part);
                        this.cost += part.cost || 0;
                        this.hp += part.hp || 0;
                        this.thrust += part.thrust || 0;
                        this.mass += part.mass;
                        this.turnSpeed += part.turnSpeed || 0;
                        this.genEnergy += part.genEnergy || 0;
                        this.storeEnergy += part.storeEnergy || 0;
                        this.genShield += part.genShield || 0;
                        this.shield += part.shield || 0;
                        this.jumpCount += part.jumpCount || 0;
                        this.limitBonus += part.limitBonus || 0;
                        if (part.arc && this.weaponArc < part.arc) {
                            this.weaponArc = part.arc;
                        }
                        if (part.arc && (this.minArc === 0 || this.minArc > part.arc)) {
                            this.minArc = part.arc;
                        }
                        if (p.type === _96src_parts_1.EnergyTransfer) {
                            if (part.range > this.maxRange) {
                                this.maxRange = part.range;
                            }
                        }
                        if (p.type === _96src_parts_1.StasisField) {
                            this.stasisRange = part.range + Math.sqrt(part.pos * part.pos + this.center * this.center) + 100;
                            if (this.stasisRange > this.maxRange) {
                                this.maxRange = this.stasisRange;
                            }
                        }
                    }
                    this.maxHP = this.hp;
                    this.energy = this.storeEnergy;
                    this.turnSpeed = this.turnSpeed / this.mass;
                    this.maxSpeed = this.thrust / this.mass * 9;
                    this.maxShield = this.shield;
                    this.damageRatio = 1;
                    this.jumpDistance = this.jump = Math.min(this.maxJump / 500, 41 * this.jumpCount / this.mass) * 500;
                    this.computeCenter();
                    for (let i = 0; i < this.parts.length; i++) {
                        let part = this.parts[i];
                        if (typeof part.init === "function") {
                            part.init();
                        }
                    }
                    this.computeRadius();
                    this.computeBoundary();
                    this.weaponRange = 0;
                    this.weaponDPS = 0;
                    this.weaponDamage = 0;
                    for (let i = 0; i < this.weapons.length; i++) {
                        let w = this.weapons[i];
                        w.applyBuffs();
                        w.reloadTime = Math.ceil(w.reloadTime);
                        if (w.reloadTime < 1) {
                            w.reloadTime = 1;
                        }
                        if (w.range > this.weaponRange) {
                            this.weaponRange = w.range;
                        }
                        let reachRange = w.range + _4src_maths_3.v2.distance(w.pos, this.center);
                        if (reachRange > this.maxRange) {
                            this.maxRange = reachRange;
                        }
                        w.dps = w.damage / w.reloadTime;
                        this.weaponDamage += w.damage;
                        this.weaponDPS += w.dps;
                    }
                    this.weapons.sort(function (a, b) {
                        return b.dps - a.dps;
                    });
                    this.mainWeapon = this.weapons[0];
                    for (let i = 0; i < this.weapons.length; i++) {
                        let w = this.weapons[i];
                        w.turretNum = i;
                    }
                    this.moveEnergy = 0;
                    for (let i = 0; i < this.parts.length; i++) {
                        let part = this.parts[i];
                        if (part.thrust > 0) {
                            this.moveEnergy += part.useEnergy;
                        }
                    }
                    this.fireEnergy = 0;
                    let results = [];
                    for (let i = 0; i < this.parts.length; i++) {
                        let part = this.parts[i];
                        if (part.fireEnergy > 0) {
                            results.push(this.fireEnergy += part.fireEnergy);
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                toSpecObj() {
                    let j, len, part, partSpec, ref, specParts;
                    specParts = [];
                    ref = this.parts;
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        partSpec = {
                            pos: [part.pos[0], part.pos[1]],
                            type: part.constructor.name,
                            dir: part.dir,
                            ghostCopy: false,
                        };
                        if (this.ghostCopy || part.ghostCopy) {
                            partSpec.ghostCopy = true;
                            if (part.decal) {
                                continue;
                            }
                        }
                        specParts.push(partSpec);
                    }
                    return {
                        parts: specParts,
                        name: this.name,
                        aiRules: this.aiRules
                    };
                }
                toSpec() {
                    return UnitUtils.toShort(this.toSpecObj());
                }
                computeCenter() {
                    let ix, iy, j, len, mass, part, ref;
                    ix = 0;
                    iy = 0;
                    mass = 0;
                    ref = this.parts;
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        mass += part.mass;
                        ix += part.mass * part.pos[0];
                        iy += part.mass * part.pos[1];
                    }
                    if (mass > 0) {
                        this.center[0] = ix / mass;
                        return this.center[1] = iy / mass;
                    }
                    else {
                        this.center[0] = 0;
                        return this.center[1] = 0;
                    }
                }
                ;
                computeRadius() {
                    let j, len, part, radius, ref, results, v;
                    v = _4src_maths_3.v2.create(null);
                    ref = this.parts;
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        if (!(!part.decal)) {
                            continue;
                        }
                        _4src_maths_3.v2.set(part.pos, v);
                        _4src_maths_3.v2.sub(v, this.center, null);
                        radius = _4src_maths_3.v2.mag(v);
                        if (radius > this.radius) {
                            results.push(this.radius = radius);
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                fn1(p) {
                    return _4src_maths_3.v2.sub(p, this.center, null);
                }
                min(points, fn) {
                    return points.sort(function (a, b) {
                        return fn(a) - fn(b);
                    })[0];
                }
                max(points, fn) {
                    return points.sort(function (a, b) {
                        return fn(b) - fn(a);
                    })[0];
                }
                split(u, v, points) {
                    let p;
                    return (function () {
                        let j, len, results;
                        results = [];
                        for (j = 0, len = points.length; j < len; j++) {
                            p = points[j];
                            if (Unit.diffCross(u, v, new Float64Array(p)) < 0) {
                                results.push(p);
                            }
                        }
                        return results;
                    })();
                }
                extend(u, v, points) {
                    let p1, p2, w;
                    if (!(points != null ? points.length : void 0)) {
                        return [];
                    }
                    w = new Float64Array(this.min(points, function (p) {
                        return Unit.diffCross(u, v, p);
                    }));
                    p1 = new Float64Array(this.split(w, v, points));
                    p2 = new Float64Array(this.split(u, w, points));
                    return this.slice(this.extend(w, v, p1)).concat([w], this.slice.call(this.extend(u, w, p2)));
                }
                findPartPoints(parts) {
                    let j;
                    let l;
                    let len;
                    let len1;
                    let p;
                    let part;
                    let rst = [];
                    for (j = 0, len = parts.length; j < len; j++) {
                        part = parts[j];
                        if (!part.decal) {
                            rst.push.apply(rst, Unit.partPoints(part));
                        }
                    }
                    for (l = 0, len1 = rst.length; l < len1; l++) {
                        p = rst[l];
                        this.fn1(new Float64Array(p));
                    }
                    return new Float64Array(rst);
                }
                computeBoundary() {
                    _6src_sim_4.Sim.Instance.timeStart("computeBoundary");
                    let left;
                    let points;
                    let right;
                    let u;
                    let v;
                    points = this.findPartPoints(this.parts);
                    u = this.min(points, function (p) {
                        return p[0];
                    });
                    v = this.max(points, function (p) {
                        return p[0];
                    });
                    left = new Float64Array(this.split(new Float64Array(u), new Float64Array(v), points));
                    right = new Float64Array(this.split(new Float64Array(v), new Float64Array(u), points));
                    _6src_sim_4.Sim.Instance.timeEnd("computeBoundary");
                    return this.boundPointsLocal = [v].concat(this.slice.call(this.extend(new Float64Array(u), new Float64Array(v), left)), [u], this.slice.call(this.extend(new Float64Array(v), new Float64Array(u), right)));
                }
                toWorld(from) {
                    let p = _4src_maths_3.v2.create(from);
                    _4src_maths_3.v2.rotate(p, this.rot + Math.PI, null);
                    return _4src_maths_3.v2.add(p, this.pos, null);
                }
                computeBoundPoints() {
                    let p;
                    _6src_sim_4.Sim.Instance.timeStart("computeBoundPoints");
                    this.boundPoints = (function () {
                        let j, len, ref, results;
                        ref = this.boundPointsLocal;
                        results = [];
                        for (j = 0, len = ref.length; j < len; j++) {
                            p = ref[j];
                            results.push(this.toWorld(p));
                        }
                        return results;
                    }).call(this);
                    return _6src_sim_4.Sim.Instance.timeEnd("computeBoundPoints");
                }
                getBoundPoints() {
                    if (this.boundPoints == null) {
                        this.computeBoundPoints();
                    }
                    return this.boundPoints;
                }
                applyDamage(d, damager) {
                    if (damager) {
                        this.lastDamager = damager;
                    }
                    this.shield -= d;
                    if (this.shield < 0) {
                        this.hp += this.shield;
                        return this.shield = 0;
                    }
                }
                applyEnergyDamage(d) {
                    return this.energy -= d;
                }
                applyBurnAmount(d) {
                    this.maxBurn = (this.hp + this.shield) * 1.0;
                    if (this.burn < this.maxBurn) {
                        this.burn += d;
                        if (this.burn > this.maxBurn) {
                            return this.burn = this.maxBurn;
                        }
                    }
                }
                postDeath() {
                    let j, len, part, ref;
                    ref = this.parts;
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        if (typeof part.postDeath === "function") {
                            part.postDeath();
                        }
                    }
                    return _6src_sim_4.Sim.Instance.deaths += 1;
                }
                createDebree() {
                    let exp, j, len, part, ref, results;
                    ref = this.parts;
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        if (Math.random() < .5 || part.decal) {
                            continue;
                        }
                        exp = new _94src_things_2.Debree();
                        if (part.stripe) {
                            exp.image = "parts/gray-" + part.image;
                        }
                        else {
                            exp.image = "parts/" + part.image;
                        }
                        exp.z = this.z + (Math.random() - 0.5) * .01;
                        exp.pos = new Float64Array([0, 0]);
                        part.computeWorldPos();
                        _4src_maths_3.v2.set(part.worldPos, exp.pos);
                        _4src_maths_3.v2.set(this.vel, exp.vel);
                        exp.vel[0] += (part.worldPos[0] - this.pos[0]) * .1 + (Math.random() - 0.5);
                        exp.vel[1] += (part.worldPos[1] - this.pos[1]) * .1 + (Math.random() - 0.5);
                        exp.rot = this.rot;
                        exp.vrot = Math.random() - 0.5;
                        results.push(_0dummy_3.intp.particles[exp.id] = exp);
                    }
                    return results;
                }
                gotoAndStop(goto) {
                    return this.setOrder({
                        type: "Move",
                        dest: goto,
                        noStop: true
                    });
                }
                ;
                gotoNoStop(goto) {
                    return this.setOrder({
                        type: "Move",
                        dest: goto,
                        noStop: true
                    });
                }
                cloaked() {
                    return this.cloakFade > 0;
                }
                tick() {
                    _6src_sim_4.Sim.Instance.timeStart("unittick");
                    let burnTick, cloakOn, cloakRange, exp, killer, l, len1, p, part, penalty, ref2, ref4, speed, target;
                    this.closestEnemies = [];
                    this.closestFriends = [];
                    this.closestEnemyBullets = [];
                    _6src_sim_4.Sim.Instance.timeStart("sorts");
                    _6src_sim_4.Sim.Instance.unitSpaces[_6src_sim_4.Sim.otherSide(this.side)].findInRange(this.pos, this.maxRange + _6src_sim_4.Sim.Instance.maxRadius[_6src_sim_4.Sim.otherSide(this.side)] + 500, (function (_this) {
                        return function (u) {
                            if (u.id !== _this.id) {
                                _this.closestEnemies.push(u);
                            }
                            return false;
                        };
                    })(this));
                    _6src_sim_4.Sim.Instance.unitSpaces[this.side].findInRange(this.pos, this.maxRange + _6src_sim_4.Sim.Instance.maxRadius[this.side] + 500, (function (_this) {
                        return function (u) {
                            if (u.id !== _this.id) {
                                _this.closestFriends.push(u);
                            }
                            return false;
                        };
                    })(this));
                    _6src_sim_4.Sim.Instance.bulletSpaces[_6src_sim_4.Sim.otherSide(this.side)].findInRange(this.pos, this.maxRange + 100, (function (_this) {
                        return function (b) {
                            _this.closestEnemyBullets.push(b);
                            return false;
                        };
                    })(this));
                    this.closestEnemies.sort((function (_this) {
                        return function (a, b) {
                            return _4src_maths_3.v2.distanceSq(a.pos, _this.pos) - _4src_maths_3.v2.distanceSq(b.pos, _this.pos);
                        };
                    })(this));
                    this.closestFriends.sort((function (_this) {
                        return function (a, b) {
                            return _4src_maths_3.v2.distanceSq(a.pos, _this.pos) - _4src_maths_3.v2.distanceSq(b.pos, _this.pos);
                        };
                    })(this));
                    this.closestEnemyBullets.sort((function (_this) {
                        return function (a, b) {
                            return _4src_maths_3.v2.distanceSq(a.pos, _this.pos) - _4src_maths_3.v2.distanceSq(b.pos, _this.pos);
                        };
                    })(this));
                    if (this.cloak > 0) {
                        target = this.closestEnemy();
                        if ((target != null) && _991src_collision_2.CollisionUtils.closestDistance(this.getBoundPoints(), target.getBoundPoints()) < 100) {
                            this.cloak = 0;
                        }
                    }
                    _6src_sim_4.Sim.Instance.timeEnd("sorts");
                    _6src_sim_4.Sim.Instance.timeStart("untilparts");
                    if (this.topOrderIs("Follow") &&
                        (_6src_sim_4.Sim.Instance.things[this.orders[0].targetId] != null) &&
                        (_6src_sim_4.Sim.Instance.ffa &&
                            _6src_sim_4.Sim.Instance.things[this.orders[0].targetId].side !== this.side ||
                            _6src_sim_4.Sim.Instance.things[this.orders[0].targetId].owner !== this.owner)) {
                        this.target = _6src_sim_4.Sim.Instance.things[this.orders[0].targetId];
                    }
                    this.boundPoints = null;
                    if (this.cooldown > 0) {
                        this.cooldown -= 1;
                        this.energy = -this.genEnergy * 2;
                    }
                    else if (this.cooldown <= 0) {
                        this.energy = this.storeEnergy;
                        this.cooldown = 0 / 0;
                    }
                    this.slowed = false;
                    if (this.warpIn < 1) {
                        this.warpIn += 1 / 16;
                    }
                    else {
                        this.warpIn = 1;
                    }
                    this.cloakFade = 0;
                    if (this.cloak > 0) {
                        speed = _4src_maths_3.v2.mag(this.vel);
                        if (speed > 1) {
                            this.cloak -= 0.20 / 16 * this.mass;
                        }
                        if (_6src_sim_4.Sim.Instance.step % 16 === 0) {
                            this.cloak -= 0.01 * this.mass;
                        }
                        cloakOn = this.mass * .5;
                        if (this.cloak > cloakOn) {
                            cloakRange = this.mass - cloakOn;
                            this.cloakFade = (this.cloak - cloakOn) / cloakRange;
                        }
                    }
                    if (this.energy < -this.genEnergy * 16 * 3) {
                        this.energy = -this.genEnergy * 16 * 3;
                    }
                    this.energy += this.baseGenEnergy;
                    _6src_sim_4.Sim.Instance.timeEnd("untilparts");
                    _6src_sim_4.Sim.Instance.timeStart("parts");
                    ref2 = this.parts;
                    for (l = 0, len1 = ref2.length; l < len1; l++) {
                        part = ref2[l];
                        part.computeWorldPos();
                        if (part.genEnergy) {
                            this.energy += part.genEnergy;
                        }
                        part.tick();
                    }
                    _6src_sim_4.Sim.Instance.timeEnd("parts");
                    _6src_sim_4.Sim.Instance.timeStart("cooldown");
                    if (this.energy > this.storeEnergy) {
                        this.energy = this.storeEnergy;
                    }
                    if (this.shield > this.maxShield) {
                        this.shield = this.maxShield;
                    }
                    if ((ref4 = this.target) != null ? ref4.dead : void 0) {
                        this.target = null;
                    }
                    if (_6src_sim_4.Sim.Instance.step % 16 === 0) {
                        if (this.burn > 4) {
                            if (this.hp < 4) {
                                this.burn = 0;
                            }
                            burnTick = this.burn * 0.03;
                            this.applyDamage(burnTick, this);
                            this.burn -= burnTick;
                        }
                        else {
                            this.burn = 0;
                        }
                    }
                    if (isNaN(this.cooldown) && this.hp <= 0) {
                        exp = new _94src_things_2.ShipExplosion();
                        exp.z = 1000;
                        exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                        exp.vel = new Float64Array([0, 0]);
                        exp.rot = 0;
                        exp.radius = Math.max(this.mass / 5, 50);
                        _6src_sim_4.Sim.Instance.things[exp.id] = exp;
                        this.dead = true;
                        if (this.building) {
                        }
                        if (_6src_sim_4.Sim.Instance.serverType === "IO") {
                            p = _6src_sim_4.Sim.Instance.players[this.owner];
                            penalty = Math.round(p.maxMoney * _6src_sim_4.Sim.Instance.deathPenalty);
                            p.maxMoney = Math.max(p.maxMoney - penalty, _6src_sim_4.Sim.Instance.defaultMoney);
                            p.money = Math.min(p.money, p.maxMoney);
                            if (this.lastDamager) {
                                killer = _6src_sim_4.Sim.Instance.players[this.lastDamager.owner];
                                if (killer != null) {
                                    killer.earnMoney(Math.round(this.cost * .5));
                                    killer.maxMoney = Math.max(killer.maxMoney, killer.money);
                                }
                            }
                        }
                    }
                    if (this.weapons.length > 0) {
                        _6src_sim_4.Sim.Instance.timeEnd("cooldown");
                        _6src_sim_4.Sim.Instance.timeEnd("unittick");
                        return this.applyNearbyBuffs();
                    }
                    _6src_sim_4.Sim.Instance.timeEnd("cooldown");
                    _6src_sim_4.Sim.Instance.timeEnd("unittick");
                }
                ;
                applyEffect(n, effect) {
                    return 1 + (n - 1) * effect;
                }
                ;
                applyNearbyBuffs() {
                    let buffs, j, l, len, len1, ref, ref1, results, u, w;
                    buffs = {
                        weaponRange: 1,
                        weaponRangeFlat: 0,
                        weaponDamage: 1,
                        weaponEnergyDamage: 1,
                        weaponSpeed: 1,
                        weaponReload: 1,
                        weaponEnergy: 1,
                        noOverkill: false
                    };
                    ref = this.closestFriends;
                    for (j = 0, len = ref.length; j < len; j++) {
                        u = ref[j];
                        if (u.projector && _4src_maths_3.v2.distance(this.pos, u.pos) < _96src_parts_1.ModProjector.range) {
                            buffs.weaponRange *= this.applyEffect(u.projector.weaponRange, u.effect);
                            buffs.weaponRangeFlat += u.projector.weaponRangeFlat * u.effect;
                            buffs.weaponDamage *= this.applyEffect(u.projector.weaponDamage, u.effect);
                            buffs.weaponEnergyDamage *= this.applyEffect(u.projector.weaponDamage, u.effect);
                            buffs.weaponSpeed *= this.applyEffect(u.projector.weaponSpeed, u.effect);
                            buffs.weaponReload *= this.applyEffect(u.projector.weaponReload, u.effect);
                            buffs.weaponEnergy *= this.applyEffect(u.projector.weaponEnergy, u.effect);
                            buffs.noOverkill = buffs.noOverkill || u.projector.noOverkill;
                        }
                    }
                    ref1 = this.weapons;
                    results = [];
                    for (l = 0, len1 = ref1.length; l < len1; l++) {
                        w = ref1[l];
                        results.push(w.applyAdditionalBuffs(buffs));
                    }
                    return results;
                }
                ;
                canBuildHere() {
                    return true;
                }
                ;
                move() {
                    this.movement();
                    if (this.orders.length === 0) {
                        return this.idleAI();
                    }
                }
                ;
                movement() {
                    let current_speed, s;
                    this.runOrders();
                    _4src_maths_3.v2.scale(this.vel, this.stopFriction, null);
                    current_speed = _4src_maths_3.v2.mag(this.vel);
                    if (current_speed < .01) {
                        this.vel[0] = 0;
                        this.vel[1] = 0;
                    }
                    else {
                        _4src_maths_3.v2.add(this.pos, this.vel, null);
                    }
                    s = 20000;
                    if (this.pos[0] > s) {
                        this.pos[0] = s;
                    }
                    if (this.pos[0] < -s) {
                        this.pos[0] = -s;
                    }
                    if (this.pos[1] > s) {
                        this.pos[1] = s;
                    }
                    if (this.pos[1] < -s) {
                        return this.pos[1] = -s;
                    }
                }
                ;
                lookAt(goto) {
                    let rot;
                    let _where;
                    _4src_maths_3.v2.sub(goto, this.pos, _where);
                    rot = _4src_maths_3.v2.angle(_where);
                    if (rot != null) {
                        return this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
                    }
                }
                moveTo(goto, noStop) {
                    let arriveIn, c, curspeed, force, j, len, part, ratio, ref, rot, stopSpeed, turnIn, _where;
                    if (noStop == null) {
                        noStop = false;
                    }
                    if (goto == null) {
                        return;
                    }
                    _4src_maths_3.v2.sub(goto, this.pos, _where);
                    this.gotoDistance = _4src_maths_3.v2.mag(_where);
                    rot = _4src_maths_3.v2.angle(_where);
                    if (rot != null) {
                        this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
                    }
                    if (this.holdPosition) {
                        return;
                    }
                    arriveIn = this.gotoDistance / this.maxSpeed;
                    turnIn = Math.abs(Unit.angleBetween(this.rot, rot)) / this.turnSpeed;
                    curspeed = _4src_maths_3.v2.mag(this.vel);
                    this.stopDistance = 0;
                    if (!noStop) {
                        stopSpeed = curspeed;
                        c = 25;
                        while (stopSpeed > 1 && c > 0) {
                            this.stopDistance += stopSpeed;
                            stopSpeed = stopSpeed * this.stopFriction;
                            c -= 1;
                        }
                    }
                    if (turnIn < arriveIn * .2 && this.gotoDistance > this.stopDistance && this.energy > 0) {
                        force = 0;
                        ref = this.parts;
                        for (j = 0, len = ref.length; j < len; j++) {
                            part = ref[j];
                            if (part.thrust) {
                                if (part.useEnergy < this.energy) {
                                    ratio = 1;
                                }
                                else {
                                    ratio = this.energy / part.useEnergy;
                                }
                                force += part.thrust * ratio;
                                this.energy -= part.useEnergy * ratio;
                            }
                        }
                        _4src_maths_3.v2.pointTo(_where, this.rot);
                        _4src_maths_3.v2.scale(_where, force / this.mass, null);
                        _4src_maths_3.v2.add(this.vel, _where, null);
                    }
                }
                ;
                closestEnemy() {
                    let enemy, j, len, ref, u;
                    enemy = null;
                    ref = this.closestEnemies;
                    for (j = 0, len = ref.length; j < len; j++) {
                        u = ref[j];
                        if (u.owner !== this.owner) {
                            enemy = u;
                            break;
                        }
                    }
                    return enemy;
                }
                ;
                closestUncloaked(range) {
                    let enemyC, j, len, ref, u;
                    enemyC = null;
                    ref = this.closestEnemies;
                    for (j = 0, len = ref.length; j < len; j++) {
                        u = ref[j];
                        if (u.owner !== this.owner) {
                            if (u.cloaked() && !enemyC) {
                                enemyC = u;
                            }
                            else {
                                return u;
                            }
                        }
                    }
                    return enemyC;
                }
                idleAI() {
                    let dist, lookAt, rot, target;
                    if (this.target) {
                        this.softTarget = this.target;
                    }
                    else if (_6src_sim_4.Sim.Instance.step % 16 === 0) {
                        this.softTarget = null;
                        target = this.closestUncloaked(null);
                        if (target && _4src_maths_3.v2.distance(target.pos, this.pos) < this.weaponRange * 3) {
                            this.softTarget = target;
                        }
                    }
                    if (this.softTarget && this.minArc < 360) {
                        lookAt = this.softTarget.pos;
                        let _where = null;
                        _4src_maths_3.v2.sub(lookAt, this.pos, _where);
                        rot = _4src_maths_3.v2.angle(_where);
                        if (Math.abs(this.rot - rot) > .02) {
                            dist = _4src_maths_3.v2.mag(_where);
                            return this.rot = Unit.turnAngle(this.rot, rot, this.turnSpeed);
                        }
                    }
                }
                ;
                draw() {
                    let a, color, j, l, len, len1, part, partNum, r, ref, ref1, s, t, value;
                    if (this.dead) {
                        return;
                    }
                    ref = this.parts;
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        if (typeof part.preDraw === "function") {
                            part.preDraw();
                        }
                        part.computeWorldPos();
                    }
                    if (this.maxShield > 0) {
                        s = this.warpIn * 2 - 1;
                        if (s > 0) {
                            color = [this.color[0], this.color[1], this.color[2], 255 * this.shield / this.maxShield * s];
                            r = (this.radius + 40) / 255;
                            _0dummy_3.baseAtlas.drawSprite("img/point02.png", this.pos, [r, r], 0, color);
                        }
                    }
                    if (this.warpIn < 1) {
                        this.warpIn += 1 / 60;
                    }
                    ref1 = this.parts;
                    for (partNum = l = 0, len1 = ref1.length; l < len1; partNum = ++l) {
                        part = ref1[partNum];
                        value = part.pos[1] / 700 - .5 + this.warpIn;
                        if (value > 0) {
                            part.draw();
                        }
                        else if (value > -0.2) {
                            a = -Math.sin(value / Math.PI * 50);
                            _0dummy_3.baseAtlas.drawSprite("img/unitBar/fire02.png", part.worldPos, [1, 1], 0, [255, 255, 255, 255 * a]);
                        }
                    }
                    if (this.energy / this.storeEnergy < .05) {
                        t = Math.abs(Math.sin(Date.now() / 300));
                        _0dummy_3.baseAtlas.drawSprite("img/unitBar/energy1.png", [this.pos[0], this.pos[1] + 100 + this.radius], [1, 1], 0, [255, 100, 100, t * 200]);
                    }
                    if (_0dummy_3.control.debug && (this._pos2 != null) && this._pos) {
                        a = 16;
                        let _offset = new Float64Array([0, 0]);
                        _offset[0] = this._pos2[0] + (this._pos[0] - this._pos2[0]) * a;
                        _offset[1] = this._pos2[1] + (this._pos[1] - this._pos2[1]) * a;
                        _0dummy_3.baseAtlas.drawSprite("img/pip1.png", this._pos, [1, 1], 0, [0, 255, 0, 255]);
                        _0dummy_3.baseAtlas.drawSprite("img/pip1.png", this.pos, [1, 1], 0, null);
                        return _0dummy_3.baseAtlas.drawSprite("img/pip1.png", this._pos2, [1, 1], 0, [255, 0, 0, 255]);
                    }
                }
                ;
                createFlameEffect() {
                    let exp, part, s;
                    if (Math.random() < .8) {
                        return;
                    }
                    part = this.parts[Math.floor(Math.random() * this.parts.length)];
                    if (part) {
                        exp = new _96src_parts_1.FlameBulletGhost();
                        exp.main = false;
                        exp.image = "parts/fireFlame" + "1.png";
                        exp.z = this.z + (Math.random() - 0.5) * .01;
                        exp.pos = new Float64Array([0, 0]);
                        _4src_maths_3.v2.set(part.worldPos, exp.pos);
                        exp.vel[0] = (Math.random() - 0.5) - .5;
                        exp.vel[1] = (Math.random() - 0.5) - .5;
                        s = .3 + .4 * Math.random();
                        exp.size = [s, s];
                        exp.maxRadius = 300;
                        exp.radius = 10;
                        exp.rot = (Math.random() - 0.5) * Math.PI * 2;
                        exp.vrot = 0;
                        exp.maxLife = 100;
                        exp._pos = _4src_maths_3.v2.create(exp.pos);
                        exp._pos2 = _4src_maths_3.v2.create(exp.pos);
                        exp._rot = exp.rot;
                        exp._rot2 = exp.rot;
                        return _0dummy_3.intp.particles[exp.id] = exp;
                    }
                }
                ;
                clientTick() {
                    let cloakOn, cloakRange, j, len, ref, w;
                    ref = this.weapons;
                    for (j = 0, len = ref.length; j < len; j++) {
                        w = ref[j];
                        if (typeof w.clientTick === "function") {
                            w.clientTick();
                        }
                    }
                    if (this.burn > 0) {
                        this.createFlameEffect();
                    }
                    this.cloakFade = 0;
                    if (this.cloak > 0) {
                        cloakOn = this.mass * .5;
                        if (this.cloak > cloakOn) {
                            cloakRange = this.mass - cloakOn;
                            return this.cloakFade = (this.cloak - cloakOn) / cloakRange;
                        }
                    }
                }
                ;
                thumb() {
                    let image_data_url, j, k, len, part, ref, ref1, scale;
                    k = JSON.stringify(this.spec) + this.color;
                    if (!this.thumb_cache[k]) {
                        _0dummy_3.baseAtlas.startOffscreenFrame();
                        scale = this.radius / 64 * 1.5;
                        if (scale < 1) {
                            scale = 1;
                        }
                        _0dummy_3.baseAtlas.beginSprites([0, 0], scale, [0, 0, -_0dummy_3.baseAtlas.rtt.width, _0dummy_3.baseAtlas.rtt.height]);
                        ref = this.parts;
                        for (j = 0, len = ref.length; j < len; j++) {
                            part = ref[j];
                            part.working = true;
                        }
                        this.draw();
                        if (((ref1 = this.aiRules) != null ? ref1.length : void 0) > 0) {
                            _0dummy_3.baseAtlas.drawSprite("img/pip1.png", [-scale * 64, -scale * 64], [scale, scale], 0, [0, 0, 0, 255]);
                        }
                        _0dummy_3.baseAtlas.finishSprites(false);
                        image_data_url = _0dummy_3.baseAtlas.endOffscreenFrame();
                        this.thumb_cache[k] = image_data_url;
                        return image_data_url;
                    }
                    return this.thumb_cache[k];
                }
                ;
                drawSelection() {
                    let alpha, angle, distance, i, j, len, order, orders, prev, results, target;
                    this.drawHPBar();
                    this.drawEnergyBar();
                    if (this.holdPosition) {
                        _0dummy_3.baseAtlas.drawSprite("img/unitBar/circle.png", this.pos, [1, 1], 0, [255, 255, 255, 100]);
                    }
                    while (this.preOrders.length > 0 && this.preOrders[0].id < this.onOrderId) {
                        this.preOrders.shift();
                    }
                    if (!_0dummy_3.battleMode.shiftOrder && _0dummy_3.battleMode.ordering) {
                        return;
                    }
                    if (this.owner === _0dummy_3.commander.number) {
                        prev = this.pos;
                        orders = this.preOrders;
                        results = [];
                        for (i = j = 0, len = orders.length; j < len; i = ++j) {
                            order = orders[i];
                            if (order.type === "Move") {
                                if (order.dest == null) {
                                    continue;
                                }
                                distance = _4src_maths_3.v2.distance(order.dest, prev);
                                if (i === 0 && distance < 255 + 10) {
                                    alpha = distance - 10;
                                }
                                else {
                                    alpha = 255;
                                }
                                angle = _4src_maths_3.v2.angle(_4src_maths_3.v2.sub(order.dest, prev, _4src_maths_3.v2.create(null)));
                                if (orders.length - 1 === i) {
                                    _0dummy_3.baseAtlas.drawSprite("img/arrow01.png", order.dest, [.9, .9], angle, [255, 255, 255, alpha]);
                                }
                                else {
                                    _0dummy_3.baseAtlas.drawSprite("img/arrow01.png", order.dest, [.8, .8], angle, [255, 255, 255, alpha]);
                                }
                                results.push(prev = order.dest);
                            }
                            else if (order.type === "Follow") {
                                target = _0dummy_3.intp.things[order.targetId];
                                if (target != null) {
                                    results.push(_0dummy_3.baseAtlas.drawSprite("img/unitBar/target.png", target.pos, [1, 1], 0, [255, 0, 0, 100]));
                                }
                                else {
                                    results.push(void 0);
                                }
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        return results;
                    }
                }
                ;
                drawEnergyBar() {
                    let color, healthScale, i, j, max, number, pipScale, ref, results, s;
                    max = this.storeEnergy;
                    if (max < 30000) {
                        healthScale = 1000;
                        pipScale = .5;
                    }
                    else {
                        healthScale = 10000;
                        pipScale = 1;
                    }
                    number = Math.floor(this.storeEnergy / healthScale);
                    results = [];
                    for (i = j = 0, ref = number; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        s = 20;
                        let _pipPos = new Float64Array([0, 0]);
                        _pipPos[0] = (i * s - number * s / 2 - s / 2) * pipScale;
                        _pipPos[1] = 100;
                        if (i < this.energy / healthScale) {
                            color = [169, 208, 232, 255];
                        }
                        else {
                            color = [20, 20, 20, 50];
                        }
                        _4src_maths_3.v2.add(this.pos, _pipPos, _pipPos);
                        results.push(_0dummy_3.baseAtlas.drawSprite("img/unitBar/energyPip.png", _pipPos, [pipScale, pipScale], 0, color));
                    }
                    return results;
                }
                drawHPBar() {
                    let burnColor, color, healthScale, i, j, max, number, pipScale, ref, results, s;
                    burnColor = _992src_colors_1.Colors.blackOrWhite(this.color);
                    max = this.maxHP + this.maxShield;
                    if (max < 300) {
                        healthScale = 10;
                        pipScale = .5;
                    }
                    else {
                        healthScale = 100;
                        pipScale = 1;
                    }
                    number = Math.floor(this.maxHP / healthScale) + Math.floor(this.maxShield / healthScale);
                    results = [];
                    for (i = j = 0, ref = number; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        s = 20;
                        let _pipPos = new Float64Array([0, 0]);
                        _pipPos[0] = (i * s - number * s / 2 - s / 2) * pipScale;
                        _pipPos[1] = 60;
                        if (i < Math.floor(this.maxHP / healthScale)) {
                            if (i < this.hp / healthScale) {
                                color = [this.color[0], this.color[1], this.color[2], 255];
                            }
                            else {
                                color = [20, 20, 20, 50];
                            }
                            if (i < this.cloak / this.mass * this.maxHP / healthScale) {
                                color[3] = 100;
                            }
                            else if (this.cloakFade > 0) {
                                color[3] = 175;
                            }
                        }
                        else {
                            if (i < Math.floor(this.maxHP / healthScale) + this.shield / healthScale) {
                                color = [this.color[0], this.color[1], this.color[2], 100];
                            }
                            else {
                                color = [0, 0, 0, 50];
                            }
                        }
                        _4src_maths_3.v2.add(this.pos, new Float64Array(_pipPos), _pipPos);
                        _0dummy_3.baseAtlas.drawSprite("img/pip1.png", _pipPos, [pipScale, pipScale], 0, color);
                        if (this.burn * 1 / healthScale > i) {
                            results.push(_0dummy_3.baseAtlas.drawSprite("img/unitBar/flame.png", _pipPos, [pipScale * .25, pipScale * .25], Math.PI, burnColor));
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                addOrder(order) {
                    if (this.orders.length < 50) {
                        return this.orders.push(order);
                    }
                }
                setOrder(order) {
                    this.orders = [order];
                    this.target = null;
                }
                aiOrder(order) {
                    order.ai = true;
                    if (this.orders.length > 0 && (this.orders[0].ai || this.orders[0].rally)) {
                        return this.orders[0] = order;
                    }
                    else {
                        return this.orders.unshift(order);
                    }
                }
                stopAi() {
                    if (this.orders.length && this.orders[0].ai) {
                        this.orders.shift();
                        return this.onOrderId += 1;
                    }
                }
                hasHumanOrder() {
                    let j, len, order, ref;
                    ref = this.orders;
                    for (j = 0, len = ref.length; j < len; j++) {
                        order = ref[j];
                        if (!order.ai) {
                            return true;
                        }
                    }
                    return false;
                }
                giveOrder(order, additive) {
                    if (additive) {
                        return this.addOrder(order);
                    }
                    else {
                        return this.setOrder(order);
                    }
                }
                topOrderIs(type) {
                    return this.orders.length > 0 && this.orders[0].type === type;
                }
                runOrders() {
                    let running, topOrder;
                    if (this.dead || this.orders.length === 0) {
                        return;
                    }
                    while (this.orders.length > 0) {
                        topOrder = this.orders[0];
                        this.onOrderId = topOrder.id;
                        running = this.runOrder(topOrder);
                        if (running) {
                            break;
                        }
                        this.orders.shift();
                        this.onOrderId += 1;
                    }
                }
                runOrder(order) {
                    let canTarget, dest, dist;
                    let pos;
                    let range, ref, target;
                    switch (order.type) {
                        case "Follow":
                            target = _6src_sim_4.Sim.Instance.things[order.targetId];
                            if (!target || target.dead) {
                                this.target = null;
                                return false;
                            }
                            canTarget = target.side !== this.side || _6src_sim_4.Sim.Instance.ffa && target.owner !== this.owner;
                            if (canTarget) {
                                this.target = target;
                            }
                            if (!order.range) {
                                if (this.warhead) {
                                    order.range = 0;
                                }
                                else {
                                    if (canTarget && this.weapons.length > 0) {
                                        order.range = this.weaponRange * .9;
                                    }
                                    else {
                                        order.range = (this.radius + target.radius) * 1.5;
                                    }
                                }
                            }
                            range = order.range;
                            if (canTarget && this.weapons.length > 0) {
                                range = Math.max(0, 0.9 * this.mainWeapon.range * (this.mainWeapon.bulletSpeed - _4src_maths_3.v2.mag(target.vel)) / this.mainWeapon.bulletSpeed);
                            }
                            if (target.cloak > 0 && target.cloaked() && canTarget) {
                                range = Math.min(order.range, 50);
                            }
                            return this.moveWithinRange(target.pos, range, order.noStop, order.noFinish) || this.orders.length === 1 || canTarget || !(this.target = null);
                        case "Move":
                            if (order.dest == null) {
                                return false;
                            }
                            range = (ref = order.range) != null ? ref : 0;
                            if (this.orders.length > 1) {
                                range += this.radius * 3;
                            }
                            if (order.begun) {
                                if (this.gotoDistance <= this.stopDistance) {
                                    return false;
                                }
                            }
                            else {
                                order.begun = true;
                            }
                            return this.moveWithinRange(order.dest, range, order.noStop, order.noFinish);
                        case "Flee":
                            pos = order.pos;
                            if (!pos) {
                                pos = order.target.pos;
                            }
                            if (!order.distance) {
                                order.distance = 10000;
                            }
                            dist = _4src_maths_3.v2.distance(this.pos, pos);
                            if (dist > order.distance) {
                                return order.noFinish;
                            }
                            dest = _4src_maths_3.v2.create(null);
                            _4src_maths_3.v2.sub(this.pos, pos, dest);
                            _4src_maths_3.v2.scale(dest, order.distance / _4src_maths_3.v2.mag(dest), null);
                            _4src_maths_3.v2.add(dest, this.pos, null);
                            return this.moveWithinRange(dest, 0, order.noStop, order.noFinish);
                        default:
                            _6src_sim_4.Sim.say("invalid order" + JSON.stringify(order));
                    }
                    return true;
                }
                selfDestruct() {
                    if (_6src_sim_4.Sim.Instance.serverType === "IO") {
                        this.cooldown = 16 * (this.cost / 300 + 2);
                    }
                    return this.hp = 0;
                }
                toggleHoldPosition() {
                    return this.holdPosition = !this.holdPosition;
                }
                stopAndClearOrders() {
                    if (this.orders.length > 0) {
                        this.onOrderId = _993src_utils_2.Utils.last(this.orders).id + 1;
                        this.orders = [];
                    }
                    this.holdPosition = false;
                    this.target = null;
                }
                moveWithinRange(pos, range, noStop, noFinish) {
                    let dist, jumpDist, jumpVec, needDist;
                    dist = _4src_maths_3.v2.distance(this.pos, pos);
                    if (dist < range || (noStop && dist <= this.maxSpeed)) {
                        if (noStop || !this.shouldLookAt(pos)) {
                            this.stopDistance = 0;
                            this.gotoDistance = Number.MAX_SAFE_INTEGER;
                            return false;
                        }
                        return true;
                    }
                    if (this.jump > this.jumpDistance && this.energy > _96src_parts_1.JumpEngine.useEnergy * this.mass && !this.holdPosition) {
                        jumpDist = this.jumpDistance;
                        needDist = _4src_maths_3.v2.distance(this.pos, pos) - Math.max(this.stopDistance, 100);
                        jumpDist = Math.min(jumpDist, needDist);
                        if (jumpDist < this.jumpDistance) {
                            this.energy -= _96src_parts_1.JumpEngine.useEnergy * this.mass;
                            this.cloak -= .25 * this.mass;
                            jumpVec = _4src_maths_3.v2.create(null);
                            _4src_maths_3.v2.sub(pos, this.pos, jumpVec);
                            _4src_maths_3.v2.add(this.pos, jumpVec, null);
                            this.warpIn = 0;
                            this.vel[0] /= 100;
                            this.vel[1] /= 100;
                            this.jump = 0;
                            this.rot = _4src_maths_3.v2.angle(jumpVec);
                            return false;
                        }
                        else {
                            this.moveTo(pos, noStop);
                        }
                        return true;
                    }
                    this.moveTo(pos, noStop);
                    return true;
                }
                shouldLookAt(pos) {
                    let dif, rot;
                    dif = _4src_maths_3.v2.create(null);
                    _4src_maths_3.v2.sub(pos, this.pos, dif);
                    if (_4src_maths_3.v2.mag(dif) < 0.1) {
                        return false;
                    }
                    rot = _4src_maths_3.v2.angle(dif);
                    if (Math.abs(rot - this.rot) < 0.1) {
                        return false;
                    }
                    else {
                        this.lookAt(pos);
                        return true;
                    }
                }
            };
            exports_9("Unit", Unit);
            Part = class Part {
                constructor() {
                    this.hp = 10;
                    this.cost = 10;
                    this.mass = 40;
                    this.rot = 0;
                    this.dir = 0;
                    this.canRotate = true;
                    this.flip = true;
                    this.opacity = 1;
                    this.pos = _4src_maths_3.v2.create(null);
                    this.worldPos = _4src_maths_3.v2.create(null);
                    this.orignalImage = this.image;
                }
                flippedSize() {
                    let xsize, ysize;
                    xsize = this.size[0];
                    ysize = this.size[1];
                    if (this.dir % 2 === 0) {
                        return [xsize, ysize];
                    }
                    else {
                        return [ysize, xsize];
                    }
                }
                computeWorldPos() {
                    _4src_maths_3.v2.set(this.pos, this.worldPos);
                    _4src_maths_3.v2.sub(this.worldPos, this.unit.center, null);
                    _4src_maths_3.v2.rotate(this.worldPos, Math.PI + this.unit.rot, this.worldPos);
                    _4src_maths_3.v2.add(this.worldPos, this.unit.pos, null);
                }
                draw() {
                    let alpha, angle, c, flip, id, num, numParts, rot, showDamage, t;
                    if (this.pos[0] < 0 && this.flip) {
                        flip = -1;
                    }
                    else {
                        flip = 1;
                    }
                    if (this.gimble) {
                        rot = Math.PI + this.rot;
                    }
                    else {
                        rot = Math.PI + this.unit.rot;
                    }
                    angle = Math.PI * this.dir / 2;
                    rot += angle;
                    if (this.canShowDamage && this.image === this.orignalImage) {
                        numParts = this.unit.parts.length;
                        id = this.unit.id;
                        num = this.partNum % numParts;
                        showDamage = num / numParts > this.unit.hp / this.unit.maxHP;
                        if (showDamage) {
                            t = (this.partNum + id) % 3 + 1;
                            this.image = this.orignalImage.replace(".png", ".d" + t + ".png");
                        }
                    }
                    if (this.northWest) {
                        if (this.dir === 0 || this.dir === 2) {
                            this.image = this.orignalImage;
                        }
                        else {
                            this.image = this.orignalImage.replace("N", "W");
                        }
                    }
                    alpha = 255;
                    if (this.unit.cloakFade > 0) {
                        alpha = 255 - this.unit.cloakFade * 200;
                    }
                    if (this.ghostCopy) {
                        alpha = 170;
                    }
                    if (this.stripe) {
                        _0dummy_3.baseAtlas.drawSprite("parts/gray-" + this.image, this.worldPos, [flip, -1], rot, [255, 255, 255, alpha]);
                        c = this.unit.color;
                        return _0dummy_3.baseAtlas.drawSprite("parts/red-" + this.image, this.worldPos, [flip, -1], rot, [c[0], c[1], c[2], alpha]);
                    }
                    else if (this.decal) {
                        c = this.unit.color;
                        return _0dummy_3.baseAtlas.drawSprite("parts/" + this.image, this.worldPos, [flip / this.scale, -1 / this.scale], rot, [c[0], c[1], c[2], alpha * this.opacity]);
                    }
                    else {
                        return _0dummy_3.baseAtlas.drawSprite("parts/" + this.image, this.worldPos, [flip, -1], rot, [255, 255, 255, alpha]);
                    }
                }
                ;
                tick() {
                }
                ;
            };
            exports_9("Part", Part);
            Engine = class Engine extends Part {
                constructor() {
                    super();
                    this.trailSize = .1;
                    this.trailTime = 500;
                    this.canRotate = false;
                    if (typeof server_1.Server.Instance === "undefined" || server_1.Server.Instance === null) {
                        this.trail = new _94src_things_2.Trail(this.trailSize, this.trailTime);
                    }
                }
                preDraw() {
                    return this.trail.draw(this.worldPos, this.unit);
                }
                ;
            };
            exports_9("Engine", Engine);
            Turret = class Turret extends Part {
                constructor() {
                    super();
                    this.tab = "weapons";
                    this.image = "turret01.png";
                    this.gimble = true;
                    this.weapon = true;
                    this.canRotate = false;
                    this.range = 500;
                    this.damage = 0;
                    this.energyDamage = 0;
                    this.bulletSpeed = 1;
                    this.reloadTime = 10;
                    this.overshoot = 0.3;
                    this.minRange = -1000;
                    this.instant = false;
                    this.accuracy = 0;
                    this.exactRange = false;
                    this.arc = 0;
                    this.weaponRange = 1;
                    this.weaponRangeFlat = 0;
                    this.weaponDamage = 1;
                    this.weaponEnergyDamage = 1;
                    this.weaponSpeed = 1;
                    this.weaponReload = 1;
                    this.weaponEnergy = 1;
                    this.noOverkill = false;
                    this.canShoot.prototype.bind(this);
                    this.reload = 0;
                    this.rot = 0;
                    this.fireTimer = 0;
                    this.pos = _4src_maths_3.v2.create(null);
                    this.worldPos = _4src_maths_3.v2.create(null);
                    this.orignalImage = this.image;
                    this.baseStats = {};
                    this._rot = 0;
                    this._rot2 = 0;
                }
                init() {
                    let j, len, part, ref;
                    ref = this.unit.parts;
                    for (j = 0, len = ref.length; j < len; j++) {
                        part = ref[j];
                        if (part.mount && _4src_maths_3.v2.distance(part.pos, this.pos) < .1) {
                            part.turret = this;
                            this.arc = part.arc;
                            if (typeof part.initTurret === "function") {
                                part.initTurret(this);
                            }
                        }
                    }
                }
                applyBuffs() {
                    this.range *= this.weaponRange;
                    this.range += this.weaponRangeFlat;
                    this.damage *= this.weaponDamage;
                    this.energyDamage *= this.weaponDamage;
                    this.bulletSpeed *= this.weaponSpeed;
                    this.reloadTime *= this.weaponReload;
                    this.shotEnergy *= this.weaponEnergy;
                    this.reloadTime = Math.ceil(this.reloadTime);
                    this.fireEnergy = this.shotEnergy / this.reloadTime;
                    this.dps = this.damage / this.reloadTime;
                    this.baseStats.range = this.range;
                    this.baseStats.damage = this.damage;
                    this.baseStats.energyDamage = this.energyDamage;
                    this.baseStats.bulletSpeed = this.bulletSpeed;
                    this.baseStats.reloadTime = this.reloadTime;
                    this.baseStats.shotEnergy = this.shotEnergy;
                    this.baseStats.noOverkill = this.noOverkill;
                }
                applyAdditionalBuffs(buffs) {
                    this.range = this.baseStats.range * buffs.weaponRange + buffs.weaponRangeFlat;
                    this.damage = this.baseStats.damage * buffs.weaponDamage;
                    this.energyDamage = this.baseStats.energyDamage * buffs.weaponDamage;
                    this.bulletSpeed = this.baseStats.bulletSpeed * buffs.weaponSpeed;
                    this.reloadTime = this.baseStats.reloadTime * buffs.weaponReload;
                    this.shotEnergy = this.baseStats.shotEnergy * buffs.weaponEnergy;
                    this.noOverkill = buffs.noOverkill;
                    this.reloadTime = Math.ceil(this.reloadTime);
                    this.fireEnergy = this.shotEnergy / this.reloadTime;
                    this.dps = this.damage / this.reloadTime;
                }
                tick() {
                    let angle, halfArc;
                    if (this.reload > 0) {
                        this.reload -= 1;
                    }
                    this.working = this.reload <= 1 && this.unit.energy > this.shotEnergy;
                    if (!this.target) {
                        this.rot = Unit.turnAngle(this.rot, this.unit.rot, 0.075);
                    }
                    halfArc = this.arc / 180 * Math.PI / 2;
                    angle = Unit.angleBetween(this.unit.rot, this.rot);
                    if (angle > halfArc) {
                        this.rot = this.unit.rot + halfArc;
                    }
                    if (angle < -halfArc) {
                        this.rot = this.unit.rot - halfArc;
                    }
                    if (this.reload === 0 && this.unit.energy >= this.shotEnergy) {
                        if (this.unit.target !== null && this.canShoot(this.unit.target)) {
                            this.target = this.unit.target;
                            return this.fire();
                        }
                        else if (this.target !== null && this.canShoot(this.target)) {
                            return this.fire();
                        }
                        else {
                            return _6src_sim_4.Sim.Instance.timeIt("findTarget", (function (_this) {
                                return function () {
                                    return _this.findTarget();
                                };
                            })(this));
                        }
                    }
                }
                draw() {
                    if (this.working) {
                        this.image = this.orignalImage;
                    }
                    else {
                        this.image = this.orignalImage.replace(".png", "Reload.png");
                    }
                    return super.draw.call(this);
                }
                ;
                clientTick() {
                    let ref, target, th;
                    target = _0dummy_3.intp.things[this.targetId];
                    if (target) {
                        ref = this.aim(target);
                        th = ref[0];
                        this._rot = th;
                    }
                    else {
                        return this._rot = Unit.turnAngle(this._rot, this.unit.rot, 0.075);
                    }
                }
                ;
                aim(thing) {
                    let c, check, current_time, d;
                    let do_pos;
                    let j, max_time, mdown, miss, mup, p, predicted_pos;
                    let radius;
                    let th;
                    if (thing.unit) {
                        radius = 0;
                    }
                    else {
                        radius = thing.radius;
                    }
                    if (this.instant) {
                        p = thing.pos;
                        predicted_pos = new Float64Array([p[0] - this.worldPos[0], p[1] - this.worldPos[1]]);
                        th = _4src_maths_3.v2.angle(predicted_pos);
                        return [th, _4src_maths_3.v2.mag(predicted_pos) - radius];
                    }
                    do_pos = (function (_this) {
                        return function (t) {
                            let v = thing.vel;
                            return [thing.pos[0] - _this.worldPos[0] + v[0] * t, thing.pos[1] - _this.worldPos[1] + v[1] * t];
                        };
                    })(this);
                    check = (function (_this) {
                        return function (t) {
                            let miss, predicted_range;
                            predicted_pos = do_pos(t);
                            predicted_range = _4src_maths_3.v2.mag(new Float64Array(predicted_pos)) - radius;
                            miss = Math.abs(predicted_range - _this.bulletSpeed * t);
                            return miss;
                        };
                    })(this);
                    max_time = this.range / this.bulletSpeed;
                    current_time = 0;
                    d = 2;
                    miss = check(current_time);
                    for (c = j = 0; j < 32; c = ++j) {
                        mdown = check(current_time - max_time / d);
                        mup = check(current_time + max_time / d);
                        if (mdown < miss && mdown < mup) {
                            current_time -= max_time / d;
                            miss = mdown;
                        }
                        if (mup < miss && mup < mdown) {
                            current_time += max_time / d;
                            miss = mup;
                        }
                        if (miss < 1) {
                            break;
                        }
                        d *= 2;
                    }
                    if (current_time < 0) {
                        current_time = 0;
                    }
                    predicted_pos = do_pos(current_time);
                    th = _4src_maths_3.v2.angle(new Float64Array(predicted_pos));
                    return [th, _4src_maths_3.v2.mag(new Float64Array(predicted_pos)) - radius];
                }
                ;
                canShoot(other) {
                    let aimDistance, arcAngle, distance, ref, th;
                    if (!other.unit && !(other.missile && this.hitsMissiles)) {
                        return false;
                    }
                    if (other.dead || (other.applyDamage == null)) {
                        return false;
                    }
                    if (this.unit.id === other.id) {
                        return false;
                    }
                    if (this.unit.side === other.side && (!_6src_sim_4.Sim.Instance.ffa || this.unit.owner === other.owner)) {
                        return false;
                    }
                    if (other.missile && other.explode === false) {
                        return false;
                    }
                    if (other.cloak > 0 && other.cloaked()) {
                        return false;
                    }
                    distance = _4src_maths_3.v2.distance(this.worldPos, other.pos);
                    if (distance > this.range * 2) {
                        return false;
                    }
                    if (this.onlyInRange) {
                        if (distance + other.radius < this.minRange || distance - other.radius > this.range) {
                            return false;
                        }
                    }
                    ref = this.aim(other), th = ref[0], aimDistance = ref[1];
                    if (other.unit) {
                        aimDistance = _991src_collision_2.CollisionUtils.closestDistance(other.getBoundPoints(), [this.worldPos]);
                    }
                    if (aimDistance < this.minRange || aimDistance > this.range) {
                        return false;
                    }
                    arcAngle = Unit.angleBetween(this.unit.rot, th);
                    if (Math.abs(arcAngle) / Math.PI * 180 > this.arc / 2) {
                        return false;
                    }
                    if (this.noOverkill) {
                        if (this.unit.target) {
                            return this.unit.target.id === other.id;
                        }
                        if (other.maxHP * 2 < this.damage) {
                            return false;
                        }
                        if (this.energyDamage && other.storeEnergy * 2 < this.energyDamage) {
                            return false;
                        }
                    }
                    return true;
                }
                findTarget() {
                    let j, l, len, len1, m, ref, ref1, results, u;
                    if (this.unit.target && !this.hitsMissiles) {
                        this.target = this.unit.target;
                        return;
                    }
                    this.target = null;
                    if (this.hitsMissiles) {
                        ref = this.unit.closestEnemyBullets;
                        for (j = 0, len = ref.length; j < len; j++) {
                            m = ref[j];
                            if (this.canShoot(m)) {
                                this.target = m;
                                break;
                            }
                        }
                        if (this.target) {
                            return;
                        }
                    }
                    ref1 = this.unit.closestEnemies;
                    for (l = 0, len1 = ref1.length; l < len1; l++) {
                        u = ref1[l];
                        if (this.canShoot(u)) {
                            this.target = u;
                            break;
                        }
                    }
                }
                fire() {
                    let angleLeft, dist, ref, rot;
                    ref = this.aim(this.target);
                    rot = ref[0];
                    dist = ref[1];
                    this.rot = Unit.turnAngle(this.rot, rot, 1);
                    angleLeft = Unit.angleBetween(this.rot, rot);
                    if (Math.abs(angleLeft) > .01) {
                        return;
                    }
                    this.reload = this.reloadTime;
                    this.unit.energy -= this.shotEnergy;
                    return this.makeBullet(dist);
                }
                makeBullet(distance) {
                    let exp, particle;
                    this.unit.cloak = 0;
                    particle = new this.bulletCls();
                    _6src_sim_4.Sim.Instance.things[particle.id] = particle;
                    particle.side = this.unit.side;
                    particle.owner = this.unit.owner;
                    particle.life = 0;
                    particle.dead = false;
                    particle.z = this.unit.z + .001;
                    particle.turretNum = this.turretNum;
                    particle.origin = this.unit;
                    particle.weapon = this;
                    particle.target = this.target;
                    particle.speed = this.bulletSpeed;
                    particle.damage = this.damage;
                    particle.energyDamage = this.energyDamage;
                    particle.hitsMissiles = this.hitsMissiles;
                    particle.aoe = this.aoe;
                    particle.burnAmount = this.burnAmount;
                    _4src_maths_3.v2.set(this.worldPos, particle.pos);
                    _4src_maths_3.v2.pointTo(particle.vel, this.rot);
                    _4src_maths_3.v2.scale(particle.vel, particle.speed, null);
                    particle.rot = this.rot;
                    if (this.instant) {
                        particle.targetPos = _4src_maths_3.v2.create(particle.target.pos);
                        if (this.target.maxLife) {
                            this.target.life = this.target.maxLife;
                            this.target.explode = false;
                            exp = new _94src_things_2.HitExplosion();
                            exp.z = 1000;
                            exp.pos = new Float64Array([this.target.pos[0], this.target.pos[1]]);
                            exp.vel = new Float64Array([0, 0]);
                            exp.rot = 0;
                            exp.radius = .5;
                            _6src_sim_4.Sim.Instance.things[exp.id] = exp;
                        }
                        else {
                            this.target.applyDamage(particle.damage, this.unit);
                        }
                    }
                    else if (this.exactRange) {
                        particle.maxLife = Math.floor(distance / particle.speed);
                        particle.hitPos = _4src_maths_3.v2.create(null);
                        _4src_maths_3.v2.add(particle.hitPos, particle.vel, null);
                        _4src_maths_3.v2.scale(particle.hitPos, distance / particle.speed, null);
                        _4src_maths_3.v2.add(particle.hitPos, particle.pos, null);
                    }
                    else {
                        particle.maxLife = Math.floor(this.range / particle.speed * (1 + this.overshoot));
                    }
                    return typeof particle.postFire === "function" ? particle.postFire() : void 0;
                }
            };
            exports_9("Turret", Turret);
        }
    };
});
System.register("istrolid_presskannukovh/5src_maps", ["istrolid_presskannukovh/4src_maths", "istrolid_presskannukovh/1src_mtwist", "istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/94src_things", "istrolid_presskannukovh/95src_unit", "server"], function (exports_10, context_10) {
    "use strict";
    var _4src_maths_4, _1src_mtwist_1, _6src_sim_5, _94src_things_3, _95src_unit_2, server_2, IstrolidMap, Mapping;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (_4src_maths_4_1) {
                _4src_maths_4 = _4src_maths_4_1;
            },
            function (_1src_mtwist_1_1) {
                _1src_mtwist_1 = _1src_mtwist_1_1;
            },
            function (_6src_sim_5_1) {
                _6src_sim_5 = _6src_sim_5_1;
            },
            function (_94src_things_3_1) {
                _94src_things_3 = _94src_things_3_1;
            },
            function (_95src_unit_2_1) {
                _95src_unit_2 = _95src_unit_2_1;
            },
            function (server_2_1) {
                server_2 = server_2_1;
            }
        ],
        execute: function () {
            IstrolidMap = class IstrolidMap {
                constructor(rockColor, spotColor, fillColor, makeRocks) {
                    this.rockColor = rockColor;
                    this.spotColor = spotColor;
                    this.fillColor = fillColor;
                    this.makeRocks = makeRocks;
                }
            };
            exports_10("IstrolidMap", IstrolidMap);
            Mapping = class Mapping {
                static chooseNumber(n) {
                    let i, j;
                    i = Math.floor(_4src_maths_4.v2.random(new Float64Array([0, 0]))[0] * n) + 1;
                    j = i.toString();
                    if (j.length === 1) {
                        return "0" + j;
                    }
                    return j;
                }
                ;
                static chooseOne(l) {
                    return l[Math.floor(_4src_maths_4.v2.random(new Float64Array([0, 0]))[0] * l.length)];
                }
                ;
                static randomVector(v) {
                    v[0] = -0.5 + _4src_maths_4.v2.random(new Float64Array([0, 0]))[0];
                    v[1] = -0.5 + _4src_maths_4.v2.random(new Float64Array([0, 0]))[1];
                    return _4src_maths_4.v2.norm(new Float64Array(v), null);
                }
                ;
                static cp(r, th, side) {
                    let point;
                    point = new _94src_things_3.CommandPoint();
                    point.z = -.01;
                    point.pos[0] = Math.cos(th) * r * _6src_sim_5.Sim.Instance.mapScale;
                    point.pos[1] = Math.sin(th) * r * _6src_sim_5.Sim.Instance.mapScale;
                    point.side = side;
                    return _6src_sim_5.Sim.Instance.things[point.id] = point;
                }
                ;
                static closest(pos, fn, maxDist) {
                    let _, dist, minDist, minT, ref, t;
                    if (maxDist == null) {
                        maxDist = 10000000;
                    }
                    minDist = 0;
                    minT = null;
                    ref = _6src_sim_5.Sim.Instance.things;
                    for (_ in ref) {
                        t = ref[_];
                        if (fn(t)) {
                            dist = _4src_maths_4.v2.distance(pos, t.pos);
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
                ;
                static p(pos) {
                    return [Math.floor(pos[0]), Math.floor(pos[1])];
                }
                generate(seed) {
                    this.mr = new _1src_mtwist_1.MTwist(seed);
                    _6src_sim_5.Sim.Instance.things = [];
                    _6src_sim_5.Sim.Instance.theme = Mapping.chooseOne(Mapping.themes);
                    switch (_6src_sim_5.Sim.Instance.serverType) {
                        case "Survival":
                        case "IO":
                        case "CTF":
                        case "TicTacToe":
                        case "FFA":
                            server_2.Server.Instance.say("Other gamemodes are currently not migrated");
                            break;
                        default:
                            this.genSymmetrical();
                    }
                }
                ;
                genSymmetrical() {
                    let _, i, m, o, ref, tooClose;
                    let alpha_spawn = new _94src_things_3.SpawnPoint();
                    alpha_spawn.side = "alpha";
                    alpha_spawn.spawn = "alpha";
                    alpha_spawn.pos[0] = -_6src_sim_5.Sim.Instance.mapScale * 3000;
                    alpha_spawn.pos[1] = this.mr.random() * 3000 - 1500;
                    _6src_sim_5.Sim.Instance.things[alpha_spawn.id] = alpha_spawn;
                    let beta_spawn = new _94src_things_3.SpawnPoint();
                    beta_spawn.side = "beta";
                    beta_spawn.spawn = "beta";
                    beta_spawn.pos[0] = _6src_sim_5.Sim.Instance.mapScale * 3000;
                    beta_spawn.pos[1] = -alpha_spawn.pos[1];
                    _6src_sim_5.Sim.Instance.things[beta_spawn.id] = beta_spawn;
                    let results = [];
                    for (i = m = 0, ref = _6src_sim_5.Sim.Instance.numComPoints / 2; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
                        let commandPoint = new _94src_things_3.CommandPoint();
                        commandPoint.z = -.01;
                        if (i === 0) {
                            _4src_maths_4.v2.set(alpha_spawn.pos, commandPoint.pos);
                            let from_center = _4src_maths_4.v2.mag(commandPoint.pos);
                            _4src_maths_4.v2.scale(commandPoint.pos, (from_center - 1500) / from_center, null);
                        }
                        else {
                            for (i = o = 0; o < 10; i = ++o) {
                                tooClose = false;
                                Mapping.randomVector(commandPoint.pos);
                                _4src_maths_4.v2.scale(commandPoint.pos, (300 + this.mr.random() * 2000) * _6src_sim_5.Sim.Instance.mapScale, null);
                                let ref1 = _6src_sim_5.Sim.Instance.things;
                                for (_ in ref1) {
                                    let t = ref1[_];
                                    if (_4src_maths_4.v2.distance(t.pos, commandPoint.pos) < (t.radius + commandPoint.radius + 100)) {
                                        tooClose = true;
                                        break;
                                    }
                                }
                                if (!tooClose) {
                                    break;
                                }
                            }
                        }
                        _6src_sim_5.Sim.Instance.things[commandPoint.id] = commandPoint;
                        let beta_commandpoint = new _94src_things_3.CommandPoint();
                        beta_commandpoint.z = -.01;
                        beta_commandpoint.pos[0] = -commandPoint.pos[0];
                        beta_commandpoint.pos[1] = -commandPoint.pos[1];
                        commandPoint.side = "alpha";
                        beta_commandpoint.side = "beta";
                        results.push(_6src_sim_5.Sim.Instance.things[beta_commandpoint.id] = beta_commandpoint);
                    }
                    return results;
                }
                ;
                genTower() {
                    let _, i, ref, results, spec, thing, u;
                    ref = _6src_sim_5.Sim.Instance.things;
                    results = [];
                    for (_ in ref) {
                        thing = ref[_];
                        if (thing.commandPoint) {
                            spec = Mapping.chooseOne(Mapping.forts);
                        }
                        else {
                            continue;
                        }
                        u = new _95src_unit_2.Unit(spec);
                        u.pos = _4src_maths_4.v2.create(thing.pos);
                        u.side = thing.side;
                        u.rot = _4src_maths_4.v2.angle(u.pos) + Math.PI;
                        _6src_sim_5.Sim.Instance.things[u.id] = u;
                        results.push((function () {
                            let m, results1;
                            results1 = [];
                            for (i = m = 0; m < 6; i = ++m) {
                                if (thing.commandPoint) {
                                    spec = Mapping.blocks[0];
                                }
                                else {
                                    continue;
                                }
                                u = new _95src_unit_2.Unit(spec);
                                u.pos = _4src_maths_4.v2.create(thing.pos);
                                u.pos[0] += Math.sin(i / 3 * Math.PI) * thing.radius * .8;
                                u.pos[1] += Math.cos(i / 3 * Math.PI) * thing.radius * .8;
                                u.side = thing.side;
                                u.rot = Math.PI / 2;
                                results1.push(_6src_sim_5.Sim.Instance.things[u.id] = u);
                            }
                            return results1;
                        })());
                    }
                    return results;
                }
                ;
            };
            Mapping.main = new IstrolidMap([63, 85, 96, 255], [115, 193, 226, 255], [123, 63, 68, 255], true);
            Mapping.grayblue = new IstrolidMap([127, 140, 141, 255], [189, 195, 199, 255], [44, 62, 80, 255], true);
            Mapping.orange = new IstrolidMap([219, 136, 79, 255], [243, 156, 18, 255], [192, 70, 53, 255], true);
            Mapping.blue = new IstrolidMap([211, 241, 240, 255], [24, 203, 193, 255], [28, 107, 132, 255], true);
            Mapping.fadered = new IstrolidMap([34, 32, 86, 255], [255, 187, 132, 255], [240, 88, 82, 255], true);
            Mapping.tealwhite = new IstrolidMap([209, 202, 185, 255], [159, 200, 170, 255], [85, 134, 120, 255], true);
            Mapping.whitepurple = new IstrolidMap([23, 41, 117, 255], [188, 210, 219, 255], [106, 86, 133, 255], true);
            Mapping.darkness = new IstrolidMap([27, 36, 40, 255], [202, 222, 232, 255], [48, 62, 75, 255], false);
            Mapping.moonyellow = new IstrolidMap([171, 164, 136, 255], [228, 211, 159, 255], [55, 81, 92, 255], true);
            Mapping.pinkpurple = new IstrolidMap([181, 154, 146, 255], [220, 171, 169, 255], [90, 54, 99, 255], true);
            Mapping.greenbrown = new IstrolidMap([50, 36, 40, 255], [178, 188, 170, 255], [100, 64, 62, 255], true);
            Mapping.bluebrown = new IstrolidMap([123, 109, 141, 255], [132, 153, 177, 255], [73, 59, 42, 255], true);
            Mapping.tealorange = new IstrolidMap([255, 74, 0, 255], [68, 206, 197, 255], [200, 52, 0, 255], false);
            Mapping.greenpurple = new IstrolidMap([77, 83, 130, 255], [140, 186, 128, 255], [81, 70, 99, 255], true);
            Mapping.lemondarkred = new IstrolidMap([193, 188, 106, 255], [240, 230, 145, 255], [120, 25, 25, 255], true);
            Mapping.tanslate = new IstrolidMap([61, 44, 46, 255], [173, 144, 136, 255], [66, 76, 85, 255], true);
            Mapping.redgreen = new IstrolidMap([115, 226, 167, 255], [110, 190, 155, 255], [170, 130, 150, 255], true);
            Mapping.yellowpuce = new IstrolidMap([230, 175, 46, 255], [230, 213, 99, 255], [99, 43, 48, 255], true);
            Mapping.yellowcyan = new IstrolidMap([228, 207, 116, 255], [185, 175, 95, 255], [60, 133, 111, 255], true);
            Mapping.space = new IstrolidMap([200, 255, 200, 255], [0, 0, 0, 255], [0, 0, 50, 255], true);
            Mapping.ghostly = new IstrolidMap([0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 255], true);
            Mapping.green = new IstrolidMap([33, 33, 33, 255], [67, 160, 71, 10], [135, 205, 142, 255], true);
            Mapping.purpleyellow = new IstrolidMap([0, 105, 92, 255], [94, 53, 177, 255], [255, 235, 59, 100], true);
            Mapping.blackred = new IstrolidMap([255, 234, 0, 255], [15, 15, 15, 255], [200, 0, 0, 255], true);
            Mapping.greenorange = new IstrolidMap([255, 234, 0, 255], [27, 94, 32, 255], [255, 111, 0, 255], true);
            Mapping.bluepurple = new IstrolidMap([255, 234, 0, 255], [1, 87, 155, 255], [216, 27, 96, 255], true);
            Mapping.themes = [
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
            Mapping.blocks = ["ExULFRUIERUIExcIExMI", "FBQUExgHGBUJFRAHEBMJEBUJFRgHExAHGBMJ"];
            Mapping.towers = ["ERQQFxQQEREIFxEIFBcJFBEJERcKFxcKFBQBFBQw", "FBQDERQQFxQQEREIFxEIFBcJFBEJERcKFxcKFBQy", "ERQQFBcJFxQQEREIFxEIFBQDERcKFxcKFBESFBQ4", "ERQQFBcJFxQQEREIFxEIFBQDERcKFxcKFBESFBQ1"];
            Mapping.forts = ["FBQDGRcKEBQPDxcKDxEIGBQPGREIEhcJEhEJFhcJFhEJFBQ3", "GREIFBQDEBQPDxcKDxEIGBQPGRcKEhcJEhEJFhcJFhEJFBQz", "DRAHDRgHGBQ9EBQ/FBgDEBgPGBgPFBEJFBQDGBADFA8JEBADDRQHGxgHGxQHGxAHEBsJGBsJEA0JGA0JEBAvGBAvFBgwFBQ0", "FAwGGBAPEBQGGBQGHBQGDBQGCBQDFBQDFCADFAgDEBAPEBgPGBgPFBgGFBAGFBwGIBQDBBQBFCQDJBQDFAQBBBQvFCQvJBQvFAQvCBQ0IBQ0FBQ0FAg0FCA0"];
            exports_10("Mapping", Mapping);
        }
    };
});
System.register("istrolid_presskannukovh/994src_zjson", [], function (exports_11, context_11) {
    "use strict";
    var ZJson;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            ZJson = class ZJson {
                constructor(strTable) {
                    this.MAX8 = 256;
                    this.MAX16 = 256 * 256;
                    this.MAX32 = 256 * 256 * 256 * 256;
                    this.COLLECT_STATS = true;
                    this.JSON_MARK = 90;
                    this.JSON_DIFF_MARK = 91;
                    this.OBJECT_MARK8 = 0x10;
                    this.OBJECT_MARK16 = 0x11;
                    this.ARRAY_MARK8 = 0x20;
                    this.ARRAY_MARK16 = 0x21;
                    this.ARRAY0_MARK = 0x22;
                    this.ARRAY1_MARK = 0x23;
                    this.ARRAY2_MARK = 0x24;
                    this.ARRAY3_MARK = 0x25;
                    this.ARRAY4_MARK = 0x26;
                    this.STRING_MARK8 = 0x30;
                    this.STRING_MARK16 = 0x31;
                    this.STRING_TABLE_MARK = 0x32;
                    this.NUMBER_MARK8 = 0x40;
                    this.NUMBER_MARK16 = 0x41;
                    this.NUMBER_MARK32 = 0x42;
                    this.NUMBER_MARK32F = 0x43;
                    this.BOOL_TRUE_MARK = 0x50;
                    this.BOOL_FALSE_MARK = 0x51;
                    this.NULL_MARK = 0x52;
                    this.UNDEFINED_MARK = 0x53;
                    if (strTable == null) {
                        strTable = null;
                    }
                    this.buffSize = 1024 * 1024;
                    this.buffer = new ArrayBuffer(this.buffSize);
                    this.dv = new DataView(this.buffer);
                    this.str2num = new Map();
                    this.num2str = new Map();
                    if (strTable) {
                        if (strTable.length > this.MAX16) {
                            throw "Too many strings in the string table";
                        }
                    }
                }
                static isInt(n) {
                    return !isNaN(n) && Math.round(n) === n;
                }
                ;
                static isFloat(n) {
                    return !isNaN(n) && Math.round(n) !== n;
                }
                ;
                static toHex(number, n) {
                    let hex;
                    if (n == null) {
                        n = 4;
                    }
                    hex = number.toString(16);
                    while (hex.length < n) {
                        hex = "0" + hex;
                    }
                    return hex;
                }
                ;
                static hexDisplay(dv) {
                    let address, ascii, byte, bytes, i, j, r, results;
                    i = 0;
                    results = [];
                    while (i < dv.byteLength) {
                        address = ZJson.toHex(i, 4);
                        bytes = [];
                        ascii = [];
                        for (r = j = 0; j < 16; r = ++j) {
                            if (i >= dv.byteLength) {
                                bytes.push("  ");
                                ascii.push(" ");
                            }
                            else {
                                byte = dv.getUint8(i);
                                bytes.push(ZJson.toHex(byte, 2));
                                if ((20 < byte && byte < 128)) {
                                    ascii.push(String.fromCharCode(byte));
                                }
                                else {
                                    ascii.push(".");
                                }
                            }
                            i += 1;
                        }
                        results.push(console.log(address + "   " + bytes.join(" ") + "   " + ascii.join("")));
                    }
                    return results;
                }
                ;
                commonZJsonStringsGet() {
                    let k, list;
                    list = [];
                    for (k in this.commonZJsonStrings) {
                        if (this.commonZJsonStrings[k] > 2) {
                            list.push(k);
                        }
                    }
                    return console.log(list.sort().join("\n"));
                }
                commonZJsonBytePatternsGet() {
                    let e, j, k, len, list, ref, results, v;
                    list = [];
                    for (k in this.commonZJsonBytePatterns) {
                        v = this.commonZJsonBytePatterns[k];
                        list.push([k, v]);
                    }
                    list = list.sort(function (a, b) {
                        return b[1] - a[1];
                    });
                    ref = list.slice(0, 256);
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        e = ref[j];
                        results.push(console.log(e[0], e[1]));
                    }
                    return results;
                }
                ;
                dumpDv(json) {
                    let buf, dv, end, i, j, ref;
                    this.i = 0;
                    this.dumpNode(json);
                    end = "END";
                    this.dv.setUint8(this.i, end.charCodeAt(0));
                    this.i += 1;
                    this.dv.setUint8(this.i, end.charCodeAt(1));
                    this.i += 1;
                    this.dv.setUint8(this.i, end.charCodeAt(2));
                    this.i += 1;
                    buf = new ArrayBuffer(this.i);
                    dv = new DataView(buf);
                    for (i = j = 0, ref = this.i; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        dv.setUint8(i, this.dv.getUint8(i));
                    }
                    return dv;
                }
                ;
                dumpNode(json) {
                    let e, i, j, k, l, len, length, num, ref, results, results1, results2, v;
                    if (json === null) {
                        this.dv.setUint8(this.i, this.NULL_MARK);
                        this.i += 1;
                        return;
                    }
                    if (json === void 0) {
                        this.dv.setUint8(this.i, this.UNDEFINED_MARK);
                        this.i += 1;
                        return;
                    }
                    switch (typeof json) {
                        case "object":
                            if (json.length != null) {
                                length = json.length;
                                if (length === 0) {
                                    this.dv.setUint8(this.i, this.ARRAY0_MARK);
                                    this.i += 1;
                                }
                                else if (length === 1) {
                                    this.dv.setUint8(this.i, this.ARRAY1_MARK);
                                    this.i += 1;
                                }
                                else if (length === 2) {
                                    this.dv.setUint8(this.i, this.ARRAY2_MARK);
                                    this.i += 1;
                                }
                                else if (length === 3) {
                                    this.dv.setUint8(this.i, this.ARRAY3_MARK);
                                    this.i += 1;
                                }
                                else if (length === 4) {
                                    this.dv.setUint8(this.i, this.ARRAY4_MARK);
                                    this.i += 1;
                                }
                                else if (length < this.MAX8) {
                                    this.dv.setUint8(this.i, this.ARRAY_MARK8);
                                    this.i += 1;
                                    this.dv.setUint8(this.i, length);
                                    this.i += 1;
                                }
                                else if (length < this.MAX16) {
                                    this.dv.setUint8(this.i, this.ARRAY_MARK16);
                                    this.i += 1;
                                    this.dv.setUint16(this.i, length);
                                    this.i += 2;
                                }
                                else {
                                    throw "Array size of " + length + " not supported";
                                }
                                results = [];
                                for (j = 0, len = json.length; j < len; j++) {
                                    e = json[j];
                                    results.push(this.dumpNode(e));
                                }
                                return results;
                            }
                            else {
                                length = 0;
                                for (k in json) {
                                    v = json[k];
                                    length += 1;
                                }
                                if (length < this.MAX8) {
                                    this.dv.setUint8(this.i, this.OBJECT_MARK8);
                                    this.i += 1;
                                    this.dv.setUint8(this.i, length);
                                    this.i += 1;
                                }
                                else if (length < this.MAX16) {
                                    this.dv.setUint8(this.i, this.OBJECT_MARK16);
                                    this.i += 1;
                                    this.dv.setUint16(this.i, length);
                                    this.i += 2;
                                }
                                else {
                                    throw "Object size of " + length + " not supported";
                                }
                                results1 = [];
                                for (k in json) {
                                    v = json[k];
                                    this.dumpNode(k);
                                    results1.push(this.dumpNode(v));
                                }
                                return results1;
                            }
                        case "number":
                            if (Math.round(json) === json && json > 0 && json < 256 * 256 * 256 * 256) {
                                if (json < this.MAX8) {
                                    this.dv.setUint8(this.i, this.NUMBER_MARK8);
                                    this.i += 1;
                                    this.dv.setUint8(this.i, json);
                                    return this.i += 1;
                                }
                                else if (json < this.MAX16) {
                                    this.dv.setUint8(this.i, this.NUMBER_MARK16);
                                    this.i += 1;
                                    this.dv.setUint16(this.i, json);
                                    return this.i += 2;
                                }
                                else if (json < this.MAX32) {
                                    this.dv.setUint8(this.i, this.NUMBER_MARK32);
                                    this.i += 1;
                                    this.dv.setUint32(this.i, json);
                                    return this.i += 4;
                                }
                                else {
                                    throw "Invalid number integer " + json + " not supported";
                                }
                            }
                            else {
                                this.dv.setUint8(this.i, this.NUMBER_MARK32F);
                                this.i += 1;
                                this.dv.setFloat32(this.i, json);
                                return this.i += 4;
                            }
                        case "string":
                            num = this.str2num.get(json);
                            if (num != null) {
                                this.dv.setUint8(this.i, this.STRING_TABLE_MARK);
                                this.i += 1;
                                this.dv.setUint16(this.i, num);
                                return this.i += 2;
                            }
                            else {
                                if (this.COLLECT_STATS) {
                                    this.commonZJsonStrings[json] = (this.commonZJsonStrings[json] || 0) + 1;
                                }
                                length = json.length;
                                if (length < this.MAX8) {
                                    this.dv.setUint8(this.i, this.STRING_MARK8);
                                    this.i += 1;
                                    this.dv.setUint8(this.i, json.length);
                                    this.i += 1;
                                }
                                else if (length < this.MAX16) {
                                    this.dv.setUint8(this.i, this.STRING_MARK16);
                                    this.i += 1;
                                    this.dv.setUint16(this.i, json.length);
                                    this.i += 2;
                                }
                                else {
                                    throw "String size of " + length + " not supported";
                                }
                                results2 = [];
                                for (i = l = 0, ref = length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                                    this.dv.setUint8(this.i, json.charCodeAt(i));
                                    results2.push(this.i += 1);
                                }
                                return results2;
                            }
                        case "boolean":
                            if (json === true) {
                                this.dv.setUint8(this.i, this.BOOL_TRUE_MARK);
                                return this.i += 1;
                            }
                            else {
                                this.dv.setUint8(this.i, this.BOOL_FALSE_MARK);
                                return this.i += 1;
                            }
                        default:
                            throw "Type " + (typeof json) + " not supported";
                    }
                }
                ;
                loadDv(dv) {
                    let json;
                    this.i = 0;
                    json = this.loadNode(dv);
                    return json;
                }
                ;
                loadNode(dv) {
                    let count, e, i, j;
                    let json;
                    let k, l, length, m, mark, num, ref, ref1, ref2, v;
                    mark = dv.getUint8(this.i);
                    this.i += 1;
                    switch (mark) {
                        case 0:
                            throw "Zero mark error";
                        case this.ARRAY_MARK8:
                        case this.ARRAY_MARK16:
                        case this.ARRAY0_MARK:
                        case this.ARRAY1_MARK:
                        case this.ARRAY2_MARK:
                        case this.ARRAY3_MARK:
                        case this.ARRAY4_MARK:
                            if (mark === this.ARRAY0_MARK) {
                                length = 0;
                            }
                            else if (mark === this.ARRAY1_MARK) {
                                length = 1;
                            }
                            else if (mark === this.ARRAY2_MARK) {
                                length = 2;
                            }
                            else if (mark === this.ARRAY3_MARK) {
                                length = 3;
                            }
                            else if (mark === this.ARRAY4_MARK) {
                                length = 4;
                            }
                            else if (mark === this.ARRAY_MARK8) {
                                length = dv.getUint8(this.i);
                                this.i += 1;
                            }
                            else if (mark === this.ARRAY_MARK16) {
                                length = dv.getUint16(this.i);
                                this.i += 2;
                            }
                            else {
                                throw "Arrays mark error" + mark;
                            }
                            json = [];
                            for (count = j = 0, ref = length; 0 <= ref ? j < ref : j > ref; count = 0 <= ref ? ++j : --j) {
                                e = this.loadNode(dv);
                                json.push(e);
                            }
                            return json;
                        case this.OBJECT_MARK8:
                        case this.OBJECT_MARK16:
                            if (mark === this.OBJECT_MARK8) {
                                length = dv.getUint8(this.i);
                                this.i += 1;
                            }
                            else if (mark === this.OBJECT_MARK16) {
                                length = dv.getUint16(this.i);
                                this.i += 2;
                            }
                            else {
                                throw "Object mark error";
                            }
                            json = {};
                            for (count = l = 0, ref1 = length; 0 <= ref1 ? l < ref1 : l > ref1; count = 0 <= ref1 ? ++l : --l) {
                                k = this.loadNode(dv);
                                v = this.loadNode(dv);
                                json[k] = v;
                            }
                            return json;
                        case this.STRING_TABLE_MARK:
                            num = dv.getUint16(this.i);
                            this.i += 2;
                            return this.num2str.get(num);
                        case this.STRING_MARK8:
                        case this.STRING_MARK16:
                            if (mark === this.STRING_MARK8) {
                                length = dv.getUint8(this.i);
                                this.i += 1;
                            }
                            else if (mark === this.STRING_MARK16) {
                                length = dv.getUint16(this.i);
                                this.i += 2;
                            }
                            else {
                                throw "String mark error";
                            }
                            json = "";
                            for (i = m = 0, ref2 = length; 0 <= ref2 ? m < ref2 : m > ref2; i = 0 <= ref2 ? ++m : --m) {
                                json += String.fromCharCode(dv.getUint8(this.i));
                                this.i += 1;
                            }
                            return json;
                        case this.NUMBER_MARK8:
                            json = dv.getUint8(this.i);
                            this.i += 1;
                            return json;
                        case this.NUMBER_MARK16:
                            json = dv.getUint16(this.i);
                            this.i += 2;
                            return json;
                        case this.NUMBER_MARK32:
                            json = dv.getUint32(this.i);
                            this.i += 4;
                            return json;
                        case this.NUMBER_MARK32F:
                            json = dv.getFloat32(this.i);
                            this.i += 4;
                            return json;
                        case this.BOOL_TRUE_MARK:
                            return true;
                        case this.BOOL_FALSE_MARK:
                            return false;
                        case this.NULL_MARK:
                            return null;
                        case this.UNDEFINED_MARK:
                            return void 0;
                        default:
                            throw "Mark " + mark + " unknown";
                    }
                }
                ;
            };
            exports_11("ZJson", ZJson);
        }
    };
});
System.register("istrolid_presskannukovh/2src_hspace", ["istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/4src_maths"], function (exports_12, context_12) {
    "use strict";
    var _6src_sim_6, _4src_maths_5, HSpace;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (_6src_sim_6_1) {
                _6src_sim_6 = _6src_sim_6_1;
            },
            function (_4src_maths_5_1) {
                _4src_maths_5 = _4src_maths_5_1;
            }
        ],
        execute: function () {
            HSpace = class HSpace {
                constructor(resolution) {
                    this.PRIME = 677;
                    this.resolution = resolution;
                    this.hash = new Map();
                }
                static clamp(value, min, max) {
                    if (value < min) {
                        return min;
                    }
                    if (value > max) {
                        return max;
                    }
                    return value;
                }
                ;
                static overlapRectCircle(point, radius, x, y, w, h) {
                    let dx, dy;
                    dx = point[0] - HSpace.clamp(point[0], x, x + w);
                    dy = point[1] - HSpace.clamp(point[1], y, y + h);
                    return (dx * dx + dy * dy) <= (radius * radius);
                }
                ;
                key(pos) {
                    return Math.floor(pos[0] / this.resolution) + Math.floor(pos[1] / this.resolution) * this.PRIME;
                }
                ;
                insert(thing) {
                    let posKey = this.key(thing.pos);
                    let things = this.hash.get(posKey);
                    if (things == null) {
                        return _4src_maths_5.v2.set(posKey, [thing]);
                    }
                    else {
                        return things.push(thing);
                    }
                }
                ;
                findInRange(point, range, cb) {
                    let d, k, len, posKey, px, py, rx, ry, things, x, y;
                    _6src_sim_6.Sim.Instance.timeStart("findInRange");
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
                                            _6src_sim_6.Sim.Instance.timeEnd("findInRange");
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    _6src_sim_6.Sim.Instance.timeEnd("findInRange");
                }
                ;
            };
            exports_12("HSpace", HSpace);
        }
    };
});
System.register("istrolid_presskannukovh/99src_grid", ["istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/95src_unit", "istrolid_presskannukovh/0dummy"], function (exports_13, context_13) {
    "use strict";
    var _6src_sim_7, _95src_unit_3, _0dummy_4, Grid;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (_6src_sim_7_1) {
                _6src_sim_7 = _6src_sim_7_1;
            },
            function (_95src_unit_3_1) {
                _95src_unit_3 = _95src_unit_3_1;
            },
            function (_0dummy_4_1) {
                _0dummy_4 = _0dummy_4_1;
            }
        ],
        execute: function () {
            Grid = class Grid {
                static modulo(a, b) {
                    return (+a % (b = +b) + b) % b;
                }
                ;
                static validSpec(player, spec) {
                    let issue;
                    issue = Grid.hasIssue(player, spec);
                    return issue === null;
                }
                ;
                static hasPart(name, unit) {
                    let k, len1, ref1;
                    ref1 = unit.parts;
                    for (k = 0, len1 = ref1.length; k < len1; k++) {
                        let part = ref1[k];
                        if (part.name === name) {
                            return true;
                        }
                    }
                    return false;
                }
                ;
                static check(grid, fn) {
                    let k, l, ref2, ref3, t, x, y;
                    for (x = k = 0, ref2 = _6src_sim_7.Sim.Instance.NxN; 0 <= ref2 ? k < ref2 : k > ref2; x = 0 <= ref2 ? ++k : --k) {
                        for (y = l = 0, ref3 = _6src_sim_7.Sim.Instance.NxN; 0 <= ref3 ? l < ref3 : l > ref3; y = 0 <= ref3 ? ++l : --l) {
                            t = grid[x][y];
                            if (fn(t)) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                static hasIssue(player, spec) {
                    let badParts, e, grid, j, len, part, ref, ref1, size, unit, x, y;
                    try {
                        unit = new _95src_unit_3.Unit(spec);
                        if (unit.parts.length === 0) {
                            return "No parts, drag parts from the left.";
                        }
                        if (unit.cost > _6src_sim_7.Sim.Instance.costLimit + unit.limitBonus) {
                            return "Ship too big, cost can't be over $" + (_6src_sim_7.Sim.Instance.costLimit + unit.limitBonus) + ".";
                        }
                        if (unit.name.length > 50) {
                            return "Name too long";
                        }
                        ref = unit.parts;
                        for (j = 0, len = ref.length; j < len; j++) {
                            part = ref[j];
                            size = Grid.partSize(part);
                            x = part.pos[0] / this.SIZE + _6src_sim_7.Sim.Instance.NxN / 2 - size[0] / 2;
                            y = part.pos[1] / this.SIZE + _6src_sim_7.Sim.Instance.NxN / 2 - size[1] / 2;
                            if ((Grid.modulo(x, 1) > 0.0001 && Grid.modulo(x, 1) < 0.9999) || (Grid.modulo(y, 1) > 0.0001 && Grid.modulo(y, 1) < 0.9999)) {
                                return "Invalid part placement";
                            }
                            if (part.disable) {
                                return "Has parts that have been discontinued.";
                            }
                            if (part.ghostCopy) {
                                return "Has parts from a copied ship.";
                            }
                            if (!(part.dir < 0 || part.dir > 3) || Grid.modulo(part.dir, 1) !== 0) {
                                return "Invalid part rotation";
                            }
                            if (!(part.dir === 0 || part.canRotate)) {
                                return "Part cannot rotate";
                            }
                            if (!player.ai) {
                                if (!(typeof _0dummy_4.Account.Instance !== "undefined" && _0dummy_4.Account.Instance !== null ? _0dummy_4.Account.Instance.hasDLC(part.dlc) : void 0)) {
                                    return "Please support us by getting " + part.dlc + " DLC and unlock " + part.name + ".";
                                }
                                if (!(typeof _0dummy_4.Account.Instance !== "undefined" && _0dummy_4.Account.Instance !== null ? _0dummy_4.Account.Instance.hasDLCBonus() : void 0) && part.dir && part.dir !== 0) {
                                    return "Part rotation is currently only available to <a href='http://store.steampowered.com/app/472490' target='_blank'>supporters who get a DLC</a>.";
                                }
                            }
                        }
                        if (Grid.hasPart("StasisField", unit) && Grid.hasPart("CloakGenerator", unit)) {
                            return "Cloak Generator and Stasis Field can't be on the same ship.";
                        }
                        ref1 = Grid.computeGrid(player, unit, null);
                        grid = ref1[0];
                        badParts = ref1[1];
                        if (badParts.length > 0) {
                            return "Ship has parts outside the build area.";
                        }
                        if (!player.ai) {
                            if (Grid.check(grid, function (part) {
                                return part.locked;
                            })) {
                                return "Has parts that have not been unlocked.";
                            }
                        }
                        if (Grid.check(grid, function (part) {
                            return part.overlap;
                        })) {
                            return "Parts should not overlap.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.exhaust && part.solid;
                        })) {
                            return "Engine exhaust must not hit another part.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.solid && !part.fill;
                        })) {
                            return "All ship parts must be connected.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.bad && part.gimble;
                        })) {
                            return "Weapons must be placed on a mount.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.noTurret;
                        })) {
                            return "Mount has no turret attached.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.noEffect;
                        })) {
                            return "Part needs to be next to a weapon.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.cantPaint;
                        })) {
                            return "Decal can't be placed like this. Decals go on armor or batteries.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.overPaint;
                        })) {
                            return "Decal overlaps with another decal.";
                        }
                        if (Grid.check(grid, function (part) {
                            return part.bad;
                        })) {
                            return "Improperly placed part.";
                        }
                        if (unit.storeEnergy === 0) {
                            return "No energy storage, add battery or reactor.";
                        }
                        if (unit.maxSpeed === 0) {
                            return "Can't move, add engines.";
                        }
                        if (unit.jumpDistance > 0 && unit.jumpDistance <= 50) {
                            return "Insufficient jump power for mass. Add more jump drives.";
                        }
                        return null;
                    }
                    catch (error) {
                        e = error;
                        console.log("exception e", e);
                        return "Part parse error... thats odd?";
                    }
                }
                ;
                static genBuildPic(spec) {
                }
                ;
                static offset(part) {
                    let xoff, yoff;
                    if (part.size[0] % 2 === 1) {
                        xoff = 1;
                    }
                    else {
                        xoff = 0;
                    }
                    if (part.size[1] % 2 === 1) {
                        yoff = 1;
                    }
                    else {
                        yoff = 0;
                    }
                    if (part.dir % 2 === 0) {
                        return [xoff, yoff];
                    }
                    else {
                        return [yoff, xoff];
                    }
                }
                ;
                static partSize(part) {
                    let xsize = part.size[0];
                    let ysize = part.size[1];
                    if (part.dir % 2 === 0) {
                        return [xsize, ysize];
                    }
                    else {
                        return [ysize, xsize];
                    }
                }
                ;
                static getXY(part) {
                    let size = Grid.partSize(part);
                    let x = Math.round(part.pos[0] / this.SIZE + _6src_sim_7.Sim.Instance.NxN / 2 - size[0] / 2);
                    let y = Math.round(part.pos[1] / this.SIZE + _6src_sim_7.Sim.Instance.NxN / 2 - size[1] / 2);
                    return [x, y];
                }
                ;
                static computeGrid(player, unit, removCb) {
                    let ax, ay, ey, i, j, k, l, len, len1, len2, m, n, newSet, o, openSet, p, part, px, py, q, r, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref4, ref5, ref6, ref7, ref8, ref9, root, s, size, u, ws, x, y;
                    let parts = unit.parts;
                    let grid = [];
                    let badParts = [];
                    for (i = j = 0, ref = _6src_sim_7.Sim.Instance.NxN; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                        grid.push((function () {
                            let k, ref1;
                            let results = [];
                            for (n = k = 0, ref1 = _6src_sim_7.Sim.Instance.NxN; 0 <= ref1 ? k < ref1 : k > ref1; n = 0 <= ref1 ? ++k : --k) {
                                results.push({});
                            }
                            return results;
                        })());
                    }
                    if (parts.length === 0) {
                        return [grid, badParts];
                    }
                    root = parts[0];
                    for (k = 0, len = parts.length; k < len; k++) {
                        part = parts[k];
                        size = Grid.partSize(part);
                        for (px = l = 0, ref1 = size[0]; 0 <= ref1 ? l < ref1 : l > ref1; px = 0 <= ref1 ? ++l : --l) {
                            for (py = m = 0, ref2 = size[1]; 0 <= ref2 ? m < ref2 : m > ref2; py = 0 <= ref2 ? ++m : --m) {
                                ref3 = Grid.getXY(part);
                                x = ref3[0];
                                y = ref3[1];
                                x += px;
                                y += py;
                                let t = (ref4 = grid[x]) != null ? ref4[y] : void 0;
                                if (t === void 0) {
                                    badParts.push(part);
                                    continue;
                                }
                                if (!player.ai) {
                                    if (part.dlc) {
                                        if (!_0dummy_4.Account.Instance.hasDLC(part.dlc)) {
                                            t.bad = true;
                                            t.locked = true;
                                        }
                                    }
                                    if (!_0dummy_4.Account.Instance.hasDLCBonus() && part.dir && part.dir !== 0) {
                                        t.bad = true;
                                        t.locked = true;
                                    }
                                }
                                if (part.paintable) {
                                    t.paintable = true;
                                }
                                if (part.decal) {
                                    if (!t.paintable) {
                                        t.cantPaint = true;
                                        t.bad = true;
                                    }
                                    else if (t.painted) {
                                        t.overPaint = true;
                                        t.bad = true;
                                    }
                                    else {
                                        t.painted = true;
                                    }
                                    continue;
                                }
                                if (part.gimble) {
                                    if (!t.mount) {
                                        t.bad = true;
                                        t.gimble = true;
                                    }
                                }
                                else {
                                    if (t.solid === true) {
                                        t.overlap = true;
                                        t.bad = true;
                                    }
                                    t.solid = true;
                                }
                                if (part.attach) {
                                    if ((ref5 = grid[x]) != null) {
                                        if ((ref6 = ref5[y]) != null) {
                                            ref6.struct = true;
                                        }
                                    }
                                }
                                if (part.mount && (px === (size[0] / 2) || px === (size[0] / 2 - 1)) && (py === (size[1] / 2) || py === (size[1] / 2 - 1))) {
                                    if ((ref7 = grid[x]) != null) {
                                        if ((ref8 = ref7[y]) != null) {
                                            ref8.mount = true;
                                        }
                                    }
                                    if (!part.turret) {
                                        if ((ref9 = grid[x]) != null) {
                                            if ((ref10 = ref9[y]) != null) {
                                                ref10.noTurret = true;
                                            }
                                        }
                                        if ((ref11 = grid[x]) != null) {
                                            if ((ref12 = ref11[y]) != null) {
                                                ref12.bad = true;
                                            }
                                        }
                                    }
                                }
                                if (part.gimble) {
                                    if ((ref13 = grid[x]) != null) {
                                        if ((ref14 = ref13[y]) != null) {
                                            ref14.mount = false;
                                        }
                                    }
                                }
                                if (part.exhaust) {
                                    if (py === 0) {
                                        if ((ref15 = grid[x]) != null) {
                                            if ((ref16 = ref15[y]) != null) {
                                                ref16.struct = false;
                                            }
                                        }
                                        for (ey = o = ref17 = y - 1; ref17 <= -1 ? o < -1 : o > -1; ey = ref17 <= -1 ? ++o : --o) {
                                            if ((ref18 = grid[x]) != null) {
                                                if ((ref19 = ref18[ey]) != null) {
                                                    ref19.exhaust = true;
                                                }
                                            }
                                        }
                                    }
                                }
                                if (part.effected_weapons) {
                                    ws = part.effected_weapons();
                                    if (ws.length === 0) {
                                        if ((ref20 = grid[x]) != null) {
                                            if ((ref21 = ref20[y]) != null) {
                                                ref21.noEffect = true;
                                            }
                                        }
                                        if ((ref22 = grid[x]) != null) {
                                            if ((ref23 = ref22[y]) != null) {
                                                ref23.bad = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ref24 = Grid.getXY(root);
                    x = ref24[0];
                    y = ref24[1];
                    if (grid[x] === void 0 || grid[x][y] === void 0) {
                        return [grid, badParts];
                    }
                    grid[x][y].fill = true;
                    openSet = [];
                    openSet.push([x, y]);
                    for (i = p = 0; p < 1000; i = ++p) {
                        newSet = [];
                        for (q = 0, len1 = openSet.length; q < len1; q++) {
                            ref25 = openSet[q];
                            x = ref25[0];
                            y = ref25[1];
                            ref26 = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                            for (r = 0, len2 = ref26.length; r < len2; r++) {
                                ref27 = ref26[r];
                                ax = ref27[0];
                                ay = ref27[1];
                                let t = (ref28 = grid[x + ax]) != null ? ref28[y + ay] : void 0;
                                if (t && t.solid && !t.fill) {
                                    t.fill = true;
                                    newSet.push([x + ax, y + ay]);
                                }
                            }
                        }
                        if (newSet.length === 0) {
                            break;
                        }
                        openSet = newSet;
                    }
                    for (x = s = 0, ref29 = _6src_sim_7.Sim.Instance.NxN; 0 <= ref29 ? s < ref29 : s > ref29; x = 0 <= ref29 ? ++s : --s) {
                        for (y = u = 0, ref30 = _6src_sim_7.Sim.Instance.NxN; 0 <= ref30 ? u < ref30 : u > ref30; y = 0 <= ref30 ? ++u : --u) {
                            let t = grid[x][y];
                            if (t.exhaust && t.solid) {
                                t.bad = true;
                            }
                            if (t.solid && !t.fill) {
                                t.bad = true;
                            }
                        }
                    }
                    return [grid, badParts];
                }
                ;
            };
            Grid.SIZE = 20;
            exports_13("Grid", Grid);
        }
    };
});
System.register("istrolid_presskannukovh/6src_sim", ["istrolid_presskannukovh/4src_maths", "istrolid_presskannukovh/3src_protocol", "istrolid_presskannukovh/994src_zjson", "istrolid_presskannukovh/992src_colors", "istrolid_presskannukovh/2src_hspace", "istrolid_presskannukovh/993src_utils", "istrolid_presskannukovh/94src_things", "server", "istrolid_presskannukovh/95src_unit", "istrolid_presskannukovh/99src_grid"], function (exports_14, context_14) {
    "use strict";
    var _4src_maths_6, _3src_protocol_1, _994src_zjson_1, _992src_colors_2, _2src_hspace_1, _993src_utils_3, _94src_things_4, server_3, _95src_unit_4, _99src_grid_1, Sim;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (_4src_maths_6_1) {
                _4src_maths_6 = _4src_maths_6_1;
            },
            function (_3src_protocol_1_1) {
                _3src_protocol_1 = _3src_protocol_1_1;
            },
            function (_994src_zjson_1_1) {
                _994src_zjson_1 = _994src_zjson_1_1;
            },
            function (_992src_colors_2_1) {
                _992src_colors_2 = _992src_colors_2_1;
            },
            function (_2src_hspace_1_1) {
                _2src_hspace_1 = _2src_hspace_1_1;
            },
            function (_993src_utils_3_1) {
                _993src_utils_3 = _993src_utils_3_1;
            },
            function (_94src_things_4_1) {
                _94src_things_4 = _94src_things_4_1;
            },
            function (server_3_1) {
                server_3 = server_3_1;
            },
            function (_95src_unit_4_1) {
                _95src_unit_4 = _95src_unit_4_1;
            },
            function (_99src_grid_1_1) {
                _99src_grid_1 = _99src_grid_1_1;
            }
        ],
        execute: function () {
            Sim = class Sim {
                constructor(battleType) {
                    this.DEBUG = false;
                    this.VERSION = 49;
                    this.MINOR_VERSION = 2;
                    this.ticksPerSec = 16;
                    this.defaultMoney = 2000;
                    this.gainsMoney = true;
                    this.makeRocks = true;
                    this.state = "waiting";
                    this.serverType = "3v3";
                    this.lastId = 0;
                    this.costLimit = 1000;
                    this.aiTestMode = false;
                    this.nGamesPlayed = 0;
                    this.numComPoints = 8;
                    this.mapScale = 1.5;
                    this.moneyRatio = 1;
                    this.tickTime = 63;
                    this.unitLimit = 100;
                    this.enableAi = true;
                    this.check = true;
                    this.NxN = 24;
                    this.gameFields = ["players", "things", "aiTestMode", "nGamesPlayed", "numBattles", "local", "step", "timeDelta", "winningSide", "numBattles", "unitSpaces", "projSpaces", "zJson", "serverType", "theme"];
                    this.thingFields = ["onOrderId", "holdPosition", "hp", "energy", "shield", "cloak", "burn", "dead", "radius", "size", "rot", "image", "warpIn", "color", "sliceImage", "side", "owner", "capping", "spawn", "aoe", "damage", "life", "maxLife", "turretNum", "targetPos", "hitPos"];
                    this.playerFields = ["name", "side", "afk", "host", "money", "connected", "dead", "color", "mouse", "action", "buildQ", "validBar", "ai", "apm", "capps", "kills", "unitsBuilt", "moneyEarned", "rallyPoint"];
                    this.simFields = ["serverType", "step", "theme", "state", "winningSide", "countDown"];
                    this.battleType = battleType;
                    this.victoryConditions = this.victoryConditions.prototype.bind(this);
                    this.local = false;
                    this.players = [];
                    this.chat = { players: {} };
                    this.step = 0;
                    this.timeDelta = 0;
                    this.winningSide = null;
                    this.numBattles = 0;
                    this.unitSpaces = {};
                    this.projSpaces = {};
                    this.zJson = new _994src_zjson_1.ZJson(_3src_protocol_1.prot.commonWords);
                }
                static get Instance() {
                    return this._instance || (this._instance = new this(this.defaultBattleType));
                }
                static otherSide(side) {
                    if (side === "alpha") {
                        return "beta";
                    }
                    else if (side === "beta") {
                        return "alpha";
                    }
                    else {
                        return "alpha";
                    }
                }
                ;
                static say(message) {
                    if (typeof server_3.Server !== "undefined" && server_3.Server.Instance !== null) {
                        Sim.say(message);
                    }
                    else {
                        console.log(message);
                    }
                }
                ;
                static setRallyPoint(player, point) {
                    let _, ref, thing;
                    if (!player) {
                        return;
                    }
                    ref = Sim.Instance.things;
                    for (_ in ref) {
                        thing = ref[_];
                        if (thing.spawn === player.side && _4src_maths_6.v2.distance(thing.pos, point) < thing.radius) {
                            player.usingSpawn = thing;
                            player.rallyPoint = [0, 0];
                            return;
                        }
                    }
                    return player.rallyPoint = point;
                }
                ;
                static mouseMove(player, pos, action) {
                    if (!player) {
                        return;
                    }
                    player.lastActiveTime = Date.now();
                    _4src_maths_6.v2.set(pos, player.mouse);
                    return player.action = action;
                }
                ;
                static rand() {
                    return Math.random() - 0.5;
                }
                ;
                static rid() {
                    return Math.random().toString(32).slice(2);
                }
                ;
                static choose(list) {
                    return list[Math.floor(Math.random() * list.length)];
                }
                ;
                static shuffle(list) {
                    let ref = ((function () {
                        let results1 = [];
                        for (let m = 0; m < list.length; m++) {
                            let e = list[m];
                            results1.push([Math.random(), e]);
                        }
                        return results1;
                    })()).sort();
                    let results = [];
                    for (let l = 0; l < ref.length; l++) {
                        results.push(ref[l][1]);
                    }
                    return results;
                }
                ;
                static isArray(a) {
                    if (Array.isArray(a)) {
                        return true;
                    }
                    return a instanceof Float64Array;
                }
                ;
                simpleEquals(a, b) {
                    let e, i, k, l, len1, v;
                    if (a === b) {
                        return true;
                    }
                    if (a === null || b === null) {
                        return false;
                    }
                    if (a === void 0 || b === void 0) {
                        return false;
                    }
                    if (typeof a !== typeof b) {
                        return false;
                    }
                    if (Sim.isArray(a) && Sim.isArray(b)) {
                        if (a.length !== b.length) {
                            return false;
                        }
                        for (i = l = 0, len1 = a.length; l < len1; i = ++l) {
                            e = a[i];
                            if (!this.simpleEquals(e, b[i])) {
                                return false;
                            }
                        }
                        return true;
                    }
                    if (typeof a === "object") {
                        for (k in a) {
                            v = a[k];
                            if (!this.simpleEquals(v, b[k])) {
                                return false;
                            }
                        }
                        return true;
                    }
                    return false;
                }
                ;
                nid() {
                    let id = this.lastId;
                    this.lastId += 1;
                    return id;
                }
                ;
                start() {
                    let l, len1, p, ref;
                    this.net = {};
                    this.step = 0;
                    this.timeDelta = 0;
                    this.winningSide = null;
                    this.lastId = 0;
                    this.counting = 0;
                    this.generateMap(this.mapScale, this.numComPoints, this.mapSeed);
                    if (this.players == null) {
                        this.players = [];
                    }
                    else {
                        ref = this.players;
                        for (l = 0, len1 = ref.length; l < len1; l++) {
                            p = ref[l];
                            p.reset();
                            if (p.connected) {
                                this.validateBuildBar(p);
                            }
                        }
                    }
                    if (this.chat == null) {
                        this.chat = { players: {} };
                    }
                    this.winningSide = null;
                    this.state = "starting";
                    this.regenerateMap();
                    this.captures = 0;
                    this.deaths = 0;
                    this.nGamesPlayed += 1;
                    return this.clearNetState();
                }
                ;
                configGame(p, config) {
                    let l, len1, player, ref;
                    console.log("config game!", config);
                    if (this.state !== "waiting") {
                        console.log("Can't set config on game in progress");
                        return;
                    }
                    if (!p.host) {
                        console.log("Can't set config when not a host");
                        return;
                    }
                    ref = this.players;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        player = ref[l];
                        if (player.host) {
                            continue;
                        }
                        player.side = "spectators";
                        if (player.ai) {
                            player.connected = false;
                        }
                    }
                    if (!this.validTypes[config.type]) {
                        console.log("Config type is not valid");
                        return;
                    }
                    if (this.serverType !== config.type) {
                        this.serverType = config.type;
                        Sim.say(p.name + " changed server type to " + config.type);
                    }
                }
                ;
                localConfigGame(p, config) {
                    let newMode;
                    console.log("Config game!", config);
                    if (this.state !== "waiting") {
                        console.log("Can't set config on game in progress");
                        return;
                    }
                    if (!this.validTypes[config.type]) {
                        console.log("Config type is not valid");
                        return;
                    }
                    if (this.serverType !== config.type) {
                        this.serverType = config.type;
                        Sim.say(p.name + " changed server type to " + config.type);
                    }
                }
                playersPerTeam() {
                    if (this.serverType.slice(0, 3) === "1v1") {
                        return 1;
                    }
                    if (this.serverType === "2v2") {
                        return 2;
                    }
                    if (this.serverType === "3v3") {
                        return 3;
                    }
                    if (this.serverType === "FFA") {
                        return 6;
                    }
                    return 3;
                }
                ;
                generateMap(mapScale, numComPoints, mapSeed) {
                    this.mapScale = mapScale != null ? mapScale : 1.5;
                    this.numComPoints = numComPoints != null ? numComPoints : 8;
                    this.mapSeed = mapSeed;
                    this.numRocks = 60 * this.mapScale;
                    return this.regenerateMap();
                }
                ;
                regenerateMap() {
                    return this.mapping.generate(this.mapSeed);
                }
                ;
                playerJoin(_, pid, name, color, buildBar, aiRules, ai) {
                    let dcIndex, i, l, len1, len2, m, p, player, ref, ref1;
                    if (ai == null) {
                        ai = false;
                    }
                    console.log("playerJoin", pid, name, color);
                    ref = this.players;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        p = ref[l];
                        if (p.id === pid) {
                            player = p;
                            break;
                        }
                    }
                    if (!player) {
                        player = new _94src_things_4.Player(pid);
                        player.streak = 0;
                        if (this.local) {
                            player.side = "alpha";
                        }
                        else {
                            player.side = "spectators";
                        }
                        dcIndex = null;
                        ref1 = this.players;
                        for (i = m = 0, len2 = ref1.length; m < len2; i = ++m) {
                            p = ref1[i];
                            if (!p.connected && p.side === "spectators") {
                                dcIndex = i;
                            }
                        }
                        if (dcIndex === null) {
                            player.number = this.players.length;
                            this.players.push(player);
                        }
                        else {
                            player.number = dcIndex;
                            this.players[dcIndex] = player;
                        }
                        if (this.local) {
                            this.clearNetState();
                        }
                    }
                    else {
                        this.clearNetState();
                    }
                    this.playerEdit(_, pid, name, color, buildBar, aiRules, ai);
                    return player;
                }
                ;
                playerEdit(_, pid, name, color, buildBar, aiRules, ai) {
                    let canEditShips, i, l, len1, m, o, p, player, ref;
                    ref = this.players;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        p = ref[l];
                        if (p.id === pid) {
                            player = p;
                            break;
                        }
                    }
                    player.name = name;
                    player.color = _992src_colors_2.Colors.validate(color);
                    player.color[3] = 255;
                    player.ai = ai;
                    player.aiRules = aiRules;
                    if (!player.buildBar) {
                        player.buildBar = [[], [], [], [], [], [], [], [], [], []];
                    }
                    if (!player.validBar) {
                        player.validBar = [false, false, false, false, false, false, false, false, false, false];
                    }
                    player.connected = true;
                    if (this.serverType === "1v1t" && this.state !== "waiting" && player.side !== "spectators") {
                        for (i = m = 0; m < 10; i = ++m) {
                            if (JSON.stringify(player.buildBar[i]) !== JSON.stringify(buildBar[i]) && player.side !== "spectators") {
                                console.log("---");
                                console.log(JSON.stringify(player.buildBar[i]));
                                console.log(JSON.stringify(buildBar[i]));
                            }
                        }
                        canEditShips = false;
                    }
                    else {
                        canEditShips = true;
                    }
                    if (canEditShips) {
                        for (i = o = 0; o < 10; i = ++o) {
                            player.buildBar[i] = buildBar[i] || null;
                        }
                        this.validateBuildBar(player);
                    }
                    player.actions += 1;
                    return player;
                }
                ;
                switchSide(player, side) {
                    if (!player) {
                        return;
                    }
                    if (player.kickTime > _993src_utils_3.Utils.now() - 15000) {
                        return;
                    }
                    if (this.local && !Sim.Instance.galaxyStar && !Sim.Instance.challenge) {
                        player.side = side;
                        return;
                    }
                    if (side !== "spectators" && this.numInTeam(side) >= this.playersPerTeam()) {
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
                whoIsHost() {
                    let haveHost, l, len1, len2, m, p, ref, ref1;
                    haveHost = false;
                    ref = this.players;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        p = ref[l];
                        if (p.host === true) {
                            if (!p.connected || p.side === "spectators") {
                                p.host = false;
                                haveHost = false;
                                break;
                            }
                            else {
                                haveHost = true;
                                break;
                            }
                        }
                    }
                    if (!haveHost) {
                        ref1 = this.players;
                        for (m = 0, len2 = ref1.length; m < len2; m++) {
                            p = ref1[m];
                            if (!p.ai && p.connected && p.side !== "spectators") {
                                p.host = true;
                                break;
                            }
                        }
                    }
                }
                ;
                addAi(player, name, side, aiBuildBar, nocheck) {
                    let l, len1, numAi, p, ref, total;
                    if (nocheck == null) {
                        nocheck = false;
                    }
                    console.log("addAI", name, side);
                    if (!this.local) {
                        if (this.noAIPlayers) {
                            return;
                        }
                        if (nocheck) {
                            return this.ais.useAiFleet(name, side, aiBuildBar);
                        }
                        if (this.numInTeam(side) >= this.playersPerTeam()) {
                            console.log("Enough players in team");
                            return;
                        }
                        if (this.state !== "waiting") {
                            return;
                        }
                        total = this.playersPerTeam() * 2;
                        numAi = 0;
                        ref = this.players;
                        for (l = 0, len1 = ref.length; l < len1; l++) {
                            p = ref[l];
                            if (p.ai && p.connected && p.side !== "spectators") {
                                numAi += 1;
                            }
                        }
                        if (numAi === total - 1) {
                            console.log("All players can't be AI");
                            return;
                        }
                    }
                    return this.ais.useAiFleet(name, side, aiBuildBar);
                }
                ;
                kickPlayer(p, number) {
                    let player;
                    if (this.state !== "waiting") {
                        return;
                    }
                    if (!p.host) {
                        return;
                    }
                    player = this.players[number];
                    if (player) {
                        player.side = "spectators";
                        player.kickTime = _993src_utils_3.Utils.now();
                        if (player.ai) {
                            player.connected = false;
                        }
                        return Sim.say(p.name + " kicked " + player.name);
                    }
                }
                ;
                kickAllAis() {
                    let l, len1, player, ref, results;
                    if (this.aiTestMode) {
                        return;
                    }
                    ref = this.players;
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        player = ref[l];
                        if (player.ai) {
                            player.connected = false;
                            results.push(player.side = "spectators");
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                startGame(player, real) {
                    if (real == null) {
                        real = false;
                    }
                    if (this.local) {
                        this.start();
                        return;
                    }
                    if (!player.host || !(player.name === "Avamander")) {
                        console.log("A non-host player is trying to start game.");
                        return;
                    }
                    if (this.state !== "waiting") {
                        console.log("Trying to start a game when a game is already in progress. State:", this.state);
                        return;
                    }
                    if (!this.canStart(true)) {
                        return;
                    }
                    Sim.say("Game is about to start!");
                    return this.countDown = 16 * 6;
                }
                ;
                canStart(sayStuff) {
                    if (sayStuff == null) {
                        sayStuff = false;
                    }
                    if (this.numInTeam("alpha") < this.playersPerTeam()) {
                        if (sayStuff) {
                            Sim.say("Team alpha does not have enough players.");
                        }
                        return false;
                    }
                    if (this.numInTeam("beta") < this.playersPerTeam()) {
                        if (sayStuff) {
                            Sim.say("Team beta does not have enough players.");
                        }
                        return false;
                    }
                    return true;
                }
                ;
                validateBuildBar(player) {
                    let i, l, len1, n, ref, spec;
                    if (!this.check) {
                        player.validBar = (function () {
                            let l, results;
                            results = [];
                            for (n = l = 0; l < 10; n = ++l) {
                                results.push(true);
                            }
                            return results;
                        })();
                        return;
                    }
                    ref = player.buildBar;
                    for (i = l = 0, len1 = ref.length; l < len1; i = ++l) {
                        spec = ref[i];
                        player.validBar[i] = _99src_grid_1.Grid.validSpec(player, spec);
                    }
                }
                ;
                moveOrder(player, points, additive, orderId) {
                    let l, len1, n, ref, results, u;
                    if (!player) {
                        return;
                    }
                    if (this.aiOnly) {
                        return;
                    }
                    player.actions += 1;
                    n = 0;
                    ref = player.selection;
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        u = ref[l];
                        if ((u != null) && u.owner === player.number && !u.dead) {
                            u.giveOrder({
                                id: orderId,
                                type: "Move",
                                dest: points[n],
                                range: 0
                            }, additive);
                            n += 1;
                            if (n === points.length) {
                                n = points.length - 1;
                            }
                            results.push(u.underPlayerControl = true);
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                followOrder(player, unitId, additive, orderId) {
                    let l, len1, ref, results, u;
                    if (!player) {
                        return;
                    }
                    if (this.aiOnly) {
                        return;
                    }
                    player.actions += 1;
                    ref = player.selection;
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        u = ref[l];
                        if (u.owner === player.number) {
                            u.giveOrder({
                                id: orderId,
                                type: "Follow",
                                targetId: unitId,
                                noFinish: true
                            }, additive);
                            results.push(u.underPlayerControl = true);
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                stopOrder(player, additive) {
                    let l, len1, ref, results, u;
                    if (!player) {
                        return;
                    }
                    if (this.aiOnly) {
                        return;
                    }
                    player.actions += 1;
                    ref = player.selection;
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        u = ref[l];
                        if (u.owner === player.number) {
                            results.push(u.stopAndClearOrders());
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                holdPositionOrder(player, additive) {
                    let l, len1, len2, m, ref, ref1, results, someHolding, u;
                    if (!player) {
                        return;
                    }
                    if (this.aiOnly) {
                        return;
                    }
                    player.actions += 1;
                    someHolding = false;
                    ref = player.selection;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        u = ref[l];
                        if (u.owner === player.number && u.holdPosition) {
                            someHolding = true;
                            break;
                        }
                    }
                    ref1 = player.selection;
                    results = [];
                    for (m = 0, len2 = ref1.length; m < len2; m++) {
                        u = ref1[m];
                        if (u.owner === player.number) {
                            if (someHolding) {
                                results.push(u.holdPosition = false);
                            }
                            else {
                                results.push(u.holdPosition = !u.holdPosition);
                            }
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                selfDestructOrder(player, additive) {
                    let l, len1, ref, results, u;
                    if (!player) {
                        return;
                    }
                    if (this.aiOnly) {
                        return;
                    }
                    player.actions += 1;
                    ref = player.selection;
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        u = ref[l];
                        if (u.owner === player.number) {
                            results.push(u.selfDestruct());
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                buildUnit(pid, number, pos) {
                    let _, _where, l, len1, player, ref, ref1, spec, totalUnits, u, unit, w;
                    player = this.players[pid];
                    if (!player) {
                        return;
                    }
                    if (!player.validBar[number]) {
                        return;
                    }
                    totalUnits = 0;
                    ref = this.things;
                    for (_ in ref) {
                        u = ref[_];
                        if (u.unit && u.owner === player.number) {
                            totalUnits += 1;
                        }
                    }
                    if (totalUnits >= this.unitLimit) {
                        return;
                    }
                    spec = player.buildBar[number];
                    if (player.money < _95src_unit_4.UnitUtils.specCost(spec)) {
                        return;
                    }
                    player.actions += 1;
                    unit = new _95src_unit_4.Unit(spec);
                    unit.owner = player.number;
                    unit.side = player.side;
                    unit.color = player.color.slice(0);
                    unit.number = number;
                    player.money -= unit.cost;
                    this.things[unit.id] = unit;
                    if (pos) {
                        _4src_maths_6.v2.set(pos, unit.pos);
                        unit.rot = _4src_maths_6.v2.angle(unit.pos) + Math.PI;
                        ref1 = unit.weapons;
                        for (l = 0, len1 = ref1.length; l < len1; l++) {
                            w = ref1[l];
                            w.rot = unit.rot;
                        }
                    }
                    if (player.rallyPoint != null) {
                        _where = [player.rallyPoint[0] - unit.pos[0], player.rallyPoint[1] - unit.pos[1]];
                        unit.rot = _4src_maths_6.v2.angle(new Float64Array(_where));
                    }
                    return unit;
                }
                ;
                placeUnit(pid, bar_number, pos) {
                    let cls, player;
                    player = this.players[pid];
                    if (!player) {
                        return;
                    }
                    cls = player.buildBar[bar_number];
                    console.log("Requested to place unit with type:", bar_number);
                    if (this.canBuildHere(pos, player.side, cls)) {
                        return this.buildUnit(pid, bar_number, pos);
                    }
                }
                ;
                buildRq(player, name, number) {
                    let i, l, len, m, n, ref, ref1;
                    if (!player) {
                        return;
                    }
                    if (number > 0) {
                        for (i = l = 0, ref = number; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                            player.buildQ.push(name);
                        }
                    }
                    else if (number < 0) {
                        len = player.buildQ.length;
                        for (i = m = ref1 = len - 1; ref1 <= -1 ? m < -1 : m > -1; i = ref1 <= -1 ? ++m : --m) {
                            if (player.buildQ[i] === name) {
                                player.buildQ[i] = null;
                                number += 1;
                                if (number === 0) {
                                    break;
                                }
                            }
                        }
                        player.buildQ = (function () {
                            let len1, o, ref2, results;
                            ref2 = player.buildQ;
                            results = [];
                            for (o = 0, len1 = ref2.length; o < len1; o++) {
                                n = ref2[o];
                                if (n !== null) {
                                    results.push(n);
                                }
                            }
                            return results;
                        })();
                    }
                }
                ;
                findSpawnPoint(player) {
                    let _, ref, unit;
                    if ((player != null ? player.usingSpawn : void 0)) {
                        if (player.usingSpawn.side === player.side) {
                            return player.usingSpawn;
                        }
                        else {
                            player.usingSpawn = null;
                        }
                    }
                    ref = this.things;
                    for (_ in ref) {
                        unit = ref[_];
                        if (unit.spawn === player.side) {
                            return unit;
                        }
                    }
                }
                ;
                canBuildHere(pos, side, cls) {
                    let _, dist, inRange, ref, unit;
                    inRange = false;
                    ref = this.things;
                    for (_ in ref) {
                        unit = ref[_];
                        if (unit.unit || unit.commandPoint) {
                            dist = _4src_maths_6.v2.distance(pos, unit.pos);
                            if (unit.unit) {
                                if (dist < unit.radius + cls.radius) {
                                    return false;
                                }
                            }
                            if (unit.commandPoint) {
                                if (unit.side === side && dist < unit.radius) {
                                    inRange = true;
                                }
                            }
                        }
                    }
                    return inRange;
                }
                ;
                playerSelected(player, selection) {
                    let id, l, len1, ref, ref1, results, t, u;
                    if (!player) {
                        return;
                    }
                    ref = player.selection;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        u = ref[l];
                        if (u.owner === player.number) {
                            u.underPlayerControl = false;
                        }
                    }
                    player.selection = [];
                    ref1 = this.things;
                    results = [];
                    for (id in ref1) {
                        t = ref1[id];
                        results.push((function () {
                            let len2, m, results1;
                            results1 = [];
                            for (m = 0, len2 = selection.length; m < len2; m++) {
                                id = selection[m];
                                if (t.id === id) {
                                    results1.push(player.selection.push(t));
                                }
                                else {
                                    results1.push(void 0);
                                }
                            }
                            return results1;
                        })());
                    }
                    return results;
                }
                ;
                surrender(player) {
                    if (!player) {
                        return;
                    }
                    if (this.winningSide) {
                        return;
                    }
                    if (this.state !== "running") {
                        return;
                    }
                    if (this.surrender_votes === undefined) {
                        this.surrender_votes = {};
                    }
                    let team_players = this.players.filter(function (filter_players) {
                        return filter_players.ai === false &&
                            filter_players.side === player.side;
                    });
                    if (team_players.length === 1) {
                        if (player.side === "beta") {
                            this.winningSide = "alpha";
                        }
                        else if (player.side === "alpha") {
                            this.winningSide = "beta";
                        }
                        else {
                            return;
                        }
                        Sim.say(player.name + " surrendered");
                        return this.endOfGame();
                    }
                    else if (team_players.length >= 1) {
                        if (!player.surrendered === undefined) {
                            player.surrendered = false;
                        }
                        if (!player.surrendered) {
                            if (this.surrender_votes[player.side] === undefined) {
                                this.surrender_votes[player.side] = 1;
                            }
                            else {
                                this.surrender_votes[player.side] += 1;
                            }
                            player.surrendered = true;
                        }
                        else {
                            return;
                        }
                        if (this.surrender_votes[player.side] > (team_players.length - 1)) {
                            if (player.side === "beta") {
                                this.winningSide = "alpha";
                            }
                            else if (player.side === "alpha") {
                                this.winningSide = "beta";
                            }
                            else {
                                return;
                            }
                            Sim.say(player.name + " surrendered");
                            return this.endOfGame();
                        }
                        else {
                            Sim.say(player.name + " voted to surrender");
                            Sim.say((team_players.length - this.surrender_votes[player.side]) + " vote(s) more required");
                            return;
                        }
                    }
                }
                ;
                checkAfkPlayers() {
                    let l, len1, player, ref, results;
                    ref = this.players;
                    results = [];
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        player = ref[l];
                        if (player.ai) {
                            if (player.side !== "spectators") {
                                player.afk = false;
                                results.push(player.connected = true);
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        else if (!player.connected) {
                            results.push(player.afk = true);
                        }
                        else if (player.lastActiveTime < Date.now() - 1000 * 60 * 10) {
                            if (this.serverType !== "1v1r") {
                                results.push(player.afk = true);
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        else {
                            results.push(player.afk = false);
                        }
                    }
                    return results;
                }
                ;
                numInTeam(side) {
                    let l, len1, num, player, ref;
                    num = 0;
                    ref = this.players;
                    for (l = 0, len1 = ref.length; l < len1; l++) {
                        player = ref[l];
                        if (player.side === side) {
                            num += 1;
                        }
                    }
                    return num;
                }
                ;
                startingSim() {
                    if (this.state === "starting") {
                        this.state = "running";
                    }
                    if (this.state === "ended") {
                        this.state = "waiting";
                    }
                    if (this.countDown > 0) {
                        this.countDown -= 1;
                        if (!this.canStart(true)) {
                            this.state = "waiting";
                            this.countDown = 0;
                            return;
                        }
                        if (this.countDown === 0) {
                            this.start();
                        }
                    }
                    if (this.state === "waiting" && this.serverType === "1v1r" && this.canStart(false) && this.countDown === 0) {
                        Sim.say("Challenger appears, game is about to start!");
                        return this.countDown = 16 * 6;
                    }
                }
                ;
                simulate() {
                    let id, l, len1, len2, m, player, ref, ref1, ref2, ref3, ref4, ref5, t, thing;
                    this.timeStart("sim");
                    this.step += 1;
                    this.startingSim();
                    this.checkAfkPlayers();
                    this.whoIsHost();
                    this.timeIt("spacesRebuild", (function (_this) {
                        return function () {
                            return _this.spacesRebuild();
                        };
                    })(this));
                    this.timeStart("units");
                    this.units = [
                        (function () {
                            let ref, results;
                            ref = Sim.Instance.things;
                            results = [];
                            for (id in ref) {
                                t = ref[id];
                                if (t.unit) {
                                    results.push(t);
                                }
                            }
                            return results;
                        }).call(this)
                    ];
                    this.timeEnd("units");
                    this.timeStart("bullets");
                    this.bullets = [
                        (function () {
                            let ref, results;
                            ref = Sim.Instance.things;
                            results = [];
                            for (id in ref) {
                                t = ref[id];
                                if (t.bullet) {
                                    results.push(t);
                                }
                            }
                            return results;
                        }).call(this)
                    ];
                    this.timeEnd("bullets");
                    this.timeStart("commandPoint");
                    this.commandPoint = [
                        (function () {
                            let ref, results;
                            ref = Sim.Instance.things;
                            results = [];
                            for (id in ref) {
                                t = ref[id];
                                if (t.bullet) {
                                    results.push(t);
                                }
                            }
                            return results;
                        }).call(this)
                    ];
                    this.timeEnd("commandPoint");
                    this.timeStart("death");
                    ref = Sim.Instance.things;
                    for (id in ref) {
                        thing = ref[id];
                        if (thing.dead) {
                            if (typeof thing.postDeath === "function") {
                                thing.postDeath();
                            }
                            delete this.things[id];
                        }
                    }
                    this.timeEnd("death");
                    this.timeStart("tick");
                    ref1 = this.things;
                    for (id in ref1) {
                        thing = ref1[id];
                        if (typeof thing.tick === "function") {
                            thing.tick();
                        }
                    }
                    this.timeEnd("tick");
                    this.timeStart("move");
                    ref2 = this.things;
                    for (id in ref2) {
                        thing = ref2[id];
                        if (typeof thing.move === "function") {
                            thing.move();
                        }
                    }
                    this.timeEnd("move");
                    this.timeIt("unitsCollide", (function (_this) {
                        return function () {
                            return _this.unitsCollide();
                        };
                    })(this));
                    this.timeStart("players");
                    if (this.state === "running" || this.serverType === "sandbox") {
                        ref3 = this.players;
                        for (l = 0, len1 = ref3.length; l < len1; l++) {
                            player = ref3[l];
                            if (player.side !== "spectators") {
                                player.tick();
                            }
                        }
                    }
                    ref4 = this.players;
                    for (m = 0, len2 = ref4.length; m < len2; m++) {
                        player = ref4[m];
                        if (this.state === "waiting" && player.afk) {
                            player.side = "spectators";
                        }
                        if (player.side === null) {
                            player.side = "spectators";
                        }
                    }
                    this.timeEnd("players");
                    this.victoryConditions();
                    if (typeof this.extra === "function") {
                        this.extra();
                    }
                    return this.timeEnd("sim");
                }
                ;
                spacesRebuild() {
                    let ref1, thing;
                    this.unitSpaces = {
                        "alpha": new _2src_hspace_1.HSpace(500),
                        "beta": new _2src_hspace_1.HSpace(500)
                    };
                    this.bulletSpaces = {
                        "alpha": new _2src_hspace_1.HSpace(100),
                        "beta": new _2src_hspace_1.HSpace(100)
                    };
                    this.maxRadius = {
                        alpha: 0,
                        beta: 0
                    };
                    for (let id in this.things) {
                        thing = this.things[id];
                        if (thing.dead) {
                            continue;
                        }
                        if (thing.unit) {
                            if ((ref1 = this.unitSpaces[thing.side]) != null) {
                                ref1.insert(thing);
                            }
                            if (this.maxRadius[thing.side] != null) {
                                if (thing.radius > this.maxRadius[thing.side]) {
                                    this.maxRadius[thing.side] = thing.radius;
                                }
                            }
                        }
                        if (thing.bullet) {
                            this.bulletSpaces[thing.side].insert(thing);
                        }
                    }
                }
                ;
                victoryConditions() {
                    let cappedArr, id, k, l, len1, player, ref, ref1, stillThere, thing;
                    if (this.state !== "running") {
                        return;
                    }
                    let capped = {};
                    ref = this.things;
                    for (id in ref) {
                        thing = ref[id];
                        if (thing.commandPoint) {
                            capped[thing.side] = (capped[thing.side] || 0) + 1;
                        }
                    }
                    cappedArr = (function () {
                        let results;
                        results = [];
                        for (k in capped) {
                            results.push(k);
                        }
                        return results;
                    })();
                    if (cappedArr.length === 0) {
                        return;
                    }
                    if (cappedArr.length === 1 && cappedArr[0] !== "neutral") {
                        this.winningSide = cappedArr[0];
                    }
                    if (this.winningSide) {
                        this.endOfGame();
                        return;
                    }
                    if (!this.local && !this.aiTestMode) {
                        stillThere = false;
                        ref1 = this.players;
                        for (l = 0, len1 = ref1.length; l < len1; l++) {
                            player = ref1[l];
                            if (!player.ai && player.connected && !player.afk && player.side !== "spectators") {
                                stillThere = true;
                            }
                        }
                        if (!stillThere) {
                            Sim.say("Every one left. Ending game.");
                            this.winningSide = "";
                            this.endOfGame();
                        }
                    }
                    else if (this.step > 16 * 60 * 30) {
                        this.winningSide = "";
                        this.endOfGame();
                    }
                }
                ;
                endOfGame() {
                    let player;
                    if (this.surrender_votes === undefined) {
                        this.surrender_votes = {};
                    }
                    this.surrender_votes["alpha"] = 0;
                    this.surrender_votes["beta"] = 0;
                    if (this.winningSide) {
                        Sim.say(this.winningSide + " has won!");
                    }
                    else {
                        Sim.say("Game ends in a draw!");
                    }
                    this.numBattles += 1;
                    if (this.numBattles > 100) {
                        this.awaitRestart = true;
                    }
                    if (this.serverType === "1v1r" && this.winningSide) {
                        for (let l = 0; l < this.players.length; l++) {
                            player = this.players[l];
                            if (player.side !== "spectators") {
                                if (player.side === this.winningSide) {
                                    player.streak += 1;
                                    if (player.streak === 1) {
                                        Sim.say(player.name + " wins a battle");
                                    }
                                    else {
                                        Sim.say(player.name + " wins " + player.streak + " battles");
                                    }
                                    player.host = true;
                                }
                                else {
                                    player.side = "spectators";
                                    player.host = false;
                                    player.streak = 0;
                                    Sim.say(player.name + " lost and was kicked");
                                    player.kickTime = _993src_utils_3.Utils.now();
                                }
                            }
                        }
                    }
                    return this.state = "ended";
                }
                ;
                unitsCollide() {
                    let distance, force, i, j, k, l, len1, missles, ratio, results, t, u, u2, units;
                    units = (function () {
                        let ref, results;
                        ref = Sim.Instance.things;
                        results = [];
                        for (k in ref) {
                            t = ref[k];
                            if (t.unit && !t.fixed && t.active) {
                                results.push(t);
                            }
                        }
                        return results;
                    }).call(this);
                    let n = this.step % 2;
                    units.sort(function (a, b) {
                        return a.pos[n] - b.pos[n];
                    });
                    this.axisSort = n;
                    this.axisSortedUnits = units;
                    missles = (function () {
                        let ref, results;
                        ref = Sim.Instance.things;
                        results = [];
                        for (k in ref) {
                            t = ref[k];
                            if (t.missile) {
                                results.push(t);
                            }
                        }
                        return results;
                    }).call(this);
                    missles.sort(function (a, b) {
                        return a.pos[n] - b.pos[n];
                    });
                    this.axisSortedMissles = missles;
                    results = [];
                    for (i = l = 0, len1 = units.length; l < len1; i = ++l) {
                        u = units[i];
                        results.push((function () {
                            let m, results1 = [];
                            for (j = m = -4; m <= 4; j = ++m) {
                                u2 = units[i + j];
                                if (j !== 0 && u2) {
                                    let _offset = new Float64Array([u.pos[0] - u2.pos[0], u.pos[1] - u2.pos[1]]);
                                    distance = _4src_maths_6.v2.mag(_offset);
                                    if (distance < .001) {
                                        _offset = new Float64Array([0, -1]);
                                        distance = 1;
                                    }
                                    if (distance < u.radius + u2.radius) {
                                        force = (u.radius + u2.radius) - distance;
                                        ratio = u2.mass / (u.mass + u2.mass);
                                        let _push = _4src_maths_6.v2.create(null);
                                        _4src_maths_6.v2.scale(_offset, ratio * force / distance * .02, _push);
                                        _4src_maths_6.v2.add(u.pos, _push, null);
                                        _4src_maths_6.v2.scale(_offset, -(1 - ratio) * force / distance * .02, _push);
                                        results1.push(_4src_maths_6.v2.add(u2.pos, _push, null));
                                    }
                                    else {
                                        results1.push(void 0);
                                    }
                                }
                                else {
                                    results1.push(void 0);
                                }
                            }
                            return results1;
                        })());
                    }
                    return results;
                }
                ;
                send() {
                    let _, changes, e, f, i, id, l, len1, len2, len3, len4, len5, len6, len8, m, o, p, packet, part, partId, player, predictable, q, r, ref1, ref10, ref11, ref13, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, s, send, splayers, sthings, t, targetId, thing, v, x, y, z;
                    this.timeStart("send");
                    this.timeStart("things");
                    sthings = [];
                    for (id in this.things) {
                        thing = this.things[id];
                        changes = [];
                        changes.push(["thingId", thing.id]);
                        if (thing.net == null) {
                            thing.net = s = {};
                            changes.push(["name", thing.constructor.name]);
                            changes.push(["spec", thing.spec]);
                            changes.push(["color", thing.color]);
                            changes.push(["z", thing.z]);
                        }
                        else {
                            if (thing["static"]) {
                                continue;
                            }
                            else {
                                s = thing.net;
                            }
                        }
                        ref1 = this.thingFields;
                        for (l = 0, len1 = ref1.length; l < len1; l++) {
                            f = ref1[l];
                            v = thing[f];
                            if ((v != null) && !this.simpleEquals(s[f], v)) {
                                if (Sim.isArray(v)) {
                                    if (s.length !== v.length) {
                                        s[f] = new Array(v.length);
                                    }
                                    for (i = m = 0, len2 = v.length; m < len2; i = ++m) {
                                        e = v[i];
                                        s[f][i] = e;
                                    }
                                }
                                else {
                                    s[f] = v;
                                }
                                changes.push([f, v]);
                            }
                        }
                        predictable = false;
                        if ((s.vel != null) && (s.pos != null)) {
                            _4src_maths_6.v2.add(s.pos, s.vel, this._pos);
                            if (_4src_maths_6.v2.distance(this._pos, thing.pos) < .1) {
                                _4src_maths_6.v2.set(this._pos, s.pos);
                                predictable = true;
                            }
                        }
                        if (!predictable) {
                            if (s.vel == null) {
                                s.vel = _4src_maths_6.v2.create(null);
                            }
                            if (s.pos == null) {
                                s.pos = _4src_maths_6.v2.create(null);
                            }
                            _4src_maths_6.v2.set(thing.vel, s.vel);
                            _4src_maths_6.v2.set(thing.pos, s.pos);
                            changes.push(["vel", thing.vel]);
                            changes.push(["pos", thing.pos]);
                        }
                        if (s.targetId !== ((ref2 = thing.target) != null ? ref2.id : void 0)) {
                            s.targetId = (ref3 = thing.target) != null ? ref3.id : void 0;
                            changes.push(["targetId", s.targetId]);
                        }
                        if (s.originId !== ((ref4 = thing.origin) != null ? ref4.id : void 0)) {
                            s.originId = (ref5 = thing.origin) != null ? ref5.id : void 0;
                            changes.push(["originId", s.originId]);
                        }
                        if (s.followId !== ((ref6 = thing.follow) != null ? ref6.id : void 0)) {
                            s.followId = (ref7 = thing.follow) != null ? ref7.id : void 0;
                            changes.push(["followId", s.followId]);
                        }
                        if (this.local) {
                            if (s.message !== thing.message) {
                                s.message = thing.message;
                                changes.push(["message", s.message]);
                            }
                        }
                        if (thing.parts != null) {
                            ref8 = thing.parts;
                            for (partId = o = 0, len3 = ref8.length; o < len3; partId = ++o) {
                                part = ref8[partId];
                                changes.push(["partId", partId]);
                                s = part.net;
                                if (!s) {
                                    part.net = s = {};
                                }
                                if ((part.working != null) && s.working !== part.working) {
                                    changes.push(["partWorking", part.working]);
                                    s.working = part.working;
                                }
                                if (part.weapon) {
                                    targetId = ((ref9 = part.target) != null ? ref9.id : void 0) || 0;
                                    if (s.targetId !== targetId) {
                                        changes.push(["partTargetId", targetId]);
                                        s.targetId = targetId;
                                    }
                                    if (s.range !== part.range) {
                                        changes.push(["partRange", part.range]);
                                        s.range = part.range;
                                    }
                                }
                                if (changes[changes.length - 1][0] === "partId") {
                                    changes.pop();
                                }
                            }
                        }
                        if (changes.length > 1) {
                            sthings.push(changes);
                        }
                    }
                    this.timeEnd("things");
                    this.timeStart("players");
                    splayers = [];
                    ref10 = this.players;
                    for (q = 0, len4 = ref10.length; q < len4; q++) {
                        player = ref10[q];
                        changes = [];
                        changes.push(["playerNumber", player.number]);
                        if (player.net == null) {
                            player.net = {};
                        }
                        ref11 = this.playerFields;
                        for (r = 0, len5 = ref11.length; r < len5; r++) {
                            f = ref11[r];
                            v = player[f];
                            if ((v != null) && !this.simpleEquals(player.net[f], v)) {
                                if (Sim.isArray(v)) {
                                    if (player.net.length !== v.length) {
                                        player.net[f] = new Array(v.length);
                                    }
                                    for (i = x = 0, len6 = v.length; x < len6; i = ++x) {
                                        e = v[i];
                                        player.net[f][i] = e;
                                    }
                                }
                                else {
                                    player.net[f] = v;
                                }
                                changes.push([f, v]);
                            }
                        }
                        if (changes.length > 1) {
                            splayers.push(changes);
                        }
                    }
                    this.timeEnd("players");
                    this.timeStart("other");
                    player.net = this.net;
                    for (y = 0; y < this.simFields.length; y++) {
                        f = this.simFields[y];
                        if (!this.simpleEquals(player.net[f], this[f])) {
                            this.data[f] = this[f];
                            player.net[f] = this[f];
                        }
                    }
                    if (splayers.length > 0) {
                        this.data.players = splayers;
                    }
                    if (sthings.length > 0) {
                        this.data.things = sthings;
                    }
                    if (this.fullUpdate) {
                        this.data.fullUpdate = true;
                        this.fullUpdate = false;
                    }
                    if (this.step % 16 === 0) {
                        send = false;
                        if (this.DEBUG) {
                            send = true;
                        }
                        else {
                            ref13 = this.players;
                            for (z = 0, len8 = ref13.length; z < len8; z++) {
                                player = ref13[z];
                                if ((player.name === "treeform") && player.connected) {
                                    send = true;
                                }
                            }
                        }
                        if (send) {
                            this.data.perf = {
                                numbers: {
                                    things: ((function () {
                                        let results = [];
                                        for (t in Sim.Instance.things) {
                                            results.push(t);
                                        }
                                        return results;
                                    }).call(this)).length,
                                    sthings: sthings.length,
                                    players: ((function () {
                                        let i1, len9, ref14 = Sim.Instance.players;
                                        let results = [];
                                        for (i1 = 0, len9 = ref14.length; i1 < len9; i1++) {
                                            p = ref14[i1];
                                            results.push(p);
                                        }
                                        return results;
                                    }).call(this)).length,
                                    splayers: splayers.length,
                                    units: ((function () {
                                        let ref14 = Sim.Instance.things;
                                        let results = [];
                                        for (_ in ref14) {
                                            t = ref14[_];
                                            if (t.unit) {
                                                results.push(t);
                                            }
                                        }
                                        return results;
                                    }).call(this)).length,
                                    bullets: ((function () {
                                        let ref14 = Sim.Instance.things;
                                        let results = [];
                                        for (_ in ref14) {
                                            t = ref14[_];
                                            if (t.bullet) {
                                                results.push(t);
                                            }
                                        }
                                        return results;
                                    }).call(this)).length,
                                    others: ((function () {
                                        let ref14 = Sim.Instance.things;
                                        let results = [];
                                        for (_ in ref14) {
                                            t = ref14[_];
                                            if (!t.bullet && !t.unit) {
                                                results.push(t);
                                            }
                                        }
                                        return results;
                                    }).call(this)).length
                                },
                                timeings: this.timeings
                            };
                        }
                        this.timeings = {};
                    }
                    this.timeEnd("other");
                    this.timeStart("zJson");
                    packet = this.zJson.dumpDv(this.data);
                    this.timeEnd("zJson");
                    this.timeEnd("send");
                    return packet;
                }
                ;
                clearNetState() {
                    let id, l, len1, len2, m, part, player, ref, ref1, ref2, results, thing;
                    console.log("Clearing net state");
                    this.fullUpdate = true;
                    delete this.net;
                    for (id in this.things) {
                        thing = this.things[id];
                        delete thing.net;
                        if (thing.parts != null) {
                            ref1 = thing.parts;
                            for (l = 0, len1 = ref1.length; l < len1; l++) {
                                part = ref1[l];
                                delete part.net;
                            }
                        }
                    }
                    ref2 = this.players;
                    results = [];
                    for (m = 0, len2 = ref2.length; m < len2; m++) {
                        player = ref2[m];
                        results.push(delete player.net);
                    }
                    return results;
                }
                ;
                timeStart(what) {
                    this.timePath.push(what);
                    return this.timeStarts[this.timePath.join(">")] = _993src_utils_3.Utils.now();
                }
                ;
                timeEnd(what) {
                    let delta, key;
                    key = this.timePath.join(">");
                    if (this.timePath.pop() !== what) {
                        throw "timeEnd does not match timeStart";
                    }
                    delta = _993src_utils_3.Utils.now() - this.timeStarts[key];
                    if (this.timeings[key] == null) {
                        return this.timeings[key] = delta;
                    }
                    else {
                        return this.timeings[key] += delta;
                    }
                }
                ;
                timeIt(what, fn) {
                    this.timeStart(what);
                    let ret = fn();
                    this.timeEnd(what);
                    return ret;
                }
                ;
                timeReport() {
                    let bar, i, l, ref1;
                    for (let k in this.timeings) {
                        let v = this.timeings[k];
                        bar = "";
                        for (i = l = 0, ref1 = v; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
                            bar += "*";
                        }
                        console.log(bar, k, v);
                    }
                    return this.timeings = {};
                }
                ;
            };
            Sim.defaultBattleType = "3v3";
            exports_14("Sim", Sim);
        }
    };
});
System.register("istrolid_presskannukovh/94src_things", ["istrolid_presskannukovh/6src_sim", "istrolid_presskannukovh/4src_maths", "istrolid_presskannukovh/95src_unit", "istrolid_presskannukovh/0dummy", "istrolid_presskannukovh/991src_collision"], function (exports_15, context_15) {
    "use strict";
    var _6src_sim_8, _4src_maths_7, _95src_unit_5, _0dummy_5, _991src_collision_3, ThingUtil, Player, Trail, Thing, Particle, Explosion, Bullet, LaserBullet, FlackExplosion, AoeBullet, StraightMissile, TrackingMissile, Debree, HitExplosion, SmallHitExplosion, RingHitExplosion, ShipExplosion, AoeExplosion, FrameExplosion, Rock, CommandPoint, SpawnPoint;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (_6src_sim_8_1) {
                _6src_sim_8 = _6src_sim_8_1;
            },
            function (_4src_maths_7_1) {
                _4src_maths_7 = _4src_maths_7_1;
            },
            function (_95src_unit_5_1) {
                _95src_unit_5 = _95src_unit_5_1;
            },
            function (_0dummy_5_1) {
                _0dummy_5 = _0dummy_5_1;
            },
            function (_991src_collision_3_1) {
                _991src_collision_3 = _991src_collision_3_1;
            }
        ],
        execute: function () {
            ThingUtil = class ThingUtil {
                constructor() {
                    this.hasProp = {}.hasOwnProperty;
                }
                static sideColor(side) {
                    let color;
                    let mySide = typeof _0dummy_5.commander !== "undefined" && _0dummy_5.commander !== null ? _0dummy_5.commander.side : void 0;
                    if (mySide === side) {
                        color = [230, 230, 230, 255];
                    }
                    else {
                        color = [20, 20, 20, 255];
                    }
                    return color;
                }
                ;
                static antiSideColor(side) {
                    let color;
                    let mySide = typeof _0dummy_5.commander !== "undefined" && _0dummy_5.commander !== null ? _0dummy_5.commander.side : void 0;
                    if (mySide === "spectators") {
                        mySide = "alpha";
                    }
                    if (mySide !== side) {
                        color = [230, 230, 230, 255];
                    }
                    else {
                        color = [20, 20, 20, 255];
                    }
                    return color;
                }
                ;
                static drawAllArcs(unit_id) {
                    let arc, cur, i, j, l, len, n, pos, range, ref, ref1, ref2, results, th, w, x, y;
                    let unit = _6src_sim_8.Sim.Instance.things[unit_id.id];
                    if (!unit) {
                        return;
                    }
                    ref = unit.weapons;
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        w = ref[j];
                        if (w.projector) {
                            continue;
                        }
                        range = w.range;
                        arc = w.arc;
                        cur = Math.PI * range * 2;
                        n = Math.floor(cur / 40 * arc / 360);
                        for (i = l = ref1 = -n, ref2 = n; ref1 <= ref2 ? l < ref2 : l > ref2; i = ref1 <= ref2 ? ++l : --l) {
                            th = i / (n * 2) * arc / 180 * Math.PI + unit.rot + Math.PI;
                            x = Math.sin(-th) * range;
                            y = Math.cos(-th) * range;
                            pos = [w.worldPos[0] + x, w.worldPos[1] + y];
                            _0dummy_5.baseAtlas.drawSprite("img/arrow02.png", pos, [.25, .25], th + Math.PI, [255, 0, 0, 255]);
                        }
                        if (w.minRange > 0) {
                            cur = Math.PI * w.minRange * 2;
                            n = Math.floor(cur / 40 * arc / 360);
                            results.push((function () {
                                let m, ref3, ref4, results1;
                                results1 = [];
                                for (i = m = ref3 = -n, ref4 = n; ref3 <= ref4 ? m < ref4 : m > ref4; i = ref3 <= ref4 ? ++m : --m) {
                                    th = i / (n * 2) * arc / 180 * Math.PI + unit.rot + Math.PI;
                                    x = Math.sin(-th) * w.minRange;
                                    y = Math.cos(-th) * w.minRange;
                                    pos = [w.worldPos[0] + x, w.worldPos[1] + y];
                                    results1.push(_0dummy_5.baseAtlas.drawSprite("img/arrow02.png", pos, [.25, .25], th, [255, 0, 0, 255]));
                                }
                                return results1;
                            })());
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
            };
            exports_15("ThingUtil", ThingUtil);
            Player = class Player {
                constructor(id1) {
                    this.gainsMoney = true;
                    this.ready = false;
                    this.actions = 0;
                    this.apm = 0;
                    this.capps = 0;
                    this.kills = 0;
                    this.unitsBuilt = 0;
                    this.moneyEarned = 0;
                    this.moneyRatio = 1;
                    this.host = false;
                    this.ai = false;
                    this.id = id1;
                    this.color = [255, 255, 255, 255];
                    this.reset();
                }
                reset() {
                    this.money = _6src_sim_8.Sim.Instance.defaultMoney;
                    this.maxMoney = 2e308;
                    this.mouse = [0, 0];
                    this.rallyPoint = [0, 0];
                    this.selection = [];
                    this.buildQ = [];
                    this.validBar = (function () {
                        let results;
                        results = [];
                        for (let j = 0; j < 10; j++) {
                            results.push(true);
                        }
                        return results;
                    })();
                    this.actions = 0;
                    this.apm = 0;
                    this.capps = 0;
                    this.kills = 0;
                    this.unitsBuilt = 0;
                    this.moneyEarned = 0;
                    this.mouseTrail = [];
                    this.usingSpawn = null;
                }
                ;
                earnMoney(amount) {
                    amount = Math.round(amount * this.moneyRatio * _6src_sim_8.Sim.Instance.moneyRatio);
                    this.money += amount;
                    return this.moneyEarned += amount;
                }
                ;
                tick() {
                    _6src_sim_8.Sim.Instance.timeStart("playertick");
                    this.gainsMoney = _6src_sim_8.Sim.Instance.serverType !== "IO" || ((function () {
                        let results = [];
                        for (let element in _6src_sim_8.Sim.Instance.things) {
                            if (_6src_sim_8.Sim.Instance.things[element].unit &&
                                _6src_sim_8.Sim.Instance.things[element].owner === this.number) {
                                results.push(_6src_sim_8.Sim.Instance.things[element]);
                            }
                        }
                        return results;
                    }).call(this)).length === 0;
                    if (_6src_sim_8.Sim.Instance.step % 16 === 0) {
                        let toEarn = Math.min(this.maxMoney - this.money, 10);
                        if (toEarn > 0 && this.gainsMoney && _6src_sim_8.Sim.Instance.gainsMoney) {
                            this.earnMoney(toEarn);
                        }
                        this.apm = this.actions / (_6src_sim_8.Sim.Instance.step / 16 / 60);
                    }
                    if (this.aiRules) {
                        _6src_sim_8.Sim.Instance.timeIt("ai", (function (_this) {
                            return function () {
                            };
                        })(this));
                    }
                    _6src_sim_8.Sim.Instance.timeEnd("playertick");
                    return this.wave();
                }
                ;
                wave() {
                    let build, i, j, len, n, ref, slot, waitTime;
                    waitTime = 16 * 2;
                    if (_6src_sim_8.Sim.Instance.step > waitTime && _6src_sim_8.Sim.Instance.step % 16 === 0) {
                        build = false;
                        if (_6src_sim_8.Sim.Instance.serverType === "IO") {
                            if ((this.buildQ[0] != null) && this.rqUnit(this.buildQ[0])) {
                                this.buildQ[0] = null;
                                build = true;
                            }
                        }
                        else {
                            ref = this.buildQ;
                            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                                slot = ref[i];
                                if (this.rqUnit(slot)) {
                                    this.buildQ[i] = null;
                                    build = true;
                                }
                                else {
                                    break;
                                }
                            }
                        }
                        if (build) {
                            return this.buildQ = (function (passed_this) {
                                let l, len1, ref1, results;
                                ref1 = passed_this.buildQ;
                                results = [];
                                for (l = 0, len1 = ref1.length; l < len1; l++) {
                                    n = ref1[l];
                                    if (n !== null) {
                                        results.push(n);
                                    }
                                }
                                return results;
                            }).call(this);
                        }
                    }
                }
                ;
                rqUnit(slot) {
                    if (_6src_sim_8.Sim.Instance.serverType === "Survival" && this.side === "beta") {
                        let pos = _4src_maths_7.v2.scale(_4src_maths_7.v2.pointTo(new Float64Array([]), Math.random() * Math.PI * 2), 2000 * _6src_sim_8.Sim.Instance.mapScale, null);
                        return _6src_sim_8.Sim.Instance.buildUnit(this.number, slot, pos);
                    }
                    if (_6src_sim_8.Sim.Instance.serverType === "IO") {
                        let units = (function (passed_this) {
                            let results = [];
                            for (let element in _6src_sim_8.Sim.Instance.things) {
                                if (_6src_sim_8.Sim.Instance.things[element].unit &&
                                    _6src_sim_8.Sim.Instance.things[element].owner === passed_this.number) {
                                    results.push(_6src_sim_8.Sim.Instance.things[element]);
                                }
                            }
                            return results;
                        }).call(this);
                        if (units.length > 0) {
                            let upgraded = _6src_sim_8.Sim.Instance.buildUnit(this.number, slot, units[0].pos);
                            if (upgraded != null) {
                                upgraded.rot = units[0].rot;
                                upgraded.orders = units[0].orders;
                                units[0].dead = true;
                                upgraded.cooldown = 16 * (upgraded.cost / 300 + 2);
                                this.unitsBuilt += 1;
                            }
                            return upgraded;
                        }
                    }
                    let spawn = _6src_sim_8.Sim.Instance.findSpawnPoint(this);
                    if (spawn) {
                        let unit = _6src_sim_8.Sim.Instance.buildUnit(this.number, slot, spawn.pos);
                        if (unit) {
                            _4src_maths_7.v2.random(unit.pos);
                            _4src_maths_7.v2.scale(unit.pos, 100 + Math.random() * (spawn.radius - 100), null);
                            _4src_maths_7.v2.add(unit.pos, spawn.pos, null);
                            this.unitsBuilt += 1;
                            if (this.rallyPoint[0] !== 0 && this.rallyPoint[1] !== 0) {
                                unit.setOrder({
                                    type: "Move",
                                    dest: this.rallyPoint,
                                    rally: true
                                });
                            }
                            return unit;
                        }
                    }
                    return null;
                }
                ;
                draw() {
                    if (!_0dummy_5.ui.show) {
                        return;
                    }
                    if (_6src_sim_8.Sim.Instance.galaxyStar != null) {
                        if (typeof _6src_sim_8.Sim.Instance.galaxyStar.draw === "function") {
                            _6src_sim_8.Sim.Instance.galaxyStar.draw();
                        }
                    }
                    if (_0dummy_5.battleMode.rallyPlacing) {
                        _0dummy_5.baseAtlas.drawSprite("img/unitBar/rallyPoint.png", _0dummy_5.battleMode.mouse, [1, 1], 0, null);
                    }
                    else if (_0dummy_5.commander.rallyPoint && _0dummy_5.commander.rallyPoint[0] !== 0 && _0dummy_5.commander.rallyPoint[1] !== 0) {
                        _0dummy_5.baseAtlas.drawSprite("img/unitBar/rallyPoint.png", _0dummy_5.commander.rallyPoint, [1, 1], 0, null);
                    }
                    if (!this.selection) {
                        return;
                    }
                    let results = [];
                    for (let j = 0; j < this.selection.length; j++) {
                        if (this.selection[j].dead) {
                            continue;
                        }
                        let color = this.color;
                        if (typeof this.selection[j].drawSelection === "function") {
                            this.selection[j].drawSelection(color);
                        }
                        if (this.selection.length === 1) {
                            if (this.selection[j].weapons) {
                                results.push(ThingUtil.drawAllArcs(this.selection[j]));
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        else {
                            if (this.selection[j].weapons != null && this.selection[j].weapons.length > 0) {
                                let range = this.selection[j].weaponRange;
                                let arc = this.selection[j].weaponArc;
                                let cur = Math.PI * range * 2;
                                let n = Math.floor(cur / 80 * arc / 360);
                                results.push((function (passed_this) {
                                    let results1 = [];
                                    let th, x, y;
                                    let _pos;
                                    for (let i = -n; i !== 0; i++) {
                                        th = i / (n * 2) * arc / 180 * Math.PI + Math.PI;
                                        x = Math.sin(-th) * range;
                                        y = Math.cos(-th) * range;
                                        _pos = new Float64Array([
                                            passed_this.selection[j].pos[0] + x,
                                            passed_this.selection[j].pos[1] + y
                                        ]);
                                        let other, drawIt = true;
                                        for (let m = 0; m < passed_this.selection.length; m++) {
                                            other = passed_this.selection[m];
                                            if (other.unit
                                                && other.id !== passed_this.selection[j].id
                                                && other.owner === passed_this.selection[j].owner) {
                                                if ((other.weapons != null) && other.weapons.length > 0) {
                                                    let _vec = new Float64Array([0, 0]);
                                                    _pos[0] = other.pos[0] - _vec[0];
                                                    _pos[1] = other.pos[1] - _vec[1];
                                                    if (_4src_maths_7.v2.mag(_vec) < other.weaponRange) {
                                                        let angle = _4src_maths_7.v2.angle(_vec);
                                                        let arcRad = other.weaponArc / 180 * Math.PI;
                                                        if (Math.abs(_95src_unit_5.Unit.angleBetween(angle, other.rot)) < arcRad / 2) {
                                                            drawIt = false;
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (drawIt) {
                                            results1.push(_0dummy_5.baseAtlas.drawSprite("img/arrow02.png", _pos, [.5, .5], th + Math.PI, [255, 0, 0, 255]));
                                        }
                                        else {
                                            results1.push(void 0);
                                        }
                                    }
                                    return results1;
                                }).call(this));
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                    }
                    return results;
                }
                ;
            };
            exports_15("Player", Player);
            Trail = class Trail {
                constructor(trailSize, trailTime) {
                    this.trailSize = trailSize;
                    this.trailTime = trailTime;
                    this.trail = [];
                }
                draw(pos, unit) {
                    if (_4src_maths_7.v2.mag(unit.vel) > 1) {
                        if (this.trail.length === 0 ||
                            _4src_maths_7.v2.distance(this.trail[this.trail.length - 1][0], pos) > 2) {
                            this.trail.push([[pos[0], pos[1]], _0dummy_5.intp.t]);
                        }
                    }
                    while (this.trail.length > 0 && _0dummy_5.intp.t - this.trail[0][1] > this.trailTime) {
                        this.trail.shift();
                    }
                    let _color = [];
                    _color[0] = 155 + unit.color[0] / 255 * 100;
                    _color[1] = 155 + unit.color[1] / 255 * 100;
                    _color[2] = 155 + unit.color[2] / 255 * 100;
                    _color[3] = 0;
                    let results = [], alive;
                    for (let j = 0; j < this.trail.length; j++) {
                        alive = (_0dummy_5.intp.t - this.trail[j][1]) / this.trailTime;
                        if (alive < 1) {
                            _color[3] = 255 - 255 * alive;
                        }
                        else {
                            _color[3] = 0;
                        }
                        results.push(_0dummy_5.baseAtlas.drawSprite("img/fire02.png", this.trail[j][0], [this.trailSize, this.trailSize], 0, _color));
                    }
                    return results;
                }
                ;
            };
            exports_15("Trail", Trail);
            Thing = class Thing {
                constructor() {
                    this.commandPoint = false;
                    this.missile = false;
                    this.explode = false;
                    this.bullet = false;
                    this.id = _6src_sim_8.Sim.Instance.nid();
                }
                getBoundPoints() {
                }
                cloaked() {
                }
                applyDamage(damage, to_what) {
                }
                applyEnergyDamage(damage) {
                }
                applyBurnAmount(damage) {
                }
                move() {
                }
                tick() {
                }
                draw() {
                }
            };
            exports_15("Thing", Thing);
            Particle = class Particle extends Thing {
                constructor() {
                    super();
                    this.size = [.1, .1];
                    this.maxLife = 60;
                    this.radius = 1;
                    this.life = 0;
                    this.dead = false;
                    this.id = _6src_sim_8.Sim.Instance.nid();
                    this.color = [255, 255, 255, 255];
                    this.life = 0;
                    this.dead = false;
                    this.z = Math.random();
                    this.pos = _4src_maths_7.v2.create(null);
                    this.vel = _4src_maths_7.v2.create(null);
                    this._pos = _4src_maths_7.v2.create(null);
                    this._pos2 = _4src_maths_7.v2.create(null);
                    this.rot = 0;
                    if (this.sound && _6src_sim_8.Sim.Instance.sound) {
                    }
                }
                move() {
                    if (this.dead) {
                        return;
                    }
                    _4src_maths_7.v2.add(this.pos, this.vel, null);
                    this.life += 1;
                    if (this.life > this.maxLife) {
                        this.dead = true;
                    }
                }
                ;
                draw() {
                    if (this.dead) {
                        return;
                    }
                    _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot, this.color);
                }
                ;
            };
            exports_15("Particle", Particle);
            Explosion = class Explosion extends Particle {
                constructor() {
                    super();
                    this.image = "img/unitBar/pip1.png";
                    this.maxLife = 30;
                    this.radius = 2;
                    this.sound = "sounds/weapons/thud2.wav";
                    this.soundVolume = .1;
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let fade = this.life / this.maxLife;
                    let s = 0.1 + fade * fade * this.radius;
                    this.color[3] = (1 - fade) * 255;
                    _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                }
                ;
            };
            exports_15("Explosion", Explosion);
            Bullet = class Bullet extends Particle {
                constructor() {
                    super();
                    this.image = "img/unitBar/pip1.png";
                    this.damage = 1;
                    this.speed = 10;
                    this.size = [1, 1];
                    this.radius = 10;
                    this.hitsMultiple = false;
                    this.hitExplosion = Explosion;
                    this.side = null;
                    this.hitsCloak = false;
                    this.soundVolume = .1;
                    this.bullet = true;
                    _0dummy_5.actionMixer.action += .05;
                }
                applyDamage() {
                    return this.dead = true;
                }
                ;
                move() {
                    if (this.dead) {
                        return;
                    }
                    _4src_maths_7.v2.add(this.pos, this.vel, null);
                    this.life += 1;
                }
                ;
                tick() {
                    if (this.life > this.maxLife) {
                        this.dead = true;
                        return;
                    }
                    if (this.explode === false) {
                        this.dead = true;
                        return;
                    }
                    this.scan();
                    if (this.dead) {
                        let exp = new this.hitExplosion;
                        exp.z = 1000;
                        exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                        if (this.t !== null) {
                            _4src_maths_7.v2.add(exp.pos, _4src_maths_7.v2.scale(this.vel, this.t, null), null);
                        }
                        exp.vel = new Float64Array([0, 0]);
                        exp.rot = 0;
                        exp.radius = 0.75;
                        _6src_sim_8.Sim.Instance.things[exp.id] = exp;
                    }
                }
                ;
                scan() {
                    _6src_sim_8.Sim.Instance.unitSpaces[_6src_sim_8.Sim.otherSide(this.side)].findInRange(this.pos, this.radius + this.speed + _6src_sim_8.Sim.Instance.maxRadius[_6src_sim_8.Sim.otherSide(this.side)], (function (_this) {
                        return function (unit) {
                            if (_this.collide(unit)) {
                                _this.hitUnit(unit);
                                return !_this.hitsMultiple;
                            }
                            return false;
                        };
                    })(this));
                    if (this.hitsMissiles) {
                        return _6src_sim_8.Sim.Instance.bulletSpaces[_6src_sim_8.Sim.otherSide(this.side)].findInRange(this.pos, this.radius + this.speed + 100, (function (_this) {
                            return function (missile) {
                                if (missile.missile && _this.collide(missile)) {
                                    _this.hitMissle(missile);
                                    return !_this.hitsMultiple;
                                }
                                return false;
                            };
                        })(this));
                    }
                }
                ;
                hitUnit(thing) {
                    thing.applyDamage(this.damage, this);
                    if (this.energyDamage) {
                        thing.applyEnergyDamage(this.energyDamage);
                    }
                    this.dead = true;
                }
                ;
                hitMissle(thing) {
                    thing.life = thing.maxLife;
                    thing.explode = false;
                }
                ;
                collide(thing) {
                    if (!this.hitsCloak && thing.cloak && thing.cloaked()) {
                        return false;
                    }
                    if (_6src_sim_8.Sim.Instance.ffa) {
                        if (this.owner === thing.owner) {
                            return false;
                        }
                    }
                    else {
                        if (this.side === thing.side) {
                            return false;
                        }
                    }
                    if (thing.unit) {
                        let this_pos = new Float64Array([this.vel[0] - thing.vel[0], this.vel[1] - thing.vel[1]]);
                        let dist = _991src_collision_3.CollisionUtils.closestDistance(thing.getBoundPoints(), [this.pos, _4src_maths_7.v2.add(this_pos, this.pos, null)]);
                        this.t = 0;
                        return dist < this.radius;
                    }
                    return this.collideCircles(thing);
                }
                ;
                _collide(thing) {
                    let distance = _4src_maths_7.v2.distance(this.pos, thing.pos);
                    return distance < thing.radius;
                }
                ;
                collideCircles(thing) {
                    let c, distance, r, speed, t1, t2, ta, tb, tc, v;
                    if (!this.hitsCloak && thing.cloak && thing.cloaked()) {
                        return false;
                    }
                    distance = _4src_maths_7.v2.distance(this.pos, thing.pos);
                    if (distance < thing.radius + this.radius) {
                        return true;
                    }
                    speed = _4src_maths_7.v2.mag(thing.vel) + _4src_maths_7.v2.mag(this.vel);
                    if (distance > thing.radius + this.radius + speed) {
                        return false;
                    }
                    this.t = null;
                    c = [this.pos[0] - thing.pos[0], this.pos[1] - thing.pos[1]];
                    v = [this.vel[0] - thing.vel[0], this.vel[1] - thing.vel[1]];
                    r = this.radius + thing.radius;
                    ta = -(c[0] * v[0] + c[1] * v[1]);
                    tb = Math.sqrt(r * r * (v[0] * v[0] + v[1] * v[1]) - Math.pow(c[0] * v[1] - c[1] * v[0], 2));
                    tc = v[0] * v[0] + v[1] * v[1];
                    t1 = (ta - tb) / tc;
                    t2 = (ta + tb) / tc;
                    if (t1 > 0 && t1 < t2) {
                        this.t = t1;
                    }
                    if (t2 > 0 && t2 < t1) {
                        this.t = t2;
                    }
                    if (this.t !== null) {
                        return this.t > 0 && this.t < 1;
                    }
                    return false;
                }
                ;
                __collide(thing) {
                    let part, ref;
                    if (!this.hitsCloak && thing.cloak && thing.cloaked()) {
                        return false;
                    }
                    let speed = _4src_maths_7.v2.mag(thing.vel) + _4src_maths_7.v2.mag(this.vel);
                    let distance = _4src_maths_7.v2.distance(this.pos, thing.pos);
                    if (distance > thing.radius + this.radius + speed) {
                        return false;
                    }
                    if (distance < thing.radius + this.radius) {
                        ref = thing.parts;
                        let len = ref.length;
                        for (let j = 0; j < len; j++) {
                            part = ref[j];
                            distance = _4src_maths_7.v2.distance(this.pos, part.worldPos) - this.radius - 10;
                            if (distance < 0) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                ;
            };
            exports_15("Bullet", Bullet);
            LaserBullet = class LaserBullet extends Bullet {
                constructor() {
                    super();
                    this.image = "img/laser01.png";
                    this.size = [1, 1];
                    this.color = [179, 207, 255, 255];
                    this.speed = 2000;
                    this.damage = 2.5;
                    this.maxLife = 3;
                    this.drawLength = 437;
                }
                move() {
                }
                ;
                tick() {
                    if (this.dead) {
                        return;
                    }
                    this.life += 1;
                    if (this.life > this.maxLife) {
                        return this.dead = true;
                    }
                }
                ;
                draw() {
                    let d, pos, rot, w;
                    if (this.origin) {
                        w = this.origin.weapons[this.turretNum || 0];
                        if (w) {
                            _4src_maths_7.v2.set(w.worldPos, this.pos);
                        }
                    }
                    if (this.target) {
                        pos = this.target.unit ? _991src_collision_3.CollisionUtils.closestPointOnPolygon(this.pos, this.target.getBoundPoints()) : this.target.pos;
                        _4src_maths_7.v2.set(pos, this.targetPos);
                    }
                    let _offset = new Float64Array([this.targetPos[0] - this.pos[0], this.targetPos[1] - this.pos[1]]);
                    rot = _4src_maths_7.v2.angle(_offset);
                    d = _4src_maths_7.v2.mag(_offset) / this.drawLength;
                    _4src_maths_7.v2.scale(_offset, .5, null);
                    _4src_maths_7.v2.add(_offset, this.pos, null);
                    if (w) {
                        w.rot = rot;
                    }
                    return _0dummy_5.baseAtlas.drawSprite(this.image, _offset, [this.size[0], d], rot, this.color);
                }
                ;
            };
            exports_15("LaserBullet", LaserBullet);
            FlackExplosion = class FlackExplosion extends Explosion {
                constructor() {
                    super();
                    this.image = "img/fire02.png";
                    this.maxLife = 3;
                    this.radius = 2;
                    this.sound = "sounds/weapons/thud1.wav";
                    this.soundVolume = .1;
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let fade = this.life / this.maxLife;
                    let s = this.radius / 2;
                    this.color[3] = (1 - Math.pow(fade, 2)) * 80;
                    _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                }
                ;
            };
            exports_15("FlackExplosion", FlackExplosion);
            AoeBullet = class AoeBullet extends Bullet {
                constructor() {
                    super();
                    this.image = "img/unitBar/pip1.png";
                    this.size = [1, 1];
                    this.color = [100, 100, 100, 255];
                    this.speed = 30;
                    this.aoe = 50;
                    this.damage = 3;
                    this.explode = true;
                    this.explodeClass = AoeExplosion;
                    this.hitPos = [0, 0];
                }
                move() {
                    if (this.dead) {
                        return;
                    }
                    _4src_maths_7.v2.add(this.pos, this.vel, null);
                }
                ;
                tick() {
                    this.life += 1;
                    if (this.life > this.maxLife) {
                        this.dead = true;
                        if (this.explode) {
                            let exp = new this.explodeClass;
                            exp.z = 1000;
                            exp.owner = this.owner;
                            exp.pos = new Float64Array([this.hitPos[0], this.hitPos[1]]);
                            exp.vel = new Float64Array([0, 0]);
                            exp.rot = 0;
                            exp.aoe = this.aoe;
                            exp.side = this.side;
                            exp.damage = this.damage;
                            _6src_sim_8.Sim.Instance.things[exp.id] = exp;
                        }
                    }
                }
                ;
            };
            exports_15("AoeBullet", AoeBullet);
            StraightMissile = class StraightMissile extends Bullet {
                constructor() {
                    super();
                    this.trailSize = .1;
                    this.trailTime = 1000;
                    this.trail = new Trail(this.trailSize, this.trailTime);
                }
                draw() {
                    this.trail.draw(this.pos, this);
                    super.draw.call(this);
                }
                ;
            };
            exports_15("StraightMissile", StraightMissile);
            TrackingMissile = class TrackingMissile extends Bullet {
                constructor() {
                    super();
                    this.image = "img/unitBar/pip1.png";
                    this.size = [1, 1];
                    this.color = [0, 0, 0, 255];
                    this.speed = 15;
                    this.damage = 8;
                    this.radius = 10;
                    this.missile = true;
                    this.trailSize = .1;
                    this.trailTime = 1500;
                    this.trail = new Trail(this.trailSize, this.trailTime);
                }
                draw() {
                    this.trail.draw(this.pos, this);
                    return super.draw.call(this);
                }
                ;
                move() {
                    if (this.dead) {
                        return;
                    }
                    if (this.target && !this.target.dead && !this.target.cloaked()) {
                        this.vel = new Float64Array([this.target.pos[0] - this.pos[0], this.target.pos[1] - this.pos[1]]);
                        _4src_maths_7.v2.norm(this.vel, null);
                        _4src_maths_7.v2.scale(this.vel, this.speed, null);
                    }
                    _4src_maths_7.v2.add(this.pos, this.vel, null);
                    this.rot = _4src_maths_7.v2.angle(this.vel);
                    return this.life += 1;
                }
                ;
                tick() {
                    if (this.life > this.maxLife) {
                        this.dead = true;
                        return;
                    }
                    _6src_sim_8.Sim.Instance.unitSpaces[_6src_sim_8.Sim.otherSide(this.side)].findInRange(this.pos, this.radius + this.speed + _6src_sim_8.Sim.Instance.maxRadius[_6src_sim_8.Sim.otherSide(this.side)], (function (_this) {
                        return function (unit) {
                            if (_this.collide(unit)) {
                                _this.hitUnit(unit);
                                return true;
                            }
                            return false;
                        };
                    })(this));
                    if (this.dead) {
                        let exp = new HitExplosion();
                        exp.z = 1000;
                        exp.pos = new Float64Array([this.pos[0], this.pos[1]]);
                        exp.vel = new Float64Array([0, 0]);
                        exp.rot = 0;
                        exp.radius = .5;
                        return _6src_sim_8.Sim.Instance.things[exp.id] = exp;
                    }
                }
                ;
            };
            exports_15("TrackingMissile", TrackingMissile);
            Debree = class Debree extends Particle {
                constructor() {
                    super();
                    this.image = null;
                    this.maxLife = 16 * 5;
                    this.radius = 2;
                    this.size = [1, 1];
                }
                tick() {
                    return this.rot += this.vrot;
                }
                ;
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let fade = this.life / this.maxLife;
                    this.color[3] = Math.floor((1 - fade) * 255);
                    return _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot, this.color);
                }
                ;
            };
            exports_15("Debree", Debree);
            HitExplosion = class HitExplosion extends Explosion {
                constructor() {
                    super();
                    this.image = "img/fire02.png";
                    this.maxLife = 30;
                    this.radius = 2;
                    this.sound = "sounds/weapons/thud1.wav";
                    this.soundVolume = .1;
                    this.frame = 0;
                    this.hitImage = "parts/hit1.png";
                    this.rot = Math.random() * Math.PI * 2;
                    _0dummy_5.actionMixer.action += .5;
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let fade = this.life / this.maxLife;
                    let s = 0.1 + fade * fade * this.radius;
                    this.color[3] = (1 - fade) * 255;
                    _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                    if (this.frame < 4) {
                        s = 1;
                        this.color[3] = 255 / (1 + this.frame);
                        _0dummy_5.baseAtlas.drawSprite(this.hitImage, this.pos, [s, s], this.rot, this.color);
                    }
                    return this.frame += 1;
                }
                ;
            };
            exports_15("HitExplosion", HitExplosion);
            SmallHitExplosion = class SmallHitExplosion extends Explosion {
                constructor() {
                    super();
                    this.sound = "sounds/weapons/thud4.wav";
                    this.frame = 0;
                    this.rot = Math.random() * Math.PI * 2;
                    this.hitImage = "parts/hitAuto1.png";
                    _0dummy_5.actionMixer.action += .5;
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    if (this.frame < 4) {
                        let s = 1;
                        this.color[3] = 255 / (1 + this.frame);
                        _0dummy_5.baseAtlas.drawSprite(this.hitImage, this.pos, [s, s], this.rot, this.color);
                    }
                    return this.frame += 1;
                }
                ;
            };
            exports_15("SmallHitExplosion", SmallHitExplosion);
            RingHitExplosion = class RingHitExplosion extends Explosion {
                constructor() {
                    super();
                    this.image = "img/fire02.png";
                    this.maxLife = 30;
                    this.frame = 0;
                    this.frame = 0;
                }
                draw() {
                    super.draw();
                    if (this.frame === 0) {
                        for (let j = 1; j < 5; j++) {
                            let deb = new Debree();
                            deb.image = "parts/fireSpinPart" + j + ".png";
                            deb.z = this.z + (Math.random() - 0.5) * 0.01;
                            deb.pos = new Float64Array([0, 0]);
                            deb.vel = new Float64Array([0, 0]);
                            _4src_maths_7.v2.set(this.pos, deb.pos);
                            deb.vel[0] = 60 * (Math.random() - 0.5);
                            deb.vel[1] = 60 * (Math.random() - 0.5);
                            deb.rot = 0;
                            deb.vrot = (Math.random() - 0.5);
                            deb.maxLife = 16;
                            deb._pos = _4src_maths_7.v2.create(deb.pos);
                            deb._pos2 = _4src_maths_7.v2.create(deb.pos);
                            deb._rot = deb.rot;
                            deb._rot2 = deb.rot;
                            _0dummy_5.intp.particles[deb.id] = deb;
                        }
                    }
                    return this.frame += 1;
                }
                ;
            };
            exports_15("RingHitExplosion", RingHitExplosion);
            ShipExplosion = class ShipExplosion extends Explosion {
                constructor() {
                    super();
                    this.image = "img/fire02.png";
                    this.maxLife = 15;
                    this.radius = 2;
                    this.sound = "sounds/weapons/explode1.wav";
                    this.soundVolume = .1;
                    _0dummy_5.actionMixer.action += .5;
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let fade = this.life / this.maxLife;
                    let s = Math.pow(this.radius, 1.3) / 100;
                    this.color[3] = (1 - fade) * 255;
                    return _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                }
                ;
            };
            exports_15("ShipExplosion", ShipExplosion);
            AoeExplosion = class AoeExplosion extends Explosion {
                constructor() {
                    super();
                    this.image = "img/point02.png";
                    this.maxLife = 10;
                    this.radius = 2;
                    this.sound = "sounds/weapons/thud3.wav";
                    this.soundVolume = .5;
                    this.damage = 0;
                    this.aoe = 0;
                }
                tick() {
                    if (!this.damaged) {
                        this.damaged = true;
                        return _6src_sim_8.Sim.Instance.unitSpaces[_6src_sim_8.Sim.otherSide(this.side)].findInRange(this.pos, this.aoe + _6src_sim_8.Sim.Instance.maxRadius[_6src_sim_8.Sim.otherSide(this.side)], (function (_this) {
                            return function (unit) {
                                if (unit.owner === _this.owner) {
                                    return false;
                                }
                                let distance = Math.max(_991src_collision_3.CollisionUtils.closestDistance(unit.getBoundPoints(), [_this.pos]), 0);
                                if (distance < _this.aoe) {
                                    let fallOff = 1 - distance / _this.aoe;
                                    if (typeof unit.applyDamage === "function") {
                                        unit.applyDamage(_this.damage * fallOff, _this);
                                    }
                                    if (_this.energyDamage > 1) {
                                        if (typeof unit.applyEnergyDamage === "function") {
                                            unit.applyEnergyDamage(_this.energyDamage * fallOff);
                                        }
                                    }
                                    if (_this.burnAmount > 1) {
                                        if (typeof unit.applyBurnAmount === "function") {
                                            unit.applyBurnAmount(_this.burnAmount * fallOff);
                                        }
                                    }
                                }
                                return false;
                            };
                        })(this));
                    }
                }
                ;
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let fade = Math.min(1, this.life / this.maxLife);
                    let s = this.aoe / 512 * this.radius;
                    this.color[3] = (1 - fade) * 50;
                    return _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                }
                ;
            };
            exports_15("AoeExplosion", AoeExplosion);
            FrameExplosion = class FrameExplosion extends Explosion {
                constructor() {
                    super();
                    this.image = "img/fx/fire1/f#.png";
                    this.nFrames = 8;
                    this.maxLife = 16;
                    this.radius = 2;
                    this.sound = "sounds/weapons/explode1.wav";
                    this.soundVolume = .1;
                }
                draw() {
                    if (this.dead) {
                        return;
                    }
                    let s = 3;
                    this.color = [255, 255, 255, 210];
                    if (this.loopFrames) {
                        let frame = this.life % this.nFrames + 1;
                        let intFrame = Math.floor(frame);
                        return _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                    }
                    else {
                        let frame = (this.life / this.maxLife) * this.nFrames + 1;
                        let intFrame = Math.floor(frame);
                        if (intFrame < this.nFrames) {
                            return _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [s, s], this.rot, this.color);
                        }
                    }
                }
                ;
            };
            exports_15("FrameExplosion", FrameExplosion);
            Rock = class Rock {
                constructor() {
                    this.image = "img/unitBar/pip1.png";
                    this.size = new Float64Array([1, 1]);
                    this["static"] = true;
                    this.maxHP = 1000;
                    this.commandPoint = false;
                    this.bullet = false;
                    this.image = "img/rocks/srock01.png";
                    this.color = _6src_sim_8.Sim.Instance.theme.fillColor;
                    this.id = _6src_sim_8.Sim.Instance.nid();
                    this.dead = false;
                    this.hp = this.maxHP;
                    this.pos = new Float64Array([0, 0]);
                    this.vel = new Float64Array([0, 0]);
                    this.rot = 0;
                    this.size = new Float64Array([1, 1]);
                }
                tick() {
                }
                move() {
                }
                draw() {
                    _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, [this.size[0], -this.size[0]], this.rot, this.color);
                }
            };
            exports_15("Rock", Rock);
            CommandPoint = class CommandPoint extends Thing {
                constructor() {
                    super();
                    this.image = "img/point02.png";
                    this.sliceImage = "img/map/slice02.png";
                    this.size = [1, 1];
                    this.maxHP = 1000;
                    this.radius = 250;
                    this.commandPoint = true;
                    this.capping = 0;
                    this.maxCapp = 10;
                    this.value = 1;
                    this.id = _6src_sim_8.Sim.Instance.nid();
                    this.dead = false;
                    this.z = .01;
                    this.hp = this.maxHP;
                    this.pos = new Float64Array([0, 0]);
                    this.vel = [0, 0];
                    this.rot = 0;
                    this.color = [255, 255, 255, 255];
                    this.side = "neutral";
                    this.capping = 0;
                }
                ;
                static object_to_array(sides) {
                    let results = [];
                    for (let side in sides) {
                        results.push(side);
                    }
                    return results;
                }
                ;
                tick() {
                    _6src_sim_8.Sim.Instance.timeStart("commandPoint");
                    if (_6src_sim_8.Sim.Instance.state !== "running") {
                        _6src_sim_8.Sim.Instance.timeEnd("commandPoint");
                        return;
                    }
                    if (_6src_sim_8.Sim.Instance.serverType === "CTF") {
                        _6src_sim_8.Sim.Instance.timeEnd("commandPoint");
                        return;
                    }
                    if (_6src_sim_8.Sim.Instance.step % 16 === 0) {
                        if (this.side !== null) {
                            for (let curr_player in _6src_sim_8.Sim.Instance.players) {
                                if (_6src_sim_8.Sim.Instance.players[curr_player]
                                    && _6src_sim_8.Sim.Instance.players[curr_player].side === this.side) {
                                    if (_6src_sim_8.Sim.Instance.players[curr_player].gainsMoney && _6src_sim_8.Sim.Instance.gainsMoney) {
                                        _6src_sim_8.Sim.Instance.players[curr_player].earnMoney(this.value);
                                    }
                                }
                            }
                        }
                        let sides = {};
                        let playerOnPoint = [];
                        for (let thing_id in _6src_sim_8.Sim.Instance.things) {
                            if (_6src_sim_8.Sim.Instance.things[thing_id].unit && _6src_sim_8.Sim.Instance.things[thing_id].canCapture) {
                                if (_4src_maths_7.v2.distance(this.pos, _6src_sim_8.Sim.Instance.things[thing_id].pos) < this.radius) {
                                    sides[_6src_sim_8.Sim.Instance.things[thing_id].side] = true;
                                    if (_6src_sim_8.Sim.Instance.players[_6src_sim_8.Sim.Instance.things[thing_id].owner.id]) {
                                        playerOnPoint.push(_6src_sim_8.Sim.Instance.players[_6src_sim_8.Sim.Instance.things[thing_id].owner.id]);
                                    }
                                }
                            }
                        }
                        let sides_arr = CommandPoint.object_to_array(sides);
                        if (sides_arr.length === 1 && (this.side !== sides_arr[0] || _6src_sim_8.Sim.Instance.serverType === "IO")) {
                            this.capping += 1 / this.value;
                            if (this.capping >= this.maxCapp) {
                                if (_6src_sim_8.Sim.Instance.serverType !== "IO") {
                                    this.side = sides_arr[0];
                                    this.bonus(this.side, 100);
                                    if (this.linkedSpawn) {
                                        this.linkedSpawn.side = this.linkedSpawn.spawn = this.side;
                                    }
                                }
                                else {
                                    this.pos = new Float64Array([(Math.random() * 2 - 1) * 2000, (Math.random() * 2 - 1) * 2000]);
                                    for (let thing_id in _6src_sim_8.Sim.Instance.things) {
                                        if ((_6src_sim_8.Sim.Instance.things[thing_id].spawn || _6src_sim_8.Sim.Instance.things[thing_id].commandPoint)
                                            && _4src_maths_7.v2.distance(_6src_sim_8.Sim.Instance.things[thing_id].pos, this.pos) < (_6src_sim_8.Sim.Instance.things[thing_id].radius + this.radius + 100)) {
                                            break;
                                        }
                                    }
                                }
                                _6src_sim_8.Sim.Instance.captures += 1;
                                this.capping = 0;
                                let results = [];
                                for (let l = 0; l < playerOnPoint.length; l++) {
                                    playerOnPoint[l].capps += 1;
                                    if (_6src_sim_8.Sim.Instance.serverType === "IO") {
                                        playerOnPoint[l].earnMoney(Math.round(_6src_sim_8.Sim.Instance.moneyInc * this.value));
                                        results.push(playerOnPoint[l].maxMoney = Math.max(playerOnPoint[l].maxMoney, playerOnPoint[l].money));
                                    }
                                    else {
                                        results.push(void 0);
                                    }
                                }
                                _6src_sim_8.Sim.Instance.timeEnd("commandPoint");
                                return results;
                            }
                        }
                        else {
                            if (this.capping > 0) {
                                _6src_sim_8.Sim.Instance.timeEnd("commandPoint");
                                return this.capping -= 1 / this.value;
                            }
                        }
                    }
                    _6src_sim_8.Sim.Instance.timeEnd("commandPoint");
                }
                ;
                bonus(side, amount) {
                    let results = [];
                    for (let player in _6src_sim_8.Sim.Instance.players) {
                        if (_6src_sim_8.Sim.Instance.players[player].side === this.side) {
                            if (_6src_sim_8.Sim.Instance.players[player].gainsMoney) {
                                results.push(_6src_sim_8.Sim.Instance.players[player].earnMoney(amount));
                            }
                            else {
                                results.push(void 0);
                            }
                        }
                        else {
                            results.push(void 0);
                        }
                    }
                    return results;
                }
                ;
                draw() {
                    if (_6src_sim_8.Sim.Instance.theme) {
                        let color = [255, 255, 255, 255];
                        _0dummy_5.baseAtlas.drawSprite(this.image, this.pos, this.size, this.rot, color);
                        if (this.capping > 0) {
                            color = [255, 255, 255, 255];
                            let results = [];
                            for (let i = 0; i < this.maxCapp; i++) {
                                if (this.capping < i) {
                                    break;
                                }
                                let th = (i / this.maxCapp) * 2 * Math.PI;
                                let x = this.pos[0] + Math.sin(th) * (this.radius + 50);
                                let y = this.pos[1] + Math.cos(th) * (this.radius + 50);
                                results.push(_0dummy_5.baseAtlas.drawSprite(this.sliceImage, [x, y], [1, 1], Math.PI - th, color));
                            }
                            return results;
                        }
                    }
                }
                ;
            };
            exports_15("CommandPoint", CommandPoint);
            SpawnPoint = class SpawnPoint extends Thing {
                constructor() {
                    super();
                    this.image = "";
                    this.sliceImage = "img/map/spawnSlice.png";
                    this.maxHP = 1000;
                    this.size = [1, 1];
                    this.static = true;
                    this.radius = 400;
                    this.spawn = true;
                    this.commandPoint = false;
                    this.bullet = false;
                    this.id = _6src_sim_8.Sim.Instance.nid();
                    this.dead = false;
                    this.z = .01;
                    this.hp = this.maxHP;
                    this.pos = new Float64Array([0, 0]);
                    this.vel = [0, 0];
                    this.rot = 0;
                    this.color = [255, 255, 255, 255];
                    this.side = "neutral";
                }
                draw() {
                    if (!_6src_sim_8.Sim.Instance.theme) {
                        return;
                    }
                    let color = ThingUtil.sideColor(this.side);
                    let to = ((_6src_sim_8.Sim.Instance.step - 8) / (16 * 2)) * 20;
                    let results = [];
                    let x, y, th;
                    for (let i = 0; i < 20; i++) {
                        if (to < i) {
                            break;
                        }
                        th = (i / 20) * 2 * Math.PI;
                        x = this.pos[0] + Math.sin(th) * (this.radius + 50);
                        y = this.pos[1] + Math.cos(th) * (this.radius + 50);
                        results.push(_0dummy_5.baseAtlas.drawSprite(this.sliceImage, [x, y], [1, 1], Math.PI / 2 - th, color));
                    }
                    return results;
                }
                ;
            };
            exports_15("SpawnPoint", SpawnPoint);
        }
    };
});
System.register("istrolid_presskannukovh/0dummy", [], function (exports_16, context_16) {
    "use strict";
    var baseAtlas, commander, actionMixer, intp, battleMode, control, ui, Account;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [],
        execute: function () {
            baseAtlas = class baseAtlas {
                static startOffscreenFrame() {
                }
                static beginSprites(arg0, scale, arg2) {
                }
                static endOffscreenFrame() {
                }
                static finishSprites(arg0) {
                }
                static drawSprite(image, pos, size, rot, color) {
                    return;
                }
            };
            exports_16("baseAtlas", baseAtlas);
            commander = class commander {
            };
            exports_16("commander", commander);
            actionMixer = class actionMixer {
            };
            exports_16("actionMixer", actionMixer);
            intp = class intp {
            };
            exports_16("intp", intp);
            battleMode = class battleMode {
            };
            exports_16("battleMode", battleMode);
            control = class control {
            };
            exports_16("control", control);
            ui = class ui {
            };
            exports_16("ui", ui);
            Account = class Account {
            };
            exports_16("Account", Account);
        }
    };
});
//# sourceMappingURL=istrolid.ts.js.map