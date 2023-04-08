const stripe = require("stripe")(
  "sk_test_51MooauCHYN1T3yAzLRjy3Osuvd2YpMkcH8itVymmzcB0WjgurRpw4O3GbsF5OouNqYZu3DdXJVwhh4OOfIVYk38p00YgtEwjgv"
);
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const OrderModel = require("../models/OrderModel");
const app = express();

router.post("/checkout", async (req, res) => {
  const { token, toplamfiyat, cartItems } = req.body;
});
