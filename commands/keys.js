const Key = require("../models/Key");
const keysEmbed = require("../embeds/keys-embed");

module.exports = {
  text: "!keys",
  description: "Lists or Adds tracked guild Mythic+ Keys.",
  usage:
    "!keys - lists the tracked keys for the week.\n!keys <instance> <number> - saves your key to the database. Additional uses will update your key when it changes. Instance and Number can be in any order.",
  callback: (msg) => {
    msg.delete();
    if (msg.content.length <= 6) {
      Key.find((err, result) => {
        let embed = keysEmbed(msg, result);
      });
    } else {
      let keyBits = msg.content.substring(6);
      let key_level = Number(keyBits.match(/\d+/g).map(Number));
      let key_instance = keyBits
        .match(/[a-z A-Z]+/g)
        .toString()
        .trim()
        .replace(", ", "");

      // Check if this person already has a key, if not, new key, if so, delete then add new key.
      Key.find({ key_holder: msg.member.displayName }, (err, results) => {
        if (!results.length) {
          const key = new Key({
            key_level: key_level,
            key_instance: key_instance,
            key_holder: msg.member.displayName,
          });
          key
            .save()
            .then((result) => {
              msg.reply("New Key Added.");
            })
            .catch((err) => {
              console.log(err.code);
              if (err.code === 11000) {
                msg.reply("You've already recorded your key.");
              }
              console.log(`Key Save Error: ${err}`);
            });
        } else {
          const filter = {
            key_holder: msg.member.displayName,
          };
          const update = {
            key_level: key_level,
            key_instance: key_instance,
          };
          Key.findOneAndUpdate(filter, update, { new: true }, (result) => {
            msg.reply("I've updated your key, thanks!");
          });
        }
      });
    }
  },
};
