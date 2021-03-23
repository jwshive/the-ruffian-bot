const { MessageEmbed } = require("discord.js");
const progressionEmbed = require("../embeds/progression-embed");
const getProgression = require("../apis/apiRequest");
const url =
  "https://raider.io/api/v1/guilds/profile?region=us&realm=grizzly-hills&name=the%20ruffian%20posse&fields=raid_progression";

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
