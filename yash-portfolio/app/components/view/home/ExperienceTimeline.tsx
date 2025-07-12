const experienceData = [
    {
        company: "Cloudmate Technologies LLP",
        role: "Software Engineer Trainee",
        period: "Jan 2025 - June 2025",
        description:
            "At Cloudmate, I expanded my skills in JavaScript, TypeScript, MERN stack, Next.js, and AWS services. I contributed to a group project – a Movie Streaming Website – where I focused on admin dashboard frontend development and backend integration. I later worked on the company’s product Voice Nova, developing the SMTP Provider Module and Agent Template in Next.js. On the client project Speak Nova, I worked on the Business Module, Subscription Module with Stripe, and built an Agent Module using LangGraph, OpenAI, and Qdrant for knowledge base integration. I also developed the Dashboard Module for visualizing call log analytics.",
    },
    {
        company: "BrainSquare Technologies PVT LTD",
        role: "Software Engineer Intern",
        period: "Feb 2024 - Dec 2024",
        description:
            "During my internship at Brainsquare Technology, I built a strong foundation in HTML, CSS, and JavaScript (basic to advanced). I then progressed to learning the MERN stack (MongoDB, Express.js, React.js, Node.js). As part of my learning, I developed a complete Student Management System as a practice project using the MERN stack. I also explored UI libraries like PrimeReact and AG Grid for advanced data table functionalities.",
    },
];

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

export default function ExperienceTimeline() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceData.map((exp, idx) => (
                <div
                    key={idx}
                    className="relative bg-[var(--background)]/80 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-lg p-6 flex flex-col gap-2 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <span className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white shadow">
                            {getInitials(exp.company)}
                        </span>
                        <div>
                            <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">{exp.company}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-300">{exp.period}</div>
                        </div>
                    </div>
                    <div className="font-medium text-blue-600 dark:text-blue-400">{exp.role}</div>
                    <p className="text-[var(--muted-foreground)] text-sm mt-2">{exp.description}</p>
                </div>
            ))}
        </div>
    );
} 