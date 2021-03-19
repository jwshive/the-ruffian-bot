const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeySchema = new Schema(
  {
    key_level: { type: Number, required: true },
    key_instance: { type: String, required: true },
    key_holder: { type: String, required: true },
  },
  { timestamps: true }
);
KeySchema.index(
  { key_level: 1, key_instance: 1, key_holder: 1 },
  { unique: true }
);

const Key = mongoose.model("Key", KeySchema);

module.exports = Key;
