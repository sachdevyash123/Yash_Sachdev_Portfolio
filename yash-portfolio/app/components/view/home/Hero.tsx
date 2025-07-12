"use client";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaDownload, FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiFigma, SiBootstrap, SiReact, SiNestjs, SiNodedotjs, SiTsnode, SiExpress } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
    const [typed, setTyped] = useState("");
    const name = "Hi I’m Yash Sachdev";
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
                <p className="text-base text-[var(--muted-foreground)] mb-4">
                    Welcome to my portfolio website! I am Yash Sachdev, a passionate front-end developer dedicated to creating engaging and responsive web experiences. With expertise in HTML, CSS, and JavaScript, I focus on aesthetic and high-performance design. Explore my projects for responsive design and interactive features.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition-colors">Contact Me</a>
                    <a href="https://github.com/sachdevyash123" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-white hover:text-cyan-400 transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/yash-sachdev-08274a229/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-white hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
                </div>
                <a href="/assets/Yash Sachdev_Resume(1).pdf" download className="flex items-center gap-2 text-cyan-400 hover:underline mt-2">
                    <FaDownload /> Download CV
                </a>
            </div>
            {/* Right: Profile Image and Floating Icons */}
            <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
                {/* Blurred Gradient Blob */}
                <div className="absolute w-[22rem] h-[22rem] bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-300 rounded-full blur-2xl opacity-60 -z-10" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                {/* Profile image */}
                <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 relative">
                    <Image
                        src="/assets/Yash_Sachdev_image.jpeg"
                        alt="Yash Sachdev"
                        width={400}
                        height={280}
                        className="rounded-full object-cover shadow-lg"
                        priority
                    />
                    {/* Floating Tech Icons - circular arrangement */}
                    <span className="absolute" style={{ top: '-92px', left: '50%', transform: 'translateX(-50%)' }} title="Bootstrap">
                        <SiReact size={28} className="text-purple-400 bg-white/80 rounded-full p-1 shadow" />
                    </span>
                    <span className="absolute" style={{ top: '30px', right: '-24px' }} title="JavaScript">
                        <SiJavascript size={28} className="text-yellow-300 bg-white/80 rounded-full p-1 shadow" />
                    </span>
                    <span className="absolute" style={{ bottom: '30px', right: '-24px' }} title="CSS3">
                        <SiCss3 size={28} className="text-blue-400 bg-white/80 rounded-full p-1 shadow" />
                    </span>
                    <span className="absolute" style={{ bottom: '-92px', left: '50%', transform: 'translateX(-50%)' }} title="HTML5">
                        <SiHtml5 size={28} className="text-orange-500 bg-white/80 rounded-full p-1 shadow" />
                    </span>
                    <span className="absolute" style={{ bottom: '30px', left: '-24px' }} title="Figma">
                        <SiTsnode size={28} className="text-pink-400 bg-white/80 rounded-full p-1 shadow" />
                    </span>
                    <span className="absolute" style={{ top: '30px', left: '-24px' }} title="CSS3">
                        <SiExpress size={28} className="text-blue-400 bg-white/80 rounded-full p-1 shadow" />
                    </span>
                </div>
            </div>
        </section>
    );
} 