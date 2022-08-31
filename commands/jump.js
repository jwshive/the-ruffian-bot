const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!jump",
  description: "You might as well jump.",
  usage: "!jump - Jump off and die.",
  callback: (msg) => {
    if (!msg.member.voice.channel) {
      msg.reply("Join a voice channel for the full shame experience.");
      console.log("User was not in a voice channel.");
    } else {
      // Let's try to join the channel and play the sound.
      playAudio(msg, "jump.mp3").catch((err, msg) =>
        msg.author.send("I can't write to that channel, try in #guild-general.")
      );
    }
  },
};
