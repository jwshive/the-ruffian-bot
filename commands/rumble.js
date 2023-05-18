const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!rumble",
  description: "Get Ready to Rumble.",
  usage:
    "!rumble - Plays a small audio clip to let someone know you're ready to rumble.",
  callback: (msg) => {
      playAudio(msg, "rumble.mp3")
  }
};
