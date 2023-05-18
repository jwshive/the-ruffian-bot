const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!l2p",
  description: "Learn to Play",
  usage: "!l2p - Degen?",
  callback: (msg) => {
      playAudio(msg, "learn_to_play.mp3")
    }
};
