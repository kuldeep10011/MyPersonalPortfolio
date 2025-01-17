const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/contact", contactRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/ContactMePortfolio")
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start Server

app.listen(port, () => console.log(`Server running on port ${port}`));
