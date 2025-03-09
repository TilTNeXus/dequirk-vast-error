// ==UserScript==
// @name        Vast Error Dequirker
// @namespace   Violentmonkey Scripts
// @match       https://www.deconreconstruction.com/*
// @match       https://deconreconstruction.com/*
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @version     1.0
// @author      TiltNexus
// @description Removes typing quirks from Vast Error
// @downloadURL https://github.com/TilTNeXus/dequirk-vast-error/raw/main/dequirk-ve.user.js
// @updateURL   https://github.com/TilTNeXus/dequirk-vast-error/raw/main/dequirk-ve.user.js
// ==/UserScript==

var spans = document.getElementById("content").getElementsByTagName("span")

var SovaQuirkOn = ""
var SovaQuirk = GM_getValue("SovaQuirk", true)
if (SovaQuirk) SovaQuirkOn = " ✔︎"

var DismasQuirkOn = ""
var DismasQuirk = GM_getValue("DismasQuirk", true)
if (DismasQuirk) DismasQuirkOn = " ✔︎"

var ArcjecQuirkOn = ""
var ArcjecQuirk = GM_getValue("ArcjecQuirk", true)
if (ArcjecQuirk) ArcjecQuirkOn = " ✔︎"

var JenthaQuirkOn = ""
var JenthaQuirk = GM_getValue("JenthaQuirk", true)
if (JenthaQuirk) JenthaQuirkOn = " ✔︎"

var EllseeQuirkOn = ""
var EllseeQuirk = GM_getValue("EllseeQuirk", true)
if (EllseeQuirk) EllseeQuirkOn = " ✔︎"

var AlbionQuirkOn = ""
var AlbionQuirk = GM_getValue("AlbionQuirk", true)
if (AlbionQuirk) AlbionQuirkOn = " ✔︎"

var LaivanQuirkOn = ""
var LaivanQuirk = GM_getValue("LaivanQuirk", true)
if (LaivanQuirk) LaivanQuirkOn = " ✔︎"

var OcceusQuirkOn = ""
var OcceusQuirk = GM_getValue("OcceusQuirk", true)
if (OcceusQuirk) OcceusQuirkOn = " ✔︎"

var TazQuirkOn = ""
var TazQuirk = GM_getValue("TazQuirk", true)
if (TazQuirk) TazQuirkOn = " ✔︎"

var MurritQuirkOn = ""
var MurritQuirk = GM_getValue("MurritQuirk", true)
if (MurritQuirk) MurritQuirkOn = " ✔︎"

var HamifiQuirkOn = ""
var HamifiQuirk = GM_getValue("HamifiQuirk", true)
if (HamifiQuirk) HamifiQuirkOn = " ✔︎"

var SestroQuirkOn = ""
var SestroQuirk = GM_getValue("SestroQuirk", true)
if (SestroQuirk) SestroQuirkOn = " ✔︎"

var RodereQuirkOn = ""
var RodereQuirk = GM_getValue("RodereQuirk", true)
if (RodereQuirk) RodereQuirkOn = " ✔︎"

var VelliaQuirkOn = ""
var VelliaQuirk = GM_getValue("VelliaQuirk", true)
if (VelliaQuirk) VelliaQuirkOn = " ✔︎"

var PozzolQuirkOn = ""
var PozzolQuirk = GM_getValue("PozzolQuirk", true)
if (PozzolQuirk) PozzolQuirkOn = " ✔︎"

var NeilnaQuirkOn = ""
var NeilnaQuirk = GM_getValue("NeilnaQuirk", true)
if (NeilnaQuirk) NeilnaQuirkOn = " ✔︎"

var KeiksiQuirkOn = ""
var KeiksiQuirk = GM_getValue("KeiksiQuirk", true)
if (KeiksiQuirk) KeiksiQuirkOn = " ✔︎"

var VilcusQuirkOn = ""
var VilcusQuirk = GM_getValue("VilcusQuirk", true)
if (VilcusQuirk) VilcusQuirkOn = " ✔︎"

var NecronQuirkOn = ""
var NecronQuirk = GM_getValue("NecronQuirk", true)
if (NecronQuirk) NecronQuirkOn = " ✔︎"

var MshiriQuirkOn = ""
var MshiriQuirk = GM_getValue("MshiriQuirk", true)
if (MshiriQuirk) MshiriQuirkOn = " ✔︎"

var RacrenQuirkOn = ""
var RacrenQuirk = GM_getValue("RacrenQuirk", true)
if (RacrenQuirk) RacrenQuirkOn = " ✔︎"

var GarnieQuirkOn = ""
var GarnieQuirk = GM_getValue("GarnieQuirk", true)
if (GarnieQuirk) GarnieQuirkOn = " ✔︎"

var PascalQuirkOn = ""
var PascalQuirk = GM_getValue("PascalQuirk", true)
if (PascalQuirk) PascalQuirkOn = " ✔︎"

var GlomerQuirkOn = ""
var GlomerQuirk = GM_getValue("GlomerQuirk", true)
if (GlomerQuirk) GlomerQuirkOn = " ✔︎"

var BytconQuirkOn = ""
var BytconQuirk = GM_getValue("BytconQuirk", true)
if (BytconQuirk) BytconQuirkOn = " ✔︎"

var CrytumQuirkOn = ""
var CrytumQuirk = GM_getValue("CrytumQuirk", true)
if (CrytumQuirk) CrytumQuirkOn = " ✔︎"

var EndariQuirkOn = ""
var EndariQuirk = GM_getValue("EndariQuirk", true)
if (EndariQuirk) EndariQuirkOn = " ✔︎"

var SabineQuirkOn = ""
var SabineQuirk = GM_getValue("SabineQuirk", true)
if (SabineQuirk) SabineQuirkOn = " ✔︎"

var SirageQuirkOn = ""
var SirageQuirk = GM_getValue("SirageQuirk", true)
if (SirageQuirk) SirageQuirkOn = " ✔︎"

var RypiteQuirkOn = ""
var RypiteQuirk = GM_getValue("RypiteQuirk", true)
if (RypiteQuirk) RypiteQuirkOn = " ✔︎"

var HayyanQuirkOn = ""
var HayyanQuirk = GM_getValue("HayyanQuirk", true)
if (HayyanQuirk) HayyanQuirkOn = " ✔︎"

var CuliumQuirkOn = ""
var CuliumQuirk = GM_getValue("CuliumQuirk", true)
if (CuliumQuirk) CuliumQuirkOn = " ✔︎"

var RaurouQuirkOn = ""
var RaurouQuirk = GM_getValue("RaurouQuirk", true)
if (RaurouQuirk) RaurouQuirkOn = " ✔︎"

var CinareQuirkOn = ""
var CinareQuirk = GM_getValue("CinareQuirk", true)
if (CinareQuirk) CinareQuirkOn = " ✔︎"

var ValtelQuirkOn = ""
var ValtelQuirk = GM_getValue("ValtelQuirk", true)
if (ValtelQuirk) ValtelQuirkOn = " ✔︎"

var HusskeQuirkOn = ""
var HusskeQuirk = GM_getValue("HusskeQuirk", true)
if (HusskeQuirk) HusskeQuirkOn = " ✔︎"

var SecilyQuirkOn = ""
var SecilyQuirk = GM_getValue("SecilyQuirk", true)
if (SecilyQuirk) SecilyQuirkOn = " ✔︎"

var VivifierQuirkOn = ""
var VivifierQuirk = GM_getValue("VivifierQuirk", true)
if (VivifierQuirk) VivifierQuirkOn = " ✔︎"

var ForgivenQuirkOn = ""
var ForgivenQuirk = GM_getValue("ForgivenQuirk", true)
if (ForgivenQuirk) ForgivenQuirkOn = " ✔︎"

var ExecutiveQuirkOn = ""
var ExecutiveQuirk = GM_getValue("ExecutiveQuirk", true)
if (ExecutiveQuirk) ExecutiveQuirkOn = " ✔︎"

var disableFontsOn = ""
var disableFonts = GM_getValue("disableFonts", true)
if (disableFonts) disableFontsOn = " ✔︎"

var GuardianspiritQuirkOn = ""
var GuardianspiritQuirk = GM_getValue("GuardianspiritQuirk", true)
if (GuardianspiritQuirk) GuardianspiritQuirkOn = " ✔︎"

var SpecialCSSOn = ""
var SpecialCSS = GM_getValue("SpecialCSS", true)
if (SpecialCSS) {
  SpecialCSSOn = " ✔︎"
  if (document.getElementsByClassName("edolon-theme")[0]) {
    document.getElementsByClassName("edolon-theme")[0].classList.remove("edolon-theme")
  }
  if (document.getElementsByClassName("layout-gaiaeon")[0] && document.getElementsByClassName("spoiler")[0]) {
    document.getElementsByClassName("spoiler")[0].style.background="rgb(238,238,238)"
  }
}

var TextIMGOn = ""
var TextIMG = GM_getValue("TextIMG", true)
if (TextIMG) TextIMGOn = " ✔︎"

for (let i = 0; i < spans.length; i++) {
    let text = spans[i].innerHTML

    if (spans[i].style.fontFamily && disableFonts) {
      spans[i].style.fontFamily="Courier"
    }
    if (spans[i].style.fontWeight && disableFonts) {
      spans[i].style.fontWeight="bold"
    }

    text = text.replace(/^v$/g, "")
    text = text.replace(/^b $/g, "")

    if (SpecialCSS) {
      spans[i].style.filter=""
    }

    // on page 230 there's a span within a span that needs to be fixed and it doesn't work correctly unless i have this
    // also dismas is at the bottom so it doesn't activate when dismas talks then someone else talks
    let dismasCondition = false
    if (spans[i-1]) {
      dismasCondition = text.startsWith("GD:") || text.startsWith("DISMAS:") || spans[i-1].innerHTML.startsWith("GD:")
    } else {
      dismasCondition = text.startsWith("GD:") || text.startsWith("DISMAS:")
    }

    if (SovaQuirk && (text.startsWith("SA:") || text.startsWith("SOVA:"))) {
      text = text.replace(/\: \(/g, ": ")
      text = text.replace(/\)$/g, "")
      text = text.split(" ")[0] + text.replace(/^(.*?)\:/, "").toLowerCase()
      spans[i].style.fontStyle="normal"
    } else if (ArcjecQuirk && (text.startsWith("AH:") || text.startsWith("ARCJEC:") || text.startsWith("KIDJEC:") || text.startsWith("AM:"))) {
      text = text.replace(/.XDXD/g, "")
      text = text.replace(/Σ/g, "e")
      text = text.replace(/¡/g, "!")
    } else if (JenthaQuirk && (text.startsWith("FF:") || text.startsWith("JENTHA:"))){
      let lineNew = ""
      let lineWords = text.split(" ")
      for (let j = 0; j<lineWords.length; j++) {
        let word = lineWords[j]
        if (word.length > 1 || (word == "a" || word == "i") && word != lineWords[j+1][0]) {
          lineNew += word + " "
        }
      }
      if (lineWords.length == 2 && lineWords[1].length == 1) {
        lineNew += lineWords[1]
      }
      text = lineNew
    } else if ((EllseeQuirk && (text.startsWith("EO:") || text.startsWith("ELLSEE:"))) || (VivifierQuirk && (text.startsWith("VIVIFIER:")))) {
      text = text.replace(/\Σ/g, "e")
      text = text.replace(/¿/g, "?")
      text = text.replace(/¡/g, "!")
      text = text.replace(/\: e/g, ": E")
      text = text.replace(/\. e/g, ". E")
      text = text.replace(/\? e/g, "? E")
      text = text.replace(/\! e/g, "! E")
      text = text.replace(/ellsee/g, "Ellsee")
      let lineNew = ""
      let lineWords = text.split(" ")
      for (let j = 0; j<lineWords.length; j++) {
        let word = lineWords[j]
        if (word.includes("e") && word.replace(/e/g, "") == word.replace(/e/g, "").toUpperCase()) {
          word = word.toUpperCase()
          if (word.length == 2 && word[1] == "E") {
            if (lineWords[j+1]){
              if (lineWords[j+1].replace(/e/g, "") == lineWords[j+1].replace(/e/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            }
            if (lineWords[j-1]){
              if (lineWords[j-1].replace(/e/g, "") == lineWords[j-1].replace(/e/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            }
          }
        }
        lineNew += word + " "
      }
      text = lineNew
    } else if (AlbionQuirk && (text.startsWith("DQ:") || text.startsWith("ALBION:"))) {
      text = text.replace(/\*\./g, ".")
      text = text.replace(/\*\?/g, "?")
      text = text.replace(/\*\!/g, "!")
      text = text.replace(/\*/g, " ")
      text = text.replace(/\.\.\. /g, "...")
      text = text.replace(/&nbsp;/g, " ")
    } else if (LaivanQuirk && (text.startsWith("WA:") || text.startsWith("LAIVAN:") || text.startsWith("BLUE GUY:"))) {
      text = text.replace(/-$/g, "")
      text = text.replace(/-\?/g, "?")
    } else if (OcceusQuirk && (text.startsWith("ME:") || text.startsWith("OCCEUS:"))) {
      text = text.replace(/\.o\./g, "o")
      text = text.replace(/\.oo\./g, "oo")
      text = text.replace(/\.O\./g, "O")
      text = text.replace(/\.Oo\./g, "Oo")
      text = text.replace(/Eye/g, "I")
      text = text.replace(/eye/g, "i")
    } else if (TazQuirk && (text.startsWith("PO:") || text.startsWith("TAZ:"))){
      text = text.replace(/\~/g, "")
      text = text.replace(/\+/g, "t")
      let lineNew = ""
      let lineWords = text.split(" ")
      for (let j = 0; j<lineWords.length; j++) {
        let word = lineWords[j]
        if (word.includes("t") && word.replace(/t/g, "") == word.replace(/t/g, "").toUpperCase()) {
          word = word.toUpperCase()
          if (word.length == 2 && word[1] == "T") {
            if (lineWords[j+1]){
              if (lineWords[j+1].replace(/t/g, "") == lineWords[j+1].replace(/t/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            }
            if (lineWords[j-1]){
              if (lineWords[j-1].replace(/t/g, "") == lineWords[j-1].replace(/t/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            }
          }
        }
        lineNew += word + " "
      }
      text = lineNew
    } else if (MurritQuirk && (text.startsWith("UK:") || text.startsWith("MURRIT:") || text.startsWith("ALT!MURRIT:") || text.startsWith("BOOBDRONE:"))) {
      text = text.replace(/&gt;\(\[/g, "")
      text = text.replace(/\]/g, "")
      text = text.replace(/\#/g, "h")
    } else if (HamifiQuirk && (text.startsWith("OD:") || text.startsWith("HAMIFI:") || text.startsWith("???:"))) {
      text = text.replace(/∞/g, "")
    } else if (SestroQuirk && (text.startsWith("CF:") || text.startsWith("SESTRO:"))) {
      text = text.replace(/∞/g, "")
    } else if (RodereQuirk && (text.startsWith("RODERE:"))) {
      text = text.replace(/--x/g, "")
      text = text.replace(/ -/g, " ")
      text = text.replace(/-/g, " ")
    } else if (VelliaQuirk && (text.startsWith("VELLIA:"))) {
      text = text.replace(/\:t\:/g, "t")
      text = text.replace(/=/g, "")
    } else if (PozzolQuirk && (text.startsWith("POZZOL:"))) {
      text = "POZZOL: " + text[8].toUpperCase() + text.slice(9).toLowerCase()
      text = text.replace(/ i /g, " I ")
    } else if (NeilnaQuirk && (text.startsWith("NEILNA:"))) {
      text = text.replace(/ \|/g, " ")
      text = text.replace(/\|/g, " ")
    } else if (KeiksiQuirk && (text.startsWith("KEIKSI:"))) {
      text = text.replace(/\@/g, "a")
      text = text.replace(/aAa/g, "")
    } else if (VilcusQuirk && (text.startsWith("VILCUS:") || text.startsWith("ANNOUNCER:"))) {
      text = text.replace(/〈«/g, "")
      text = text.replace(/»〉/g, "")
    } else if (NecronQuirk && (text.startsWith("NECRON:"))) {
      text = text.replace(/†/g, "")
      text = text.replace(/  /g, " ")
    } else if (MshiriQuirk && (text.startsWith("MSHIRI:"))) {
      text = text.replace(/: \.+/g, ": ")
    } else if (RacrenQuirk && (text.startsWith("RACREN:") || text.startsWith("TR:"))) {
      text = text.replace(/\{/g, "")
      text = text.replace(/\}/g, "")
      text = text.replace(/-&gt;/g, "")
      text = text.replace(/&lt;-/g, "")
    } else if (GarnieQuirk && (text.startsWith("GARNIE:"))) {
      text = text.replace(/&lt;&lt;/g, "")
    } else if (PascalQuirk && (text.startsWith("PASCAL:"))) {
      text = text.replace(/\:\= /g, "")
      text = text.replace(/\;/g, "")
    } else if (GlomerQuirk && (text.startsWith("GLOMER:"))) {
      let lineNew = ""
      let lineWords = text.split(" ")
      for (let j = 0; j<lineWords.length; j++) {
        let word = lineWords[j]
        if ((word.includes("M") || word.includes("G")) && word.replace(/M/g, "").replace(/G/g, "") == word.replace(/M/g, "").replace(/G/g, "").toLowerCase()) {
          word = word.toLowerCase()
        }
        lineNew += word + " "
      }
      text = lineNew
    } else if (BytconQuirk && (text.startsWith("BYTCON:"))) {
      text = text.replace(/0-&gt;/g, "")
      text = text.replace(/8-&gt;/g, "")
    } else if (CrytumQuirk && (text.startsWith("CRYTUM:"))) {
      text = text.replace(/O&gt; /g, "")
      text = text.replace(/‿/g, "")
    } else if (EndariQuirk && (text.startsWith("ENDARI:"))) {
      text = text.replace(/\)-\| /g, "")
      text = text.replace(/\|-\(/g, "")
    } else if (SabineQuirk && (text.startsWith("SABINE:"))) {
      text = text.replace(/\[...\] /g, "")
      /* normal casing
      text = text.toLowerCase()
      text = "SABINE:" + text.slice(7)
      text = text.replace(/\: ./g, ": " + text[text.search(/\: ./g)+2].toUpperCase())
      let textSplit = text.split(". ")
      lineNew = ""
      for (let j = 0; j<textSplit.length; j++){
        if (textSplit[j][0]) {
          textSplit[j] = textSplit[j][0].toUpperCase() + textSplit[j].slice(1)
          lineNew += ". " + textSplit[j]
        }
      }
      text = lineNew.slice(2)
      text = text.replace(/sabine/g, "Sabine")
      text = text.replace(/berare/g, "Berare")
      text = text.replace(/mr\./g, "Mr.")
      text = text.replace(/ i /g, " I ")
      text = text.replace(/ahahahahah/g, "AHAHAHAHAH")
      text = text.replace(/ahahah/g, "AHAHAH")
      text = text.replace(/hollownull/g, "Hollownull")
      text = text.replace(/well\.\.\./g, "Well...")
      text = text.replace(/s-grade/g, "S-grade")
      text = text.replace(/\(second/g, "(Second")
      text = text.replace(/a-ah/g, "A-ah")
      text = text.replace(/help\!/g, "Help!")
      */
    } else if (SirageQuirk && (text.startsWith("SIRAGE:"))) {
      text = text.replace(/ &lt; /g, " ")
      text = text.replace(/ &gt;\~/g, "")
      text = text.replace(/&lt;/g, "c")
    } else if (HayyanQuirk && (text.startsWith("HAYYAN:"))) {
      text = text.replace(/\=/g, "")
      text = text.replace(/: ⨀/g, ": O")
      text = text.replace(/⨀/g, "o")
    } else if (CuliumQuirk && (text.startsWith("CULIUM:"))) {
      text = text.replace(/±/g, "")
    } else if (RaurouQuirk && (text.startsWith("RAUROU:"))) {
      text = text.replace(/\//g, "I")
    } else if (CinareQuirk && (text.startsWith("CINARE:"))) {
      text = text.replace(/Ç/g, "C")
      text = text.replace(/ç/g, "c")
    } else if (ValtelQuirk && (text.startsWith("VALTEL:"))) {
      text = text.replace(/vv/g, "w")
      text = text.replace(/v/g, "u")
      text = text.replace(/uigilante/g, "vigilante")
      text = text.replace(/euer/g, "ever")
      text = text.replace(/haue/g, "have")
    } else if (HusskeQuirk && (text.startsWith("HUSSKE:"))) {
      text = text.replace(/ø/g, "o")
    } else if (SecilyQuirk && (text.startsWith("SECILY:"))) {
      text = text.replace(/\:(.*?)\b /g, ": ")
      text = text.replace(/ \.\.\.(.*?)[0-9]/g, "")
      text = text.replace("standard of", "standard of <i>greatness</i> I passed down to you.")
      text = text.replace("miserable?<br>", "miserable?<br><span style=\"font-size: 9px;\">SECILY: I'd I'd always liked him more. You remind me too much of myself.</span>")
      text = text.replace("I know", "I know <i>everything</i> about you.")
      text = text.replace(/ \.\.\.(.*?)$/g, "")
      text = text.replace(/\+/g, "")
    } else if (text.startsWith("GUARDIANSPIRIT:")) {
      text = text.replace(/\*/g, "")
      text = text.replace(/-$/g, "")
    } else if (ForgivenQuirk && (text.startsWith("FORGIVEN:"))) {
      text = text.replace(/O-\| /g, "")
      text = text.replace(/\|-&gt;/g, "")
    } else if (ExecutiveQuirk && (text.startsWith("EXECUTIVE:"))) {
      text = text.replace(/ ☊/g, "")
    } else if (DismasQuirk && dismasCondition) {
      text = text.replace(/\/\\/g, "a")
      text = text.replace(/\\\//g, "v")
      text = text.replace(/\/\/\//g, "")
      let lineNew = ""
      let lineWords = text.split(" ")
      for (let j = 0; j<lineWords.length; j++) {
        let word = lineWords[j]
        if (word.length > 1 && word.includes("a") && word.replace(/a/g, "") == word.replace(/a/g, "").toUpperCase()) {
          word = word.toUpperCase()
          if (word.length == 2 && word[1] == "A") {
            if (lineWords[j+1]) {
              if (lineWords[j+1].replace(/a/g, "") == lineWords[j+1].replace(/a/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            } else if (lineWords[j-1]) {
                if (lineWords[j-1].replace(/a/g, "") == lineWords[j-1].replace(/a/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            }
          }
        }
        if (word.includes("v") && word.replace(/v/g, "") == word.replace(/v/g, "").toUpperCase()) {
          word = word.toUpperCase()
          if (word.length == 2 && word[1] == "V") {
            if (lineWords[j+1]){
              if (lineWords[j+1].replace(/v/g, "") == lineWords[j+1].replace(/v/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            } else if (lineWords[j-1]){
              if (lineWords[j-1].replace(/v/g, "") == lineWords[j-1].replace(/v/g, "").toUpperCase()) {
                word = word[0]+word.slice(1).toLowerCase()
              }
            }
          }
        }
        if (j == 1 && word[0] == "a" && word.replace(/a/g, "") == word.replace(/a/g, "").toLowerCase()) {
          word = word[0].toUpperCase()+word.slice(1)
        }
        lineNew += word + " "
      }
      text = lineNew
    }
    if (RypiteQuirk && spans[i-1]){
      if (spans[i-1].innerHTML.startsWith("RYPITE:")) {
        spans[i].style.removeProperty("text-shadow")
      }
    }
  if (SecilyQuirk) {
    text = text.replace("12.Ng5", "")
    text = text.replace("...Rd7", "")
    text = text.replace("13.Nxe6", "")
    text = text.replace("...Bb6", "")
    text = text.replace("14.Ng5", "")
    text = text.replace("...Nh6", "")
    text = text.replace("0-1", "")
  }
  if (NecronQuirk) {
    text = text.replace(/†/g, "")
  }
  text = text.replace("pozzol:", "POZZOL:")
    spans[i].innerHTML = text
}

GM_registerMenuCommand("Albion Dequirk"+AlbionQuirkOn, () => GM_setValue("AlbionQuirk", !AlbionQuirk));
GM_registerMenuCommand("Arcjec Dequirk"+ArcjecQuirkOn, () => GM_setValue("ArcjecQuirk", !ArcjecQuirk));
GM_registerMenuCommand("Bytcon Dequirk"+BytconQuirkOn, () => GM_setValue("BytconQuirk", !BytconQuirk));
GM_registerMenuCommand("Cinare Dequirk"+CinareQuirkOn, () => GM_setValue("CinareQuirk", !CinareQuirk));
GM_registerMenuCommand("Crytum Dequirk"+CrytumQuirkOn, () => GM_setValue("CrytumQuirk", !CrytumQuirk));
GM_registerMenuCommand("Culium Dequirk"+CuliumQuirkOn, () => GM_setValue("CuliumQuirk", !CuliumQuirk));
GM_registerMenuCommand("Dismas Dequirk"+DismasQuirkOn, () => GM_setValue("DismasQuirk", !DismasQuirk));
GM_registerMenuCommand("Ellsee Dequirk"+EllseeQuirkOn, () => GM_setValue("EllseeQuirk", !EllseeQuirk));
GM_registerMenuCommand("Endari Dequirk"+EndariQuirkOn, () => GM_setValue("EndariQuirk", !EndariQuirk));
GM_registerMenuCommand("Executive Dequirk"+ExecutiveQuirkOn, () => GM_setValue("ExecutiveQuirk", !ExecutiveQuirk));
GM_registerMenuCommand("Forgiven Dequirk"+ForgivenQuirkOn, () => GM_setValue("ForgivenQuirk", !ForgivenQuirk));
GM_registerMenuCommand("Garnie Dequirk"+GarnieQuirkOn, () => GM_setValue("GarnieQuirk", !GarnieQuirk));
GM_registerMenuCommand("Glomer Dequirk"+GlomerQuirkOn, () => GM_setValue("GlomerQuirk", !GlomerQuirk));
GM_registerMenuCommand("Guardianspirit Dequirk"+GuardianspiritQuirkOn, () => GM_setValue("GuardianspiritQuirk", !GuardianspiritQuirk));
GM_registerMenuCommand("Hamifi Dequirk"+HamifiQuirkOn, () => GM_setValue("HamifiQuirk", !HamifiQuirk));
GM_registerMenuCommand("Hayyan Dequirk"+HayyanQuirkOn, () => GM_setValue("HayyanQuirk", !HayyanQuirk));
GM_registerMenuCommand("Husske Dequirk"+HusskeQuirkOn, () => GM_setValue("HusskeQuirk", !HusskeQuirk));
GM_registerMenuCommand("Jentha Dequirk"+JenthaQuirkOn, () => GM_setValue("JenthaQuirk", !JenthaQuirk));
GM_registerMenuCommand("Keiksi Dequirk"+KeiksiQuirkOn, () => GM_setValue("KeiksiQuirk", !KeiksiQuirk));
GM_registerMenuCommand("Laivan Dequirk"+LaivanQuirkOn, () => GM_setValue("LaivanQuirk", !LaivanQuirk));
GM_registerMenuCommand("Mshiri Dequirk"+MshiriQuirkOn, () => GM_setValue("MshiriQuirk", !MshiriQuirk));
GM_registerMenuCommand("Murrit Dequirk"+MurritQuirkOn, () => GM_setValue("MurritQuirk", !MurritQuirk));
GM_registerMenuCommand("Necron Dequirk"+NecronQuirkOn, () => GM_setValue("NecronQuirk", !NecronQuirk));
GM_registerMenuCommand("Neilna Dequirk"+NeilnaQuirkOn, () => GM_setValue("NeilnaQuirk", !NeilnaQuirk));
GM_registerMenuCommand("Occeus Dequirk"+OcceusQuirkOn, () => GM_setValue("OcceusQuirk", !OcceusQuirk));
GM_registerMenuCommand("Pascal Dequirk"+PascalQuirkOn, () => GM_setValue("PascalQuirk", !PascalQuirk));
GM_registerMenuCommand("Pozzol Dequirk"+PozzolQuirkOn, () => GM_setValue("PozzolQuirk", !PozzolQuirk));
GM_registerMenuCommand("Racren Dequirk"+RacrenQuirkOn, () => GM_setValue("RacrenQuirk", !RacrenQuirk));
GM_registerMenuCommand("Raurou Dequirk"+RaurouQuirkOn, () => GM_setValue("RaurouQuirk", !RaurouQuirk));
GM_registerMenuCommand("Rodere Dequirk"+RodereQuirkOn, () => GM_setValue("RodereQuirk", !RodereQuirk));
GM_registerMenuCommand("Rypite Dequirk"+RypiteQuirkOn, () => GM_setValue("RypiteQuirk", !RypiteQuirk));
GM_registerMenuCommand("Sabine Dequirk"+SabineQuirkOn, () => GM_setValue("SabineQuirk", !SabineQuirk));
GM_registerMenuCommand("Secily Dequirk"+SecilyQuirkOn, () => GM_setValue("SecilyQuirk", !SecilyQuirk));
GM_registerMenuCommand("Sestro Dequirk"+SestroQuirkOn, () => GM_setValue("SestroQuirk", !SestroQuirk));
GM_registerMenuCommand("Sirage Dequirk"+SirageQuirkOn, () => GM_setValue("SirageQuirk", !SirageQuirk));
GM_registerMenuCommand("Sova Dequirk"+SovaQuirkOn, () => GM_setValue("SovaQuirk", !SovaQuirk));
GM_registerMenuCommand("Taz Dequirk"+TazQuirkOn, () => GM_setValue("TazQuirk", !TazQuirk));
GM_registerMenuCommand("Valtel Dequirk"+ValtelQuirkOn, () => GM_setValue("ValtelQuirk", !ValtelQuirk));
GM_registerMenuCommand("Vellia Dequirk"+VelliaQuirkOn, () => GM_setValue("VelliaQuirk", !VelliaQuirk));
GM_registerMenuCommand("Vilcus Dequirk"+VilcusQuirkOn, () => GM_setValue("VilcusQuirk", !VilcusQuirk));
GM_registerMenuCommand("Vivifier Dequirk"+VivifierQuirkOn, () => GM_setValue("VivifierQuirk", !VivifierQuirk));

GM_registerMenuCommand("Disable all fonts"+disableFontsOn, () => GM_setValue("disableFonts", !disableFonts));
GM_registerMenuCommand("Turn off special CSS"+SpecialCSSOn, () => GM_setValue("SpecialCSS", !SpecialCSS));
GM_registerMenuCommand("Plaintext images"+TextIMGOn, () => GM_setValue("TextIMG", !TextIMG));


// Plaintext images
GM_addStyle("@keyframes opus2 {\
    0%  {color:#3C1500; text-shadow:0.75px 0.75px 0.75px #B80E15, 0 0.75px 0.75px #B80E15, -0.75px 0.75px 0.75px #B80E15, -0.75px 0 0.75px #B80E15, -0.75px -0.75px 0.75px #B80E15, 0 -0.75px 0.75px #B80E15, 0.75px -0.75px 0.75px #B80E15, 0.75px 0 0.75px #B80E15;}\
    9.1%  {color:#B50B0C; text-shadow:0.75px 0.75px 0.75px #FB1F04, 0 0.75px 0.75px #FB1F04, -0.75px 0.75px 0.75px #FB1F04, -0.75px 0 0.75px #FB1F04, -0.75px -0.75px 0.75px #FB1F04, 0 -0.75px 0.75px #FB1F04, 0.75px -0.75px 0.75px #FB1F04, 0.75px 0 0.75px #FB1F04;}\
    18.2%  {color:#EE8109; text-shadow:0.75px 0.75px 0.75px #F4F84C, 0 0.75px 0.75px #F4F84C, -0.75px 0.75px 0.75px #F4F84C, -0.75px 0 0.75px #F4F84C, -0.75px -0.75px 0.75px #F4F84C, 0 -0.75px 0.75px #F4F84C, 0.75px -0.75px 0.75px #F4F84C, 0.75px 0 0.75px #F4F84C;}\
    27.3%  {color:#FDDD91; text-shadow:0.75px 0.75px 0.75px #FBFAF4, 0 0.75px 0.75px #FBFAF4, -0.75px 0.75px 0.75px #FBFAF4, -0.75px 0 0.75px #FBFAF4, -0.75px -0.75px 0.75px #FBFAF4, 0 -0.75px 0.75px #FBFAF4, 0.75px -0.75px 0.75px #FBFAF4, 0.75px 0 0.75px #FBFAF4;}\
    36.4%  {color:#CAC0B3; text-shadow:0.75px 0.75px 0.75px #71C149, 0 0.75px 0.75px #71C149, -0.75px 0.75px 0.75px #71C149, -0.75px 0 0.75px #71C149, -0.75px -0.75px 0.75px #71C149, 0 -0.75px 0.75px #71C149, 0.75px -0.75px 0.75px #71C149, 0.75px 0 0.75px #71C149;}\
    45.5%  {color:#010101; text-shadow:0.75px 0.75px 0.75px #FFFFFF, 0 0.75px 0.75px #FFFFFF, -0.75px 0.75px 0.75px #FFFFFF, -0.75px 0 0.75px #FFFFFF, -0.75px -0.75px 0.75px #FFFFFF, 0 -0.75px 0.75px #FFFFFF, 0.75px -0.75px 0.75px #FFFFFF, 0.75px 0 0.75px #FFFFFF;}\
    54.5%  {color:#00903B; text-shadow:0.75px 0.75px 0.75px #02FBC7, 0 0.75px 0.75px #02FBC7, -0.75px 0.75px 0.75px #02FBC7, -0.75px 0 0.75px #02FBC7, -0.75px -0.75px 0.75px #02FBC7, 0 -0.75px 0.75px #02FBC7, 0.75px -0.75px 0.75px #02FBC7, 0.75px 0 0.75px #02FBC7;}\
    63.6%  {color:#4277E4; text-shadow:0.75px 0.75px 0.75px #13D8FB, 0 0.75px 0.75px #13D8FB, -0.75px 0.75px 0.75px #13D8FB, -0.75px 0 0.75px #13D8FB, -0.75px -0.75px 0.75px #13D8FB, 0 -0.75px 0.75px #13D8FB, 0.75px -0.75px 0.75px #13D8FB, 0.75px 0 0.75px #13D8FB;}\
    72.7%  {color:#023275; text-shadow:0.75px 0.75px 0.75px #00134B, 0 0.75px 0.75px #00134B, -0.75px 0.75px 0.75px #00134B, -0.75px 0 0.75px #00134B, -0.75px -0.75px 0.75px #00134B, 0 -0.75px 0.75px #00134B, 0.75px -0.75px 0.75px #00134B, 0.75px 0 0.75px #00134B;}\
    81.8%  {color:#16301D; text-shadow:0.75px 0.75px 0.75px #010101, 0 0.75px 0.75px #010101, -0.75px 0.75px 0.75px #010101, -0.75px 0 0.75px #010101, -0.75px -0.75px 0.75px #010101, 0 -0.75px 0.75px #010101, 0.75px -0.75px 0.75px #010101, 0.75px 0 0.75px #010101;}\
    90.9%  {color:#531328; text-shadow:0.75px 0.75px 0.75px #BB1863, 0 0.75px 0.75px #BB1863, -0.75px 0.75px 0.75px #BB1863, -0.75px 0 0.75px #BB1863, -0.75px -0.75px 0.75px #BB1863, 0 -0.75px 0.75px #BB1863, 0.75px -0.75px 0.75px #BB1863, 0.75px 0 0.75px #BB1863;}\
    100%  {color:#500A60; text-shadow:0.75px 0.75px 0.75px #9D4EAE, 0 0.75px 0.75px #9D4EAE, -0.75px 0.75px 0.75px #9D4EAE, -0.75px 0 0.75px #9D4EAE, -0.75px -0.75px 0.75px #9D4EAE, 0 -0.75px 0.75px #9D4EAE, 0.75px -0.75px 0.75px #9D4EAE, 0.75px 0 0.75px #9D4EAE;}\
}\
.opus2 {\
    animation: 0.84s infinite step-start opus2;\
    font-size:18px;\
    font-weight:normal;\
    letter-spacing:-1px;\
}")
var imgs = document.getElementsByTagName("img")

for (let i = 0; i<imgs.length; i++) {
  if (TextIMG && imgs[i].src == "https://cdn.deconreconstruction.com/vasterror/img/opus2.gif") {
    imgs[i].insertAdjacentHTML("afterend", "<span class=\"opus2\">𝔐𝔞𝔤𝔫𝔲𝔪 𝔒𝔭𝔲𝔰</span>")
    imgs[i].remove()
  }
  if (imgs[i].src == "https://cdn.deconreconstruction.com/vasterror/img/turnincheddar.png") imgs[i].title="turnincheddar"
  if (imgs[i].src == "https://cdn.deconreconstruction.com/vasterror/img/turninkoss.png") imgs[i].title="turninkoss"
  if (imgs[i].src == "https://cdn.deconreconstruction.com/vasterror/img/turninsmug.png") imgs[i].title="turninsmug"
}
