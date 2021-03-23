const { MessageEmbed } = require("discord.js");
const jokeEmbed = require("../embeds/joke-embed");
const getDadJoke = require("../apis/apiRequest");
const url = "https://icanhazdadjoke.com/";

module.exports = {
  text: "!joke",
  description: "Random Dad Joke",
  usage: "!joke - Get hit with the best Dad Joke you've ever heard.",
  callback: (msg) => {
    try {
      msg.delete();
    } catch (err) {
      console.log(`Error Deleting Message: ${err}`);
    }
    const dadJoke = getDadJoke(url, true)
      .then((data) => {
        let embed = jokeEmbed(msg, data);
      })
      .catch((err) => console.log(err));
  },
};
