const { EmbedBuilder } = require('discord.js');

function blameEmbed(msg, blame, author) {
  try {
    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setAuthor({name: `Artisanal Failure Excuses - Crafted for ${msg.member.displayName}.`, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
      .setTitle(`:bell: ${blame} :bell: --${author}`)
      .setImage("https://media2.giphy.com/media/vX9WcCiWwUF7G/200.gif")
      .setTimestamp()
      .setFooter({text: "Hey buddy, next time, just don't be so bad."});
    msg.channel.send({ embeds: [embed] });
  } catch (err) {
    console.log(`Error on blame embed: ${err}`);
  }
}

module.exports = blameEmbed;
