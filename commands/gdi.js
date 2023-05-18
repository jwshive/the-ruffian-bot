const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!gdi",
  description: "God Damn it, Taltost",
  usage: "!gdi - God Damnit!",
  callback: (msg) => {
      playAudio(msg, "gdileeroy.mp3")
    }
};
