const chuckEmbed = require("../embeds/chuck-embed");
const getChuckFact = require("../apis/chuck");

module.exports = {
  text: "!chuck",
  description: "Random Chuck Norris Facts",
  usage: "!chuck - Blessed with a Chuck Fact.",
  callback: (msg) => {
    const chuckFact = getChuckFact().then((data) => {
      let embed = chuckEmbed(msg, data);
    });
  },
};
