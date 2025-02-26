require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const authRoutes = require("./routes/auth");

const app = express();
connectDB();

app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true // Allow credentials (cookies)
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
