require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
let wowgif =
  "https://thumbs.gfycat.com/OrganicNastyAmericanriverotter-size_restricted.gif";
const { QuickDiscordBot } = require("quick-chat-bot");
const path = require("path");
const bot = new QuickDiscordBot({
  botToken: process.env.BOT_TOKEN,
  commandsDir: path.join(__dirname, "commands"),
  ignoreChannels: [],
  testMode: false,
  testChannel: "secret-bot-testing",
  ignoreBots: true,
});

bot.connect();

bot.client.on("ready", () => {
  bot.client.user.setActivity("Dirty");
});

// Create an event listener for new guild members
bot.client.on("guildMemberAdd", (member) => {
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
      `Welcome to The Ruffian Posse Discord Server and Pleasure Palace.\nFeel free to spy on us at Raider.IO and Warcraft Logs.`
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
});
