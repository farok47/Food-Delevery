import User from "../models/UserModel.js";

async function addToCard(req, res) {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.ItemId]) {
      cartData[req.body.ItemId] = 1;
    } else cartData[req.body.ItemId] += 1;

    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error", error: error.message });
  }
}

async function removeFromcard(req, res) {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.ItemId] > 0) {
      cartData[req.body.ItemId] -= 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error", error: error.message });
  }
}
async function getCard(req, res) {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error", error: error.message });
  }
}
export { addToCard, removeFromcard, getCard };
