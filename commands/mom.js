const { MessageEmbed } = require("discord.js");
const jokeEmbed = require("../embeds/joke-embed");
const getMommaJoke = require("../apis/apiRequest");
const url = "https://api.yomomma.info/";

module.exports = {
  text: "!mom",
  description: "Random Yo Momma Joke",
  usage: "!joke - Get hit with the best Yo Momma you've ever heard.",
  callback: (msg) => {
    const mommaJoke = getMommaJoke(url)
      .then((data) => {
        let embed = jokeEmbed(msg, data, "Mom");
      })
      .catch((err) => console.log(err));
  },
};
