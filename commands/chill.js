const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!chill",
  description: "Daddy, chillll!",
  usage: "!chill - Daddy Chill?",
  callback: (msg) => {
      playAudio(msg, "chill.mp3")
    }
};
