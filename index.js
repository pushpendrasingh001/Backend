import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001; // Changed port to 4001
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose
  .connect("mongodb+srv://arnavpatel6548:Pushpa@cluster0.goapi31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.error("DB Connection Error:", error);
  });

app.get("/", (req, res) => {
  res.send("Everything is fine");
});

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
