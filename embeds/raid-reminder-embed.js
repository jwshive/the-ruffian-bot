const Discord = require("discord.js");

function raidReminderEmbed(bot, channel) {

  channel.send(`<@&295373337268584458> <@&295372971927928832> <@&295372527876964353>`);
  
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Raid Reminder")
    .setURL(
      "https://www.warcraftlogs.com/guild/us/grizzly-hills/the%20ruffian%20posse"
    )
    .setAuthor(
      `${bot.client.user.username}`,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .addFields({
      name: "Who?",
      value: `<@&295373337268584458> <@&295372971927928832> <@&295372527876964353>`,
    })
    .addFields({ name: "What Time?", value: "Invites at 7:20PM" })
    .setTimestamp()
    .setFooter("Early is on-time, on-time is late.");
  channel.send(embed);
}

module.exports = raidReminderEmbed;
