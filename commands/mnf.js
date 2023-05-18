const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!mnf",
  description: "Who's ready for a Monday Night?",
  usage: "!mnf - ESPN Monday Night Football Theme, short.",
  callback: (msg) => {
      playAudio(msg, "espn_mnf_short.mp3")
    }
};
