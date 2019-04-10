export class MTwist {
    mt: number[];
    mti: number;

    constructor(seed: number) {
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

    static uint32mul(n1: number, n2: number) {
        /*let n1High16, n1Low16, n2High16, n2Low16;
        //n1Low16 = n1 & 0x0000ffff;
        //n1High16 = n1 >>> 16;
        //n2Low16 = n2 & 0x0000ffff;
        //n2High16 = n2 >>> 16;*/
        return ((((n1 & 0xffff0000) * n2) >>> 0) + (((n1 & 0x0000ffff) * n2) >>> 0)) >>> 0;
    };

    static test() {
        let mtwist: MTwist;
        let seed: number = 1234567890;
        let iterationFactor: number = 10000;
        for (let i: number = 0; i < 1000; i++) {
            mtwist = new MTwist(seed);
            let iterations: number = Math.floor(mtwist.randomUint32() / iterationFactor);
            for (let j = 0; j < iterations; j++) {
                mtwist.randomUint32();
            }
            seed = mtwist.randomUint32();
        }
        return seed === 1240212512;
    };

    randomUint32() {
        let i: number;
        let y: number;
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
    };

    random() {
        return this.randomUint32() / 4294967296;
    };

    randomIntBelow(maxPlusOne: number) {
        let bitMask: number;
        let bitsNeeded: number;
        let int: number;
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
    };

    randomIntBetween(inclusiveMin: number, inclusiveMax: number) {
        return inclusiveMin + this.randomIntBelow(inclusiveMax - inclusiveMin + 1);
    };
}

