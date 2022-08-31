const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!hey",
  description: "Hey you guyyyyyysssss!",
  usage: "!hey - SLoth.",
  callback: (msg) => {
    if (!msg.member.voice.channel) {
      msg.reply("Join a voice channel for the full shame experience.");
      console.log("User was not in a voice channel.");
    } else {
      // Let's try to join the channel and play the sound.
      playAudio(msg, "hey_you_guys.mp3").catch((err, msg) =>
        msg.author.send("I can't write to that channel, try in #guild-general.")
      );
    }
  },
};
