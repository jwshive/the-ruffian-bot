const { MessageEmbed } = require("discord.js");
const affixEmbed = require("../embeds/affix-embed");
const getAffixes = require("../apis/apiRequest");
const url = "https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en";

module.exports = {
  text: "!affix",
  description: "Get Weekly Affixes",
  usage: "!affix - lists weekly affixes.",
  callback: (msg) => {
    try {
      msg.delete();
    } catch (err) {
      console.log(`Error Deleting Message: ${err}`);
    }
    const dadJoke = getAffixes(url).then((data) => {
      let embed = affixEmbed(msg, data);
    });
  },
};
