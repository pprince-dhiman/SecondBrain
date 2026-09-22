import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/second-brain`);
    console.log("connected to DB.");
  } catch (err) {
    throw new Error("Database is not connected");
  }
};
