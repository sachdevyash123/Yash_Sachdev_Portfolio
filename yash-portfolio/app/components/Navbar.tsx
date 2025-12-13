"use client"
import Link from "next/link";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaCode } from "react-icons/fa";

const navLinks = [
    { name: "Home", href: "/home#home" },
    { name: "About", href: "/home#about" },
    { name: "Education", href: "/home#education" },
    { name: "Tech Stack", href: "/home#techstack" },
    { name: "Experience", href: "/home#experience" },
    { name: "Project", href: "/home#project" },
    { name: "Contact", href: "/home#contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 w-full bg-[var(--background)]/80 backdrop-blur border-b border-[var(--border)] shadow-sm">
            <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-0 md:px-4 py-3">
                {/* Logo/Name */}
                <div className="flex items-center gap-2 pl-4 md:pl-0 h-12">
                    <FaCode className="text-cyan-500 w-7 h-7" />
                    <Link href="/home#home" className="text-2xl font-bold text-cyan-500 tracking-tight flex items-center h-12">
                        Yash Sachdev
                    </Link>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 h-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-[var(--foreground)] hover:text-cyan-500 transition-colors flex items-center h-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center h-full">
                        <ThemeSwitcher />
                    </div>
                </div>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    onClick={() => setMobileOpen((o) => !o)}
                    aria-label="Open navigation menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>
            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)] shadow-sm px-4 pb-4">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-[var(--foreground)] hover:text-cyan-500 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ThemeSwitcher />
                    </div>
                </div>
            )}
        </header>
    );
}