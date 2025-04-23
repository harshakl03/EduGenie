const Student = require("../Models/Student");
const connectDB = require("../config/db");

const studentRecords = [
  {
    _id: "1BI22CD015",
    Name: "Harsha K L",
    DOB: "03-11-2004",
    Age: 20,
    Address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    Phone_Number: 9353991614,
    Course: "CSE(DS)",
  },
  {
    _id: "1BI22CD030",
    Name: "Pavan D",
    DOB: "27-08-2004",
    Age: 20,
    Address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    Phone_Number: 7204163730,
    Course: "CSE(DS)",
  },
  {
    _id: "1BI22CD026",
    Name: "Mohammed Amaan",
    DOB: "24-08-2004",
    Age: 20,
    Address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    Phone_Number: 7795023287,
    Course: "CSE(DS)",
  },
  {
    _id: "1BI22CD012",
    Name: "Eshwar R",
    DOB: "22-06-2004",
    Age: 20,
    Address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    Phone_Number: 8105833763,
    Course: "CSE(DS)",
  },
];

(async function () {
  connectDB();

  try {
    await Student.deleteMany();
    console.log("Student collection flushed!!!");

    await Student.insertMany(studentRecords);
    console.log("Student Collection seeded!!!");
    process.exit();
  } catch (err) {
    console.log("Error flushing or seeding Student data", err);
    process.exit(1);
  }
})();
