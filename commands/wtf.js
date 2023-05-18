const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!wtf",
  description: "WTFFFFF",
  usage: "!wtf - What was that shit?",
  callback: (msg) => {
      // Let's try to join the channel and play the sound.
      playAudio(msg, "wtf.mp3");
  },
};
