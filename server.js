const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connectDB();
//Rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//port
const PORT = process.env.PORT || 8080;
//Listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no. ${PORT}`.bgCyan
      .white
  );
});
