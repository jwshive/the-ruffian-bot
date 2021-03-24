const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema(
  {
    guest_discord_id: { type: String, required: true },
    guest_discord_username: { type: String, required: true },
    guest_discord_discriminator: { type: String, required: true },
    joined_timestamp: { type: Number, required: true },
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", GuestSchema);

module.exports = Guest;
