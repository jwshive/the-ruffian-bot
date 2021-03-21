const Discord = require("discord.js");

function helpEmbed(msg, data) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setAuthor(
      msg.client.user.username,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setTitle("Available Bot Commands")
    .setTimestamp();
  data.forEach((command) => {
    embed.addFields({
      name: command.name,
      value: `Description:\n${command.description}\n\nUsage:\n${command.usage}`,
      inline: true,
    });
  });
  msg.author.send(embed);
}

module.exports = helpEmbed;
