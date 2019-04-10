export class Colors {
    static niceHex = [
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

    nice: number[][];

    constructor() {
        for (let j = 0; j < Colors.niceHex.length; j++) {
            this.nice.push(Colors.fromHex(Colors.niceHex[j]));
        }
    }

    static validate(a: number[]) {
        let b, i, j, ref;
        b = [0, 0, 0, 0];
        for (i = j = 0; j < 4; i = ++j) {
            if (Number.isInteger(a[i]) && (0 <= (ref = a[i]) && ref < 256)) {
                b[i] = Math.floor(a[i]);
            }
        }
        return b;
    };

    static brightness(c: number[]) {
        return (c[0] + c[1] + c[2]) / 3;
    };

    static copy(c: number[]) {
        return [c[0], c[1], c[2], c[3]];
    };

    static blackOrWhite(c: number[]) {
        if ((c[0] + c[1] + c[2]) / 3 > 128) {
            return [0, 0, 0, 255];
        } else {
            return [255, 255, 255, 255];
        }
    };

    static hue2rgb(p: number, q: number, t: number) {
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
    };

    static hsl2rgb(c: any[]) {
        let a, b, g, h, l, p, q, r, s;
        h = c[0];
        s = c[1];
        l = c[2];
        a = c[3];
        if (s === 0) {
            r = g = b = l;
        } else {
            q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            p = 2 * l - q;
            r = Colors.hue2rgb(p, q, h + 1 / 3);
            g = Colors.hue2rgb(p, q, h);
            b = Colors.hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
    };

    static rgb2hsl(c: number[]) {
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
        } else {
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
    };

    static fromHex(c: string) {
        let a, b, g, r;
        r = parseInt(c.slice(0, 2), 16);
        g = parseInt(c.slice(2, 4), 16);
        b = parseInt(c.slice(4, 6), 16);
        a = 255;
        return Colors.validate([r, g, b, a]);
    };

    static toHex(c: any[]) {
        return Colors.chr(c[0]) + Colors.chr(c[1]) + Colors.chr(c[2]);
    };

    static chr(i: number) {
        if (!i) {
            return "00";
        }
        let b: string = i.toString(16);
        if (b.length === 1) {
            b = "0" + b;
        }
        return b;
    };

    static cssRgba(c: string[]) {
        return "rgba(" + (c[0] || 0) + "," + (c[1] || 0) + "," + (c[2] || 0) + "," + (c[3] || 255) + ")";
    };
}