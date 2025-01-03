// cYwStDITWWcWQnZB
// prohorenkodima580

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI2);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};
