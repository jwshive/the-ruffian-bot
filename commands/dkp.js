const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!dkp",
  description: "50 DKP MINUS",
  usage: "!dkp - Watch the tail",
  callback: (msg) => {
      playAudio(msg, "dkp.mp3")
    }
};
