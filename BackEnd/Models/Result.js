const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  Student_id: { type: String, ref: "Student" },
  Subject_Code: { type: String, ref: "Subject" },
  MaxMarks: { type: Number, default: 100 },
  Internals: { type: Number },
  Externals: { type: Number },
  Total: Internals + Externals,
  Result: { type: String, enum: ["P", "F", "A", "W", "X", "NE"] },
  Announced_On: { type: String },
});

module.exports = mongoose.model("Result", ResultSchema);

const mongoose = require("mongoose");
