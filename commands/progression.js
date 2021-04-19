const { MessageEmbed } = require("discord.js");
const progressionEmbed = require("../embeds/progression-embed");
const getProgression = require("../apis/apiRequest");
const url = `${process.env.RAIDERIO_URL}&fields=raid_progression`;

module.exports = {
  text: "!progression",
  description: "Shows current guild progression.",
  usage: "!progression - displays current guild progression.",
  callback: (msg) => {
    const progression_data = getProgression(url).then((data) => {
      let embed = progressionEmbed(msg, data);
    });
  },
};
