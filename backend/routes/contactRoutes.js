const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Save Contact Form Data
router.post("/", async (req, res) => {
  try {
    const { firstName, email, phone, message } = req.body;

    // Validate all fields
    if (!firstName || !email || !phone || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const newContact = new Contact({ firstName, email, phone, message });
    await newContact.save();

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error. Try again later." });
  }
});

module.exports = router;
