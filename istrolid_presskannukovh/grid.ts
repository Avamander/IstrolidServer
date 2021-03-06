import {Sim} from "./sim";
import {Unit} from "./unit";
import {Part} from "./part";
import {Player} from "./things";
import {Account} from "./dummy";

export class Grid {
    static readonly SIZE = 20;

    static modulo(a: number, b: number) {
        return (+a % (b = +b) + b) % b;
    };

    static validSpec(player: Player, spec: string) {
        return Grid.hasIssue(player, spec) === null;
    };

    static hasPart(name: string, unit: Unit) {
        let k, len1, ref1;
        ref1 = unit.parts;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
            let part: Part = ref1[k];
            if (part.name === name) {
                return true;
            }
        }
        return false;
    };

    static check(grid: Part[][], fn: Function) {
        let k, l, ref2, ref3, t, x, y;
        for (x = k = 0, ref2 = Sim.Instance.NxN; 0 <= ref2 ? k < ref2 : k > ref2; x = 0 <= ref2 ? ++k : --k) {
            for (y = l = 0, ref3 = Sim.Instance.NxN; 0 <= ref3 ? l < ref3 : l > ref3; y = 0 <= ref3 ? ++l : --l) {
                t = grid[x][y];
                if (fn(t)) {
                    return true;
                }
            }
        }
        return false;
    }

    static hasIssue(player: Player, spec: string) {
        let e, j, len, part, ref, ref1, size, unit, x, y;
        try {
            unit = new Unit(spec);
            if (unit.parts.length === 0) {
                return "No parts, drag parts from the left.";
            }
            if (unit.cost > Sim.Instance.costLimit + unit.limitBonus) {
                return "Ship too big, cost can't be over $" + (Sim.Instance.costLimit + unit.limitBonus) + ".";
            }

            /*
            if unit.parts.length > 800
                return "Too many parts"
             */
            if (unit.name.length > 50) {
                return "Name too long";
            }
            ref = unit.parts;
            for (j = 0, len = ref.length; j < len; j++) {
                part = ref[j];
                size = Grid.partSize(part);
                x = part.pos[0] / this.SIZE + Sim.Instance.NxN / 2 - size[0] / 2;
                y = part.pos[1] / this.SIZE + Sim.Instance.NxN / 2 - size[1] / 2;
                if ((Grid.modulo(x, 1) > 0.0001 && Grid.modulo(x, 1) < 0.9999) || (Grid.modulo(y, 1) > 0.0001 && Grid.modulo(y, 1) < 0.9999)) {
                    return "Invalid part placement";
                }
                if (part.disable) {
                    return "Has parts that have been discontinued.";
                }
                if (part.ghostCopy) {
                    return "Has parts from a copied ship.";
                }
                if ((part.dir < 0 || part.dir > 3) || Grid.modulo(part.dir, 1) !== 0) {
                    return "Invalid part rotation";
                }
                if (!(part.dir === 0 || part.canRotate)) {
                    return "Part cannot rotate";
                }
                if (!player.ai) {
                    if (part.dlc) {
                        /* // TODO: Fix
                        if (Account.Instance !== undefined && Account.Instance !== null && !Account.Instance.hasDLC(part.dlc)) {
                            return "Please support us by getting " + part.dlc + " DLC and unlock " + part.name + ".";
                        }
                        if (Account.Instance !== undefined && Account.Instance !== null && !Account.Instance.hasDLCBonus() && part.dir && part.dir !== 0) {
                            return "Part rotation is currently only available to <a href='http://store.steampowered.com/app/472490' target='_blank'>supporters who get a DLC</a>.";
                        }*/
                    }
                }
            }

            if (Grid.hasPart("StasisField", unit) && Grid.hasPart("CloakGenerator", unit)) {
                return "Cloak Generator and Stasis Field can't be on the same ship.";
            }

            ref1 = Grid.computeGrid(player, unit, null);
            let grid: Part[][] = ref1[0];
            let badParts: Part[] = ref1[1];
            if (badParts.length > 0) {
                return "Ship has parts outside the build area.";
            }

            /*
            if (!player.ai) {
                if (Grid.check(grid, function (part: Part) {
                    return part.locked;
                })) {
                    return "Has parts that have not been unlocked.";
                }
            }
            */

            if (Grid.check(grid, function (part: Part) {
                return part.overlap;
            })) {
                return "Parts should not overlap.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.exhaust && part.solid;
            })) {
                return "Engine exhaust must not hit another part.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.solid && !part.fill;
            })) {
                return "All ship parts must be connected.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.bad && part.gimble;
            })) {
                return "Weapons must be placed on a mount.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.noTurret;
            })) {
                return "Mount has no turret attached.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.noEffect;
            })) {
                return "Part needs to be next to a weapon.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.cantPaint;
            })) {
                return "Decal can't be placed like this. Decals go on armor or batteries.";
            }
            if (Grid.check(grid, function (part: Part) {
                return part.overPaint;
            })) {
                return "Decal overlaps with another decal.";
            }
            if (Grid.check(grid, function (part: Part) {
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
        } catch (error) {
            e = error;
            console.log("exception e", e);
            return "Part parse error... thats odd?";
        }
    };

    static genBuildPic(spec: string) {
    };

    static offset(part: Part) {
        let xoff, yoff;
        if (part.size[0] % 2 === 1) {
            xoff = 1;
        } else {
            xoff = 0;
        }
        if (part.size[1] % 2 === 1) {
            yoff = 1;
        } else {
            yoff = 0;
        }
        if (part.dir % 2 === 0) {
            return [xoff, yoff];
        } else {
            return [yoff, xoff];
        }
    };

    static partSize(part: Part) {
        let xsize = part.size[0];
        let ysize = part.size[1];
        if (part.dir % 2 === 0) {
            return [xsize, ysize];
        } else {
            return [ysize, xsize];
        }
    };

    static getXY(part: Part) {
        let size = Grid.partSize(part);
        let x = Math.round(part.pos[0] / this.SIZE + Sim.Instance.NxN / 2 - size[0] / 2);
        let y = Math.round(part.pos[1] / this.SIZE + Sim.Instance.NxN / 2 - size[1] / 2);
        return [x, y];
    };

    static computeGrid(player: Player, unit: Unit, removCb: any): [Part[][], Part[]] {
        let ax, ay, ey, i, j, k, l, len, len1, len2, m, n, newSet, o, openSet, p, part,
            px, py, q, r, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2,
            ref20,
            ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref4, ref5, ref6, ref7,
            ref8,
            ref9, root, s, size, u, ws, x, y;

        let parts = unit.parts;
        let grid: Part[][] = [];
        let badParts: Part[] = [];

        for (i = j = 0, ref = Sim.Instance.NxN; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            grid.push((function () {
                let k, ref1;
                let results: Part[] = [];
                for (n = k = 0, ref1 = Sim.Instance.NxN; 0 <= ref1 ? k < ref1 : k > ref1; n = 0 <= ref1 ? ++k : --k) {
                    // @ts-ignore Because it's okay if it's empty atm
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

                    let t: Part;

                    if (grid[x]) {
                        t = grid[x][y];
                    } else {
                        // @ts-ignore
                        t = null;
                    }

                    if (t === void 0) {
                        badParts.push(part);
                        continue;
                    }
                    if (!player.ai) {
                        /*if (part.dlc) { // TODO: Fix
                            if (Account.Instance !== undefined && !Account.Instance.hasDLC(part.dlc)) {
                                t.bad = true;
                                t.locked = true;
                            }
                        }*/
                        //if (Account.Instance !== undefined && Account.Instance !== null && !Account.Instance.hasDLCBonus() && part.dir && part.dir !== 0) { // TODO: server exclude
                        /*if (part.dir && part.dir !== 0) {
                            t.bad = true;
                            t.locked = true;
                        }*/
                    }
                    // TODO: Fix
                    /*if (Sim.Instance.galaxyStar && player.id === Account.Instance.id && !galaxyMode.unlockedParts[part.constructor.name]) {
                        t.bad = true;
                        t.locked = true;
                    }*/

                    if (part.paintable) {
                        t.paintable = true;
                    }

                    if (part.decal) {
                        if (!t.paintable) {
                            t.cantPaint = true;
                            t.bad = true;
                        } else if (t.painted) {
                            t.overPaint = true;
                            t.bad = true;
                        } else {
                            t.painted = true;
                        }
                        continue;
                    }
                    if (part.gimble) {
                        if (!t.mount) {
                            t.bad = true;
                            t.gimble = true;
                        }
                    } else {
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

                    // @ts-ignore If ModSharer
                    if (part.effected_weapons) {
                        // @ts-ignore
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
                    let t: Part;
                    if (grid[x + ax]) {
                        t = grid[x + ax][y + ay];
                    } else {
                        // @ts-ignore
                        t = null;
                    }

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
        for (x = s = 0, ref29 = Sim.Instance.NxN; 0 <= ref29 ? s < ref29 : s > ref29; x = 0 <= ref29 ? ++s : --s) {
            for (y = u = 0, ref30 = Sim.Instance.NxN; 0 <= ref30 ? u < ref30 : u > ref30; y = 0 <= ref30 ? ++u : --u) {
                let t: Part = grid[x][y];
                if (t.exhaust && t.solid) {
                    t.bad = true;
                }
                if (t.solid && !t.fill) {
                    t.bad = true;
                }
            }
        }
        return [grid, badParts];
    };
}

