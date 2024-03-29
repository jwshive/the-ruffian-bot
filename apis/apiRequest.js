const axios = require("axios");

const makeApiRequest = async (url, json = false) => {
  try {
    if (json) {
      const resp = await axios
        .get(url, { headers: { Accept: "application/json", "User-Agent": "axios 0.21.1" } })
        .then(function (response) {
          return response.data;
        });
      return resp;
    } else {
      const resp = await axios.get(url).then(function (response) {
        return response.data;
      });
      return resp;
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = makeApiRequest;
