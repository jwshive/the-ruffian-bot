const fs = require("fs");
const helpEmbed = require("../embeds/help-embed");

module.exports = {
  text: "!help",
  description: "Shows the Bots available commands.",
  usage:
    "!help - Show the registered commands, a description and short usage example.",
  callback: (msg) => {
    msg.delete();
    const commands = [];
    try {
      const commandFiles = fs.readdirSync(__dirname);
      commandFiles
        .filter((commandFile) => commandFile.endsWith(".js"))
        .forEach((commandFile) => {
          const commandConfig = require(`${__dirname}/${commandFile}`);
          commandConfig.text =
            commandConfig.text || `!${commandFile.slice(0, -3)}`;
          commandConfig.description = commandConfig.description;
          commandConfig.usage = commandConfig.usage;
          try {
            commands.push({
              name: commandConfig.text,
              description: commandConfig.description,
              usage: commandConfig.usage,
            });
          } catch (err) {
            console.error(err);
            return;
          }
        });
      let embed = helpEmbed(msg, commands);
    } catch (err) {
      console.error(err);
    }
  },
};
