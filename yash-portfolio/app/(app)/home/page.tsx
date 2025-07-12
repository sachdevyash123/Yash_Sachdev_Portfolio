import Hero from "@/app/components/view/home/Hero";
import AboutSection from "@/app/components/view/home/AboutSection";
import EducationTimeline from "@/app/components/view/home/EducationTimeline";
import TechStackSection from "@/app/components/view/home/TechStackSection";
import ExperienceTimeline from "@/app/components/view/home/ExperienceTimeline";
import ProjectsSection from "@/app/components/view/home/ProjectsSection";
import ContactSection from "@/app/components/view/home/ContactSection";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Section({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <section id={id} className="min-h-[60vh] flex items-center justify-center py-16 px-4">
            {children}
        </section>
    );
}
export default function HomePage() {
    return (
        <>
            {/* Home Section with entrance animation */}
            <Section id="home">
                <div className="w-full animate-fade-in-up">
                    <Hero />
                </div>
            </Section>
            <Section id="about">
                <div className="w-full max-w-4xl animate-fade-in-up">
                    <AboutSection />
                </div>
            </Section>
            <Section id="education">
                <div className="w-full max-w-2xl animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Education</h2>
                    <EducationTimeline />
                </div>
            </Section>
            <Section id="techstack">
                <div className="w-full max-w-3xl animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">Tech Stack</h2>
                    <TechStackSection />
                </div>
            </Section>
            <Section id="experience">
                <div className="w-full max-w-4xl animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">Experience</h2>
                    <ExperienceTimeline />
                </div>
            </Section>
            <Section id="project">
                <div className="w-full max-w-4xl animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-8 text-[var(--primary)]">Projects</h2>
                    <ProjectsSection />
                </div>
            </Section>
            <Section id="contact">
                <div className="w-full max-w-2xl animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Contact</h2>
                    <ContactSection />
                </div>
            </Section>
            <footer className="w-full bg-white/80 dark:bg-gray-900/80 border-t border-blue-200 dark:border-blue-700 py-4 flex flex-col md:flex-row items-center justify-between px-6 text-sm text-gray-700 dark:text-gray-300 shadow-inner mt-12">
                <span>© {new Date().getFullYear()} Yash Sachdev. All rights reserved.</span>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="https://www.linkedin.com/in/yash-sachdev-08274a229/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                    <a href="https://github.com/sachdevyash123" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors"><FaGithub /></a>
                </div>
            </footer>
        </>
    );
} 