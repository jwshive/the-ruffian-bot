const Discord = require("discord.js");

function keysEmbed(msg, keyData) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Keys For Days!")
    .setAuthor(
      "Keys for this week.",
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setFooter("Keys will be automatically removed every Tuesday at 10am.")
    .setTimestamp();
  if (!keyData.length) {
    embed.setImage("https://memegenerator.net/img/instances/81093701.jpg");
    embed.addField("No Keys Entered", "Is Very Sad");
  } else {
    keyData.forEach((key) => {
      let key_holder = key.key_holder;
      let instance = `${key.key_instance} level ${key.key_level}`;
      embed.addField(key_holder, instance);
    });
  }

  msg.channel.send(embed);
}

module.exports = keysEmbed;
