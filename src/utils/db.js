import mongoose from "mongoose";

const connect = async () => {
  // Check if a connection is already established:
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONNGO_URL),
      {
        useNewUrlParser: true, // Ensure compatibility with newer MongoDB drivers
        useUnifiedTopology: true, // Enable unified topology for modern MongoDB features
      };
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
