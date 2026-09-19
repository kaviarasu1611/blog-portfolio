const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// Send contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message,
    });

    const savedMessage = await newMessage.save();

    res.status(201).json({
      message: "Message sent successfully",
      data: savedMessage,
    });
  } catch (error) {
    console.log("Contact error:", error.message);

    res.status(500).json({
      message: "Failed to send message",
      error: error.message,
    });
  }
});

module.exports = router;