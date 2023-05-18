const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!joe",
  description: "Knowing is half the battle..",
  usage:
    "!joe - G I Joe.",
  callback: (msg) => {
      playAudio(msg, "knowing-is-haif-the-battle.mp3")
    }
};
