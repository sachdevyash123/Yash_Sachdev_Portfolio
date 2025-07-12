import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <div className="w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-900/70 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700 p-6 md:p-10 flex flex-col md:flex-row gap-8 backdrop-blur">
            {/* Left: Contact Info */}
            <div className="flex-1 flex flex-col justify-center gap-4 md:pr-6 border-b md:border-b-0 md:border-r border-blue-100 dark:border-blue-800 pb-6 md:pb-0">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">Let’s Connect!</h3>
                <p className="text-[var(--muted-foreground)] text-base mb-2">Feel free to reach out for collaboration, project inquiries, or just to say hi. I’ll get back to you as soon as possible!</p>
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <FaEnvelope className="w-5 h-5" />
                    <a href="mailto:sachdevyash2002@gmail.com" className="hover:underline">sachdevyash2002@gmail.com</a>
                </div>
                <div className="flex gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/yash-sachdev-08274a229/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                    <a href="https://github.com/sachdevyash123" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors"><FaGithub /></a>
                </div>
            </div>
            {/* Right: Contact Form */}
            <div className="flex-1 flex flex-col justify-center">
                <ContactForm />
            </div>
        </div>
    );
} 