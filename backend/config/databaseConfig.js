import mongoose from "mongoose";
const MONGODB_URL = "mongodb://localhost:27017/unicode_p_one";

// mongoDb database connection
const databaseconnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

export default databaseconnect;
