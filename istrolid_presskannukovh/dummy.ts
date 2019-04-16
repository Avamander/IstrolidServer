import {Thing} from "./things";

export class baseAtlas {
    static rtt: any;

    static startOffscreenFrame(): any {
    }

    static beginSprites(arg0: number[], scale: number, arg2: any[]): any {
    }

    static endOffscreenFrame(): any {
    }

    static finishSprites(arg0: boolean): any {
    }

    static drawSprite(image: string,
                      pos: any[] | Float64Array | number[],
                      size: number[],
                      rot: number,
                      color: number[]) {
        return;
    }
}

export class commander {
    static number: any;
    static rallyPoint: any;
    static side: any;

}

export class actionMixer {
    static action: number;
}

export class intp {
    static things: { [key: number]: Thing };
    static particles: any;
    static t: number;
}

export class battleMode {
    static ordering: boolean;
    static shiftOrder: any;
    static rallyPlacing: any;
    static mouse: any[] | Float64Array | number[];

}

export class control {
    static debug: boolean;
    static perf: any;
}

export class ui {
    static show: any;
}

export class Account {
    static Instance: any;

}