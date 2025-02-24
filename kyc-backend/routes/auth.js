const express = require("express");
const { signup, login } = require("../controllers/auth");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;

