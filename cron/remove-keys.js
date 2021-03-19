const cron = require("node-cron");
const Key = require("../models/Key");

cron.schedule("0 10 * * tuesday", () => {
  Key.deleteMany({}, {}, (err) => {
    if (err) throw err;
  });
});
