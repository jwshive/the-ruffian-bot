const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!wth",
  description: "IS EVEN THAT!",
  usage: "!wth - is even that?",
  callback: (msg) => {
      playAudio(msg, "wth.mp3")
    }
};
