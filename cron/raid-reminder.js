const cron = require("node-cron");
const raidReminderEmbed = require("../embeds/raid-reminder-embed");

function sendReminder(bot) {
  cron.schedule("0 19 * * tuesday,thursday", () => {
    let channel = bot.channels.cache.find(
      (channel) => channel.name === "guild-general"
    );
    let embed = raidReminderEmbed(bot, channel)();
  });
}

module.exports = sendReminder;
