import {Part, Engine, Turret} from "./95part";
import {Bullets} from "./96bullets";
import {Explosions} from "./97explosions";

export namespace Parts {
    import LightPlasmaBullet = Bullets.LightPlasmaBullet;
    import LightBeam = Bullets.LightBeam;
    import RamBullet = Bullets.RamBullet;
    import PlasmaBullet = Bullets.PlasmaBullet;
    import MachineBullet = Bullets.MachineBullet;
    import SidewinderBullet = Bullets.SidewinderBullet;
    import TeslaBolt = Bullets.TeslaBolt;
    import HeavyPDBullet = Bullets.HeavyPDBullet;
    import RingBullet = Bullets.RingBullet;
    import HeavyBeam = Bullets.HeavyBeam;
    import FlackBullet = Bullets.FlackBullet;
    import PDLaserBullet = Bullets.PDLaserBullet;
    import FlameBullet = Bullets.FlameBullet;
    import NeedleGunBullet = Bullets.NeedleGunBullet;
    import MissileBullet = Bullets.MissileBullet;
    import LaserBullet = Bullets.LaserBullet;
    import WavePushArch = Bullets.WavePushArch;
    import EMPOrb = Bullets.EMPOrb;
    import EMPOrb2 = Bullets.EMPOrb2;
    import WavePullArch = Bullets.WavePullArch;
    import BattleCannonBullet = Bullets.BattleCannonBullet;
    import AutoBullet = Bullets.AutoBullet;
    import SniperLaser = Bullets.SniperLaser;
    import Bomb = Bullets.Bomb;
    import ArtilleryBullet = Bullets.ArtilleryBullet;

    import AoeExplosion = Explosions.AoeExplosion;

    export class Mount360 extends Part {
        name = "360 Turret Mount";
        desc = "Use this to mount weapons.";
        hp = 10;
        cost = 36;
        image = "mount360.png";
        mount = true;
        arc = 360;
        attach = true;
        size = [2, 2];
        mass = 30;
        stripe = true;
        tab = "weapons";
        canRotate = false;

        constructor() {
            super();
        }
    }

    export class Mount270 extends Mount360 {

        name = "270 Turret Mount";
        desc = "Use this to mount weapons.";
        hp = 20;
        cost = 27;
        image = "mount300.png";
        arc = 270;
        size = [2, 2];
        mass = 10;

        constructor() {
            super();
        }
    }

    export class Mount180 extends Mount360 {
        name = "200 Turret Mount";
        desc = "Use this to mount weapons.";
        hp = 20;
        cost = 15;
        image = "mount180.png";
        arc = 200;
        size = [2, 2];
        mass = 10;

        constructor() {
            super();
        }
    }

    export class Mount90 extends Mount360 {
        name = "90 Turret Mount";
        desc = "Use this to mount weapons.";
        hp = 10;
        cost = 9;
        image = "mount90.png";
        arc = 90;
        size = [2, 2];
        mass = 5;

        constructor() {
            super();
        }
    }

    export class Mount30 extends Mount360 {
        name = "30 Turret Mount";
        desc = "Use this to mount weapons.";
        hp = 5;
        cost = 3;
        image = "mount30.png";
        arc = 30;
        size = [2, 2];
        mass = 5;

        constructor() {
            super();
        }
    }

    export class Mount360Micro extends Mount360 {
        name = "Micro 360 Turret Mount";
        desc = "A cheaper lighter 360 mount that has only 66% of the range of mounted weapons.";
        hp = 20;
        cost = 15;
        image = "mount360short.png";
        mount = true;
        arc = 360;
        attach = true;
        size = [2, 2];
        mass = 5;
        rangeBuffMul = .66;

        constructor() {
            super();
        }

        initTurret(turret: Turret) {
            turret.range *= this.rangeBuffMul;
        }
    }

    export class Mount10Range extends Mount360 {
        name = "Spinal Turret Mount";
        desc = "A narrow angle forward mount that grants a large flat range bonus range.";
        hp = 5;
        cost = 20;
        image = "mount10range.png";
        mount = true;
        arc = 20;
        attach = true;
        size = [2, 4];
        mass = 40;
        weaponRangeFlat = 450;

        constructor() {
            super();
        }

        initTurret(turret: Turret) {
            turret.weaponRangeFlat += this.weaponRangeFlat;
        }
    }

    export class Mount10Demi extends Mount360 {
        name = "Demispinal Turret Mount";
        desc = "A smaller narrow angle forward mount that grants a moderate flat range bonus.";
        hp = 5;
        cost = 7;
        image = "mount10wide.png";
        mount = true;
        arc = 20;
        attach = true;
        size = [4, 2];
        mass = 15;
        weaponRangeFlat = 250;

        constructor() {
            super();
        }

        initTurret(turret: Turret) {
            return turret.weaponRangeFlat += this.weaponRangeFlat;
        };
    }

    export class DroneBody extends Mount360 {
        name = "DroneBody";
        desc = "An independent drone with the mounted weapon.";
        hp = 5;
        cost = 15;
        image = "droneBody.png";
        mount = true;
        arc = 360;
        attach = false;
        solid = false;
        size = [4, 4];
        mass = 10;
        stripe = false;
        disable = true;

        constructor() {
            super();
        }
    }

    export class Pad2x2 extends Part {
        name = "Fighter pad";
        desc = "Allows fighters to land and repair.";
        hp = 10;
        cost = 36;
        image = "pad2x2.png";
        attach = true;
        size = [2, 2];
        mass = 30;
        tab = "armor";
        disable = true;

        constructor() {
            super();
        }
    }

    export class HArmor extends Part {
        name = "Heavyweight Armor";
        desc = "Adds HP but also adds a lot of weight, making a ship slower.";
        canShowDamage = true;
        paintable = true;
        tab = "armor1";

        constructor() {
            super();
        }
    }

    export class HArmor2x2 extends HArmor {
        hp = 64;
        cost = 8;
        image = "HArmor2x2.png";
        size = [2, 2];
        mass = 40;

        constructor() {
            super();
        }
    }

    export class HArmor1x2 extends HArmor {
        name = "Heavyweight Armor";
        hp = 32;
        cost = 4;
        image = "HArmor1x2.png";
        size = [1, 2];
        mass = 20;

        constructor() {
            super();
        }
    }

    export class HArmor1x1 extends HArmor {
        name = "Heavyweight Armor";
        hp = 16;
        cost = 2;
        image = "HArmor1x1.png";
        size = [1, 1];
        mass = 10;

        constructor() {
            super();
        }
    }

    export class HArmor2x1 extends HArmor {
        name = "Heavyweight Armor";
        hp = 32;
        cost = 4;
        image = "HArmor2x1.png";
        size = [2, 1];
        mass = 20;

        constructor() {
            super();
        }
    }

    export class HArmor1x1Angle extends HArmor {
        name = "Heavyweight Armor";
        hp = 8;
        cost = 1;
        image = "HArmor1x1Angle.png";
        size = [1, 1];
        mass = 5;

        constructor() {
            super();
        }
    }

    export class HArmor1x1AngleBack extends HArmor {
        name = "Heavyweight Armor";
        hp = 8;
        cost = 1;
        image = "HArmor1x1AngleBack.png";
        size = [1, 1];
        mass = 5;

        constructor() {
            super();
        }
    }

    export class HArmor2x2Angle extends HArmor {
        name = "Heavyweight Armor";
        hp = 64;
        cost = 8;
        image = "HArmor2x2Angle.png";
        size = [2, 2];
        mass = 40;

        constructor() {
            super();
        }
    }

    export class HArmor2x2AngleBack extends HArmor {
        name = "Heavyweight Armor";
        hp = 64;
        cost = 8;
        image = "HArmor2x2AngleBack.png";
        size = [2, 2];
        mass = 40;

        constructor() {
            super();
        }
    }

    export class HArmor2x2Front1 extends HArmor {
        hp = 56;
        mass = 35;
        cost = 7;
        image = "HArmor2x2Front1.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class HArmor2x2Front2 extends HArmor {
        hp = 48;
        mass = 30;
        cost = 6;
        image = "HArmor2x2Front2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class HArmor1x2Font1 extends HArmor {
        hp = 24;
        mass = 15;
        cost = 3;
        image = "HArmor1x2Font1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class HArmor1x2Front2 extends HArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "HArmor1x2Front2.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class HArmor2x2Back1 extends HArmor {
        hp = 56;
        mass = 35;
        cost = 7;
        image = "HArmor2x2Back1.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class HArmor2x2Back2 extends HArmor {
        hp = 48;
        mass = 30;
        cost = 6;
        image = "HArmor2x2Back2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class HArmor1x2Back1 extends HArmor {
        hp = 24;
        mass = 15;
        cost = 3;
        image = "HArmor1x2Back1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class HArmor1x2Back2 extends HArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "HArmor1x2Back2.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class HArmor2x2Curved extends HArmor {
        hp = 64;
        mass = 40;
        cost = 8;
        image = "HArmor2x2Curved.png";
        size = [2, 2];
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class HArmor2x1Curved extends HArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "HArmor2x1Curved.png";
        size = [2, 1];

        constructor() {
            super();
        }

    }

    export class HArmor1x2Curved extends HArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "HArmor1x2Curved.png";
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class ShadowArmor extends HArmor {
        dlc = "Curves and Shadows";
        northWest = true;
        canShowDamage = false;

        constructor() {
            super();
        }
    }

    export class ShadowNArmor2x2Angle extends ShadowArmor {
        hp = 64;
        mass = 40;
        cost = 8;
        image = "ShadowNArmor2x2Angle.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor2x2 extends ShadowArmor {
        hp = 64;
        mass = 40;
        cost = 8;
        image = "ShadowNArmor2x2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor2x1 extends ShadowArmor {
        hp = 32;
        mass = 20;
        cost = 4;
        image = "ShadowNArmor2x1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x1 extends ShadowArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "ShadowNArmor1x1.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x2 extends ShadowArmor {
        hp = 32;
        mass = 20;
        cost = 4;
        image = "ShadowNArmor1x2.png";
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor2x2Curve extends ShadowArmor {
        hp = 64;
        mass = 40;
        cost = 8;
        image = "ShadowNArmor2x2Curve.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x1Angle extends ShadowArmor {
        hp = 8;
        mass = 5;
        cost = 1;
        image = "ShadowNArmor1x1Angle.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x1Corner extends ShadowArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "ShadowNArmor1x1Corner.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x1CornerInner extends ShadowArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "ShadowNArmor1x1CornerInner.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor2x1Curved extends ShadowArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "ShadowNArmor2x1Curved.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x2Curved extends ShadowArmor {
        hp = 16;
        mass = 10;
        cost = 2;
        image = "ShadowNArmor1x2Curved.png";
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class ShadowNArmor1x2Font1 extends ShadowArmor {
        hp = 24;
        mass = 15;
        cost = 3;
        image = "ShadowNArmor1x2Font1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class UArmor extends Part {
        name = "Ultralight Armor";
        desc = "Minimizes weight and size, great for fighters, but is more expensive than other armors.";
        tab = "armor3";
        paintable = true;

        constructor() {
            super();
        }
    }

    export class UArmor1x1 extends UArmor {
        hp = 16;
        cost = 10;
        image = "UArmor1x1.png";
        size = [1, 1];
        mass = 1;

        constructor() {
            super();
        }
    }

    export class UArmor1x2 extends UArmor {


        hp = 32;
        cost = 20;
        image = "UArmor1x2.png";
        size = [1, 2];
        mass = 2;

        constructor() {
            super();
        }
    }

    export class UArmor2x1 extends UArmor {
        name = "Ultralight Armor";
        hp = 32;
        cost = 20;
        image = "UArmor2x1.png";
        size = [2, 1];
        mass = 2;

        constructor() {
            super();
        }
    }

    export class UArmor1x1Angle extends UArmor {
        name = "Ultralight Armor";
        hp = 8;
        cost = 5;
        image = "UArmor1x1Angle.png";
        size = [1, 1];
        mass = .5;

        constructor() {
            super();
        }
    }

    export class UArmor1x1AngleBack extends UArmor {
        hp = 8;
        cost = 5;
        image = "UArmor1x1AngleBack.png";
        size = [1, 1];
        mass = .5;

        constructor() {
            super();
        }
    }

    export class UArmor2x2 extends UArmor {
        hp = 64;
        cost = 40;
        image = "UArmor2x2.png";
        size = [2, 2];
        mass = 4;

        constructor() {
            super();
        }
    }

    export class UArmor1x2Notch1 extends UArmor {
        hp = 32;
        cost = 20;
        image = "UArmor1x2Notch1.png";
        size = [1, 2];
        mass = 2;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class UArmor1x2Notch2 extends UArmor {
        hp = 32;
        cost = 20;
        image = "UArmor1x2Notch2.png";
        size = [1, 2];
        mass = 2;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class UArmor1x1Notch1 extends UArmor {
        hp = 16;
        cost = 10;
        image = "UArmor1x1Notch1.png";
        size = [1, 1];
        mass = 1;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class UArmor1x1Notch2 extends UArmor {
        hp = 16;
        cost = 10;
        image = "UArmor1x1Notch2.png";
        size = [1, 1];
        mass = 1;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class UArmor1x1Spike extends UArmor {
        hp = 8;
        cost = 5;
        image = "UArmor1x1Spike.png";
        size = [1, 1];
        mass = .5;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class VArmor extends Part {
        name = "Volumetric Armor";
        desc = "Balanced in cost and weight, but takes up more space than other armours.";
        tab = "armor2";
        canShowDamage = true;
        paintable = true;

        constructor() {
            super();
        }
    }

    export class VArmor1x2SideBar extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x2SideBar.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x2SideBarFilled extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x2SideBarFilled.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x2IBeam extends VArmor {


        hp = 10;
        cost = 2;
        image = "VArmor1x2IBeam.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x2Corner4 extends VArmor {


        hp = 10;
        cost = 2;
        image = "VArmor1x2Corner4.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x2End extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x2End.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x1Corner1 extends VArmor {
        hp = 5;
        cost = 1;
        image = "VArmor1x1Corner1.png";
        size = [1, 1];
        mass = 1.3;

        constructor() {
            super();
        }
    }

    export class VArmor1x1Corner2 extends VArmor {
        hp = 5;
        cost = 1;
        image = "VArmor1x1Corner2.png";
        size = [1, 1];
        mass = 1.3;

        constructor() {
            super();
        }
    }

    export class VArmor1x1Corner3 extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x1Corner3.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x1Hook extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x1Hook.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x1CornerBack extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x1CornerBack.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor2x2 extends VArmor {
        hp = 20;
        cost = 4;
        image = "VArmor2x2.png";
        size = [2, 2];
        mass = 5.2;

        constructor() {
            super();
        }
    }

    export class VArmor1x2 extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x2.png";
        size = [1, 2];
        mass = 2.6;

        constructor() {
            super();
        }
    }

    export class VArmor1x1 extends VArmor {
        hp = 5;
        cost = 1;
        image = "VArmor1x1.png";
        size = [1, 1];
        mass = 1.3;

        constructor() {
            super();
        }
    }

    export class VArmor1x1Angle extends VArmor {
        hp = 5;
        cost = 1;
        image = "VArmor1x1Angle.png";
        size = [1, 1];
        mass = 1.3;

        constructor() {
            super();
        }
    }

    export class VArmor2x2Angle extends VArmor {
        hp = 20;
        cost = 4;
        image = "VArmor2x2Angle.png";
        size = [2, 2];
        mass = 5.2;

        constructor() {
            super();
        }
    }

    export class VArmor2x2Curve extends VArmor {
        hp = 20;
        cost = 4;
        image = "VArmor2x2Curve.png";
        size = [2, 2];
        mass = 5.2;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class VArmor1x1Curve extends VArmor {
        hp = 5;
        cost = 1;
        image = "VArmor1x1Curve.png";
        size = [1, 1];
        mass = 1.3;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class VArmor2x1Curved extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor2x1Curved.png";
        size = [2, 1];
        mass = 2.6;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class VArmor1x2Curved extends VArmor {
        hp = 10;
        cost = 2;
        image = "VArmor1x2Curved.png";
        size = [1, 2];
        mass = 2.6;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class VArmor2x2Curved extends VArmor {
        hp = 20;
        cost = 4;
        image = "VArmor2x2Curved.png";
        size = [2, 2];
        mass = 5.2;
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class VShadowArmor extends VArmor {
        name = "Volumetric Shadow Armor";
        dlc = "Curves and Shadows";
        northWest = true;
        canShowDamage = false;

        constructor() {
            super();
        }
    }

    export class VShadowNArmor2x2Angle extends VShadowArmor {
        hp = 20;
        mass = 5.2;
        cost = 4;
        image = "VShadowNArmor2x2Angle.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor2x2 extends VShadowArmor {
        hp = 20;
        mass = 5.2;
        cost = 4;
        image = "VShadowNArmor2x2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor2x1 extends VShadowArmor {
        hp = 10;
        mass = 2.6;
        cost = 2;
        image = "VShadowNArmor2x1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor1x1 extends VShadowArmor {
        hp = 5;
        mass = 1.3;
        cost = 1;
        image = "VShadowNArmor1x1.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor1x2 extends VShadowArmor {
        hp = 10;
        mass = 2.6;
        cost = 2;
        image = "VShadowNArmor1x2.png";
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor2x2Curve extends VShadowArmor {
        hp = 20;
        mass = 5.2;
        cost = 4;
        image = "VShadowNArmor2x2Curve.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor1x1Angle extends VShadowArmor {
        hp = 5;
        mass = 1.3;
        cost = 1;
        image = "VShadowNArmor1x1Angle.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor1x1Corner extends VShadowArmor {
        hp = 5;
        mass = 1.3;
        cost = 1;
        image = "VShadowNArmor1x1Corner.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class VShadowNArmor1x1CornerInner extends VShadowArmor {
        hp = 5;
        mass = 1.3;
        cost = 1;
        image = "VShadowNArmor1x1CornerInner.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class Reactor2x2 extends Part {
        name = "2x2 Reactor";
        desc = "Use this to power your ship. Reactors are heavy and expensive.";
        hp = 60;
        cost = 100;
        mass = 100;
        genEnergy = 62.5;
        storeEnergy = 8000;
        image = "Reactor2x2.png";
        attach = true;
        size = [2, 2];
        tab = "energy";

        constructor() {
            super();
        }
    }

    export class Reactor1x2 extends Reactor2x2 {
        name = "1x2 Reactor";
        hp = 30;
        cost = 50;
        mass = 50;
        genEnergy = 25;
        storeEnergy = 10000;
        image = "Reactor1x2.png";
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class Reactor2x1 extends Reactor2x2 {
        name = "2x1 Reactor";
        hp = 30;
        cost = 50;
        mass = 50;
        genEnergy = 25;
        storeEnergy = 10000;
        image = "Reactor2x1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class Reactor1x1 extends Reactor2x2 {
        name = "1x1 Reactor";
        hp = 15;
        cost = 25;
        mass = 10;
        genEnergy = 10;
        storeEnergy = 2000;
        image = "Reactor1x1.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class Solar1x1 extends Reactor2x2 {
        name = "1x1 Solar Panel";
        desc = "Use this to power your ship. Solar panels are light but don't generate much energy.";
        hp = 0;
        cost = 4;
        mass = 2.5;
        genEnergy = 3;
        storeEnergy = 0;
        flip = false;
        image = "solar1x1.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class Solar2x2 extends Solar1x1 {
        name = "2x2 Solar Panel";
        hp = 0;
        cost = 16;
        mass = 10;
        genEnergy = 12;
        storeEnergy = 0;
        flip = false;
        image = "solar2x2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class Solar3x3 extends Solar1x1 {
        name = "3x3 Solar Panel";
        hp = 0;
        cost = 36;
        mass = 22.5;
        genEnergy = 3 * 9;
        storeEnergy = 0;
        flip = false;
        image = "solar3x3.png";
        size = [3, 3];

        constructor() {
            super();
        }
    }

    export class EnergyTransfer extends Part {
        working: boolean;
        name = "Energy Transfer";
        desc = "Gives energy to units in 800m range. Gives 960e per ship.";
        hp = 0;
        cost = 30;
        mass = 40;
        image = "EnergyTransfer.png";
        attach = true;
        size = [2, 2];
        tab = "energy";
        range = 800;
        trasferEnergy = 60;

        constructor() {
            super();
        }

        init() {
            return this.unit.energyCaster = true;
        };

        shuffle(list: any[]) {
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
        };

        tick() {
            let amount, distance, giveTo, i, j, len, len1, ref, ref1, results, thing;
            if ((Sim.Instance.step + this.unit.id) % 16 === 0 && this.unit.energy > 100) {
                this.working = false;
                giveTo = [];
                ref = this.unit.closestFriends;
                for (i = 0, len = ref.length; i < len; i++) {
                    thing = ref[i];
                    if (thing.energy < thing.storeEnergy && thing.energy > -1) {
                        if (thing.energyCaster && thing.energy / thing.storeEnergy > this.unit.energy / this.unit.storeEnergy) {
                            continue;
                        }
                        distance = v2.distance(this.unit.pos, thing.pos);
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
        };

        draw() {
            let r;
            super.draw.call(this);
            if (this.working) {
                r = (this.range + 40) / 255;
                return baseAtlas.drawSprite("img/point02.png", this.unit.pos, [r, r], 0, [255, 255, 255, 10]);
            }
        };
    }

    export class StasisField extends Part {
        stasisPos: Float64Array;
        name = "Stasis Field";
        desc = "Slows and decloaks enemy ships.";
        hp = 10;
        cost = 10;
        mass = 6;
        image = "StasisField.png";
        attach = true;
        size = [2, 2];
        tab = "defence";
        range = 290;
        maxSlow = 2.5;
        slow = 2.5;
        working = false;

        constructor() {
            super();
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
                distance = CollisionUtils.closestDistance(other.getBoundPoints(), [this.stasisPos]);
                if (distance < this.range) {
                    other.jump = 0;
                    other.cloak = 0;
                    speed = v2.mag(other.vel);
                    if (speed > this.maxSlow) {
                        v2.scale(other.vel, 0.9, null);
                    }
                    this.working = true;
                    results.push(other.slowed = true);
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };

        draw() {
            let a, r;
            super.draw.call(this);
            if (this.working) {
                a = 100;
            } else {
                a = 25;
            }
            r = (this.range + 40) / 255;
            return baseAtlas.drawSprite("img/point02.png", [this.worldPos[0] + (Math.sin(this.unit.rot) * 100), this.worldPos[1] - (Math.cos(this.unit.rot) * 100)], [r, r], 0, [0, 0, 0, a]);
        };
    }

    export class SupercapitalBridge extends Part {
        name = "Supercapital Bridge";
        desc = "Extends a ships cost limit by $500.";
        hp = 100;
        cost = 100;
        mass = 500;
        image = "pad4x4.png";
        attach = true;
        size = [4, 4];
        tab = "defence";
        limitBonus = 500;
        hide = true;
        disable = true;

        constructor() {
            super();
        }
    }

    export class ShieldGen2x2 extends Part {
        name = "Heavy Shield Generator";
        desc = "A powerful shield generator that guzzles energy.";
        hp = 0;
        cost = 50;
        mass = 25;
        genShield = 1;
        useEnergy = 135;
        energyLine = .50;
        shield = 25;
        image = "Shield2x2.png";
        attach = true;
        size = [2, 2];
        tab = "defence";

        constructor() {
            super();
        }

        tick() {
            if (this.unit.energy > this.useEnergy && this.unit.energy > this.unit.storeEnergy * this.energyLine) {
                this.unit.energy -= this.useEnergy * Math.max(0, Math.min(1, (this.unit.maxShield - this.unit.shield) / this.genShield));
                return this.unit.shield += this.genShield;
            }
        };
    }

    export class ShieldGen2x1 extends ShieldGen2x2 {
        name = "Advanced Shield Generator";
        desc = "An efficient, light-weight shield generator.";
        hp = 0;
        cost = 30;
        mass = 2;
        genShield = .2;
        useEnergy = 18;
        energyLine = .75;
        shield = 15;
        image = "Shield2x1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class ShieldGen1x1 extends ShieldGen2x2 {


        name = "Shield Capacitor";
        desc = "Grants 15HP of shields and offers low regeneration.";
        hp = 0;
        cost = 15;
        mass = 8;
        genShield = 0.0625 * 1.5;
        useEnergy = 0.0625 * 3;
        energyLine = .99;
        shield = 15;
        image = "Shield1x1.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class CloakGenerator extends Part {
        name = "Cloak Generator";
        desc = "Cloaks 66T/second while stationary. Keeps 165T cloaked while moving.";
        cost = 25;
        mass = 10;
        hp = 5;
        image = "CloakGenerator.png";
        tab = "defence";
        attach = true;
        size = [2, 2];
        genCloak = 33 / 16;
        useEnergy = 400 / 16;

        constructor() {
            super();
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
        };
    }

    export class Battery extends Part {
        name = "Battery";
        desc = "Batteries store energy and come with a full charge to power your ship.";
        tab = "energy";
        paintable = true;

        constructor() {
            super();
        }
    }

    export class Battery1x2 extends Battery {
        hp = 10;
        cost = 20;
        mass = 20;
        storeEnergy = 16000;
        image = "Battery1x2.png";
        attach = true;
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class Battery1x1 extends Battery {


        name = "Battery";
        hp = 5;
        cost = 10;
        mass = 10;
        storeEnergy = 8000;
        image = "Battery1x1.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class Battery2x1 extends Battery {


        name = "Battery";
        hp = 10;
        cost = 20;
        mass = 20;
        storeEnergy = 16000;
        image = "Battery2x1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class Battery2x2 extends Battery {
        name = "Battery";
        hp = 20;
        cost = 40;
        mass = 40;
        storeEnergy = 32000;
        image = "Battery2x2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class Engine05 extends Engine {
        name = "Battleship Thruster";
        desc = "An ultra-heavy thruster to provide a minimum speed for the heaviest ships.";
        trailTime = 100;
        trailSize = .4;
        hp = 0;
        cost = 80;
        mass = 700;
        thrust = 1000;
        turnSpeed = 1;
        image = "engine05.png";
        size = [2, 2];
        useEnergy = 30;
        exhaust = true;
        attach = true;
        disable = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine09 extends Engine {
        name = "Large Bulk Thruster";
        desc = "Low energy thruster for high mass. Rated for 0-150 m/s ";
        trailTime = 100;
        trailSize = .2;
        hp = 0;
        cost = 47;
        mass = 135;
        thrust = 271;
        turnSpeed = 1;
        image = "engine09.png";
        size = [2, 2];
        useEnergy = 4;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine02 extends Engine {
        name = "Bulk Thruster";
        desc = "Low energy thruster for high mass. Rated for 0-125 m/s ";
        trailTime = 100;
        trailSize = .2;
        hp = 0;
        cost = 35;
        mass = 100;
        thrust = 200;
        turnSpeed = 1;
        image = "engine02.png";
        size = [1, 3];
        useEnergy = 3;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine01 extends Engine {
        name = "Cruiser Thruster";
        desc = "Efficient thruster for medium ships. Rated for 100-350 m/s";
        trailTime = 100;
        trailSize = .26;
        hp = 0;
        cost = 65;
        mass = 60;
        thrust = 270;
        turnSpeed = 1;
        image = "engine01.png";
        size = [1, 3];
        useEnergy = 13;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine08 extends Engine {
        name = "Compact Cruiser Thruster";
        desc = "Efficient thruster for medium ships. Rated for 100-350 m/s";
        trailTime = 100;
        trailSize = .26;
        hp = 0;
        cost = 44;
        mass = 40;
        thrust = 180;
        turnSpeed = 1;
        image = "engine08.png";
        size = [2, 1];
        useEnergy = 8;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine04 extends Engine {
        name = "Scout Thruster";
        desc = "The smallest thruster available. Rated for 100-400 m/s";
        trailTime = 1000;
        trailSize = .1;
        hp = 0;
        cost = 20;
        mass = 15;
        thrust = 85;
        turnSpeed = 1;
        image = "engine04.png";
        size = [1, 2];
        useEnergy = 9;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine043Long extends Engine04 {
        size = [2, 1];
        image = "engine04long.png";

        constructor() {
            super();
        }
    }

    export class Engine06 extends Engine {
        hp = 0;
        cost = 55;
        mass = 60;
        thrust = 157;
        turnSpeed = 3;
        image = "engine06.png";
        size = [2, 2];
        useEnergy = 25;
        exhaust = true;
        attach = true;
        hide = true;
        disable = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine03 extends Engine {
        name = "Fighter Thruster";
        desc = "A light thruster good for fast ships. Rated for 250+ m/s";
        trailTime = 1000;
        trailSize = .13;
        hp = 0;
        cost = 45;
        mass = 15;
        thrust = 135;
        turnSpeed = 1;
        image = "engine03.png";
        size = [1, 2];
        useEnergy = 12;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class Engine03Long extends Engine03 {
        size = [2, 1];
        image = "engine03long.png";

        constructor() {
            super();
        }
    }

    export class Engine07 extends Engine {
        name = "Interceptor Afterburner";
        desc = "A huge inefficient thruster. Burns a lot of energy to make ships move very fast. ";
        trailTime = 1000;
        hp = 0;
        cost = 145;
        mass = 80;
        thrust = 900;
        turnSpeed = 4;
        image = "engine07.png";
        size = [2, 2];
        trailSize = .22;
        useEnergy = 169;
        exhaust = true;
        attach = true;
        stripe = true;
        tab = "engines";

        constructor() {
            super();
        }
    }

    export class JumpEngine extends Engine {
        static useEnergy: number;
        name = "Jump Engine";
        desc = "Allows you to perform short jumps.";
        trailTime = 0;
        hp = 25;
        cost = 20;
        mass = 6;
        jumpCount = 1;
        rechargeRate = 160;
        thrust = 0;
        turnSpeed = 0;
        useEnergy = 15;
        exhaust = false;
        image = "engineJump.png";
        size = [2, 1];
        trailSize = 0;
        attach = true;
        stripe = true;
        tab = "engines";
        working: boolean;

        constructor() {
            super();
        }

        tick() {
            this.unit.jump += this.rechargeRate / this.unit.mass;
            this.working = this.unit.jump > this.unit.jumpDistance && this.unit.energy > this.unit.mass * this.useEnergy;
        };

        draw() {
            super.draw.call(this);
            if (this.working) {
                return baseAtlas.drawSprite("engineJumpPip.png", this.worldPos, [1, 1], this.unit.rot, null);
            }
        };
    }

    export class Wing extends Part {
        name = "Wing";
        desc = "Adds turn rate to your units, more wings make ships turn faster.";
        tab = "engines";
        stripe = true;
        attach = false;
        canShowDamage = true;

        constructor() {
            super();
        }
    }

    export class Wing2x2 extends Wing {
        hp = 16;
        cost = 32;
        mass = 8;
        turnSpeed = 30;
        image = "Wing2x2.png";
        size = [2, 2];

        constructor() {
            super();
        }
    }

    export class Wing1x2 extends Wing {
        hp = 8;
        cost = 16;
        mass = 4;
        turnSpeed = 15;
        image = "Wing1x2.png";
        size = [1, 2];

        constructor() {
            super();
        }
    }

    export class Wing2x1 extends Wing {
        hp = 6;
        cost = 12;
        mass = 3;
        turnSpeed = 11.25;
        image = "Wing2x1.png";
        size = [2, 1];

        constructor() {
            super();
        }
    }

    export class Wing1x1Angle extends Wing {
        hp = 4;
        cost = 8;
        mass = 2;
        turnSpeed = 7.5;
        image = "Wing1x1Angle.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class Wing1x1Round extends Wing {
        hp = 4;
        cost = 8;
        mass = 2;
        turnSpeed = 7.5;
        image = "Wing1x1Round.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class Wing1x1Notch extends Wing {
        hp = 0;
        cost = 4;
        mass = 0.1;
        turnSpeed = 3.15;
        image = "Wing1x1Notch.png";
        size = [1, 1];

        constructor() {
            super();
        }
    }

    export class PDTurret extends Turret {
        name = "Point Defence";
        desc = "Point defence laser. Counters missiles.";
        hp = 10;
        cost = 5;
        image = "turHex2.png";
        size = [2, 2];
        range = 400;
        reloadTime = 40;
        trackSpeed = 25;
        bulletCls = PDLaserBullet.name;
        shotEnergy = 1100;
        instant = true;
        mass = 10;
        bulletSpeed = 2000;
        damage = 20;
        maxLife = .5;
        hitsMissiles = true;

        constructor() {
            super();
        }
    }

    export class HeavyPDTurret extends Turret {
        name = "Heavy Point Defence Turret";
        desc = "Point defence turret. Hits multiple projectiles. Counters missiles.";
        hp = 10;
        cost = 5;
        image = "turHex1.png";
        size = [2, 2];
        reloadTime = 52;
        trackSpeed = 90;
        bulletCls = HeavyPDBullet.name;
        range = 405;
        shotEnergy = 250 * 16;
        mass = 30;
        bulletSpeed = 55;
        damage = 60;
        hitsMissiles = true;

        constructor() {
            super();
        }
    }

    export class RingTurret extends Turret {
        name = "Fusion Ring";
        desc = "Close ranged burst weapon.";
        hp = 10;
        cost = 5;
        image = "turRing.png";
        size = [2, 2];
        reloadTime = 80;
        trackSpeed = 90;
        bulletCls = RingBullet.name;
        range = 330;
        shotEnergy = 250 * 16;
        mass = 20;
        bulletSpeed = 35;
        damage = 100;
        spin = 0;

        constructor() {
            super();
        }

        draw() {
            if (this.working) {
                this.spin += .0010 * this.damage;
                this.image = "turRing.png";
            } else {
                this.spin += .0001 * this.damage;
                this.image = "turRingReload.png";
            }
            baseAtlas.drawSprite("parts/" + this.image, this.worldPos, [1, 1], this.spin, null);
        };
    }

    export class RamTurret extends Turret {
        name = "Kinetic Ram";
        desc = "Knocks a target back with speed depending on its mass.";
        hp = 10;
        cost = 5;
        image = "turWavePush.png";
        size = [2, 2];
        reloadTime = 96;
        trackSpeed = 90;
        bulletCls = RamBullet.constructor.name;
        range = 125;
        shotEnergy = 1200;
        mass = 10;
        bulletSpeed = 35;
        damage = 80;
        hide = true;
        disable = true;

        constructor() {
            super();
        }
    }

    export class MissileTurret extends Turret {
        name = "Missile Launcher";
        desc = "Launches tracking missiles that chase targets.";
        onlyInRange = true;
        hp = 10;
        cost = 5;
        image = "turMissile.png";
        size = [2, 2];
        reloadTime = 33;
        trackSpeed = 45;
        bulletCls = MissileBullet.name;
        range = 1000;
        shotEnergy = 100 * 30;
        mass = 30;
        bulletSpeed = 22;
        damage = 27;
        radius = 40;
        overshoot = 0.5;

        constructor() {
            super();
        }
    }

    export class ArtilleryTurret extends Turret {
        name = "Artillery Gun";
        desc = "Launches a slow moving shell that explodes at the targeted area.";
        onlyInRange = false;
        hp = 10;
        cost = 5;
        image = "turLong1.png";
        size = [2, 2];
        reloadTime = 89;
        trackSpeed = 25;
        bulletCls = ArtilleryBullet.name;
        exactRange = true;
        range = 1600;
        minRange = 500;
        shotEnergy = 4500;
        mass = 70;
        bulletSpeed = 7;
        damage = 120;
        aoe = 220;

        constructor() {
            super();
        }
    }

    export class SidewinderTurret extends Turret {
        name = "Sidewinder Missile";
        desc = "Sidewinder is a slow moving tracking missile.";
        onlyInRange = true;
        hp = 10;
        cost = 5;
        image = "turMine.png";
        size = [2, 2];
        reloadTime = 96;
        trackSpeed = 45;
        bulletCls = SidewinderBullet.name;
        range = 780;
        shotEnergy = 2000;
        mass = 10;
        bulletSpeed = 17;
        damage = 35;
        radius = 40;
        overshoot = 0.5;
        volley = 2;
        volleyDelay = 1;
        spread = [1, -1];
        ticks = 1;
        shots = 0;

        constructor() {
            super();
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
        };

        makeRealBullet(direction: number) {
            let particle;
            this.shots -= 1;
            particle = new SidewinderBullet();
            Sim.Instance.things[particle.id] = particle;
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
            v2.set(this.worldPos, particle.pos);
            v2.pointTo(particle.vel, this.rot);
            v2.scale(particle.vel, particle.speed, null);
            return particle.rot = this.rot;
        };

        makeBullet(distance: number) {
            this.unit.cloak = 0;
            this.shots = this.volley;
            return this.ticks = 0;
        };
    }

    export class PlasmaTurret extends Turret {
        name = "Plasma Turret";
        desc = "Fires powerful long range projectiles.";
        hp = 10;
        cost = 5;
        image = "turPlasma.png";
        size = [2, 2];
        reloadTime = 52;
        trackSpeed = 25;
        bulletCls = PlasmaBullet.name;
        range = 820;
        shotEnergy = 100 * 48;
        mass = 40;
        bulletSpeed = 20;
        damage = 53;

        constructor() {
            super();
        }
    }

    export class LightPlasmaTurret extends Turret {
        hide = true;
        disable = true;
        name = "Light Plasma Turret";
        desc = "Fires a moderate long range projectile.";
        hp = 10;
        cost = 5;
        image = "turPlasma.png";
        size = [2, 2];
        reloadTime = 64;
        trackSpeed = 25;
        bulletCls = LightPlasmaBullet.name;
        range = 950;
        shotEnergy = 1700;
        mass = 10;
        bulletSpeed = 22;
        damage = 26;

        constructor() {
            super();
        }
    }

    export class LightBeamTurret extends Turret {
        name = "Light Beam";
        desc = "Close range beam weapon.";
        hp = 10;
        cost = 5;
        image = "turBeam2.png";
        size = [2, 2];
        reloadTime = 7;
        trackSpeed = 25;
        bulletCls = LightBeam.name;
        range = 350;
        instant = true;
        shotEnergy = 80 * 7;
        mass = 5;
        bulletSpeed = 15;
        damage = 9;
        maxLife = 8;

        constructor() {
            super();
        }

    }

    export class HeavyBeamTurret extends Turret {
        name = "Heavy Beam";
        desc = "Mid range beam weapon.";
        hp = 10;
        cost = 5;
        image = "turBeam1.png";
        size = [2, 2];
        reloadTime = 40;
        trackSpeed = 25;
        bulletCls = HeavyBeam.name;
        shotEnergy = 5000;
        instant = true;
        range = 610;
        mass = 40;
        bulletSpeed = 2000;
        damage = 38;
        maxLife = .5;

        constructor() {
            super();
        }
    }

    export class FlackTurret extends Turret {
        name = "Heavy Flak";
        desc = "Anti-fighter weapon that explodes with AoE at the targeted area.";
        hp = 10;
        cost = 5;
        image = "turFlack.png";
        size = [2, 2];
        reloadTime = 32;
        trackSpeed = 25;
        bulletCls = FlackBullet.name;
        range = 460;
        mass = 30;
        shotEnergy = 100 * 32;
        exactRange = true;
        bulletSpeed = 27;
        damage = 35;
        aoe = 210;

        constructor() {
            super();
        }
    }

    export class SniperGun extends Turret {
        hide = true;
        disable = true;
        name = "Sniper Gun";
        desc = "Fires a sniper round with high DPS. Its only good at max range and requires massive banks. The sniper ship must not be moving, and it has 18% chance of firing in any one second.";
        hp = 10;
        cost = 5;
        image = "turSnipe1.png";
        size = [2, 2];
        reloadTime = 120;
        trackSpeed = 25;
        bulletCls = SniperLaser.name;
        shotEnergy = 100000;
        range = 1700;
        minRange = 300;
        mass = 80;
        bulletSpeed = 15;
        damage = 500;
        hitsMultiple = true;
        hitsCloak = true;

        constructor() {
            super();
        }

        fire() {
            if (this.unit.vel[0] === 0 && this.unit.vel[1] === 0 && Math.random() < .1) {
                return super.fire.call(this);
            }
        };
    }

    export class EMPGun extends Turret {
        name = "EMP Gun";
        desc = "Fires an EMP orb that drains energy from targets and deals low damage.";
        hp = 10;
        cost = 5;
        image = "turEMP.png";
        size = [2, 2];
        reloadTime = 61;
        trackSpeed = 25;
        bulletCls = EMPOrb.name;
        shotEnergy = 3600;
        range = 620;
        mass = 2;
        bulletSpeed = 36;
        damage = 24;
        energyDamage = 4200;

        constructor() {
            super();
        }
    }

    export class EMPGun2 extends Turret {
        name: string = "Orb Launcher";
        desc: string = "Deploys an orb that launches out after a second, at high speed.";
        hp: number = 10;
        cost: number = 5;
        image: string = "turFizzleGun.png";
        size = [2, 2];
        reloadTime = 64;
        trackSpeed: number = 25;
        bulletCls = EMPOrb2.name;
        shotEnergy: number = 2000;
        range: number = 1400;
        minRange: number = 450;
        mass: number = 20;
        bulletSpeed: number = 39;
        damage: number = 15;
        energyDamage: number = 0;
        disable: boolean = false;

        constructor() {
            super();
        }
    }

    export class BombGun extends Turret {
        name = "Phase Bomb Launcher";
        desc = "Fires a powerful mid-range but easy to dodge projectile.";
        hp = 10;
        cost = 5;
        image = "turBomb.png";
        size = [2, 2];
        reloadTime = 60;
        trackSpeed = 25;
        bulletCls = Bomb.name;
        shotEnergy = 3600;
        range = 650;
        mass = 20;
        bulletSpeed = 16;
        damage = 160;
        onlyInRange = true;
        exactRange = true;
        aoe = 100;

        constructor() {
            super();
        }
    }

    export class AutoTurret extends Turret {
        name = "Auto Cannon";
        desc = "Fires five bullets in rapid bursts.";
        hp = 10;
        cost = 5;
        image = "turAutoCannon.png";
        size = [2, 2];
        reloadTime = 53;
        trackSpeed = 25;
        bulletCls = AutoBullet.name;
        range = 560;
        shotEnergy = 355 * 5;
        mass = 10;
        bulletSpeed = 40;
        damage = 8 * 5;
        fired = 10;
        volley = 5;
        volleyDelay = 2;
        spread = [0, .1, -.1, .2, -.2];

        constructor() {
            super();
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
        };

        makeBullet(distance: number) {
            this.unit.cloak = 0;
            this.fired = 0;
        };

        makeRealBullet() {
            let particle;
            particle = new (<any> Bullets)[this.bulletCls]();
            Sim.Instance.things[particle.id] = particle;
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
            v2.set(this.worldPos, particle.pos);
            v2.pointTo(particle.vel, this.rot);
            v2.scale(particle.vel, particle.speed, null);
            return particle.rot = this.rot;
        };
    }

    export class Shotgun extends Turret {
        name = "Shotgun";
        desc = "Fires five bullets in rapid bursts.";
        hp = 10;
        cost = 5;
        image = "turAutoCannon.png";
        size = [2, 2];
        reloadTime = 96;
        trackSpeed = 25;
        bulletCls = AutoBullet.name;
        range = 450;
        shotEnergy = 355 * 5;
        mass = 15;
        bulletSpeed = 30;
        damage = 8 * 9;
        fired = 9;
        volley = 9;
        spread = [0, .25, -.25, .5, -.5, .75, -.75, 1, -1];
        hide = true;
        disable = true;

        constructor() {
            super();
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
        };

        makeBullet(distance: number) {
            this.unit.cloak = 0;
            return this.fired = 0;
        };

        makeRealBullet() {
            let particle;
            particle = new (<any> Bullets)[this.bulletCls]();
            Sim.Instance.things[particle.id] = particle;
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
            v2.set(this.worldPos, particle.pos);
            v2.pointTo(particle.vel, this.rot);
            v2.scale(particle.vel, particle.speed, null);
            return particle.rot = this.rot;
        };
    }

    export class MachineGun extends Turret {
        name = "Machine Gun";
        desc = "Fires fast bullets.";
        hp = 10;
        cost = 5;
        image = "turAutoCannon.png";
        size = [2, 2];
        reloadTime = 5;
        trackSpeed = 25;
        bulletCls = MachineBullet.name;
        range = 780;
        shotEnergy = 200;
        mass = 10;
        bulletSpeed = 100;
        damage = 4;
        hide = true;
        disable = true;

        constructor() {
            super();
        }

        makeBullet(distance: number) {
            this.rot += (Math.random() - 0.5) * 0.3;
            super.makeBullet.call(this);
        };
    }

    export class TeslaTurret extends Turret {
        name = "Tesla Turret";
        desc = "Fires lighting bolts that arc between units.";
        hp = 10;
        cost = 5;
        image = "turTesla.png";
        size = [2, 2];
        reloadTime = 10;
        trackSpeed = 25;
        bulletCls = TeslaBolt.name;
        range = 540;
        bounceRange = 540;
        shotEnergy = 1500;
        mass = 40;
        damage = 13;
        instant = true;
        bulletSpeed = 2000;
        maxLife = 1;
        maxZap = 10;
        zapped: number[];

        constructor() {
            super();
        }

        makeBullet(distance: number) {
            let i, id, len, ref, results, unit;
            this.unit.cloak = 0;
            this.zapped = [];
            this.zap(this.worldPos, this.target);
            ref = this.zapped;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
                id = ref[i];
                unit = Sim.Instance.things[id];
                results.push(unit.applyDamage(this.damage / this.zapped.length, this.unit));
            }
            return results;
        };

        zap(from: Float64Array, unit: Unit): null {
            let closestUnit, minD: number, particle, range;
            this.zapped.push(unit.id);
            particle = new (<any> Bullets)[this.bulletCls]();
            Sim.Instance.things[particle.id] = particle;
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
            } else {
                particle.sound = null;
            }
            particle.target = unit;
            v2.set(from, particle.pos);
            particle.targetPos = v2.create(particle.target.pos);
            if (this.zapped.length === this.maxZap) {
                return;
            }
            range = this.bounceRange;
            minD = range;
            closestUnit = null;
            Sim.Instance.unitSpaces[Sim.otherSide(this.unit.side)].findInRange(unit.pos, range + Sim.Instance.maxRadius[Sim.otherSide(this.unit.side)], (function (_this) {
                return function (other: Unit) {
                    let d, ref;
                    if (other.owner === _this.unit.owner) {
                        return false;
                    }
                    if (other.cloakFade === 0 && (ref = other.id, [].indexOf.call(_this.zapped, ref) < 0)) {
                        d = v2.distance(unit.pos, other.pos) - other.radius;
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
                Sim.Instance.bulletSpaces[Sim.otherSide(this.unit.side)].findInRange(unit.pos, range, (function (_this) {
                    return function (other: Unit) {
                        let d, ref;
                        if (other.owner === _this.unit.owner) {
                            return false;
                        }
                        if (ref = other.id, [].indexOf.call(_this.zapped, ref) < 0) {
                            d = v2.distance(unit.pos, other.pos) - other.radius;
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
        };
    }


    export class WavePullTurret extends Turret {
        name = "Gravity Pull Wave";
        desc = "Projects a gravity wave that pulls and damages as it passes through units.";
        hp = 10;
        cost = 5;
        image = "turWavePull.png";
        size = [2, 2];
        reloadTime = 64;
        trackSpeed = 90;
        bulletCls = WavePullArch.name;
        range = 850;
        shotEnergy = 1200;
        mass = 10;
        bulletSpeed = 35;
        damage = 4;
        multiHit = true;

        constructor() {
            super();
        }
    }

    export class WavePushTurret extends WavePullTurret {
        name = "Gravity Push Wave";
        desc = "Projects a gravity wave that pushes and damages as it passes through units.";
        image = "turWavePush.png";
        bulletCls = WavePushArch.name;
        range = 775;
        damage = 5;
        multiHit = true;

        constructor() {
            super();
        }
    }

    export class FlameTurret extends Turret {
        name = "Flamethrower";
        desc = "Fires a flame that lights units on fire that deals burn damage over time.";
        hp = 10;
        cost = 5;
        image = "turFlame.png";
        size = [2, 2];
        reloadTime = 8;
        trackSpeed = 90;
        bulletCls = FlameBullet.name;
        range = 350;
        shotEnergy = 400;
        mass = 15;
        bulletSpeed = 16;
        damage = 2;
        dealsBurnDamage = true;
        burnAmount = 12;
        disable = false;

        constructor() {
            super();
        }
    }

    export class AOEWarhead extends Part {
        name = "Explosive Warhead";
        desc = "Kamikaze warhead dealing damage within an area";
        hp = 0;
        cost = 5;
        mass = 8;
        image = "AOEWarhead.png";
        attach = true;
        size = [2, 2];
        aoe = 325;
        life = 16;
        damage = 20;
        tab = "defence";
        explodes = true;

        constructor() {
            super();
        }

        init() {
            return this.unit.warhead = true;
        };

        tick() {
            let i, len, other, ref, results;
            if (this.unit.warheadTest !== Sim.Instance.step && (this.unit.shapeDamage == null)) {
                this.unit.warheadTest = Sim.Instance.step;
                ref = this.unit.closestEnemies;
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                    other = ref[i];
                    if (other.owner === this.unit.owner) {
                        continue;
                    }
                    if (CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) <= 50) {
                        results.push(this.unit.hp = 0);
                    } else {
                        results.push(void 0);
                    }
                }
                return results;
            }
        };

        postDeath() {
            let exp;
            exp = new AoeExplosion();
            exp.side = this.unit.side;
            exp.owner = this.unit.owner;
            exp.z = 1000;
            exp.pos = v2.create(this.worldPos);
            exp.vel = new Float64Array([0, 0]);
            exp.rot = 0;
            exp.maxLife = this.life;
            exp.damage = this.damage;
            exp.aoe = this.aoe;
            exp.radius = 2;
            Sim.Instance.things[exp.id] = exp;
        };
    }

    export class EMPWarhead extends Part {
        name = "EMP Warhead";
        desc = "Kamikaze EMP blast draining energy within an area";
        hp = 0;
        cost = 10;
        mass = 5;
        image = "empField.png";
        attach = true;
        size = [2, 2];
        aoe = 360;
        life = 16;
        energyDamage = 4000;
        tab = "defence";
        explodes = true;

        constructor() {
            super();
        }

        init() {
            return this.unit.warhead = true;
        };

        tick() {
            let i, len, other, ref, results;
            if (this.unit.warheadTest !== Sim.Instance.step && (this.unit.shapeDamage == null)) {
                this.unit.warheadTest = Sim.Instance.step;
                ref = this.unit.closestEnemies;
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                    other = ref[i];
                    if (other.owner === this.unit.owner) {
                        continue;
                    }
                    if (CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) <= 50) {
                        results.push(this.unit.hp = 0);
                    } else {
                        results.push(void 0);
                    }
                }
                return results;
            }
        };

        postDeath() {
            let exp;
            exp = new AoeExplosion();
            exp.side = this.unit.side;
            exp.image = "zaphit" + "1.png";//(chooseInt(1, 3)) + ".png";
            exp.z = 1000;
            exp.pos = v2.create(this.worldPos);
            exp.vel = new Float64Array([0, 0]);
            exp.rot = (Math.random() - 0.5) * 100;
            exp.maxLife = this.life;
            exp.energyDamage = this.energyDamage;
            exp.aoe = this.aoe;
            exp.radius = 8;
            Sim.Instance.things[exp.id] = exp;
        };
    }

    export class FlameWarhead extends Part {
        hide = true;
        disable = true;
        name = "Flame Warhead";
        desc = "Kamikaze flame blast applying burn damage within an area";
        hp = 0;
        cost = 5;
        mass = 5;
        image = "decals/Symbol15.png";
        attach = true;
        size = [2, 2];
        aoe = 250;
        life = 25;
        damage = 5;
        burnAmount = 10;
        tab = "defence";
        explodes = true;

        constructor() {
            super();
        }

        init() {
            return this.unit.warhead = true;
        };

        tick() {
            let i, len, other, ref, results;
            if (this.unit.warheadTest !== Sim.Instance.step && (this.unit.shapeDamage == null)) {
                this.unit.warheadTest = Sim.Instance.step;
                ref = this.unit.closestEnemies;
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                    other = ref[i];
                    if (other.owner === this.unit.owner) {
                        continue;
                    }
                    if (CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) <= 50) {
                        results.push(this.unit.hp = 0);
                    } else {
                        results.push(void 0);
                    }
                }
                return results;
            }
        };

        postDeath() {
            let exp;
            exp = new AoeExplosion();
            exp.side = this.unit.side;
            exp.owner = this.unit.owner;
            exp.image = "fireFlame";// + (chooseInt(1, 4)) + ".png";
            exp.z = 1000;
            exp.pos = v2.create(this.worldPos);
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
            Sim.Instance.things[exp.id] = exp;
        };
    }

    export class ShapedWarhead extends Part {
        name = "Shaped Warhead";
        desc = "Explodes on impact dealing instant damage";
        hp = 25;
        cost = 5;
        mass = 20;
        image = "ShapedWarhead.png";
        attach = true;
        size = [2, 2];
        aoe = 0;
        damage = 50;
        doesShapedDamage = true;
        explodes = true;
        tab = "defence";

        constructor() {
            super();
        }

        init() {
            let i, len, part, ref;
            this.unit.warhead = true;
            if (this.unit.shapeDamage == null) {
                this.unit.shapeDamage = 0;
                ref = this.unit.parts;

                let results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                    part = ref[i];
                    if (part.doesShapedDamage) {
                        results.push(this.unit.shapeDamage += this.damage);
                    } else {
                        results.push(void 0);
                    }
                }
                return results;
            }
        };

        tick() {
            let i, len, other, ref;
            if (this.unit.warheadTest !== Sim.Instance.step) {
                this.unit.warheadTest = Sim.Instance.step;
                ref = this.unit.closestEnemies;
                for (i = 0, len = ref.length; i < len; i++) {
                    other = ref[i];
                    if (other.owner === this.unit.owner) {
                        continue;
                    }
                    if ((other.maxHP + other.maxShield) * 2 < this.unit.shapeDamage) {
                        continue;
                    }
                    if (CollisionUtils.closestDistance(this.unit.getBoundPoints(), other.getBoundPoints()) > 0) {
                        continue;
                    }
                    this.unit.hp = 0;
                    other.applyDamage(this.unit.shapeDamage, this.unit);
                }
            }
        }
    }

    export class ModPart extends Part {
        adjacent = true;
        attach = true;
        size = [2, 2];
        weaponRange = 0;
        weaponRangeFlat = 0;
        weaponDamage = 0;
        weaponSpeed = 0;
        weaponReload = 0;
        weaponEnergy = 0;
        stripe = true;
        tab = "weapons";

        constructor() {
            super();
            this.effected_weapons.bind(this);
        }

        effected_weapons() {
            let effected, i, len, ref, w;
            effected = [];
            ref = this.unit.weapons;
            for (i = 0, len = ref.length; i < len; i++) {
                w = ref[i];
                if (v2.distance(w.pos, this.pos) < 45) {
                    effected.push(w);
                }
            }
            return effected;
        };

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
        };
    }

    export class TargetingMod extends ModPart {
        name = "Targeting Subsystem";
        desc = "Increaces range of adjacent weapons at cost of reload rate. -15% effect for each supported weapon.";
        hp = 10;
        cost = 20;
        mass = 30;
        image = "TargetingMod.png";
        weaponRange = 25;
        weaponReload = 30;

        constructor() {
            super();
        }
    }

    export class DamageMod extends ModPart {
        name = "Overcharger";
        desc = "Increases damage of adjacent weapons at cost of reload rate. -15% effect for each supported weapon";
        cost = 10;
        mass = 10;
        image = "DamageMod.png";
        weaponDamage = 30;
        weaponReload = 15;

        constructor() {
            super();
        }
    }

    export class ReloaderMod extends ModPart {
        name = "Reloader";
        desc = "Decreases reload time of adjacent weapons. -15% effect for each supported weapon";
        cost = 20;
        mass = 10;
        image = "ReloaderMod.png";
        weaponReload = -33;

        constructor() {
            super();
        }
    }

    export class BulletSpeedMod extends ModPart {
        name = "Speed Coils";
        desc = "Adds flat range and flat % bullet speed to adjacent weapons at cost of reload rate. -15% effect for each supported weapon.";
        cost = 5;
        mass = 1;
        hp = 5;
        image = "BulletSpeedMod.png";
        weaponSpeed = 50;
        weaponReload = 15;
        weaponRangeFlat = 50;

        constructor() {
            super();
        }
    }

    export class DampenerMod extends ModPart {
        name = "Dampener";
        desc = "Decreases energy usage of adjacent weapons at the cost of bullet speed. -15% effect for each supported weapon.";
        cost = 5;
        mass = 5;
        hp = 10;
        image = "dampener.png";
        weaponSpeed = -8;
        weaponEnergy = -25;

        constructor() {
            super();
        }
    }

    export class AiPart extends Part {
        hp = 0;
        hide = true;
        name = "Missile Only AI";
        desc = "Makes the adjacent turrets shoot only at missiles if close to missile ships. (does not work yet)";
        cost = 5;
        image = "ai01.png";
        attach = true;
        adjacent = true;
        size = [1, 1];
        mass = 1;
        stripe = true;
        tab = "weapons";

        constructor() {
            super();
        }
    }

    export class Ai1 extends AiPart {
        hp = 0;
        hide = true;
        name = "Missile Only AI";
        desc = "Makes the adjacent turrets shoot only at missiles if close to missile ships. (does not work yet)";
        cost = 5;
        image = "ai01.png";
        attach = true;
        adjacent = true;
        size = [1, 1];
        mass = 1;
        stripe = true;
        tab = "weapons";
        disable = true;

        constructor() {
            super();
        }
    }

    export class OverKillAi extends AiPart {
        hide = false;
        name = "No Overkill";
        desc = "Makes the adjacent turrets not shoot if it would kill an enemy twice in one shot.";
        cost = 1;
        hp = 4;
        image = "OverKillAi.png";
        attach = true;
        adjacent = true;
        size = [1, 1];
        mass = 1;

        constructor() {
            super();
            this.effected_weapons.bind(this);
        }

        effected_weapons() {
            let effected, i, len, ref, w;
            effected = [];
            ref = this.unit.weapons;
            for (i = 0, len = ref.length; i < len; i++) {
                w = ref[i];
                if (v2.distance(w.pos, this.pos) < 45) {
                    effected.push(w);
                }
            }
            return effected;
        };

        init() {
            let i, len, results, w, ws;
            ws = this.effected_weapons();
            results = [];
            for (i = 0, len = ws.length; i < len; i++) {
                w = ws[i];
                results.push(w.noOverkill = true);
            }
            return results;
        };
    }

    export class Ai3 extends AiPart {
        name = "Accurate AI";
        desc = "Makes the adjacent turrets shoot only at targets is sure really to hit. (does not work yet)";
        cost = 50;
        image = "ai09.png";
        attach = true;
        adjacent = true;
        size = [1, 1];
        mass = 10;
        disable = true;

        constructor() {
            super();
        }
    }

    export class Ai4 extends AiPart {
        name = "AOE AI";
        desc = "Makes the adjacent turrets shoot in the middle of groups trying to hit it with AOE damage. (does not work yet)";
        cost = 50;
        image = "ai03.png";
        attach = true;
        adjacent = true;
        size = [1, 1];
        mass = 10;
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal1 extends Part {
        name = "Insignia";
        desc = "Place this on your ship to show off your affiliation.";
        hp = 0;
        decal = true;
        cost = 0;
        image = "decals/Symbol1.png";
        size = [2, 2];
        mass = 0;
        tab = "decal";
        dlc = "Paint Job";
        opacity = 1;

        constructor() {
            super();
        }
    }

    export class SymbolDecal2 extends SymbolDecal1 {
        image = "decals/Symbol2.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal3 extends SymbolDecal1 {
        image = "decals/Symbol3.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal4 extends SymbolDecal1 {
        image = "decals/Symbol4.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal5 extends SymbolDecal1 {
        image = "decals/Symbol5.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal6 extends SymbolDecal1 {
        image = "decals/Symbol6.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal7 extends SymbolDecal1 {
        image = "decals/Symbol7.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal8 extends SymbolDecal1 {
        image = "decals/Symbol8.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal9 extends SymbolDecal1 {
        image = "decals/Symbol9.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal10 extends SymbolDecal1 {
        image = "decals/Symbol10.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal11 extends SymbolDecal1 {
        image = "decals/Symbol11.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal12 extends SymbolDecal1 {
        image = "decals/Symbol12.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal13 extends SymbolDecal1 {
        image = "decals/Symbol13.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal14 extends SymbolDecal1 {
        image = "decals/Symbol14.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal15 extends SymbolDecal1 {
        image = "decals/Symbol15.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal16 extends SymbolDecal1 {
        image = "decals/Symbol16.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal17 extends SymbolDecal1 {
        image = "decals/Symbol17.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal18 extends SymbolDecal1 {
        image = "decals/Symbol18.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal19 extends SymbolDecal1 {
        image = "decals/Symbol19.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal20 extends SymbolDecal1 {
        image = "decals/Symbol20.png";

        constructor() {
            super();
        }

    }

    export class SymbolDecal21 extends SymbolDecal1 {
        image = "decals/Symbol21.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal22 extends SymbolDecal1 {
        image = "decals/Symbol22.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal23 extends SymbolDecal1 {
        image = "decals/Symbol23.png";

        constructor() {
            super();
        }

    }

    export class SymbolDecal24 extends SymbolDecal1 {
        image = "decals/Symbol24.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal25 extends SymbolDecal1 {
        image = "decals/Symbol25.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal26 extends SymbolDecal1 {
        image = "decals/Symbol26.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal27 extends SymbolDecal1 {
        image = "decals/Symbol27.png";

        constructor() {
            super();
        }
    }

    export class SymbolDecal28 extends SymbolDecal1 {
        image = "decals/Symbol28.png";

        constructor() {
            super();
        }
    }


    export class SymbolDecal29 extends SymbolDecal1 {
        image = "decals/Symbol29.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal30 extends SymbolDecal1 {
        image = "decals/Symbol30.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal31 extends SymbolDecal1 {
        image = "decals/Symbol31.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal32 extends SymbolDecal1 {
        image = "decals/Symbol32.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal33 extends SymbolDecal1 {
        image = "decals/Symbol33.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal34 extends SymbolDecal1 {
        image = "decals/Symbol34.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal35 extends SymbolDecal1 {
        image = "decals/Symbol35.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal36 extends SymbolDecal1 {
        image = "decals/Symbol36.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class SymbolDecal37 extends SymbolDecal1 {
        image = "decals/Symbol37.png";
        disable = true;

        constructor() {
            super();
        }

    }

    export class SymbolDecal38 extends SymbolDecal1 {
        image = "decals/Symbol38.png";
        disable = true;

        constructor() {
            super();
        }

    }

    export class SymbolDecal39 extends SymbolDecal1 {
        image = "decals/Symbol39.png";
        disable = true;

        constructor() {
            super();
        }

    }

    export class SymbolDecal40 extends SymbolDecal1 {
        image = "decals/Symbol40.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class Stripe1x1 extends SymbolDecal1 {
        name = "Stripe";
        desc = "Stripes make your ships cool.";
        size = [1, 1];
        image = "decals/Stripe1x1.png";
        tab = "stripes";
        opacity = 1;

        constructor() {
            super();
        }
    }

    export class Stripe1x1Corner extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Corner.png";

        constructor() {
            super();
        }
    }

    export class Stripe1x2 extends Stripe1x1 {
        size = [1, 2];
        image = "decals/Stripe1x2.png";

        constructor() {
            super();
        }
    }

    export class Stripe2x1 extends Stripe1x1 {
        size = [2, 1];
        image = "decals/Stripe2x1.png";

        constructor() {
            super();
        }
    }

    export class Stripe2x2 extends Stripe1x1 {


        size = [2, 2];
        image = "decals/Stripe2x2.png";

        constructor() {
            super();
        }
    }

    export class Stripe2x2Corner extends Stripe1x1 {


        size = [2, 2];
        image = "decals/Stripe2x2Corner.png";

        constructor() {
            super();
        }
    }

    export class Stripe2x2Round extends Stripe1x1 {
        size = [2, 2];
        image = "decals/Stripe2x2Round.png";

        constructor() {
            super();
        }
    }

    export class StripeDouble2x1 extends Stripe1x1 {
        size = [2, 1];
        image = "decals/StripeDouble2x1.png";

        constructor() {
            super();
        }
    }

    export class StripeDouble2x2 extends Stripe1x1 {
        size = [2, 2];
        image = "decals/StripeDouble2x2.png";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Slash extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Slash.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1SlashInside extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1SlashInside.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe2x2Slash extends Stripe1x1 {
        size = [2, 2];
        image = "decals/Stripe2x2Slash.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe2x2End extends Stripe1x1 {
        size = [2, 2];
        image = "decals/Stripe2x2End.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Fill1 extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Fill1.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Fill2 extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Fill2.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Fill3 extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Fill3.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Fill4 extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Fill4.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Fill5 extends Stripe1x1 {


        size = [1, 1];
        image = "decals/Stripe1x1Fill5.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class Stripe1x1Fill6 extends Stripe1x1 {
        size = [1, 1];
        image = "decals/Stripe1x1Fill6.png";
        dlc = "Curves and Shadows";

        constructor() {
            super();
        }
    }

    export class LetterA extends SymbolDecal1 {
        name = "Lettering";
        desc = "Mark your ships.";
        image = "decals/letterA.png";
        tab = "letters";
        flip = false;
        opacity = 1;

        constructor() {
            super();
        }
    }

    export class LetterB extends LetterA {
        image = "decals/letterB.png";

        constructor() {
            super();
        }
    }

    export class LetterC extends LetterA {
        image = "decals/letterC.png";

        constructor() {
            super();
        }
    }

    export class LetterD extends LetterA {
        image = "decals/letterD.png";

        constructor() {
            super();
        }
    }

    export class LetterE extends LetterA {
        image = "decals/letterE.png";

        constructor() {
            super();
        }
    }

    export class LetterF extends LetterA {
        image = "decals/letterF.png";

        constructor() {
            super();
        }
    }

    export class LetterG extends LetterA {
        image = "decals/letterG.png";

        constructor() {
            super();
        }
    }

    export class LetterH extends LetterA {
        image = "decals/letterH.png";

        constructor() {
            super();
        }
    }

    export class LetterI extends LetterA {
        image = "decals/letterI.png";

        constructor() {
            super();
        }
    }

    export class LetterJ extends LetterA {
        image = "decals/letterJ.png";

        constructor() {
            super();
        }
    }

    export class LetterK extends LetterA {
        image = "decals/letterK.png";

        constructor() {
            super();
        }
    }

    export class LetterL extends LetterA {
        image = "decals/letterL.png";

        constructor() {
            super();
        }
    }

    export class LetterM extends LetterA {
        image = "decals/letterM.png";

        constructor() {
            super();
        }
    }

    export class LetterN extends LetterA {
        image = "decals/letterN.png";

        constructor() {
            super();
        }
    }

    export class LetterO extends LetterA {
        image = "decals/letterO.png";

        constructor() {
            super();
        }
    }

    export class LetterP extends LetterA {
        image = "decals/letterP.png";

        constructor() {
            super();
        }
    }

    export class LetterQ extends LetterA {
        image = "decals/letterQ.png";

        constructor() {
            super();
        }
    }

    export class LetterR extends LetterA {
        image = "decals/letterR.png";

        constructor() {
            super();
        }
    }

    export class LetterS extends LetterA {


        image = "decals/letterS.png";

        constructor() {
            super();
        }
    }

    export class LetterT extends LetterA {
        image = "decals/letterT.png";

        constructor() {
            super();
        }
    }

    export class LetterU extends LetterA {
        image = "decals/letterU.png";

        constructor() {
            super();
        }
    }

    export class LetterV extends LetterA {
        image = "decals/letterV.png";

        constructor() {
            super();
        }
    }

    export class LetterW extends LetterA {
        image = "decals/letterW.png";

        constructor() {
            super();
        }
    }

    export class LetterX extends LetterA {
        image = "decals/letterX.png";

        constructor() {
            super();
        }
    }

    export class LetterY extends LetterA {
        image = "decals/letterY.png";

        constructor() {
            super();
        }
    }

    export class LetterZ extends LetterA {
        image = "decals/letterZ.png";

        constructor() {
            super();
        }
    }

    export class LetterPound extends LetterA {


        image = "decals/letterPound.png";

        constructor() {
            super();
        }
    }

    export class LetterDot extends LetterA {


        image = "decals/letterDot.png";

        constructor() {
            super();
        }
    }

    export class Letter0 extends LetterA {
        image = "decals/letter0.png";

        constructor() {
            super();
        }
    }

    export class Letter1 extends LetterA {
        image = "decals/letter1.png";

        constructor() {
            super();
        }
    }

    export class Letter2 extends LetterA {
        image = "decals/letter2.png";

        constructor() {
            super();
        }
    }

    export class Letter3 extends LetterA {
        image = "decals/letter3.png";

        constructor() {
            super();
        }
    }

    export class Letter4 extends LetterA {
        image = "decals/letter4.png";

        constructor() {
            super();
        }
    }

    export class Letter5 extends LetterA {
        image = "decals/letter5.png";

        constructor() {
            super();
        }
    }

    export class Letter6 extends LetterA {
        image = "decals/letter6.png";

        constructor() {
            super();
        }
    }

    export class Letter7 extends LetterA {
        image = "decals/letter7.png";

        constructor() {
            super();
        }
    }

    export class Letter8 extends LetterA {
        image = "decals/letter8.png";

        constructor() {
            super();
        }
    }

    export class Letter9 extends LetterA {
        image = "decals/letter9.png";

        constructor() {
            super();
        }

    }

    export class Faction extends Part {
        name = "Faction Insignia";
        desc = "Place this in your ship to show off your faction affiliation.";
        hp = 4;
        cost = 1;
        size = [2, 2];
        mass = 1;
        tab = "decal";
        opacity = 1;
        faction = "DEV";
        image = "factions/DEV.png";
        disable = true;

        constructor() {
            super();
        }
    }

    export class Faction1 extends Faction {
        faction = "DEV";
        image = "factions/DEV.png";

        constructor() {
            super();
        }
    }

    export class Faction2 extends Faction {
        faction = "MOD";
        image = "factions/MOD.png";

        constructor() {
            super();
        }
    }

    export class Faction3 extends Faction {
        faction = "KC";
        image = "factions/KC.png";

        constructor() {
            super();
        }
    }

    export class Faction4 extends Faction {
        faction = "AUTO";
        image = "factions/AUTO.png";

        constructor() {
            super();
        }
    }

    export class Faction5 extends Faction {
        faction = "SIEG";
        image = "factions/SIEG.png";

        constructor() {
            super();
        }
    }

    export class Faction6 extends Faction {


        faction = "ISOI";
        image = "factions/ISOI.png";

        constructor() {
            super();
        }
    }

    export class Faction7 extends Faction {
        faction = "TKKA";
        image = "factions/TKKA.png";

        constructor() {
            super();
        }
    }

    export class BattleCannon extends Turret {
        name = "Battle Cannon";
        desc = "Glory to PDables!";
        cost = 5;
        mass = 50;
        hp = 10;
        image = "turBattleCannon.png";
        damage = 29 * 2;
        reloadTime = 80;
        shotEnergy = 3360;
        bulletSpeed = 21;
        size = [2, 2];
        range = 900;
        volley = 2;
        fired = 2;
        spread = [.01, -.01];
        disable = true;
        bulletCls = BattleCannonBullet.name;

        constructor() {
            super();
        }

        makeBullet(distance: number) {
            this.unit.cloak = 0;
            this.makeRealBullet(this.spread[0] + this.rot, 0);
            return this.makeRealBullet(this.spread[1] + this.rot, 1);
        };

        makeRealBullet(spread: number, pos: number) {
            let particle, tempPos;
            particle = new (<any> Bullets)[this.bulletCls]();
            Sim.Instance.things[particle.id] = particle;
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
            tempPos = v2.create(this.worldPos);
            if (pos === 0) {
                tempPos[0] = 6 * Math.cos(spread) - 6 * Math.sin(spread) + tempPos[0];
                tempPos[1] = 6 * Math.cos(spread) + 6 * Math.sin(spread) + tempPos[1];
            } else {
                tempPos[0] = -6 * Math.cos(spread) + 6 * Math.sin(spread) + tempPos[0];
                tempPos[1] = -8 * Math.cos(spread) - 8 * Math.sin(spread) + tempPos[1];
            }
            v2.set(tempPos, particle.pos);
            v2.pointTo(particle.vel, spread);
            v2.scale(particle.vel, particle.speed, null);
            return particle.rot = spread;
        };
    }

    export class Flag {
        image = "parts/decals/Symbol12.png";
        color = [245, 171, 53, 255];
        size = [5, 5];
        range = 100;
        stopFriction = .8;
        slow = .85;

        constructor() {
        }
    }

    export class NeedleGun extends Turret {
        name = "Needle Gun";
        desc = "It shoots needles, what else do you expect?";
        cost = 5;
        mass = 15;
        hp = 10;
        image = "turNeedleGun.png";
        damage = 4;
        reloadTime = 5.12;
        shotEnergy = 380;
        bulletSpeed = 34;
        size = [2, 2];
        range = 700;
        fired = 1;
        bulletCls = NeedleGunBullet.name;
        disable = true;

        constructor() {
            super();
        }

        makeBullet() {
            let particle;
            this.unit.cloak = 0;
            particle = new NeedleGunBullet();
            Sim.Instance.things[particle.id] = particle;
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
            v2.set(this.worldPos, particle.pos);
            v2.pointTo(particle.vel, this.rot + Math.random() * .14 - .07);
            v2.scale(particle.vel, particle.speed, null);
            particle.rot = v2.angle(particle.vel);
            return particle.maxLife = Math.floor(this.range / particle.speed * (1 + this.overshoot));
        };
    }

    export class ModProjector extends Turret {
        static range: number;
        name = "Mod Effect Projector";
        desc = "Projects mod effects to nearby ships. -15% effect on each armed ship. -40% effect overall";
        hp = 10;
        cost = 30;
        mass = 60;
        image = "focus.png";
        size = [2, 2];
        tab = "weapons";
        range = 500;
        reductionRatio = .2;
        splitRatio = .95;
        useEnergy = 50 / 16;
        projector: boolean = true;
        disable: boolean = true;
        shotEnergy = 10;
        instant: boolean = true;
        bulletCls = LaserBullet.name;
        gimble: boolean = false;
        arc = 360;
        weaponRange = 1;
        weaponRangeFlat = 0;
        weaponDamage = 1;
        weaponSpeed = 0;
        weaponReload = 1;
        weaponEnergy = 1;
        noOverkill: boolean = false;

        constructor() {
            super();
        }

        init(): void {
            this.weaponRange = 1;
            this.weaponRangeFlat = 0;
            this.weaponDamage = 1;
            this.weaponEnergyDamage = 1;
            this.weaponSpeed = 1;
            this.weaponReload = 1;
            this.weaponEnergy = 1;
            this.noOverkill = false;
        };

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
                    distance = v2.distance(this.unit.pos, thing.pos);
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
        };

        applyBuffs() {
            this.unit.projector.weaponRange *= UnitUtils.applyEffect(this.weaponRange, this.reductionRatio);
            this.unit.projector.weaponRangeFlat += this.weaponRangeFlat * this.reductionRatio;
            this.unit.projector.weaponDamage *= UnitUtils.applyEffect(this.weaponDamage, this.reductionRatio);
            this.unit.projector.weaponEnergyDamage *= UnitUtils.applyEffect(this.weaponEnergyDamage, this.reductionRatio);
            this.unit.projector.weaponSpeed += this.weaponSpeed * this.reductionRatio;
            this.unit.projector.weaponReload *= UnitUtils.applyEffect(this.weaponReload, this.reductionRatio);
            this.unit.projector.weaponEnergy *= UnitUtils.applyEffect(this.weaponEnergy, this.reductionRatio);
            this.unit.projector.noOverkill = this.noOverkill || this.unit.projector.noOverkill;
        };

        applyAdditionalBuffs(buffs: any) {

        };

        preDraw() {
            if (this.working) {
                let r = (this.range + 40) / 255;
                return baseAtlas.drawSprite("img/point02.png", this.unit.pos, [r, r], 0, [255, 128, 128, 30]);
            }
        };

        draw() {
            return this.draw.call(this);
        };
    }
}

import {UnitUtils} from "./95unitutils";
import {v2} from "./4src_maths";
import {baseAtlas, intp} from "./0dummy";
import {CollisionUtils} from "./991src_collision";
import {Sim} from "./6src_sim";
import {Unit} from "./95src_unit";