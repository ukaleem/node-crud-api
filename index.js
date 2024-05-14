const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require('./routes/products.route');
const { environment } = require("./env.js");


const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  res.send("Hello world");
});

app.use('/api/products',productRoutes)



// Connect to database
mongoose
.connect(
  `mongodb+srv://ukaleem540:${ environment.pw }@crud-apis.3svbori.mongodb.net/?retryWrites=true&w=majority&appName=Crud-apis`
  )
  .then((res) => {
    console.log("Database is connected");
    // Run the Server
    app.listen(port, () => {
      console.log("ENV YOUR MONGODB PASSWORD:", environment.pw);
      console.log("Server is running on port " + port);
    });
  })
 .catch((err) => {
    console.log("Database is not connected");
    // console.error("Database connection error:", err);
  });
