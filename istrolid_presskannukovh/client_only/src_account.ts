import {inspect} from "util";
import colors = module
import {Colors} from "../992src_colors";
import {Sim} from "../6src_sim";
import {Unit} from "../95src_unit";

export class Account {
    private static _instance: Account;
    fingerprint: any;
    newPassword: any;
    password: any;
    oldPassword: any;
    savingToServer: boolean;
    needsToClose: boolean;
    signedIn: boolean = false;
    color: number[];
    wating: boolean = false;
    email: string;
    error: string = "";
    token: string;
    autoSigningIn: boolean = false;
    passworedReset: boolean;
    DLCbonus: boolean;
    DLCs: { [x: string]: boolean; };
    name = typeof steam !== "undefined" && steam !== null ? steam.name : void 0;
    lastRootSave = {};
    lastRootSaveBuildBar = {};
    lastRootSaveFleet = {};
    DLCs = {};
    authTab = "Sign In";
    changePasswordToggle = false;

    public static get Instance(){
        return this._instance;
    }

    load () {
        let c, ref;
        c = db.load("commander");
        if (c) {
            Account.Instance.name = c.name;
            Account.Instance.color = c.color;
            Account.Instance.email = c.email;
            Account.Instance.token = c.token;
        } else {
            Account.Instance.color = choose(Colors.nice);
        }
        if (onecup.params.token && onecup.params.email) {
            Account.Instance.token = onecup.params.token;
            Account.Instance.email = onecup.params.email;
            Account.Instance.passworedReset = true;
            if (onecup.params.token) {
                if (typeof history !== "undefined" && history !== null) {
                    history.pushState({}, "game", location.pathname);
                }
            }
        }
        if (typeof require !== "undefined" && require !== null) {
            Account.Instance.loadDLC();
        }
        if (((ref = window.location) != null ? ref.href.indexOf("gamedev.html") : void 0) !== -1) {
            Account.Instance.DLCs['Curves and Shadows'] = true;
            Account.Instance.DLCs['Paint Job'] = true;
            return Account.Instance.DLCbonus = true;
        }
    };

    connectedToRoot () {
        return new Fingerprint2().get(function (result, components) {
            Account.Instance.fingerprint = result;
            if (Account.Instance.token && Account.Instance.email) {
                Account.Instance.autoSigningIn = true;
                Account.Instance.signin();
                return Account.Instance.authTab = "Sign In";
            }
        });
    };

    fix () {
        var buildBar, fk, fv, i, j, l, len, m, n, o, part, ref, ref1, ref2, ref3, results, ship, specParts, unit;
        if (!commander.buildBar) {
            commander.buildBar = ["", "", "", "", "", "", "", "", "", ""];
        }
        if (!Array.isArray(commander.buildBar) || commander.buildBar.length !== 10) {
            buildBar = ["", "", "", "", "", "", "", "", "", ""];
            if ((typeof commander.buildBar) === "object") {
                for (i = j = 0; j < 10; i = ++j) {
                    ship = commander.buildBar[i];
                    if (ship) {
                        buildBar[i] = ship;
                    }
                }
            }
            commander.buildBar = buildBar;
        }
        if ((ref = commander.aiRules) != null ? ref.length = 10 : void 0) {
            for (i = l = 0; l < 10; i = ++l) {
                if (((ref1 = commander.aiRules[i]) != null ? ref1.length : void 0) > 0 && commander.buildBar[i]) {
                    unit = new types.Unit(commander.buildBar[i]);
                    if (unit.aiRules.length > 0) {
                        break;
                    }
                    specParts = [];
                    ref2 = unit.parts;
                    for (m = 0, len = ref2.length; m < len; m++) {
                        part = ref2[m];
                        specParts.push({
                            pos: [part.pos[0], part.pos[1]],
                            type: part.constructor.name,
                            dir: part.dir
                        });
                    }
                    console.log(i + ": add AI rules to build bar", commander.aiRules[i], commander.buildBar[i]);
                    commander.buildBar[i] = toShort({
                        parts: specParts,
                        name: unit.name,
                        aiRules: commander.aiRules[i]
                    });
                }
                commander.aiRules[i] = [];
            }
        }
        if (!commander.galaxy) {
            commander.galaxy = {};
        }
        if (!commander.settings) {
            commander.settings = {};
        }
        if (commander.settings["Follow Units"]) {
            commander.settings["Focus Fire/Follow"] = commander.settings["Follow Units"];
            delete commander.settings["Follow Units"];
        }
        if (!commander.buildQ) {
            commander.buildQ = [];
        }
        if (!commander.selection) {
            commander.selection = [];
        }
        if (!commander.validBar) {
            commander.validBar = [true, true, true, true, true, true, true, true, true, true];
        }
        if (!commander.fleet) {
            commander.fleet = {};
        }
        if (!commander.fleet.ais) {
            commander.fleet.ais = {};
        }
        if (!commander.fleet.selection) {
            commander.fleet.selection = 0;
        }
        for (i = n = 0; n < 10; i = ++n) {
            if (!commander.fleet["0," + i] && commander.buildBar[i]) {
                commander.fleet["0," + i] = commander.buildBar[i];
            }
        }
        if (!commander.friends) {
            commander.friends = {};
        }
        if (!commander.mutes) {
            commander.mutes = {};
        }
        if (!commander.id) {
            commander.id = rid();
        }
        account.lastRootSave = deepCopy(account.simpleCommander());
        for (i = o = 0; o < 10; i = ++o) {
            account.lastRootSaveBuildBar[i] = commander.buildBar[i];
        }
        ref3 = commander.fleet;
        results = [];
        for (fk in ref3) {
            fv = ref3[fk];
            results.push(account.lastRootSaveFleet[fk] = JSON.stringify(fv));
        }
        return results;
    };

    simpleCommander () {
        return new Commander(commander.email,commander.token,commander.id,commander.name, commander.color,commander.faction,ommander.friends,Sim.Instance.VERSION + "." + Sim.Instance.MINOR_VERSION,commander.buildBar,commander.fleet,commander.aiRules, commander.galaxyDifficulty,commander.galaxy,commander.challenges,commander.settings,commander.mutes, commander.friends);
    };

    save () {
        var i, j, key;
        for (i = j = 0; j < 10; i = ++j) {
            key = (commander.fleet.selection || 0) + "," + i;
            commander.buildBar[i] = commander.fleet[key] || "";
        }
        if ((typeof commander !== "undefined" && commander !== null ? commander.side : void 0) !== "spectators") {
            if (typeof network !== "undefined" && network !== null) {
                network.sendPlayer();
            }
        }
        commander.ts = Date.now();
        return db.save("commander", Account.Instance.simpleCommander());
    };

    rootSave () {
        if (typeof electron !== "undefined" && electron !== null) {
            if (Account.Instance.rootSaveTimeout) {
                clearTimeout(Account.Instance.rootSaveTimeout);
            }
            return Account.Instance.rootSaveTimeout = setTimeout(Account.Instance.rootRealSave, 30 * 1000);
        } else {
            if (Account.Instance.rootSaveTimeout) {
                clearTimeout(Account.Instance.rootSaveTimeout);
            }
            return Account.Instance.rootSaveTimeout = setTimeout(Account.Instance.rootRealSave, 5 * 1000);
        }
    };

    rootRealSave () {
        var buildBar, fk, fleet, fv, i, j, jsonSpec, k, playerDiff, ref, thisRootSave, update, v;
        console.log("account.rootSave -------------");
        thisRootSave = Account.Instance.simpleCommander();
        playerDiff = {};
        update = false;
        for (k in thisRootSave) {
            v = thisRootSave[k];
            if (k === "buildBar") {
                buildBar = {};
                for (i = j = 0; j < 10; i = ++j) {
                    if (thisRootSave.buildBar[i] !== Account.Instance.lastRootSaveBuildBar[i]) {
                        Account.Instance.lastRootSaveBuildBar[i] = thisRootSave.buildBar[i];
                        buildBar[i] = thisRootSave.buildBar[i];
                    }
                }
                playerDiff.buildBar = buildBar;
            } else if (k === "fleet") {
                fleet = {};
                ref = thisRootSave.fleet;
                for (fk in ref) {
                    fv = ref[fk];
                    jsonSpec = JSON.stringify(fv);
                    if (jsonSpec !== Account.Instance.lastRootSaveFleet[fk]) {
                        account.lastRootSaveFleet[fk] = jsonSpec;
                        fleet[fk] = fv;
                        update = true;
                    }
                }
                if (update) {
                    playerDiff.fleet = fleet;
                }
            } else {
                if (JSON.stringify(v) === Account.Instance.lastRootSave[k]) {
                    delete thisRootSave[k];
                } else {
                    Account.Instance.lastRootSave[k] = JSON.stringify(v);
                    playerDiff[k] = v;
                    update = true;
                }
            }
        }
        if (!update) {
            return;
        }
        return rootNet.send("savePlayer", playerDiff);
    };

    closeAndSave (e) {
        Account.Instance.savingToServer = true;
        Account.Instance.rootRealSave();
        return rootNet.send("ping", "windowClose");
    };

    onbeforeunload (e) {
        if (Account.Instance.signedIn === false || rootNet.websocket.readyState !== WebSocket.OPEN) {
            return;
        }
        if (Account.Instance.needsToClose) {
            return;
        }
        if (typeof electron !== "undefined" && electron !== null) {
            Account.Instance.closeAndSave(e);
            Account.Instance.needsToClose = true;
            return e.returnValue = false;
        }
    };

    signin () {
        Account.Instance.wating = true;
        Account.Instance.error = "";
        if (!Account.Instance.token && Account.Instance.password) {
            Account.Instance.token = Account.Instance.hashPass(account.password);
        }
        return rootNet.send("authSignIn", {
            email: Account.Instance.email,
            token: Account.Instance.token,
            fingerprint: Account.Instance.fingerprint,
            steamid: typeof steam !== "undefined" && steam !== null ? steam.id : void 0
        });
    };

    authError (message) {
        console.log("account.authError", message);
        Account.Instance.error = message;
        Account.Instance.waiting = false;
        Account.Instance.autoSigningIn = false;
        return Account.Instance.signedIn = false;
    };

    signinReply (rootPlayer) {
        Account.Instance.waiting = false;
        Account.Instance.error = false;
        Account.Instance.autoSigningIn = false;
        if (commander) {
            console.log("is a reconnect, keep local commander");
            Account.Instance.fix();
            Account.Instance.save();
            Account.Instance.rootSave();
        } else {
            console.log("logging in, grab command from root");
            window.commander = rootPlayer;
            Account.Instance.fix();
            Account.Instance.save();
        }
        Account.Instance.name = commander.name;
        Account.Instance.color = commander.color;
        Account.Instance.email = commander.email;
        Account.Instance.token = commander.token;
        Account.Instance.signedIn = true;
        if (typeof network !== "undefined" && network !== null) {
            network.sendPlayer();
        }
        galaxyMode.load();
        if (typeof rootNet !== "undefined" && rootNet !== null) {
            rootNet.sendMode();
        }
        if (Account.Instance.passworedReset) {
            console.log("go to password reset");
            ui.mode = "reset";
            return Account.Instance.passworedReset = false;
        }
    };

    merge (a, b) {
        var aHas, aNeeds, aNeedsList, bship, j, k, l, len, len1, m, n, ref, ref1, ref2, ref3, ref4, ref5, ship, star, x,
            xy, y;
        console.log("saving players to player backup");
        try {
            db.save("commander.A", a);
        } catch (undefined) {
        }
        try {
            db.save("commander.B", b);
        } catch (undefined) {
        }
        if (!a.buildBar) {
            a.buildBar = ["", "", "", "", "", "", "", "", "", ""];
        }
        if (!b.buildBar) {
            b.buildBar = ["", "", "", "", "", "", "", "", "", ""];
        }
        if (!a.fleet) {
            a.fleet = {};
        }
        if (!b.fleet) {
            b.fleet = {};
        }
        aHas = {};
        ref = a.buildBar;
        for (j = 0, len = ref.length; j < len; j++) {
            ship = ref[j];
            if (ship) {
                aHas[ship] = true;
            }
        }
        ref1 = a.fleet;
        for (xy in ref1) {
            ship = ref1[xy];
            if (ship) {
                aHas[ship] = true;
            }
        }
        aNeeds = {};
        ref2 = b.buildBar;
        for (l = 0, len1 = ref2.length; l < len1; l++) {
            bship = ref2[l];
            if (bship && !aHas[bship]) {
                aNeeds[bship] = true;
            }
        }
        ref3 = b.fleet;
        for (xy in ref3) {
            bship = ref3[xy];
            if (bship && !aHas[bship]) {
                aNeeds[bship] = true;
            }
        }
        aNeedsList = (function () {
            var results;
            results = [];
            for (bship in aNeeds) {
                results.push(bship);
            }
            return results;
        })();
        console.log("merging players extra " + aNeedsList.length + " ships found");
        for (x = m = 1; m < 100; x = ++m) {
            if (aNeedsList.length === 0) {
                break;
            }
            for (y = n = 0; n <= 10; y = ++n) {
                if (aNeedsList.length === 0) {
                    break;
                }
                if (!a.fleet[x + "," + y]) {
                    a.fleet[x + "," + y] = aNeedsList.pop();
                }
            }
        }
        if (!a.galaxy) {
            a.galaxy = {};
        }
        if ((ref4 = b.galaxy) != null ? ref4.starsWon : void 0) {
            ref5 = b.galaxy.starsWon;
            for (k in ref5) {
                star = ref5[k];
                if (a.galaxy[k] == null) {
                    console.log("add star", k);
                    a.galaxy[k] = star;
                }
            }
        }
        return a;
    };

    register () {
        Account.Instance.wating = true;
        Account.Instance.error = "";
        console.log("register", [Account.Instance.name, Account.Instance.email, Account.Instance.password]);
        if (!this.isValidName(Account.Instance.name)) {
            Account.Instance.error = "Please use ASCII letters and numbers for name";
            return;
        }
        if (!this.isValidEmail(Account.Instance.email)) {
            Account.Instance.error = "Invalid Email";
            return;
        }
        if (!Account.Instance.password) {
            Account.Instance.error = "Enter a password";
            return;
        }
        Account.Instance.token = Account.Instance.hashPass(Account.Instance.password);
        return rootNet.send("authRegister", {
            name: Account.Instance.name,
            color: Account.Instance.color,
            email: Account.Instance.email,
            token: Account.Instance.token,
            fingerprint: Account.Instance.fingerprint
        });
    };

    forogtPasswordEmallMeLink () {
        if (!this.isValidEmail(Account.Instance.email)) {
            Account.Instance.error = "Invalid Email";
            return;
        }
        return rootNet.send("authEmailLink", Account.Instance.email.toLowerCase());
    };

    changePassword () {
        var tokenNew, tokenOld;
        Account.Instance.wating = false;
        Account.Instance.error = "";
        tokenOld = Account.Instance.hashPass(Account.Instance.oldPassword);
        tokenNew = Account.Instance.hashPass(Account.Instance.newPassword);
        if (onecup.params.token) {
            tokenOld = onecup.params.token;
        }
        console.log("change pass", Account.Instance.oldPassword, Account.Instance.newPassword);
        rootNet.send("authChangePassword", tokenOld, tokenNew);
        commander.token = tokenNew;
        return account.save();
    };

    hashPass (pass) {
        return sha1("fhs2:" + Account.Instance.email + ":" + pass);
    };

    loadDLC () {
        return typeof steam !== "undefined" && steam !== null ? steam.loadDLC() : void 0;
    };

    /* css(

    ".bigtab"
, function() {
        display("inline-block");
        width(200);
        font_size(30);
        line_height(45);
        padding("10px 20px");
        margin("10px 20px 0px 20px");
        border_radius("5px 5px 0px 0px");
        background_color("rgba(255,255,255,.2)");
        return css(":hover", function () {
            return background_color("rgba(0,0,0,.5)");
        });
    }); */

    hasDLC (dlcName) {
        if (!dlcName) {
            return true;
        }
        return Account.Instance.DLCs[dlcName];
    };

    hasDLCBonus () {
        return Account.Instance.DLCbonus;
    };

    isValidEmail (email) {
        var re;
        re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    isValidName (name) {
        var re;
        re = /^[A-Za-z0-9]+$/;
        return re.test(name);
    };

    signinOrRegisterMenu = function () {
        return ui.menuFrame("#signinorregister", function () {
            padding_top(280);
            padding_bottom(280);
            if (!rootNet) {
                div(function () {
                    padding(20);
                    background_color("rgba(0,255,0,.25)");
                    text_align("center");
                    return text("starting to connect to server");
                });
                return;
            }
            if (rootNet.websocket.readyState === WebSocket.CONNECTING) {
                div(function () {
                    padding(20);
                    background_color("rgba(0,255,0,.25)");
                    text_align("center");
                    return text("connecting to server");
                });
                return;
            }
            if (rootNet.websocket.readyState === WebSocket.CLOSED) {
                div(".hover-red", function () {
                    padding(20);
                    text_align("center");
                    text("Failed to connect to main server. ");
                    text("Click here to retry.");
                    return onclick(function () {
                        return rootNet.connect();
                    });
                });
                return;
            }
            if (Account.Instanceaccount.autoSigningIn) {
                div(function () {
                    padding(20);
                    background_color("rgba(0,255,0,.25)");
                    text_align("center");
                    return text("Signing in...");
                });
                return;
            }
            div(function () {
                var tab;
                text_align("center");
                height(75);
                tab = function (name, fn) {
                    return div(".bigtab", function () {
                        if (account.authTab === name) {
                            background_color("rgba(0,0,0,.25)");
                        }
                        onclick(function () {
                            return account.authTab = name;
                        });
                        return text(name);
                    });
                };
                tab("Register");
                return tab("Sign In");
            });
            return div(function () {
                padding_top(20);
                padding_bottom(100);
                background_color("rgba(0,0,0,.25)");
                if (account.error) {
                    div(function () {
                        padding(20);
                        font_size(20);
                        background_color("rgba(255,0,0,.2)");
                        return text(account.error);
                    });
                }
                if (account.authTab === "Sign In") {
                    account.loginFields(account.signin);
                    button(".button", function () {
                        display("block");
                        margin_top(10);
                        text_align("left");
                        padding(20);
                        font_size(30);
                        color("white");
                        width("100%");
                        border("none");
                        text_align("center");
                        if (account.waiting) {
                            text("...");
                            return opacity(".5");
                        } else {
                            text("Sign In");
                            return onclick(function () {
                                account.forgotPasswordSent = false;
                                return account.signin();
                            });
                        }
                    });
                    div(function () {
                        return height(100);
                    });
                    button(".button", function () {
                        display("block");
                        margin_top(10);
                        text_align("left");
                        padding(20);
                        font_size(30);
                        color("white");
                        width("100%");
                        border("none");
                        text_align("center");
                        if (account.forgotPasswordSent === true) {
                            return text("Sent Forgot password email.");
                        } else {
                            text("Forgot password. Email me a new one.");
                            return onclick(function () {
                                account.forgotPasswordSent = true;
                                return account.forogtPasswordEmallMeLink();
                            });
                        }
                    });
                }
                if (account.authTab === "Register") {
                    account.colorNameField();
                    account.loginFields(account.register);
                    return button(".button", function () {
                        display("block");
                        margin_top(10);
                        text_align("left");
                        padding(20);
                        font_size(30);
                        color("white");
                        width("100%");
                        border("none");
                        text_align("center");
                        text("Register");
                        return onclick(function () {
                            return account.register();
                        });
                    });
                }
            });
        });
    };

    loginFields (onEnter) {
        input("#email.full", {
            type: "text",
            value: account.email,
            placeholder: "Email"
        }, function () {
            return oninput(function (e) {
                return account.email = e.target.value.toLowerCase();
            });
        });
        return input("#password.full", {
            type: "password",
            value: Account.Instance.password,
            placeholder: "Password"
        }, function () {
            oninput(function (e) {
                account.password = e.target.value;
                return account.token = null;
            });
            return onkeydown(function (e) {
                if (e.which === 13) {
                    return onEnter();
                }
            });
        });
    };

    factionField () {
        return input("#email.full", {
            type: "text",
            value: commander.faction || "",
            placeholder: "faction"
        }, function () {
            oninput(function (e) {
                var faction;
                faction = e.target.value.toUpperCase().slice(0, 4);
                faction = faction.replace(/[^A-Za-z0-9]/g, "");
                e.target.value = faction;
                return commander.faction = faction;
            });
            return onblur(function (e) {
                return account.rootSave();
            });
        });
    };

    colorNameField = function (op) {
        div(function () {
            margin("10px 0px");
            position("relative");
            background_color("rgba(0,0,0,.3)");
            height(75);
            input({
                type: "text",
                value: account.name,
                placeholder: "Nick Name",
                maxlength: 16,
                disabled: op != null ? op.disabled : void 0
            }, function () {
                position("absolute");
                top(0);
                left(0);
                padding("20px 20px 20px 80px");
                font_size(30);
                color("white");
                width("100%");
                background_color("transparent");
                border("none");
                onblur(function (e) {
                    e.target.value = e.target.value.replace(/[^A-Za-z0-9]/g, "");
                    return account.name = e.target.value;
                });
                return oninput(function (e) {
                    e.target.value = e.target.value.replace(/[^A-Za-z0-9]/g, "");
                    return account.name = e.target.value;
                });
            });
            return div(function () {
                position("absolute");
                top(0);
                left(0);
                width(55);
                height(55);
                margin(10);
                border_radius(15);
                border("2px solid white");
                box_shadow("0 0 7px rgba(255,255,255,.5), inset 0 0 3px 2px rgba(0,0,0,.5)");
                background_color(colors.cssRgba(account.color));
                return onclick(function () {
                    return account.colorOpen = !account.colorOpen;
                });
            });
        });
        if (account.colorOpen) {
            div(function () {
                var c, j, len, ref, results;
                padding("0px 20px");
                text_align("center");
                ref = colors.nice;
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    c = ref[j];
                    results.push((function (c) {
                        return div(function () {
                            display("inline-block");
                            width(32);
                            height(32);
                            margin(5);
                            border_radius(8);
                            if (account.color === c) {
                                border("2px solid white");
                                box_shadow("0 0 7px rgba(255,255,255,.5), inset 0 0 3px 2px rgba(0,0,0,.5)");
                            } else {
                                box_shadow("0 0 3px 2px rgba(0,0,0,.5), inset 0 0 7px rgba(255,255,255,.5)");
                            }
                            background_color(colors.cssRgba(c));
                            return onclick(function () {
                                account.color = c;
                                account.changedColor();
                                return account.colorOpen = false;
                            });
                        });
                    })(c));
                }
                return results;
            });
            return input("#color", {
                type: "text",
                value: colors.toHex(account.color),
                placeholder: "Color"
            }, function () {
                display("block");
                margin("10px 0px");
                padding(20);
                font_size(30);
                color("white");
                width("100%");
                background_color("rgba(0,0,0,.3)");
                border("none");
                onkeypress(function (e) {
                    if (e.which === 13) {
                        e.target.blur();
                        return Account.Instance.colorOpen = false;
                    }
                });
                return onchange(function (e) {
                    Account.Instance.color = colors.fromHex(e.target.value);
                    return Account.Instance.changedColor();
                });
            });
        }
    };

    changedColor () {
        if (Account.Instance.signedIn) {
            commander.color = Account.Instance.color;
            Account.Instance.save();
            return Account.Instance.rootSave();
        }
    };

    spacer () {
        return div(function () {
            return height(60);
        });
    };

    profileMenu () {
        Account.Instance.colorNameField({
            disabled: true
        });
        Account.Instance.factionField();
        spacer();
        button(".red", function () {
            text("Change Password");
            return onclick(function () {
                return account.changePasswordToggle = !account.changePasswordToggle;
            });
        });
        div(function () {
            if (account.error) {
                padding(20);
                font_size(30);
                background_color("rgba(255,0,0,.2)");
                return text(account.error);
            }
        });
        if (Account.Instance.changePasswordToggle) {
            input(".full", {
                type: "password",
                value: Account.Instance.oldPassword,
                placeholder: "Current Password"
            }, function () {
                return onchange(function (e) {
                    return account.oldPassword = e.target.value;
                });
            });
            input(".full", {
                type: "password",
                value: Account.Instance.newPassword,
                placeholder: "New Password"
            }, function () {
                return onchange(function (e) {
                    return account.newPassword = e.target.value;
                });
            });
            button(".red", function () {
                text("Change");
                return onclick(function () {
                    account.changePassword();
                    return account.changePasswordToggle = false;
                });
            });
        }
        spacer();
        return button(".red", function () {
            text("Sign out");
            return onclick(function () {
                localStorage.clear();
                return location.reload();
            });
        });
    };

    checkEmail () {
        return ui.inScreen("menu", "Email", function () {
            overflow("hidden");
            return div(function () {
                padding(20);
                return text("Email with a link has been sent to you. Please click that link.");
            });
        });
    };

    settingsResetPassword () {
        return ui.inScreen("menu", "Change Password", function () {
            padding_bottom(100);
            overflow_y("scroll");
            input(".full", {
                type: "password",
                value: account.newPassword,
                placeholder: "New Password"
            }, function () {
                return onchange(function (e) {
                    return Account.Instance.newPassword = e.target.value;
                });
            });
            return button(".red", function () {
                text("Change");
                return onclick(function () {
                    Account.Instance.changePassword();
                    return ui.mode = "menu";
                });
            });
        });
    };
}

export class Commander {
    email: string;
    token: string;
    id: string;
    name: string;
    color: number[];
    faction: string;
    friends: Commander[];
    version: string = Sim.Instance.VERSION + "." + Sim.Instance.MINOR_VERSION;
    buildBar: Unit[];
    fleet: Unit[];
    aiRules: any[];
    galaxyDifficulty: any;
    galaxy: any;
    challenges: any;
    settings: any;
    mutes: any;

    constructor (email: string,
                 token: string,
                 id: string,
                 name: string,
                 color: number[],
                 faction: string,
                 friends: Commander[],
                 version: string,
                 buildBar: Unit[],
                 fleet: Unit[],
                 aiRules: any[],
                 galaxyDifficulty: any,
                 galaxy: any,
                 challenges: any,
                 settings: any,
                 mutes: any) {
        this.email = email;
        this.token = token;
        this.id = id;
        this.name = name;
        this.color = color;
        this.faction = faction;
        this.friends = friends;
        this.version = version;
        this.buildBar = buildBar;
        this.fleet = fleet;
        this.aiRules = aiRules;
        this.galaxyDifficulty = galaxyDifficulty;
        this.galaxy = galaxy;
        this.challenges = challenges;
        this.settings = settings;
        this.mutes = mutes;
    }
}