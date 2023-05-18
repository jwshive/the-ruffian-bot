const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!welldone",
  description: "Show someone how well they did.",
  usage:
    "!welldone - Plays a small audio clip to let someone know they are special.",
  callback: (msg) => {
      playAudio(msg, "curb.mp3")
  }
};
