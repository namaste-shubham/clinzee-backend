require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/database");
const Contact = require("./src/models/Contact");

const app = express();

// ✅ Fix: Enable CORS for your Netlify domain
app.use(
  cors({
    origin: "https://clinzee-frontend.netlify.app",
    methods: ["GET", "POST"],
  })
);
app.use(express.json()); // ✅ Parse JSON body

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, phone, message } = req.body;

    if (!firstName || !lastName || !phone || !message) {
      return res.status(400).json({ error: "All fileds are required" });
    }

    const newContact = new Contact({ firstName, lastName, phone, message });
    await newContact.save();
    console.log(
      `Message recevied successfully from: ${firstName + " " + lastName}`
    );

    res.status(201).json({ message: "Message recevied successfully!" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

connectDB()
  .then(() => {
    console.log("DB connection established...");
    const PORT = process.env.PORT || 8888;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection Failed!", error.message);
    process.exit(1);
  });
