import Order from "../models/OrderModel.js";

async function placeOrder(req, res) {
  const { userId, items, amount, address } = req.body;
  const newOrder = new Order({
    userId: userId,
    items: items,
    amount: amount,
    address: address,
  });
  await newOrder.save()
  await Order.findByIdAndUpdate(req.body.userId,{cartData:{}})
}
export default placeOrder;
