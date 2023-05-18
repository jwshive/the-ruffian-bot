const { EmbedBuilder } = require('discord.js');

function helpEmbed(msg, data) {
  //try {
    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setAuthor({name: msg.client.user.username, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
      .setTitle("Available Bot Commands")
      .setTimestamp();
    data.forEach((command) => {
      embed.addFields({
        name: command.name,
        value: `Description:\n${command.description}\n\nUsage:\n${command.usage}`,
        inline: true,
      });
    });
    msg.author.send( { enbeds: [embed] });
  //} catch (err) {
  //  console.log(`Error on help: ${err}`);
  //}
}

module.exports = helpEmbed;
