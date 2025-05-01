const Teacher = require("../Models/Teacher");
const connectDB = require("../config/db");

const teacherRecords = [
  {
    _id: "prathik_k",
    name: "Prathik K",
    DOB: "21-05-1981",
    Address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    Phone_Number: 8660472534,
    Designation: "Assistant Professor",
    Department: "CSE(DS)",
    Subjects_Undertaken: [
      {
        sem: 3,
        subjects: ["BCS303"],
      },
      {
        sem: 4,
        subjects: ["BDSL456C"],
      },
      {
        sem: 4,
        subjects: ["BAD515B", "BCDL504"],
      },
    ],
  },
  {
    _id: "tejaswini_ps",
    name: "Tejaswini P S",
    DOB: "28-01-1975",
    Address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    Phone_Number: 9902714366,
    Designation: "Assistant Professor",
    Department: "CSE(DS)",
    Subjects_Undertaken: [
      {
        sem: 3,
        subjects: ["BCS306A"],
      },
      {
        sem: 4,
        subjects: ["BCS401", "BCSL404"],
      },
    ],
  },
];

(async function () {
  connectDB();
  try {
    await Teacher.deleteMany();
    console.log("Teacher collection flushed!!!");

    await Teacher.insertMany(teacherRecords);
    console.log("Teacher data seeded!!!");
    process.exit();
  } catch (err) {
    console.log("Error flushing or seeding Teacher data", err);
    process.exit(1);
  }
})();
