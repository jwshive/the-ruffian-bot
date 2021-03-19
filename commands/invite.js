const { MessageEmbed } = require("discord.js");
const inviteEmbed = require("../embeds/invite-embed");

module.exports = {
  text: "!invite",
  callback: (msg) => {
    let channel_name = "public-general";
    if (msg.channel.name !== channel_name) {
      msg.reply("You have to run this command in #public-general");
    } else {
      let invite = msg.channel
        .createInvite({
          maxAge: 10 * 30 * 100,
        })
        .then((invite) => {
          let embed = inviteEmbed(msg, invite);
        })
        .catch(console.log);
    }
  },
};
