const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!manamana",
  description: "MANAMANA",
  usage: "!manamana - What was that shit?",
  callback: (msg) => {
      playAudio(msg, "manamana.mp3")
    }
};
