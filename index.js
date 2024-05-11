const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({
    Message: "New data passed",
    Error: false,
  });
});

app.listen(2000, ()=>{
    console.log("Server is running on port 2000");
})
