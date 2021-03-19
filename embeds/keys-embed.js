const Discord = require("discord.js");

function logsEmbed(msg, keyData) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Keys For Days!")
    .setAuthor(
      "Keys for this week.",
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setTimestamp();
  data.forEach((event) => {
    console.log(event);
    let name = event.title;
    let link = event.id;
    embed.addField(name, `https://www.warcraftlogs.com/reports/${link}`);
  });
  msg.channel.send(embed);
}

module.exports = logsEmbed;
