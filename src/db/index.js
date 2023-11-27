import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log("MongoDV connected !!", connectionInstance.connection.host);
  } catch (error) {
    console.log("MongoDB connection fail !!", error);
    process.exit(1);
  }
};
export default connectDB;
