//from src/buildbar.js
// Generated by CoffeeScript 1.12.3
(function() {
  var drawBuildButton, leftMenu, rightMenu, specToUnitMap, standAlone;

  eval(onecup["import"]());

  window.buildBar = {};

  buildBar.selected = 0;

  css(".unitpic", function() {
    width(84);
    height(84);
    padding(10);
    return transition("background-color .2s");
  });

  css(".unitpic:hover", function() {
    return background_color("rgba(255,255,255,.4)");
  });

  standAlone = function() {
    return ui.path[0] === "design" || ui.path[0] === "fleet";
  };

  ui.topButton = function(mode, fn) {
    return div(".hover-black", function() {
      display("inline-block");
      height(64);
      width(64);
      position("relative");
      img({
        src: "img/ui/topbar/" + mode + ".png",
        width: 44,
        height: 44
      }, function() {
        top(0);
        left(10);
        return position("absolute");
      });
      div(function() {
        position("absolute");
        line_height(12);
        font_size(12);
        text_align("center");
        width(64);
        top(44);
        return text(mode);
      });
      if (fn != null) {
        return fn();
      } else {
        if (ui.mode === mode) {
          background_color("rgba(255,255,255,.6)");
          return onclick(function() {
            return ui.go("battle");
          });
        } else {
          return onclick(function() {
            return ui.go(mode);
          });
        }
      }
    });
  };

  ui.barButton = function(mode) {
    height(84);
    width(84);
    if (mode === ui.mode) {
      background_color("rgba(255,255,255,.6)");
      onclick(function() {
        return ui.go("battle");
      });
    } else {
      onclick(function() {
        return ui.go(mode);
      });
    }
    img({
      src: "img/ui/" + mode + ".png",
      width: 64,
      height: 64
    }, function() {
      position("absolute");
      top(0);
      return left(10);
    });
    return div(function() {
      position("absolute");
      line_height(12);
      font_size(12);
      text_align("center");
      width(84);
      top(59);
      color("white");
      return text(mode);
    });
  };

  leftMenu = function() {
    ui.topButton("menu");
    if (!sim.galaxyStar) {
      ui.topButton("multiplayer");
      return ui.topButton("battleroom");
    }
  };

  rightMenu = function() {
    if (sim.galaxyStar != null) {
      ui.topButton("restart", function() {
        return onclick(function() {
          return ui.mode = "restart";
        });
      });
    } else {
      ui.topButton("chat", function() {
        if (ui.chatToggle) {
          background_color("rgba(255,255,255,.6)");
        }
        return onclick(function() {
          return ui.chatToggle = !ui.chatToggle;
        });
      });
    }
    return ui.topButton("controls", function() {
      if (ui.contorlHelpToggle) {
        background_color("rgba(255,255,255,.6)");
      }
      return onclick(function() {
        return ui.contorlHelpToggle = !ui.contorlHelpToggle;
      });
    });
  };

  buildBar.draw = function(folded) {
    if (folded == null) {
      folded = false;
    }
    if (!commander || !commander.buildBar) {
      return;
    }
    div(function() {
      position("absolute");
      if (folded) {
        top(-64 - 48);
      } else {
        top(0);
      }
      left(0);
      right(0);
      height(64);
      if (intp.serverType === "1v1r" || intp.serverType === "1v1t") {
        background_color("rgba(100,0,0,.6)");
      } else {
        background_color("rgba(0,0,0,.6)");
      }
      color("white");
      line_height(64);
      font_size(18);
      div(function() {
        position("absolute");
        left(0);
        width(300);
        return leftMenu();
      });
      div(".hover-black", function() {
        var quarterWidth;
        quarterWidth = window.innerWidth / 4;
        position("absolute");
        left(quarterWidth);
        width(quarterWidth * 2);
        height(64);
        overflow("hidden");
        text_align("center");
        onclick(function() {
          if (ui.mode !== "battle") {
            return ui.mode = "battle";
          } else {
            return ui.mode = "quickscore";
          }
        });
        if (sim.galaxyStar && ui.mode !== "battle") {
          if (sim.step < 16) {
            return text("Click here to start the battle.");
          } else {
            return text("Click here to return to the battle.");
          }
        } else if (intp.countDown > 15) {
          font_size(30);
          return text(Math.floor(intp.countDown / 16));
        } else {
          return ui.topPlayers();
        }
      });
      return div(function() {
        position("absolute");
        right(0);
        width(300);
        text_align("right");
        return rightMenu();
      });
    });
    div(function() {
      var i, j, ref, showDesign;
      position("absolute");
      if (folded) {
        bottom(-84 - 48);
      } else {
        bottom(0);
      }
      left(0);
      right(0);
      height(84);
      background_color("rgba(0,0,0,.2)");
      text_align("center");
      for (i = j = 0; j < 10; i = ++j) {
        drawBuildButton(i);
      }
      showDesign = true;
      if ((ref = sim.galaxyStar) != null ? ref.noDesignTools : void 0) {
        showDesign = false;
      }
      if (showDesign) {
        div(".hover-black", function() {
          position("absolute");
          top(0);
          left(0);
          return ui.barButton("design");
        });
        div(".hover-black", function() {
          position("absolute");
          top(0);
          right(0);
          return ui.barButton("fleet");
        });
      }
      if (ui.mode === "battle") {
        return div("#action-bar", function() {
          var c, miniButton;
          position("absolute");
          left(0);
          right(0);
          bottom(84);
          height(42);
          background_color("rgba(0,0,0,.1)");
          c = Math.floor(window.innerWidth / 2);
          div(function() {
            position("absolute");
            bottom(0);
            left(c - 80);
            right(c - 80);
            line_height(42);
            color("rgba(240, 240, 240, 1)");
            span("#money-text", function() {
              return font_size(24);
            });
            span("#money-income", function() {
              font_size(14);
              vertical_align("super");
              return margin_left(10);
            });
            return onecup.post_render((function(_this) {
              return function() {
                var ref1, ref2;
                if ((ref1 = onecup.lookup("#money-text")) != null) {
                  ref1.innerHTML = buildBar.moneyText();
                }
                return (ref2 = onecup.lookup("#money-income")) != null ? ref2.innerHTML = buildBar.moneyIncomeText() : void 0;
              };
            })(this));
          });
          miniButton = function(name, binding, fn) {
            return div(".hover-black", function() {
              position("absolute");
              top(0);
              bottom(0);
              height(42);
              width(42);
              left(84);
              padding(5);
              img({
                src: "img/ui/actions/" + name + ".png",
                width: 32,
                height: 32
              });
              onmouseover(function(e) {
                battleMode.tipBounds = e.target.getBoundingClientRect();
                return battleMode.tip = function() {
                  text_align("center");
                  text(binding);
                  text(" ");
                  return span(function() {
                    color("#f39c12");
                    return text(settings.humanViewBinding(binding));
                  });
                };
              });
              return fn();
            });
          };
          miniButton("stop", "Stop Units", function() {
            top(0);
            left(c - 182);
            return onclick(function() {
              return battleMode.stopOrder();
            });
          });
          miniButton("focus", "Focus Fire/Follow", function() {
            top(0);
            left(c - 140);
            return onclick(function() {
              return battleMode.follow = true;
            });
          });
          miniButton("rally", "Place Rally Point", function() {
            top(0);
            left(c + 182 - 42);
            onclick(function() {});
            if (battleMode.rallyPlacing) {
              background("rgba(255,0,0,.5)");
            }
            return onclick(function() {
              return battleMode.rallyPlacing = !battleMode.rallyPlacing;
            });
          });
          return miniButton("selfd", "Self Destruct", function() {
            top(0);
            left(c + 140 - 42);
            if (ui.selfdOn) {
              background("rgba(255,0,0,.5)");
            }
            onclick(function() {
              ui.selfdOn = !ui.selfdOn;
              return setTimeout((function() {
                return ui.selfdOn = false;
              }), 200);
            });
            return ondblclick(function() {
              battleMode.selfDestructOrder();
              return ui.selfdOn = false;
            });
          });
        });
      }
    });
    if (ui.contorlHelpToggle && ui.mode === "battle") {
      return div(function() {
        position("absolute");
        if (folded) {
          top(0);
        } else {
          top(64);
        }
        width("100%");
        text_align("center");
        height(281 + 80);
        padding(40);
        background_color("rgba(0,0,0,.6)");
        return img({
          src: "img/ui/tips/controls.png",
          width: 848,
          height: 281
        });
      });
    }
  };

  buildBar.moneyText = function() {
    if (!commander) {
      return "";
    }
    if (!intp.state === "waiting") {
      return "waiting...";
    } else {
      if (commander.side === "spectators") {
        return "Spectating";
      } else {
        return "$" + (Math.floor(commander.money));
      }
    }
  };

  buildBar.moneyIncomeText = function() {
    var _, income, ref, t;
    if (!commander) {
      return "";
    }
    if (commander.side === "spectators" || intp.state === "waiting") {
      return "";
    }
    income = 10;
    ref = sim.things;
    for (_ in ref) {
      t = ref[_];
      if (t.commandPoint && t.side === commander.side) {
        income += 1;
      }
    }
    return "+$" + income;
  };

  specToUnitMap = {};

  buildBar.specToUnit = function(spec) {
    var unit;
    if (!specToUnitMap[spec]) {
      unit = new types.Unit(spec);
      unit.pos = [0, 0];
      unit.rot = 0;
      unit.warpIn = 1;
      specToUnitMap[spec] = unit;
    }
    return specToUnitMap[spec];
  };

  buildBar.specToThumb = function(spec, color) {
    var unit;
    unit = buildBar.specToUnit(spec);
    if (unit) {
      if (color) {
        unit.color = color;
      }
      return unit.thumb();
    }
  };

  buildBar.specToThumbBg = function(spec) {
    var thumb;
    background_size("64px 64px");
    background_repeat("no-repeat");
    background_position("10px 10px");
    thumb = buildBar.specToThumb(spec, commander.color);
    if (!thumb) {
      return background_image("url(img/empty.png)");
    } else {
      return background_image("url(" + thumb + ")");
    }
  };

  css(".unitpic .onhover", function() {
    return opacity("0");
  });

  css(".unitpic:hover .onhover", function() {
    return opacity("1");
  });

  drawBuildButton = function(index) {
    return div(".unitpic", function() {
      var count, i, j, len, ref, ref1;
      position("absolute");
      height(84);
      width(84);
      top(0);
      left(window.innerWidth / 2 + (index - 5) * 84);
      buildBar.specToThumbBg(commander.buildBar[index]);
      onmousedown(function(e) {
        var base;
        return typeof (base = control.mode).onbuildclick === "function" ? base.onbuildclick(e, index) : void 0;
      });
      if (buildBar.selected === index && ui.mode === "design") {
        background_color("rgba(0,0,0,.3)");
      }
      count = 0;
      ref = commander.buildQ;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        if (i === index) {
          count += 1;
        }
      }
      if (count > 0) {
        div(".count", function() {
          position("absolute");
          top(0);
          left(0);
          min_width(24);
          height(24);
          color("white");
          background_color("rgba(0, 0, 0, .2)");
          text_align("center");
          text(count);
          font_size(18);
          return padding(2);
        });
      }
      if ((ref1 = sim.galaxyStar) != null ? ref1.noDesignTools : void 0) {
        return;
      }
      if (buildBar.emptySpec(commander.buildBar[index])) {
        return div(".onhover", function() {
          position("absolute");
          color("white");
          top(30);
          left(0);
          width("100%");
          text_align("center");
          return text("Empty");
        });
      } else if (!commander.validBar[index]) {
        if (buildBar.selected === index) {
          background_color("rgba(100,0,0,.3)");
        } else {
          background_color("rgba(255,0,0,.3)");
        }
        return div(function() {
          position("absolute");
          color("white");
          top(30);
          left(30);
          return text("Fix");
        });
      }
    });
  };

  buildBar.setSpec = function(index, spec) {
    commander.buildBar[index] = spec;
    return commander.fleet[commander.fleet.selection + "," + index] = spec;
  };

  buildBar.emptySpec = function(spec) {
    if (spec === "") {
      return true;
    }
    if (spec === '{"parts":[],"name":"","aiRules":[]}') {
      return true;
    }
    return false;
  };

  window.MenuMode = (function() {
    function MenuMode() {}

    MenuMode.prototype.focus = [0, 0];

    MenuMode.prototype.zoom = 1;

    MenuMode.prototype.onbuildclick = function() {};

    MenuMode.prototype.tick = function() {};

    MenuMode.prototype.draw = function() {};

    return MenuMode;

  })();

}).call(this);
;


