"use server";
import mongoose from "mongoose";
import { contactFormSchema } from "./validation";
import { ContactMessage } from "./model";
import { sendThankYouEmail } from "./email";
import { log } from "console";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

async function connectDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGODB_URI);
    }
}

export async function submitContactForm(formData: unknown) {
    // Validate input
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }
    try {
        await connectDB();
        const message = new ContactMessage(result.data);
        await message.save();
        // Send thank you email (do not block on error)
        try {
            console.log("Result email:",result.data.email)
            console.log("Result name:",result.data.name)
            await sendThankYouEmail(result.data.email, result.data.name);
            console.log("Email sent successfully")
        } catch (emailError) {
            console.error('Failed to send thank you email:', emailError);
        }
        return { success: true };
    } catch (error) {
        return { success: false, errors: { server: ["Failed to save message."] } };
    }
} 