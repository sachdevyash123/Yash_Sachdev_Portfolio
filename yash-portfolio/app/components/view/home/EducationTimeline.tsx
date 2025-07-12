const educationData = [
    {
        degree: "B.E in Computer Engineering",
        institution: "LJ University",
        duration: "2021–2025",
        result: "CGPA: 8.85",
    },
    {
        degree: "12th",
        institution: "Shraddha Vidya Mandir",
        duration: "2020–2021",
        result: "Percentage: 89.69%",
    },
    {
        degree: "10th",
        institution: "Shraddha Vidya Mandir",
        duration: "2018–2019",
        result: "Percentage: 87.83%",
    },
];

export default function EducationTimeline() {
    return (
        <div className="relative pl-6 md:pl-12">
            {/* Vertical line */}
            <div className="absolute left-2 md:left-5 top-0 h-full w-1 bg-purple-300 rounded-full" />
            <ul className="space-y-10">
                {educationData.map((edu, idx) => (
                    <li key={idx} className="relative flex items-start gap-6">
                        {/* Dot */}
                        <span className="absolute -left-4 md:-left-7 top-2 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900 shadow" />
                        <div className="bg-[var(--background)]/80 border border-purple-200 dark:border-purple-700 rounded-xl shadow p-5 w-full">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                                <span className="text-lg font-semibold text-purple-700 dark:text-purple-300">{edu.degree}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-300">{edu.duration}</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <span className="text-base font-medium text-gray-800 dark:text-gray-100">{edu.institution}</span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{edu.result}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
} 