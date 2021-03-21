const { MessageEmbed } = require("discord.js");
//const newEmbed = require("../embeds/new-embed");
//const getApiRequest = require("../apis/apiRequest");
//const url = "";

module.exports = {
  text: "!text",
  description: "Description",
  usage: "!text - usage",
  callback: (msg) => {
    msg.delete();
    // code here
  },
};
