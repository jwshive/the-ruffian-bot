const { MessageEmbed } = require("discord.js");
const logsEmbed = require("../embeds/logs-embed");
const getLogs = require("../wow-api/warcraflogs");

module.exports = {
  text: "!logs",
  callback: (msg) => {
    const log_data = getLogs().then((data) => {
      let lastFewLogs = data.slice(0, 5);
      let embed = logsEmbed(msg, lastFewLogs);
    });
  },
};
