import { Button } from "@/app/components/ui/button";

export default function ActionButtons() {
    return (
        <div className="flex gap-4 justify-center md:justify-start">
            <a
                href="/assets/Yash Sachdev_Resume(1).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="default" className="bg-[var(--primary)] text-[var(--primary-foreground)]">
                    Download Resume
                </Button>
            </a>
            <a href="#contact">
                <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]">
                    Contact Me
                </Button>
            </a>
        </div>
    );
} 