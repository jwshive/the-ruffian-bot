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
        name: "Fated Sepulcher of the First Ones Progression",
        value: data.raid_progression["fated-sepulcher-of-the-first-ones"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["fated-sepulcher-of-the-first-ones"].normal_bosses_killed} / 11`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["fated-sepulcher-of-the-first-ones"].heroic_bosses_killed} / 11`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["fated-sepulcher-of-the-first-ones"].mythic_bosses_killed} / 11`,
        inline: true,
      }
    )
    .addFields(
      {
        name: "Fated Sanctum of Domination Progression",
        value: data.raid_progression["fated-sanctum-of-domination"].summary
      },
      {
        name: "Normal",
        value: `${data.raid_progression["fated-sanctum-of-domination"].normal_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["fated-sanctum-of-domination"].heroic_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["fated-sanctum-of-domination"].mythic_bosses_killed} / 10`,
        inline: true,
      }
    )
    .addFields(
      {
        name: "Fated Castle Nathria Progression",
        value: data.raid_progression["fated-castle-nathria"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["fated-castle-nathria"].normal_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["fated-castle-nathria"].heroic_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["fated-castle-nathria"].mythic_bosses_killed} / 10`,
        inline: true,
      }
    )
    .addFields(
      {
        name: "Sepulcher of the First Ones Progression",
        value: data.raid_progression["sepulcher-of-the-first-ones"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["sepulcher-of-the-first-ones"].normal_bosses_killed} / 11`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["sepulcher-of-the-first-ones"].heroic_bosses_killed} / 11`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["sepulcher-of-the-first-ones"].mythic_bosses_killed} / 11`,
        inline: true,
      }
    )
    .addFields(
      {
        name: "Sanctum of Domination Progression",
        value: data.raid_progression["sanctum-of-domination"].summary
      },
      {
        name: "Normal",
        value: `${data.raid_progression["sanctum-of-domination"].normal_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["sanctum-of-domination"].heroic_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["sanctum-of-domination"].mythic_bosses_killed} / 10`,
        inline: true,
      }      
    )
    .addFields(
      {
        name: "Castle Nathria Progression",
        value: data.raid_progression["castle-nathria"].summary,
      },
      {
        name: "Normal",
        value: `${data.raid_progression["castle-nathria"].normal_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Heroic",
        value: `${data.raid_progression["castle-nathria"].heroic_bosses_killed} / 10`,
        inline: true,
      },
      {
        name: "Mythic",
        value: `${data.raid_progression["castle-nathria"].mythic_bosses_killed} / 10`,
        inline: true,
      }
    )
    .setTimestamp();
  msg.channel.send(embed);
}

module.exports = progressionEmbed;
