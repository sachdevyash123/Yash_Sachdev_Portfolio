import { FaExternalLinkAlt,FaCalendarAlt } from "react-icons/fa";
import { SiPhp, SiMysql, SiLaravel, SiJquery, SiBootstrap, SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { IconType } from "react-icons";

const projects = [
    {
        name: "Categorizr Admin Panel",
        duration: "Sep 2024 - Present",
        description:
            "Currently maintaining and enhancing the Categorizr Admin Panel by resolving critical issues across multiple modules including Manage Users, eReceipts, Store Collection, Store Map, and Mobile Uploads. Successfully implemented the View Tax Type module from scratch and developed a secure Reset Password functionality to improve user experience and system security.",
        tech: ["PHP", "MySQL", "AJAX", "jQuery"],
        link:"https://categorizr.com/emailserver/admin",
        category: "Backend & Admin",
        status: "ongoing",
    },
    {
        name: "Luta App Admin Panel",
        duration: "Oct 2024 - Present",
        description:
            "Leading the development of Luta's backend admin panel, implementing comprehensive modules for Customer Management, Customer App Styling, SSO Integration, CSR Management, Meta Quizzes, and Meta Challenges. Architected and executed a complete migration to a multi-tenant system, refactoring all APIs, cron jobs, and database structures to support customer-based isolation. Resolved numerous issues in existing modules while maintaining system stability.",
        tech: ["Laravel","PHP", "MySQL", "jQuery", "AdminLTE", "Bootstrap"],
        link:"https://api.lutaapp.com",
        category: "Full Stack",
        status: "ongoing",
    },
    {
        name: "SPL-Parts Management System",
        duration: "Nov 2024 - Present",
        description:
            "Developed a comprehensive backend system with database architecture for managing users, processed/unprocessed orders, product SKUs, and email parsing. Built robust admin sections with RESTful APIs for incoming email management, email parsing results, and unprocessed orders. Implemented automated data processing workflows to streamline order management operations.",
        tech: ["Laravel","PHP", "MySQL", "REST API"],
        link:"https://dev.weisetechdev.com/splparts/public/admin",
        category: "Backend & API",
        status: "ongoing",
    },
    {
        name: "Speak Nova (Client Project)",
        duration: "April 2025 - June 2025",
        description:
            "Led project development and client communications. Architected and implemented Business Module, integrated Stripe for subscription management, developed AI-powered Agent Module using LangGraph, OpenAI, and Qdrant for intelligent knowledge base queries. Created comprehensive Dashboard Module for call log analytics and reporting.",
        tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "Stripe", "OpenAI", "Qdrant"],
        link: "https://portal.speaknova.ai",
        category: "Full Stack",
        status: "completed",
    },
    {
        name: "Voice Nova (Company Product)",
        duration: "March 2025 - April 2025",
        description:
            "Developed SuperAdmin functionality including SMTP Provider Module for email service management and Agent Template Module for customizable agent configurations.",
        tech: ["Next.js", "Tailwind CSS", "ShadCN UI"],
        link: "https://portal.voicenova.ai",
        category: "Frontend",
        status: "completed",
    },
    {
        name: "Filmster - Movie Streaming Platform",
        duration: "Feb 2025 - March 2025",
        description:
            "Built comprehensive admin dashboard frontend with complete CRUD operations for movies, web series, and episodes. Integrated backend services for seamless content management.",
        tech: ["React.js", "Express.js","MongoDB" , "Node.js"],
        category: "Full Stack",
        status: "completed",
    },
    {
        name: "Student Management System",
        duration: "June 2024 - Oct 2024",
        description:
            "Developed full-stack student management application with complete CRUD functionality for student data management using MERN stack.",
        tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
        category: "Full Stack",
        status: "completed",
    },
];

const techIcons: Record<string,IconType> = {
    "PHP": SiPhp,
    "Laravel": SiLaravel,
    "MySQL": SiMysql,
    "jQuery": SiJquery,
    "Bootstrap": SiBootstrap,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    "React.js": SiReact
};

export default function ProjectsSection() {
    const ongoingProjects = projects.filter(p => p.status === "ongoing");
    const completedProjects = projects.filter(p => p.status === "completed");

    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                        Building solutions that make a difference
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Ongoing Projects */}
                {ongoingProjects.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    Current Projects
                                </h3>
                            </div>
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {ongoingProjects.map((proj, i) => (
                                <ProjectCard key={i} project={proj} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Completed Projects */}
                {completedProjects.length > 0 && (
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    Completed Projects
                                </h3>
                            </div>
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {completedProjects.map((proj, i) => (
                                <ProjectCard key={i} project={proj} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const TechIcon = project.tech[0] ? techIcons[project.tech[0]] : null;
    const isOngoing = project.status === "ongoing";

    return (
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
                {isOngoing ? (
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="hidden xs:inline">IN PROGRESS</span>
                        <span className="xs:hidden">ACTIVE</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                        <span>✓</span>
                        <span className="hidden xs:inline">COMPLETED</span>
                        <span className="xs:hidden">DONE</span>
                    </div>
                )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 pr-20 sm:pr-32">
                    {TechIcon && (
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <TechIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                            {project.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{project.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full border border-purple-200 dark:border-purple-800">
                    <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                        {project.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, idx) => {
                        const Icon = techIcons[tech];
                        return (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                            >
                                {Icon && <Icon className="w-3 h-3" />}
                                {tech}
                            </span>
                        );
                    })}
                </div>

                {/* Link */}
                {project.link && (
                    <div className="pt-2">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium text-sm group/link transition-colors">
                            <span>View Project</span>
                            <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                )}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
    );
}