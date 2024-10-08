const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courses: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  ],
  totalPrice: Number,
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", cartSchema);
