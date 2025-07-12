'use client';
import { FaEnvelope, FaMapMarkerAlt, FaRegCopy } from "react-icons/fa";

export default function AboutSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12">
            <div className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700 px-6 py-10 max-w-2xl w-full flex flex-col items-center">
                <h2 className="text-4xl font-extrabold mb-2 text-center text-blue-900 dark:text-blue-200">About Me</h2>
                <div className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4 text-center">
                    Full Stack Developer <span className="mx-2">|</span> Problem Solver <span className="mx-2">|</span> Tech Enthusiast
                </div>
                <p className="text-base text-gray-700 dark:text-gray-200 text-center mb-8 max-w-xl">
                    Welcome! I am Yash Sachdev, Passionate Software Engineer with hands-on experience in building full-stack web applications using Next.js, React, Node.js, and TypeScript. Skilled in backend services, REST APIs, and scalable system design with MongoDB, Redis, and Qdrant. Seeking a full-time role to solve real-world problems through clean, efficient code and modern technologies.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-200 text-center mb-8 max-w-xl">
                    I enjoy collaborating with teams, learning new technologies, and solving real-world problems. Let’s build something amazing together!
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* Email */}
                    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800 p-4 shadow-sm w-full">
                        <div className="flex items-center gap-2 mb-1 text-blue-700 dark:text-blue-300">
                            <FaEnvelope className="w-5 h-5" />
                            <span className="font-semibold text-sm">Email</span>
                        </div>
                        <div className="flex items-center gap-2 w-full justify-center">
                            <span className="text-gray-800 dark:text-gray-100 text-sm break-all">sachdevyash2002@gmail.com</span>
                            <FaRegCopy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500" title="Copy Email" onClick={() => navigator.clipboard.writeText('sachdevyash2002@gmail.com')} />
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800 p-4 shadow-sm w-full">
                        <div className="flex items-center gap-2 mb-1 text-blue-700 dark:text-blue-300">
                            <FaMapMarkerAlt className="w-5 h-5" />
                            <span className="font-semibold text-sm">Location</span>
                        </div>
                        <span className="text-gray-800 dark:text-gray-100 text-sm">Ahmedabad, Gujarat, India</span>
                    </div>
                </div>
            </div>
        </div>
    );
} 