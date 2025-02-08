const User = require('../model/UserModel');
const {createSecretToken} = require('../utils/SecretToken')
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { fullName, email, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" }); // Use 409 instead of 200
    }

    const user = await User.create({ fullName, email, password, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
      const { email, password } = req.body;

      // Validate input fields (all fields are required)
      if (!email || !password) {
          return res.status(400).json({ message: 'All fields are required', success: false });
      }

      // Check if user exists or not
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(401).json({ message: 'Incorrect email or password', success: false });
      }

      // Validating password
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
          return res.status(401).json({ message: 'Incorrect email or password', success: false });
      }

      // Generating token
      const token = createSecretToken(user._id);

      // Set cookie
      res.cookie("authToken", token, {
          httpOnly: false, // Secure the cookie
          sameSite: "Strict", // Prevent CSRF attacks
          withCredentials: true,
      });

      // Send success response
      res.status(200).json({ message: "User logged in successfully", success: true });

      next();
  } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Internal server error", success: false });
  }
};
