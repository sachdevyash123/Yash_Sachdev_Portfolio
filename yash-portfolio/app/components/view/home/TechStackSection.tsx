import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiPhp, SiLaravel, SiMysql, SiMongodb, SiExpress } from "react-icons/si";

const techStack = [
    { name: "React", icon: SiReact, color: "#61dafb", category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", category: "Frontend" },
    { name: "HTML5", icon: SiHtml5, color: "#e34f26", category: "Frontend" },
    { name: "CSS3", icon: SiCss3, color: "#1572b6", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Language" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Language" },
    { name: "PHP", icon: SiPhp, color: "#777bb4", category: "Language" },
    { name: "Node.js", icon: SiNodedotjs, color: "#3c873a", category: "Backend" },
    { name: "Express", icon: SiExpress, color: "#000000", category: "Backend" },
    { name: "Laravel", icon: SiLaravel, color: "#ff2d20", category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248", category: "Database" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1", category: "Database" },
    { name: "Git", icon: SiGit, color: "#f05032", category: "Tools" },
    { name: "GitHub", icon: SiGithub, color: "#181717", category: "Tools" },
];

export default function TechStackSection() {
    const categories = ["Frontend", "Language", "Backend", "Database", "Tools"];
    
    const getCategoryIcon = (category: string) => {
        const icons: Record<string, string> = {
            "Frontend": "🎨",
            "Language": "💻",
            "Backend": "⚙️",
            "Database": "🗄️",
            "Tools": "🛠️"
        };
        return icons[category] || "📦";
    };

    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        Tech Stack
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                        Technologies I work with to build amazing products
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Categorized Tech Stack */}
                <div className="space-y-10">
                    {categories.map((category) => {
                        const techs = techStack.filter(tech => tech.category === category);
                        if (techs.length === 0) return null;
                        
                        return (
                            <div key={category} className="space-y-4">
                                {/* Category Header */}
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{getCategoryIcon(category)}</span>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                        {category}
                                    </h3>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
                                </div>

                                {/* Tech Cards */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                    {techs.map(({ name, icon: Icon, color }) => (
                                        <div
                                            key={name}
                                            className="group relative flex flex-col items-center"
                                        >
                                            {/* Card */}
                                            <div className="w-full aspect-square bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden">
                                                {/* Gradient overlay on hover */}
                                                <div 
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                                                    style={{ backgroundColor: color }}
                                                ></div>
                                                
                                                {/* Icon */}
                                                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                                    <Icon 
                                                        size={48} 
                                                        style={{ color }} 
                                                        className="drop-shadow-lg"
                                                    />
                                                </div>
                                                
                                                {/* Name */}
                                                <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 mt-3 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                    {name}
                                                </span>

                                                {/* Shine effect on hover */}
                                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                                                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-lg px-3 py-1.5 whitespace-nowrap shadow-lg">
                                                    {name}
                                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}