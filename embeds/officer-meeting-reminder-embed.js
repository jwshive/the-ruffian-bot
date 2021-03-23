const Discord = require("discord.js");

function officerMeetingReminderEmbed(bot, channel) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Officer Meeting Reminder")
    .setURL(
      "https://www.warcraftlogs.com/guild/us/grizzly-hills/the%20ruffian%20posse"
    )
    .setAuthor(
      `${bot.client.user.username}`,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .addFields({ name: "What Time?", value: "7:30PM" })
    .setTimestamp()
    .setFooter("Early is on-time, on-time is late.");
  channel.send(embed);
}

module.exports = officerMeetingReminderEmbed;
