import mongoose from "mongoose";

export async function ConnectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://benaoumeurfarouk5:Farouk47@cluster0.czqxdph.mongodb.net/mydbname?retryWrites=true&w=majority"
    );
    console.log('✅ Connected to MongoDB ')
  } catch (error) {
    console.log('"❌ Mongoose connection ',error.message)
  }
}
