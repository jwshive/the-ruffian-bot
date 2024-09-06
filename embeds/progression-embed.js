const { EmbedBuilder } = require('discord.js');


function progressionEmbed(msg, data) {
  const embed = new EmbedBuilder()
    .setColor("#0099ff")
    .setTitle("The Ruffian Posse @ Raider.IO")
    .setURL(data.profile_url)
    .setAuthor({name: `Progression: ${data.name} - ${data.faction} - ${data.realm}`, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
    .addFields(
      {
        name: "Nerub-ar Palace",
        value: data.raid_progression["nerubar-palace"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["nerubar-palace"].normal_bosses_killed} / ${data.raid_progression["nerubar-palace"].total_bosses}`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["nerubar-palace"].heroic_bosses_killed} / ${data.raid_progression["nerubar-palace"].total_bosses}`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["nerubar-palace"].mythic_bosses_killed} / ${data.raid_progression["nerubar-palace"].total_bosses}`,
        inline: true,
      }
    )
    .setTimestamp();
  msg.channel.send({ embeds: [embed] });
}

module.exports = progressionEmbed;
