const { MessageEmbed } = require("discord.js");
const logsEmbed = require("../embeds/logs-embed");
const getLogs = require("../apis/apiRequest");
const url =
  "https://www.warcraftlogs.com/v1/reports/guild/the%20ruffian%20posse/grizzly-hills/us?api_key=3adb36766d1094e974e12755902eb8a1";

module.exports = {
  text: "!logs",
  description: "Gets the last few weeks of guild logs.",
  usage: "!logs - displays the last few guild logs.",
  callback: (msg) => {
    msg.delete();
    const log_data = getLogs(url).then((data) => {
      let lastFewLogs = data.slice(0, 6);
      let embed = logsEmbed(msg, lastFewLogs);
    });
  },
};
