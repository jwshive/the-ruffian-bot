const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!buzz",
  description: "Knowing is half the battle..",
  usage:
    "!buzz - G I Joe.",
  callback: (msg) => {
      playAudio(msg, "to-infinity-and-beyond.mp3")
    }
};
