const axios = require("axios");
const url = "https://api.chucknorris.io/jokes/random";

const getChuckFact = async () => {
  try {
    const resp = await axios.get(url).then(function (response) {
      return response.data;
    });
    return resp;
  } catch (err) {
    console.error(err);
  }
};

module.exports = getChuckFact;
