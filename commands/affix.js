const { MessageEmbed } = require("discord.js");
const affixEmbed = require("../embeds/affix-embed");
const getAffixes = require("../apis/apiRequest");
const url = "https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en";

module.exports = {
  text: "!affix",
  description: "Get Weekly Affixes",
  usage: "!affix - lists weekly affixes.",
  callback: (msg) => {
    const affixes = getAffixes(url).then((data) => {
      let embed = affixEmbed(msg, data);
    });
  },
};
