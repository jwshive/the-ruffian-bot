const Discord = require("discord.js");

function keysEmbed(msg, data) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Don't Fuck with Chuck!")
    .setAuthor(
      "Chuck Norris",
      "https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S"
    )
    .setDescription(data.value)
    .setImage(
      "https://i.pinimg.com/originals/b4/d0/bc/b4d0bc7a0a9a9d6f34274e7be5eabfe1.gif"
    )
    .setFooter("100% authenticated facts.")
    .setTimestamp();
  msg.channel.send(embed);
}

module.exports = keysEmbed;
