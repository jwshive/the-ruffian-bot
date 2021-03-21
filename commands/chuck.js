const chuckEmbed = require("../embeds/chuck-embed");
const apiRequest = require("../apis/apiRequest");
const url = "https://api.chucknorris.io/jokes/random";

module.exports = {
  text: "!chuck",
  description: "Random Chuck Norris Facts",
  usage: "!chuck - Blessed with a Chuck Fact.",
  callback: (msg) => {
    const chuckFact = apiRequest(url).then((data) => {
      let embed = chuckEmbed(msg, data);
    });
  },
};
