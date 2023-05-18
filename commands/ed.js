const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!ed",
  description: "EMOTIONAL DAMAGE.",
  usage:
    "!ed - Plays a small audio clip to let someone know you have emotional damage.",
  callback: (msg) => {
      playAudio(msg, "ed.mp3")
    }
};
