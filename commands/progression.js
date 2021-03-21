const { MessageEmbed } = require("discord.js");
const progressionEmbed = require("../embeds/progression-embed");
const getProgression = require("../apis/raiderio");

module.exports = {
  text: "!progression",
  callback: (msg) => {
    const progression_data = getProgression().then((data) => {
      let embed = progressionEmbed(msg, data);
    });
  },
};
