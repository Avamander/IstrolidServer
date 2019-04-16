export class prot {
    static readonly commonWords: string[] = [
        "1v1",
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

    /*
        afk
        waiting
        */
}