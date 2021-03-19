const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    this._connect;
  }

  _connect() {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Mongo Engaged"))
      .catch((err) => console.log(`Mongo Error: ${err}`));
  }
}

module.exports = new Database();
