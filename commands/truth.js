const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!truth",
  description: "You can't handle the truth",
  usage: "!truth - I WANT ANSWERS?",
  callback: (msg) => {
      playAudio(msg, "u-cant-handle-the-truth.mp3")
  }
};
