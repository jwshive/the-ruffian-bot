const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!noshit",
  description: "Well No Shit",
  usage: "!noshit - Shit?",
  callback: (msg) => {
      playAudio(msg, "well_no_shit.mp3")
  }
};
