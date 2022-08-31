const Blame = require("../models/Blame");
const blameEmbed = require("../embeds/blame-embed");
const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!blame",
  description: "Get or Create a random reason for your failings.",
  usage:
    "!blame - gets a random excuse from the database.\n!blame <text> will add your pitiful excuse to the database.",
  callback: (msg) => {
    if (msg.content.length <= 7) {
      Blame.findOneRandom((err, result) => {
        let embed = blameEmbed(msg, result.blame_reason, result.blame_author);

        if (!msg.member.voice.channel) {
          msg.reply("Join a voice channel for the full shame experience.");
          console.log("User was not in a voice channel.");
        } else {
          // Let's try to join the channel and play the sound.
          playAudio(msg, "shame.mp3").catch((err, msg) =>
            msg.author.send(
              "I can't write to that channel, roll for blame in #guild-general."
            )
          );
        }
      });
    } else {
      let newBlameReason = msg.content.substring(7);
      const blame = new Blame({
        blame_reason: newBlameReason,
        blame_author: msg.member.displayName,
      });
      blame
        .save()
        .then((result) => {
          msg.reply("That's a new one, so creative.");
        })
        .catch((err) => {
          console.log(err.code);
          if (err.code === 11000) {
            msg.reply(
              "Someone has already added that excuse, are we really that bad we need to repeat?"
            );
          }
          console.log(`Blame Save Error: ${err}`);
        });
    }
  },
};
