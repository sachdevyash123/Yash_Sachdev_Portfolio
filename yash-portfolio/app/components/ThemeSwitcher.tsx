"use client";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Check system preference or previously set theme
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full relative overflow-hidden"
        >
            <span className="block transition-transform duration-500 ease-in-out transform-gpu">
                <Sun
                    className={`w-5 h-5 absolute transition-all duration-500 ${theme === "light" ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0"}`}
                />
                <Moon
                    className={`w-5 h-5 absolute transition-all duration-500 ${theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-45"}`}
                />
            </span>
        </Button>
    );
} 