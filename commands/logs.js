const { MessageEmbed } = require("discord.js");
const logsEmbed = require("../embeds/logs-embed");
const getLogs = require("../apis/warcraflogs");

module.exports = {
  text: "!logs",
  description: "Gets the last few weeks of guild logs.",
  usage: "!logs - displays the last few guild logs.",
  callback: (msg) => {
    const log_data = getLogs().then((data) => {
      let lastFewLogs = data.slice(0, 6);
      let embed = logsEmbed(msg, lastFewLogs);
    });
  },
};
