const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String },
  DOB: { type: String },
  Address: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  Phone_Number: { type: Number },
  Designation: { type: String, required: true },
  Department: { type: String, required: true },
  Subjects_Undertaken: [
    {
      sem: { type: Number },
      subjects: { type: [String], ref: "Subject" },
    },
  ],
});

module.exports = mongoose.model("Teacher", TeacherSchema);
