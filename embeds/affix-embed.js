const { EmbedBuilder } = require('discord.js');

function affixEmbed(msg, data) {
  const embed = new EmbedBuilder()
    .setColor("#0099ff")
    .setAuthor({name: 'Bwonsamdi', iconURL: 'https://i.pinimg.com/originals/e8/13/e6/e813e6156d4db54b75674433db657078.jpg'})
    .setTitle("Your Weekly Nightmares.")
    .setTimestamp()
    .setFooter({text: "Get your 10 for the week."});
  data.affix_details.forEach((affix) => {
    embed.addFields({ name: affix.name, value: affix.description, inline: false, });
  });
  msg.channel.send({ embeds: [embed] });
}

module.exports = affixEmbed;
