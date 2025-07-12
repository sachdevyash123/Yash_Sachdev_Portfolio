const projects = [
    {
        name: "Speak Nova (Client Project)",
        duration: "April 2025 – June 2025",
        description:
            "Project lead and client handling. Business Module, Subscription Module (Stripe), Agent Module (LangGraph, OpenAI, Qdrant), Dashboard Module (call log analytics)",
        tech: ["Next.js", "Tailwind CSS", "ShadCN UI"],
        link: "https://portal.speaknova.ai",
    },
    {
        name: "Voice Nova (Company's Product)",
        duration: "March 2025 – April 2025",
        description:
            "SuperAdmin side – SMTP Provider Module, Agent Template Module",
        tech: ["Next.js", "Tailwind CSS", "ShadCN UI"],
    },
    {
        name: "Filmster – Movie Streaming Website",
        duration: "Feb 2025 – March 2025",
        description:
            "Admin Dashboard Frontend, backend integration, CRUD for movies/web series/episodes",
        tech: ["MERN Stack"],
    },
    {
        name: "Student Management System",
        duration: "June 2024 – Oct 2024",
        description:
            "Full CRUD for student data using MERN stack",
        tech: ["MERN Stack"],
    },
];

export default function ProjectsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
                <a
                    key={i}
                    href={proj.link || "#"}
                    target={proj.link ? "_blank" : undefined}
                    rel={proj.link ? "noopener noreferrer" : undefined}
                    className="rounded-2xl bg-[var(--background)]/80 border border-blue-200 dark:border-blue-700 shadow-lg p-6 flex flex-col gap-2 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300 group cursor-pointer"
                >
                    <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-lg text-blue-700 dark:text-blue-300 group-hover:underline">
                            {proj.name}
                        </span>
                        {proj.duration && (
                            <span className="text-xs text-gray-500 dark:text-gray-300 ml-2 whitespace-nowrap">
                                {proj.duration}
                            </span>
                        )}
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm mt-1 mb-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tech.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-xs text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
} 