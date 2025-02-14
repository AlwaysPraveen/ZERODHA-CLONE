const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    console.log("Cookies received:", req.cookies);  // ✅ Debugging log
    const token = req.cookies.authToken;  // ✅ Ensure this key matches the cookie

    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.status(200).json({
      status: true,
      user: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("User verification error:", error);

    if (error.name === "TokenExpiredError") {
      res.clearCookie("authToken");  //  Clear expired token
      return res.status(401).json({ status: false, message: "Token expired, please log in again" });
    }

    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};
