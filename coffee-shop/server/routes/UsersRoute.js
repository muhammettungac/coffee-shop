const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

//Register işlemi
router.post("/register", async (req, res) => {
  const { name, password, mail } = req.body;

  const oldUser = await UserModel.findOne({ mail: mail });
  if (oldUser) {
    res.status(400).json({ message: "Böyle bir kullanıcı bulunmaktadır" });
  } else {
    const newUser = new UserModel({
      name: name,
      mail: mail,
      password: password,
    });

    try {
      await newUser.save();
      res.send("User register is successfull");
    } catch (error) {
      res.send("User register is failed");
    }
  }
});

//Login işlemi
router.post("/login", async (req, res) => {
  const { password, mail } = req.body;

  try {
    const user = await UserModel.find({ mail: mail, password: password });

    if (user.length > 0) {
      res.send(user[0]);
    } else {
      res.status(400).json({ message: "Kullanıcı Girişi Hatalı" });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
