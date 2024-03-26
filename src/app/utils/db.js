import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("Already connected to mongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    connected = true;
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
