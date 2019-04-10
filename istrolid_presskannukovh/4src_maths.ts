export class v2 {
    static created: number = 0;
    RAD = Math.PI / 180;

    X = [1, 0, 0];
    Y = [0, 1, 0];
    Z = [0, 0, 1];

    static create(a: Float64Array | null) {
        this.created += 1;
        let d = new Float64Array(2);
        if (a != null) {
            d[0] = a[0];
            d[1] = a[1];
        }
        return d;
    };

    static zero(d: Float64Array) {
        d[0] = 0;
        d[1] = 0;
        return d;
    };

    static set(a: Float64Array, d: Float64Array) {
        d[0] = a[0];
        d[1] = a[1];
        return d;
    };

    static add(a: Float64Array, b: Float64Array, d: Float64Array | null) {
        if (d == null) {
            d = a;
        }
        d[0] = a[0] + b[0];
        d[1] = a[1] + b[1];
        return d;
    };

    static sub(a: Float64Array, b: Float64Array, d: Float64Array | null) {
        if (d == null) {
            d = a;
        }
        d[0] = a[0] - b[0];
        d[1] = a[1] - b[1];
        return d;
    };

    static neg(a: Float64Array, d: Float64Array | null) {
        if (d == null) {
            d = a;
        }
        d[0] = -a[0];
        d[1] = -a[1];
        return d;
    };

    static scale(v: Float64Array, n: number, d: Float64Array | null) {
        if (d == null) {
            d = v;
        }
        d[0] = v[0] * n;
        d[1] = v[1] * n;
        return d;
    };

    static norm(a: Float64Array, d: Float64Array | null) {
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
        } else if (len === 1) {
            d[0] = x;
            d[1] = y;
            return d;
        }
        d[0] = x / len;
        d[1] = y / len;
        return d;
    };

    static cross(a: Float64Array, b: Float64Array) {
        return a[0] * b[1] - b[0] * a[1];
    };

    static angle(a: Float64Array) {
        let b: number = Math.atan2(a[1], a[0]) + Math.PI / 2;
        while (b > Math.PI) {
            b -= Math.PI * 2;
        }
        while (b < -Math.PI) {
            b += Math.PI * 2;
        }
        return b;
    };

    static angleBetween(a: Float64Array, b: Float64Array) {
        return Math.atan2(a[1] - b[1], a[0] - b[1]);
    };

    static mag(v: Float64Array) {
        let x, y;
        x = v[0];
        y = v[1];
        return Math.sqrt(x * x + y * y);
    };

    static dot(a: Float64Array, b: Float64Array) {
        return a[0] * b[0] + a[1] * b[1];
    };

    static direction(from: Float64Array, to: Float64Array, d: Float64Array | null) {
        if (d == null) {
            d = from;
        }
        d[0] = from[0] - to[0];
        d[1] = from[1] - to[1];
        v2.norm(d, d);
        return d;
    };

    static distance(from: Float64Array, to: Float64Array) {
        let x: number, y: number;
        x = to[0] - from[0];
        y = to[1] - from[1];
        return Math.sqrt(x * x + y * y);
    };

    static distanceSq(from: Float64Array, to: Float64Array) {
        let x, y;
        x = to[0] - from[0];
        y = to[1] - from[1];
        return x * x + y * y;
    };

    static lerp(a: Float64Array, b: Float64Array, lerp: number, d: Float64Array) {
        if (d == null) {
            d = a;
        }
        d[0] = a[0] + lerp * (b[0] - a[0]);
        d[1] = a[1] + lerp * (b[1] - a[1]);
        return d;
    };

    static random(v: Float64Array): Float64Array {
        v[0] = Math.random() - .5;
        v[1] = Math.random() - .5;
        return v2.norm(v, v);
    };

    static rotate(v: Float64Array, th: number, d: Float64Array) {
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
    };

    static pointTo(d: Float64Array, th: number) {
        d[0] = Math.cos(th - Math.PI / 2);
        d[1] = Math.sin(th - Math.PI / 2);
        return d;
    };

    static str(v: Float64Array): string {
        return "(" + (v3.print_friendly(v[0])) + "," + (v3.print_friendly(v[1])) + ")";
    };
}

export class v3 {
    static create(a: Float64Array) {
        let d = new Float64Array(3);
        if (a != null) {
            d[0] = a[0];
            d[1] = a[1];
            d[2] = a[2];
        }
        return d;
    };

    static zero(d: Float64Array) {
        d[0] = 0;
        d[1] = 0;
        d[2] = 0;
        return d;
    };

    static set(a: Float64Array, d: Float64Array) {
        d[0] = a[0];
        d[1] = a[1];
        d[2] = a[2];
        return d;
    };

    static add(a: Float64Array, b: Float64Array, d: Float64Array) {
        if (d == null) {
            d = a;
        }
        d[0] = a[0] + b[0];
        d[1] = a[1] + b[1];
        d[2] = a[2] + b[2];
        return d;
    };

    static sub(a: Float64Array, b: Float64Array, d: Float64Array) {
        if (d == null) {
            d = a;
        }
        d[0] = a[0] - b[0];
        d[1] = a[1] - b[1];
        d[2] = a[2] - b[2];
        return d;
    };

    static neg(a: Float64Array, d: Float64Array) {
        if (d == null) {
            d = a;
        }
        d[0] = -a[0];
        d[1] = -a[1];
        d[2] = -a[2];
        return d;
    };

    static scale(v: Float64Array, n: number, d: Float64Array) {
        if (d == null) {
            d = v;
        }
        d[0] = v[0] * n;
        d[1] = v[1] * n;
        d[2] = v[2] * n;
        return d;
    };

    static norm(a: Float64Array, d: Float64Array) {
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
        } else if (len === 1) {
            d[0] = x;
            d[1] = y;
            d[2] = z;
            return d;
        }
        d[0] = x / len;
        d[1] = y / len;
        d[2] = z / len;
        return d;
    };

    static cross(a: Float64Array, b: Float64Array, d: Float64Array) {
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
    };

    static angle(a: Float64Array, b: Float64Array) {
        let cosa, cross, mg, sina, th;
        mg = v3.mag(a) * v3.mag(b);
        cross = v3.cross(a, b, v3.create(null));
        sina = v3.mag(cross);
        sina /= mg;
        cosa = v3.dot(a, b);
        cosa /= mg;
        th = Math.atan(sina / cosa);
        return th;
    };

    static mag(v: Float64Array) {
        let x, y, z;
        x = v[0];
        y = v[1];
        z = v[2];
        return Math.sqrt(x * x + y * y + z * z);
    };

    static dot(a: Float64Array, b: Float64Array) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };

    static direction(from: Float64Array, to: Float64Array, d: Float64Array) {
        if (d == null) {
            d = from;
        }
        v3.sub(from, to, d);
        v3.norm(d, null);
        return d;
    };

    static distance(from: Float64Array, to: Float64Array) {
        let x, y, z;
        x = to[0] - from[0];
        y = to[1] - from[1];
        z = to[2] - from[2];
        return Math.sqrt(x * x + y * y + z * z);
    };

    static lerp(a: Float64Array, b: Float64Array, lerp: number, d: Float64Array) {
        if (d == null) {
            d = a;
        }
        d[0] = a[0] + lerp * (b[0] - a[0]);
        d[1] = a[1] + lerp * (b[1] - a[1]);
        d[2] = a[2] + lerp * (b[2] - a[2]);
        return d;
    };

    static random(v: Float64Array) {
        v[0] = Math.random() - .5;
        v[1] = Math.random() - .5;
        v[2] = Math.random() - .5;
        return v3.norm(v, null);
    };

    static print_friendly(n: number) {
        return Math.round(n * 10000) / 10000;
    };

    static str(v: Float64Array) {
        return "(" + (v3.print_friendly(v[0])) + "," + (v3.print_friendly(v[1])) + "," + (v3.print_friendly(v[2])) + ")";
    };
}


export class v4 {
    static create(a: Float64Array) {
        let d = new Float64Array(4);
        if (a != null) {
            d[0] = a[0];
            d[1] = a[1];
            d[2] = a[2];
            d[3] = a[3];
        }
        return d;
    };

    static str(v: Float64Array) {
        return "(" + (v3.print_friendly(v[0])) + "," + (v3.print_friendly(v[1])) + "," + (v3.print_friendly(v[2])) + "," + (v3.print_friendly(v[3])) + ")";
    };
}

export class m3 {
    static create(m: Float64Array) {
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
    };

    static set(m: Float64Array, d: Float64Array) {
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
    };

    static identity(d: Float64Array) {
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
    };

    static transpose(m: Float64Array, d: Float64Array) {
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
    };

    static to_m4(m: Float64Array, d: Float64Array) {
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
    };

    static str(m: Float64Array) {
        return [v3.print_friendly(m[0]), v3.print_friendly(m[1]), v3.print_friendly(m[2]), v3.print_friendly(m[3]), "|", v3.print_friendly(m[4]), v3.print_friendly(m[5]), v3.print_friendly(m[6]), v3.print_friendly(m[7]), "|", v3.print_friendly(m[8]), v3.print_friendly(m[9]), v3.print_friendly(m[10]), v3.print_friendly(m[11]), "|", v3.print_friendly(m[12]), v3.print_friendly(m[13]), v3.print_friendly(m[14]), v3.print_friendly(m[15])].join(" ");
    };
}


export class m4 {
    static create(m: Float64Array): Float64Array {
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
    };

    static set(m: Float64Array, d: Float64Array) {
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
    };

    static identity(d: Float64Array) {
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
    };

    static transpose(m: Float64Array, d: Float64Array) {
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
    };

    static determinant(m: Float64Array) {
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
    };

    static inverse(m: Float64Array, d: Float64Array) {
        let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33, b00, b01, b02, b03, b04,
            b05, b06, b07, b08, b09, b10, b11, invDet;
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
    };

    static only_rot(m: Float64Array, d: Float64Array) {
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
    };

    static to_m3(m: Float64Array, d: Float64Array) {
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
    };

    static to_inv_m3(m: Float64Array, d: Float64Array) {
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
    };

    static mul(m: Float64Array, m2: Float64Array, d: Float64Array) {
        let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33, b00, b01, b02, b03, b10,
            b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33;
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
    };

    static mul_v3(m: Float64Array, v: Float64Array, d: Float64Array) {
        let x: number, y: number, z: number;
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
    };

    static pos(m: Float64Array, v: Float64Array) {
        if (v == null) {
            v = v3.create(null);
        }
        v[0] = m[12];
        v[1] = m[13];
        v[2] = m[14];
        return v;
    };

    static set_pos(m: Float64Array, v: Float64Array) {
        m[12] = v[0];
        m[13] = v[1];
        m[14] = v[2];
        return v;
    };

    static forward(m: Float64Array, v: Float64Array) {
        if (v == null) {
            v = v3.create(null);
        }
        v[0] = -m[8];
        v[1] = -m[9];
        v[2] = -m[10];
        return v;
    };

    static distance(a: Float64Array, b: Float64Array) {
        let x, y, z;
        x = a[12] - b[12];
        y = a[13] - b[13];
        z = a[14] - b[14];
        return Math.sqrt(x * x + y * y + z * z);
    };

    static translate(m: Float64Array, v: Float64Array, d: Float64Array) {
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
    };

    static scale(mat: Float64Array, vec: Float64Array, dest: Float64Array) {
        let x: number, y: number, z: number;
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
    };

    static create_rot(d: Float64Array, angle: number, axis: Float64Array) {
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
    };

    static set_rot_only(d: Float64Array, angle: number, axis: Float64Array) {
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
    };

    static rotate(mat: Float64Array, angle: number, axis: Float64Array, dest: Float64Array) {
        let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, b00, b01, b02, b10, b11, b12, b20, b21, b22, c,
            len, s, t, x, y, z;
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
        } else if (mat !== dest) {
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
    };

    static rotateX(mat: Float64Array, angle: number, dest: Float64Array) {
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
        } else if (mat !== dest) {
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
    };

    static rotateY(mat: Float64Array, angle: number, dest: Float64Array) {
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
        } else if (mat !== dest) {
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
    };

    static rotateZ(mat: Float64Array, angle: number, dest: Float64Array) {
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
        } else if (mat !== dest) {
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
    };

    static get_hpr(m: Float64Array, v: Float64Array) {
        let heading, pitch, roll;
        if (v == null) {
            v = v3.create(null);
        }
        if (m[1] > 0.998) {
            heading = Math.atan2(m[2], m[10]);
            pitch = Math.PI / 2;
            roll = 0;
        } else if (m[1] < -0.998) {
            heading = Math.atan2(m[2], m[10]);
            pitch = -Math.PI / 2;
            roll = 0;
        } else {
            heading = Math.atan2(-m[8], m[0]);
            pitch = Math.atan2(-m[6], m[5]);
            roll = Math.asin(m[4]);
        }
        v[0] = heading;
        v[1] = pitch;
        v[2] = roll;
        return v;
    };

    static set_quat(dest: Float64Array, w: number, x: number, y: number, z: number) {
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
    };

    static frustum(left: number, right: number, bottom: number, top: number, near: number, far: number, dest: Float64Array) {
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
    };

    static perspective(fovy: number, aspect: number, near: number, far: number, dest: Float64Array) {
        let right, top;
        top = near * Math.tan(fovy * Math.PI / 360.0);
        right = top * aspect;
        return m4.frustum(-right, right, -top, top, near, far, dest);
    };

    static ortho(left: number, right: number, bottom: number, top: number, near: number, far: number, dest: Float64Array) {
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
    };

    static lookAt(eye: Float64Array, center: Float64Array, up: Float64Array, dest: Float64Array) {
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
        } else {
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
        } else {
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
    };

    static to_array(mat: Float64Array) {
        return [mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]];
    };

    static m4(mat: Float64Array) {
        return [v3.print_friendly(mat[0]), v3.print_friendly(mat[1]), v3.print_friendly(mat[2]), v3.print_friendly(mat[3]), "|", v3.print_friendly(mat[4]), v3.print_friendly(mat[5]), v3.print_friendly(mat[6]), v3.print_friendly(mat[7]), "|", v3.print_friendly(mat[8]), v3.print_friendly(mat[9]), v3.print_friendly(mat[10]), v3.print_friendly(mat[11]), "|", v3.print_friendly(mat[12]), v3.print_friendly(mat[13]), v3.print_friendly(mat[14]), v3.print_friendly(mat[15])].join(" ");
    };
}

//let q4 = {};

