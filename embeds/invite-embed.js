const Discord = require("discord.js");
let joinUsGif =
  "https://media3.giphy.com/media/RMTQiRYAuvvJb1k6al/giphy.gif?cid=ecf05e47adnbygt9d1gqey48popd2s2yj003aoo2wm7fv4c2&rid=giphy.gif";

function inviteEmbed(msg, invite) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(msg.client.user.username)
    .setTitle(`Your invite, ${msg.member.displayName}`)
    .setDescription(invite)
    .setImage(joinUsGif);
  msg.reply(embed);
}

module.exports = inviteEmbed;
