const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!fernando",
  description: "FERNANDO!",
  usage: "!fernanto - Can you hear the drums?",
  callback: (msg) => {
      playAudio(msg, "fernando.mp3")
    }
};
