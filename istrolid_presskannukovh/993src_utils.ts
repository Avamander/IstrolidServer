import {Sim} from "./6src_sim";
import {baseAtlas, control} from "./0dummy";

export class Utils {
    stats: {
        add: {
            (arg0: any, arg1: number): void;
            (arg0: any, arg1: number): void;
            (arg0: any, arg1: number): void;
        };
        drawFrames: {
            (arg0: any, arg1: number, arg2: number, arg3: number): void;
            (arg0: any, arg1: number, arg2: number, arg3: number): void;
            (arg0: any, arg1: number, arg2: number, arg3: number): void;
        };
        fps: any; Sim: any; net: any;
    };

    static choose(list: any[]) {
        return list[Math.floor(Math.random() * list.length)];
    };

    static shuffle(list: any[]) {
        return list.sort(function (a: any, b: any) {
            return Math.random() - 0.5;
        });
    };

    // dumps JSON.stringify
    // loads JSON.parse;

    static chooseInt(a: number, b: number) {
        return Math.floor(a + Math.random() * (b - a));
    };

    static deepEq(a: any, b: any) {
        return JSON.stringify(a) === JSON.stringify(b);
    };

    static formatTime(t: number) {
        let minutes, seconds;
        t = Math.floor(t);
        seconds = t % 60;
        minutes = Math.floor(t / 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    };

    static track(name: string, kargs: {
        name?: string;
        api_key?: string;
        user_iden?: string;
        user_name?: string;
        version?: string;
    }) {
        return;
        // noinspection UnreachableCodeJS
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
        //kargs.user_iden = typeof commander !== "undefined" && commander !== null ? commander.id : void 0;
        //kargs.user_name = typeof commander !== "undefined" && commander !== null ? commander.name : void 0;
        kargs.version = Sim.Instance.VERSION + "." + Sim.Instance.MINOR_VERSION;
        return xhr.send(JSON.stringify(kargs));
    };

    static after(ms: number, fn: TimerHandler) {
        return setTimeout(fn, ms);
    };

    static doAfter(ms: number, fn: TimerHandler) {
        return setTimeout(fn, ms);
    };

    static now() {
        let n, ref, s;
        if (typeof process !== "undefined" && process !== null) {
            ref = process.hrtime();
            s = ref[0];
            n = ref[1];
            return (s * 1000000 + n / 1000) / 1000;
        } else {
            return performance.now();
        }
    };

    static ab2str(buf: Iterable<number>) {
        let bufView, i, j, ref, str;
        str = "";
        bufView = new Uint8Array(buf);
        for (i = j = 0, ref = bufView.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            str += String.fromCharCode(bufView[i]);
        }
        return str;
    };

    static str2ab(str: { length: number; charCodeAt: (arg0: number) => number; }) {
        let buf, bufView, i, j, ref;
        buf = new ArrayBuffer(str.length);
        bufView = new Uint8Array(buf);
        for (i = j = 0, ref = str.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };

    static dv2str(dv: { byteLength: any; getUint8: (arg0: number) => number; }) {
        let i, j, ref, str;
        str = "";
        for (i = j = 0, ref = dv.byteLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            str += String.fromCharCode(dv.getUint8(i));
        }
        return str;
    };

    static str2dv(str: any) {
        return new DataView(Utils.str2ab(str));
    };

    static strBuff(buf: number[]) {
        let j, len, n, str, u8;
        str = "";
        u8 = new Uint8Array(buf);
        for (j = 0, len = u8.length; j < len; j++) {
            n = u8[j];
            str += n + " ";
        }
        return str;
    };

    static randColor(a: number) {
        return [Math.floor(a + (255 - a) * Math.random()), Math.floor(a + (255 - a) * Math.random()), Math.floor(a + (255 - a) * Math.random()), 255];
    };

    static add(frames: any[], n: string | number) {
        let sec;
        sec = Math.floor(Date.now() / 1000);
        if (frames[sec] != null) {
            return frames[sec] += n;
        } else {
            return frames[sec] = n;
        }
    };

    static rotl(n: number, s: number) {
        return n << s | n >>> 32 - s;
    };

    static tohex(i: number) {
        for (let h = "", s = 28; ; s -= 4) {
            h += (i >>> s & 0xf).toString(16);
            if (!s) return h;
        }
    };

    static sha1(msg: string) {
        let fcc = String.fromCharCode;
        let H0 = 0x67452301, H1 = 0xEFCDAB89, H2 = 0x98BADCFE, H3 = 0x10325476, H4 = 0xC3D2E1F0, M = 0x0ffffffff;
        let i, t, W = new Array(80);
        let ml = msg.length;
        let wa = [];
        msg += fcc(0x80);
        while (msg.length % 4) msg += fcc(0);
        for (i = 0; i < msg.length; i += 4) wa.push(msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3));
        while (wa.length % 16 != 14) wa.push(0);
        wa.push(ml >>> 29);
        wa.push((ml << 3) & M);
        for (let bo = 0; bo < wa.length; bo += 16) {
            for (i = 0; i < 16; i++) W[i] = wa[bo + i];
            for (i = 16; i <= 79; i++) W[i] = Utils.rotl(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
            let A = H0, B = H1, C = H2, D = H3, E = H4;
            for (i = 0; i <= 19; i++) { // noinspection CommaExpressionJS,NonShortCircuitBooleanExpressionJS
                t = (Utils.rotl(A, 5) + (B & C | ~B & D) + E + W[i] + 0x5A827999) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
            }
            for (i = 20; i <= 39; i++) { // noinspection CommaExpressionJS,NonShortCircuitBooleanExpressionJS
                t = (Utils.rotl(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
            }
            for (i = 40; i <= 59; i++) { // noinspection CommaExpressionJS,NonShortCircuitBooleanExpressionJS
                t = (Utils.rotl(A, 5) + (B & C | B & D | C & D) + E + W[i] + 0x8F1BBCDC) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
            }
            for (i = 60; i <= 79; i++) { // noinspection CommaExpressionJS,NonShortCircuitBooleanExpressionJS
                t = (Utils.rotl(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & M, E = D, D = C, C = Utils.rotl(B, 30), B = A, A = t;
            }
            H0 = H0 + A & M;
            H1 = H1 + B & M;
            H2 = H2 + C & M;
            H3 = H3 + D & M;
            H4 = H4 + E & M;
        }
        return Utils.tohex(H0) + Utils.tohex(H1) + Utils.tohex(H2) + Utils.tohex(H3) + Utils.tohex(H4);
    };

    static last(array: any[]) {
        return array[array.length - 1];
    };

    fpsAdd(n: number) {
        if (n == null) {
            n = 1;
        }
        return this.stats.add(this.stats.fps, n);
    };

    netAdd(n: number) {
        if (n == null) {
            n = 1;
        }
        return this.stats.add(this.stats.net, n);
    };

    simAdd(n: number) {
        if (n == null) {
            n = 1;
        }
        return this.stats.add(this.stats.Sim, n);
    };

    draw() {
        if (!control.perf) {
            return;
        }
        this.stats.drawFrames(this.stats.fps, 10, 60, 160);
        this.stats.drawFrames(this.stats.Sim, 1, 16, 320);
        return this.stats.drawFrames(this.stats.net, 1024 * 10, 1024, 720);
    };

    drawFrames(frames: number[], div: number, max: any, yadj: number) {
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
                    // @ts-ignore
                    results1.push(baseAtlas.drawSprite("parts/sel1x1.png", [sx, sy - y * 16], [.5, .5], 0, color));
                }
                return results1;
            })());
        }
        return results;
    };
}
