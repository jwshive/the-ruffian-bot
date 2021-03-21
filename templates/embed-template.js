const Discord = require("discord.js");

function embedTemplate(msg, data) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Title")
    .setURL(
      "https://www.warcraftlogs.com/guild/us/grizzly-hills/the%20ruffian%20posse"
    )
    .setAuthor(
      `Last ${data.length} Raid Nights`,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setTimestamp();
  // forEach for addFields
  //   data.forEach((event) => {
  //     let readableDate = new Date(event.start).toLocaleDateString("en-US");
  //     let name = event.title;
  //     let link = event.id;
  //     embed.addField(
  //       name,
  //       `https://www.warcraftlogs.com/reports/${link}\n${readableDate}`
  //     );
  //   });
  msg.channel.send(embed);
}

module.exports = embedTemplate;
