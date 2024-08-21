import mongoose from 'mongoose';

interface Connection {
  isConnected: boolean;
}

const connection: Connection = {
  isConnected: false,
};

export const connectToDb = async (): Promise<void> => {

  try {
    if (connection.isConnected) {
      console.log("Database is already connected.");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL as string);
    connection.isConnected = db.connections[0].readyState === 1;

    if (connection.isConnected) {
      console.log("Database is connected successfully.");
    } else {
      console.error("Failed to connect to the database.");
    }
  } catch (err) {
    console.error("Error connecting to the database:", err instanceof Error ? err.message : err);
    throw new Error("Error connecting to the database.");
  }
};
