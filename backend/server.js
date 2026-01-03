const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB(); // 👈 MUST be before routes

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/events", require("./routes/eventroutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
