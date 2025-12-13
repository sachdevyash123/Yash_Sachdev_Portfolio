"use client";
import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/modules/contact/action";
import { contactFormSchema } from "@/app/modules/contact/validation";
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [success, setSuccess] = useState("");
    const [pending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({});
        setSuccess("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setSuccess("");
        // Client-side validation
        const result = contactFormSchema.safeParse(form);
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return;
        }
        startTransition(async () => {
            const res = await submitContactForm(form);
            if (res.success) {
                setSuccess("Thank you! Your message has been sent.");
                setForm({ name: "", email: "", phone: "", message: "" });
            } else {
                setErrors(res.errors || {});
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="group">
                <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors">
                        <FaUser className="w-4 h-4" />
                    </div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-12 pr-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.name[0]}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div className="group">
                <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-12 pr-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.email[0]}
                    </p>
                )}
            </div>

            {/* Phone Field */}
            <div className="group">
                <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm" htmlFor="phone">
                    Phone <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors">
                        <FaPhone className="w-4 h-4" />
                    </div>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-12 pr-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                </div>
                {errors.phone && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.phone[0]}
                    </p>
                )}
            </div>

            {/* Message Field */}
            <div className="group">
                <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300 text-sm" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-cyan-500 transition-colors">
                        <FaComment className="w-4 h-4" />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-12 pr-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                        required
                    />
                </div>
                {errors.message && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.message[0]}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                disabled={pending}
            >
                {pending ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
            </button>

            {/* Success Message */}
            {success && (
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-green-700 dark:text-green-300 font-medium text-sm">
                        {success}
                    </p>
                </div>
            )}

            {/* Server Error */}
            {errors.server && (
                <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-red-700 dark:text-red-300 font-medium text-sm">
                        {errors.server[0]}
                    </p>
                </div>
            )}
        </form>
    );
}