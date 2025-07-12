import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub } from "react-icons/si";

const techStack = [
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#4a4a4a" },
    { name: "Node.js", icon: SiNodedotjs, color: "#3c873a" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS3", icon: SiCss3, color: "#1572b6" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#4a4a4a" },
];

export default function TechStackSection() {
    return (
        <div className="w-full max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-6">
            {techStack.map(({ name, icon: Icon, color }) => (
                <div
                    key={name}
                    className="flex flex-col items-center group bg-white/10 dark:bg-gray-900/40 rounded-2xl shadow-lg border border-[var(--border)] p-6 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer relative"
                    title={name}
                >
                    <span
                        className="rounded-full p-4 bg-white/20 dark:bg-gray-800/40 shadow-lg border border-[var(--border)] mb-2 transition-transform group-hover:scale-110"
                        style={{ color }}
                    >
                        <Icon size={40} />
                    </span>
                    <span className="text-sm font-medium text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors mt-1">
                        {name}
                    </span>
                    {/* Tooltip */}
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition-all z-20">
                        {name}
                    </span>
                </div>
            ))}
        </div>
    );
} 