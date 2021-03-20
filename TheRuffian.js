require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const greetingEmbed = require("./embeds/greeting-embed");
const { QuickDiscordBot } = require("quick-chat-bot");
const path = require("path");
const mongoose = require("mongoose");
let bot_token;

if (process.env.NODE_ENV === "production") {
  bot_token = process.env.PROD_BOT_TOKEN;
  console.log("running with the prod token");
} else {
  bot_token = process.env.DEV_BOT_TOKEN;
  console.log("running with the dev token");
}

// Setup the Bot
const bot = new QuickDiscordBot({
  botToken: bot_token,
  commandsDir: path.join(__dirname, "commands"),
  ignoreChannels: [],
  testMode: false,
  testChannel: "public-general",
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
  const getProgression = require("./wow-api/raiderio");
  const data = getProgression().then((data) => {
    let embed = greetingEmbed(member, data);
  });
});

// Mongo Stuff
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Engaged"))
  .catch((err) => console.log(`Mongo Error: ${err}`));

// Scheduled Tasks
// Clear the keys on Tuesday at 10am.
const clearKeys = require("./cron/remove-keys");
