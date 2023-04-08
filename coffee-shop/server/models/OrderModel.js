const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    userid: { type: String, require },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, require },
    isDelivered: { type: Boolean, require, default: false },
    transactionId: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;
