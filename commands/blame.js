const Blame = require("../models/Blame");
const blameEmbed = require("../embeds/blame-embed");

module.exports = {
  text: "!blame",
  description: "Get or Create a random reason for your failings.",
  usage:
    "!blame - gets a random excuse from the database.\n!blame <text> will add your pitiful excuse to the database.",
  callback: (msg) => {
    try {
      msg.delete();
    } catch (err) {
      console.log(`Error Deleting Message: ${err}`);
    }
    if (msg.content.length <= 7) {
      Blame.findOneRandom((err, result) => {
        let embed = blameEmbed(msg, result.blame_reason, result.blame_author);
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
