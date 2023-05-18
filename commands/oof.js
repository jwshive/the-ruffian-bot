const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!oof",
  description: "It was at this moment ...",
  usage: "!oof - He Fucked Up.",
  callback: (msg) => {
!      playAudio(msg, "he_fd_up.mp3")
  }
};
