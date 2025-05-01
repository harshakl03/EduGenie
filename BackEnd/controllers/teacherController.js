const Teacher = require("../Models/Teacher");
const { isExisting, createUser } = require("./userController");

const createTeacher = async (req, res) => {
  try {
    const {
      username,
      password,
      name,
      DOB,
      Address,
      Phone_Number,
      Designation,
      Department,
    } = req.body;

    const exists = await isExisting(username);

    if (exists) return res.status(401).json({ message: "User already exists" });

    const newTeacher = new Teacher({
      _id: username,
      name,
      DOB,
      Address,
      Phone_Number,
      Designation,
      Department,
    });

    await newTeacher.save();

    const userResponse = await createUser(username, password, 2, "Teacher");

    return res
      .status(200)
      .json({ ...userResponse, message: "Teacher registered successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { createTeacher };
