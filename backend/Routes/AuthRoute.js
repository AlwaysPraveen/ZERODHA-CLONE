const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const {userVerification} = require('../Middlewares/AuthMiddleware');


router.post("/signup", Signup);
router.post('/login', Login);
router.post('/',userVerification);
router.get("/verify", userVerification, (req, res) => {
    res.status(200).json({ message: "Authenticated", user: req.user });
});
router.post("/logout", (req, res) => {
    res.clearCookie("authToken", {
      httpOnly: true,  
      secure: false,  // Set `true` if using HTTPS
      sameSite: "lax",
    });
  
    return res.status(200).json({ success: true, message: "Logged out successfully" });
});

module.exports = router;