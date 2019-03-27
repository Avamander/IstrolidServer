//from src/protocol.js
// Generated by CoffeeScript 1.10.0
(function () {
    window.prot = {};

    prot.commonWords = "1v1\n1v1r\n2v2\n3v3\n@attackTypes enemy @unitTypes within #m\n@attackTypes enemy that is @absoluteTypes then # within #m\n@attackTypes enemy that is @relativeTypes and @relativeTypes within #m\n@attackTypes enemy within #m\n@capTypes Command Points within #m\naction\naddAi\nai\nAi1\nAi3\nAi4\naiRules\nalpha\nAOEWarhead\napm\nArtilleryTurret\nAttack\nAutoTurret\nAvoid #dps danger areas\nAvoid everything\nAvoid over #damage shots\nBackstab\nBattery1x1\nBattery1x2\nBattery2x1\nBattery2x2\nBattleship\nbeta\nBomb\nBomber\nBomber\nBombGun\nbuildQ\nbuildRq\nBulletSpeedMod\nburn\ncapping\ncapps\nCapture\nCarrier\nCarrier\nCircle\ncloak\nCloak Counter Need\nCloaked\nCloakGenerator\ncolor\nCommandPoint\nconnected\nCruiser\nDamageMod\ndead\nDestroyer\nDestroyer\ndir\nDroneBody\nEMPGun\nEMPGun2\nEmpty\nEnemy Army Middle\nEnemy Spawn\nenergy\nEnergyTransfer\nEngine01\nEngine02\nEngine03\nEngine04\nEngine05\nEngine06\nEngine07\nFaction1\nFaction2\nFaction3\nFaction4\nFaction5\nFaction6\nFaction7\nFaster\nField # at priority #\nField # at start\nField # for # of @needTypes at priority #\nField # for # of enemy @unitTypes at priority #\nField # for # of ship in slot # at priority #\nField # when money over # at priority #\nFighter\nfillColor\nFind recharger\nFind units that are out of energy\nFlackTurret\nFlameTurret\nFlee\nFlee enemies\nFollow\nFriendly Army Middle\nFriendly Spawn\nFriendly Spawn\nfullUpdate\nghostCopy\ngoto\nGoto @locationTypes\nGuard\nHAarmor1x2Curved\nHArmor1x1\nHArmor1x1Angle\nHArmor1x1AngleBack\nHArmor1x2\nHArmor1x2Back1\nHArmor1x2Back2\nHArmor1x2Curved2\nHArmor1x2Font1\nHArmor1x2Front2\nHArmor2x1\nHArmor2x1Curved2\nHArmor2x2\nHArmor2x2Angle\nHArmor2x2AngleBack\nHArmor2x2Back1\nHArmor2x2Back2\nHArmor2x2Curved\nHArmor2x2Front1\nHArmor2x2Front2\nHeavyBeamTurret\nHeavyPDTurret\nHold Position\nholdPosition\nhost\nhp\nimage\nimg/debree/acloud01.png\nimg/debree/acloud02.png\nimg/debree/acloud03.png\nimg/debree/acloud04.png\nimg/debree/bigdebree01.png\nimg/debree/bigdebree02.png\nimg/debree/bigdebree03.png\nimg/debree/bigdebree04.png\nimg/debree/bigdebree05.png\nimg/debree/bigdebree06.png\nimg/debree/bigdebree07.png\nimg/debree/bigdebree08.png\nimg/debree/bigdebree09.png\nimg/debree/bigdebree10.png\nimg/debree/bigdebree11.png\nimg/debree/bigdebree12.png\nimg/debree/civ01.png\nimg/debree/civ02.png\nimg/debree/civ03.png\nimg/debree/civ04.png\nimg/debree/civ05.png\nimg/debree/debree01.png\nimg/debree/debree02.png\nimg/debree/debree03.png\nimg/debree/debree04.png\nimg/debree/debree05.png\nimg/debree/debree06.png\nimg/debree/debree07.png\nimg/debree/debree08.png\nimg/debree/debree09.png\nimg/debree/debree10.png\nimg/debree/debree11.png\nimg/debree/debree12.png\nimg/debree/debree13.png\nimg/debree/debree14.png\nimg/debree/debree15.png\nimg/debree/debree16.png\nimg/debree/debree17.png\nimg/debree/debree18.png\nimg/debree/debree19.png\nimg/debree/debree20.png\nimg/debree/debree21.png\nimg/debree/debree22.png\nimg/debree/debree23.png\nimg/debree/debree24.png\nimg/debree/debree25.png\nimg/debree/gcloud01.png\nimg/debree/gcloud02.png\nimg/debree/gcloud03.png\nimg/debree/gcloud04.png\nimg/debree/scloud01.png\nimg/debree/scloud02.png\nimg/debree/scloud03.png\nimg/debree/scloud04.png\nimg/debree/vcloud01.png\nimg/debree/vcloud02.png\nimg/debree/vcloud03.png\nimg/debree/vcloud04.png\nimg/dodads/bigdodad01.png\nimg/dodads/bigdodad02.png\nimg/dodads/bigdodad03.png\nimg/dodads/bigdodad04.png\nimg/dodads/bigdodad05.png\nimg/dodads/meddodad01.png\nimg/dodads/meddodad02.png\nimg/dodads/meddodad03.png\nimg/dodads/meddodad04.png\nimg/point02.png\nimg/rocks/lrock01.png\nimg/rocks/lrock02.png\nimg/rocks/lrock03.png\nimg/rocks/lrock04.png\nimg/rocks/lrock05.png\nimg/rocks/mrock01.png\nimg/rocks/mrock02.png\nimg/rocks/mrock03.png\nimg/rocks/mrock04.png\nimg/rocks/mrock05.png\nimg/rocks/mrock06.png\nimg/rocks/srock01.png\nimg/rocks/srock02.png\nimg/rocks/srock03.png\nimg/rocks/srock04.png\nimg/rocks/srock05.png\nimg/rocks/srock06.png\nimg/rocks/srock07.png\nimg/rocks/srock08.png\nInterceptor\nJumpEngine\nkickPlayer\nkills\nKite\nLess Brawling Value\nLess DPS\nLess expensive\nLess HP\nLess Range\nLetter0\nLetter1\nLetter2\nLetter3\nLetter4\nLetter5\nLetter6\nLetter7\nLetter8\nLetter9\nLetterA\nLetterB\nLetterC\nLetterD\nLetterDot\nLetterE\nLetterF\nLetterG\nLetterH\nLetterI\nLetterJ\nLetterK\nLetterL\nLetterM\nLetterN\nLetterO\nLetterP\nLetterPound\nLetterQ\nLetterR\nLetterS\nLetterT\nLetterU\nLetterV\nLetterW\nLetterX\nLetterY\nLetterZ\nLightBeamTurret\nmessage\nMineTurret\nMissileTurret\nmoney\nmoneyEarned\nMore Arc\nMore Brawling Value\nMore DPS\nMore expensive\nMore HP\nMore Range\nMore Range\nMount10Range\nMount180\nMount270\nMount30\nMount360\nMount360Micro\nMount90\nmouse\nmouseMove\nMove\nmoveOrder\nname\nNo PD\nNot Cloaked\nnumbers\nOverKillAi\nowner\nPad2x2\npartId\nparts\npartTargetId\npartWorking\nPDTurret\nperf\nPlasmaTurret\nplayerJoin\nplayerNumber\nplayers\nplayerSelected\npos\nProtect\nradius\nrallyPoint\nRam\nReactor1x1\nReactor1x2\nReactor2x1\nReactor2x2\nReloaderMod\nRest\nRest\nRingTurret\nRock\nrockColor\nrot\nrunning\nScout\nSelf Destruct\nsend other\nsend players\nsend things\nsend things fields\nsend things parts\nsend things roots\nsend zJson\nserverType\nShadowNArmor1x1\nShadowNArmor1x2\nShadowNArmor2x1\nShadowNArmor2x2\nShadowNArmor2x2Angle\nShapedWarhead\nshield\nShieldGen1x1\nShieldGen2x1\nShieldGen2x2\nside\nsim\nsize\nSlower\nSniperGun\nSolar1x1\nSolar2x2\nSolar3x3\nspacesRebuild\nSpawnPoint\nspec\nsplayers\nspotColor\nSpread to\nstartGame\nStasisField\nstate\nStay at range\nStay in #m range of friendly units\nStay in #m range of slot # units\nStayaway in #m range from slot # units\nstep\nsthings\nStop\nstopOrder\nStripe1x1\nStripe1x1Corner\nStripe1x2\nStripe2x1\nStripe2x2\nStripe2x2Corner\nStripe2x2Round\nStripeDouble2x1\nStripeDouble2x2\nStronger\nSwarmer\nSymbolDecal1\nSymbolDecal10\nSymbolDecal11\nSymbolDecal12\nSymbolDecal13\nSymbolDecal14\nSymbolDecal15\nSymbolDecal16\nSymbolDecal17\nSymbolDecal18\nSymbolDecal19\nSymbolDecal2\nSymbolDecal20\nSymbolDecal21\nSymbolDecal22\nSymbolDecal23\nSymbolDecal24\nSymbolDecal3\nSymbolDecal4\nSymbolDecal5\nSymbolDecal6\nSymbolDecal7\nSymbolDecal8\nSymbolDecal9\nTargetingMod\nTeslaTurret\ntheme\nthingId\nthings\ntimeings\nTorpTurret\ntreeform\nTry to field # every # seconds\ntype\nUArmor1x1\nUArmor1x1Angle\nUArmor1x1AngleBack\nUArmor1x1Notch1\nUArmor1x1Notch2\nUArmor1x1Spike\nUArmor1x2\nUArmor1x2Notch1\nUArmor1x2Notch2\nUArmor2x1\nUArmor2x2\nUnit\nunitsBuilt\nunitsCollide\nvalidBar\nVArmor1x1\nVArmor1x1Angle\nVArmor1x1Corner1\nVArmor1x1Corner2\nVArmor1x1Corner3\nVArmor1x1CornerBack\nVArmor1x1Curve\nVArmor1x1Hook\nVArmor1x2\nVArmor1x2Corner4\nVArmor1x2Curved\nVArmor1x2End\nVArmor1x2IBeam\nVArmor1x2SideBar\nVArmor1x2SideBarFilled\nVArmor2x1Curved\nVArmor2x2\nVArmor2x2Angle\nVArmor2x2Curve\nVArmor2x2Curved\nvel\nwarpIn\nWavePullTurret\nWavePushTurret\nWeaker\nWhen #% of energy, @chargeTypes\nWing1x1Angle\nWing1x1Notch\nWing1x1Round\nWing1x2\nWing2x1\nWing2x2\nwinningSide\nz".split("\n");


    /*
  afk
  waiting
   */

}).call(this);
;


