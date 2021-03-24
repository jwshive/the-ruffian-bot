const Discord = require("discord.js");

function jokeEmbed(msg, data, parent) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle(data.joke)
    .setTimestamp();
  if (parent === "Mom") {
    embed.setAuthor(
      `Your Mom`,
      "https://static.wikia.nocookie.net/americanpie/images/a/a1/Jeanine_Reunion_01.jpg/revision/latest/scale-to-width-down/340?cb=20120306085353"
    );
    embed.setFooter("Are you sure you're eating enough, sweety?");
  } else {
    embed.setAuthor(
      `Your Dad`,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    );
    embed.setFooter("Hey, don't touch that thermostat.");
  }
  msg.channel.send(embed);
}

module.exports = jokeEmbed;
