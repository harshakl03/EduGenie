const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  Name: { type: String },
  DOB: { type: String },
  Age: { type: Number },
  Address: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  Phone_Number: { type: Number },
  Course: { type: "String", required: true },
  Subjects_Enrolled: [
    {
      sem: { type: Number },
      subjects: [
        {
          code: { type: String, ref: "Subject" },
          attedance: { type: String },
          Results: { type: ["String"], ref: "Result" },
          _id: false,
        },
      ],
      _id: false,
    },
  ],
});

module.exports = mongoose.model("Student", StudentSchema);
