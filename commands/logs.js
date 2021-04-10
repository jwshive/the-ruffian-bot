const { MessageEmbed } = require("discord.js");
const logsEmbed = require("../embeds/logs-embed");
const getLogs = require("../apis/apiRequest");
const url = process.env.WCL_URL;

module.exports = {
  text: "!logs",
  description: "Gets the last few weeks of guild logs.",
  usage: "!logs - displays the last few guild logs.",
  callback: (msg) => {
    const log_data = getLogs(url).then((data) => {
      let lastFewLogs = data.slice(0, 6);
      let embed = logsEmbed(msg, lastFewLogs);
    });
  },
};
