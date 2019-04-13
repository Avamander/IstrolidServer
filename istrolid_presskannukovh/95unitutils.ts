import {Parts} from "./96src_parts";

export class UnitUtils {
    static readonly legacyParts = [null, "Mount360", "Mount180", "Mount270", "Mount90", "Mount30", "HArmor2x2", "HArmor1x2", "HArmor1x1", "HArmor2x1", "HArmor1x1Angle", "UArmor1x1", "UArmor1x2", "UArmor2x1", "UArmor1x1Angle", "Reactor2x2", "Reactor1x2", "Reactor1x1", "Reactor2x1", "EnergyTransfer", "ShieldGen2x2", "ShieldGen2x1", "Battery1x2", "Battery1x1", "Battery2x1", "Battery2x2", "Engine01", "Engine02", "Engine03", "Engine04", "Engine05", "Engine06", "Engine07", "HArmor2x2Front1", "HArmor2x2Front2", "HArmor1x2Font1", "HArmor1x2Front2", "HArmor2x2Back1", "HArmor2x2Back2", "HArmor1x2Back1", "HArmor1x2Back2", "Wing1x2", "Wing2x2", "Wing2x1", "Wing1x1Notch", "Wing1x1Angle", "Wing1x1Round", "PDTurret", "HeavyPDTurret", "RingTurret", "TorpTurret", "MissileTurret", "ArtilleryTurret", "PlasmaTurret", "LightBeamTurret", "HeavyBeamTurret", "FlackTurret", "SniperGun", "EMPGun", "AOEWarhead", "TargetingMod", "DamageMod", "ReloaderMod", "BulletSpeedMod", "Ai1", "OverKillAi", "Ai3", "Ai4", "ShapedWarhead", "BombGun", "HArmor1x1AngleBack", "UArmor1x1AngleBack", "HArmor2x2Angle", "HArmor2x2AngleBack", "VArmor1x2SideBar", "VArmor1x2SideBarFilled", "VArmor1x2IBeam", "VArmor1x2Corner4", "VArmor1x2End", "VArmor1x1Corner1", "VArmor1x1Corner2", "VArmor1x1Corner3", "VArmor1x1Hook", "VArmor1x1CornerBack", "Mount360Micro", "AutoTurret", "TeslaTurret", "WavePullTurret", "ShieldGen1x1", "WavePushTurret", "CloakGenerator", "SymbolDecal1", "SymbolDecal2", "SymbolDecal3", "SymbolDecal4", "SymbolDecal5", "SymbolDecal6", "SymbolDecal7", "SymbolDecal8", "SymbolDecal9", "SymbolDecal10", "SymbolDecal11", "SymbolDecal12", "SymbolDecal13", "SymbolDecal14", "SymbolDecal15", "SymbolDecal16", "SymbolDecal17", "SymbolDecal18", "SymbolDecal19", "SymbolDecal20", "SymbolDecal21", "SymbolDecal22", "SymbolDecal23", "SymbolDecal24", null, null, null, null, null, "UArmor2x2", "UArmor1x2Notch1", "UArmor1x2Notch2", "UArmor1x1Notch1", "UArmor1x1Notch2", "UArmor1x1Spike", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "VArmor2x2", "VArmor1x2", "VArmor1x1", "VArmor1x1Angle", "VArmor2x2Angle", "VArmor2x2Curve", "VArmor1x1Curve", null, null, null, "HAarmor1x2Curved", "HArmor2x2Curved", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Stripe1x1", "Stripe1x1Corner", "Stripe1x2", "Stripe2x1", "Stripe2x2", "Stripe2x2Corner", "Stripe2x2Round", "StripeDouble2x1", "StripeDouble2x2", null, null, null, null, null, null, null, null, null, null, null, "LetterA", "LetterB", "LetterC", "LetterD", "LetterE", "LetterF", "LetterG", "LetterH", "LetterI", "LetterJ", "LetterK", "LetterL", "LetterM", "LetterN", "LetterO", "LetterP", "LetterQ", "LetterR", "LetterS", "LetterT", "LetterU", "LetterV", "LetterW", "LetterX", "LetterY", "LetterZ", "LetterPound", "LetterDot", null, null, "Letter0", "Letter1", "Letter2", "Letter3", "Letter4", "Letter5", "Letter6", "Letter7", "Letter8", "Letter9", "DroneBody", "Mount10Range", "FlameTurret", "StasisField", "Faction2", "Faction3", "Faction4", "Faction5", "Faction6", "Faction7", "Faction1", null, null, null, null];

    static toShort(spec: { parts: { pos: any[]; type: any; dir: any; ghostCopy: boolean; }[]; name: string; aiRules: any; }) {
        if (!spec) {
            return null;
        }
        return JSON.stringify(spec);
    };

    static atob (a: string) {
        return Buffer.from(a).toString("base64");
    };

    static global (b: string) {
        Buffer.from(b, "base64").toString();
    };

    static fromShort(rawShort: string) {
        let bin, e, i, j, ref, short, spec, type;
        if (!rawShort) {
            return {
                parts: []
            };
        }
        try {
            if (typeof rawShort === "object") {
                // @ts-ignore
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
            } else {
                short = decodeURIComponent(rawShort);
                bin = new Uint8Array(UnitUtils.atob(short).split("").map(function (c) {
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
        } catch (error) {
            e = error;
            console.log("Can't decode ship", e, rawShort);
        }
        return {
            parts: []
        };
    }

    static specCost(input_spec: string) {
        let j, len, part, partCls;
        let spec: { parts: { "type": string; }[]; };
        let cost = 0;
        if (!Array.isArray(input_spec)) {
            // @ ts-ignore
            spec = UnitUtils.fromShort(input_spec);
        }

        for (j = 0, len = spec.parts.length; j < len; j++) {
            part = spec.parts[j];
            partCls = (<any>Parts)[part.type].cost;
            if (partCls) {
                cost += partCls.cost;
            }
        }
        return cost;
    }

    static applyEffect(n: number, effect: number) {
        return 1 + (n - 1) * effect;
    };
}