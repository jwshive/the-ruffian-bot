const axios = require("axios");

const makeApiRequest = async (url) => {
  try {
    const resp = await axios.get(url).then(function (response) {
      return response.data;
    });
    return resp;
  } catch (err) {
    console.error(err);
  }
};

module.exports = makeApiRequest;
