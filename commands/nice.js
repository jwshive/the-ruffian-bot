const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!nice",
  description: "Noice!",
  usage: "!nice - Very Slick?",
  callback: (msg) => {
      playAudio(msg, "nice.mp3")
    }
};
