const chuckEmbed = require("../embeds/chuck-embed");
const getChuckFact = require("../apis/chuck");

module.exports = {
  text: "!chuck",
  callback: (msg) => {
    const chuckFact = getChuckFact().then((data) => {
      let embed = chuckEmbed(msg, data);
    });
  },
};
