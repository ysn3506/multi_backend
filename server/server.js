const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const photosRoute = require("../routes/photos");



app.use(cors());
app.use(bp.json());



app.use("/photos", photosRoute);

app.get("/", async (req, res) => {
  res.send("Server is working");
});


const startServer = () => {
  app.listen(process.env.PORT || 8080);
};

module.exports.startServer = startServer;
