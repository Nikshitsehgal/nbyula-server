const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });

//Port
const PORT = process.env.PORT || 5000;

//mongoDB connection
connectDB();

//parse requests to body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Send JSON responses
app.use(cors());

//load routes
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
