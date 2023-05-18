const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!woo",
  description: "Gimmie 2 claps and a Ric Flair!",
  usage: "!woo - The Nature Boy.",
  callback: (msg) => {
      // Let's try to join the channel and play the sound.
      playAudio(msg, "ric_flair.mp3")
  },
};
