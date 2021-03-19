const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let random = require("mongoose-simple-random");

const BlameSchema = new Schema(
  {
    blame_reason: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

BlameSchema.plugin(random);

const Blame = mongoose.model("Blame", BlameSchema);

module.exports = Blame;
