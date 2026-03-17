const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  description: String,

  date: {
    type: Date,
    required: true
  },

  venue: String,

  type: {
    type: String,
    default: "general"
  },

  status: {
    type: String,
    enum: ["draft", "planning", "confirmed", "completed"],
    default: "draft"
  },

  budget: {
    type: Number,
    default: 0
  },

  progress: {
    type: Number,
    default: 0
  },

  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
