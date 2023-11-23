const { EmbedBuilder } = require('discord.js');
import { titleCase } from "title-case";

function progressionEmbed(msg, data) {
  const embed = new EmbedBuilder()
    .setColor("#0099ff")
    .setTitle("The Ruffian Posse @ Raider.IO")
    .setURL(data.profile_url)
    .setAuthor({name: `Progression: ${data.name} - ${titleCase(data.faction)} - ${data.realm}`, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
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
    .addFields(
      {
        name: "Aberrus: The Shaowed Crucible",
        value: data.raid_progression["aberrus-the-shadowed-crucible"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["aberrus-the-shadowed-crucible"].normal_bosses_killed} / ${data.raid_progression["aberrus-the-shadowed-crucible"].total_bosses}`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["aberrus-the-shadowed-crucible"].heroic_bosses_killed} / ${data.raid_progression["aberrus-the-shadowed-crucible"].total_bosses}`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["aberrus-the-shadowed-crucible"].mythic_bosses_killed} / ${data.raid_progression["aberrus-the-shadowed-crucible"].total_bosses}`,
        inline: true,
      }
    )
    .addFields(
      {
        name: "Amirdrassil: The Dreams Hope",
        value: data.raid_progression["amirdrassil-the-dreams-hope"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["amirdrassil-the-dreams-hope"].normal_bosses_killed} / ${data.raid_progression["amirdrassil-the-dreams-hope"].total_bosses}`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["amirdrassil-the-dreams-hope"].heroic_bosses_killed} / ${data.raid_progression["amirdrassil-the-dreams-hope"].total_bosses}`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["amirdrassil-the-dreams-hope"].mythic_bosses_killed} / ${data.raid_progression["amirdrassil-the-dreams-hope"].total_bosses}`,
        inline: true,
      }
    )
    .setTimestamp();
  msg.channel.send({ embeds: [embed] });
}

module.exports = progressionEmbed;
