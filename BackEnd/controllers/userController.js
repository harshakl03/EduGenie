const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ENV = require("../config/env");

const isExisting = async (username) => {
  const exists = await User.findOne({ username });
  if (exists) return true;
  return false;
};

const createUser = async (username, password, level, role) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      level,
      role,
    });

    await newUser.save();

    return { username, message: "User created successfully", role, level };
  } catch (err) {
    throw new Error(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const UserRecord = await User.findOne({ username });

    if (!UserRecord) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, UserRecord.password);
    if (!match) return res.status(401).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      {
        username,
        role: UserRecord.role,
        level: UserRecord.level,
      },
      ENV.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    res.cookie("user_token", token, {
      httpOnly: true,
      secure: ENV.NODE_ENV === "production",
      maxAge: 3600000,
    });

    return res.status(200).json({
      message: "Login Successful",
      token,
      username: UserRecord.username,
      role: UserRecord.role,
      level: UserRecord.level,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const isLoggedIn = async (username, token) => {
  if (!token) {
    return -1;
  }
  const decode = jwt.verify(token, ENV.JWT_SECRET);
  const loggedUserId = decode.username;
  if (loggedUserId != username) {
    return 0;
  }
  return decode.level;
};

module.exports = { isExisting, createUser, login, isLoggedIn };
