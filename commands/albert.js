const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!albert",
  description: "Hey Hey Hey!",
  usage: "!hey - Fat Albert.",
  callback: (msg) => {
      playAudio(msg, "hey_hey_hey.mp3")
    }
};
