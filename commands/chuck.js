const chuckEmbed = require("../embeds/chuck-embed");
const getChuckFact = require("../apis/apiRequest");
const url = "https://api.chucknorris.io/jokes/random";

module.exports = {
  text: "!chuck",
  description: "Random Chuck Norris Facts",
  usage: "!chuck - Blessed with a Chuck Fact.",
  callback: (msg) => {
    const chuckFact = getChuckFact(url).then((data) => {
      let embed = chuckEmbed(msg, data);
    });
  },
};
