const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.authToken; // ✅ Ensure correct cookie key
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.status(200).json({ status: true, user: user.fullName });
  } catch (error) {
    console.error("User verification error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ status: false, message: "Token expired" });
    }

    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};
