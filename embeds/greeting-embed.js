const { EmbedBuilder, AttachmentBuilder } = require("discord.js");

function greetingEmbed(member, progressionData) {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "public-general"
  );
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setTitle(`Welcome, ${member.user.username}, to The Ruffian Posse - Grizzly Hills`)
    .setAuthor({name: member.client.user.username, iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
    .setDescription(
      `Welcome to The Ruffian Posse Discord Server and Pleasure Palace.\nFeel free to spy on us at Raider.IO and Warcraft Logs.\n Our current progression is\nVault of the Incarnates: ${progressionData.raid_progression["vault-of-the-incarnates"].summary}`
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
    .setTimestamp()
    .setFooter({text: "Please enjoy your stay, unless you aren't into that."});
  // Try to set their role to guests and pugs
  let role = member.guild.roles.cache.find(
    (role) => role.name === "Guests and Pugs"
  );
  role
    ? member.roles.add(role)
    : console.log(`Could not add ${role} to ${member.client.user.username}`);
  channel.send({ embeds: [embed] });
}

module.exports = greetingEmbed;
