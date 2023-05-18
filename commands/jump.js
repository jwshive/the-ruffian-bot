const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!jump",
  description: "You might as well jump.",
  usage: "!jump - Jump off and die.",
  callback: (msg) => {
      playAudio(msg, "jump.mp3")
    }
};
