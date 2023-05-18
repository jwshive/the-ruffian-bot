const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!touched",
  description: "My Tralala!",
  usage: "!touched - my tralala.",
  callback: (msg) => {
      playAudio(msg, "you-touch-my-tralalala.mp3")
    }
};
