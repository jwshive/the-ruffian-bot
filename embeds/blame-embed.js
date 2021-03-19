const Discord = require("discord.js");

function blameEmbed(msg, blame) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setAuthor(
      `"Artisanal Failure Excuses - Finely crafted bullshit mistakes."`,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setTitle(`\n\n${blame}\n\n`)
    .setTimestamp()
    .setFooter("Hey buddy, next time, just don't be so bad.");
  msg.channel.send(embed);
}

module.exports = blameEmbed;
