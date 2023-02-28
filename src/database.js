import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
