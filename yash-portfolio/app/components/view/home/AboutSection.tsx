'use client';
import { FaEnvelope, FaMapMarkerAlt, FaRegCopy, FaCheckCircle } from "react-icons/fa";
import { SiPhp, SiLaravel, SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiRedis } from "react-icons/si";
import { useState } from "react";

export default function AboutSection() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('sachdevyash2002@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // const techStack = [
    //     { icon: SiNextdotjs, name: "Next.js", color: "text-black dark:text-white" },
    //     { icon: SiReact, name: "React", color: "text-cyan-400" },
    //     { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    //     { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    //     { icon: SiPhp, name: "PHP", color: "text-indigo-500" },
    //     { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
    //     { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    //     { icon: SiRedis, name: "Redis", color: "text-red-600" },
    // ];

    return (
        <div className="w-full flex flex-col items-center justify-center py-16 px-4">
            <div className="max-w-5xl w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        About Me
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Introduction Card */}
                        <div className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-cyan-200 dark:border-cyan-700/50 p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Who I Am</h3>
                            </div>
                            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Welcome! I am <span className="font-semibold text-cyan-600 dark:text-cyan-400">Yash Sachdev</span>, a passionate Software Engineer with hands-on experience in building full-stack web applications using modern technologies like Next.js, React, Node.js, and TypeScript.
                            </p>
                            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                I bring strong expertise in both <span className="font-semibold text-blue-600 dark:text-blue-400">frontend</span> and <span className="font-semibold text-green-600 dark:text-green-400">backend</span> development, specializing in creating scalable systems with MongoDB, Redis, and Qdrant. Additionally, I have solid experience with <span className="font-semibold text-indigo-600 dark:text-indigo-400">PHP</span> and <span className="font-semibold text-red-600 dark:text-red-400">Laravel</span> for building robust server-side applications.
                            </p>
                            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                I thrive in collaborative environments, love learning new technologies, and am driven by solving real-world problems through clean, efficient code. Let's build something amazing together! 🚀
                            </p>
                        </div>

                        {/* Skills Highlights */}
                        <div className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-cyan-200 dark:border-cyan-700/50 p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What I Bring</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Full Stack Development",
                                    "RESTful API Design",
                                    "Database Architecture",
                                    "System Scalability",
                                    "Clean Code Practices",
                                    "Team Collaboration",
                                    "Problem Solving",
                                    "Continuous Learning"
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800/30 dark:to-gray-800/30 rounded-lg">
                                        <FaCheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info - Right Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Quick Contact Card */}
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
                            
                            {/* Email */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaEnvelope className="w-5 h-5" />
                                    <span className="font-semibold text-sm">Email</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm break-all">sachdevyash2002@gmail.com</span>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                                        title={copied ? "Copied!" : "Copy Email"}
                                    >
                                        {copied ? (
                                            <FaCheckCircle className="w-4 h-4 text-green-300" />
                                        ) : (
                                            <FaRegCopy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaMapMarkerAlt className="w-5 h-5" />
                                    <span className="font-semibold text-sm">Location</span>
                                </div>
                                <span className="text-sm">Ahmedabad, Gujarat, India</span>
                            </div>

                            {/* Availability Badge */}
                            <div className="mt-6 text-center">
                                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-300/30 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Available for opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}