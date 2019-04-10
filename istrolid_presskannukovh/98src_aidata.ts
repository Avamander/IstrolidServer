ais.all = {};
ais.all.AlphaStriker = [{
    "parts": [{"pos": [20, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-50, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [40, 0], "type": "DamageMod", "dir": 0}, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-40, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [50, -50], "type": "Engine01", "dir": 0}, {
        "pos": [-20, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-10, -100],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [10, -100], "type": "VArmor1x1CornerBack", "dir": 0}, {"pos": [0, 0], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [
        ["When #% of energy, @chargeTypes", 25, "Find recharger"],
        ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "More HP", 100, 400],
        ["Avoid over #damage shots", 20],
        ["Stayaway in #m range from slot # units", 100, 1],
        ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Less Brawling Value", "More HP", 2000],
        ["Stay in #m range of friendly units", 500],
        ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More HP", 50, 1000],
        ["@capTypes Command Points within #m", "Capture", 10000],
        ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Battleship", 3],
        ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Cruiser", 3],
        ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Carrier", 3],
        ["Try to field # every # seconds", 1, 30],
        ["Field # at start", 2],
        ["Try to field # every # seconds", 1, 60],
        ["Try to field # every # seconds", 1, 80]
    ]
}, {
    "parts": [{"pos": [30, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [20, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount30", "dir": 0}, {
        "pos": [20, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {"pos": [60, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-60, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-50, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-70, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, 30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 80],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-20, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [20, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-60, 0], "type": "AutoTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "AutoTurret", "dir": 0}, {"pos": [60, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 1000], ["Avoid #dps danger areas", 5], ["Find units that are out of energy"], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 2], ["Field # for # of ship in slot # at priority #", 1, 4, 3, 4], ["Field # at start", 1], ["Stay in #m range of friendly units", 900], ["Try to field # every # seconds", 1, 60]]
}, {
    "parts": [{"pos": [-30, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-40, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "LightBeamTurret", "dir": 0}, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of friendly units", 500], ["@attackTypes enemy within #m", "Attack", 250], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Brawling Value", 1000], ["Avoid over #damage shots", 20], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 1000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1000], ["Field # for # of enemy @unitTypes at priority #", 1, 5, "Scout", 3], ["Field # for # of enemy @unitTypes at priority #", 1, 3, "Swarmer", 3], ["Field # at start", 2], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less expensive", 100, 2000], ["Try to field # every # seconds", 1, 60], ["@capTypes Command Points within #m", "Protect", 10000]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, -30], "type": "VArmor1x1Corner2", "dir": 0}, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 550], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 510], ["Avoid #dps danger areas", 5], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 1, 30], ["Try to field # every # seconds", 1, 60]]
}, "", "", "", "", "", ""];
ais.all.AlphaSwarm = [{
    "parts": [{"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [10, 10],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [10, -50], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 250], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Attack", 600], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 100, 1]]
}, "", "", "", "", "", "", "", "", ""];
ais.all.Anubis = [{
    "parts": [{"pos": [70, 20], "type": "VArmor1x2", "dir": 0}, {
        "pos": [-70, -20],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [-40, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [0, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [50, -100], "type": "Engine04", "dir": 0}, {
        "pos": [10, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-50, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-40, -70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-10, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-70, -70], "type": "Engine01", "dir": 0}, {
        "pos": [-30, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [70, -70], "type": "Engine01", "dir": 0}, {
        "pos": [70, -20],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [30, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-70, 20],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [-80, 60], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [80, 60],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 100], "type": "Mount360", "dir": 0}, {
        "pos": [-40, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [40, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [-90, 20],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [90, 20], "type": "VArmor1x2", "dir": 0}, {
        "pos": [-50, 70],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "VArmor1x1", "dir": 0}, {
        "pos": [30, 70],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [50, 70], "type": "VArmor1x1", "dir": 0}, {
        "pos": [110, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-110, -20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-90, -20],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [90, -20], "type": "VArmor1x2", "dir": 0}, {
        "pos": [110, -60],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-110, -60], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [90, -60],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [-90, -60], "type": "VArmor1x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [0, 100], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 80], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Slower", "Less Range", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Less Range", "No PD", 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [110, -100], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-150, -30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [30, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-50, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, -90], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-80, -80], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-80, 40],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [80, -80], "type": "VArmor2x2", "dir": 0}, {
        "pos": [0, 100],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [80, 40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-150, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine01", "dir": 0}, {
        "pos": [150, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, -40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-110, 70],
        "type": "VArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, -40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-70, 110], "type": "VArmor1x1Angle", "dir": 0}, {
        "pos": [70, 110],
        "type": "VArmor1x1Angle",
        "dir": 0
    }, {"pos": [130, -80], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [110, 70],
        "type": "VArmor1x1Angle",
        "dir": 0
    }, {"pos": [-130, -80], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-110, -100],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-110, -70], "type": "VArmor1x1", "dir": 0}, {
        "pos": [110, -70],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [150, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, -120],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [10, -120], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [90, -120],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-90, -120], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [0, -60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-70, -120], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [70, -120],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [0, 140], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-40, 120],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, 120], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [-80, 80],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, 80], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [-120, 40],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [120, 40], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [-130, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-110, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-90, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-70, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [70, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [90, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [110, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [130, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-90, -40],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [-70, -40], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [70, -40],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [90, -40], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [110, -40],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [130, -40], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [-110, -40],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [-130, -40], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [0, 20],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [0, 100], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 180], ["@attackTypes enemy within #m", "Kite", 600], ["When #% of energy, @chargeTypes", 20, "Rest"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 150, 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, 40], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [10, 40],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }],
    "name": "",
    "aiRules": [["Avoid everything"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 1, 30]]
}, "", "", "", "", "", "", ""];
ais.all.AssaultandBattery = [{
    "parts": [{"pos": [50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-60, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [60, 0], "type": "Mount90", "dir": 0}, {
        "pos": [20, 0],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-50, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, -80], "type": "Engine04", "dir": 0}, {
        "pos": [10, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -40], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [10, -40],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-20, 40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-60, 0], "type": "LightBeamTurret", "dir": 0}, {"pos": [60, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "Slower", 1000], ["@attackTypes enemy within #m", "Attack", 300], ["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 20], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # when money over # at priority #", 1, 550, 1], ["Field # at priority #", 1, 4], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-20, 0], "type": "Battery2x2", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, -40], "type": "Engine07", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [20, 0],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [60, 20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-60, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [50, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-60, 20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [-20, 40], "type": "AutoTurret", "dir": 0}, {
        "pos": [20, 40],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [60, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["Avoid over #damage shots", 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Slower", "Less Brawling Value", 1600], ["@attackTypes enemy within #m", "Bomb", 800], ["Stay in #m range of slot # units", 800, 3], ["Try to field # every # seconds", 1, 40]]
}, {
    "parts": [{"pos": [-30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, -20],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -30], "type": "UArmor1x1", "dir": 0}, {"pos": [30, -30], "type": "UArmor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1600, 5], ["Avoid everything"], ["Avoid #dps danger areas", 5], ["Find units that are out of energy"], ["Field # at priority #", 1, 3], ["Try to field # every # seconds", 1, 30], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 2]]
}, {
    "parts": [{"pos": [0, 0], "type": "Battery2x2", "dir": 0}, {
        "pos": [10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount30", "dir": 0}, {"pos": [40, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-20, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "TorpTurret", "dir": 0}, {"pos": [40, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy within #m", "Bomb", 600], ["Stay in #m range of slot # units", 800, 3], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Attack", 1600], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 2, 1, 3, 2]]
}, {
    "parts": [{"pos": [70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-60, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [60, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [20, 20], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-20, 20], "type": "Battery2x2", "dir": 0}, {
        "pos": [20, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-20, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-20, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [80, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [20, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-80, -20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-90, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-20, -90],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [20, -90], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [-20, 60],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 60], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-80, -20], "type": "AutoTurret", "dir": 0}, {
        "pos": [80, -20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [-20, -60], "type": "PlasmaTurret", "dir": 0}, {"pos": [20, -60], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 250], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 160, 800], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1], ["Field # when money over # at priority #", 1, 1000, 1], ["Try to field # every # seconds", 1, 35]]
}, "", "", "", "", ""];
ais.all.BaitandMissile = [{
    "parts": [{"pos": [80, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-60, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [60, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-10, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [10, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, 100], "type": "Mount90", "dir": 0}, {
        "pos": [20, 100],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-60, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [60, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [80, 70], "type": "Wing2x1", "dir": 0}, {
        "pos": [-80, 70],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-120, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-120, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [120, 20], "type": "Mount90", "dir": 0}, {
        "pos": [120, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-120, 20], "type": "PDTurret", "dir": 0}, {
        "pos": [-120, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [120, -20], "type": "PDTurret", "dir": 0}, {
        "pos": [120, 20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}, {
        "pos": [-20, 100],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [20, 100], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More Brawling Value", "Faster", 800], ["@attackTypes enemy within #m", "Kite", 2000], ["Try to field # every # seconds", 2, 35], ["Stay in #m range of friendly units", 500]]
}, {
    "parts": [{"pos": [-100, -50], "type": "Wing2x1", "dir": 0}, {
        "pos": [120, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [10, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-120, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [100, -50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-70, 90], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 90],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-80, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-80, 30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [80, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [80, 30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-60, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [60, -60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, 100],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [40, 100], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-60, -60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [60, -60], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, 100],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 100], "type": "TorpTurret", "dir": 0}, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 1000, 2000], ["@attackTypes enemy within #m", "Kite", 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 25]]
}, {
    "parts": [{"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-60, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [60, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [10, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [80, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-80, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-10, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, 70], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Kite", 1000], ["Stay in #m range of friendly units", 500], ["Avoid over #damage shots", 20], ["Goto @locationTypes", "Enemy Spawn"], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [80, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-60, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [60, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-10, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-80, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-90, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [10, -90], "type": "Engine02", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [30, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 2, 5, 1], ["@attackTypes enemy within #m", "Kite", 1000], ["Avoid over #damage shots", 20], ["Find units that are out of energy"], ["Try to field # every # seconds", 1, 35]]
}, {
    "parts": [{"pos": [0, 60], "type": "Mount90", "dir": 0}, {
        "pos": [30, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-10, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [10, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [10, 20], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-10, 20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [70, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [40, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -50], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-30, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [30, 10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [50, -10], "type": "Engine01", "dir": 0}, {
        "pos": [30, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-30, -60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, 20], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [70, 20],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-40, 40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 60],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Try to field # every # seconds", 1, 20], ["Field # at priority #", 1, 2], ["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 500], ["@capTypes Command Points within #m", "Capture", 10000]]
}, "", "", "", "", ""];
ais.all.BatteryRam = [{"parts": [], "name": "", "aiRules": []}, {
    "parts": [{"pos": [-60, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-10, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 80],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, 100], "type": "Mount90", "dir": 0}, {"pos": [0, 60], "type": "Mount270", "dir": 0}, {
        "pos": [40, 80],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [80, 40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [100, 0],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-100, 0],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-40, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-60, -10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [60, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [60, -10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [100, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-100, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-60, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-60, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [60, -50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [60, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-70, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, 10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 80], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [40, 80],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "FlackTurret", "dir": 0}, {"pos": [0, 100], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 2], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-40, 40], "type": "Mount90", "dir": 0}, {
        "pos": [0, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-70, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [70, 0], "type": "Engine04", "dir": 0}, {
        "pos": [50, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-70, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 20],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-40, 40], "type": "PlasmaTurret", "dir": 0}, {"pos": [40, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 2], ["Try to field # every # seconds", 1, 30], ["When #% of energy, @chargeTypes", 50, "Rest"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Slower", "Less Range", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Slower", "More Range", 1000], ["Stay in #m range of slot # units", 1000, 1], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {"parts": [], "name": "", "aiRules": []}, "", "", "", "", "", ""];
ais.all.BattleStar = [{
    "parts": [{"pos": [-20, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [10, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [10, -30],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [10, 30], "type": "Wing1x1Round", "dir": 0}, {"pos": [-20, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 1000], ["Field # at priority #", 0, 5], ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Fighter", 2], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 1000], ["When #% of energy, @chargeTypes", 70, "Find recharger"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Scout", 3], ["Try to field # every # seconds", 1, 35], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [40, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-90, 30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [30, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [70, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [90, 30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-80, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, 100], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, 140], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, 140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 150], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 120],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-70, 110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 110],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-70, 90], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [0, 120], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 3, 1, 1], ["Avoid over #damage shots", 180], ["@attackTypes enemy within #m", "Kite", 1500], ["Stay in #m range of slot # units", 400, 3], ["Stay in #m range of slot # units", 400, 4], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less HP", 2500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Range", 2500], ["Find units that are out of energy"], ["@capTypes Command Points within #m", "Capture", 1000], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [0, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-10, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [140, 0], "type": "Mount360", "dir": 0}, {
        "pos": [100, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [180, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [160, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-180, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 110],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-140, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-30, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 50],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [30, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, -50],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-160, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-180, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [120, -140], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-30, -170],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -170], "type": "Engine02", "dir": 0}, {
        "pos": [-100, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-150, -130], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-140, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [140, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [150, -130],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-20, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 140],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [20, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -70],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor1x2Back2", "dir": 0}, {
        "pos": [0, 90],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [-120, -140], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [10, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-140, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -110],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [0, -90], "type": "HArmor1x2Back2", "dir": 0}, {
        "pos": [-150, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [80, -160], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-80, -160],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [180, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [160, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [120, 140], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [150, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 180], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-180, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-120, 140], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-160, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, 150], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, 180],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, 180], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, 160],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [30, 180], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 150],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [50, 180], "type": "Wing1x2", "dir": 0}, {
        "pos": [80, 160],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [140, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [180, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [100, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [180, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-100, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-180, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-140, 0], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [140, 0],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [0, 140], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 2], ["@attackTypes enemy within #m", "Stay at range", 900], ["@attackTypes enemy within #m", "Circle", 1100], ["@attackTypes enemy within #m", "Attack", 1300], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 10000], ["Stay in #m range of slot # units", 600, 4], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 45], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-90, -170], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 140],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-180, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [180, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [160, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [140, -140],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [180, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [160, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 50], "type": "HArmor1x2Front2", "dir": 0}, {
        "pos": [0, 70],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, -50],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-30, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, -70],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [0, -20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, 180], "type": "TargetingMod", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 140],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 180],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, -180], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -140],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [20, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, -180],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-20, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, -100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [110, -150], "type": "Engine02", "dir": 0}, {
        "pos": [-110, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-160, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, -140],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 140], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, -140],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-60, -180], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [90, -170],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [60, -180], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-160, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-140, -140], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-140, 140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [140, 140], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-70, 180],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, 180], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-100, 160],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [100, 160], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [70, 180],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [50, 180], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, -110],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, -110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-180, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-170, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [170, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [190, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-190, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [180, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-180, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-180, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [180, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-50, 110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, 110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 150], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 150],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-70, 130], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [70, 130],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 140], "type": "HeavyBeamTurret", "dir": 0}, {"pos": [0, -140], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 2], ["@attackTypes enemy within #m", "Kite", 900], ["@attackTypes enemy within #m", "Ram", 1200], ["Stay in #m range of slot # units", 600, 3], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less HP", "Weaker", 10000], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 60], ["Field # at start", 1]]
}, "", "", "", "", "", ""];
ais.all.BeamMan = [{
    "parts": [{"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [40, 90], "type": "Wing2x1", "dir": 0}, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [0, 90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, -30],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [40, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-70, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [0, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [70, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [90, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [70, 60], "type": "Battery1x2", "dir": 0}, {
        "pos": [-60, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [60, -60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, -60],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-30, -60], "type": "Engine04", "dir": 0}, {
        "pos": [30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 20], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [60, -60],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [-60, -60], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Kite", 600], ["When #% of energy, @chargeTypes", 40, "Rest"], ["Avoid over #damage shots", 10], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 1], ["Try to field # every # seconds", 1, 30], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-40, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-40, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-20, -60], "type": "Engine07", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, -60], "type": "Engine07", "dir": 0}, {
        "pos": [0, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-70, 60], "type": "UArmor1x2", "dir": 0}, {
        "pos": [70, 60],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [90, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-70, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [70, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-50, -60], "type": "Battery1x2", "dir": 0}, {
        "pos": [50, -60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 25, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Kite", 650], ["When #% of energy, @chargeTypes", 50, "Rest"], ["@attackTypes enemy within #m", "Kite", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 1], ["Try to field # every # seconds", 1, 30], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [10, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-10, 10], "type": "HArmor1x1Angle", "dir": 0}, {"pos": [30, 10], "type": "HArmor1x1Angle", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 2, 30], ["Field # at start", 2]]
}, "", "", "", "", "", "", {
    "parts": [{"pos": [40, 0], "type": "VArmor2x2", "dir": 0}, {
        "pos": [40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [40, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [70, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-90, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-40, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-40, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -20],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [40, 40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [-40, 0],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [40, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [-50, -60],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-30, -60],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [30, -60], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [50, -60],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [70, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-70, 70],
        "type": "VArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 50], "type": "VArmor1x1Angle", "dir": 0}, {
        "pos": [70, 50],
        "type": "VArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 70], "type": "VArmor1x1Angle", "dir": 0}, {
        "pos": [90, 30],
        "type": "VArmor1x1Angle",
        "dir": 0
    }, {"pos": [-90, 30], "type": "VArmor1x1Angle", "dir": 0}, {
        "pos": [0, 60],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [90, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 20], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Find units that are out of energy"], ["Avoid over #damage shots", 40], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1]]
}];
ais.all.Belfry = [{
    "parts": [{"pos": [40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, -80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -110], "type": "Engine02", "dir": 0}, {
        "pos": [50, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, 50], "type": "Battery2x1", "dir": 0}, {
        "pos": [30, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-80, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [80, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-80, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-80, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, -110],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 150], ["@attackTypes enemy within #m", "Ram", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 100, 1]]
}, {
    "parts": [{"pos": [-30, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, 10], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 30], ["Field # at start", 4]]
}, "", "", "", "", "", "", "", ""];
ais.all.BetaSwarm = [{
    "parts": [{"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [10, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-10, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 250], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 200, 600], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 100, 1]]
}, "", "", "", "", "", "", "", "", ""];
ais.all.BladeRanger = [{
    "parts": [{"pos": [0, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Engine03", "dir": 0}, {
        "pos": [30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 0], "type": "Engine04", "dir": 0}, {
        "pos": [30, 60],
        "type": "VArmor1x1Hook",
        "dir": 0
    }, {"pos": [-30, 60], "type": "VArmor1x1Hook", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [50, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [0, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy within #m", "Bomb", 550], ["@attackTypes enemy within #m", "Backstab", 800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "Faster", 1100], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 30], ["Field # at start", 4]]
}, {
    "parts": [{"pos": [-10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount90", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [50, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-30, 50], "type": "VArmor1x1Corner2", "dir": 0}, {
        "pos": [30, 50],
        "type": "VArmor1x1Corner2",
        "dir": 0
    }, {"pos": [-50, 0], "type": "VArmor1x2SideBarFilled", "dir": 0}, {
        "pos": [50, 0],
        "type": "VArmor1x2SideBarFilled",
        "dir": 0
    }, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}, {"pos": [0, 40], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Run-by", "Less Arc", 200, 500], ["@attackTypes enemy within #m", "Attack", 600], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 200, 2000], ["Avoid #dps danger areas", 5], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 60], ["Field # at start", 2], ["Field # when money over # at priority #", 100, 3000, 1]]
}, {
    "parts": [{"pos": [-10, -40], "type": "Engine03", "dir": 0}, {
        "pos": [-10, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-30, 0],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [30, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [10, 50], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-10, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 0], "type": "VArmor1x1CornerBack", "dir": 0}, {"pos": [0, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy within #m", "Circle", 700], ["@attackTypes enemy within #m", "Backstab", 1100], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 40], ["Field # at start", 3]]
}, {
    "parts": [{"pos": [-30, -60], "type": "Reactor1x2", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-50, -80], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [50, 0],
        "type": "VArmor1x1Corner3",
        "dir": 0
    }, {"pos": [-50, 0], "type": "VArmor1x1Corner3", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [30, -60],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-10, -80], "type": "Engine04", "dir": 0}, {
        "pos": [30, -20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [10, -80], "type": "Engine04", "dir": 0}, {
        "pos": [30, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -100], "type": "Engine04", "dir": 0}, {
        "pos": [50, -40],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [-50, -40], "type": "VArmor1x2", "dir": 0}, {
        "pos": [50, -80],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [-70, -60], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [70, -60],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, -30], "type": "VArmor1x1Corner1", "dir": 0}, {
        "pos": [70, -30],
        "type": "VArmor1x1Corner1",
        "dir": 0
    }, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 1600], ["Stay in #m range of slot # units", 550, 2], ["Stay in #m range of slot # units", 550, 3], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 5, 1, 1], ["Field # for # of ship in slot # at priority #", 1, 3, 2, 1], ["Field # for # of ship in slot # at priority #", 1, 4, 3, 1], ["Field # at start", 1], ["Field # at priority #", 1, 1]]
}, "", "", "", "", "", ""];
ais.all.BossAI = ["", "", "", "", "", "", "", "", "", ""];
ais.all.BullDogs = [{
    "parts": [{"pos": [-110, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [110, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, 120], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 180],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 140], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 140],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, 180], "type": "Mount30", "dir": 0}, {
        "pos": [40, 180],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [-40, 120],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [40, 150],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, 150], "type": "Battery2x1", "dir": 0}, {
        "pos": [50, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [180, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-180, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [140, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-140, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 120], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-180, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [180, 0], "type": "Mount90", "dir": 0}, {
        "pos": [140, 60],
        "type": "HArmor2x2Front1",
        "dir": 0
    }, {"pos": [-140, 60], "type": "HArmor2x2Front1", "dir": 0}, {
        "pos": [-140, -40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [140, -40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-100, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 150], "type": "HArmor2x1", "dir": 0}, {
        "pos": [80, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [100, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-80, -10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [80, -10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-110, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [110, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-70, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, 180],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [70, 180], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-80, 100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [80, 100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-110, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [110, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-90, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-70, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [70, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [90, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-10, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [10, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-140, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [140, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [170, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [40, 180],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-170, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-180, 0],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [180, 0], "type": "PDTurret", "dir": 0}, {
        "pos": [-80, 140],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-40, 180], "type": "TorpTurret", "dir": 0}, {
        "pos": [-100, 20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [180, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [80, 140],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [140, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-180, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [100, 20], "type": "TorpTurret", "dir": 0}, {
        "pos": [-140, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-80, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [80, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 40], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 600], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 60], ["Field # at priority #", 1, 1]]
}, {
    "parts": [{"pos": [20, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [50, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-50, -10], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [50, -10],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [20, 20], "type": "TorpTurret", "dir": 0}, {"pos": [-20, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 25, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Stay at range", 850], ["@attackTypes enemy within #m", "Attack", 1100], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 1, 30]]
}, "", "", "", "", "", "", "", {
    "parts": [{"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [0, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-30, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 50], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 5], ["Stay in #m range of slot # units", 500, 1], ["Avoid everything"]]
}];
ais.all.Cormix = [{
    "parts": [{"pos": [-50, -60], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [30, -60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, -60], "type": "Battery1x2", "dir": 0}, {
        "pos": [-30, -100],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, -100], "type": "Engine03", "dir": 0}, {
        "pos": [-50, -100],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [50, -100], "type": "Engine03", "dir": 0}, {
        "pos": [50, -60],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, -30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, -80], "type": "DamageMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Backstab", 400], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 3, 10]]
}, {
    "parts": [{"pos": [10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-20, -20], "type": "Mount30", "dir": 0}, {
        "pos": [-50, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-20, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-20, -20], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Bomb", 500], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 6], ["Try to field # every # seconds", 3, 10]]
}, {
    "parts": [{"pos": [30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, -20], "type": "Mount30", "dir": 0}, {
        "pos": [10, -20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [10, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [10, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, -20], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of friendly units", 1000], ["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 2, 10]]
}, "", "", "", "", "", "", {
    "parts": [{"pos": [0, 20], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-50, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [50, 10], "type": "Wing1x1Notch", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Stay in #m range of slot # units", 500, 3], ["Field # for # of ship in slot # at priority #", 1, 6, 1, 5], ["Field # for # of ship in slot # at priority #", 1, 10, 2, 5], ["Field # for # of ship in slot # at priority #", 1, 2, 3, 5]]
}];
ais.all.CreepingHoard = [{
    "parts": [{"pos": [-60, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [20, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-60, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [20, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount360", "dir": 0}, {
        "pos": [-20, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-60, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-60, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [50, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-90, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [20, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-20, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [50, 10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-90, 10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [20, 100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-60, 100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-20, -80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-90, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 60], "type": "HArmor1x2", "dir": 0}, {"pos": [-20, 40], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 2500, 4], ["Find units that are out of energy"], ["Avoid everything"], ["Field # at priority #", 1, 1], ["Field # at priority #", 1, 3], ["Field # at priority #", 1, 4], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "Weaker", 1000], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # at priority #", 1, 9]]
}, {
    "parts": [{"pos": [20, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [20, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-60, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [20, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-60, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [50, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-90, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-60, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-20, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [50, 10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-90, 10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [20, 100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-60, 100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-20, -80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-90, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-20, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 120],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-20, 40], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 2], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "More Brawling Value", "---", 1000], ["Stay in #m range of slot # units", 500, 1], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # at priority #", 1, 7]]
}, {
    "parts": [{"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [40, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [10, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, 20], "type": "HArmor1x2", "dir": 0}, {"pos": [0, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Less expensive", "More Brawling Value", 1300], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Run-by", "Slower", "---", 500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 9, 3]]
}, {
    "parts": [{"pos": [40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [180, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-180, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [100, 0], "type": "Mount30", "dir": 0}, {
        "pos": [120, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-120, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-100, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-160, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [160, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-120, 40],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [120, 40], "type": "Wing2x2", "dir": 0}, {
        "pos": [40, 90],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, 120], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 120],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 120], "type": "Mount30", "dir": 0}, {
        "pos": [80, 120],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, 90], "type": "Battery2x1", "dir": 0}, {
        "pos": [-120, 120],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [20, -80], "type": "Mount30", "dir": 0}, {
        "pos": [-20, -80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, -120], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [120, 120], "type": "Mount30", "dir": 0}, {
        "pos": [40, -40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [160, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-160, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-90, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-190, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [190, -50], "type": "Engine02", "dir": 0}, {
        "pos": [40, -120],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, -120], "type": "DamageMod", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -50], "type": "Engine02", "dir": 0}, {
        "pos": [70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-80, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [50, -80],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, -80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-140, -70],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [140, -70], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [-140, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [140, 0], "type": "Mount30", "dir": 0}, {
        "pos": [0, 120],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-120, 120], "type": "PDTurret", "dir": 0}, {
        "pos": [80, 120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [120, 120], "type": "PDTurret", "dir": 0}, {
        "pos": [-80, 120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, 120], "type": "PDTurret", "dir": 0}, {
        "pos": [40, 120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-160, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [100, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-140, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [120, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [180, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-180, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-100, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [140, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-120, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [160, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 40], "type": "MissileTurret", "dir": 0}, {
        "pos": [20, -80],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [-20, -80], "type": "ArtilleryTurret", "dir": 0}, {"pos": [0, 120], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 3], ["Stay in #m range of friendly units", 3500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "More HP", 900], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less HP", "Weaker", 900], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "---", "---", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "---", 2000], ["When #% of energy, @chargeTypes", 85, "Find recharger"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 8]]
}, {
    "parts": [{"pos": [-50, 70], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-50, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [50, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-20, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, 70],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [20, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [40, -30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-70, 40], "type": "UArmor1x2", "dir": 0}, {
        "pos": [70, 40],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [0, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1400, 1], ["Field # at priority #", 1, 4], ["When #% of energy, @chargeTypes", 60, "Find recharger"], ["Avoid everything"], ["Avoid over #damage shots", 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "More Brawling Value", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "---", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 9]]
}, {
    "parts": [{"pos": [10, -10], "type": "Battery1x1", "dir": 0}, {"pos": [10, -40], "type": "Engine04", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 2], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 90]]
}, {
    "parts": [{"pos": [-40, -60], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [-40, 30],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Front1", "dir": 0}, {
        "pos": [-40, -30],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-110, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "HArmor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid #dps danger areas", 10], ["Find units that are out of energy"], ["When #% of energy, @chargeTypes", 97, "Find recharger"], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 45]]
}, {
    "parts": [{"pos": [10, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, 0], "type": "Engine04", "dir": 0}, {
        "pos": [50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, 20], "type": "VArmor1x1Corner3", "dir": 0}, {
        "pos": [10, -10],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "VArmor1x1", "dir": 0}, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 400], ["@attackTypes enemy within #m", "Attack", 350], ["Stay in #m range of slot # units", 200, 9], ["Avoid everything"], ["Field # at priority #", 3, 4], ["Field # at priority #", 1, 3], ["Field # at priority #", 4, 5], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 450], ["@capTypes Command Points within #m", "Spread to", 1000]]
}, {
    "parts": [{"pos": [20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [10, 0],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-10, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [50, 10],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [30, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 200], ["Stay in #m range of slot # units", 300, 3], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "---", 1250], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "Less Brawling Value", 1250], ["Field # at priority #", 1, 5], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "Weaker", 1000], ["Goto @locationTypes", "Enemy Army Middle"]]
}, {
    "parts": [{"pos": [40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [-120, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [120, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [0, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [80, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-160, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [160, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-160, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-110, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [110, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-80, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [80, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [10, 60], "type": "Battery1x2", "dir": 0}, {
        "pos": [-10, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-80, 90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-40, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [80, 90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [160, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-130, -70], "type": "Engine02", "dir": 0}, {
        "pos": [130, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [120, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-120, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, -100], "type": "Wing2x2", "dir": 0}, {
        "pos": [40, -100],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "PlasmaTurret", "dir": 0}, {
        "pos": [-120, 0],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [40, 0], "type": "PlasmaTurret", "dir": 0}, {"pos": [120, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 2], ["Stay in #m range of slot # units", 500, 1], ["Field # at priority #", 1, 4], ["Field # at priority #", 2, 5], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Has PD", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less Brawling Value", "More expensive", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "---", "---", 1000], ["@attackTypes enemy within #m", "Attack", 2000], ["Avoid #dps danger areas", 5], ["Goto @locationTypes", "Enemy Army Middle"]]
}];
ais.all.CubeCollective = ["", {
    "parts": [{"pos": [-10, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [10, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [10, -20], "type": "Engine03", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 750], ["@attackTypes enemy within #m", "Flee", 1000], ["@attackTypes enemy within #m", "Flee", 1600], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 1], ["Field # at priority #", 2, 2], ["Field # at priority #", 3, 4], ["Field # at priority #", 3, 5], ["Field # at priority #", 3, 6]]
}, {
    "parts": [{"pos": [0, 20], "type": "Mount180", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [30, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 150], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "More Brawling Value", 1400], ["Avoid over #damage shots", 20], ["Stay in #m range of slot # units", 4000, 4], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less DPS", "Less Brawling Value", 1500], ["@attackTypes enemy within #m", "Circle", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 3000], ["@capTypes Command Points within #m", "Protect", 5000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 1], ["Field # at priority #", 1, 5], ["Field # at priority #", 1, 6]]
}, {
    "parts": [{"pos": [90, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [90, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [60, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-90, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [20, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-90, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [30, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-90, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-20, -40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [10, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-30, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-40, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [40, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-10, -90], "type": "Engine01", "dir": 0}, {
        "pos": [80, 80],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-60, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [60, 40],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-60, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, -90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, 70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-80, -80],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [70, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [70, 10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-90, 80],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, 90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [80, -80], "type": "Mount360", "dir": 0}, {
        "pos": [80, 80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-80, -80], "type": "PDTurret", "dir": 0}, {
        "pos": [80, -80],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Faster", "---", 900], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 900], ["Stay in #m range of slot # units", 500, 5], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1300], ["Avoid over #damage shots", 21], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1400], ["@capTypes Command Points within #m", "Capture", 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More expensive", 300, 2500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1], ["Field # at priority #", 1, 7], ["Field # at priority #", 1, 8]]
}, {
    "parts": [{"pos": [40, 70], "type": "Wing2x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [60, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [60, 40], "type": "Wing2x2", "dir": 0}, {
        "pos": [-90, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [20, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-90, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-90, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [50, -90], "type": "Engine01", "dir": 0}, {
        "pos": [20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [10, -90], "type": "Engine01", "dir": 0}, {
        "pos": [0, 90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, -90], "type": "Engine01", "dir": 0}, {
        "pos": [90, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, 90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, 90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-30, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-50, -70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [80, -80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [90, 80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, 90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-10, 70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-50, 70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, -10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-30, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-80, -80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-80, 80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, -80],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [80, -80], "type": "PDTurret", "dir": 0}, {"pos": [0, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Ram", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 500], ["Avoid over #damage shots", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Faster", "---", 700], ["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 10, "Flee enemies"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1300], ["Stay in #m range of slot # units", 500, 4], ["Avoid over #damage shots", 22], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1400], ["@capTypes Command Points within #m", "Capture", 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More expensive", 300, 2500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 3], ["Field # at priority #", 1, 7], ["Field # at priority #", 1, 7]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount180", "dir": 0}, {
        "pos": [50, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-10, 50],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [50, -20], "type": "Engine03", "dir": 0}, {
        "pos": [30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [10, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [40, 40], "type": "FlackTurret", "dir": 0}, {"pos": [0, 0], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 400], ["Avoid over #damage shots", 21], ["Stay in #m range of slot # units", 2000, 4], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 800], ["@attackTypes enemy @unitTypes within #m", "Flee", "Carrier", 1500], ["@attackTypes enemy @unitTypes within #m", "Flee", "Battleship", 1500], ["@attackTypes enemy @unitTypes within #m", "Flee", "Cruiser", 1300], ["@attackTypes enemy @unitTypes within #m", "Flee", "Destroyer", 1300], ["@capTypes Command Points within #m", "Capture", 1000], ["Stay in #m range of slot # units", 400, 4], ["Stay in #m range of slot # units", 500, 5], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 4]]
}, {
    "parts": [{"pos": [60, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 70], "type": "UArmor2x1", "dir": 0}, {
        "pos": [70, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [70, 70], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [60, 10],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [30, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [50, 70], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 70],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount30", "dir": 0}, {
        "pos": [50, -20],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [60, 40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 8, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 500], ["Avoid over #damage shots", 21], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "More expensive", 1400], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More HP", 450, 1400], ["Stay in #m range of slot # units", 2800, 4], ["Stay in #m range of slot # units", 2800, 5], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Backstab", 750], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 1500], ["Stay in #m range of slot # units", 600, 7], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "---", 1250], ["@capTypes Command Points within #m", "Capture", 2000], ["@capTypes Command Points within #m", "Protect", 2500], ["Stay in #m range of slot # units", 500, 4], ["Stay in #m range of slot # units", 500, 5], ["Field # at priority #", 1, 2], ["Field # at priority #", 1, 4], ["Field # at priority #", 1, 5], ["Field # at priority #", 1, 6], ["Field # at priority #", 2, 7]]
}, {
    "parts": [{"pos": [50, 70], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [40, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [90, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-70, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-50, -90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [70, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-60, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [60, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [90, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-90, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [80, 80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-80, 80], "type": "Mount360", "dir": 0}, {
        "pos": [40, -80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-90, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, 80],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine01", "dir": 0}, {
        "pos": [60, 40],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-90, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-60, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [10, -70],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [70, -10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, 70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, 90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [70, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, 80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "EMPGun", "dir": 0}, {"pos": [-80, 80], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 750], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Faster", "---", 600], ["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 10, "Flee enemies"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1300], ["Stay in #m range of slot # units", 300, 4], ["Stay in #m range of slot # units", 300, 5], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1400], ["@capTypes Command Points within #m", "Capture", 750], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More expensive", 300, 2500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 6], ["Field # at priority #", 1, 8]]
}, {
    "parts": [{"pos": [-10, 50], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, 0],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [20, 40], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 25, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 500], ["@attackTypes enemy within #m", "Flee", 750], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More expensive", "Faster", 1100], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Range", "---", 1100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Less expensive", 250, 1000], ["@attackTypes enemy within #m", "Flee", 1100], ["@capTypes Command Points within #m", "Guard", 200], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 25]]
}, {
    "parts": [{"pos": [20, 40], "type": "Mount360", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Engine01", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-50, -10], "type": "Engine02", "dir": 0}, {
        "pos": [90, 40],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [80, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [90, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, 120], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-50, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-20, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [30, 120], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [60, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [-50, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-40, 120], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 120],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [80, 120], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, 120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "MissileTurret", "dir": 0}, {"pos": [80, 120], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 750], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Faster", "---", 900], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1100], ["Stay in #m range of slot # units", 300, 4], ["Stay in #m range of slot # units", 300, 5], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 300, 1200], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More expensive", 300, 3500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 4], ["Field # at priority #", 1, 5]]
}];
ais.all.Cython = [{
    "parts": [{"pos": [30, -40], "type": "Engine03", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [0, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [20, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -30], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-30, -10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [30, -10], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-20, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 300], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 1, 10]]
}, {
    "parts": [{"pos": [30, 30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-30, 30],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount90", "dir": 0}, {
        "pos": [0, 50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-30, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [30, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Engine03", "dir": 0}, {"pos": [30, 0], "type": "Engine03", "dir": 0}, {
        "pos": [0, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Attack", 300], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 1, 10]]
}, "", "", "", "", "", "", "", {
    "parts": [{"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 20], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Notch", "dir": 0}, {"pos": [30, 30], "type": "Wing1x1Notch", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Find units that are out of energy"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 5], ["Field # for # of ship in slot # at priority #", 1, 6, 2, 5]]
}];
ais.all.DarkStar = [{
    "parts": [{"pos": [0, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-70, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-40, -80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-90, -70], "type": "Engine02", "dir": 0}, {
        "pos": [70, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount360", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [40, -80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [40, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-80, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [30, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -130], "type": "Engine02", "dir": 0}, {
        "pos": [0, -140],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [80, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-70, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-110, 20],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [110, 20], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-110, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [110, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-50, -120],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [50, -120], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, -140],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, 0], "type": "MissileTurret", "dir": 0}, {
        "pos": [40, 0],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [0, -60], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "More DPS", 1, 2100], ["@capTypes Command Points within #m", "Capture", 200], ["Avoid over #damage shots", 1], ["Avoid everything"], ["@capTypes Command Points within #m", "Protect", 10000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Goto @locationTypes", "Enemy Home Point"], ["Goto @locationTypes", "Enemy Spawn"], ["Field # at priority #", 1, 3], ["Field # at priority #", 2, 5], ["Field # at priority #", 3, 6]]
}, {"parts": [], "name": "", "aiRules": []}, {
    "parts": [{"pos": [-30, -110], "type": "Engine02", "dir": 0}, {
        "pos": [30, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount360", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, -60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, -60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [20, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -100], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-50, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [50, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [70, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-70, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [70, 60], "type": "Reactor1x2", "dir": 0}, {
        "pos": [70, -20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-70, -20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-100, 0],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [100, 0], "type": "Wing2x2", "dir": 0}, {
        "pos": [-70, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [70, -60], "type": "Engine04", "dir": 0}, {
        "pos": [0, -100],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "MissileTurret", "dir": 0}, {"pos": [0, 60], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 200], ["When #% of energy, @chargeTypes", 50, "Flee enemies"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "More DPS", 1, 1475], ["Avoid over #damage shots", 1], ["Avoid everything"], ["@capTypes Command Points within #m", "Protect", 10000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Goto @locationTypes", "Enemy Home Point"], ["Goto @locationTypes", "Enemy Spawn"], ["Field # at priority #", 2, 4], ["Field # at priority #", 4, 5]]
}, {
    "parts": [{"pos": [40, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, -20], "type": "Battery2x2", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [10, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-10, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-70, 90], "type": "Engine01", "dir": 0}, {
        "pos": [-60, 140],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [60, 140], "type": "Wing2x2", "dir": 0}, {
        "pos": [70, 90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, -40], "type": "PDTurret", "dir": 0}, {"pos": [0, 40], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 1000], ["When Shields down to #%, flee", 80], ["When #% of energy, @chargeTypes", 20, "Rest"], ["Goto @locationTypes", "Enemy Spawn"], ["@attackTypes enemy within #m", "Stay at range", 900], ["Avoid over #damage shots", 1], ["Avoid everything"], ["Field # at priority #", 1, 6], ["Field # for # of ship in slot # at priority #", 2, 1, 2, 6]]
}, {
    "parts": [{"pos": [0, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [80, 80],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [0, -110], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [20, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-20, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [60, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-20, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [-80, 80],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [70, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine02", "dir": 0}, {
        "pos": [30, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -80], "type": "PDTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 200], ["When Shields down to #%, flee", 80], ["@capTypes Command Points within #m", "Protect", 10000], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["When #% of energy, @chargeTypes", 20, "Flee enemies"], ["Avoid over #damage shots", 1], ["Avoid everything"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "More Range", "Faster", 3000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "More DPS", 1, 1700], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Less Range", 1100, 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "More Range", "Slower", 1700], ["@capTypes Command Points within #m", "Spread to", 10000], ["Goto @locationTypes", "Enemy Home Point"], ["Goto @locationTypes", "Enemy Spawn"], ["Field # at priority #", 2, 5], ["Field # at priority #", 4, 6], ["Field # for # of ship in slot # at priority #", 6, 1, 2, 5]]
}, {
    "parts": [{"pos": [0, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [50, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 100], "type": "Mount360", "dir": 0}, {
        "pos": [40, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 140], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [30, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [0, -60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount360", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [40, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-60, 0],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-10, -110], "type": "Engine02", "dir": 0}, {
        "pos": [10, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, -50], "type": "Engine02", "dir": 0}, {
        "pos": [70, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, 160],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 100], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [0, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, -60], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 200], ["When Shields down to #%, flee", 80], ["@attackTypes enemy within #m", "Stay at range", 970], ["@capTypes Command Points within #m", "Protect", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "Less Range", 2000], ["Stay in #m range of friendly units", 500], ["Avoid everything"], ["Avoid over #damage shots", 1], ["@capTypes Command Points within #m", "Spread to", 10000], ["Goto @locationTypes", "Enemy Home Point"], ["Goto @locationTypes", "Enemy Spawn"], ["Field # at priority #", 1, 5], ["Field # at priority #", 2, 5], ["Field # for # of ship in slot # at priority #", 2, 1, 2, 5]]
}, {
    "parts": [{"pos": [-30, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-50, -30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, -20], "type": "CloakGenerator", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "More DPS", 1, 500], ["@attackTypes enemy within #m", "Flee", 200], ["@capTypes Command Points within #m", "Capture", 100], ["Stayaway in #m range from slot # units", 200, 7], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 3], ["Try to field # every # seconds", 1, 60]]
}, {
    "parts": [{"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [30, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-30, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -80], "type": "Mount360", "dir": 0}, {
        "pos": [0, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-60, -140], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount360", "dir": 0}, {
        "pos": [40, -60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [90, -150], "type": "Engine02", "dir": 0}, {
        "pos": [-90, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, -60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, -60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, -100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -160], "type": "Mount360Micro", "dir": 0}, {
        "pos": [60, -140],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [80, -100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [80, -60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [40, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, -20], "type": "Wing2x2", "dir": 0}, {
        "pos": [-80, -20],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [0, -160], "type": "PDTurret", "dir": 0}, {
        "pos": [0, -80],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "PlasmaTurret", "dir": 0}, {
        "pos": [-60, -140],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [60, -140], "type": "RingTurret", "dir": 0}, {"pos": [0, 80], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 60, "Find recharger"], ["When #% of energy, @chargeTypes", 10, "Rest"], ["Avoid over #damage shots", 1], ["Avoid everything"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Less Range", "---", 1500], ["Stay in #m range of slot # units", 1000, 9], ["Field # for # of ship in slot # at priority #", 1, 1, 9, 3], ["Field # for # of ship in slot # at priority #", 2, 2, 9, 3], ["Goto @locationTypes", "Enemy Spawn"]]
}, {
    "parts": [{"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-40, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [0, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-50, -110], "type": "Engine02", "dir": 0}, {
        "pos": [50, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -120], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, -80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [80, -80], "type": "Mount360", "dir": 0}, {
        "pos": [-80, -50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [30, 130], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-30, 130],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, -120], "type": "PDTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-80, -80], "type": "RingTurret", "dir": 0}, {"pos": [80, -80], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 200], ["Avoid over #damage shots", 1], ["Avoid everything"], ["When #% of energy, @chargeTypes", 20, "Rest"], ["@attackTypes enemy within #m", "Stay at range", 3000], ["Find units that are out of energy"], ["Stay in #m range of slot # units", 1000, 1], ["Goto @locationTypes", "Enemy Spawn"], ["Field # at priority #", 1, 5], ["Field # for # of ship in slot # at priority #", 2, 1, 2, 5]]
}, {
    "parts": [{"pos": [60, -40], "type": "Wing2x2", "dir": 0}, {
        "pos": [-50, -130],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [20, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [10, -130],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-20, -120], "type": "Battery2x2", "dir": 0}, {
        "pos": [-20, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-60, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-100, -40],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, -80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-20, -40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["@capTypes Command Points within #m", "Capture", 200], ["Stay in #m range of slot # units", 2000, 9], ["@attackTypes enemy within #m", "Stay at range", 1700], ["Stayaway in #m range from slot # units", 10, 10], ["Avoid over #damage shots", 1], ["Avoid #dps danger areas", 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 100, 3500], ["@attackTypes enemy within #m", "Kite", 3500], ["Field # for # of ship in slot # at priority #", 6, 1, 9, 5], ["Goto @locationTypes", "Enemy Spawn"]]
}];
ais.all.DeathStrike = [{
    "parts": [{"pos": [-120, -100], "type": "Engine07", "dir": 0}, {
        "pos": [120, -100],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [0, 40], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "Battery2x2", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-60, 120],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [80, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-100, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [60, 120], "type": "Mount270", "dir": 0}, {
        "pos": [-80, 160],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, 120], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 160],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 160], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 160], "type": "ReloaderMod", "dir": 0}, {
        "pos": [100, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 0], "type": "Battery2x2", "dir": 0}, {
        "pos": [-120, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, 0], "type": "Battery2x2", "dir": 0}, {
        "pos": [-120, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-160, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-180, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [120, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [180, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [160, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [120, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [160, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-160, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [100, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [140, 0],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-140, 0], "type": "Mount270", "dir": 0}, {
        "pos": [-100, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -160], "type": "Engine07", "dir": 0}, {
        "pos": [40, -120],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [0, -80], "type": "Battery2x2", "dir": 0}, {
        "pos": [-40, -80],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [40, -80], "type": "Battery2x2", "dir": 0}, {
        "pos": [-140, 120],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [0, -120], "type": "Battery2x2", "dir": 0}, {
        "pos": [-160, 80],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [160, 80], "type": "Wing2x2", "dir": 0}, {
        "pos": [140, 120],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-80, -100], "type": "Engine07", "dir": 0}, {
        "pos": [190, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [80, -100], "type": "Engine07", "dir": 0}, {
        "pos": [0, 90],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [80, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-80, -70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-190, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-120, -70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [120, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-120, 80],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [120, 80], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-10, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [10, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [90, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [90, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [90, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [90, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, -50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-90, -50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-90, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-90, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-90, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-40, -120],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-170, -80], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-150, -80],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-150, -120], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-170, -120],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [150, -80], "type": "UArmor1x2", "dir": 0}, {
        "pos": [170, -80],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [170, -120], "type": "UArmor1x2", "dir": 0}, {
        "pos": [150, -120],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [150, -160], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-150, -160],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-190, -80], "type": "UArmor1x2", "dir": 0}, {
        "pos": [190, -80],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [10, 150], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-10, 150],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-10, 170], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [10, 170],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-190, -110], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-170, -150],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [170, -150], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [190, -110],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [210, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-210, -40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-190, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [190, -40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-140, 0], "type": "AutoTurret", "dir": 0}, {
        "pos": [140, 0],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [-60, 120], "type": "RingTurret", "dir": 0}, {"pos": [60, 120], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 99], ["When #% of energy, @chargeTypes", 45, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Run-by", "Less Arc", 100, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 400, 1000], ["@capTypes Command Points within #m", "Protect", 10000], ["When #% of energy, @chargeTypes", 95, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 1100, 1700], ["Avoid #dps danger areas", 50]]
}, {
    "parts": [{"pos": [-40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [70, 0],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-70, 40],
        "type": "VArmor1x1Corner3",
        "dir": 0
    }, {"pos": [30, 80], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-90, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [90, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 80],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [70, 40], "type": "VArmor1x1Corner3", "dir": 0}, {
        "pos": [-70, 0],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-90, 10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [90, 10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount10Range", "dir": 0}, {
        "pos": [-50, 70],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [50, 70], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -30], "type": "Battery2x1", "dir": 0}, {"pos": [0, 20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 90], ["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Stay in #m range of slot # units", 500, 2], ["Field # at start", 4], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 25], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "---", 1000], ["@capTypes Command Points within #m", "Protect", 10000], ["Stayaway in #m range from slot # units", 400, 3], ["Stay in #m range of slot # units", 400, 1], ["Goto @locationTypes", "Enemy Army Middle"], ["Try to field # every # seconds", 1, 25], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-50, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, -50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, 20], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [70, 20],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [70, -20], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-70, -20],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 40], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "Less Range", 1000], ["Stay in #m range of slot # units", 500, 2], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["Avoid #dps danger areas", 10], ["Avoid over #damage shots", 20], ["Field # for # of @needTypes at priority #", 1, 5, "Fighter Counter Need", 2], ["Try to field # every # seconds", 1, 45]]
}, "", {"parts": [], "name": "", "aiRules": []}, {"parts": [], "name": "", "aiRules": []}, {
    "parts": [],
    "name": "",
    "aiRules": []
}, "", {
    "parts": [{"pos": [120, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [120, 40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-60, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [60, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [0, 30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 100],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-100, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [100, 0],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-40, 80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-80, 40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [40, 80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-80, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-40, -80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -100],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-120, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, -80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [80, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [80, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-120, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, 120],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [40, 120], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, -120],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-40, -120], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [80, -80],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-80, -80], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-80, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, 80], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, -140],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [0, 140], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-130, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-150, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-150, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-130, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [130, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [150, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [150, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [130, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-110, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [70, -110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, -110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-110, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [110, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [110, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [150, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [150, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -150], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -150],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-150, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-150, -30], "type": "HArmor1x1AngleBack", "dir": 0}], "name": "", "aiRules": []
}];
ais.all.DeltaSwarm = ["", "", "", "", "", "", "", {
    "parts": [{
        "pos": [0, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-50, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -30],
        "type": "VArmor1x1Corner2",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 5], ["Field # at priority #", 12, 4], ["@attackTypes enemy within #m", "Attack", 300], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [-30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, -20],
        "type": "VArmor1x1Corner3",
        "dir": 0
    }, {"pos": [-50, -20], "type": "VArmor1x1Corner3", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, -50],
        "type": "VArmor1x1Corner2",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine03", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 3], ["Field # at priority #", 3, 2], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "Less Arc", 200, 2000], ["@attackTypes enemy within #m", "Attack", 3000], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, 10], "type": "VArmor1x1Corner1", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 30], ["Field # at priority #", 5, 3], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Attack", 300], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "---", 2000], ["Goto @locationTypes", "Enemy Home Point"]]
}];
ais.all.Dodgey = [{
    "parts": [{"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [0, -30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -20], "type": "Engine04", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 3], ["Try to field # every # seconds", 3, 30]]
}, {
    "parts": [{"pos": [-80, -50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, -60], "type": "Mount30", "dir": 0}, {
        "pos": [0, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-30, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -80], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, -50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-40, -60],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [40, -60], "type": "PlasmaTurret", "dir": 0}, {"pos": [0, -40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Guard", 10000], ["Field # at priority #", 1, 1], ["Field # at priority #", 2, 3]]
}, "", "", "", "", "", "", "", ""];
ais.all.DoomTrain = ["", {
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [-10, 10], "type": "Wing1x1Notch", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 3], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 1400], ["@attackTypes enemy within #m", "Circle", 1600], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 2, 1], ["Field # at priority #", 2, 2], ["Field # at priority #", 1, 3], ["Field # at priority #", 1, 4], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [30, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["Stay in #m range of friendly units", 3500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "---", "---", 260], ["@attackTypes enemy within #m", "Bomb", 700], ["Stay in #m range of slot # units", 500, 3], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More expensive", 140, 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 2000], ["@attackTypes enemy within #m", "Backstab", 2000], ["@capTypes Command Points within #m", "Capture", 2500], ["Stay in #m range of slot # units", 600, 4], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 8, 2, 5, 3]]
}, {
    "parts": [{"pos": [-90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-30, -30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 110],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-50, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [80, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [70, 110], "type": "Battery1x1", "dir": 0}, {
        "pos": [40, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, 100], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-70, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-90, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [70, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [90, 110],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [80, 80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [70, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-70, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [40, -60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [80, -40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 20],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [80, 80], "type": "PDTurret", "dir": 0}, {
        "pos": [-80, 80],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [40, -60],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [40, 100], "type": "RingTurret", "dir": 0}, {"pos": [-40, 100], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Attack", 350], ["When #% of energy, @chargeTypes", 5, "Flee enemies"], ["@attackTypes enemy within #m", "Ram", 800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More Range", "Slower", 1100], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Range", "More DPS", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More Brawling Value", "Less expensive", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Range", "More DPS", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More Range", "Less DPS", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "---", "Less Brawling Value", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "---", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More expensive", "---", 1500], ["@attackTypes enemy within #m", "Ram", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 3000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "---", "More expensive", 3000], ["@attackTypes enemy within #m", "Backstab", 3000], ["Stay in #m range of slot # units", 400, 4], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Field # at priority #", 1, 1], ["Try to field # every # seconds", 1, 120], ["Field # at priority #", 1, 3]]
}, {
    "parts": [{"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [10, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, 10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -50], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [0, -20], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Ram", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 80, 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 100, 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 125, 800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Less Range", "Faster", 700], ["@capTypes Command Points within #m", "Capture", 1200], ["Stay in #m range of slot # units", 400, 4], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Carrier", 1600], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Battleship", 1600], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Cruiser", 1500], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Destroyer", 1500], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Brick", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Slower", "---", 1500], ["@attackTypes enemy within #m", "Flee", 1500], ["@capTypes Command Points within #m", "Capture", 4000], ["Stay in #m range of slot # units", 500, 4], ["Try to field # every # seconds", 2, 44], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 1]]
}, {
    "parts": [{"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [10, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, -30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, -50], "type": "UArmor1x1", "dir": 0}, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Attack", 360], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "More Range", 1200], ["@capTypes Command Points within #m", "Capture", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 3000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "---", 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 4], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 4], ["Field # for # of ship in slot # at priority #", 2, 2, 5, 3]]
}, {
    "parts": [{"pos": [-20, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, 50], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-20, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 29], ["@attackTypes enemy within #m", "Ram", 500], ["@attackTypes enemy @unitTypes within #m", "Ram", "Carrier", 1000], ["@attackTypes enemy @unitTypes within #m", "Ram", "Battleship", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Faster", "More DPS", 600], ["@attackTypes enemy @unitTypes within #m", "Ram", "Cruiser", 1000], ["@attackTypes enemy @unitTypes within #m", "Ram", "Destroyer", 1000], ["@attackTypes enemy within #m", "Ram", 750], ["@capTypes Command Points within #m", "Capture", 2000], ["Stay in #m range of slot # units", 500, 4], ["Field # for # of ship in slot # at priority #", 3, 2, 5, 3]]
}, {
    "parts": [{"pos": [-40, 130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-30, 150],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, -30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-80, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-90, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-90, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 110], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {"pos": [40, 0], "type": "Mount30", "dir": 0}, {
        "pos": [0, 150],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 150], "type": "HArmor2x1", "dir": 0}, {
        "pos": [60, 130],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [20, 130],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [40, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [80, 80], "type": "Mount30", "dir": 0}, {
        "pos": [90, 120],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [80, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [70, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, -60], "type": "Mount30", "dir": 0}, {
        "pos": [70, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -70], "type": "Engine02", "dir": 0}, {
        "pos": [80, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-10, 130], "type": "Battery1x1", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-40, 100], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 120], "type": "Mount30", "dir": 0}, {
        "pos": [-50, 150],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, 20], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [40, -60], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [40, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "TorpTurret", "dir": 0}, {
        "pos": [-80, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 100],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [0, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [-80, 80],
        "type": "EMPGun",
        "dir": 0
    }, {"pos": [-80, 120], "type": "EMPGun", "dir": 0}, {
        "pos": [40, 100],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [80, 80], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 75], ["@attackTypes enemy within #m", "Ram", 350], ["@attackTypes enemy within #m", "Ram", 850], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Range", "More DPS", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More Brawling Value", "Less expensive", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Range", "More Brawling Value", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More Range", "Less DPS", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less Brawling Value", "---", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Weaker", 1500], ["@attackTypes enemy within #m", "Ram", 1500], ["@capTypes Command Points within #m", "Capture", 500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 3000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "More expensive", "---", 3000], ["@attackTypes enemy within #m", "Backstab", 3000], ["Stay in #m range of slot # units", 400, 4], ["@attackTypes enemy within #m", "Attack", 6000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 3]]
}, "", ""];
ais.all.Dreadnaught = [{
    "parts": [{"pos": [30, -130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [90, -80],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-60, -160], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [60, -160],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-90, -150], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [90, -150],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [90, -110], "type": "HArmor1x1", "dir": 0}, {
        "pos": [90, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, -110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-90, -130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-40, 140],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, 160], "type": "Mount90", "dir": 0}, {
        "pos": [40, 140],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [70, 100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, 100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [40, 60], "type": "Mount180", "dir": 0}, {
        "pos": [70, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, -170], "type": "Engine02", "dir": 0}, {
        "pos": [90, -130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-60, -130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [60, -130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-30, -170], "type": "Engine02", "dir": 0}, {
        "pos": [-90, 70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, 180], "type": "Wing1x2", "dir": 0}, {
        "pos": [70, 180],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, 70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, -150],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-90, 110], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-10, -150],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-90, 90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [90, 110],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [90, 90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 180],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 180], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, -100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, -100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 0], "type": "Mount180", "dir": 0}, {
        "pos": [20, 0],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 100], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 100], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-60, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [60, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-60, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [60, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 140],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [70, 140], "type": "Reactor1x2", "dir": 0}, {
        "pos": [0, 190],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, -80], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [0, -120],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 140], "type": "TorpTurret", "dir": 0}, {
        "pos": [0, 160],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 140], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 60], "type": "TorpTurret", "dir": 0}, {
        "pos": [-20, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [20, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, -60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, -60], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More Range", 1000, 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "No PD", "Weaker", 1000], ["When Shields down to #%, flee", 10], ["@attackTypes enemy within #m", "Attack", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 1], ["Field # at priority #", 3, 3]]
}, {
    "parts": [{"pos": [0, 100], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 170], "type": "HArmor2x1", "dir": 0}, {
        "pos": [60, 170],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-40, 140], "type": "Mount90", "dir": 0}, {
        "pos": [-30, 170],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, 130], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, 170],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, 140], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, 130],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-70, 140], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-60, 170], "type": "Wing2x1", "dir": 0}, {
        "pos": [-60, -90],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [60, -90], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-90, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [60, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [90, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-60, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-90, -80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, -80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-60, -120],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [60, -120], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-90, -110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-90, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-20, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 140], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -120],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, -60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, -60],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-40, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [20, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-60, 60],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [40, 140], "type": "Mount90", "dir": 0}, {
        "pos": [60, 60],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [80, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, 100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-90, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, -90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-30, -130], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 140],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, -60], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, -60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, -60], "type": "TorpTurret", "dir": 0}, {
        "pos": [-60, 60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 140], "type": "TorpTurret", "dir": 0}, {
        "pos": [60, 60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 500], ["When Shields down to #%, flee", 10], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less HP", 100, 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More Range", "No PD", 1500], ["Field # at priority #", 1, 1], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 3, 3]]
}, {
    "parts": [{"pos": [-20, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Engine03", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-70, -30], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [10, -30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [-20, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 1000], ["@attackTypes enemy within #m", "Stay at range", 600], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Range", 900], ["@capTypes Command Points within #m", "Spread to", 2000], ["When #% of energy, @chargeTypes", 50, "Rest"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 2000], ["Field # at priority #", 3, 2], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 3]]
}, "", "", "", "", "", "", ""];
ais.all.Electro = [{
    "parts": [{"pos": [110, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, -80], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [100, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [70, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [80, -20],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-110, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-100, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-100, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [110, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [100, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, -120],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [40, -120], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-40, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, 80], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [30, 110],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, 110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-70, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [0, 110], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -140],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-70, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "EMPGun", "dir": 0}, {"pos": [0, -60], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 2, 1], ["Field # when money over # at priority #", 1, 900, 1]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 30], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [30, -10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine03", "dir": 0}, {"pos": [0, 0], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage @bulletTypes shots", 20, "Any"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 20], ["Field # at start", 2]]
}, {"parts": [], "name": "", "aiRules": []}, "", "", "", "", "", "", ""];
ais.all.Ficon = [{
    "parts": [{"pos": [-40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-60, 70],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [60, 70], "type": "Wing2x1", "dir": 0}, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-90, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [70, -50], "type": "Engine01", "dir": 0}, {
        "pos": [90, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [80, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-70, -50], "type": "Engine01", "dir": 0}, {
        "pos": [0, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 90],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, -100], "type": "Mount360Micro", "dir": 0}, {
        "pos": [20, -100],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [40, -60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-40, -60], "type": "WavePushTurret", "dir": 0}, {
        "pos": [40, -60],
        "type": "WavePushTurret",
        "dir": 0
    }, {"pos": [-20, -100], "type": "AutoTurret", "dir": 0}, {
        "pos": [20, -100],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Try to field # every # seconds", 2, 30], ["Avoid over #damage shots", 20], ["Stay in #m range of slot # units", 1000, 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "less range", "slower", 1200], ["@capTypes command points within #m", "Capture", 10000], ["Field # at priority #", 1, 1]]
}, {
    "parts": [{"pos": [-70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-40, 0], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [20, 0],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [20, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [50, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-10, 30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [10, 30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, -70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "HArmor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 15], ["@capTypes command points within #m", "Guard", 10000], ["Field # for # of @needTypes at priority #", 1, 2, "fighter counter need", 3]]
}, {
    "parts": [{"pos": [10, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, 0], "type": "VArmor1x2SideBarFilled", "dir": 0}, {
        "pos": [30, 0],
        "type": "VArmor1x2SideBarFilled",
        "dir": 0
    }],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 15], ["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 15], ["Field # at start", 3], ["@capTypes command points within #m", "Spread to", 10000]]
}, "", "", "", "", "", "", ""];
ais.all.Fighter = [{"parts": [], "name": "", "aiRules": []}, "", "", "", "", "", "", {
    "parts": [{
        "pos": [0, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 4], ["Try to field # every # seconds", 3, 30], ["When #% of energy, @chargeTypes", 10, "Rest"], ["@attackTypes enemy within #m", "Run-by", 275], ["Avoid everything"], ["@capTypes Command Points within #m", "Guard", 10000]]
}, {
    "parts": [{"pos": [-10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount90", "dir": 0}, {
        "pos": [10, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [50, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -40], "type": "Mount90", "dir": 0}, {
        "pos": [-20, 0],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 0], "type": "LightBeamTurret", "dir": 0}, {"pos": [0, -40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 3], ["Try to field # every # seconds", 3, 30], ["When #% of energy, @chargeTypes", 10, "Rest"], ["@attackTypes enemy within #m", "Ram", 1200], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [-50, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine04", "dir": 0}, {
        "pos": [30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 4], ["Try to field # every # seconds", 3, 30], ["When #% of energy, @chargeTypes", 10, "Rest"], ["@attackTypes enemy within #m", "Attack", 300], ["@attackTypes enemy within #m", "Circle", 500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "More Brawling Value", 1000], ["Stay in #m range of slot # units", 500, 10], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less HP", 40, 1000], ["@capTypes Command Points within #m", "Capture", 10000]]
}];
ais.all.FighterBomber = [{
    "parts": [{"pos": [0, 20], "type": "Mount180", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [0, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy within #m", "Stay at range", 400], ["@attackTypes enemy within #m", "Circle", 700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Range", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 2000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 2, 1], ["Field # at priority #", 100, 4], ["Field # at start", 7]]
}, {
    "parts": [{"pos": [0, 20], "type": "Mount180", "dir": 0}, {
        "pos": [10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, -10], "type": "OverKillAi", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, 20], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 30, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Bomb", 500], ["@attackTypes enemy within #m", "Attack", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 100, 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1], ["Field # at priority #", 2, 3], ["Field # at start", 1]]
}, "", "", "", "", "", "", "", {
    "parts": [{"pos": [0, 80], "type": "Mount90", "dir": 0}, {
        "pos": [60, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 20],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [40, 20], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, 60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 110], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [-40, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-60, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [70, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, 10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-70, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-30, 110],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, 90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 90], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less HP", "Weaker", 500], ["Avoid everything"], ["Avoid over #damage shots", 20], ["Find units that are out of energy"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 2]]
}];
ais.all.FireFly = [{
    "parts": [{"pos": [0, -20], "type": "Engine07", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, -20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 200], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Slower", "Less Brawling Value", 500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Less HP", 100, 500], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 2, 35]]
}, {
    "parts": [{"pos": [0, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, 0], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-40, 30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 30], "type": "Reactor2x1", "dir": 0}, {"pos": [-70, 10], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1400, 2], ["Stayaway in #m range from slot # units", 550, 2], ["Stay in #m range of slot # units", 1400, 1], ["Stay in #m range of slot # units", 750, 5], ["Find units that are out of energy"], ["Field # for # of ship in slot # at priority #", 1, 1, 3, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 4, 1], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 1]]
}, {
    "parts": [{"pos": [-20, 20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [20, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, -20],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-20, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [20, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Ram", 300], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Less Brawling Value", 1000], ["Stay in #m range of slot # units", 400, 5], ["Field # at start", 1], ["Try to field # every # seconds", 1, 45], ["Field # when money over # at priority #", 1, 500, 1]]
}, {
    "parts": [{"pos": [0, -40], "type": "Engine07", "dir": 0}, {
        "pos": [-50, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount270", "dir": 0}, {
        "pos": [20, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [50, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-30, -60], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "More HP", 2000], ["Stay in #m range of slot # units", 300, 5], ["Field # at start", 1], ["Try to field # every # seconds", 1, 34], ["Stay in #m range of slot # units", 800, 2], ["@attackTypes enemy within #m", "Flee", 1000]]
}, {
    "parts": [{"pos": [-60, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-20, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-20, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-60, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-90, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-90, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [20, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [20, 0], "type": "HArmor2x2", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 800, 2], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1]]
}, "", "", "", "", ""];
ais.all.FireShower = [{
    "parts": [{"pos": [20, 20], "type": "Mount90", "dir": 0}, {
        "pos": [10, 50],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-20, 30], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [50, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-10, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [20, -20],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [20, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 40], ["@attackTypes enemy within #m", "Ram", 450], ["@capTypes Command Points within #m", "Guard", 10000], ["Try to field # every # seconds", 1, 81], ["Field # at priority #", 1, 0], ["Field # at priority #", 2, 7], ["Field # at priority #", 3, 9]]
}, {
    "parts": [{"pos": [10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, -20], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Stripe1x1Corner",
        "dir": 1
    }, {"pos": [-30, -20], "type": "Stripe1x2", "dir": 2}, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 3, 99], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["Avoid over #damage shots", 29], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Slower", "Less Range", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "Slower", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Less DPS", 1000], ["@attackTypes enemy within #m", "Attack", 500], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 7], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [20, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, -20], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-50, -10],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [50, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [20, 20], "type": "EMPGun", "dir": 0}, {"pos": [-20, 20], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 80], ["When #% of energy, @chargeTypes", 63, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More expensive", "Cloaked", 700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "---", 500], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 100, 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "More expensive", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Less DPS", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "More expensive", 3000], ["@capTypes Command Points within #m", "Protect", 2000], ["When #% of energy, @chargeTypes", 85, "Find recharger"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of @needTypes at priority #", 1, 4, "Cloak Counter Need", 5], ["Field # at priority #", 1, 4], ["Field # when money over # at priority #", 1, 1000, 1], ["Field # at priority #", 2, 6]]
}, {
    "parts": [{"pos": [-30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-20, -60], "type": "CloakGenerator", "dir": 0}, {
        "pos": [20, -60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Engine01", "dir": 0}, {
        "pos": [70, 0],
        "type": "Reactor1x2",
        "dir": 2
    }, {"pos": [-50, 50], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-70, 30],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [50, -50], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-50, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "TeslaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Slower", "More DPS", 500], ["Avoid over #damage shots", 50], ["Stay in #m range of slot # units", 1900, 10], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "More expensive", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 230, 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Faster", 150, 1000], ["@capTypes Command Points within #m", "Protect", 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 800, 2500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Faster", 230, 2500], ["Stay in #m range of slot # units", -100, 10], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 4000], ["Field # at priority #", 1, 3], ["Field # at priority #", 3, 7], ["Field # for # of @needTypes at priority #", 2, 3, "Fighter Counter Need", 2]]
}, {
    "parts": [{"pos": [-40, -60], "type": "Mount30", "dir": 0}, {
        "pos": [30, 80],
        "type": "Battery2x1",
        "dir": 3
    }, {"pos": [40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine01", "dir": 0}, {
        "pos": [30, 50],
        "type": "OverKillAi",
        "dir": 0
    }, {"pos": [0, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 20], "type": "Mount30", "dir": 0}, {
        "pos": [0, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [-30, 50],
        "type": "OverKillAi",
        "dir": 0
    }, {"pos": [70, -30], "type": "Engine01", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Battery2x1",
        "dir": 3
    }, {"pos": [0, 80], "type": "StasisField", "dir": 0}, {
        "pos": [50, -50],
        "type": "Wing1x1Angle",
        "dir": 3
    }, {"pos": [-90, -20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-60, 60],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 20], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [60, 60],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, 20], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [90, -20],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-70, -30], "type": "Engine01", "dir": 0}, {
        "pos": [0, -80],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-40, -60], "type": "WavePullTurret", "dir": 0}, {
        "pos": [0, -80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, 20], "type": "BombGun", "dir": 0}, {
        "pos": [0, -40],
        "type": "BombGun",
        "dir": 0
    }, {"pos": [40, 20], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 32, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "Less Arc", 50, 500], ["Avoid over #damage shots", 140], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More HP", 1100, 1200], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More HP", 600, 1200], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More HP", 400, 1200], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["Avoid over #damage shots", 40], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More HP", 1100, 3000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 110, 2300], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More HP", 600, 3200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Run-by", "Cloaked", "Slower", 3000], ["Stay in #m range of slot # units", 0, 10], ["When #% of energy, @chargeTypes", 90, "Find recharger"], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [-20, -40], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-40, 40],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [0, 40], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Reactor2x2",
        "dir": 3
    }, {"pos": [20, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, 40],
        "type": "Reactor2x2",
        "dir": 3
    }, {"pos": [-50, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, 10], "type": "Wing1x1Angle", "dir": 3}, {
        "pos": [50, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [20, -40], "type": "EnergyTransfer", "dir": 0}],
    "name": "support1",
    "aiRules": [["Stay in #m range of slot # units", 700, 10], ["Avoid over #damage shots", 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More DPS", "More expensive", 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 700, 2000], ["Stay in #m range of slot # units", 0, 10], ["Find units that are out of energy"], ["Goto @locationTypes", "Friendly Home Point"], ["Field # at priority #", 1, 9]]
}, {
    "parts": [{"pos": [-50, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "StasisField", "dir": 0}, {
        "pos": [-120, -10],
        "type": "Wing1x2",
        "dir": 1
    }, {"pos": [-90, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [120, -10],
        "type": "Wing1x2",
        "dir": 3
    }, {"pos": [30, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-10, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [10, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-10, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 30], "type": "HArmor1x1Angle", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "More DPS", 30, 1500], ["Avoid over #damage shots", 100], ["When Shields down to #%, flee", 35], ["When #% of energy, @chargeTypes", 90, "Find recharger"], ["Stay in #m range of slot # units", 800, 9], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Wiggle", "More expensive", "---", 2200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More expensive", "---", 10000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 300, 10000], ["Field # at priority #", 1, 6]]
}, {
    "parts": [{"pos": [50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [50, 50],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, 50], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [70, -60],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [-70, -60], "type": "VArmor1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [10, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [80, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-80, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, 0],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [40, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 40], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More DPS", 40, 1500], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "No PD", "Slower", 1800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "No PD", "---", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 140, 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 200, 2400], ["Stay in #m range of slot # units", 0, 10], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 6], ["Field # at priority #", 2, 8]]
}, {
    "parts": [{"pos": [0, 30], "type": "Reactor2x1", "dir": 2}, {
        "pos": [80, -20],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, -80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, -20],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-80, -60], "type": "Wing2x2", "dir": 1}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [80, -60], "type": "Wing2x2", "dir": 3}, {
        "pos": [-40, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, -20], "type": "PDTurret", "dir": 0}, {"pos": [0, 0], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 350, 10], ["Avoid over #damage shots", 45], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 800, 1850], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "More expensive", 1850], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More DPS", "---", 1850], ["Stay in #m range of slot # units", -500, 10], ["Field # at priority #", 1, 2], ["Goto @locationTypes", "Friendly Spawn"]]
}, {
    "parts": [{"pos": [-80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [150, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-120, 40],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [-160, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [120, 40],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [160, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [160, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount10Range", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-80, 100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [80, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-120, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-120, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-80, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [120, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-110, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-170, -20], "type": "Wing2x1", "dir": 1}, {
        "pos": [120, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [150, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-150, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [170, -20], "type": "Wing2x1", "dir": 3}, {
        "pos": [-100, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [80, -140], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [100, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [40, -140], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, -140],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, -140], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [120, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-120, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, 100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-70, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [70, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [-40, 40], "type": "Mount10Range", "dir": 0}, {
        "pos": [-150, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-160, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -140],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 120], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, -60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount90", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [0, -100], "type": "Mount30", "dir": 0}, {
        "pos": [-70, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-40, 160], "type": "Wing2x2", "dir": 0}, {
        "pos": [70, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, 160], "type": "Wing2x2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [80, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -170], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-30, -170],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -170], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-120, -60],
        "type": "SymbolDecal3",
        "dir": 3
    }, {"pos": [40, -140], "type": "SymbolDecal3", "dir": 0}, {
        "pos": [-120, 100],
        "type": "SymbolDecal2",
        "dir": 1
    }, {"pos": [-80, -60], "type": "SymbolDecal3", "dir": 3}, {
        "pos": [80, -140],
        "type": "SymbolDecal3",
        "dir": 1
    }, {"pos": [-120, -20], "type": "SymbolDecal3", "dir": 3}, {
        "pos": [80, -60],
        "type": "SymbolDecal3",
        "dir": 1
    }, {"pos": [120, 100], "type": "SymbolDecal2", "dir": 3}, {
        "pos": [-80, 100],
        "type": "SymbolDecal2",
        "dir": 1
    }, {"pos": [-40, -140], "type": "SymbolDecal3", "dir": 0}, {
        "pos": [-80, -100],
        "type": "SymbolDecal3",
        "dir": 3
    }, {"pos": [40, 100], "type": "SymbolDecal3", "dir": 1}, {
        "pos": [80, 100],
        "type": "SymbolDecal2",
        "dir": 3
    }, {"pos": [-80, -140], "type": "SymbolDecal3", "dir": 3}, {
        "pos": [80, -100],
        "type": "SymbolDecal3",
        "dir": 1
    }, {"pos": [120, -60], "type": "SymbolDecal3", "dir": 1}, {
        "pos": [120, -20],
        "type": "SymbolDecal3",
        "dir": 1
    }, {"pos": [-40, 100], "type": "SymbolDecal3", "dir": 3}, {
        "pos": [-40, -100],
        "type": "SymbolDecal3",
        "dir": 0
    }, {"pos": [40, -100], "type": "SymbolDecal3", "dir": 0}, {
        "pos": [0, -140],
        "type": "SymbolDecal3",
        "dir": 0
    }, {"pos": [40, -40], "type": "WavePushTurret", "dir": 0}, {
        "pos": [-40, -40],
        "type": "WavePushTurret",
        "dir": 0
    }, {"pos": [0, -100], "type": "WavePushTurret", "dir": 0}, {
        "pos": [120, 40],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [-120, 40], "type": "TeslaTurret", "dir": 0}, {
        "pos": [0, 120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "HeavyPDTurret", "dir": 0}, {
        "pos": [40, 40],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [-40, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More DPS", 60, 1300], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 400, 1900], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More DPS", 35, 1800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 800, 4000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More DPS", 10, 1260], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 650, 5000], ["@capTypes Command Points within #m", "Protect", 1800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Not Cloaked", "---", 1650], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 800, 10000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1]]
}];
ais.all.FlamethrowerArmadillo = [{
    "parts": [{"pos": [-30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-50, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-40, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [40, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [40, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount90", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [50, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 40], "type": "FlameTurret", "dir": 0}, {"pos": [0, 0], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 3], ["@attackTypes enemy within #m", "Ram", 340], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 3, 30]]
}, {
    "parts": [{"pos": [40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [40, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [70, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-70, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-90, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {"pos": [0, 20], "type": "FlameTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More HP", 1000, 3000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More HP", 100, 1300], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-70, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [40, 0], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [-10, -70],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-40, -40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, -40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-50, -80],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-30, -80], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [30, -80],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [50, -80], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [10, -60],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["Field # at start", 4], ["Try to field # every # seconds", 2, 30], ["@capTypes Command Points within #m", "Protect", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Brawling Value", 1500], ["Goto @locationTypes", "Friendly Army Middle"]]
}, {
    "parts": [{"pos": [40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [-40, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [40, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-40, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [10, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, -10], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, 0], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More HP", "More expensive", 10000], ["Goto @locationTypes", "Enemy Spawn"], ["Field # for # of @needTypes at priority #", 1, 2, "Fighter Counter Need", 3]]
}, {"parts": [], "name": "", "aiRules": []}, "", {
    "parts": [{
        "pos": [-30, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Engine01", "dir": 0}, {
        "pos": [30, -30],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}], "name": "", "aiRules": []
}, "", "", ""];
ais.all.Flydo = [{
    "parts": [{"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [30, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [30, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {"pos": [-30, 40], "type": "HArmor1x2", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 2, 2, 1], ["Find units that are out of energy"], ["Stay in #m range of slot # units", 500, 2]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [50, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [20, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-20, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 2], ["Try to field # every # seconds", 1, 30], ["@attackTypes enemy within #m", "Attack", 2700], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-40, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, -50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 0], "type": "LightBeamTurret", "dir": 0}, {"pos": [40, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 2, 1], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["@capTypes Command Points within #m", "Protect", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Goto @locationTypes", "Friendly Army Middle"]]
}, "", "", "", "", "", "", ""];
ais.all.Furia = [{
    "parts": [{"pos": [-70, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-100, 20],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [70, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [70, -20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -80],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [40, -80], "type": "Engine07", "dir": 0}, {
        "pos": [0, -60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [40, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-100, -20], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [-80, -60],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, -60], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [100, -20],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [100, 20], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [-90, -100],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, -100], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [70, -100],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [90, -100], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [0, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -40], "type": "Battery2x2", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 70], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [10, -140], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-10, -140],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [0, -100], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-10, 100],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [10, 100], "type": "VArmor1x2Corner4", "dir": 0}, {"pos": [0, 20], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["@attackTypes enemy within #m", "Kite", 1000], ["Stay in #m range of slot # units", 150, 5], ["When #% of energy, @chargeTypes", 80, "Find recharger"], ["Field # at start", 1], ["Try to field # every # seconds", 2, 20], ["@capTypes command points within #m", "Guard", 10000]]
}, {
    "parts": [{"pos": [100, 80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [20, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [100, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-100, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [20, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-140, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [80, 0], "type": "Mount30", "dir": 0}, {
        "pos": [170, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [140, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-170, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [170, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [-140, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-170, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-100, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-60, 80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [60, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-20, 80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [140, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-120, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [120, 0], "type": "Mount30", "dir": 0}, {"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-100, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-60, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [60, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [100, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [140, -40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [60, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-60, -40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-140, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-170, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [170, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-150, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [150, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-120, 0],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [-80, 0], "type": "ArtilleryTurret", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "ArtilleryTurret", "dir": 0}, {
        "pos": [40, 0],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [80, 0], "type": "ArtilleryTurret", "dir": 0}, {"pos": [120, 0], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Try to field # every # seconds", 1, 60], ["When #% of energy, @chargeTypes", 20, "find recharger"], ["Stay in #m range of friendly units", 1000], ["@attackTypes enemy within #m", "Attack", 3000], ["Goto @locationTypes", "Enemy Home Point"], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3]]
}, {
    "parts": [{"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount90", "dir": 0}, {
        "pos": [0, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Mount30", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [30, -10], "type": "Solar1x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TorpTurret", "dir": 0}, {"pos": [40, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage @bulletTypes shots", 20, "PD immune"], ["Find units that are out of energy"], ["Stay in #m range of slot # units", 600, 1], ["Stayaway in #m range from slot # units", 400, 3], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 2], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 1, 1, 2, 2], ["Try to field # every # seconds", 1, 50]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [0, -30],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine03", "dir": 0}, {
        "pos": [30, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Battery1x2", "dir": 0}, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 3, 90], ["Avoid over #damage shots", 30], ["@capTypes command points within #m", "Capture", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "less brawling value", 400], ["When #% of energy, @chargeTypes", 10, "find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "stronger", "more brawling value", 3000], ["@capTypes command points within #m", "Spread to", 10000], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-50, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [50, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 80], "type": "Mount30", "dir": 0}, {"pos": [-40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [80, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-10, 90], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, 90],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-40, 80], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 60],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 80], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "LightBeamTurret", "dir": 0}, {"pos": [-40, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "slower", "more HP", 5000], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 1], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 1], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 1], ["Goto @locationTypes", "friendly army middle"]]
}, "", "", "", "", ""];
ais.all.Keystone = [{
    "parts": [{"pos": [50, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, -30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-50, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 50],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [30, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [50, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [0, -70],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-20, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-30, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "PDTurret", "dir": 0}, {
        "pos": [-20, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [20, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Ram", 300], ["Avoid over #damage shots", 160], ["@attackTypes enemy within #m", "Attack", 600], ["Avoid over #damage shots", 59], ["@attackTypes enemy within #m", "Attack", 800], ["Avoid over #damage shots", 50], ["@attackTypes enemy within #m", "Attack", 1000], ["@capTypes Command Points within #m", "Capture", 1000], ["Stay in #m range of slot # units", 100, 1], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 10, 10], ["Field # for # of ship in slot # at priority #", 1, 1, 3, 3], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 3], ["Field # for # of ship in slot # at priority #", 1, 9, 3, 1]]
}, {
    "parts": [{"pos": [-10, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [10, -30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Wing1x1Notch", "dir": 0}, {"pos": [-10, -40], "type": "Engine03", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Less Range", 500, 750], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Less Range", 760, 850], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Less Range", 1001, 1100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Less Range", 1400, 1450], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 1400, 1500], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 750], ["@attackTypes enemy within #m", "Circle", 1800], ["@attackTypes enemy within #m", "Flee", 1300], ["@attackTypes enemy within #m", "Flee", 750], ["@capTypes Command Points within #m", "Spread to", 90000], ["Try to field # every # seconds", 1, 30], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [0, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, 20],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-10, -40], "type": "Engine04", "dir": 0}, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Ram", 150], ["@attackTypes enemy within #m", "Backstab", 250], ["@attackTypes enemy within #m", "Attack", 550], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 1300], ["@capTypes Command Points within #m", "Capture", 2000], ["Stay in #m range of slot # units", 500, 7], ["Stay in #m range of slot # units", 100, 9], ["Stay in #m range of slot # units", 100, 10], ["@capTypes Command Points within #m", "Spread to", 5000], ["Field # for # of ship in slot # at priority #", 30, 1, 7, 2], ["Field # for # of ship in slot # at priority #", 2, 1, 10, 2]]
}, {
    "parts": [{"pos": [-30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [20, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [20, -60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, -60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [80, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [80, -60], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-110, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [100, -20], "type": "Mount90", "dir": 0}, {
        "pos": [80, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [110, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [110, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-20, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-110, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-70, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [90, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, 50], "type": "Battery1x1", "dir": 0}, {
        "pos": [50, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-90, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-40, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 50], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount30", "dir": 0}, {
        "pos": [40, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, -60], "type": "DamageMod", "dir": 0}, {
        "pos": [-100, -20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [100, -20], "type": "PDTurret", "dir": 0}, {
        "pos": [-100, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [80, -60], "type": "TorpTurret", "dir": 0}, {
        "pos": [-80, 20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, 20], "type": "TorpTurret", "dir": 0}, {
        "pos": [-80, -60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "TorpTurret", "dir": 0}, {"pos": [0, -20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 150], ["When #% of energy, @chargeTypes", 10, "Rest"], ["@attackTypes enemy within #m", "Ram", 450], ["@attackTypes enemy @unitTypes within #m", "Ram", "Carrier", 630], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less Brawling Value", "---", 630], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less HP", "---", 630], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less DPS", "---", 630], ["@attackTypes enemy within #m", "Ram", 730], ["Avoid over #damage shots", 59], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Less Brawling Value", "---", 850], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 1600], ["@capTypes Command Points within #m", "Spread to", 90000], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 4], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 2, 1, 7, 4], ["Field # at priority #", 1, 10]]
}, {
    "parts": [{"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-50, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [20, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-20, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount270", "dir": 0}, {
        "pos": [20, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [30, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-80, -60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -20], "type": "MissileTurret", "dir": 0}, {"pos": [-80, -60], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 5, "Flee enemies"], ["Avoid over #damage shots", 150], ["@attackTypes enemy within #m", "Attack", 270], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More DPS", 10, 1600], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "---", 1600], ["Avoid over #damage shots", 20], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 1800], ["Stay in #m range of slot # units", 500, 7], ["@capTypes Command Points within #m", "Spread to", 90000], ["Field # for # of ship in slot # at priority #", 1, 4, 1, 4], ["Field # for # of ship in slot # at priority #", 1, 6, 1, 6], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 5], ["Field # at start", 1], ["Field # for # of ship in slot # at priority #", 1, 2, 6, 4], ["Field # at priority #", 1, 9]]
}, {
    "parts": [{"pos": [-50, -70], "type": "Engine01", "dir": 0}, {
        "pos": [-70, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [20, -60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, -60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [50, 20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount360", "dir": 0}, {
        "pos": [0, 60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-30, 60],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-20, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-50, 20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-50, 60], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-70, -20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-90, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-90, -70],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [70, -70], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-20, -90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [20, -90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-20, -120], "type": "Mount360", "dir": 0}, {
        "pos": [20, -120],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-70, 20], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-90, 20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [30, 60], "type": "Battery1x2", "dir": 0}, {
        "pos": [50, 60],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-20, -120], "type": "PDTurret", "dir": 0}, {
        "pos": [20, -120],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 10, "Flee enemies"], ["@attackTypes enemy within #m", "Ram", 280], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "---", "---", 1300], ["Avoid over #damage shots", 150], ["Avoid over #damage shots", 50], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Carrier", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Battleship", 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 100, 2000], ["Stay in #m range of slot # units", 300, 7], ["Stay in #m range of slot # units", 300, 5], ["Stay in #m range of slot # units", 300, 4], ["@capTypes Command Points within #m", "Spread to", 90000], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 3], ["Field # for # of ship in slot # at priority #", 2, 1, 7, 5], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 6], ["Field # for # of ship in slot # at priority #", 1, 2, 10, 2]]
}, {
    "parts": [{"pos": [-10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [80, 0],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [80, 80], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-80, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [80, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 120],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [40, 120], "type": "Wing2x2", "dir": 0}, {
        "pos": [70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 130], "type": "Battery2x1", "dir": 0}, {
        "pos": [-80, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [10, -50], "type": "Engine01", "dir": 0}, {
        "pos": [70, 120],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, 120], "type": "Wing1x2", "dir": 0}, {
        "pos": [-90, 110],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, 110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [50, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-50, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 0],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [80, 0], "type": "PDTurret", "dir": 0}, {"pos": [0, 60], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Flee enemies"], ["Avoid over #damage shots", 150], ["Avoid #dps danger areas", 60], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "---", 550], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Faster", "More DPS", 550], ["@attackTypes enemy @unitTypes within #m", "Attack", "Carrier", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Less Brawling Value", "Slower", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More Brawling Value", "No PD", 1300], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More Brawling Value", "Weaker", 1300], ["@capTypes Command Points within #m", "Capture", 1000], ["When #% of energy, @chargeTypes", 30, "Rest"], ["Stay in #m range of slot # units", 1000, 3], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "More Brawling Value", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Carrier", 5000], ["@capTypes Command Points within #m", "Spread to", 90000], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 4], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 5]]
}, {
    "parts": [{"pos": [-60, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-100, 20],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-60, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [60, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [60, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [50, -50], "type": "Engine01", "dir": 0}, {
        "pos": [30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine01", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [100, 20], "type": "Wing2x2", "dir": 0}, {
        "pos": [20, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [20, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-30, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-90, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [70, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [90, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-30, -60],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [30, -60], "type": "VArmor1x2End", "dir": 0}, {
        "pos": [-110, -20],
        "type": "VArmor1x2SideBarFilled",
        "dir": 0
    }, {"pos": [110, -20], "type": "VArmor1x2SideBarFilled", "dir": 0}, {
        "pos": [-20, -20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-60, 20], "type": "Mount90", "dir": 0}, {
        "pos": [60, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-20, -20], "type": "PDTurret", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-60, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, -20], "type": "LightBeamTurret", "dir": 0}, {"pos": [60, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 8, "Flee enemies"], ["@attackTypes enemy within #m", "Attack", 200], ["Avoid over #damage shots", 150], ["@attackTypes enemy @unitTypes within #m", "Ram", "Carrier", 450], ["@attackTypes enemy within #m", "Ram", 450], ["Avoid over #damage shots", 50], ["@capTypes Command Points within #m", "Capture", 500], ["@attackTypes enemy @unitTypes within #m", "Backstab", "Carrier", 1300], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "Less Brawling Value", 1300], ["When #% of energy, @chargeTypes", 35, "Rest"], ["Stay in #m range of slot # units", 100, 9], ["Stay in #m range of slot # units", 400, 4], ["@attackTypes enemy @unitTypes within #m", "Backstab", "Carrier", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "Less Brawling Value", 2000], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 120, 2000], ["@attackTypes enemy within #m", "Backstab", 2000], ["Stay in #m range of slot # units", 1000, 7], ["When #% of energy, @chargeTypes", 60, "Rest"], ["Goto @locationTypes", "Enemy Army Middle"], ["Goto @locationTypes", "Enemy Spawn"], ["Avoid over #damage shots", 20], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 3], ["Field # at start", 1], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 4]]
}, {
    "parts": [{"pos": [120, -80], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-110, -110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, 130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, -50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [80, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-60, 20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [60, 20], "type": "Mount360", "dir": 0}, {
        "pos": [30, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 100],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [50, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-40, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [80, 100],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-80, -70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-130, 70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [130, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-80, -90],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [80, -90], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [80, -70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-130, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-120, 120],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-120, 90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [110, -110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [120, 120], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [120, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-120, -80], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-120, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [120, -50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [130, 70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-110, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-20, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [20, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-80, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-100, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [80, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [100, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-110, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-110, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [110, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [110, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-80, 100],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -20], "type": "Battery2x2", "dir": 0}, {
        "pos": [0, 100],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-60, 20], "type": "AutoTurret", "dir": 0}, {"pos": [60, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 59], ["When #% of energy, @chargeTypes", 10, "Flee enemies"], ["@attackTypes enemy within #m", "Circle", 470], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "---", 1000], ["When #% of energy, @chargeTypes", 30, "Rest"], ["@capTypes Command Points within #m", "Capture", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 2, 10, 1]]
}, {
    "parts": [{"pos": [-90, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-60, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-60, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, -20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [10, -20], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-80, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [20, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-60, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [20, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-90, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [50, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [10, -70], "type": "Engine01", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-70, -70], "type": "Engine01", "dir": 0}, {
        "pos": [-90, -70],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-20, -60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-20, -60], "type": "PDTurret", "dir": 0}, {"pos": [-20, 40], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 50], ["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Flee enemies"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "---", "---", 1300], ["@attackTypes enemy within #m", "Attack", 2000], ["Stay in #m range of slot # units", 1700, 9], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 2, 9, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 3, 2], ["Field # for # of ship in slot # at priority #", 1, 4, 1, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3]]
}];
ais.all.Kornine = [{
    "parts": [{"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-60, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-80, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [80, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [60, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-70, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 60], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, -20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [-80, 0], "type": "HeavyPDTurret", "dir": 0}, {"pos": [80, 0], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 1], ["Stay in #m range of slot # units", 700, 2], ["@attackTypes enemy within #m", "Kite", 1000], ["Field # for # of ship in slot # at priority #", 2, 6, 2, 1]]
}, {
    "parts": [{"pos": [0, 60], "type": "Mount90", "dir": 0}, {
        "pos": [-30, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [20, 20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 60], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 350], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 1000], ["@attackTypes enemy within #m", "Attack", 600], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 2, 30], ["Field # at priority #", 1, 3], ["Field # at start", 4]]
}, {
    "parts": [{"pos": [10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, 0], "type": "Engine04", "dir": 0}, {
        "pos": [70, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -10], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -10],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, 50], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [70, 30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid #dps danger areas", 5], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "Weaker", 1000], ["@attackTypes enemy within #m", "Flee", 1000], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 1, 30], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-60, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [40, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [60, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [0, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-70, 20], "type": "Wing1x2", "dir": 0}, {"pos": [70, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [-40, 20], "type": "RingTurret", "dir": 0}, {"pos": [40, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 2], ["Stay in #m range of slot # units", 700, 1], ["@attackTypes enemy within #m", "Attack", 900], ["Try to field # every # seconds", 1, 35], ["Stay in #m range of slot # units", 300, 1]]
}, "", "", "", "", "", ""];
ais.all.LazerBlade = [{
    "parts": [{"pos": [-70, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-50, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 110],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-20, 80], "type": "Mount90", "dir": 0}, {
        "pos": [-50, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [60, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [50, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-60, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [20, 80], "type": "Mount90", "dir": 0}, {
        "pos": [50, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [20, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-30, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-20, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-110, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [130, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-130, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [70, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-10, -80], "type": "Engine04", "dir": 0}, {
        "pos": [10, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount270", "dir": 0}, {
        "pos": [-110, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-90, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [90, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [110, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-60, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-20, 80], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [20, 80],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [60, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 10, 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 100, 1000], ["@attackTypes enemy within #m", "Attack", 500], ["@capTypes Command Points within #m", "Capture", 10000]]
}, "", "", "", "", "", "", "", "", ""];
ais.all.Lazur = [{
    "parts": [{"pos": [-30, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [90, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-80, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -140], "type": "Engine07", "dir": 0}, {
        "pos": [0, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Mount90", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -100], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, -100],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [80, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, -100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, -100], "type": "Battery2x2", "dir": 0}, {
        "pos": [-160, -100],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [160, -100], "type": "Wing2x2", "dir": 0}, {
        "pos": [-110, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-120, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-120, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [120, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [120, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, -130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [80, -130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-70, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-90, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-80, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-60, 60], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 120], "type": "Mount30", "dir": 0}, {
        "pos": [40, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [60, 60], "type": "Mount30", "dir": 0}, {"pos": [80, 20], "type": "Mount30", "dir": 0}, {
        "pos": [0, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, -60], "type": "Battery2x2", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [40, -20], "type": "Battery2x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-130, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [130, -30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-40, -130], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, -130],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-20, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-80, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 20], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [40, 100],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [-40, 100], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [60, 60],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [-80, 20], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [-60, 60],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, 20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 120], "type": "HeavyPDTurret", "dir": 0}, {"pos": [0, -20], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 60], ["Field # at priority #", 1, 1]]
}, {
    "parts": [{"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, 20], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 1, 30]]
}, "", "", "", "", "", "", "", {
    "parts": [{"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-30, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, -30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [50, -30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, -20], "type": "EnergyTransfer", "dir": 0}, {"pos": [0, 20], "type": "Reactor2x2", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 5], ["Stay in #m range of slot # units", 500, 1]]
}];
ais.all.Liberty = ["", {
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, 10],
        "type": "Battery1x1",
        "dir": 0
    }],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 2000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 4, 2], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 4], ["Field # for # of ship in slot # at priority #", 4, 1, 8, 5], ["Field # at priority #", 1, 1]]
}, {
    "parts": [{"pos": [20, 0], "type": "Mount30", "dir": 0}, {
        "pos": [10, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-10, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-10, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [20, 0], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 400], ["Avoid over #damage shots", 22], ["Stay in #m range of slot # units", 1000, 4], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 800], ["@attackTypes enemy @unitTypes within #m", "Flee", "Carrier", 1000], ["@attackTypes enemy @unitTypes within #m", "Flee", "Battleship", 1000], ["@attackTypes enemy @unitTypes within #m", "Flee", "Cruiser", 1000], ["@attackTypes enemy @unitTypes within #m", "Flee", "Destroyer", 1000], ["@capTypes Command Points within #m", "Capture", 1000], ["Stay in #m range of slot # units", 500, 4], ["Stay in #m range of friendly units", 500], ["Goto @locationTypes", "Friendly Spawn"], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 1], ["Field # at priority #", 2, 2]]
}, {
    "parts": [{"pos": [-80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [110, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [110, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, -30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, -50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [110, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, -50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 100], "type": "Mount360", "dir": 0}, {
        "pos": [-40, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [40, -80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, -80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-110, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-60, 140], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-20, 140],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-20, 60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [80, 20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [60, 140], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, 30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, 30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-90, 100],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, 100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-90, -70], "type": "Engine02", "dir": 0}, {
        "pos": [70, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -70], "type": "Engine02", "dir": 0}, {
        "pos": [70, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-110, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -120],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -60], "type": "DamageMod", "dir": 0}, {
        "pos": [20, 140],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 100], "type": "TargetingMod", "dir": 0}, {
        "pos": [50, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [50, 70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, -120],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, -120], "type": "Mount90", "dir": 0}, {
        "pos": [40, -120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, -120], "type": "PDTurret", "dir": 0}, {
        "pos": [0, -120],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [0, 100], "type": "PlasmaTurret", "dir": 0}, {"pos": [0, -20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 500], ["@capTypes Command Points within #m", "Capture", 500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Carrier", 1200], ["@attackTypes enemy @unitTypes within #m", "Attack", "Battleship", 1200], ["@attackTypes enemy @unitTypes within #m", "Attack", "Cruiser", 1200], ["@attackTypes enemy @unitTypes within #m", "Attack", "Destroyer", 1200], ["Avoid over #damage shots", 59], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 3000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "---", "More expensive", 3000], ["@attackTypes enemy within #m", "Attack", 1200], ["Stay in #m range of slot # units", 400, 4], ["@capTypes Command Points within #m", "Capture", 2000], ["Goto @locationTypes", "Enemy Army Middle"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Field # at priority #", 1, 1], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-10, -30],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine03", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [10, 30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Wing1x1Notch", "dir": 0}, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "More Brawling Value", 1600], ["Stay in #m range of slot # units", 4000, 4], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less DPS", "Less Brawling Value", 1500], ["@attackTypes enemy within #m", "Flee", 1500], ["@capTypes Command Points within #m", "Capture", 1000], ["@capTypes Command Points within #m", "Protect", 4000], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 1], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-10, -30],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [10, -40], "type": "Engine03", "dir": 0}, {
        "pos": [20, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-10, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, -30], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [50, -30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["Stay in #m range of slot # units", 2600, 4], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "More expensive", 1200], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 1500], ["Stay in #m range of slot # units", 500, 6], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 1500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 1250], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1250], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "---", 1250], ["@capTypes Command Points within #m", "Capture", 1500], ["@capTypes Command Points within #m", "Protect", 2500], ["Stay in #m range of slot # units", 500, 4], ["Stay in #m range of slot # units", 500, 8], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 3, 2, 4, 2], ["Field # for # of ship in slot # at priority #", 2, 1, 4, 4], ["Field # for # of ship in slot # at priority #", 3, 1, 8, 4]]
}, {
    "parts": [{"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [10, -40], "type": "Engine03", "dir": 0}, {
        "pos": [20, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [-10, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [30, -30],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 21], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 100, 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 120, 1300], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 150, 1100], ["@attackTypes enemy within #m", "Flee", 1600], ["@capTypes Command Points within #m", "Capture", 2000], ["Stay in #m range of slot # units", 500, 4], ["Stay in #m range of slot # units", 500, 8], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 2]]
}, {
    "parts": [{"pos": [-30, -90], "type": "Engine02", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-50, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [50, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [20, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [20, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [30, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [60, -80], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-60, -80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [50, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, 90], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, 90],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [50, 90], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-50, 90],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [10, -50],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-10, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, -80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 300], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More DPS", "Less Range", 900], ["@capTypes Command Points within #m", "Capture", 500], ["Stay in #m range of slot # units", 700, 4], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 1700], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 1700], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 1700], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 1700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "---", 1700], ["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Capture", 2000], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 2], ["Field # at priority #", 1, 3], ["Field # at priority #", 3, 5]]
}, "", ""];
ais.all.LightShower = [{
    "parts": [{"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 0], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1400, 2], ["@attackTypes enemy within #m", "Kite", 2000], ["Field # at priority #", 1, 1], ["Avoid everything"], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -70], "type": "Reactor2x1", "dir": 0}, {"pos": [0, 0], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of friendly units", 500], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Kite", 1500], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 35]]
}, {
    "parts": [{"pos": [-10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [30, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-30, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {"pos": [0, 0], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 3, 1, 4, 1], ["Stay in #m range of slot # units", 800, 4], ["@attackTypes enemy within #m", "Attack", 1500], ["Stay in #m range of slot # units", 400, 4], ["Avoid everything"], ["Try to field # every # seconds", 1, 20], ["Goto @locationTypes", "Friendly Army Middle"]]
}, {
    "parts": [{"pos": [-50, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [80, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, 100],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 0], "type": "HeavyBeamTurret", "dir": 0}, {"pos": [0, 100], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1500, 1], ["Avoid everything"], ["Stay in #m range of slot # units", 1400, 2], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 1, 40]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [30, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [0, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 20], "type": "Mount30", "dir": 0}, {
        "pos": [10, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, 40], "type": "VArmor1x1Corner3", "dir": 0}, {
        "pos": [-40, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 1], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 1000], ["Avoid #dps danger areas", 5], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 25]]
}, "", "", "", "", ""];
ais.all.LongPoint = [{
    "parts": [{"pos": [40, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-70, 20], "type": "Wing1x2", "dir": 0}, {"pos": [0, 40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [70, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [70, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [50, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-70, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -60], "type": "Engine04", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [40, 100], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 120], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-10, -70],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [10, -70], "type": "Solar1x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "ArtilleryTurret", "dir": 0}, {"pos": [0, 40], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Stay in #m range of slot # units", 2500, 2], ["@attackTypes enemy within #m", "Attack", 10000], ["When #% of energy, @chargeTypes", 20, "Rest"], ["Field # for # of ship in slot # at priority #", 2, 1, 2, 2]]
}, {
    "parts": [{"pos": [-170, -110], "type": "Engine02", "dir": 0}, {
        "pos": [-80, 40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [80, 80], "type": "Mount30", "dir": 0}, {
        "pos": [120, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [120, 60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-120, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [80, 120], "type": "Wing2x2", "dir": 0}, {
        "pos": [-80, 120],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-80, 80], "type": "Mount30", "dir": 0}, {
        "pos": [-100, -60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-180, -60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [100, -60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [180, -60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [140, -10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-140, -10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-180, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-180, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-140, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [180, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [140, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-110, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-150, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [110, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 140],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [180, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-180, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [180, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [80, 10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [150, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-40, 140],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [80, 40], "type": "Battery2x2", "dir": 0}, {
        "pos": [110, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [170, -110], "type": "Engine02", "dir": 0}, {
        "pos": [-110, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-120, 60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-100, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [100, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 100], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount90", "dir": 0}, {
        "pos": [0, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 120], "type": "Mount30", "dir": 0}, {
        "pos": [0, 160],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-140, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [140, -40], "type": "Mount90", "dir": 0}, {
        "pos": [-40, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount30", "dir": 0}, {
        "pos": [0, -40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [140, -80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-140, -80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-30, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-150, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [150, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [180, 40], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [40, -20], "type": "PDTurret", "dir": 0}, {
        "pos": [-180, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-80, 80], "type": "ArtilleryTurret", "dir": 0}, {
        "pos": [140, -40],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [80, 80], "type": "ArtilleryTurret", "dir": 0}, {
        "pos": [0, 80],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [-140, -40], "type": "ArtilleryTurret", "dir": 0}, {"pos": [0, 120], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 30], ["Field # at start", 2], ["Field # at priority #", 2, 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "more brawling value", "less range", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "slower", "more range", 3000], ["Stay in #m range of friendly units", 500], ["@capTypes command points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [30, 10], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [10, 10],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-10, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [50, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [50, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 30],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-10, 0], "type": "Engine03", "dir": 0}, {
        "pos": [-10, 30],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "slower", 350], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "more range", "more brawling value", 2000], ["Field # at start", 2], ["Try to field # every # seconds", 3, 30], ["@capTypes command points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [70, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, 100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-80, 20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, 80],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-70, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 80], "type": "VArmor1x2", "dir": 0}, {
        "pos": [50, 80],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [-70, -20], "type": "VArmor1x2", "dir": 0}, {
        "pos": [70, -20],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [50, -40], "type": "VArmor1x2", "dir": 0}, {
        "pos": [-50, -40],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [0, -60], "type": "Solar2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "FlackTurret", "dir": 0}, {"pos": [40, 0], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Stay in #m range of slot # units", 300, 2], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "less expensive", 200, 900], ["Avoid everything"], ["Field # for # of @needTypes at priority #", 1, 3, "fighter counter need", 1]]
}, "", "", "", "", "", ""];
ais.all.MBT = [{
    "parts": [{"pos": [80, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [10, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [20, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, -60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount360", "dir": 0}, {
        "pos": [-40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [100, -40], "type": "Mount30", "dir": 0}, {
        "pos": [100, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-100, -40], "type": "Mount30", "dir": 0}, {
        "pos": [40, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-100, 80], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-70, 80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [160, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-160, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [30, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [20, -60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [160, 40], "type": "Wing2x2", "dir": 0}, {
        "pos": [-70, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-160, 40], "type": "Wing2x2", "dir": 0}, {
        "pos": [-30, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-80, 50], "type": "Battery2x1", "dir": 0}, {
        "pos": [80, 50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-10, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-80, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [70, 80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-130, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [130, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-100, -80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [100, -80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-160, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [160, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-100, 120],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [100, 120], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-140, -80],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [140, -80], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [0, -100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-30, -110], "type": "Engine02", "dir": 0}, {
        "pos": [30, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [80, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-80, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-20, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-120, 0], "type": "Mount90", "dir": 0}, {"pos": [120, 0], "type": "Mount90", "dir": 0}, {
        "pos": [0, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [50, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 80], "type": "PDTurret", "dir": 0}, {
        "pos": [-80, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [80, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [100, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-160, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-100, 80],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [100, 80], "type": "TorpTurret", "dir": 0}, {
        "pos": [-100, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [160, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [120, 0],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-120, 0], "type": "AutoTurret", "dir": 0}, {"pos": [0, -20], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Ram", 300], ["Avoid over #damage shots", 150], ["@attackTypes enemy within #m", "Attack", 500], ["@attackTypes enemy within #m", "Ram", 650], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less Brawling Value", "---", 800], ["@attackTypes enemy within #m", "Attack", 800], ["@capTypes Command Points within #m", "Capture", 500], ["Stay in #m range of slot # units", 700, 2], ["@attackTypes enemy within #m", "Attack", 1500], ["Goto @locationTypes", "Enemy Army Middle"], ["Field # at priority #", 1, 3], ["Field # at priority #", 3, 6], ["Field # at priority #", 5, 7]]
}, {
    "parts": [{"pos": [0, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [40, -80], "type": "DamageMod", "dir": 0}, {
        "pos": [0, -60],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-40, -80], "type": "DamageMod", "dir": 0}, {
        "pos": [0, -100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [40, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [40, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-50, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-30, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, -10], "type": "Engine02", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, 0], "type": "Mount270", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -60], "type": "MissileTurret", "dir": 0}, {"pos": [-80, 0], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 650], ["Avoid over #damage shots", 150], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "---", 800], ["Stay in #m range of slot # units", 100, 1], ["Avoid over #damage shots", 20], ["Stay in #m range of slot # units", 100, 8], ["Stay in #m range of slot # units", 100, 7], ["Avoid over #damage shots", 50], ["@attackTypes enemy within #m", "Flee", 1600], ["Goto @locationTypes", "Friendly Spawn"], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3]]
}, {
    "parts": [{"pos": [-50, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, 40],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-20, 50], "type": "Wing2x1", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-20, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Ram", 350], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["Avoid over #damage shots", 50], ["Stay in #m range of slot # units", 5000, 1], ["@attackTypes enemy within #m", "Run-by", 650], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "Slower", 1500], ["@capTypes Command Points within #m", "Capture", 700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Circle", "More Brawling Value", "More Range", 1700], ["@capTypes Command Points within #m", "Protect", 1500], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "Slower", 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less DPS", 20, 2000], ["@capTypes Command Points within #m", "Protect", 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 1, 80], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 5], ["Try to field # every # seconds", 1, 40]]
}, {
    "parts": [{"pos": [0, 20], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-30, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, -50], "type": "Reactor2x1", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Flee", 400], ["Stay in #m range of slot # units", 50, 1], ["Avoid over #damage shots", 50], ["Stay in #m range of slot # units", 50, 8], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at start", 1], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Field # for # of ship in slot # at priority #", 1, 2, 2, 4], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 2]]
}, {
    "parts": [{"pos": [50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [50, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [20, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount270", "dir": 0}, {
        "pos": [20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-50, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 0], "type": "VArmor1x2SideBarFilled", "dir": 0}, {
        "pos": [0, 70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 0], "type": "VArmor1x2SideBarFilled", "dir": 0}, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Circle", 500], ["@capTypes Command Points within #m", "Capture", 500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "Less DPS", 100, 1300], ["Stay in #m range of slot # units", 1600, 8], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Spread to", 3000], ["Goto @locationTypes", "Enemy Spawn"], ["Field # for # of ship in slot # at priority #", 1, 1, 2, 3], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 3], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 3]]
}, {
    "parts": [{"pos": [100, 20], "type": "Wing2x2", "dir": 0}, {
        "pos": [-70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-60, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [60, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-60, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [60, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [60, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [70, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-60, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [50, -50], "type": "Engine01", "dir": 0}, {
        "pos": [30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine01", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-100, 20], "type": "Wing2x2", "dir": 0}, {
        "pos": [20, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [20, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-20, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-60, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [60, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-20, -20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [20, -20],
        "type": "LightBeamTurret",
        "dir": 0
    }],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 200], ["@attackTypes enemy within #m", "Ram", 500], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More DPS", 1, 1000], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More DPS", 1, 2000], ["@capTypes Command Points within #m", "Capture", 3000], ["Goto @locationTypes", "Enemy Spawn"], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 4], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 5]]
}, {
    "parts": [{"pos": [40, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [80, -60], "type": "Mount90", "dir": 0}, {
        "pos": [70, -20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-40, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [20, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [40, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-80, -20],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [80, -60],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Ram", 300], ["Avoid over #damage shots", 50], ["@attackTypes enemy within #m", "Attack", 600], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 170, 1100], ["Stay in #m range of slot # units", 2000, 1], ["@capTypes Command Points within #m", "Capture", 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 100, 1400], ["Stay in #m range of slot # units", 200, 1], ["Stay in #m range of slot # units", 200, 8], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 1, 1, 2, 4], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 4]]
}, {
    "parts": [{"pos": [-100, 120], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [100, 10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-60, 60], "type": "Mount360", "dir": 0}, {
        "pos": [60, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-60, 100], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-20, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-100, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [60, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [100, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [60, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [100, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-100, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [20, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [20, -80], "type": "Battery2x2", "dir": 0}, {
        "pos": [-20, -80],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-50, -90], "type": "Engine02", "dir": 0}, {
        "pos": [70, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-100, 10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-70, -90], "type": "Engine02", "dir": 0}, {
        "pos": [100, 120],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-30, 110], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, 110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 130], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 110],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-30, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [110, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-90, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [90, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-40, -50], "type": "Wing2x1", "dir": 0}, {
        "pos": [40, -50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-100, -20], "type": "Mount180", "dir": 0}, {
        "pos": [100, -20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [0, -40], "type": "Mount360", "dir": 0}, {
        "pos": [100, -100],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-100, -100], "type": "Wing2x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-100, -20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [100, -20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [60, 60], "type": "TorpTurret", "dir": 0}, {"pos": [-60, 60], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 150], ["Avoid over #damage shots", 50], ["@attackTypes enemy within #m", "Stay at range", 700], ["@attackTypes enemy within #m", "Flee", 1000], ["@capTypes Command Points within #m", "Capture", 600], ["@attackTypes enemy within #m", "Circle", 1300], ["@capTypes Command Points within #m", "Capture", 1000], ["@capTypes Command Points within #m", "Capture", 3000], ["Goto @locationTypes", "Enemy Spawn"], ["Field # for # of ship in slot # at priority #", 1, 1, 9, 1], ["Field # at priority #", 1, 5], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 4]]
}, {
    "parts": [{"pos": [30, -50], "type": "Engine01", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [60, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-60, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [20, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-30, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount270", "dir": 0}, {
        "pos": [-30, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-50, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [80, -20],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "Wing2x2", "dir": 0}, {
        "pos": [100, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-100, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-30, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-60, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}, {"pos": [60, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 200], ["@attackTypes enemy within #m", "Ram", 400], ["Avoid over #damage shots", 50], ["Stay in #m range of slot # units", 100, 8], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More DPS", 1, 1000], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Guard", 1000], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 2], ["Field # at priority #", 1, 4], ["Field # for # of ship in slot # at priority #", 1, 5, 3, 2], ["Try to field # every # seconds", 1, 200], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 1]]
}, {
    "parts": [{"pos": [-10, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [30, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [10, 10], "type": "Battery1x1", "dir": 0}, {"pos": [10, -20], "type": "Engine03", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 200, 600], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 490, 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 800, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 999, 1000], ["Avoid #dps danger areas", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 1200, 1250], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 1400, 1350], ["@capTypes Command Points within #m", "Spread to", 1000], ["Goto @locationTypes", "Enemy Army Middle"], ["Try to field # every # seconds", 1, 25], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 2, 1, 8, 3]]
}];
ais.all.MasterMind = [{
    "parts": [{"pos": [90, 90], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-90, 110],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, -30],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-60, 20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [60, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [0, 30], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [0, 10],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [30, 70], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-90, -30],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-90, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-90, 50],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-90, 70], "type": "Reactor1x1", "dir": 0}, {
        "pos": [90, 70],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-90, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [90, 50],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [90, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [90, -30],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [90, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-110, 70],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-110, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-110, 30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-110, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-110, -50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-110, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-110, -30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [110, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [110, -50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [110, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [110, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [110, 70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [110, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-110, -80], "type": "Engine03", "dir": 0}, {
        "pos": [0, -40],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [110, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [110, -30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-90, 90], "type": "Reactor1x1", "dir": 0}, {
        "pos": [90, 110],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-110, 90], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [110, 90],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [90, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-90, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-90, -50], "type": "Reactor1x1", "dir": 0}, {
        "pos": [90, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [90, -50], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, 130],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [10, 130], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-10, 130],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, 130], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-50, 130],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [50, 130], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-10, -120], "type": "Engine03", "dir": 0}, {
        "pos": [10, -120],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, -120], "type": "Engine03", "dir": 0}, {
        "pos": [-30, -120],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-70, -100], "type": "Engine03", "dir": 0}, {
        "pos": [70, -100],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [20, -80], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-20, -80],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [60, -60], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-60, -60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-50, 50], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-70, 50],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-50, 70], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-70, 70],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [50, 50], "type": "Reactor1x1", "dir": 0}, {
        "pos": [70, 50],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [70, 70], "type": "Reactor1x1", "dir": 0}, {
        "pos": [50, 70],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [60, -20], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-60, -20],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-50, -100], "type": "Engine03", "dir": 0}, {
        "pos": [50, -100],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-60, 110], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-20, 110],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [20, 110], "type": "UArmor2x1", "dir": 0}, {
        "pos": [60, 110],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [60, 90], "type": "UArmor2x1", "dir": 0}, {
        "pos": [20, 90],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [-20, 90], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-60, 90],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "FlackTurret", "dir": 0}, {
        "pos": [-60, 20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [60, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["Stay in #m range of friendly units", 1200], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Less Range", 500, 1000], ["Goto @locationTypes", "Friendly Army Middle"]]
}, {
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {"pos": [10, 10], "type": "Battery1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "---", 2000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 4, 2], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 4], ["Field # for # of ship in slot # at priority #", 4, 1, 8, 5], ["Field # at priority #", 1, 1]]
}, {"parts": [], "name": "", "aiRules": []}, {
    "parts": [{"pos": [-40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [110, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [110, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [110, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-110, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-60, 140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [60, 140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-70, 100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, -90], "type": "Engine02", "dir": 0}, {
        "pos": [70, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -70], "type": "Engine02", "dir": 0}, {
        "pos": [90, 100],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [70, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-90, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-110, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount360", "dir": 0}, {
        "pos": [20, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-50, 40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, 120], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 120], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, -80],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -80], "type": "Mount90", "dir": 0}, {
        "pos": [0, -120],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-40, -120], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, -120],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [110, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-110, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 150], "type": "Reactor2x1", "dir": 0}, {
        "pos": [50, 40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [50, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 110], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, 150],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, 150], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-110, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [110, -30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [40, -80], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, -80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [40, -120], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, -120],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, -120], "type": "FlackTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["Stay in #m range of slot # units", 3000, 8], ["@attackTypes enemy within #m", "Ram", 500], ["@capTypes Command Points within #m", "Capture", 500], ["Avoid over #damage shots", 59], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "---", 3000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "---", "More expensive", 3000], ["@attackTypes enemy within #m", "Attack", 1200], ["Stay in #m range of slot # units", 400, 4], ["@capTypes Command Points within #m", "Capture", 2000], ["Goto @locationTypes", "Enemy Army Middle"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Field # at priority #", 1, 1], ["Field # at priority #", 1, 2]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-30, -10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -40], "type": "Mount30", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}, {"pos": [0, -40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "More Brawling Value", 1600], ["Stay in #m range of slot # units", 4000, 4], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less expensive", 100, 1700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less DPS", "Less Brawling Value", 1500], ["@attackTypes enemy within #m", "Flee", 1500], ["@capTypes Command Points within #m", "Capture", 1000], ["@capTypes Command Points within #m", "Protect", 4000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 1]]
}, {
    "parts": [{"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [10, -40], "type": "Engine03", "dir": 0}, {
        "pos": [20, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [-10, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-10, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, -30], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [50, -30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 400], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Cloaked", 1000], ["Stay in #m range of slot # units", 2600, 4], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "More expensive", 1200], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less expensive", 150, 1000], ["Stay in #m range of slot # units", 500, 6], ["@capTypes Command Points within #m", "Capture", 1500], ["@capTypes Command Points within #m", "Protect", 2500], ["Stay in #m range of slot # units", 500, 4], ["Stay in #m range of slot # units", 500, 8], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 2, 2, 4, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 4, 4], ["Field # for # of ship in slot # at priority #", 3, 1, 7, 4]]
}, {
    "parts": [{"pos": [0, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-30, -60], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, -60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "Engine07", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [50, -60], "type": "Wing1x2", "dir": 0}, {"pos": [0, 0], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 21], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 100, 1700], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 120, 1400], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "Slower", 150, 1200], ["@attackTypes enemy within #m", "Flee", 1600], ["@capTypes Command Points within #m", "Capture", 2000], ["Stay in #m range of slot # units", 500, 4], ["Stay in #m range of slot # units", 500, 8], ["Field # for # of ship in slot # at priority #", 1, 2, 8, 1], ["Try to field # every # seconds", 1, 40]]
}, {
    "parts": [{"pos": [70, -80], "type": "VArmor1x2", "dir": 0}, {
        "pos": [-70, -80],
        "type": "VArmor1x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount10Range", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [20, -80], "type": "Mount30", "dir": 0}, {
        "pos": [0, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-50, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-70, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [70, -40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [50, -90], "type": "Engine01", "dir": 0}, {
        "pos": [-20, -80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-70, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-70, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 80], "type": "StasisField", "dir": 0}, {
        "pos": [-20, -120],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [20, -120], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-100, -40],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [100, -40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [90, 0],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-90, 0], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-110, 0],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [110, 0], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-100, -80],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [100, -80], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-40, 40],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "WavePullTurret", "dir": 0}, {
        "pos": [40, 40],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [40, -40], "type": "BombGun", "dir": 0}, {
        "pos": [20, -80],
        "type": "BombGun",
        "dir": 0
    }, {"pos": [-20, -80], "type": "BombGun", "dir": 0}, {"pos": [-40, -40], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 2, 4, 2], ["Stay in #m range of slot # units", 2000, 4], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 100, 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 150, 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "---", "More HP", 1300], ["Avoid over #damage shots", 20], ["Stay in #m range of slot # units", 500, 4]]
}, "", {
    "parts": [{"pos": [-40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-130, 100],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [-130, 60], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-130, 20],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [-130, -20], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [130, -20],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [130, 20], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [130, 100],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [130, 60], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-100, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, 100], "type": "Mount10Range", "dir": 0}, {
        "pos": [-30, 160],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-100, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [30, 160], "type": "HArmor1x2", "dir": 0}, {
        "pos": [20, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [100, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [60, 100], "type": "Mount10Range", "dir": 0}, {
        "pos": [-20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [100, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 160],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-150, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [-150, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-150, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [150, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [150, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [150, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [150, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-150, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount360", "dir": 0}, {
        "pos": [40, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-80, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [80, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-80, -60],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [80, -60], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-50, -70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, -70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [50, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-110, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [110, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-110, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-60, 160],
        "type": "Solar2x2",
        "dir": 0
    }, {"pos": [60, 160], "type": "Solar2x2", "dir": 0}, {
        "pos": [-90, 150],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [90, 150], "type": "Solar1x1", "dir": 0}, {
        "pos": [-110, -50],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [110, -50], "type": "Solar1x1", "dir": 0}, {
        "pos": [-90, 170],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [90, 170],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [110, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [110, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, 200],
        "type": "Solar2x2",
        "dir": 0
    }, {"pos": [30, 190], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 190],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [50, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-20, -100],
        "type": "Solar2x2",
        "dir": 0
    }, {"pos": [20, -100], "type": "Solar2x2", "dir": 0}, {
        "pos": [-50, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [60, 100], "type": "FlackTurret", "dir": 0}, {
        "pos": [-60, 100],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-40, 0], "type": "FlackTurret", "dir": 0}, {"pos": [40, 0], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 1000]]
}];
ais.all.MeteorShower = [{
    "parts": [{"pos": [-50, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, 50], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [30, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-10, 70],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Engine04", "dir": 0}, {
        "pos": [0, 0],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [30, 20], "type": "Stripe1x2", "dir": 2}, {"pos": [0, 40], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 40], ["@attackTypes enemy within #m", "Ram", 450], ["@capTypes Command Points within #m", "Guard", 10000], ["Field # at priority #", 1, 3], ["Try to field # every # seconds", 1, 67]]
}, {
    "parts": [{"pos": [-30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [0, -20],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [30, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 30], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 50], ["When #% of energy, @chargeTypes", 70, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Less expensive", "---", 600], ["Avoid over #damage shots", 40], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 120, 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 140, 2000], ["@capTypes Command Points within #m", "Protect", 2000], ["When #% of energy, @chargeTypes", 96, "Find recharger"], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, -20], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Stripe1x1Corner",
        "dir": 1
    }, {"pos": [-30, -20], "type": "Stripe1x2", "dir": 2}, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 3, 99], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 29], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Slower", "Less Range", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "Slower", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Less DPS", 1000], ["@attackTypes enemy within #m", "Attack", 500], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # when money over # at priority #", 1, 700, 10], ["Field # at priority #", 1, 6], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [-30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-20, -60], "type": "CloakGenerator", "dir": 0}, {
        "pos": [20, -60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Engine01", "dir": 0}, {
        "pos": [-50, 50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-70, 30], "type": "VArmor1x1", "dir": 0}, {
        "pos": [50, -50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 0],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "TeslaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Has PD", "More expensive", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 230, 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Faster", 150, 1000], ["@capTypes Command Points within #m", "Protect", 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 800, 2500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Faster", 230, 1500], ["Stay in #m range of slot # units", -100, 10], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 4000], ["Field # at priority #", 1, 5], ["Field # at priority #", 2, 7], ["Field # for # of @needTypes at priority #", 1, 2, "Fighter Counter Need", 4]]
}, {
    "parts": [{"pos": [50, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, -20], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [50, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-50, -10], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [20, 20],
        "type": "EMPGun",
        "dir": 0
    }, {"pos": [-20, 20], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 80], ["When #% of energy, @chargeTypes", 60, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More expensive", "Cloaked", 700], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "---", 500], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 100, 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "More expensive", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Less DPS", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "More expensive", 3000], ["@capTypes Command Points within #m", "Protect", 2000], ["When #% of energy, @chargeTypes", 96, "Find recharger"], ["Field # for # of ship in slot # at priority #", 2, 2, 10, 5], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of @needTypes at priority #", 1, 4, "Cloak Counter Need", 5]]
}, {
    "parts": [{"pos": [70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-70, 0], "type": "ShieldGen2x1", "dir": 3}, {
        "pos": [50, -40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "PDTurret", "dir": 0}, {"pos": [0, 20], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When Shields down to #%, flee", 20], ["@attackTypes enemy within #m", "Flee", 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More DPS", 10, 1000], ["Avoid over #damage shots", 40], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "No PD", 2400], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "More expensive", 2200], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 120, 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "Not Cloaked", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "More expensive", "---", 1800], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 6]]
}, {
    "parts": [{"pos": [40, -40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [60, 0],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-10, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [20, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "SymbolDecal9",
        "dir": 0
    }, {"pos": [-20, 0], "type": "PDTurret", "dir": 0}, {"pos": [20, 0], "type": "PDTurret", "dir": 0}],
    "name": "support1",
    "aiRules": [["Stay in #m range of slot # units", 700, 10], ["Avoid over #damage shots", 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More DPS", "More expensive", 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 700, 2000], ["Stay in #m range of slot # units", 200, 10], ["Find units that are out of energy"], ["Goto @locationTypes", "Friendly Home Point"], ["Field # at priority #", 1, 4], ["Field # for # of ship in slot # at priority #", 2, 4, 5, 5]]
}, {
    "parts": [{"pos": [0, 60], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-20, -60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [20, -60],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Engine01", "dir": 0}, {
        "pos": [-50, 50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-70, 30], "type": "VArmor1x1", "dir": 0}, {
        "pos": [50, -50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [70, 0], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-50, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Has PD", "More expensive", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 230, 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Faster", 150, 1000], ["@capTypes Command Points within #m", "Protect", 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 800, 2500], ["Stay in #m range of slot # units", -100, 10], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 4000], ["Field # at priority #", 1, 6]]
}, {
    "parts": [{"pos": [0, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-80, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, 60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [0, -80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-80, -20],
        "type": "SymbolDecal3",
        "dir": 3
    }, {"pos": [-80, 20], "type": "SymbolDecal3", "dir": 3}, {
        "pos": [80, 20],
        "type": "SymbolDecal3",
        "dir": 1
    }, {"pos": [80, -20], "type": "SymbolDecal3", "dir": 1}, {
        "pos": [0, -80],
        "type": "SymbolDecal15",
        "dir": 0
    }, {"pos": [-40, 60], "type": "PDTurret", "dir": 0}, {
        "pos": [40, 60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 1], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "More Brawling Value", "Not Cloaked", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "---", "Stronger", 1000], ["Avoid over #damage shots", 40], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "No PD", 2000], ["Stay in #m range of slot # units", 800, 10], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "No PD", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "No PD", "More expensive", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Stronger", "Not Cloaked", 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 2, 9]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [70, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [80, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-70, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-30, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, 60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-80, -20],
        "type": "SymbolDecal3",
        "dir": 3
    }, {"pos": [80, -20], "type": "SymbolDecal3", "dir": 1}, {
        "pos": [0, 80],
        "type": "SymbolDecal15",
        "dir": 0
    }, {"pos": [-40, 60], "type": "PDTurret", "dir": 0}, {
        "pos": [40, 60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 2, 0], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More DPS", 10, 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "---", 1200], ["When #% of energy, @chargeTypes", 20, "Flee enemies"], ["Avoid over #damage shots", 40], ["Stay in #m range of slot # units", 1000, 10], ["Stayaway in #m range from slot # units", 400, 10], ["Stayaway in #m range from slot # units", 400, 9], ["Stay in #m range of slot # units", 1200, 7], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "No PD", "Slower", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "No PD", "More expensive", 3000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 200, 2000], ["@capTypes Command Points within #m", "Capture", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More expensive", "Slower", 10000], ["Goto @locationTypes", "Enemy Home Point"]]
}];
ais.all.Micor = [{
    "parts": [{"pos": [10, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, -20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [-20, -40], "type": "Mount180", "dir": 0}, {
        "pos": [-20, 0],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-20, -40], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "less arc", 100, 650], ["@attackTypes enemy within #m", "Circle", 800], ["@capTypes command points within #m", "Capture", 10000], ["When #% of energy, @chargeTypes", 20, "Rest"], ["Field # at start", 2], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [0, -60], "type": "Mount180", "dir": 0}, {
        "pos": [-40, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -80], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -120],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, -120], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [70, -60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-40, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-70, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [40, 20], "type": "Mount180", "dir": 0}, {
        "pos": [-70, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [70, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -140],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -140], "type": "Engine04", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [40, 20], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, 20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "PDTurret", "dir": 0}, {"pos": [0, -60], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Circle", 1200], ["@capTypes command points within #m", "Capture", 10000], ["When #% of energy, @chargeTypes", 20, "Rest"], ["Field # at start", 2], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [-10, 0], "type": "Engine04", "dir": 0}, {"pos": [-10, 30], "type": "Battery1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Field # at start", 4], ["Try to field # every # seconds", 1, 30], ["@capTypes command points within #m", "Spread to", 10000]]
}, "", "", "", "", "", "", ""];
ais.all.MiniCharger = [{
    "parts": [{"pos": [-30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [40, 30],
        "type": "VArmor1x2",
        "dir": 3
    }, {"pos": [-90, 0], "type": "HArmor1x2Font1", "dir": 1}, {
        "pos": [90, 0],
        "type": "HArmor1x2Font1",
        "dir": 3
    }, {"pos": [0, 90], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-50, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, -70],
        "type": "HArmor1x2",
        "dir": 3
    }, {"pos": [0, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, -30],
        "type": "VArmor1x2",
        "dir": 3
    }, {"pos": [40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "VArmor2x2", "dir": 0}, {
        "pos": [30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor1x2Font1",
        "dir": 2
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, 20],
        "type": "Stripe2x2Corner",
        "dir": 0
    }, {"pos": [-40, 30], "type": "StripeDouble2x1", "dir": 0}, {
        "pos": [40, -30],
        "type": "StripeDouble2x1",
        "dir": 0
    }, {"pos": [40, -10], "type": "Stripe2x1", "dir": 0}, {
        "pos": [-40, 10],
        "type": "Stripe2x1",
        "dir": 0
    }, {"pos": [0, 80], "type": "StripeDouble2x2", "dir": 2}, {
        "pos": [-40, -20],
        "type": "Stripe2x2Corner",
        "dir": 1
    }, {"pos": [-80, 0], "type": "StripeDouble2x2", "dir": 3}, {
        "pos": [90, 0],
        "type": "StripeDouble2x1",
        "dir": 3
    }, {"pos": [0, -80], "type": "StripeDouble2x2", "dir": 0}],
    "name": "",
    "aiRules": [["Field # when money over # at priority #", 1, 600, 1], ["@attackTypes enemy within #m", "Stay at range", 3000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More DPS", 1, 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 300, 2000], ["Find units that are out of energy"], ["Goto @locationTypes", "Friendly Army Middle"]]
}, {
    "parts": [{"pos": [0, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-90, 0],
        "type": "HArmor1x2Font1",
        "dir": 1
    }, {"pos": [90, 0], "type": "HArmor1x2Font1", "dir": 3}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 90], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor1x2Font1",
        "dir": 2
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {"pos": [0, 0], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Avoid over #damage shots", 100], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "more range", 10, 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["@attackTypes enemy within #m", "Kite", 3000]]
}, {
    "parts": [{"pos": [-70, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-90, 0], "type": "HArmor1x2Font1", "dir": 1}, {
        "pos": [90, 0],
        "type": "HArmor1x2Font1",
        "dir": 3
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [0, 90],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -70], "type": "HArmor1x1Angle", "dir": 3}, {
        "pos": [50, -50],
        "type": "HArmor1x1Angle",
        "dir": 3
    }, {"pos": [30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor1x2Font1",
        "dir": 2
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {"pos": [0, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Avoid over #damage shots", 100], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "more range", 10, 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["@attackTypes enemy within #m", "Kite", 3000]]
}, {
    "parts": [{"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-90, 0], "type": "HArmor1x2Font1", "dir": 1}, {
        "pos": [90, 0],
        "type": "HArmor1x2Font1",
        "dir": 3
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [0, 90],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-50, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-30, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 50],
        "type": "HArmor1x1AngleBack",
        "dir": 1
    }, {"pos": [-50, 50], "type": "HArmor1x1AngleBack", "dir": 3}, {
        "pos": [0, -90],
        "type": "HArmor1x2Font1",
        "dir": 2
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {"pos": [0, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Avoid over #damage shots", 100], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "more range", 10, 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["@attackTypes enemy within #m", "Kite", 3000]]
}, {
    "parts": [{"pos": [-90, 0], "type": "HArmor1x2Font1", "dir": 1}, {
        "pos": [-70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, 0], "type": "HArmor1x2Font1", "dir": 3}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 90], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-30, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -70], "type": "HArmor1x1Angle", "dir": 3}, {
        "pos": [50, -50],
        "type": "HArmor1x1Angle",
        "dir": 3
    }, {"pos": [30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor1x2Font1",
        "dir": 2
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Avoid over #damage shots", 100], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "more range", 10, 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["@attackTypes enemy within #m", "Kite", 3000]]
}, {
    "parts": [{"pos": [0, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, 0], "type": "HArmor1x2Font1", "dir": 3}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 90], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [70, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-90, 0],
        "type": "HArmor1x2Font1",
        "dir": 1
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "DampenerMod", "dir": 0}, {
        "pos": [30, -70],
        "type": "HArmor1x1Angle",
        "dir": 3
    }, {"pos": [50, -50], "type": "HArmor1x1Angle", "dir": 3}, {
        "pos": [50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, -90], "type": "HArmor1x2Font1", "dir": 2}, {"pos": [0, 0], "type": "EMPGun2", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Avoid over #damage shots", 100], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "more range", 10, 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["@attackTypes enemy within #m", "Kite", 3000]]
}, {
    "parts": [{"pos": [0, 50], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-30, -30],
        "type": "HArmor1x1Angle",
        "dir": 1
    }, {"pos": [-50, 0], "type": "HArmor1x2Font1", "dir": 1}, {
        "pos": [30, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, -50],
        "type": "HArmor1x2Font1",
        "dir": 2
    }, {"pos": [0, 30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 0], "type": "HArmor1x2Font1", "dir": 3}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, -30], "type": "Stripe2x1", "dir": 0}, {
        "pos": [0, -50],
        "type": "Stripe2x1",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Stripe2x1", "dir": 3}, {
        "pos": [-50, 0],
        "type": "Stripe2x1",
        "dir": 3
    }, {"pos": [0, 30], "type": "Stripe2x1", "dir": 2}, {
        "pos": [0, 50],
        "type": "Stripe2x1",
        "dir": 2
    }, {"pos": [50, 0], "type": "Stripe2x1", "dir": 1}, {"pos": [0, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 51], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 500], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3]]
}, {
    "parts": [{"pos": [30, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [70, 0],
        "type": "HArmor1x2Font1",
        "dir": 3
    }, {"pos": [-30, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2Font1", "dir": 1}, {
        "pos": [0, 70],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [0, 50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 0],
        "type": "DampenerMod",
        "dir": 2
    }, {"pos": [0, 30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -40],
        "type": "Engine09",
        "dir": 0
    }, {"pos": [30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [50, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [40, 20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [40, -20], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, 20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, -20], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["Field # for # of @needTypes at priority #", 1, 8, "Point Defense Need", 1], ["Stay in #m range of slot # units", 250, 1], ["Avoid over #damage @bulletTypes shots", 50, "PD immune"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "More expensive", "Not Cloaked", 2500]]
}, {
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, 10],
        "type": "Battery1x1",
        "dir": 3
    }, {"pos": [30, -10], "type": "Wing1x1Notch", "dir": 2}, {"pos": [10, 10], "type": "Stripe1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 5], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid #dps danger areas", 10], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 1], ["Field # at priority #", 2, 2]]
}, {
    "parts": [{"pos": [0, 70], "type": "VArmor1x2SideBarFilled", "dir": 1}, {
        "pos": [0, -30],
        "type": "VArmor1x2SideBarFilled",
        "dir": 3
    }, {"pos": [20, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [0, 50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-50, 20], "type": "VArmor1x2SideBarFilled", "dir": 0}, {
        "pos": [30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [0, -10], "type": "VArmor1x2IBeam", "dir": 3}, {
        "pos": [50, 20],
        "type": "VArmor1x2SideBarFilled",
        "dir": 0
    }, {"pos": [30, 50], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-30, 50],
        "type": "VArmor1x1Corner2",
        "dir": 0
    }, {"pos": [-50, 20], "type": "StripeDouble2x1", "dir": 3}, {
        "pos": [50, 20],
        "type": "StripeDouble2x1",
        "dir": 3
    }, {"pos": [0, -30], "type": "StripeDouble2x1", "dir": 2}, {
        "pos": [0, 70],
        "type": "StripeDouble2x1",
        "dir": 2
    }, {"pos": [-20, 20], "type": "LightBeamTurret", "dir": 0}, {"pos": [20, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["When #% of energy, @chargeTypes", 10, "find recharger"], ["Avoid over #damage shots", 30], ["@attackTypes enemy within #m", "Attack", 200], ["When #% of energy, @chargeTypes", 20, "find recharger"], ["@attackTypes enemy within #m", "Attack", 500], ["@capTypes command points within #m", "Protect", 2000], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 5], ["@capTypes command points within #m", "Capture", 10000]]
}];
ais.all.Nayenne = [{
    "parts": [{"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Battery1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 40, 1500], ["@capTypes Command Points within #m", "Spread to", 10000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Circle", "More Range", 1200, 1150], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 1200, 3000], ["Field # at priority #", 3, 4], ["Field # for # of ship in slot # at priority #", 2, 1, 5, 3], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 1], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 1, 2, 7, 2]]
}, {
    "parts": [{"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -10], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Angle", "dir": 0}, {"pos": [0, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 55, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 600], ["Stayaway in #m range from slot # units", 400, 21], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less HP", 100, 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 90, 1200], ["Avoid over #damage shots", 60], ["@capTypes Command Points within #m", "Capture", 10000], ["@capTypes Command Points within #m", "Protect", 10000], ["Field # at priority #", 4, 3], ["Field # at priority #", 6, 4], ["Field # for # of ship in slot # at priority #", 3, 1, 5, 2], ["Field # for # of ship in slot # at priority #", 4, 1, 7, 2]]
}, {
    "parts": [{"pos": [-30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [50, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [50, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [50, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-50, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-30, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-20, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-20, 20], "type": "AutoTurret", "dir": 0}, {"pos": [20, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 600], ["Avoid over #damage shots", 80], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 600, 1400], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 2], ["Field # at priority #", 2, 3], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, 70], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [30, 70], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [20, 0], "type": "CloakGenerator", "dir": 0}, {
        "pos": [-20, 40],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 60, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 600, 1600], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 400, 1900], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 1200, 1900], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More DPS", 40, 2500], ["Stay in #m range of slot # units", 2000, 7], ["Stay in #m range of slot # units", 2000, 6], ["Stay in #m range of slot # units", 2000, 5], ["@capTypes Command Points within #m", "Guard", 10000], ["Field # for # of ship in slot # at priority #", 2, 1, 7, 2], ["Field # for # of ship in slot # at priority #", 2, 1, 5, 2], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-80, 0], "type": "HArmor2x2Front2", "dir": 0}, {
        "pos": [80, -70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-50, -130], "type": "Engine02", "dir": 0}, {
        "pos": [30, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -130], "type": "Engine02", "dir": 0}, {
        "pos": [-110, 70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, -90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [20, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-30, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [110, 70], "type": "Engine02", "dir": 0}, {
        "pos": [-20, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [10, -170], "type": "Engine02", "dir": 0}, {
        "pos": [10, -130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-10, -130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-10, -170],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [130, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [50, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-130, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-130, 40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [130, 40], "type": "Battery1x2", "dir": 0}, {
        "pos": [-110, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-40, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-110, 110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [110, 110], "type": "HArmor1x1", "dir": 0}, {
        "pos": [110, 130],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-130, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [130, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, -70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-90, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -110], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, -130], "type": "Engine02", "dir": 0}, {
        "pos": [70, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [80, 0], "type": "HArmor2x2Front2", "dir": 0}, {
        "pos": [-90, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, -70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [80, 170],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [80, 100], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 170],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-80, 140], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [50, 130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [80, 140], "type": "Mount30", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, -70],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [80, 40], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [-80, 40],
        "type": "HArmor2x2Back1",
        "dir": 0
    }, {"pos": [-80, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [80, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-20, 180], "type": "Mount30", "dir": 0}, {
        "pos": [20, 180],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-50, 160], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 160],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-40, 100], "type": "Mount30", "dir": 0}, {
        "pos": [40, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [20, 140], "type": "Mount30", "dir": 0}, {
        "pos": [-20, 140],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [10, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-10, 110],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [130, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-130, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-40, 60],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [-20, 180], "type": "WavePullTurret", "dir": 0}, {
        "pos": [40, 60],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [20, 180], "type": "WavePullTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "HeavyPDTurret", "dir": 0}, {
        "pos": [40, 100],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [80, 140], "type": "RingTurret", "dir": 0}, {
        "pos": [-80, 140],
        "type": "RingTurret",
        "dir": 0
    }, {"pos": [-40, 100], "type": "RingTurret", "dir": 0}, {
        "pos": [0, 40],
        "type": "BombGun",
        "dir": 0
    }, {"pos": [80, 100], "type": "BombGun", "dir": 0}, {
        "pos": [-80, 100],
        "type": "BombGun",
        "dir": 0
    }, {"pos": [-20, 140], "type": "BombGun", "dir": 0}, {"pos": [20, 140], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Rest"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 500, 350], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 150, 250], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 600, 900], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 300, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 500, 1200], ["@attackTypes enemy within #m", "Attack", 650], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "More Range", 5000], ["Stay in #m range of slot # units", 500, 7], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 2], ["Field # at priority #", 1, 1]]
}, {
    "parts": [{"pos": [-50, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [30, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, 80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [50, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-50, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-50, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [10, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -50], "type": "Engine02", "dir": 0}, {
        "pos": [0, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-30, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 0], "type": "HArmor1x2", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 700, 7], ["Stay in #m range of slot # units", 700, 5], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 42, 2000], ["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 5], ["Find units that are out of energy"], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 2], ["Field # for # of ship in slot # at priority #", 2, 1, 7, 3], ["Field # for # of ship in slot # at priority #", 4, 1, 7, 4], ["Field # for # of ship in slot # at priority #", 1, 2, 7, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 2]]
}, {
    "parts": [{"pos": [140, -100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, -100],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-40, 180], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -170],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -170], "type": "Engine02", "dir": 0}, {
        "pos": [70, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-110, -60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-100, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [100, 60], "type": "Mount30", "dir": 0}, {
        "pos": [110, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-130, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-130, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-160, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [90, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -150], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-90, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [90, -150], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-100, -120],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-40, 150], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-80, 100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [80, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-130, -130],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [100, -120], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-100, -90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-130, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [100, -90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [130, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [130, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-130, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, 180],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [130, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [160, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, -130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-140, -100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, -130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [130, -130],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [130, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -170],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -170], "type": "Engine02", "dir": 0}, {
        "pos": [0, -140],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, -110], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, -80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, -60], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, -40], "type": "Mount30", "dir": 0}, {
        "pos": [40, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [40, 100],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 100], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 150], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 150],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 180], "type": "Mount30", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 180], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, 180],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, -180], "type": "Mount90", "dir": 0}, {
        "pos": [-100, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [100, -20], "type": "Mount30", "dir": 0}, {
        "pos": [100, 140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [70, 140], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-100, 140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-70, 140], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -140],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [100, 60], "type": "WavePullTurret", "dir": 0}, {
        "pos": [-40, 180],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [-100, 60], "type": "WavePullTurret", "dir": 0}, {
        "pos": [40, 180],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [0, -180], "type": "AutoTurret", "dir": 0}, {
        "pos": [-100, -20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [100, -20], "type": "AutoTurret", "dir": 0}, {
        "pos": [0, 180],
        "type": "HeavyPDTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "BombGun", "dir": 0}, {"pos": [0, -40], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 350, 350], ["When #% of energy, @chargeTypes", 20, "Rest"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 700, 1200], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 400, 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Weaker", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More Range", "Slower", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "More expensive", "Slower", 10000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 50, 800], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 4], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [30, 10], "type": "Engine02", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [10, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-10, -30],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Angle", "dir": 0}, {"pos": [50, 10], "type": "Wing1x1Angle", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More expensive", 40, 1600], ["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 5], ["Find units that are out of energy"], ["Stay in #m range of slot # units", 500, 5], ["Stay in #m range of slot # units", 500, 7], ["Stay in #m range of slot # units", 500, 2], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # at priority #", 3, 3], ["Field # for # of ship in slot # at priority #", 3, 1, 5, 2], ["Field # for # of ship in slot # at priority #", 2, 1, 7, 2], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-30, -60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-30, -90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -60], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -140],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -140], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [0, -100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -140], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-30, -110],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -60], "type": "RingTurret", "dir": 0}, {"pos": [0, -100], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 400], ["Stay in #m range of slot # units", 500, 7], ["Stayaway in #m range from slot # units", 250, 9], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less Range", 600, 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Stronger", 1000], ["Stay in #m range of slot # units", 500, 5], ["Avoid over #damage shots", 12], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Less DPS", 35, 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 2, 3], ["Field # at priority #", 3, 4], ["Field # for # of ship in slot # at priority #", 3, 1, 7, 2], ["Field # for # of ship in slot # at priority #", 3, 1, 5, 2]]
}, {
    "parts": [{"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Battery1x1", "dir": 0}, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 350], ["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["Stayaway in #m range from slot # units", 300, 10], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "Less Arc", 270, 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "More expensive", 300, 1000], ["@attackTypes enemy within #m", "Attack", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 4, 3], ["Field # at priority #", 6, 4], ["Field # at priority #", 15, 7], ["Field # for # of ship in slot # at priority #", 4, 1, 5, 2], ["Field # for # of ship in slot # at priority #", 4, 1, 7, 2], ["Field # at start", 5]]
}];
ais.all.NodeSwarm = [{
    "parts": [{"pos": [-30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 25, "Find recharger"], ["Field # at priority #", 1, 3], ["Avoid over #damage shots", 24], ["Avoid everything"], ["@capTypes Command Points within #m", "Spread to", 100], ["@attackTypes enemy within #m", "Kite", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 4], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 1]]
}, {
    "parts": [{"pos": [0, 90], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount360", "dir": 0}, {
        "pos": [0, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [-80, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [80, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [-110, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-80, 90], "type": "Battery2x1", "dir": 0}, {
        "pos": [80, 90],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, -30], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-20, -30],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [20, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [-20, 110],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-70, -40], "type": "Engine04", "dir": 0}, {
        "pos": [70, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [110, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [110, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-110, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [80, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 40],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["Avoid over #damage shots", 45], ["Avoid #dps danger areas", 25], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Weaker", "Less Brawling Value", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Less Brawling Value", "More expensive", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Weaker", "---", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Less Brawling Value", "Weaker", 10000], ["Find units that are out of energy"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 3], ["Field # for # of ship in slot # at priority #", 1, 2, 6, 1]]
}, {
    "parts": [{"pos": [-20, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [20, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-20, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-20, -30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-50, -10], "type": "Engine02", "dir": 0}, {"pos": [10, -30], "type": "HArmor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 5, 7, 2], ["Stay in #m range of slot # units", 300, 7], ["Stayaway in #m range from slot # units", 250, 3], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "More expensive", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "---", "---", 1000], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 4], ["Field # for # of ship in slot # at priority #", 1, 8, 7, 3], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 2], ["Field # for # of ship in slot # at priority #", 1, 4, 1, 3]]
}, {
    "parts": [{"pos": [-190, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [180, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 40], "type": "Mount30", "dir": 0}, {
        "pos": [80, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {"pos": [-40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-160, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-120, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [160, 40], "type": "Mount30", "dir": 0}, {
        "pos": [120, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-180, 0], "type": "Mount30", "dir": 0}, {
        "pos": [190, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [10, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-160, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [-80, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [180, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-120, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [120, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [160, 40], "type": "TorpTurret", "dir": 0}, {"pos": [-180, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 300, 7], ["@attackTypes enemy within #m", "Attack", 1500], ["Field # for # of ship in slot # at priority #", 1, 4, 3, 4], ["Field # for # of ship in slot # at priority #", 1, 7, 7, 2], ["Goto @locationTypes", "Enemy Army Middle"], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [70, 40], "type": "UArmor1x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [-20, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-50, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [50, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [70, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-70, 40],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-70, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-60, -30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [60, -30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine03", "dir": 0}, {
        "pos": [-50, 70],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [50, 70], "type": "Battery1x1", "dir": 0}, {
        "pos": [20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 50, "Find recharger"], ["Avoid over #damage shots", 20], ["Avoid everything"], ["@attackTypes enemy within #m", "Circle", 1500], ["Stay in #m range of slot # units", 500, 7], ["Field # for # of ship in slot # at priority #", 1, 4, 3, 1], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 110],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [40, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-40, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [50, 80], "type": "Battery1x2", "dir": 0}, {
        "pos": [-50, 80],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, 0],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-50, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [70, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [70, 10], "type": "Battery1x1", "dir": 0}, {"pos": [0, 40], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 45, "Find recharger"], ["Avoid over #damage shots", 25], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "More HP", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "More Range", 1000], ["Field # for # of ship in slot # at priority #", 1, 5, 7, 3], ["When #% of energy, @chargeTypes", 100, "Find recharger"], ["Goto @locationTypes", "Enemy Spawn"]]
}, {
    "parts": [{"pos": [-40, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-90, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 30],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Front1", "dir": 0}, {
        "pos": [-40, -30],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-40, -60], "type": "HArmor2x2Back1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid #dps danger areas", 10], ["Stayaway in #m range from slot # units", 250, 7], ["Stay in #m range of slot # units", 2000, 1], ["Find units that are out of energy"], ["Field # at priority #", 1, 1], ["When #% of energy, @chargeTypes", 70, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "More expensive", "---", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 3], ["Field # at priority #", 1, 4], ["Try to field # every # seconds", 1, 35], ["Try to field # every # seconds", 1, 50], ["Try to field # every # seconds", 1, 80], ["Try to field # every # seconds", 1, 110], ["Try to field # every # seconds", 1, 95], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [-40, -60], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-60, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -30],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-90, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 800, 7], ["@attackTypes enemy within #m", "Attack", 1000], ["Stay in #m range of slot # units", 400, 10], ["Stayaway in #m range from slot # units", 400, 7], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 4], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 5], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 6]]
}, {
    "parts": [{"pos": [-30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [0, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "More Brawling Value", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "Less Brawling Value", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 6, 7, 2]]
}, {
    "parts": [{"pos": [180, 30], "type": "HArmor1x2Front2", "dir": 0}, {
        "pos": [120, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount360", "dir": 0}, {
        "pos": [-40, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 130],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-40, 130], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-120, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-180, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-180, 30], "type": "HArmor1x2Front2", "dir": 0}, {
        "pos": [-180, 60],
        "type": "HArmor2x2Front1",
        "dir": 0
    }, {"pos": [-180, -60], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [-150, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-180, -30], "type": "HArmor1x2Back2", "dir": 0}, {
        "pos": [180, 60],
        "type": "HArmor2x2Front1",
        "dir": 0
    }, {"pos": [180, -30], "type": "HArmor1x2Back2", "dir": 0}, {
        "pos": [180, -60],
        "type": "HArmor2x2Back1",
        "dir": 0
    }, {"pos": [180, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [150, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [110, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-150, -80], "type": "Wing1x2", "dir": 0}, {
        "pos": [150, -80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-130, -90], "type": "Engine02", "dir": 0}, {
        "pos": [130, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-100, -60], "type": "DamageMod", "dir": 0}, {
        "pos": [-100, -100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, -120], "type": "TargetingMod", "dir": 0}, {
        "pos": [-60, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-20, -100],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [60, -120], "type": "TargetingMod", "dir": 0}, {
        "pos": [100, -100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [60, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [100, -60], "type": "DamageMod", "dir": 0}, {
        "pos": [60, -80],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [20, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-60, -80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, -20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, -10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [80, -10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [40, 60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 80], "type": "HeavyPDTurret", "dir": 0}, {
        "pos": [60, -80],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [-60, -80], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 3, 8, 2], ["Stay in #m range of friendly units", 600], ["Goto @locationTypes", "Enemy Army Middle"]]
}];
ais.all.Novice = [{
    "parts": [{"pos": [30, -20], "type": "Engine04", "dir": 0}, {
        "pos": [50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 0], "type": "Engine04", "dir": 0}, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Backstab", 400], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [50, -80], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount90", "dir": 0}, {
        "pos": [-50, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, -40], "type": "Mount90", "dir": 0}, {
        "pos": [-50, -80],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, -80], "type": "Engine04", "dir": 0}, {
        "pos": [70, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-20, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [20, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-10, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [10, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-20, 0],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 0], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-40, -40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, -40], "type": "LightBeamTurret", "dir": 0}, {"pos": [0, 60], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 300], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 30]]
}, "", "", "", "", "", "", "", ""];
ais.all.NukeSwarm = [{
    "parts": [{"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [0, 20], "type": "AOEWarhead", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 10, 2], ["@attackTypes enemy within #m", "Ram", 200]]
}, {
    "parts": [{"pos": [30, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [10, -10], "type": "Battery1x1", "dir": 0}, {"pos": [0, 20], "type": "AOEWarhead", "dir": 0}],
    "name": "",
    "aiRules": [["Goto @locationTypes", "Enemy Home Point"], ["@attackTypes enemy within #m", "Ram", 400], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [-30, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "AOEWarhead", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 8, 3], ["@capTypes Command Points within #m", "Guard", 10000]]
}, {
    "parts": [{"pos": [-30, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [30, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [0, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, 10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "UArmor1x1", "dir": 0}, {"pos": [0, 20], "type": "ShapedWarhead", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["@attackTypes enemy within #m", "Ram", 10000], ["Try to field # every # seconds", 2, 30], ["Field # at start", 2]]
}, "", "", "", "", "", ""];
ais.all.Orbiter = [{
    "parts": [{"pos": [-20, -40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [80, -60],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount180", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount180", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [50, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [-10, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [-80, -60],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "VArmor2x2", "dir": 0}, {
        "pos": [80, -20],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [10, -90], "type": "Engine01", "dir": 0}, {
        "pos": [20, -40],
        "type": "VArmor2x2",
        "dir": 0
    }, {"pos": [-40, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, -80],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-50, -130], "type": "Solar3x3", "dir": 0}, {
        "pos": [50, -130],
        "type": "Solar3x3",
        "dir": 0
    }, {"pos": [-70, -90], "type": "Solar1x1", "dir": 0}, {
        "pos": [70, -90],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [-80, 10], "type": "Wing2x1", "dir": 0}, {"pos": [80, 10], "type": "Wing2x1", "dir": 0}, {
        "pos": [0, 0],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-20, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [40, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-40, -80], "type": "FlackTurret", "dir": 0}, {"pos": [40, -80], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "slower", "has PD", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Circle", "slower", "no PD", 2000], ["@attackTypes enemy within #m", "Circle", 1100], ["@capTypes command points within #m", "Capture", 10000], ["Field # at priority #", 10, 2]]
}, {
    "parts": [{"pos": [0, -90], "type": "Battery2x1", "dir": 0}, {
        "pos": [30, -100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-40, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [40, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [20, -60], "type": "Mount30", "dir": 0}, {
        "pos": [-60, -60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-20, -60], "type": "Mount30", "dir": 0}, {
        "pos": [60, -60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -110], "type": "Engine02", "dir": 0}, {
        "pos": [0, -120],
        "type": "Solar2x2",
        "dir": 0
    }, {"pos": [-70, -90], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, -100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-60, -60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-20, -60], "type": "PDTurret", "dir": 0}, {
        "pos": [20, -60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [60, -60], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 30], ["@capTypes command points within #m", "Capture", 2000], ["@attackTypes enemy within #m", "Attack", 400], ["@capTypes command points within #m", "Guard", 1000], ["Field # at start", 1], ["Field # for # of @needTypes at priority #", 1, 3, "fighter counter need", 1]]
}, {"parts": [], "name": "", "aiRules": []}, {"parts": [], "name": "", "aiRules": []}, {
    "parts": [],
    "name": "",
    "aiRules": []
}, "", "", "", "", ""];
ais.all.Orblin = [{
    "parts": [{"pos": [30, -70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [50, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-50, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount90", "dir": 0}, {
        "pos": [30, -40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [30, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-70, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [70, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-60, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [60, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-20, 0],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [20, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "less brawling value", "slower", 850], ["Try to field # every # seconds", 1, 15], ["Field # at priority #", 2, 1], ["@attackTypes enemy within #m", "Attack", 600], ["@capTypes command points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [-30, -50], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-10, 30],
        "type": "OverKillAi",
        "dir": 0
    }, {"pos": [70, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-40, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [30, -50],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [0, 50], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [10, 30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-70, -20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-50, -50], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -80], "type": "Engine07", "dir": 0}, {
        "pos": [0, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "more HP", 400, 1250], ["Avoid over #damage shots", 22], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Circle", "more HP", 280, 3000], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 3]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Wing1x1Notch", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["Field # at start", 3], ["Try to field # every # seconds", 1, 30], ["@capTypes command points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [-20, 20], "type": "Mount90", "dir": 0}, {
        "pos": [20, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [10, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [30, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-20, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of @needTypes at priority #", 1, 1, "fighter counter need", 2], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "less brawling value", 500], ["Stay in #m range of slot # units", 500, 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "less brawling value", 1500], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 1]]
}, {"parts": [], "name": "", "aiRules": []}, "", "", "", "", {
    "parts": [{
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [0, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [40, 0], "type": "EnergyTransfer", "dir": 0}, {"pos": [0, 20], "type": "Battery2x2", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 2], ["Find units that are out of energy"], ["Goto @locationTypes", "Friendly Army Middle"]]
}];
ais.all.Parity = [{
    "parts": [{"pos": [0, 40], "type": "Mount90", "dir": 0}, {
        "pos": [30, 20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, 20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, 50], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 50],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 70], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, -10], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 300], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "---", 1600], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "More Range", 1500, 1800], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2], ["Field # at priority #", 1, 2], ["Field # at priority #", 3, 7]]
}, {
    "parts": [{"pos": [0, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [50, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, 40], "type": "Battery1x2", "dir": 0}, {
        "pos": [30, 40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-10, -100], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [10, -100], "type": "Wing1x2", "dir": 0}, {
        "pos": [-40, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-50, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine02", "dir": 0}, {
        "pos": [30, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-90, -30], "type": "Engine02", "dir": 0}, {
        "pos": [90, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, -70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, -70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -20], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["Stay in #m range of slot # units", 400, 3], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 6]]
}, {
    "parts": [{"pos": [-40, 50], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [40, -20],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, -50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [0, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 50], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [-70, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-70, -30], "type": "Engine02", "dir": 0}, {"pos": [0, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When Shields down to #%, flee", 30], ["@attackTypes enemy within #m", "Flee", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 120, 1500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1]]
}, {
    "parts": [{"pos": [-50, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [60, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-60, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [30, 0], "type": "Wing1x2", "dir": 0}, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [20, -80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-20, -80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-60, -60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [60, -60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-50, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-60, -100],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [60, -100], "type": "DamageMod", "dir": 0}, {
        "pos": [-100, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [100, -80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-100, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [100, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -130], "type": "Engine02", "dir": 0}, {
        "pos": [10, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -130], "type": "Engine02", "dir": 0}, {
        "pos": [90, -110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-90, -110], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-60, -60], "type": "TorpTurret", "dir": 0}, {"pos": [60, -60], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 700], ["Stay in #m range of slot # units", 300, 3], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at start", 1], ["Field # at priority #", 1, 4], ["Field # at priority #", 3, 11], ["Field # at priority #", 50, 14]]
}, {
    "parts": [{"pos": [-70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 0],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [20, 80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-20, 80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [70, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [70, -30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, -30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [70, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, -70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-70, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine02", "dir": 0}, {
        "pos": [50, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -70], "type": "HArmor1x1Angle", "dir": 0}, {"pos": [0, 40], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 1000], ["Stay in #m range of slot # units", 400, 3], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [-90, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, -20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [70, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-70, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-70, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [90, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 80], "type": "HArmor2x2Front1", "dir": 0}, {
        "pos": [-80, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine01", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [10, -80], "type": "Wing1x2", "dir": 0}, {
        "pos": [-10, -80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Circle", "---", "Less Range", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "---", "More Range", 1500], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 9], ["Field # at priority #", 2, 12]]
}, {
    "parts": [{"pos": [50, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [30, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Engine01", "dir": 0}, {
        "pos": [-50, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-70, -10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [70, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-80, 20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [80, 20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-90, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [90, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [70, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-30, 110], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 110],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["Stay in #m range of slot # units", 150, 3], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 3]]
}, {
    "parts": [{"pos": [40, -80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [30, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-30, 40],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [30, 40], "type": "Reactor1x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-70, -110], "type": "Engine02", "dir": 0}, {
        "pos": [-30, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [70, -110], "type": "Engine02", "dir": 0}, {
        "pos": [-90, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [90, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, -120], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [20, -120],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-50, -130], "type": "Engine02", "dir": 0}, {
        "pos": [50, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-60, -40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [60, -40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [60, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-60, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-90, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, -20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-50, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, -70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, -160],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [0, 40], "type": "PDTurret", "dir": 0}, {"pos": [0, -80], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Flee", 1000], ["Stay in #m range of slot # units", 300, 3], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 2, 10]]
}, {
    "parts": [{"pos": [-40, 80], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-20, -40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "Mount90", "dir": 0}, {
        "pos": [-80, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [80, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [90, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [70, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [110, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [50, 110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount30", "dir": 0}, {"pos": [0, 40], "type": "Mount30", "dir": 0}, {
        "pos": [90, -40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-90, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [70, -50], "type": "Engine01", "dir": 0}, {
        "pos": [-110, -40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Engine01", "dir": 0}, {
        "pos": [50, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount90", "dir": 0}, {
        "pos": [-20, 120],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine01", "dir": 0}, {
        "pos": [30, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [20, 120], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-50, 110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 80], "type": "Battery2x2", "dir": 0}, {
        "pos": [0, -80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [20, -40], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [110, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-130, -50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-100, -80],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [100, -80], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-110, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-120, 0], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [110, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-90, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [130, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-130, -70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [120, 0],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-130, 30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [130, -50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [130, 30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-80, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-150, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [150, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-10, -110],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, -110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-40, 0], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 0], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "More expensive", 10000], ["Stay in #m range of slot # units", 300, 3], ["Field # at priority #", 2, 13]]
}, {
    "parts": [{"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [70, -20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-70, -20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-10, -90], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, -90],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [50, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-30, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [30, 20], "type": "Battery1x2", "dir": 0}, {
        "pos": [0, -70],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 35], ["@attackTypes enemy within #m", "Flee", 1000], ["Stay in #m range of slot # units", 200, 3], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 8]]
}];
ais.all.Podlings = [{
    "parts": [{"pos": [80, 20], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, 110],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [90, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount360", "dir": 0}, {
        "pos": [70, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-40, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [80, -20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [80, -60], "type": "Engine07", "dir": 0}, {
        "pos": [120, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [120, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [120, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [90, 70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [70, 90],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-70, 90], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [120, 30],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [0, 60], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 15], ["Avoid #dps danger areas", 1], ["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "More HP", 1200], ["@capTypes Command Points within #m", "Capture", 250], ["@capTypes Command Points within #m", "Protect", 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 13]]
}, {
    "parts": [{"pos": [-10, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 1], ["Avoid everything"], ["Avoid #dps danger areas", 1], ["@capTypes Command Points within #m", "Capture", 250], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 2, 3], ["Field # at priority #", 1, 7], ["Field # at priority #", 1, 10]]
}, {
    "parts": [{"pos": [70, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [40, 30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-30, 10],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-110, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-80, 70],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-80, 10], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [30, 10],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-80, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-80, -20],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-110, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-110, 60],
        "type": "VArmor1x1Hook",
        "dir": 0
    }, {"pos": [50, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [30, 50],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "Battery2x2", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [0, 40], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [-80, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-40, 40], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 1], ["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy within #m", "Stay at range", 400], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Brick", 500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 600], ["Stay in #m range of slot # units", 500, 6], ["Stay in #m range of slot # units", 500, 7], ["@capTypes Command Points within #m", "Spread to", 2000], ["Field # for # of ship in slot # at priority #", 2, 1, 6, 7], ["Field # at priority #", 2, 7], ["Field # at priority #", 3, 10]]
}, {
    "parts": [{"pos": [-40, 170], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [190, 150],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [20, 50], "type": "Battery2x1", "dir": 0}, {
        "pos": [20, 80],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [90, 70], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [20, 150],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [20, -10], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [20, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [10, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [190, 90], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [190, 70],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [190, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [80, 130],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [170, -10], "type": "Engine02", "dir": 0}, {
        "pos": [160, 170],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [160, 30], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [120, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [80, 100], "type": "Mount180", "dir": 0}, {
        "pos": [150, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-40, 140], "type": "Mount180", "dir": 0}, {
        "pos": [-70, 150],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-70, 130], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-40, 110],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [-40, 90], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [-10, 130],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [160, 80], "type": "Mount270", "dir": 0}, {
        "pos": [160, 140],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [20, 120], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-10, 110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [60, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [160, 110],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [160, 50], "type": "Battery2x1", "dir": 0}, {
        "pos": [80, 100],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [160, 140], "type": "FlackTurret", "dir": 0}, {
        "pos": [160, 80],
        "type": "HeavyPDTurret",
        "dir": 0
    }, {"pos": [20, 80], "type": "PlasmaTurret", "dir": 0}, {"pos": [-40, 140], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 10, "Rest"], ["@capTypes Command Points within #m", "Protect", 800], ["@capTypes Command Points within #m", "Guard", 5000], ["Stay in #m range of slot # units", 400, 7], ["Stay in #m range of slot # units", 800, 8], ["Stay in #m range of slot # units", 800, 6], ["Field # at priority #", 1, 5], ["Field # at priority #", 2, 8], ["Field # at priority #", 3, 9]]
}, {
    "parts": [{"pos": [40, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -90],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [0, 80], "type": "Mount360", "dir": 0}, {
        "pos": [0, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 140],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [0, 10], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [-40, 170],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [140, 140], "type": "Reactor2x2", "dir": 0}, {
        "pos": [100, 150],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [140, 170], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [70, 140],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [150, 70], "type": "Engine01", "dir": 0}, {
        "pos": [130, 70],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [140, 110], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [0, 150],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [0, -20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-160, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-160, 90],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-160, 30], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [-170, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-150, -10], "type": "Engine01", "dir": 0}, {
        "pos": [-110, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-130, 70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [40, 170],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [40, 140], "type": "Mount90", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-80, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 140],
        "type": "HeavyBeamTurret",
        "dir": 0
    }, {"pos": [-40, 140], "type": "FlackTurret", "dir": 0}, {
        "pos": [0, 80],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [-40, 60], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 10], ["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@capTypes Command Points within #m", "Guard", 10000], ["Field # at priority #", 1, 7], ["Field # at priority #", 2, 9], ["Field # at priority #", 3, 13]]
}, {
    "parts": [{"pos": [-90, -90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-10, 10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [140, -110], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [140, -50],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [150, -150], "type": "Engine01", "dir": 0}, {
        "pos": [140, -30],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [-180, -50], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [140, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [110, -90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-170, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-190, -90], "type": "Engine01", "dir": 0}, {
        "pos": [0, -170],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [-110, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-130, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [0, -30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [0, -50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -70],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [90, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [110, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, -140],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [80, -170], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [0, -140],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [60, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 190],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [0, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [140, -80],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-150, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-70, 10], "type": "Engine01", "dir": 0}, {
        "pos": [-90, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, -90],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-90, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-30, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-50, 30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [170, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 150], "type": "OverKillAi", "dir": 0}, {
        "pos": [10, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [90, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [60, 180],
        "type": "HArmor2x2Front1",
        "dir": 0
    }, {"pos": [-110, 70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [170, -90],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-80, 130],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [70, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [60, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [70, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-170, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-190, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-180, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [90, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-100, -120], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-100, -150],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [70, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [170, -70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-110, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-180, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 120], "type": "HArmor2x2", "dir": 0}, {
        "pos": [60, 100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 160], "type": "Mount360", "dir": 0}, {
        "pos": [140, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [140, 70], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-180, 70],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [60, 140], "type": "Mount270", "dir": 0}, {
        "pos": [-40, -50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-40, -110], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, -130],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [130, -150], "type": "Engine01", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-80, 100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, -140],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 160], "type": "MissileTurret", "dir": 0}, {"pos": [60, 140], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 70], ["When #% of energy, @chargeTypes", 5, "Find recharger"], ["@attackTypes enemy @unitTypes within #m", "Stay at range", "Cruiser", 800], ["@capTypes Command Points within #m", "Capture", 300], ["@capTypes Command Points within #m", "Protect", 400], ["@capTypes Command Points within #m", "Spread to", 10000], ["Stay in #m range of friendly units", 400], ["Stay in #m range of slot # units", 900, 7], ["Field # at start", 1], ["Field # at priority #", 1, 7], ["Field # at priority #", 2, 14], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 4]]
}, {
    "parts": [{"pos": [110, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [110, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [40, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-160, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-160, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-150, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-160, -10], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [0, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, 150], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [0, -70],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [-40, 150], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [-170, -50],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [10, -100], "type": "Engine04", "dir": 0}, {
        "pos": [0, -20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount360", "dir": 0}, {
        "pos": [-10, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-160, 150], "type": "HArmor1x2Front2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [180, 130], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [180, 110],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [180, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [180, 90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [190, -50], "type": "Engine01", "dir": 0}, {
        "pos": [180, 60],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [180, 0], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [80, 60],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [-120, 50], "type": "Wing2x1", "dir": 0}, {
        "pos": [140, 50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [170, -50], "type": "Engine01", "dir": 0}, {
        "pos": [30, -90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, 10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [70, 30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [70, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [130, 30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-110, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-70, 130],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-70, 110], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [130, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, 120], "type": "Mount180", "dir": 0}, {
        "pos": [-160, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 120], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-160, 120],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 100], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [180, 60], "type": "PDTurret", "dir": 0}, {
        "pos": [-80, 60],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [80, 60], "type": "MissileTurret", "dir": 0}, {
        "pos": [0, 60],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [-40, 120], "type": "FlackTurret", "dir": 0}, {"pos": [40, 120], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 5, "Find recharger"], ["@attackTypes enemy @unitTypes within #m", "Attack", "Carrier", 900], ["@capTypes Command Points within #m", "Capture", 400], ["@capTypes Command Points within #m", "Protect", 1800], ["Stay in #m range of slot # units", 800, 6], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 5], ["Field # at priority #", 2, 9], ["Field # at priority #", 3, 14]]
}, {
    "parts": [{"pos": [-170, -10], "type": "Engine01", "dir": 0}, {
        "pos": [40, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 130], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -130], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [0, 190],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [10, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-10, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 160],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-160, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-160, 110], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-150, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-160, 60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-160, 30],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount360", "dir": 0}, {
        "pos": [-120, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [150, -30], "type": "Engine01", "dir": 0}, {
        "pos": [170, -30],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [160, 10], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [160, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [160, 90], "type": "HArmor1x2Front2", "dir": 0}, {
        "pos": [160, 60],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [-80, 60], "type": "Mount270", "dir": 0}, {
        "pos": [-40, 120],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [-160, 130], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [80, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [80, 20], "type": "Battery2x2", "dir": 0}, {
        "pos": [120, 40],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [0, 160], "type": "PDTurret", "dir": 0}, {
        "pos": [160, 60],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "PlasmaTurret", "dir": 0}, {
        "pos": [-80, 60],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [-40, 120], "type": "PlasmaTurret", "dir": 0}, {"pos": [80, 60], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 50], ["@capTypes Command Points within #m", "Capture", 200], ["When #% of energy, @chargeTypes", 10, "Find recharger"], ["Stay in #m range of slot # units", 600, 6], ["Stay in #m range of slot # units", 600, 7], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "Slower", 150, 750], ["@capTypes Command Points within #m", "Protect", 2000], ["@capTypes Command Points within #m", "Guard", 10000], ["Field # at start", 1], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 5], ["Field # at priority #", 2, 10], ["Field # at priority #", 3, 14]]
}, {
    "parts": [{"pos": [-150, -10], "type": "Engine01", "dir": 0}, {
        "pos": [-160, 30],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 120], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 120], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount30", "dir": 0}, {
        "pos": [0, 140],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 100], "type": "Mount30", "dir": 0}, {
        "pos": [-80, 130],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [120, 100],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [110, -10], "type": "Engine01", "dir": 0}, {
        "pos": [120, 30],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [150, 50], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [130, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [80, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [-130, 50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-110, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-160, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 120], "type": "Wing2x2", "dir": 0}, {
        "pos": [-170, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-110, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-80, 150],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-80, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-80, -70],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [-160, 100], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-160, 130],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [-110, 30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [0, -100],
        "type": "HArmor2x2Back2",
        "dir": 0
    }, {"pos": [120, 170], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [0, 170],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-80, 170], "type": "HArmor1x2Front2", "dir": 0}, {
        "pos": [120, 60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [120, 140],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, -70], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [40, 0], "type": "PDTurret", "dir": 0}, {
        "pos": [40, 120],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [120, 140], "type": "TorpTurret", "dir": 0}, {
        "pos": [120, 100],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 140], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-80, 100], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 120],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "TorpTurret", "dir": 0}, {
        "pos": [0, 60],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [-80, 60], "type": "MissileTurret", "dir": 0}, {"pos": [-160, 100], "type": "FlackTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Weaker", 400], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "More HP", "---", 1100], ["Stay in #m range of slot # units", 500, 6], ["Stay in #m range of slot # units", 450, 7], ["@capTypes Command Points within #m", "Capture", 200], ["@capTypes Command Points within #m", "Protect", 2000], ["@capTypes Command Points within #m", "Guard", 10000], ["Field # at priority #", 1, 8], ["Field # at priority #", 2, 11], ["Field # at priority #", 2, 15]]
}, {
    "parts": [{"pos": [-140, 60], "type": "Mount360", "dir": 0}, {
        "pos": [150, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount360", "dir": 0}, {
        "pos": [0, 40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [10, 100], "type": "Battery1x2", "dir": 0}, {
        "pos": [20, 70],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [80, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [20, -60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [110, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [20, -140],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [20, -100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [140, 20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [140, 60], "type": "Mount360", "dir": 0}, {
        "pos": [20, -180],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [140, -10], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [140, 90],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-140, 20], "type": "Battery2x2", "dir": 0}, {
        "pos": [-140, 90],
        "type": "HArmor1x2Font1",
        "dir": 0
    }, {"pos": [-10, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-140, -50],
        "type": "HArmor1x2Back1",
        "dir": 0
    }, {"pos": [-140, -20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-100, 10],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-60, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [10, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [10, -20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [10, 170], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [10, 140],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [30, -30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-150, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, 40], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [140, 60],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-140, 60], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 1], ["Avoid #dps danger areas", 1], ["When #% of energy, @chargeTypes", 10, "Flee enemies"], ["When #% of energy, @chargeTypes", 10, "Rest"], ["Find units that are out of energy"], ["Stay in #m range of friendly units", 900], ["Field # at priority #", 1, 6], ["Field # at priority #", 2, 9]]
}];
ais.all.PointDefender = [{
    "parts": [{"pos": [70, -70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-40, -50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [40, -50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount270", "dir": 0}, {
        "pos": [-30, 20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, 50], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, 10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [50, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -60], "type": "Mount270", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount90", "dir": 0}, {
        "pos": [0, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [50, -70], "type": "Battery1x1", "dir": 0}, {
        "pos": [-70, -70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-70, -30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -90], "type": "Engine02", "dir": 0}, {
        "pos": [30, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -100], "type": "Engine04", "dir": 0}, {
        "pos": [10, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [50, -100], "type": "Engine04", "dir": 0}, {
        "pos": [70, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -100], "type": "Engine04", "dir": 0}, {
        "pos": [-70, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "PDTurret", "dir": 0}, {
        "pos": [40, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "TorpTurret", "dir": 0}, {"pos": [-40, -20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Flee", 700], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Bomb", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "More HP", 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 2, 1], ["Field # at priority #", 5, 2]]
}, {
    "parts": [{"pos": [-20, 90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-60, 20], "type": "Mount90", "dir": 0}, {"pos": [60, 20], "type": "Mount90", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-110, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount90", "dir": 0}, {
        "pos": [40, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [110, -20], "type": "Engine04", "dir": 0}, {
        "pos": [90, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [80, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-90, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-50, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [100, 10],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-80, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [50, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-100, 10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [20, 90],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [130, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [70, 70], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, 70],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-130, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, 110],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, -30], "type": "Wing2x1", "dir": 0}, {
        "pos": [40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, -30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 110], "type": "Reactor2x1", "dir": 0}, {
        "pos": [60, 20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-60, 20], "type": "PDTurret", "dir": 0}, {
        "pos": [0, 60],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, -20], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 60], "type": "TorpTurret", "dir": 0}, {"pos": [0, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 2, 1], ["@attackTypes enemy within #m", "Attack", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 300, 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 40]]
}, "", "", "", "", "", "", "", ""];
ais.all.PushForce = [{
    "parts": [{"pos": [90, -120], "type": "HArmor1x2", "dir": 0}, {
        "pos": [90, -150],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-80, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [80, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [40, 80],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [-40, 80], "type": "Mount10Range", "dir": 0}, {
        "pos": [80, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [120, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-120, -20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [120, -20], "type": "DamageMod", "dir": 0}, {
        "pos": [-120, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, 140], "type": "Mount90", "dir": 0}, {
        "pos": [60, 140],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, 160], "type": "Mount30", "dir": 0}, {
        "pos": [0, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-20, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [20, 130], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-150, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [150, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-120, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-150, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-90, 140],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, 140], "type": "Wing1x2", "dir": 0}, {
        "pos": [140, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-140, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-160, -20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [160, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [120, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-130, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [170, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-170, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-100, -80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [130, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-100, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [150, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [100, -80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-110, -110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-90, -120],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -150], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [100, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [110, -110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-40, -100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, -100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-20, -140], "type": "HArmor2x2", "dir": 0}, {
        "pos": [20, -140],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-130, 110], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [130, 110],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-110, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-110, 110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-120, 80], "type": "HArmor2x2", "dir": 0}, {
        "pos": [120, 80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [110, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 110],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, -150], "type": "Engine02", "dir": 0}, {
        "pos": [70, -150],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -170], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-50, -170],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -140], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, -140],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [0, -170], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, -170],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -170], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 170],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, 180], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, 180],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 190], "type": "HArmor1x2Font1", "dir": 0}, {
        "pos": [50, 170],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, 150], "type": "HArmor1x1", "dir": 0}, {
        "pos": [30, 150],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, -190], "type": "HArmor1x2Back1", "dir": 0}, {
        "pos": [0, 100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [-80, 60],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-40, 80], "type": "WavePushTurret", "dir": 0}, {
        "pos": [40, 80],
        "type": "WavePushTurret",
        "dir": 0
    }, {"pos": [-60, 140], "type": "PDTurret", "dir": 0}, {
        "pos": [60, 140],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "HeavyBeamTurret", "dir": 0}, {
        "pos": [0, 160],
        "type": "HeavyPDTurret",
        "dir": 0
    }, {"pos": [80, 0], "type": "PlasmaTurret", "dir": 0}, {"pos": [-80, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Field # when money over # at priority #", 1, 2000, 999], ["Field # at priority #", 2, 5], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "more expensive", 300, 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "more expensive", 100, 2000], ["@attackTypes enemy within #m", "Attack", 2000], ["Stay in #m range of slot # units", 500, 1], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [-40, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "CloakGenerator", "dir": 0}, {
        "pos": [40, 40],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-10, 20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [10, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 50], "type": "Wing2x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 150], ["Stay in #m range of slot # units", 175, 1], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 6], ["Avoid #dps danger areas", 10], ["Goto @locationTypes", "friendly spawn"], ["Field # for # of ship in slot # at priority #", 2, 2, 1, 9], ["Field # for # of ship in slot # at priority #", 1, 3, 6, 5]]
}, {
    "parts": [{"pos": [60, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-30, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [80, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-90, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [90, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-60, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, -60],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-60, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [60, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [90, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [90, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-90, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-90, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "HeavyBeamTurret", "dir": 0}, {"pos": [0, 60], "type": "HeavyPDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "more expensive", 100, 2000], ["@attackTypes enemy within #m", "Attack", 2000], ["Stay in #m range of slot # units", 600, 1], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 6]]
}, {
    "parts": [{"pos": [60, 40], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-60, 70],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-20, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, -80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [20, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-40, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-20, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-20, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [60, 70],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [20, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [70, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -90],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-60, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, -80], "type": "PDTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "ArtilleryTurret",
        "dir": 0
    }, {"pos": [-40, -80], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 2, 1, 7], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "more arc", 1, 2300], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "more arc", 1, 2000], ["Stayaway in #m range from slot # units", 1900, 1], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Circle", "more expensive", 100, 10000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 2, 2, 1, 10], ["Field # for # of ship in slot # at priority #", 3, 2, 1, 13]]
}, {
    "parts": [{"pos": [0, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [80, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [-80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 70],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-40, 70], "type": "Wing2x1", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, 50], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-90, 50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [90, 50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [40, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-70, 50], "type": "HArmor1x1", "dir": 0}, {
        "pos": [70, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-80, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [40, 0],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [-40, 0], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 2, 1, 8], ["Field # for # of ship in slot # at priority #", 2, 2, 1, 12], ["Field # for # of ship in slot # at priority #", 3, 2, 1, 15], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "more expensive", 500, 2000], ["@attackTypes enemy within #m", "Attack", 2000], ["Stay in #m range of slot # units", 600, 1]]
}, {
    "parts": [{"pos": [30, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [0, -20],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-40, 30], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine03", "dir": 0}, {
        "pos": [30, -30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-40, 0],
        "type": "EMPGun",
        "dir": 0
    }, {"pos": [0, 20], "type": "EMPGun", "dir": 0}, {"pos": [40, 0], "type": "EMPGun", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 33, "Find recharger"], ["Stay in #m range of slot # units", 1750, 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "cloaked", "---", 1500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "more expensive", 100, 1000], ["@attackTypes enemy within #m", "Kite", 1000], ["Stay in #m range of slot # units", 1250, 1], ["When #% of energy, @chargeTypes", 60, "Find recharger"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 2, 2, 1, 11], ["Field # for # of ship in slot # at priority #", 4, 2, 1, 14], ["Field # for # of @needTypes at priority #", 1, 3, "cloak counter need", 6]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount30", "dir": 0, "ghostCopy": true}, {
        "pos": [-30, 0],
        "type": "Reactor1x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-20, -40], "type": "CloakGenerator", "dir": 0, "ghostCopy": true}, {
        "pos": [10, -60],
        "type": "Engine03",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [10, -30], "type": "Wing1x1Round", "dir": 0, "ghostCopy": true}, {
        "pos": [0, 0],
        "type": "RingTurret",
        "dir": 0,
        "ghostCopy": true
    }], "name": "", "aiRules": []
}, {
    "parts": [{"pos": [-80, -20], "type": "CloakGenerator", "dir": 0}, {
        "pos": [0, -60],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-80, 20], "type": "Battery2x2", "dir": 0}, {
        "pos": [80, 20],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [80, -20], "type": "CloakGenerator", "dir": 0}, {
        "pos": [0, -20],
        "type": "AOEWarhead",
        "dir": 0
    }, {"pos": [-40, 40], "type": "AOEWarhead", "dir": 0}, {
        "pos": [0, 20],
        "type": "AOEWarhead",
        "dir": 0
    }, {"pos": [40, 40], "type": "AOEWarhead", "dir": 0}, {
        "pos": [-40, 0],
        "type": "AOEWarhead",
        "dir": 0
    }, {"pos": [-40, -40], "type": "AOEWarhead", "dir": 0}, {
        "pos": [40, -40],
        "type": "AOEWarhead",
        "dir": 0
    }, {"pos": [40, 0], "type": "AOEWarhead", "dir": 0}, {"pos": [0, 60], "type": "ShapedWarhead", "dir": 0}],
    "name": "",
    "aiRules": []
}, {
    "parts": [{"pos": [0, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [0, -20],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [-40, 0], "type": "AutoTurret", "dir": 0}, {
        "pos": [0, 20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 2, 1, 8], ["Field # at start", 1], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Guard", 10000]]
}, {
    "parts": [{"pos": [0, -20], "type": "CloakGenerator", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [30, 30], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine03", "dir": 0}, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "more arc", 1, 600], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "---", "---", 600], ["@attackTypes enemy within #m", "Attack", 600], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy within #m", "Circle", 1100], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 100]]
}];
ais.all.Razorback = [{
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }],
    "name": "",
    "aiRules": [["Avoid everything"], ["Avoid over #damage shots", 20], ["Field # at start", 1], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [-10, -40], "type": "Engine03", "dir": 0}, {
        "pos": [10, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [10, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, -10], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-50, -10],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-30, 30], "type": "UArmor1x1Angle", "dir": 0}, {"pos": [-20, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 1000], ["Field # at priority #", 1, 5], ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Fighter", 2], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 1000], ["When #% of energy, @chargeTypes", 70, "Find recharger"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Scout", 3], ["Try to field # every # seconds", 1, 30], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [0, -60], "type": "Mount180", "dir": 0}, {
        "pos": [90, 90],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [-30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [40, 100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 100], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [40, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-90, 90], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-50, 130], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, 130],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-110, 30], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-90, -10], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [90, -10],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, 110],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, -60], "type": "PDTurret", "dir": 0}, {"pos": [0, 40], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 3, 2, 1], ["Avoid over #damage shots", 180], ["Stay in #m range of slot # units", 400, 5], ["@attackTypes enemy within #m", "Kite", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less HP", 2500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Range", 2500], ["Find units that are out of energy"], ["@capTypes Command Points within #m", "Capture", 1000], ["Field # for # of ship in slot # at priority #", 1, 2, 5, 3], ["Field # at priority #", 1, 5]]
}, {
    "parts": [{"pos": [30, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, 10],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine03", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-30, 10], "type": "OverKillAi", "dir": 0}, {
        "pos": [-50, 10],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -30], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, 30],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Notch", "dir": 0}, {"pos": [0, 20], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Battleship", 800], ["When #% of energy, @chargeTypes", 80, "Find recharger"], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Battleship", 10000], ["@attackTypes enemy @unitTypes within #m", "Bomb", "Cruiser", 10000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "More HP", "Slower", 1000], ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Battleship", 1], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of enemy @unitTypes at priority #", 1, 1, "Cruiser", 1], ["Stay in #m range of slot # units", 500, 3], ["Field # at priority #", 1, 3]]
}, {
    "parts": [{"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [40, 60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-90, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-70, 140],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [80, 60], "type": "Mount30", "dir": 0}, {
        "pos": [0, -40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [70, 140], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, -60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-80, 60], "type": "Mount90", "dir": 0}, {
        "pos": [100, -40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-90, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [0, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [90, 130], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, 110],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-110, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [110, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-110, -40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, -70],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [80, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 120],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-80, 100], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 140], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 140], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [100, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-100, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [50, 170],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 170], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-130, -50],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [130, -50], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-100, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [100, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [130, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-70, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [40, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [130, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, -50], "type": "Engine02", "dir": 0}, {
        "pos": [70, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [70, -50], "type": "Engine02", "dir": 0}, {
        "pos": [0, 160],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-130, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-130, 30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [0, 120], "type": "MissileTurret", "dir": 0}, {
        "pos": [-80, 60],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [0, 40], "type": "HeavyPDTurret", "dir": 0}, {
        "pos": [0, -40],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [80, 60], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Avoid over #damage shots", 180], ["Field # at priority #", 2, 2], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Weaker", 1000], ["When #% of energy, @chargeTypes", 5, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "Less Range", 1200], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Less Range", "Stronger", 1200], ["@attackTypes enemy within #m", "Ram", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less DPS", 10000], ["@attackTypes enemy within #m", "Attack", 1500], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 60]]
}, "", "", "", "", ""];
ais.all.Rearguard = [{
    "parts": [{"pos": [-30, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Engine03", "dir": 0}, {
        "pos": [50, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-10, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [20, -40],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-20, -40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, -10], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [0, 20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-20, -40], "type": "TorpTurret", "dir": 0}, {"pos": [20, -40], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 5, "Rest"], ["When #% of energy, @chargeTypes", 10, "Find recharger"], ["@attackTypes enemy within #m", "Kite", 510], ["When #% of energy, @chargeTypes", 20, "Rest"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "Less Brawling Value", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [40, -60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount90", "dir": 0}, {"pos": [0, 80], "type": "Mount30", "dir": 0}, {
        "pos": [0, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, -60], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [90, 10], "type": "Engine02", "dir": 0}, {
        "pos": [40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [70, 10], "type": "Engine02", "dir": 0}, {
        "pos": [40, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-90, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-40, 100], "type": "Mount90", "dir": 0}, {
        "pos": [40, 100],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, 100], "type": "PDTurret", "dir": 0}, {
        "pos": [40, 100],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, -60],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [40, -60], "type": "FlackTurret", "dir": 0}, {"pos": [0, 20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "Less Brawling Value", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "Less Range", 2000], ["@attackTypes enemy within #m", "Attack", 1500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 25]]
}, {
    "parts": [{"pos": [-10, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-80, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-20, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [20, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-20, -40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [20, -40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, -80],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [40, -80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [40, 80],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-40, 80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [80, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [10, -90], "type": "Engine02", "dir": 0}, {
        "pos": [-60, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [60, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [50, -40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-40, -80], "type": "AutoTurret", "dir": 0}, {
        "pos": [40, -80],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [80, 0], "type": "AutoTurret", "dir": 0}, {
        "pos": [40, 80],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [-40, 80], "type": "AutoTurret", "dir": 0}, {"pos": [-80, 0], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "Slower", 2000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "---", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 6, 1, 1]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Battery1x1", "dir": 0}, {"pos": [0, 0], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stayaway in #m range from slot # units", 200, 4], ["Stay in #m range of slot # units", 500, 3], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 899, 2000], ["Field # for # of ship in slot # at priority #", 2, 1, 3, 1], ["Try to field # every # seconds", 1, 33], ["@capTypes Command Points within #m", "Capture", 10000]]
}, "", "", "", "", "", ""];
ais.all.RocketMan = [{
    "parts": [{"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [80, -90],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [-50, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -80], "type": "Engine04", "dir": 0}, {
        "pos": [50, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -80], "type": "Engine04", "dir": 0}, {
        "pos": [30, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-90, -70], "type": "Battery1x1", "dir": 0}, {
        "pos": [-60, -60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [90, -70], "type": "Battery1x1", "dir": 0}, {
        "pos": [60, -60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-80, -90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-90, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount90", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [0, 30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-60, -60], "type": "TorpTurret", "dir": 0}, {
        "pos": [60, -60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, -20], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 100, 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "Slower", 250, 800], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 250, 1200], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, "", "", "", "", "", "", "", "", ""];
ais.all.RushDown = [{
    "parts": [{"pos": [40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [50, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -60], "type": "Engine04", "dir": 0}, {
        "pos": [0, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [30, -60], "type": "Engine04", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, 70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-70, 60],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [70, 60], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-20, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [20, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [70, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-70, -60], "type": "Engine04", "dir": 0}, {
        "pos": [70, -20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-70, 20],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [70, 20], "type": "VArmor1x2IBeam", "dir": 0}, {"pos": [0, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 2], ["Try to field # every # seconds", 1, 32], ["Try to field # every # seconds", 2, 64], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "More expensive", 500], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Capture", 600], ["Stay in #m range of slot # units", 1500, 2], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "More expensive", 2000], ["@attackTypes enemy within #m", "Run-by", 1000], ["Stay in #m range of slot # units", 500, 2]]
}, {
    "parts": [{"pos": [-90, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -20], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount90", "dir": 0}, {
        "pos": [40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [-80, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [80, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [80, 100],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-80, 100], "type": "DamageMod", "dir": 0}, {
        "pos": [70, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 100], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [90, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-120, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [120, 60], "type": "Mount30", "dir": 0}, {
        "pos": [110, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-110, 10], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 120],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [40, 120], "type": "Wing2x2", "dir": 0}, {
        "pos": [0, 130],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [130, 10], "type": "Engine02", "dir": 0}, {
        "pos": [-130, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, -80],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [0, -100], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [40, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-120, 60], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [120, 60],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "AutoTurret", "dir": 0}, {
        "pos": [-80, 60],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [80, 60], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Less Brawling Value", "Slower", 1500], ["@attackTypes enemy within #m", "Attack", 400], ["@capTypes Command Points within #m", "Capture", 1000], ["Goto @locationTypes", "Enemy Army Middle"], ["Field # for # of ship in slot # at priority #", 1, 3, 4, 2]]
}, {
    "parts": [{"pos": [-10, -10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [10, -10], "type": "Wing1x1Notch", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 20], ["Field # at start", 4], ["@attackTypes enemy within #m", "Flee", 1000], ["Avoid #dps danger areas", 5], ["Avoid over #damage shots", 10], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 2, 5], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 5]]
}, {
    "parts": [{"pos": [-10, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [10, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount90", "dir": 0}, {
        "pos": [50, -10],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}, {"pos": [20, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 3, 3, 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Less DPS", 30, 600], ["Stay in #m range of slot # units", 500, 3], ["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 5], ["@capTypes Command Points within #m", "Capture", 10000]]
}, "", "", "", "", "", ""];
ais.all.ShieldMan = ["", "", "", {
    "parts": [{"pos": [-180, -20], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [180, -20],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [-170, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-110, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-130, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-90, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-70, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [70, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [90, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [110, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [130, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-150, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [150, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [0, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-180, 60], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-180, 20],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [180, 60], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [180, 20],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [10, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-30, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [170, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-190, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [190, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [190, 140],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [190, 100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-190, 140],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-190, 100], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-20, 30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [20, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-50, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [50, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-30, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-190, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [190, -60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-50, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -10], "type": "HArmor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 30], ["Field # at start", 2], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, "", "", "", "", "", ""];
ais.all.Sidewinder = [{
    "parts": [{"pos": [30, 120], "type": "Wing1x2", "dir": 0}, {
        "pos": [-30, 120],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-60, -20], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [60, -20],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-60, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [60, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-20, 60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [60, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [20, 60], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-60, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-60, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [60, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [0, 130],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [10, -30], "type": "Engine02", "dir": 0}, {
        "pos": [30, 90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 90], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-90, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-90, 10], "type": "Engine02", "dir": 0}, {
        "pos": [90, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, 10], "type": "Engine02", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [0, 100], "type": "Mount360", "dir": 0}, {
        "pos": [0, 20],
        "type": "MissileTurret",
        "dir": 0
    }, {"pos": [0, 100], "type": "SidewinderTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "Slower", 300, 800], ["@attackTypes enemy within #m", "Circle", 900], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 300, 1100], ["Field # at priority #", 5, 2], ["@capTypes command points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [40, 60], "type": "Mount30", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [60, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-30, 140],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [30, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-60, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-40, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [70, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-70, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [0, -40], "type": "Mount270", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-40, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, 140], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [40, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, -30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 150],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {"pos": [0, 40], "type": "Mount180", "dir": 0}, {
        "pos": [0, 120],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-60, -60], "type": "Mount90", "dir": 0}, {
        "pos": [-60, -100],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [60, -60], "type": "Mount90", "dir": 0}, {
        "pos": [60, -100],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-100, -80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [100, -80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-100, -40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [100, -40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, 0], "type": "PDTurret", "dir": 0}, {"pos": [0, 80], "type": "TorpTurret", "dir": 0}, {
        "pos": [0, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 60], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 60],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, -40], "type": "MissileTurret", "dir": 0}, {
        "pos": [-60, -100],
        "type": "SidewinderTurret",
        "dir": 0
    }, {"pos": [-60, -60], "type": "SidewinderTurret", "dir": 0}, {
        "pos": [60, -60],
        "type": "SidewinderTurret",
        "dir": 0
    }, {"pos": [60, -100], "type": "SidewinderTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 1, 1], ["@attackTypes enemy within #m", "Attack", 1200], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 1], ["@capTypes command points within #m", "Capture", 10000]]
}, "", "", "", "", "", "", "", ""];
ais.all.SiegeCore = [{
    "parts": [{"pos": [40, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [10, -30], "type": "Engine02", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [30, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, -20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-10, -50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "HeavyPDTurret",
        "dir": 0
    }, {"pos": [40, -20], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 500, 3], ["Stayaway in #m range from slot # units", 200, 2], ["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 1, 30], ["Field # for # of ship in slot # at priority #", 1, 1, 2, 3]]
}, {
    "parts": [{"pos": [-20, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount90", "dir": 0}, {
        "pos": [10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Mount90", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-50, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-20, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "PDTurret", "dir": 0}, {
        "pos": [-40, 20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, -20], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 1000], ["Stayaway in #m range from slot # units", 300, 1], ["Stay in #m range of slot # units", 700, 2], ["@attackTypes enemy within #m", "Attack", 1500], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 2, 1, 3, 2], ["Try to field # every # seconds", 1, 40]]
}, {
    "parts": [{"pos": [-60, 80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [100, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-40, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [20, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [70, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-60, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [20, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-20, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [20, 70],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [60, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, 100],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [60, 80], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-100, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-30, 100], "type": "Reactor1x2", "dir": 0}, {
        "pos": [30, 100],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [90, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-90, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, -80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-50, -40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [50, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 100],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-100, 0], "type": "AutoTurret", "dir": 0}, {
        "pos": [-60, 80],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [60, 80], "type": "AutoTurret", "dir": 0}, {
        "pos": [100, 0],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "ArtilleryTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Flee", 1000], ["Avoid #dps danger areas", 5], ["Stay in #m range of slot # units", 700, 4], ["Stayaway in #m range from slot # units", 700, 5], ["Find units that are out of energy"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 100, 3000], ["@attackTypes enemy within #m", "Attack", 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 1, 60], ["Field # for # of ship in slot # at priority #", 1, 4, 2, 1]]
}, {
    "parts": [{"pos": [10, 0], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-10, -30], "type": "Engine01", "dir": 0}, {
        "pos": [-10, 20],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-30, 40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [10, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-10, 60],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [-30, 80], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-50, 30], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Flee", 500], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Faster", 250, 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [0, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-30, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, 0],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [30, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-10, -40],
        "type": "VArmor1x2End",
        "dir": 0
    }, {"pos": [10, -40], "type": "VArmor1x2End", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["@capTypes Command Points within #m", "Capture", 600], ["Find units that are out of energy"], ["Stay in #m range of slot # units", 650, 3], ["Try to field # every # seconds", 1, 35]]
}, "", "", "", "", ""];
ais.all.Slowpoke = ["", "", "", "", "", "", {
    "parts": [{"pos": [-20, -90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [110, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [60, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [70, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-70, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Mount90", "dir": 0}, {"pos": [0, 20], "type": "Mount90", "dir": 0}, {
        "pos": [20, 60],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-20, 60], "type": "Mount90", "dir": 0}, {
        "pos": [-60, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [40, -60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount90", "dir": 0}, {
        "pos": [80, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [20, -160], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-20, -160],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [20, -90], "type": "Reactor2x1", "dir": 0}, {
        "pos": [160, -20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-120, -40], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [120, -40],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [140, 20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [120, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 110], "type": "Reactor2x1", "dir": 0}, {
        "pos": [100, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, -120], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, -120],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [10, 90], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-100, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-80, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-110, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-120, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -110], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -130],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-160, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-140, 20],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-90, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -50], "type": "Engine02", "dir": 0}, {
        "pos": [90, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -150], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [50, -150],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-40, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [40, -20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 60], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-40, -20],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, -40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-20, 60],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [80, 0], "type": "LightBeamTurret", "dir": 0}, {"pos": [-80, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 10, 1], ["@attackTypes enemy within #m", "Attack", 1000], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine04", "dir": 0}, {"pos": [-10, 10], "type": "Battery1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Try to field # every # seconds", 1, 30], ["Field # at start", 2], ["@capTypes Command Points within #m", "Spread to", 10000]]
}, "", ""];
ais.all.SparkShower = [{
    "parts": [{"pos": [-40, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, -70], "type": "Battery1x1", "dir": 0}, {"pos": [0, 0], "type": "TeslaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1200, 2], ["@attackTypes enemy within #m", "Kite", 2000], ["Avoid everything"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [0, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [0, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [70, -10], "type": "Engine02", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [50, -60], "type": "Battery1x2", "dir": 0}, {
        "pos": [-70, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [70, 40], "type": "Wing1x2", "dir": 0}, {"pos": [0, 0], "type": "TeslaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of friendly units", 500], ["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Kite", 1500], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 35], ["Field # when money over # at priority #", 1, 1000, 1], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [30, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "TorpTurret", "dir": 0}, {"pos": [-20, 40], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 800, 4], ["Avoid over #damage shots", 20], ["@attackTypes enemy within #m", "Attack", 1500], ["Stay in #m range of slot # units", 400, 4], ["Avoid everything"], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # for # of ship in slot # at priority #", 2, 1, 4, 1], ["Try to field # every # seconds", 1, 25]]
}, {
    "parts": [{"pos": [50, -50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [40, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [0, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-50, -50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [80, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -80], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, 100],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [80, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-80, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 100], "type": "PDTurret", "dir": 0}, {"pos": [0, 0], "type": "TeslaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 800, 1], ["Avoid everything"], ["Stay in #m range of slot # units", 1200, 2], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 1, 40]]
}, {
    "parts": [{"pos": [0, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -20], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [0, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [50, -10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -10], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-50, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-40, 20], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 26, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Stronger", "More Brawling Value", 1400], ["@attackTypes enemy within #m", "Attack", 550], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "Slower", 1000], ["Avoid #dps danger areas", 5], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 1, 1], ["Try to field # every # seconds", 1, 30]]
}, "", "", "", "", ""];
ais.all.StaticAI = ["", "", "", "", "", "", "", "", "", ""];
ais.all.SuperBelfry = [{
    "parts": [{"pos": [-80, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [80, -20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -110], "type": "Engine02", "dir": 0}, {
        "pos": [50, -110],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, -110], "type": "Engine02", "dir": 0}, {
        "pos": [40, -60],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount270", "dir": 0}, {
        "pos": [40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-80, 60], "type": "Wing2x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [80, -100], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [80, 60],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 20],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, -60],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [80, -60], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [0, -80],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 70], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -110],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-40, 70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [40, 70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-50, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 150], ["@attackTypes enemy within #m", "Ram", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at priority #", 100, 1], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [10, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, -20], "type": "Engine04", "dir": 0}, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 30], ["Field # at start", 2]]
}, "", "", "", "", "", "", "", ""];
ais.all.SwarmLord = [{
    "parts": [{"pos": [40, -80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-120, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-80, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [80, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-40, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-80, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-120, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-120, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [-60, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-140, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [60, 80],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [120, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [80, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [120, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [140, 80], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-20, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 120],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 120], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 160],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [20, 160], "type": "TargetingMod", "dir": 0}, {
        "pos": [-80, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [100, 80], "type": "Mount360", "dir": 0}, {
        "pos": [-80, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-100, 80], "type": "Mount360", "dir": 0}, {
        "pos": [0, 120],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [80, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-120, -60], "type": "Mount360", "dir": 0}, {
        "pos": [120, -60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [160, -80], "type": "TargetingMod", "dir": 0}, {
        "pos": [160, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [120, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-120, -100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-160, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [-160, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [120, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-120, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [120, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -120],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [150, -110], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-150, -110],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-150, -10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [150, -10],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-150, 50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [150, 50],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, 150], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-50, 150],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-150, 110], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [150, 110],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-90, -130], "type": "Engine02", "dir": 0}, {
        "pos": [-70, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -130], "type": "Engine02", "dir": 0}, {
        "pos": [50, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [70, -130], "type": "Engine02", "dir": 0}, {
        "pos": [90, -130],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [110, -130], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-110, -130],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -150], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-30, -150],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [190, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [190, -30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-190, -90], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-190, -30],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [30, 190], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 190],
        "type": "HArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -130], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, -110],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, -110], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, -130],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-190, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-190, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [190, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [190, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [10, 190], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-10, 190],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [0, -160], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-100, 80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, 120], "type": "PDTurret", "dir": 0}, {
        "pos": [100, 80],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-120, -60], "type": "PDTurret", "dir": 0}, {"pos": [120, -60], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["Goto @locationTypes", "Friendly Army Middle"]]
}, {
    "parts": [{"pos": [40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-50, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, -30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-40, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "TorpTurret", "dir": 0}, {
        "pos": [40, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 700, 1], ["@attackTypes enemy within #m", "Attack", 1000], ["Stayaway in #m range from slot # units", 400, 2], ["Try to field # every # seconds", 1, 35], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [90, 0], "type": "Engine04", "dir": 0}, {
        "pos": [0, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-20, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-10, -40], "type": "Engine04", "dir": 0}, {
        "pos": [40, 10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-40, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [50, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [70, 0], "type": "Engine04", "dir": 0}, {"pos": [-70, 0], "type": "Engine04", "dir": 0}, {
        "pos": [0, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-90, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [110, 0], "type": "Engine04", "dir": 0}, {
        "pos": [-110, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-70, 30], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [70, 60], "type": "Battery1x2", "dir": 0}, {
        "pos": [-100, 40],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [100, 40], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-30, 110],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 110], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-60, 110],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [60, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [-90, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [90, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [70, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-70, 90], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 90],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 60], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 30], ["When #% of energy, @chargeTypes", 55, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Wiggle", "More Range", 700, 2000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "Slower", 140, 3000], ["Stay in #m range of slot # units", 800, 1], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 15], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [30, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [40, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount90", "dir": 0}, {"pos": [0, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [40, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-60, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [60, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "Wing1x2", "dir": 0}, {"pos": [0, 40], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 45, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Bomb", "More HP", 250, 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 20], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [20, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [20, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 400, 7], ["Stay in #m range of slot # units", 500, 6], ["@attackTypes enemy within #m", "Attack", 520], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["Avoid over #damage shots", 5], ["Avoid #dps danger areas", 5], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 1, 2], ["Field # at start", 3], ["Try to field # every # seconds", 20, 70]]
}, {
    "parts": [{"pos": [40, -20], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-50, -20], "type": "Battery1x2", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [0, 60], "type": "Mount30", "dir": 0}, {
        "pos": [0, -20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-70, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-70, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-50, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -50], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-40, 20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "AutoTurret", "dir": 0}, {
        "pos": [0, 60],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 500, 7], ["@attackTypes enemy within #m", "Attack", 1000], ["Stay in #m range of slot # units", 500, 1], ["Avoid over #damage shots", 50], ["Avoid #dps danger areas", 5], ["Try to field # every # seconds", 1, 90]]
}, {
    "parts": [{"pos": [-70, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-110, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-60, -40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-30, -30],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-90, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-90, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [90, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-110, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-90, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-110, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-110, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-10, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [10, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [90, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [110, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [110, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [110, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [110, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-10, -10], "type": "Engine02", "dir": 0}, {
        "pos": [10, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 6, 1], ["Stay in #m range of slot # units", 1000, 6], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More Range", 1005, 800], ["When Shields down to #%, flee", 10], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 900, 3000], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More Range", 500, 3000], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {"parts": [], "name": "", "aiRules": []}, "", ""];
ais.all.Tank = [{
    "parts": [{"pos": [-50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [-50, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [20, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [50, 20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [10, 0],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-20, 0], "type": "Mount90", "dir": 0}, {
        "pos": [10, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-20, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "Slower", 850], ["@attackTypes enemy within #m", "Attack", 750], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 1, 25], ["Try to field # every # seconds", 1, 60]]
}, {
    "parts": [{"pos": [-60, 0], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [60, 0],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [40, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-100, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [30, 0],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [100, -20], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-10, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, -40], "type": "Mount90", "dir": 0}, {
        "pos": [70, -40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [10, 60], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-30, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -80], "type": "Engine04", "dir": 0}, {
        "pos": [-100, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-60, -80], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [60, -80],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [100, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [-90, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [90, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [40, -40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-40, -40], "type": "LightBeamTurret", "dir": 0}, {"pos": [0, 20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 600], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 30]]
}, "", {"parts": [], "name": "", "aiRules": []}, "", "", "", "", {"parts": [], "name": "", "aiRules": []}, ""];
ais.all.Targets = [{
    "parts": [{"pos": [30, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-20, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [30, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [50, -10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, 0], "type": "Battery2x2", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 2, 40]]
}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
ais.all.Tempest = [{
    "parts": [{"pos": [100, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-100, -60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 80], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, -80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-80, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [80, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-70, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-50, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [50, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [70, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, -70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-50, -70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, -70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-70, -50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-70, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-100, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-140, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [-120, 100],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [100, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [140, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [120, 100], "type": "Mount360", "dir": 0}, {
        "pos": [120, -100],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-140, 140], "type": "TargetingMod", "dir": 0}, {
        "pos": [-120, -100],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [100, 140], "type": "TargetingMod", "dir": 0}, {
        "pos": [-160, 100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-100, 140], "type": "TargetingMod", "dir": 0}, {
        "pos": [-140, -140],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [140, 140], "type": "TargetingMod", "dir": 0}, {
        "pos": [160, 100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-100, -140], "type": "DamageMod", "dir": 0}, {
        "pos": [100, -140],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [140, -140], "type": "DamageMod", "dir": 0}, {
        "pos": [160, -100],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [140, -60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-140, -60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-160, -100], "type": "TargetingMod", "dir": 0}, {
        "pos": [-50, -110],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-30, -110], "type": "Engine01", "dir": 0}, {
        "pos": [-10, -130],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [30, -110], "type": "Engine01", "dir": 0}, {
        "pos": [50, -110],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [10, -130], "type": "Engine01", "dir": 0}, {
        "pos": [-80, -100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [80, -100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [80, 100],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-80, 100], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-120, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [120, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-160, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [160, 0], "type": "Mount360", "dir": 0}, {
        "pos": [-70, -150],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [70, -150], "type": "Engine01", "dir": 0}, {
        "pos": [-30, 100],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, 100],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [50, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [-10, 120],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [10, 120], "type": "Wing1x2", "dir": 0}, {
        "pos": [170, 140],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-170, 140], "type": "Wing1x2", "dir": 0}, {
        "pos": [-170, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [170, -60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-90, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-110, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-130, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-150, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [90, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [110, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [130, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [150, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [150, -30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [130, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [110, -30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [90, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-90, -30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-110, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-130, -30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [-150, -30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-170, 30],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [170, 30], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [120, 0],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-160, 0], "type": "FlackTurret", "dir": 0}, {
        "pos": [160, 0],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [-120, 0], "type": "FlackTurret", "dir": 0}, {
        "pos": [-120, -100],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [-120, 100], "type": "PlasmaTurret", "dir": 0}, {
        "pos": [120, 100],
        "type": "PlasmaTurret",
        "dir": 0
    }, {"pos": [120, -100], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 80], ["When #% of energy, @chargeTypes", 50, "Rest"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Kite", "More expensive", 400, 1500], ["Goto @locationTypes", "Friendly Army Middle"], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "HArmor1x1Angle", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine04", "dir": 0}, {
        "pos": [10, -30],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [30, -30], "type": "HArmor1x1AngleBack", "dir": 0}, {
        "pos": [-10, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 300], ["@capTypes Command Points within #m", "Capture", 1000], ["Avoid over #damage shots", 20], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 20, 30]]
}, {
    "parts": [{"pos": [40, 40], "type": "HArmor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-10, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-40, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-10, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-40, 40],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [0, 70], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, 70], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, 40], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1500, 1], ["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 5, 50]]
}, {"parts": [], "name": "", "aiRules": []}, {}, {}, {}, {"parts": [], "name": "", "aiRules": []}, {}, {}];
ais.all.ThePounder = [{
    "parts": [{"pos": [70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [40, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount360", "dir": 0}, {
        "pos": [-40, 70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [40, 70], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, -40], "type": "Battery2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [-40, 90], "type": "Wing2x1", "dir": 0}, {
        "pos": [-70, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [70, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [70, 20],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [0, -60], "type": "Engine07", "dir": 0}, {
        "pos": [0, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 90], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 0],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-70, -40], "type": "UArmor1x2", "dir": 0}, {
        "pos": [70, -40],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [40, 40], "type": "ReloaderMod", "dir": 0}, {"pos": [0, 20], "type": "HeavyBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Less HP", 400, 300], ["Avoid over #damage shots", 100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Less HP", 400, 700], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Slower", "More Brawling Value", 1100], ["Stay in #m range of slot # units", 5000, 4], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "Slower", 1200], ["@capTypes Command Points within #m", "Capture", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Slower", "Less Brawling Value", 2000], ["@capTypes Command Points within #m", "Capture", 2000], ["@capTypes Command Points within #m", "Protect", 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 2, 7, 1], ["Field # for # of ship in slot # at priority #", 2, 3, 7, 1]]
}, {
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [10, 10], "type": "Reactor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 1], ["@attackTypes enemy within #m", "Flee", 500], ["@attackTypes enemy within #m", "Flee", 800], ["@attackTypes enemy within #m", "Flee", 1000], ["@attackTypes enemy within #m", "Flee", 1600], ["Avoid over #damage shots", 5], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 2, 2], ["Field # at priority #", 2, 4], ["Try to field # every # seconds", 1, 44]]
}, {
    "parts": [{"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [30, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [30, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [10, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-10, -30],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Ram", 250], ["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 25, "Find recharger"], ["@attackTypes enemy within #m", "Flee", 750], ["@attackTypes enemy within #m", "Kite", 1000], ["@capTypes Command Points within #m", "Guard", 2000], ["@capTypes Command Points within #m", "Spread to", 2000], ["@attackTypes enemy within #m", "Backstab", 2000], ["Stay in #m range of slot # units", 600, 8], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 5, 2, 5, 4]]
}, {
    "parts": [{"pos": [110, 30], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [80, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [90, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [40, 120],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-40, 120], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-80, 80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 120], "type": "Mount30", "dir": 0}, {
        "pos": [80, 120],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 80], "type": "Mount30", "dir": 0}, {
        "pos": [-10, 130],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-70, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-110, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [10, 130], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 0],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [80, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [10, 90], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, 110],
        "type": "OverKillAi",
        "dir": 0
    }, {"pos": [-30, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-10, 100],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-50, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-80, 40], "type": "Mount30", "dir": 0}, {
        "pos": [80, -40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-110, 30], "type": "Engine02", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-40, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [40, -20], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, 70],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-10, 70], "type": "HArmor1x1", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount180",
        "dir": 0
    }, {"pos": [110, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [0, -60], "type": "Mount30", "dir": 0}, {
        "pos": [-80, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-90, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, -20],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [0, -60], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [-80, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-80, 80], "type": "TorpTurret", "dir": 0}, {
        "pos": [80, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-40, 80], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 120],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-80, 120], "type": "TorpTurret", "dir": 0}, {
        "pos": [40, 80],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, 80], "type": "TorpTurret", "dir": 0}, {
        "pos": [80, 120],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, -40], "type": "TorpTurret", "dir": 0}, {
        "pos": [0, 20],
        "type": "FlackTurret",
        "dir": 0
    }, {"pos": [40, 120], "type": "BombGun", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 400], ["Avoid over #damage shots", 150], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 300, 650], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "Slower", 180, 900], ["Avoid over #damage shots", 50], ["When #% of energy, @chargeTypes", 20, "Rest"], ["@capTypes Command Points within #m", "Capture", 1200], ["@attackTypes enemy @unitTypes within #m", "Ram", "Carrier", 1600], ["@attackTypes enemy @unitTypes within #m", "Ram", "Battleship", 1600], ["@attackTypes enemy @unitTypes within #m", "Ram", "Cruiser", 1600], ["@attackTypes enemy @unitTypes within #m", "Ram", "Destroyer", 1600], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 300, 1600], ["@capTypes Command Points within #m", "Capture", 750], ["Stay in #m range of slot # units", 600, 4], ["Stay in #m range of slot # units", 1200, 8], ["@capTypes Command Points within #m", "Capture", 3000], ["When #% of energy, @chargeTypes", 40, "Rest"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "---", 1800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "---", "More expensive", 1800], ["@capTypes Command Points within #m", "Capture", 90000], ["Field # at start", 2], ["Field # at priority #", 1, 1], ["Field # at priority #", 2, 3], ["Field # at priority #", 3, 6], ["Field # at priority #", 2, 7], ["Field # at priority #", 2, 8]]
}, {
    "parts": [{"pos": [10, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [10, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, -30], "type": "UArmor1x1", "dir": 0}, {
        "pos": [30, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy within #m", "Attack", 350], ["Avoid #dps danger areas", 50], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "More Range", 1000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 800], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 800], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 800], ["@capTypes Command Points within #m", "Spread to", 1500], ["@capTypes Command Points within #m", "Protect", 2500], ["Stay in #m range of slot # units", 500, 4], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 2000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 2000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Try to field # every # seconds", 1, 44], ["Try to field # every # seconds", 1, 54]]
}, {
    "parts": [{"pos": [0, -20], "type": "Mount30", "dir": 0}, {
        "pos": [10, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-10, -60], "type": "Engine03", "dir": 0}, {
        "pos": [-10, 10],
        "type": "UArmor1x1",
        "dir": 0
    }, {"pos": [10, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-30, -50],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, -20], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 260], ["Avoid over #damage shots", 20], ["Stay in #m range of friendly units", 2500], ["When #% of energy, @chargeTypes", 15, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "More Brawling Value", "---", 1700], ["@capTypes Command Points within #m", "Protect", 2500], ["@attackTypes enemy @unitTypes within #m", "Attack", "Scout", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Swarmer", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Fighter", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Interceptor", 3000], ["@attackTypes enemy @unitTypes within #m", "Attack", "Bomber", 3000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Faster", "---", 3000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 4], ["Field # for # of ship in slot # at priority #", 1, 2, 5, 7], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [-20, 20], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, 50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [10, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-20, 20], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Ram", 350], ["Avoid over #damage shots", 22], ["Stay in #m range of slot # units", 4000, 4], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "---", 750], ["@attackTypes enemy @unitTypes within #m", "Ram", "Carrier", 1000], ["@attackTypes enemy @unitTypes within #m", "Ram", "Battleship", 1000], ["@attackTypes enemy @unitTypes within #m", "Ram", "Cruiser", 1000], ["@attackTypes enemy @unitTypes within #m", "Ram", "Destroyer", 1000], ["@attackTypes enemy within #m", "Ram", 750], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "---", "More expensive", 3000], ["@attackTypes enemy within #m", "Backstab", 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 4, 2, 5, 4]]
}, {
    "parts": [{"pos": [0, -70], "type": "Reactor2x1", "dir": 0}, {
        "pos": [80, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount270", "dir": 0}, {
        "pos": [-30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, -60],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-30, 60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [40, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-80, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [50, 50], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-50, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine01", "dir": 0}, {
        "pos": [0, 80],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [40, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-40, 20],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 100], ["@attackTypes enemy within #m", "Ram", 350], ["Stay in #m range of slot # units", 800, 4], ["@attackTypes enemy within #m", "Flee", 1200], ["Avoid over #damage shots", 50], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More expensive", 300, 1200], ["Avoid over #damage shots", 21], ["@capTypes Command Points within #m", "Capture", 1000], ["@capTypes Command Points within #m", "Protect", 1000], ["Stay in #m range of slot # units", 400, 4], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Faster", 200, 2000], ["@capTypes Command Points within #m", "Guard", 1000], ["Goto @locationTypes", "Friendly Spawn"], ["Field # at priority #", 1, 2], ["Field # at priority #", 2, 7]]
}, {
    "parts": [{"pos": [10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Notch", "dir": 0}, {"pos": [10, 10], "type": "Reactor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 5], ["@attackTypes enemy within #m", "Flee", 600], ["Avoid #dps danger areas", 5], ["@attackTypes enemy within #m", "Flee", 860], ["Stay in #m range of slot # units", 1000, 4], ["@attackTypes enemy within #m", "Flee", 1300], ["Stayaway in #m range from slot # units", 200, 9], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Circle", "More Range", 1000, 1400], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More Range", 1000, 5000], ["@attackTypes enemy within #m", "Flee", 1600], ["@capTypes Command Points within #m", "Spread to", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 8, 2], ["Field # for # of ship in slot # at priority #", 2, 2, 4, 5], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 5]]
}, ""];
ais.all.TorpMan = [{
    "parts": [{"pos": [0, 80], "type": "Mount270", "dir": 0}, {
        "pos": [-70, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount270", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount270", "dir": 0}, {
        "pos": [-30, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [30, 60], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, 20],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-30, 60], "type": "Wing1x2", "dir": 0}, {"pos": [70, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 50],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [0, -10], "type": "HArmor2x1", "dir": 0}, {
        "pos": [10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-70, -60], "type": "Engine04", "dir": 0}, {
        "pos": [70, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-70, -30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [70, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TorpTurret", "dir": 0}, {
        "pos": [40, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 20], "type": "TorpTurret", "dir": 0}, {"pos": [0, 80], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at priority #", 100, 2], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Flee", "Slower", 100, 600], ["@capTypes Command Points within #m", "Capture", 200], ["@attackTypes enemy within #m", "Circle", 1100], ["@capTypes Command Points within #m", "Capture", 10000]]
}, "", {"parts": [], "name": "", "aiRules": []}, "", "", "", "", "", "", ""];
ais.all.TorpSupport = [{
    "parts": [{"pos": [0, -10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [-50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 20], "type": "Mount90", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [50, -10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-10, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TorpTurret", "dir": 0}, {
        "pos": [0, 20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Field # at start", 2], ["Try to field # every # seconds", 1, 15], ["Avoid #dps danger areas", 5], ["@attackTypes enemy within #m", "Flee", 500], ["Stay in #m range of friendly units", 500], ["@attackTypes enemy within #m", "Attack", 1800], ["Goto @locationTypes", "Friendly Army Middle"]]
}, "", "", "", "", "", "", "", "", ""];
ais.all.TorpSwarm = [{
    "parts": [{"pos": [0, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -30],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [-30, -50], "type": "Battery1x1", "dir": 0}, {
        "pos": [30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -30], "type": "Wing1x1Round", "dir": 0}, {"pos": [0, -40], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Run-by", "Faster", "---", 500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "No PD", "Less Range", 900], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Backstab", "Has PD", "Less Range", 1500], ["@attackTypes enemy within #m", "Stay at range", 900], ["@attackTypes enemy within #m", "Kite", 1100], ["@capTypes Command Points within #m", "Capture", 1600], ["Stay in #m range of slot # units", 1500, 3], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 8], ["Field # at priority #", 100, 3]]
}, {
    "parts": [{"pos": [-20, -20], "type": "Mount180", "dir": 0}, {
        "pos": [10, 30],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-60, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-20, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-50, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [20, -20], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-10, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-20, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-70, -50],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -50], "type": "Reactor1x1", "dir": 0}, {
        "pos": [10, -60],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-50, -60], "type": "Engine03", "dir": 0}, {"pos": [-20, -20], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy within #m", "Stay at range", 850], ["@capTypes Command Points within #m", "Spread to", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Kite", "Slower", "Less HP", 4000], ["When #% of energy, @chargeTypes", 80, "Find recharger"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 1], ["Try to field # every # seconds", 1, 60], ["Field # at priority #", 1, 2]]
}, {
    "parts": [{"pos": [40, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, 30],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [70, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [70, 40],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [40, -20], "type": "Mount360Micro", "dir": 0}, {
        "pos": [0, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [40, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, 10], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-40, -20],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [-70, 40], "type": "HArmor1x2", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, 70], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-50, -60],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 90], "type": "HArmor2x1", "dir": 0}, {
        "pos": [-40, 80],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [70, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [40, -20], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 60], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["Avoid over #damage shots", 40], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "---", "Stronger", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 1, 7, 1, 1], ["Field # at start", 1]]
}, "", "", "", "", "", "", ""];
ais.all.TurtleFence = [{
    "parts": [{"pos": [-70, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [140, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 80], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-120, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-90, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [60, 80],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-40, 100], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [20, 100],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-10, 30], "type": "Engine02", "dir": 0}, {
        "pos": [50, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, 80],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [10, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-190, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-160, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [100, 60],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [70, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [170, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [110, 10], "type": "Engine02", "dir": 0}, {
        "pos": [-130, 10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [30, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [10, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-50, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [10, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [90, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [90, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-110, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-110, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-90, 30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [70, 30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-170, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [150, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-150, 10], "type": "ShieldGen1x1", "dir": 0}, {"pos": [130, 10], "type": "ShieldGen1x1", "dir": 0}],
    "name": "",
    "aiRules": [["When Shields down to #%, flee", 30], ["Avoid over #damage shots", 150], ["Stay in #m range of slot # units", 600, 2], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "More DPS", 10, 700], ["@capTypes Command Points within #m", "Capture", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Goto @locationTypes", "Enemy Army Middle"], ["Field # at priority #", 1, 2]]
}, {
    "parts": [{"pos": [-30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [70, -30], "type": "Engine02", "dir": 0}, {
        "pos": [70, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount270", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-70, -30], "type": "Engine02", "dir": 0}, {
        "pos": [0, -30],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [-70, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [40, -20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -20], "type": "Mount90", "dir": 0}, {
        "pos": [-40, 20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [0, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 0], "type": "TorpTurret", "dir": 0}, {
        "pos": [40, -20],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-40, -20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When Shields down to #%, flee", 30], ["Stay in #m range of slot # units", 500, 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Faster", 150, 400], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "Slower", 150, 800], ["@attackTypes enemy within #m", "Attack", 1200], ["@capTypes Command Points within #m", "Capture", 1000], ["Field # at priority #", 3, 3]]
}, {
    "parts": [{"pos": [-10, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-10, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine04", "dir": 0}, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}],
    "name": "",
    "aiRules": [["When Shields down to #%, flee", 30], ["Avoid over #damage shots", 20], ["Avoid #dps danger areas", 400], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 2]]
}, {
    "parts": [{"pos": [-30, 50], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [0, 30], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [0, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-10, -10], "type": "Engine02", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Mount270", "dir": 0}, {
        "pos": [30, 50],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-40, 20], "type": "TorpTurret", "dir": 0}, {"pos": [40, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When Shields down to #%, flee", 30], ["Avoid over #damage shots", 20], ["When #% of energy, @chargeTypes", 20, "Flee enemies"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Circle", "Faster", 200, 600], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Stay at range", "Slower", 170, 900], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Circle", "Slower", 200, 1100], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 200, 1300], ["When #% of energy, @chargeTypes", 20, "Rest"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at priority #", 10, 4]]
}, "", "", "", "", "", ""];
ais.all.WaveMotion = [{
    "parts": [{"pos": [-40, 0], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-10, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -80], "type": "Engine04", "dir": 0}, {
        "pos": [50, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, -40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-20, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [10, -80],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Battery1x2", "dir": 0}, {
        "pos": [70, -70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [50, -40], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [70, -40],
        "type": "VArmor1x1CornerBack",
        "dir": 0
    }, {"pos": [-70, -40], "type": "VArmor1x1CornerBack", "dir": 0}, {
        "pos": [-50, -70],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [0, 30], "type": "Battery2x1", "dir": 0}, {
        "pos": [40, 0],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [-20, -40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [0, 0],
        "type": "WavePullTurret",
        "dir": 0
    }, {"pos": [20, -40], "type": "WavePullTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Weaker", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Run-by", "---", "Less Brawling Value", 1000], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "Less Arc", 180, 1800], ["@capTypes Command Points within #m", "Capture", 10000], ["Try to field # every # seconds", 1, 25], ["Field # for # of ship in slot # at priority #", 1, 10, 2, 5]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -10],
        "type": "VArmor1x1Corner1",
        "dir": 0
    }, {"pos": [10, -30], "type": "VArmor1x1Corner1", "dir": 0}, {"pos": [20, 0], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 350], ["When #% of energy, @chargeTypes", 35, "Find recharger"], ["@capTypes Command Points within #m", "Capture", 300], ["Stay in #m range of slot # units", 500, 1], ["Avoid everything"], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # when money over # at priority #", 6, 1000, 1], ["Try to field # every # seconds", 8, 40], ["Field # at start", 6]]
}, {
    "parts": [{"pos": [-20, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-60, 0], "type": "Mount30", "dir": 0}, {"pos": [0, 40], "type": "Mount270", "dir": 0}, {
        "pos": [20, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 40], "type": "Mount360Micro", "dir": 0}, {
        "pos": [80, 40],
        "type": "Mount360Micro",
        "dir": 0
    }, {"pos": [60, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-60, -40], "type": "Wing2x2", "dir": 0}, {
        "pos": [60, -40],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [-20, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [20, 10], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -10],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [30, -30], "type": "Engine01", "dir": 0}, {
        "pos": [-30, -30],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [60, 0], "type": "WavePushTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "WavePushTurret",
        "dir": 0
    }, {"pos": [-60, 0], "type": "WavePushTurret", "dir": 0}, {
        "pos": [0, 40],
        "type": "WavePushTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "WavePushTurret", "dir": 0}, {
        "pos": [-80, 40],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [80, 40], "type": "PDTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid #dps danger areas", 20], ["Avoid over #damage shots", 25], ["Find units that are out of energy"], ["Field # for # of ship in slot # at priority #", 1, 2, 1, 1], ["Field # for # of ship in slot # at priority #", 1, 6, 2, 1]]
}, {
    "parts": [{"pos": [0, -40], "type": "Mount30", "dir": 0}, {
        "pos": [-30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount90", "dir": 0}, {
        "pos": [0, 0],
        "type": "WavePushTurret",
        "dir": 0
    }, {"pos": [0, -40], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 1000, 3], ["@attackTypes enemy within #m", "Attack", 700], ["@attackTypes enemy within #m", "Ram", 1200], ["Stay in #m range of slot # units", 500, 3], ["Field # for # of ship in slot # at priority #", 4, 1, 3, 5], ["Try to field # every # seconds", 1, 35]]
}, "", "", "", "", "", ""];
ais.all.Waxon = [{
    "parts": [{"pos": [40, -20], "type": "VArmor2x2", "dir": 0}, {
        "pos": [-20, 80],
        "type": "VArmor2x2Angle",
        "dir": 0
    }, {"pos": [-20, 20], "type": "Mount90", "dir": 0}, {
        "pos": [0, 50],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [30, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [40, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [50, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-20, -20], "type": "VArmor2x2", "dir": 0}, {
        "pos": [10, 70],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [40, 80], "type": "VArmor2x2Angle", "dir": 0}, {
        "pos": [70, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-50, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [10, 90],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [-50, 10], "type": "Solar1x1", "dir": 0}, {
        "pos": [70, 10],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "Engine01", "dir": 0}, {
        "pos": [10, 30],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [-50, -10], "type": "Solar1x1", "dir": 0}, {
        "pos": [70, -10],
        "type": "Solar1x1",
        "dir": 0
    }, {"pos": [-20, 20], "type": "AutoTurret", "dir": 0}, {"pos": [40, 20], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 75, "Find recharger"], ["Avoid over #damage shots", 20], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Less Brawling Value", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Slower", "Weaker", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Field # at priority #", 1, 2], ["Try to field # every # seconds", 1, 20]]
}, {
    "parts": [{"pos": [-10, -20], "type": "Engine04", "dir": 0}, {
        "pos": [-10, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [20, 0], "type": "Mount360Micro", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-30, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, -30],
        "type": "HArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [20, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 35, "Find recharger"], ["Stay in #m range of slot # units", 300, 1], ["Stayaway in #m range from slot # units", 200, 2], ["@attackTypes enemy within #m", "Kite", 1000], ["Field # at start", 2], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 2], ["Try to field # every # seconds", 2, 35]]
}, {
    "parts": [{"pos": [-30, -20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [50, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-80, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [80, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [0, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [30, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 60],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, 20], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, 60], "type": "TargetingMod", "dir": 0}, {
        "pos": [-50, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, -20], "type": "Reactor1x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [-80, 0], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 0],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, -30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [80, -30],
        "type": "HArmor2x1",
        "dir": 0
    }, {"pos": [-50, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-30, 100], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, 100],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 110], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -70],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [0, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid #dps danger areas", 40], ["Stay in #m range of friendly units", 1000], ["@attackTypes enemy within #m", "Kite", 1200], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 1], ["Field # for # of ship in slot # at priority #", 1, 2, 4, 2], ["Goto @locationTypes", "Friendly Army Middle"], ["Field # at start", 1]]
}, {
    "parts": [{"pos": [40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [-20, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [30, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-30, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-50, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [50, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-50, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [50, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-40, -30], "type": "Battery2x1", "dir": 0}, {
        "pos": [0, -20],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [0, 10], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [-30, 70],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, 70], "type": "Battery1x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [30, -50], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [50, -50],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-50, -50], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}, {"pos": [0, 80], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 300], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "Weaker", 3000], ["Stay in #m range of slot # units", 700, 3], ["Try to field # every # seconds", 1, 40], ["Field # for # of ship in slot # at priority #", 1, 1, 3, 5]]
}, {
    "parts": [{"pos": [-10, -10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-10, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [10, -30], "type": "Wing1x1Notch", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid #dps danger areas", 5], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@capTypes Command Points within #m", "Capture", 525], ["Stay in #m range of slot # units", 300, 1], ["Stayaway in #m range from slot # units", 400, 1], ["Field # for # of ship in slot # at priority #", 1, 3, 1, 2], ["Field # at start", 2], ["Try to field # every # seconds", 1, 45]]
}, "", "", {
    "parts": [{"pos": [-30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [-70, 0],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [30, -50], "type": "Engine02", "dir": 0}, {
        "pos": [10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [0, -30],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [-50, -30], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, -30],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-60, -60], "type": "HArmor2x2AngleBack", "dir": 0}, {
        "pos": [60, -60],
        "type": "HArmor2x2AngleBack",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [70, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [0, 0],
        "type": "EnergyTransfer",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [80, 40],
        "type": "HArmor2x2Angle",
        "dir": 0
    }, {"pos": [-80, 40], "type": "HArmor2x2Angle", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [20, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, 80], "type": "DamageMod", "dir": 0}, {"pos": [0, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": []
}, {
    "parts": [{"pos": [-50, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [-50, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Wing1x2", "dir": 0}, {
        "pos": [30, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [0, 0], "type": "Battery2x2", "dir": 0}, {
        "pos": [0, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-30, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [50, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "Battery1x1", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount90", "dir": 0}, {"pos": [20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [0, 80],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-20, 40], "type": "LightBeamTurret", "dir": 0}, {
        "pos": [20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [0, 80], "type": "LightBeamTurret", "dir": 0}], "name": "", "aiRules": []
}, {
    "parts": [{"pos": [40, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-30, -20],
        "type": "HArmor1x2",
        "dir": 0
    }, {"pos": [30, -30], "type": "Engine02", "dir": 0}, {
        "pos": [10, 10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [10, 30], "type": "Battery1x1", "dir": 0}, {
        "pos": [10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-20, 20], "type": "Mount90", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [50, -20], "type": "HArmor1x2", "dir": 0}, {
        "pos": [0, 50],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [30, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [50, 50],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 50], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-50, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [70, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-20, 20],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, 20], "type": "AutoTurret", "dir": 0}], "name": "", "aiRules": []
}];
ais.all.Yarki = [{
    "parts": [{"pos": [30, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-30, 40],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [0, 0], "type": "Mount270", "dir": 0}, {
        "pos": [-20, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [50, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-50, -40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [20, -40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-70, -50],
        "type": "VArmor1x1Corner2",
        "dir": 0
    }, {"pos": [70, -50], "type": "VArmor1x1Corner2", "dir": 0}, {
        "pos": [-10, 40],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [10, 40], "type": "Battery1x2", "dir": 0}, {
        "pos": [-30, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, -80], "type": "Engine04", "dir": 0}, {
        "pos": [10, -80],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -80], "type": "Engine04", "dir": 0}, {
        "pos": [-20, -40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [20, -40], "type": "TorpTurret", "dir": 0}, {"pos": [0, 0], "type": "MissileTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 1150], ["@capTypes command points within #m", "Spread to", 10000], ["Field # at priority #", 5, 1], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [-30, 40], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [-50, 0],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [0, 50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 70],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-30, -10], "type": "Engine02", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [0, -20],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [50, 0], "type": "VArmor1x2IBeam", "dir": 0}, {
        "pos": [30, 40],
        "type": "VArmor1x2IBeam",
        "dir": 0
    }, {"pos": [-50, 40], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-30, 80],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [30, 80], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [50, 40],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [70, 0], "type": "VArmor1x2Corner4", "dir": 0}, {
        "pos": [-70, 0],
        "type": "VArmor1x2Corner4",
        "dir": 0
    }, {"pos": [10, 90], "type": "Wing1x1Angle", "dir": 0}, {
        "pos": [-10, 90],
        "type": "Wing1x1Angle",
        "dir": 0
    }, {"pos": [0, 20], "type": "AutoTurret", "dir": 0}, {"pos": [0, -20], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes command points within #m", "Spread to", 10000], ["Field # at start", 5], ["Field # at priority #", 5, 2], ["Try to field # every # seconds", 2, 30]]
}, {"parts": [], "name": "", "aiRules": []}, "", "", "", {"parts": [], "name": "", "aiRules": []}, "", "", ""];
ais.all.Zeus = [{
    "parts": [{"pos": [160, -120], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-10, 110],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-60, -80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-100, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-60, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-100, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-100, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [-60, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [60, -80], "type": "TargetingMod", "dir": 0}, {
        "pos": [100, -80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [60, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [100, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [60, 80], "type": "TargetingMod", "dir": 0}, {
        "pos": [100, 80],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 40], "type": "Mount270", "dir": 0}, {
        "pos": [-80, -40],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-80, -120], "type": "Mount270", "dir": 0}, {
        "pos": [80, -120],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [80, -40], "type": "Mount270", "dir": 0}, {
        "pos": [80, 40],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [-120, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 120],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [120, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [-60, 160],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [40, 120], "type": "TargetingMod", "dir": 0}, {
        "pos": [60, 160],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-100, 160], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-80, 120],
        "type": "Mount270",
        "dir": 0
    }, {"pos": [80, 120], "type": "Mount270", "dir": 0}, {
        "pos": [100, 160],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-120, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [120, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [120, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, -120], "type": "DamageMod", "dir": 0}, {
        "pos": [120, -120],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, -120], "type": "DamageMod", "dir": 0}, {
        "pos": [-120, -120],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-120, -40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [60, -160], "type": "DamageMod", "dir": 0}, {
        "pos": [-100, -160],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [30, 80], "type": "Reactor1x2", "dir": 0}, {
        "pos": [10, 80],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [100, -160], "type": "DamageMod", "dir": 0}, {
        "pos": [-60, -160],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-10, 80], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-30, 80],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-30, 0], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [10, 0], "type": "Reactor1x2", "dir": 0}, {
        "pos": [30, 0],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [30, -80], "type": "Reactor1x2", "dir": 0}, {
        "pos": [10, -80],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [-10, -80], "type": "Reactor1x2", "dir": 0}, {
        "pos": [-30, -80],
        "type": "Reactor1x2",
        "dir": 0
    }, {"pos": [0, -50], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, -30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, 30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 50],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -120], "type": "Battery2x2", "dir": 0}, {
        "pos": [-30, -170],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-10, -170], "type": "Engine01", "dir": 0}, {
        "pos": [10, -170],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [150, -170], "type": "Engine01", "dir": 0}, {
        "pos": [-130, -170],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [130, -170], "type": "Engine01", "dir": 0}, {
        "pos": [30, -170],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [170, -170], "type": "Engine01", "dir": 0}, {
        "pos": [190, -170],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [-150, -170], "type": "Engine01", "dir": 0}, {
        "pos": [-190, -170],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [140, -80], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [10, 110],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-170, -170], "type": "Engine01", "dir": 0}, {
        "pos": [10, 130],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-10, 130], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-10, 150],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [10, 150], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [30, 150],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [30, 170], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [10, 170],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-10, 170], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-30, 170],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-30, 150], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-130, 90],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-130, 70], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-130, 10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [-130, -10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [130, -10],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [130, 10], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [130, 70],
        "type": "ShieldGen1x1",
        "dir": 0
    }, {"pos": [130, 90], "type": "ShieldGen1x1", "dir": 0}, {
        "pos": [-130, 160],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [130, 160], "type": "Wing1x2", "dir": 0}, {
        "pos": [-160, 150],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [180, -10], "type": "Wing2x1", "dir": 0}, {
        "pos": [180, 10],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [180, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [180, 50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [180, 70], "type": "Wing2x1", "dir": 0}, {
        "pos": [180, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [180, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [180, 130],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [160, 150], "type": "Wing2x1", "dir": 0}, {
        "pos": [-180, 130],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-180, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [-180, 90],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-180, 70], "type": "Wing2x1", "dir": 0}, {
        "pos": [-180, 50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-180, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-180, 10],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-180, -10], "type": "Wing2x1", "dir": 0}, {
        "pos": [-150, 120],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-150, 40], "type": "UArmor1x2", "dir": 0}, {
        "pos": [150, 40],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [150, 120], "type": "UArmor1x2", "dir": 0}, {
        "pos": [210, -120],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [190, -80], "type": "Wing1x2", "dir": 0}, {
        "pos": [200, -50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [170, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-210, -120],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-190, -80], "type": "Wing1x2", "dir": 0}, {
        "pos": [-200, -50],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-170, -40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-150, -40],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-170, -80], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-190, -120],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [190, -120], "type": "UArmor1x2", "dir": 0}, {
        "pos": [170, -80],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [150, -40], "type": "UArmor1x2", "dir": 0}, {
        "pos": [210, -150],
        "type": "UArmor1x1AngleBack",
        "dir": 0
    }, {"pos": [-210, -150], "type": "UArmor1x1AngleBack", "dir": 0}, {
        "pos": [-20, 190],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [20, 190], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-50, 190],
        "type": "UArmor1x1Angle",
        "dir": 0
    }, {"pos": [50, 190], "type": "UArmor1x1Angle", "dir": 0}, {
        "pos": [150, 0],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [150, 80], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-150, 80],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-150, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-160, -120],
        "type": "ShieldGen2x2",
        "dir": 0
    }, {"pos": [-140, -80], "type": "ShieldGen2x2", "dir": 0}, {
        "pos": [-80, 120],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [80, 120], "type": "TeslaTurret", "dir": 0}, {
        "pos": [-80, -40],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [-80, 40], "type": "TeslaTurret", "dir": 0}, {
        "pos": [80, 40],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [80, -40], "type": "TeslaTurret", "dir": 0}, {
        "pos": [-80, -120],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [80, -120], "type": "TeslaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 40, "Return to Spawn"], ["Avoid over #damage shots", 100], ["When Shields down to #%, flee", 25], ["Stay in #m range of slot # units", 400, 7], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Attack", "Slower", 120, 5000], ["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Avoid over #damage shots", 20], ["Stay in #m range of friendly units", 500]]
}, {
    "parts": [{"pos": [0, 90], "type": "ShieldGen2x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "Reactor1x1",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount360", "dir": 0}, {
        "pos": [0, 20],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 60], "type": "DamageMod", "dir": 0}, {
        "pos": [40, 0],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [-80, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [80, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [-110, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-40, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-80, 90], "type": "Battery2x1", "dir": 0}, {
        "pos": [80, 90],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [10, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-10, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [30, -60], "type": "Engine04", "dir": 0}, {
        "pos": [-30, -60],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [20, -30], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-20, -30],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [20, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [-20, 110],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [-70, -40], "type": "Engine04", "dir": 0}, {
        "pos": [70, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [110, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-90, -40], "type": "Engine04", "dir": 0}, {
        "pos": [110, 20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-110, 20], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, -10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [80, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [-40, 40],
        "type": "AutoTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "AutoTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 15, "Find recharger"], ["Avoid over #damage shots", 45], ["Avoid #dps danger areas", 25], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Weaker", "Less Brawling Value", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Less Brawling Value", "More expensive", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Weaker", "---", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Bomb", "Less Brawling Value", "Weaker", 10000], ["Find units that are out of energy"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 3], ["Field # for # of ship in slot # at priority #", 1, 2, 6, 1]]
}, {
    "parts": [{"pos": [-20, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [20, 0],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-20, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-20, -30],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [-50, -10], "type": "Engine02", "dir": 0}, {"pos": [10, -30], "type": "HArmor1x1", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 300, 7], ["Stayaway in #m range from slot # units", 250, 3], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "More expensive", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "---", "---", 1000], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 1], ["Field # for # of ship in slot # at priority #", 1, 1, 7, 5], ["Field # for # of ship in slot # at priority #", 1, 8, 7, 2], ["Field # for # of ship in slot # at priority #", 1, 1, 5, 1], ["Field # for # of ship in slot # at priority #", 1, 1, 1, 2]]
}, {
    "parts": [{"pos": [-190, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [180, 0],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-80, 40], "type": "Mount30", "dir": 0}, {
        "pos": [80, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [40, 40], "type": "Mount30", "dir": 0}, {"pos": [-40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-160, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-120, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [160, 40], "type": "Mount30", "dir": 0}, {
        "pos": [120, 40],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-180, 0], "type": "Mount30", "dir": 0}, {
        "pos": [190, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [30, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [10, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-10, 0], "type": "Battery1x2", "dir": 0}, {
        "pos": [-160, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [0, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [40, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [-80, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [180, 0],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-120, 40], "type": "TorpTurret", "dir": 0}, {
        "pos": [120, 40],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [160, 40], "type": "TorpTurret", "dir": 0}, {"pos": [-180, 0], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 300, 7], ["@attackTypes enemy within #m", "Attack", 1500], ["Goto @locationTypes", "Enemy Army Middle"], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 4, 3, 3], ["Field # for # of ship in slot # at priority #", 1, 7, 7, 2]]
}, "", {
    "parts": [{"pos": [0, -30], "type": "Reactor2x1", "dir": 0}, {
        "pos": [0, 110],
        "type": "ShieldGen2x1",
        "dir": 0
    }, {"pos": [20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [40, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [0, 40],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-20, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [40, -40],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-40, 110], "type": "Wing2x1", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [50, 80], "type": "Battery1x2", "dir": 0}, {
        "pos": [-50, 80],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [50, 0],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [-50, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [70, 40],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-70, 40], "type": "Wing1x2", "dir": 0}, {
        "pos": [-70, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [70, 10], "type": "Battery1x1", "dir": 0}, {"pos": [0, 40], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 45, "Find recharger"], ["Avoid over #damage shots", 25], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Slower", "More HP", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Less Brawling Value", "---", 1000], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "More Range", 1000], ["When #% of energy, @chargeTypes", 100, "Find recharger"], ["Goto @locationTypes", "Enemy Spawn"], ["Field # for # of ship in slot # at priority #", 1, 5, 7, 3]]
}, {
    "parts": [{"pos": [-40, 0], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-10, 0],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-110, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-90, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-40, 30],
        "type": "HArmor1x2Front2",
        "dir": 0
    }, {"pos": [-40, 60], "type": "HArmor2x2Front1", "dir": 0}, {
        "pos": [-40, -30],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-40, -60], "type": "HArmor2x2Back1", "dir": 0}],
    "name": "",
    "aiRules": [["@capTypes Command Points within #m", "Capture", 700], ["Avoid #dps danger areas", 10], ["Stayaway in #m range from slot # units", 250, 7], ["Stay in #m range of slot # units", 2000, 1], ["Find units that are out of energy"], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "More expensive", "---", 1000], ["Field # at priority #", 1, 1], ["Field # at priority #", 1, 3], ["Field # at priority #", 1, 4], ["Try to field # every # seconds", 1, 35], ["Try to field # every # seconds", 1, 50], ["Try to field # every # seconds", 1, 80], ["Try to field # every # seconds", 1, 110], ["Try to field # every # seconds", 1, 95], ["Field # at priority #", 1, 5], ["@capTypes Command Points within #m", "Capture", 10000]]
}, {
    "parts": [{"pos": [-40, -60], "type": "HArmor2x2Back1", "dir": 0}, {
        "pos": [-90, -10],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-70, 0], "type": "HArmor1x2", "dir": 0}, {
        "pos": [-60, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [-20, 40], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, -30],
        "type": "HArmor1x2Back2",
        "dir": 0
    }, {"pos": [-90, 30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [10, 30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [0, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-40, 0],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, 0], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 800, 7], ["@attackTypes enemy within #m", "Attack", 1000], ["Stay in #m range of slot # units", 400, 10], ["Stayaway in #m range from slot # units", 400, 7], ["When #% of energy, @chargeTypes", 50, "Find recharger"], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 4], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 5], ["Field # for # of ship in slot # at priority #", 1, 3, 7, 6]]
}, {
    "parts": [{"pos": [-30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [0, 10],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-20, 40], "type": "Mount90", "dir": 0}, {
        "pos": [20, 40],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [30, 10], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-20, 40],
        "type": "LightBeamTurret",
        "dir": 0
    }, {"pos": [20, 40], "type": "LightBeamTurret", "dir": 0}],
    "name": "",
    "aiRules": [["When #% of energy, @chargeTypes", 20, "Find recharger"], ["Avoid over #damage shots", 30], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Slower", "Cloaked", 600], ["Stay in #m range of slot # units", 600, 1], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Backstab", "Less Arc", 100, 500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Stay at range", "Stronger", "More Brawling Value", 1500], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Attack", "Weaker", "Less Brawling Value", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # for # of ship in slot # at priority #", 3, 4, 7, 2]]
}, {}];
ais.all.Zyro = [{
    "parts": [{"pos": [50, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [0, 60],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [30, 70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [0, 20],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-30, 70], "type": "Wing1x1Notch", "dir": 0}, {
        "pos": [-40, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-50, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Reactor1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [30, -20], "type": "Engine03", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine03",
        "dir": 0
    }, {"pos": [0, -20], "type": "BulletSpeedMod", "dir": 0}, {"pos": [0, 20], "type": "TorpTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid everything"], ["When #% of energy, @chargeTypes", 20, "Find recharger"], ["When #% weaker enemy is within #% of unit range, attack", 20, 300], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 4], ["Try to field # every # seconds", 2, 30]]
}, {
    "parts": [{"pos": [70, -50], "type": "UArmor1x1", "dir": 0}, {
        "pos": [100, -80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [-50, 80], "type": "Wing1x2", "dir": 0}, {
        "pos": [40, 40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [-20, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [50, 80],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-40, 40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [20, 80],
        "type": "BulletSpeedMod",
        "dir": 0
    }, {"pos": [-20, 80], "type": "BulletSpeedMod", "dir": 0}, {
        "pos": [-70, -90],
        "type": "Engine01",
        "dir": 0
    }, {"pos": [0, 40], "type": "Mount360", "dir": 0}, {
        "pos": [-100, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [-70, -50], "type": "UArmor1x1", "dir": 0}, {
        "pos": [-110, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [-80, -20], "type": "Mount30", "dir": 0}, {
        "pos": [-100, -80],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [70, -90], "type": "Engine01", "dir": 0}, {
        "pos": [100, -50],
        "type": "Battery2x1",
        "dir": 0
    }, {"pos": [80, -20], "type": "Mount30", "dir": 0}, {
        "pos": [110, -20],
        "type": "Wing1x2",
        "dir": 0
    }, {"pos": [20, 0], "type": "DamageMod", "dir": 0}, {
        "pos": [0, -80],
        "type": "Engine07",
        "dir": 0
    }, {"pos": [-40, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [40, -40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [0, -40], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-50, 0],
        "type": "UArmor1x2",
        "dir": 0
    }, {"pos": [50, 0], "type": "UArmor1x2", "dir": 0}, {
        "pos": [-40, -70],
        "type": "UArmor2x1",
        "dir": 0
    }, {"pos": [40, -70], "type": "UArmor2x1", "dir": 0}, {
        "pos": [-100, -80],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [-80, -20], "type": "TorpTurret", "dir": 0}, {
        "pos": [100, -80],
        "type": "TorpTurret",
        "dir": 0
    }, {"pos": [80, -20], "type": "TorpTurret", "dir": 0}, {"pos": [0, 40], "type": "PlasmaTurret", "dir": 0}],
    "name": "",
    "aiRules": [["Avoid over #damage shots", 40], ["@attackTypes enemy within #m", "Attack", 1000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # at start", 2], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [-40, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [30, -40], "type": "Engine04", "dir": 0}, {
        "pos": [50, -40],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-50, -40], "type": "Engine04", "dir": 0}, {
        "pos": [40, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [0, 20], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [0, -20],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [40, 0], "type": "Battery2x2", "dir": 0}, {"pos": [-40, 0], "type": "Battery2x2", "dir": 0}],
    "name": "",
    "aiRules": [["Field # for # of ship in slot # at priority #", 1, 1, 2, 5], ["Stay in #m range of slot # units", 500, 2]]
}, "", "", "", "", "", "", ""];
ais.all.nulitor = [{
    "parts": [{"pos": [0, 0], "type": "Mount30", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Battery1x1",
        "dir": 0
    }, {"pos": [-30, -20], "type": "Engine04", "dir": 0}, {"pos": [0, 0], "type": "RingTurret", "dir": 0}],
    "name": "Ring",
    "aiRules": [["When #% of energy, @chargeTypes", 50, "Find recharger"], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "Cloaked", 1000], ["@attackTypes enemy within #m", "Attack", 1000], ["@capTypes Command Points within #m", "Spread to", 10000], ["Field # at start", 3], ["Try to field # every # seconds", 1, 30]]
}, {
    "parts": [{"pos": [-60, 0], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-30, -20],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-10, 0], "type": "Engine04", "dir": 0}, {
        "pos": [-30, 10],
        "type": "Wing1x1Notch",
        "dir": 0
    }, {"pos": [-20, 40], "type": "EnergyTransfer", "dir": 0}, {
        "pos": [-60, 40],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [20, 40], "type": "Reactor2x2", "dir": 0}, {"pos": [20, 0], "type": "CloakGenerator", "dir": 0}],
    "name": "",
    "aiRules": [["Stay in #m range of slot # units", 300, 10], ["Stay in #m range of friendly units", 500], ["Field # for # of ship in slot # at priority #", 1, 1, 10, 1], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Flee", "Slower", "Stronger", 600]]
}, {
    "parts": [{"pos": [-40, 30], "type": "Wing2x1", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-40, -80], "type": "CloakGenerator", "dir": 0}, {
        "pos": [40, -80],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [0, -20], "type": "Mount10Range", "dir": 0}, {
        "pos": [-40, -40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [40, 0], "type": "TargetingMod", "dir": 0}, {
        "pos": [-10, -100],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [40, -40], "type": "TargetingMod", "dir": 0}, {
        "pos": [40, 30],
        "type": "Wing2x1",
        "dir": 0
    }, {"pos": [0, 30], "type": "HArmor2x1", "dir": 0}, {
        "pos": [0, -70],
        "type": "Reactor2x1",
        "dir": 0
    }, {"pos": [0, -20], "type": "TeslaTurret", "dir": 0}], "name": "", "aiRules": []
}, {
    "parts": [{"pos": [-180, 180], "type": "Mount30", "dir": 0}, {
        "pos": [-180, 140],
        "type": "StasisField",
        "dir": 0
    }, {"pos": [-190, 100], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-190, 60],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [-190, 20], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-190, -20],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [-190, -60], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-190, -100],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [-190, -140], "type": "VArmor1x2SideBar", "dir": 0}, {
        "pos": [-190, -180],
        "type": "VArmor1x2SideBar",
        "dir": 0
    }, {"pos": [-130, -170], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-130, -150],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-110, -150], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-110, -130],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-90, -130], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-90, -110],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-70, -110], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-70, -90],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-50, -90], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-50, -70],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-30, -70], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-30, -50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-10, -50], "type": "VArmor1x1", "dir": 0}, {
        "pos": [-10, -30],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [10, -30], "type": "VArmor1x1", "dir": 0}, {
        "pos": [30, -10],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [10, -10], "type": "VArmor1x1", "dir": 0}, {
        "pos": [30, 10],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [50, 10], "type": "VArmor1x1", "dir": 0}, {
        "pos": [50, 30],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [70, 30], "type": "VArmor1x1", "dir": 0}, {
        "pos": [70, 50],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [90, 50], "type": "VArmor1x1", "dir": 0}, {
        "pos": [90, 70],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [110, 70], "type": "VArmor1x1", "dir": 0}, {
        "pos": [110, 90],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [130, 90], "type": "VArmor1x1", "dir": 0}, {
        "pos": [130, 110],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [150, 110], "type": "VArmor1x1", "dir": 0}, {
        "pos": [150, 130],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [170, 130], "type": "VArmor1x1", "dir": 0}, {
        "pos": [170, 150],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [190, 150], "type": "VArmor1x1", "dir": 0}, {
        "pos": [190, 170],
        "type": "VArmor1x1",
        "dir": 0
    }, {"pos": [-170, -190], "type": "Battery1x1", "dir": 0}, {
        "pos": [-150, -180],
        "type": "Engine04",
        "dir": 0
    }, {"pos": [-180, 180], "type": "WavePullTurret", "dir": 0}], "name": "", "aiRules": []
}, {
    "parts": [{"pos": [30, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-40, 40], "type": "Mount30", "dir": 0}, {
        "pos": [10, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-10, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-10, 40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [20, 40], "type": "Mount30", "dir": 0}, {
        "pos": [-50, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-10, -30],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [10, -30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, -10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, -30], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-30, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [20, 40], "type": "AutoTurret", "dir": 0}, {"pos": [-40, 40], "type": "BombGun", "dir": 0}],
    "name": "Probably an egg too",
    "aiRules": [["Stay in #m range of slot # units", 600, 10], ["When #% of energy, @chargeTypes", 30, "Find recharger"], ["Stayaway in #m range from slot # units", 140, 5], ["Stayaway in #m range from slot # units", 140, 6], ["Stay in #m range of friendly units", 1000], ["Avoid over #damage shots", 50], ["@attackTypes enemy within #m", "Attack", 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 1, 1, 6, 3]]
}, {
    "parts": [{"pos": [-30, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, -30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [50, 30], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-30, 10], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [50, 50],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [20, -10], "type": "Battery2x1", "dir": 0}, {
        "pos": [20, 60],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [30, 10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [10, 10],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-20, 60], "type": "Mount30", "dir": 0}, {
        "pos": [-10, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-10, -10], "type": "Engine02", "dir": 0}, {
        "pos": [-30, 30],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [50, -10], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-50, 10],
        "type": "Wing1x1Round",
        "dir": 0
    }, {"pos": [-20, 60], "type": "RingTurret", "dir": 0}, {"pos": [20, 60], "type": "BombGun", "dir": 0}],
    "name": "Probably an egg",
    "aiRules": [["When #% of energy, @chargeTypes", 30, "Find recharger"], ["@attackTypes enemy that is @absoluteTypes then # within #m", "Ram", "More expensive", 300, 1450], ["@attackTypes enemy that is @relativeTypes and @relativeTypes within #m", "Ram", "Cloaked", "Cloaked", 600], ["Stay in #m range of slot # units", 1400, 10], ["@attackTypes enemy within #m", "Attack", 1300], ["Stay in #m range of slot # units", 600, 10], ["Stayaway in #m range from slot # units", 140, 6], ["Stayaway in #m range from slot # units", 140, 5], ["Stay in #m range of friendly units", 1000], ["@attackTypes enemy within #m", "Attack", 3000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # for # of ship in slot # at priority #", 5, 1, 10, 4]]
}, {
    "parts": [{"pos": [50, 0], "type": "Wing1x2", "dir": 0}, {
        "pos": [-80, 40],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [-70, -50], "type": "Engine02", "dir": 0}, {
        "pos": [30, -50],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-60, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-20, 0],
        "type": "Mount360",
        "dir": 0
    }, {"pos": [-40, -40], "type": "ReloaderMod", "dir": 0}, {
        "pos": [0, -40],
        "type": "ReloaderMod",
        "dir": 0
    }, {"pos": [20, 0], "type": "ReloaderMod", "dir": 0}, {
        "pos": [-40, 40],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, 40], "type": "TargetingMod", "dir": 0}, {
        "pos": [30, 40],
        "type": "Battery1x2",
        "dir": 0
    }, {"pos": [-20, 0], "type": "PDTurret", "dir": 0}],
    "name": "Point defense?",
    "aiRules": [["Stay in #m range of slot # units", 50, 10], ["Stay in #m range of friendly units", 200], ["Field # for # of @needTypes at priority #", 1, 20, "Point Defense Need", 20]]
}, {
    "parts": [{"pos": [80, 60], "type": "CloakGenerator", "dir": 0}, {
        "pos": [40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [40, 80], "type": "DamageMod", "dir": 0}, {
        "pos": [80, 20],
        "type": "Battery2x2",
        "dir": 0
    }, {"pos": [30, 0], "type": "Engine03", "dir": 0}, {"pos": [-30, 0], "type": "Engine03", "dir": 0}, {
        "pos": [0, 60],
        "type": "Mount30",
        "dir": 0
    }, {"pos": [50, 0], "type": "Engine03", "dir": 0}, {
        "pos": [80, 100],
        "type": "CloakGenerator",
        "dir": 0
    }, {"pos": [50, 110], "type": "Wing1x1Round", "dir": 0}, {
        "pos": [-40, 40],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 20], "type": "DamageMod", "dir": 0}, {
        "pos": [-40, 80],
        "type": "DamageMod",
        "dir": 0
    }, {"pos": [0, 100], "type": "DamageMod", "dir": 0}, {"pos": [0, 60], "type": "RingTurret", "dir": 0}],
    "name": "",
    "aiRules": []
}, {
    "parts": [{"pos": [50, -90], "type": "Engine02", "dir": 0, "ghostCopy": true}, {
        "pos": [110, -90],
        "type": "Engine02",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [40, 90], "type": "Wing2x1", "dir": 0, "ghostCopy": true}, {
        "pos": [110, 40],
        "type": "Wing1x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-130, -40], "type": "HArmor1x2", "dir": 0, "ghostCopy": true}, {
        "pos": [110, 0],
        "type": "HArmor1x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [110, -40], "type": "HArmor1x2", "dir": 0, "ghostCopy": true}, {
        "pos": [-40, 20],
        "type": "Mount360",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-80, -40], "type": "Reactor2x2", "dir": 0, "ghostCopy": true}, {
        "pos": [0, 70],
        "type": "Battery2x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [40, 20], "type": "Mount360", "dir": 0, "ghostCopy": true}, {
        "pos": [80, -40],
        "type": "Reactor2x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [40, -50], "type": "HArmor2x1", "dir": 0, "ghostCopy": true}, {
        "pos": [-130, 30],
        "type": "HArmor1x1Angle",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [130, -40], "type": "HArmor1x2", "dir": 0, "ghostCopy": true}, {
        "pos": [-40, 90],
        "type": "Wing2x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [0, -40], "type": "Mount360", "dir": 0, "ghostCopy": true}, {
        "pos": [-110, 40],
        "type": "Wing1x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [130, 30], "type": "HArmor1x1Angle", "dir": 0, "ghostCopy": true}, {
        "pos": [-40, -50],
        "type": "HArmor2x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-110, 0], "type": "HArmor1x2", "dir": 0, "ghostCopy": true}, {
        "pos": [40, -20],
        "type": "ReloaderMod",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-130, 0], "type": "HArmor1x2", "dir": 0, "ghostCopy": true}, {
        "pos": [130, 0],
        "type": "HArmor1x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [80, 70], "type": "Wing2x1", "dir": 0, "ghostCopy": true}, {
        "pos": [-80, 70],
        "type": "Wing2x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-110, -40], "type": "HArmor1x2", "dir": 0, "ghostCopy": true}, {
        "pos": [-130, -90],
        "type": "HArmor1x1AngleBack",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [130, -90], "type": "HArmor1x1AngleBack", "dir": 0, "ghostCopy": true}, {
        "pos": [130, -70],
        "type": "HArmor1x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-80, 0], "type": "ReloaderMod", "dir": 0, "ghostCopy": true}, {
        "pos": [-40, -20],
        "type": "ReloaderMod",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-50, -90], "type": "Engine02", "dir": 0, "ghostCopy": true}, {
        "pos": [-130, -70],
        "type": "HArmor1x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [30, -110], "type": "Engine02", "dir": 0, "ghostCopy": true}, {
        "pos": [-30, -110],
        "type": "Engine02",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-110, -90], "type": "Engine02", "dir": 0, "ghostCopy": true}, {
        "pos": [-20, -70],
        "type": "HArmor2x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [20, -70], "type": "HArmor2x1", "dir": 0, "ghostCopy": true}, {
        "pos": [-80, -80],
        "type": "HArmor2x2",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [80, -80], "type": "HArmor2x2", "dir": 0, "ghostCopy": true}, {
        "pos": [0, 90],
        "type": "HArmor2x1",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-70, -110], "type": "HArmor1x1AngleBack", "dir": 0, "ghostCopy": true}, {
        "pos": [70, -110],
        "type": "HArmor1x1AngleBack",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [0, -100], "type": "EnergyTransfer", "dir": 0, "ghostCopy": true}, {
        "pos": [80, 0],
        "type": "ReloaderMod",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-80, 40], "type": "ReloaderMod", "dir": 0, "ghostCopy": true}, {
        "pos": [0, 40],
        "type": "BulletSpeedMod",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [40, 60], "type": "BulletSpeedMod", "dir": 0, "ghostCopy": true}, {
        "pos": [0, 0],
        "type": "ReloaderMod",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [-40, 60], "type": "BulletSpeedMod", "dir": 0, "ghostCopy": true}, {
        "pos": [80, 40],
        "type": "BulletSpeedMod",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [0, -40], "type": "PDTurret", "dir": 0, "ghostCopy": true}, {
        "pos": [-40, 20],
        "type": "ArtilleryTurret",
        "dir": 0,
        "ghostCopy": true
    }, {"pos": [40, 20], "type": "ArtilleryTurret", "dir": 0, "ghostCopy": true}],
    "name": "Heavy Cruiser Tesla Missile",
    "aiRules": []
}, {
    "parts": [{"pos": [-10, -70], "type": "Engine02", "dir": 0}, {
        "pos": [50, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [40, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [120, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [-160, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-160, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [-80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [-80, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [0, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [80, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [80, -20],
        "type": "TargetingMod",
        "dir": 0
    }, {"pos": [160, -20], "type": "TargetingMod", "dir": 0}, {
        "pos": [110, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [130, -70], "type": "Engine02", "dir": 0}, {
        "pos": [-40, -60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-40, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-40, 0], "type": "Mount10Range", "dir": 0}, {
        "pos": [-120, 0],
        "type": "Mount10Range",
        "dir": 0
    }, {"pos": [30, -70], "type": "Engine02", "dir": 0}, {
        "pos": [10, -70],
        "type": "Engine02",
        "dir": 0
    }, {"pos": [-120, -60], "type": "Reactor2x2", "dir": 0}, {
        "pos": [-40, -100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [80, 100], "type": "Wing2x2", "dir": 0}, {
        "pos": [-80, -100],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-80, -60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [-120, 60], "type": "HArmor2x2", "dir": 0}, {
        "pos": [-80, 100],
        "type": "Reactor2x2",
        "dir": 0
    }, {"pos": [80, -100], "type": "HArmor2x2", "dir": 0}, {
        "pos": [120, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [160, 20], "type": "TargetingMod", "dir": 0}, {
        "pos": [0, 60],
        "type": "HArmor2x2",
        "dir": 0
    }, {"pos": [40, 100], "type": "Battery2x2", "dir": 0}, {
        "pos": [80, -140],
        "type": "Wing2x2",
        "dir": 0
    }, {"pos": [0, 100], "type": "Mount90", "dir": 0}, {
        "pos": [-40, 100],
        "type": "Mount90",
        "dir": 0
    }, {"pos": [-40, -140], "type": "HArmor2x2", "dir": 0}, {
        "pos": [10, 130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-10, 130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-30, 130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [30, 130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [50, 130],
        "type": "HArmor1x1",
        "dir": 0
    }, {"pos": [-70, -130], "type": "HArmor1x1", "dir": 0}, {
        "pos": [-40, 100],
        "type": "PDTurret",
        "dir": 0
    }, {"pos": [-120, 0], "type": "TeslaTurret", "dir": 0}, {
        "pos": [-40, 0],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [40, 0], "type": "TeslaTurret", "dir": 0}, {
        "pos": [120, 0],
        "type": "TeslaTurret",
        "dir": 0
    }, {"pos": [0, 100], "type": "HeavyPDTurret", "dir": 0}],
    "name": "Plasma hovertank",
    "aiRules": [["@attackTypes enemy within #m", "Attack", 2000], ["@capTypes Command Points within #m", "Capture", 10000], ["Field # when money over # at priority #", 1, 1000, 71]]
}];
;
  


