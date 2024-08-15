import mongoose from "mongoose";

interface Connection {
  isConnected: boolean;
}

const connection: Connection = {
  isConnected: false,
};

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URL as string);
    connection.isConnected = db.connections[0].readyState === 1; // 1 means connected
  } catch (error: any) {
    throw new Error(error.message);
  }
};