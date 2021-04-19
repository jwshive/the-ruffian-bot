const Discord = require("discord.js");

function affixEmbed(msg, data) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setAuthor(
      "Bwonsamdi",
      "https://i.pinimg.com/originals/e8/13/e6/e813e6156d4db54b75674433db657078.jpg"
    )
    .setTitle("Your Weekly Nightmares.")
    .setTimestamp()
    .setFooter("Get your 10 for the week.");
  data.affix_details.forEach((affix) => {
    embed.addFields({
      name: affix.name,
      value: affix.description,
      inline: false,
    });
  });
  msg.channel.send(embed);
}

module.exports = affixEmbed;
