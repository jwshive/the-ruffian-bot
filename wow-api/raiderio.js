const axios = require("axios");
const url =
  "https://raider.io/api/v1/guilds/profile?region=us&realm=grizzly-hills&name=the%20ruffian%20posse&fields=raid_progression";

const getProgression = async () => {
  try {
    const resp = await axios.get(url).then(function (response) {
      return response.data;
    });
    return resp;
  } catch (err) {
    console.error(err);
  }
};

module.exports = getProgression;
