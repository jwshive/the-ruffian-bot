let wowgif =
  "https://thumbs.gfycat.com/OrganicNastyAmericanriverotter-size_restricted.gif";
const Discord = require("discord.js");

function greetingEmbed(member, progressionData) {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "public-general"
  );
  if (!channel) return;

  const embed = new Discord.MessageEmbed()
    .setTitle(
      `Welcome, ${member.user.username}, to The Ruffian Posse - Grizzly Hills`
    )
    .setAuthor(
      member.client.user.username,
      "https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg"
    )
    .setDescription(
      `Welcome to The Ruffian Posse Discord Server and Pleasure Palace.\nFeel free to spy on us at Raider.IO and Warcraft Logs.\n Our current progression is\nFated Sepulcher of the First Ones: ${progressionData.raid_progression["fated-sepulcher-of-the-first-ones"].summary}\nFated Sanctum of Domination: ${progressionData.raid_progression["fated-sanctum-of-domination"].summary}\nFated Castle Nathria: ${progressionData.raid_progression["fated-castle-nathria"].summary}\nSepulcher of the First Ones: ${progressionData.raid_progression["sepulcher-of-the-first-ones"].summary}\nSanctum of Domination: ${progressionData.raid_progression["sanctum-of-domination"].summary}\nCastle Nathria: ${progressionData.raid_progression["castle-nathria"].summary}`
    )
    .addFields(
      {
        name: "Warcraft Logs",
        value: "https://www.warcraftlogs.com/guild/id/271788",
        inline: true,
      },
      {
        name: "Raider.IO",
        value:
          "https://raider.io/guilds/us/grizzly-hills/The%20Ruffian%20Posse",
        inline: true,
      }
    )
    .setImage(wowgif)
    .setTimestamp()
    .setFooter("Please enjoy your stay, unless you aren't into that.");
  // Try to set their role to guests and pugs
  let role = member.guild.roles.cache.find(
    (role) => role.name === "Guests and Pugs"
  );
  role
    ? member.roles.add(role)
    : console.log(`Could not add ${role} to ${member.client.user.username}`);
  channel.send(embed);
}

module.exports = greetingEmbed;
