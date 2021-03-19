require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const greetingEmbed = require("./embeds/greeting-embed");
const { QuickDiscordBot } = require("quick-chat-bot");
const path = require("path");
let bot_token;
let testMode;
if (process.env.NODE_ENV === "production") {
  bot_token = process.env.PROD_BOT_TOKEN;
  testMode = false;
  console.log("running with the prod token");
} else {
  bot_token = process.env.DEV_BOT_TOKEN;
  testMode = false;
  console.log("running with the dev token");
}

// Setup the Bot
const bot = new QuickDiscordBot({
  botToken: bot_token,
  commandsDir: path.join(__dirname, "commands"),
  ignoreChannels: [],
  testMode: testMode,
  testChannel: "secret-bot-testing",
  ignoreBots: true,
});

// Start the bot
bot.connect();

// Get this bread
bot.client.on("ready", () => {
  bot.client.user.setActivity("Dreams Shatter", { type: "WATCHING" });
});

// Create an event listener for new guild members
bot.client.on("guildMemberAdd", (member) => {
  let embed = greetingEmbed(member);
});
