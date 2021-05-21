const Discord = require("discord.js");

function blameEmbed(msg, blame, author) {
  try {
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setAuthor(
        `Artisanal Failure Excuses - Crafted for ${msg.member.displayName}.`,
        "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
      )
      .setTitle(`:bell: ${blame} :bell: --${author}`)
      .setImage("https://media2.giphy.com/media/vX9WcCiWwUF7G/200.gif")
      .setTimestamp()
      .setFooter("Hey buddy, next time, just don't be so bad.");
    msg.channel.send(embed);
  } catch (err) {
    console.log(`Error on blame embed: ${err}`);
  }
}

module.exports = blameEmbed;
