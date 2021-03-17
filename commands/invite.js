const { MessageEmbed } = require("discord.js");

let joinUsGif =
  "https://media3.giphy.com/media/RMTQiRYAuvvJb1k6al/giphy.gif?cid=ecf05e47adnbygt9d1gqey48popd2s2yj003aoo2wm7fv4c2&rid=giphy.gif";

module.exports = {
  text: "!invite",
  callback: (msg) => {
    // let channel_name = "public-general";
    // msg.channel.name
    //   ? channel_name
    //   : msg.reply("You have to run this command in #public-general");

    let invite = msg.channel
      .createInvite({
        maxAge: 10 * 30 * 100,
      })
      .then((invite) => {
        const embed = new MessageEmbed()
          .setAuthor(msg.client.user.username)
          .setTitle(`Your invite, ${msg.author.tag}`)
          .setDescription(invite)
          .setImage(joinUsGif);
        msg.reply(embed);
      })
      .catch(console.log);
  },
};
