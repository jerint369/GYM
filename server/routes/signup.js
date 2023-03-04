var express = require("express");
var router = express.Router();
const pool = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* post user adding */
router.post("/signup", async (req, res) => {
  const {firstName,lastName,email, password, street,city,province,phoneNumber } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount > 0) {
    return res.status(409).json({ message: "Email already exists" });
    console.log("Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await pool.query(
    "INSERT INTO users (firstname, lastname,email, password,street,city,province,phonenumber) VALUES ($1, $2, $3, $4,$5,$6,$7,$8) RETURNING *",
    [firstName,lastName,email, hashedPassword, street,city,province,phoneNumber]
  );

  const token = jwt.sign({ userId: newUser.rows[0].id }, "<your-secret-key>");

  res.json({ token, user: newUser.rows[0] });
});

module.exports = router;
