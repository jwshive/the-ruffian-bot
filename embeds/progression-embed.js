const Discord = require("discord.js");

function progressionEmbed(msg, data) {
  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("The Ruffian Posse @ Raider.IO")
    .setURL(data.profile_url)
    .setAuthor(
      `Progression: ${data.name} - ${data.faction} - ${data.realm}`,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .addFields(
      {
        name: "Vault of the Incarnates",
        value: data.raid_progression["vault-of-the-incarnates"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["vault-of-the-incarnates"].normal_bosses_killed} / ${data.raid_progression["vault-of-the-incarnates"].total_bosses}`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["vault-of-the-incarnates"].heroic_bosses_killed} / ${data.raid_progression["vault-of-the-incarnates"].total_bosses}`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["vault-of-the-incarnates"].mythic_bosses_killed} / ${data.raid_progression["vault-of-the-incarnates"].total_bosses}`,
        inline: true,
      }
    )
    .setTimestamp();
  msg.channel.send(embed);
}

module.exports = progressionEmbed;
