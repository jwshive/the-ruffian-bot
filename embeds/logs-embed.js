const { EmbedBuilder } = require('discord.js');

function logsEmbed(msg, data) {
  const embed = new EmbedBuilder()
    .setColor("#0099ff")
    .setTitle("The Ruffian Posse @ WarcraftLogs")
    .setURL("https://www.warcraftlogs.com/guild/us/grizzly-hills/the%20ruffian%20posse")
    .setAuthor({name: `Last ${data.length} Raid Nights`, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
    .setTimestamp();
  data.forEach((event) => {
    let readableDate = new Date(event.start).toLocaleDateString("en-US");
    let name = event.title;
    let link = event.id;
    embed.addFields({name: `${name} [${link}]`, value: `https://www.warcraftlogs.com/reports/${link}\n${readableDate}`});
  });
  msg.channel.send({ embeds: [embed] });
}

module.exports = logsEmbed;
