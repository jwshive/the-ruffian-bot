const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!smalls",
  description: "Killing me smalls..",
  usage:
    "!smalls - Killing me.",
  callback: (msg) => {
      playAudio(msg, "killing-me-smalls.mp3")
  }
};
