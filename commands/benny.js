const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!benny",
  description: "Don't talk back.",
  usage:
    "!benny",
  callback: (msg) => {
      playAudio(msg, "benny.mp3")
    }
};
