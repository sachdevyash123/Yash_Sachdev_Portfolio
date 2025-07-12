"use client";
import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/modules/contact/action";
import { contactFormSchema } from "@/app/modules/contact/validation";
import { z } from "zod";

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
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
                <label className="block font-medium mb-1" htmlFor="name">Name<span className="text-red-500">*</span></label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="email">Email<span className="text-red-500">*</span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>}
            </div>
            <div>
                <label className="block font-medium mb-1" htmlFor="message">Message<span className="text-red-500">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>}
            </div>
            <button
                type="submit"
                className="w-full rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] py-2 font-semibold hover:bg-[var(--primary)]/90 transition disabled:opacity-60"
                disabled={pending}
            >
                {pending ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-600 text-center mt-2">{success}</p>}
            {errors.server && <p className="text-red-500 text-center mt-2">{errors.server[0]}</p>}
        </form>
    );
} 