const axios = require("axios");
const url =
  "https://www.warcraftlogs.com/v1/reports/guild/the%20ruffian%20posse/grizzly-hills/us?api_key=3adb36766d1094e974e12755902eb8a1";

const getLogs = async () => {
  try {
    const resp = await axios.get(url).then(function (response) {
      return response.data;
    });
    return resp;
  } catch (err) {
    console.error(err);
  }
};

module.exports = getLogs;
