const cron = require("node-cron");
const officerMeetingReminderEmbed = require("../embeds/officer-meeting-reminder-embed");

function sendReminder(bot) {
  cron.schedule("20 19 * * monday", () => {
    let channel = bot.client.channels.cache.find(
      (channel) => channel.name === "officer-notes"
    );
    let embed = officerMeetingReminderEmbed(bot, channel)();
    console.log(embed);
  });
}

module.exports = sendReminder;
