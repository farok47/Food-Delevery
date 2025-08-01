import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  userId: { type: Boolean, default: false },
});

const Order = mongoose.model.Order || mongoose.model("Order", OrderSchema);

export default Order;
