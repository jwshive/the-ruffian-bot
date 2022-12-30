const Blame = require("../models/Blame");
const shameEmbed = require("../embeds/shame-embed");
const playAudio = require("../utils/play_audio");

module.exports = {
  text: "!shame",
  description: "Get or Create a random reason for your failings.",
  usage:
    "!shame - gets a random excuse from the database.\n!shame <text> will add your pitiful excuse to the database.",
  callback: (msg) => {
    if (msg.content.length <= 7) {
      Blame.findOneRandom((err, result) => {
        let embed = shameEmbed(msg, result.shame_reason, result.shame_author);

        if (!msg.member.voice.channel) {
          msg.reply("Join a voice channel for the full shame experience.");
          console.log("User was not in a voice channel.");
        } else {
          // Let's try to join the channel and play the sound.
          playAudio(msg, "shame.mp3").catch((err, msg) =>
            msg.author.send(
              "I can't write to that channel, roll for shame in #guild-general."
            )
          );
        }
      });
    } else {
      let newBlameReason = msg.content.substring(7);
      const shame = new Blame({
        shame_reason: newBlameReason,
        shame_author: msg.member.displayName,
      });
      shame
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
