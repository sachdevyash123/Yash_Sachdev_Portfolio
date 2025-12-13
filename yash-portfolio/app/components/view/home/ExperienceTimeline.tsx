const experienceData = [
    {
        company: "Weisetech Developers",
        role: "Software Developer",
        period: "Sep 2025 - Present",
        description:
            "Currently working as a Software Developer at Weisetech Developers, specializing in PHP and Laravel development. I'm responsible for building robust backend systems and comprehensive admin panels across multiple projects. My work involves implementing RESTful APIs, database design with MySQL, and creating dynamic user interfaces using jQuery and AJAX for seamless client-server communication. I focus on writing clean, maintainable code while ensuring optimal performance and security in all applications.",
        current: true,
    },
    {
        company: "Cloudmate Technologies LLP",
        role: "Software Engineer Trainee",
        period: "Jan 2025 - June 2025",
        description:
            "At Cloudmate, I expanded my skills in JavaScript, TypeScript, MERN stack, Next.js, and AWS services. I contributed to a group project – a Movie Streaming Website – where I focused on admin dashboard frontend development and backend integration. I later worked on the company's product Voice Nova, developing the SMTP Provider Module and Agent Template in Next.js. On the client project Speak Nova, I worked on the Business Module, Subscription Module with Stripe, and built an Agent Module using LangGraph, OpenAI, and Qdrant for knowledge base integration. I also developed the Dashboard Module for visualizing call log analytics.",
        current: false,
    },
    {
        company: "BrainSquare Technologies PVT LTD",
        role: "Software Engineer Intern",
        period: "Feb 2024 - Dec 2024",
        description:
            "During my internship at Brainsquare Technology, I built a strong foundation in HTML, CSS, and JavaScript (basic to advanced). I then progressed to learning the MERN stack (MongoDB, Express.js, React.js, Node.js). As part of my learning, I developed a complete Student Management System as a practice project using the MERN stack. I also explored UI libraries like PrimeReact and AG Grid for advanced data table functionalities.",
        current: false,
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
        <div className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        Work Experience
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                        My professional journey and contributions
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line - Hidden on mobile, visible on md+ */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full"></div>

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experienceData.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Card */}
                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <div className="group relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2">
                                        {/* Current Job Badge */}
                                        {exp.current && (
                                            <div className="absolute top-1 right-4 z-10">
                                                <div className="flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    CURRENT
                                                </div>
                                            </div>
                                        )}

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Content */}
                                        <div className="relative p-6 space-y-4">
                                            {/* Company Header */}
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        {getInitials(exp.company)}
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                                        {exp.company}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center gap-2 text-sm">
                                                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                                                            {exp.role}
                                                        </span>
                                                        <span className="text-gray-400">•</span>
                                                        <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

                                            {/* Description */}
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Tech Tags (if it's current role, show PHP/Laravel) */}
                                            {exp.current && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {["PHP", "Laravel", "MySQL", "jQuery", "AJAX"].map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full border border-cyan-200 dark:border-cyan-800"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </div>
                                </div>

                                {/* Timeline Dot - Hidden on mobile */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-gray-950 shadow-lg z-10">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 animate-ping opacity-75"></div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold mb-2">{experienceData.length}</div>
                        <div className="text-sm font-medium opacity-90">Companies</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold mb-2">2+</div>
                        <div className="text-sm font-medium opacity-90">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold mb-2">10+</div>
                        <div className="text-sm font-medium opacity-90">Projects Completed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}