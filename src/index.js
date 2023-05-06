const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const PORT = 5000;
const DB_URL = `mongodb+srv://user:123@cluster0.9uzmqgl.mongodb.net/?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use(cors());
app.use("", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("start"));
  } catch (error) {
    console.log(error);
  }
}

startApp();

module.exports = app;