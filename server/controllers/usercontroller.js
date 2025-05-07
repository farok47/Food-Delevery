import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: "credential error" });
    }
    const token=jwt.sign({id:user._id},process.env.SECRET_KEY)
    res.json({success:true,token})
  } catch (error) {
    return res.json({ success: false, message: "Error", error: error.message });
  }
}

async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    console.log(req.body);
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.json({ success: false, message: "email already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "email not valid" });
    }
    if (password && password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }
    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedpassword,
    });
    const user = await newUser.save();
    const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error", error: error.message });
  }
}

export { login, register };
