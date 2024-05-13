const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  console.log("its get");
  res.send("Hello world");
});

app.post("api/product", (req, res) => {
  console.log('api hit');
  // res.send(req.body);
});

// Run the Server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

// Connect to database
mongoose
  .connect(
    "mongodb+srv://ukaleem540:ukaleem540@crud-apis.3svbori.mongodb.net/?retryWrites=true&w=majority&appName=Crud-apis"
  )
  .then((res) => {
    console.log("Database is connected");

  })
  .catch((err) => {
    console.log("Database is not connected");
  });
