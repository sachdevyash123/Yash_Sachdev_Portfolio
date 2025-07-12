import mongoose, { Schema, models } from "mongoose";

const ContactMessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const ContactMessage =
    models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema); 