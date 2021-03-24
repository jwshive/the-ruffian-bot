const Blame = require("../models/Blame");
const blameEmbed = require("../embeds/blame-embed");

async function play(voiceChannel, mp3File) {
  const connection = await voiceChannel.join();
  const dispatcher = connection.play(mp3File, { volume: 0.75 });
  dispatcher.on("start", () => {
    console.log(`Playing ${mp3File}`);
  });
  dispatcher.on("finish", () => {
    console.log(`Finished playing ${mp3File}`);
    voiceChannel.leave();
  });
  dispatcher.on("error", console.error);
}

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
          console.log("User was not in a voice channel.");
        } else {
          // Let's try to join the channel and play the sound.
          play(msg.member.voice.channel, "./sounds/shame-1.mp3");
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
