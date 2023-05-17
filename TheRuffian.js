const { Client, Events, GatewayIntentBits, Partials } = require('discord.js');
const greetingEmbed = require("./embeds/greeting-embed");
const DiscordMessageHandler = require('./DiscordMessageHandler');
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config();
let bot_token = process.env.BOT_TOKEN;
const bot = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

// Start the bot
const messageHandler = new DiscordMessageHandler({ commandsDir: path.join(__dirname, "commands"), testChannel: "public-general", testMode: false, botToken: bot_token, ignoreChannels: [], showLiveMessages: true });

bot.on('ready', () => {
    console.log('Connected to Discord');
});
bot.on('message', DiscordMessageHandler.handleMessage);
bot.login(bot_token);

// Get this bread
bot.on("ready", () => {
  bot.user.setActivity("!help", { type: "LISTENING" });
});

// Create an event listener for new guild members
bot.on("guildMemberAdd", (member) => {
  const logGuest = require("./utils/log_new_member")(member);
  const url = `${process.env.RAIDERIO_URL}&fields=raid_progression`;
  const getProgression = require("./apis/apiRequest");
  const data = getProgression(url).then((data) => {
    let embed = greetingEmbed(member, data);
  });
});

// Mongo Stuff
mongoose
  .connect(process.env.MONGO_URL, {
    //useNewUrlParser: true,
    ////useUnifiedTopology: true,
    ////useCreateIndex: true,
  })
  .then(() => console.log("Mongo Engaged"))
  .catch((err) => console.log(`Mongo Error: ${err}`));

// Scheduled Tasks
// Clear the keys on Tuesday at 10am.
const clearKeys = require("./cron/remove-keys");
// Send reminder on Tuesday/Thursday about raid.
const raidReminder = require("./cron/raid-reminder")(bot);
// Send reminder on Monday for Officers Meeting.
const officerMeetingReminder = require("./cron/officer-meeting-reminder")(bot);
