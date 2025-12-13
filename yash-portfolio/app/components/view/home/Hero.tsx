"use client";
import { useState, useEffect } from "react";
import { FaLinkedin, FaDownload, FaGithub } from "react-icons/fa";
import { SiHtml5,SiJavascript, SiReact,SiExpress,SiPhp,SiLaravel } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
    const [typed, setTyped] = useState("");
    const name = "Hi I'm Yash Sachdev";
    
    useEffect(() => {
        let i = 0;
        setTyped("");
        const typing = setInterval(() => {
            setTyped(name.slice(0, i + 1));
            i++;
            if (i === name.length) clearInterval(typing);
        }, 70);
        return () => clearInterval(typing);
    }, []);

    return (
        <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl gap-4 md:ml-12 lg:ml-20">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-cyan-700 dark:text-cyan-500">
                    {typed}
                    <span className="ml-1 inline-block w-2 h-8 align-middle bg-cyan-700 dark:bg-cyan-500 rounded-sm animate-pulse" />
                </h1>
                <h2 className="text-2xl font-semibold mb-2 text-cyan-400">
                    Software Engineer
                </h2>
                <p className="text-base text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    Welcome to my portfolio! I&apos;m Yash Sachdev, a passionate Software Engineer specializing in building scalable, high-performance full-stack applications. I bring strong expertise in Next.js, React.js, Node.js, Express.js, MongoDB, along with PHP and Laravel, to craft reliable and efficient digital solutions.
                </p>
                <p className="text-base text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    Beyond technical excellence, I excel in client communication, project management, leadership, and collaborative teamwork, ensuring ideas are transformed into successful, real-world products. Explore my work to see how I blend modern technologies with strong problem-solving and people skills to deliver impactful results.
                </p>
                
                {/* Buttons and Social Links */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* Contact Button */}
                    <a 
                        href="#contact" 
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="https://github.com/sachdevyash123" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 flex items-center justify-center text-2xl text-gray-700 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/yash-sachdev-08274a229/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 flex items-center justify-center text-2xl text-gray-700 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Download CV */}
                <a 
                    href="/assets/Yash Sachdev_Resume(1).pdf" 
                    download 
                    className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 font-medium mt-2 transition-all duration-300 group"
                >
                    <FaDownload className="group-hover:animate-bounce" /> 
                    Download CV
                </a>
            </div>

            {/* Right: Profile Image and Floating Icons */}
            <div className="flex-1 flex items-center justify-center relative min-h-[500px] w-full">
                {/* Blurred Gradient Blob with animation */}
                <div 
                    className="absolute w-[24rem] h-[24rem] bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-300 rounded-full blur-2xl opacity-60 animate-pulse" 
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }} 
                />
                
                {/* Container for profile and icons */}
                <div className="relative w-80 h-120">
                    {/* Profile image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-80 h-100 rounded-full bg-white/10 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 overflow-hidden group">
                            <Image
                                src="/assets/yash_linkedin.jpeg"
                                alt="Yash Sachdev"
                                width={320}
                                height={320}
                                className="rounded-full object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                priority
                            />
                        </div>
                    </div>
                    
                    {/* Floating Tech Icons - perfectly positioned around the circle */}
                    {/* Top */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 hover:scale-125 cursor-pointer animate-float" 
                        style={{ 
                            top: '-20px',
                            animationDelay: '0s',
                            zIndex: 10
                        }} 
                        title="React"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <SiReact size={32} className="text-cyan-400" />
                        </div>
                    </div>

                    {/* Top Right */}
                    <div 
                        className="absolute transition-all duration-300 hover:scale-125 cursor-pointer animate-float" 
                        style={{ 
                            top: '40px', 
                            right: '-20px',
                            animationDelay: '0.5s',
                            zIndex: 10
                        }} 
                        title="JavaScript"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <SiJavascript size={32} className="text-yellow-400" />
                        </div>
                    </div>

                    {/* Bottom Right */}
                    <div 
                        className="absolute transition-all duration-300 hover:scale-125 cursor-pointer animate-float" 
                        style={{ 
                            bottom: '40px', 
                            right: '-20px',
                            animationDelay: '1s',
                            zIndex: 10
                        }} 
                        title="PHP"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <SiPhp size={32} className="text-blue-500" />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 hover:scale-125 cursor-pointer animate-float" 
                        style={{ 
                            bottom: '-20px',
                            animationDelay: '1.5s',
                            zIndex: 10
                        }} 
                        title="HTML5"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <SiHtml5 size={32} className="text-orange-500" />
                        </div>
                    </div>

                    {/* Bottom Left */}
                    <div 
                        className="absolute transition-all duration-300 hover:scale-125 cursor-pointer animate-float" 
                        style={{ 
                            bottom: '40px', 
                            left: '-20px',
                            animationDelay: '2s',
                            zIndex: 10
                        }} 
                        title="Laravel"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <SiLaravel size={32} className="text-blue-600" />
                        </div>
                    </div>

                    {/* Top Left */}
                    <div 
                        className="absolute transition-all duration-300 hover:scale-125 cursor-pointer animate-float" 
                        style={{ 
                            top: '40px', 
                            left: '-20px',
                            animationDelay: '2.5s',
                            zIndex: 10
                        }} 
                        title="Express.js"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <SiExpress size={32} className="text-gray-700 dark:text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}