const stripe = require("stripe")(
  "sk_test_51MooauCHYN1T3yAzLRjy3Osuvd2YpMkcH8itVymmzcB0WjgurRpw4O3GbsF5OouNqYZu3DdXJVwhh4OOfIVYk38p00YgtEwjgv"
);
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const OrderModel = require("../models/OrderModel");
const app = express();
app.use(cors()); // cors middleware'i buraya taşıyın
router.post("/checkout", async (req, res) => {
  const { token, toplamfiyat, cartItems, currentUser } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: toplamfiyat * 100,
        currency: "TRY",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newModel = new OrderModel({
        name: currentUser.name,
        email: currentUser.mail,
        userid: currentUser._id,
        orderItems: cartItems,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipCode: token.card.address_zip,
        },
        orderAmount: toplamfiyat,
        isDelivered: false,
        transactionId: payment.source.id,
      });
      newModel.save();
      res.send("Ödeme Başarıyla Gerçekleşti");
    } else {
      res.send("Upps bir şeyler ters gitti..");
    }
  } catch (error) {
    res.status(400).json({ message: "Ödeme Başarısız", error });
  }
});

router.post("/getUserOrders", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await OrderModel.find({ userid: userid }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
