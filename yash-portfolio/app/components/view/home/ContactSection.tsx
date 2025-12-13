import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                        Let's discuss your next project or opportunity
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left: Contact Info Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Main Contact Card */}
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FaPaperPlane className="w-6 h-6" />
                                Let's Connect!
                            </h3>
                            <p className="text-white/90 text-base leading-relaxed mb-6">
                                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                            </p>

                            {/* Email */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 hover:bg-white/20 transition-all duration-300 group">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaEnvelope className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-white/80 mb-1">Email</p>
                                        <a 
                                            href="mailto:sachdevyash2002@gmail.com" 
                                            className="text-sm font-medium hover:underline break-all"
                                        >
                                            sachdevyash2002@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 hover:bg-white/20 transition-all duration-300 group">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaMapMarkerAlt className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-white/80 mb-1">Location</p>
                                        <p className="text-sm font-medium">
                                            Ahmedabad, Gujarat, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="border-t border-white/20 pt-4">
                                <p className="text-xs font-semibold text-white/80 mb-3">Follow Me</p>
                                <div className="flex gap-3">
                                    <a 
                                        href="https://www.linkedin.com/in/yash-sachdev-08274a229/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 group"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a 
                                        href="https://github.com/sachdevyash123" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 group"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Response Card */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-800 p-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">⚡</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">Quick Response</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                        I typically respond within 24 hours on weekdays.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-800 p-6 md:p-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Send Me a Message
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-full px-6 py-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Available for freelance projects and full-time opportunities
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}