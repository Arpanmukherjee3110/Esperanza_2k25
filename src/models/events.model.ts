import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  uniqueId: {
    type: Number,
    required: true,
    unique: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventStartTime: {
    type: Date,
  },
  eventEndTime: {
    type: Date,
  },
  venue: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    required: true,
    enum: ["technical", "cultural"],
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Events =
  mongoose.models.Events || mongoose.model("Events", eventSchema);
