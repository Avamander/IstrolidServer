//from src/sound.js
// Generated by CoffeeScript 1.10.0
(function () {
    var ctx, e, error, maxSounds, r, soundCache;

    if (window.AudioContext == null) {
        window.AudioContext = window.webkitAudioContext;
    }

    try {
        ctx = new AudioContext();
    } catch (error) {
        e = error;
        console.log('Web Audio API is not supported in this browser');
    }

    window.mainVolume = ctx.createGain();

    mainVolume.connect(ctx.destination);

    ctx.destination.isConnected = true;

    soundCache = {};

    r = function () {
        return (Math.random() - .5) * Math.random();
    };

    window.loadSound = function (url, cb) {
        var request, sound;
        sound = {};
        sound.source = ctx.createBufferSource();
        sound.volume = ctx.createGain();
        sound.source.connect(sound.volume);
        sound.volume.connect(mainVolume);
        if (soundCache[url]) {
            sound.buffer = soundCache[url];
            sound.source.buffer = sound.buffer;
            return cb(sound);
        } else {
            request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            request.onload = function (e) {
                var onFailure, onSuccess;
                onSuccess = function (buffer) {
                    soundCache[url] = buffer;
                    sound.buffer = soundCache[url];
                    sound.source.buffer = sound.buffer;
                    return cb(sound);
                };
                onFailure = function () {
                    return console.log("failed to load", url);
                };
                return ctx.decodeAudioData(this.response, onSuccess, onFailure);
            };
            return request.send();
        }
    };

    maxSounds = {};

    window.playSound = function (url, volume) {
        if (volume == null) {
            volume = 1;
        }
        if (maxSounds[url] >= 16) {
            return;
        }
        maxSounds[url] = (maxSounds[url] || 0) + 1;
        return loadSound(url, function (sound) {
            var rate;
            sound.volume.gain.value = volume * 0.15 + r() * settings.soundValue("FX Volume");
            rate = 1 + r();
            sound.source.playbackRate.value = rate;
            sound.source.start(ctx.currentTime);
            return after(sound.source.buffer.duration * rate * 1000, function () {
                return maxSounds[url] -= 1;
            });
        });
    };

    window.playSoundUI = function (url, volume, rate) {
        if (volume == null) {
            volume = 1;
        }
        if (rate == null) {
            rate = 1;
        }
        return loadSound(url, function (sound) {
            sound.source.playbackRate.value = rate;
            sound.volume.gain.value = volume * settings.soundValue("FX Volume");
            return sound.source.start(ctx.currentTime);
        });
    };

    window.ActionMixer = (function () {
        function ActionMixer() {
            this.action = 0;
            this.reset();
        }

        ActionMixer.prototype.reset = function () {
            var actionSound, i, j, ref;
            actionSound = choose(["Glimpse.wav", "Another 80s Arp.wav", "Kevlar.wav", "Kevlar.wav", "Slow Burn.wav", "Producer Alchemy - 13 Stones Drums - 96 BPM.mp3", "Producer Alchemy Demo - Stones Drums.mp3", "Producer Alchemy Pizz.Paddy - 09.mp3"]);
            if ((ref = this.battleSound) != null) {
                ref.source.stop();
            }
            loadSound("sounds/loops/action/" + actionSound, (function (_this) {
                return function (sound) {
                    _this.battleSound = sound;
                    _this.battleSound.volume.gain.value = 0;
                    _this.battleSound.source.loop = true;
                    return _this.battleSound.source.start();
                };
            })(this));
            this.ambientChoices = [];
            for (i = j = 0; j < 3; i = ++j) {
                this.ambientChoices.push(choose(['Magnetic Field Amber.ogg', 'Magnetic Field Amethyst.ogg', 'Magnetic Field Aquamarine.ogg', 'Magnetic Field Auburn.ogg', 'Magnetic Field Azure.ogg', 'Magnetic Field Beige.ogg', 'Magnetic Field Black.ogg', 'Magnetic Field Blonde.ogg', 'Magnetic Field Blue.ogg', 'Magnetic Field Bronze.ogg', 'Magnetic Field Brown.ogg', 'Magnetic Field Carmine.ogg', 'Magnetic Field Cerise.ogg', 'Magnetic Field Copper.ogg', 'Magnetic Field Coral.ogg', 'Magnetic Field Cyan.ogg', 'Magnetic Field Ebony.ogg', 'Magnetic Field Emerald.ogg', 'Magnetic Field Gold.ogg', 'Magnetic Field Green.ogg', 'Magnetic Field Grey.ogg', 'Magnetic Field Indigo.ogg', 'Magnetic Field Ivory.ogg', 'Magnetic Field Jade.ogg', 'Magnetic Field Lilac.ogg', 'Magnetic Field Magenta.ogg', 'Magnetic Field Magnolia.ogg', 'Magnetic Field Mauve.ogg', 'Magnetic Field Mustard.ogg', 'Magnetic Field Ochre.ogg', 'Magnetic Field Olive.ogg', 'Magnetic Field Onyx.ogg', 'Magnetic Field Orange.ogg', 'Magnetic Field Pink.ogg', 'Magnetic Field Purple.ogg', 'Magnetic Field Red.ogg', 'Magnetic Field Rose.ogg', 'Magnetic Field Russet.ogg', 'Magnetic Field Sapphire.ogg', 'Magnetic Field Scarlet.ogg', 'Magnetic Field Silver.ogg', 'Magnetic Field Turquoise.ogg', 'Magnetic Field Ultramarine.ogg', 'Magnetic Field Vermilion.ogg', 'Magnetic Field Violet.ogg', 'Magnetic Field White.ogg', 'Magnetic Field Yellow.ogg']));
            }
            return this.playAmbient();
        };

        ActionMixer.prototype.playAmbient = function () {
            if (this.ambientPlayLast > Date.now()) {
                return;
            }
            this.ambient = choose(this.ambientChoices);
            this.ambientPlayLast = Date.now() + 10000;
            return loadSound("sounds/fields/" + this.ambient, (function (_this) {
                return function (sound) {
                    var rate;
                    _this.ambientSound = sound;
                    rate = 1 + r() * 2;
                    _this.ambientPlayLast = Date.now() + 35000 * rate * .8;
                    sound.source.playbackRate.value = rate;
                    _this.ambientSound.volume.gain.value = settings.soundValue("Ambient Volume") * .25;
                    return _this.ambientSound.source.start();
                };
            })(this));
        };

        ActionMixer.prototype.playTrack = function (name) {
            if (this.trackName === name) {
                return;
            }
            this.trackName = name;
            console.log("play track", this.trackName);
            return loadSound(this.trackName, (function (_this) {
                return function (sound) {
                    console.log("playing track", _this.trackName);
                    _this.trackSound = sound;
                    _this.trackSound.volume.gain.value = 0;
                    _this.trackSound.source.loop = true;
                    return _this.trackSound.source.start();
                };
            })(this));
        };

        ActionMixer.prototype.tick = function () {
            var v;
            this.action = this.action * .995;
            if (this.battleSound) {
                v = 0;
                if (this.action) {
                    v = 1 - Math.exp(-this.action);
                }
                this.battleSound.volume.gain.value = v * settings.soundValue("Music Volume") * .75;
            }
            if (this.trackSound) {
                v = 1;
                this.trackSound.volume.gain.value = v * settings.soundValue("Music Volume") * .75;
            }
            if (Math.random() < .001) {
                this.playAmbient();
            }
            if (this.ambientSound) {
                this.ambientSound.volume.gain.value = settings.soundValue("Ambient Volume");
            }
            mainVolume.gain.value = settings.soundValue("Master Volume");
            if (localStorage.mute === "true") {
                if (ctx.destination.isConnected) {
                    ctx.destination.isConnected = false;
                    return mainVolume.disconnect(ctx.destination);
                }
            } else {
                if (!ctx.destination.isConnected) {
                    ctx.destination.isConnected = true;
                    return mainVolume.connect(ctx.destination);
                }
            }
        };

        return ActionMixer;

    })();

}).call(this);
;


