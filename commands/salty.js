const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!salty",
  description: "Hey there",
  usage: "!salty - Alchy.",
  callback: (msg) => {
      playAudio(msg, "alchey.wav")
  }
};
