const { EmbedBuilder } = require('discord.js');

function officerMeetingReminderEmbed(bot, channel) {

  channel.send(`<@&295372527876964353> <@&295372971927928832>`);
    try {
      const embed = new EmbedBuilder()
        .setColor("#0099ff")
        .setTitle("Officer Meeting Reminder")
        .setURL("https://www.warcraftlogs.com/guild/us/grizzly-hills/the%20ruffian%20posse")
        .setAuthor({name: `${bot.user.username}`, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
        .addFields({
          name: "Who?",
          value: "<@&295372527876964353> <@&295372971927928832>",
        })
        .addFields({ name: "What Time?", value: "7:30PM" })
        .setTimestamp()
        .setFooter({text: "Early is on-time, on-time is late."});
      channel.send({ embeds: [embed] });
    } catch (err) { console.log(err) }
}

module.exports = officerMeetingReminderEmbed;
