const Discord = require("discord.js");

function jokeEmbed(msg, data) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setAuthor(
      "Your Dad",
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setTitle(data.joke)
    .setTimestamp()
    .setFooter("Hey, don't touch that thermostat.");
  msg.channel.send(embed);
}

module.exports = jokeEmbed;
