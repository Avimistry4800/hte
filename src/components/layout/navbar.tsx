"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const solutionsDropdown = [
    { label: "Autonomous Workflows", href: "/solutions/automation", description: "CRM sync, lead qualification, fulfillment logic" },
    { label: "High-Performance Web", href: "/solutions/web-development", description: "Next.js platforms optimized for conversion" },
    { label: "Conversion Infrastructure", href: "/solutions/growth", description: "Precision targeting & scientific CRO" },
];

const navLinks = [
    { label: "Methodology", href: "/methodology" },
    { label: "Company", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();

    // Transparent at top, blurred/darkened on scroll
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(10, 11, 12, 0)", "rgba(10, 11, 12, 0.8)"]
    );
    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );
    const borderOpacity = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
    );

    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    return (
        <motion.nav
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                borderBottomColor: borderOpacity
            }}
            className="fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="relative group">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-bold font-heading tracking-tighter text-white"
                    >
                        HTE
                    </motion.span>

                    {/* One-time Glow Sweep */}
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "200%" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-electric/30 to-transparent skew-x-12 pointer-events-none"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    {/* Solutions Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                    >
                        <Link
                            href="/solutions"
                            className="relative px-4 py-2 text-sm font-medium text-titanium hover:text-white transition-colors flex items-center gap-1"
                        >
                            <span className="relative z-10">Solutions</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />

                            {/* Active Indicator */}
                            {pathname.startsWith('/solutions') && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute bottom-0 left-4 right-4 h-px bg-electric shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {solutionsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-80 bg-void/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                >
                                    <div className="p-2">
                                        {solutionsDropdown.map((item, i) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 group-hover:shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-shadow" />
                                                    <div className="flex-1">
                                                        <div className="text-sm font-medium text-white mb-0.5 group-hover:text-electric transition-colors">
                                                            {item.label}
                                                        </div>
                                                        <div className="text-xs text-titanium/60 leading-relaxed">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* View All Solutions */}
                                    <div className="border-t border-white/5 p-2">
                                        <Link
                                            href="/solutions"
                                            className="block p-3 text-center text-xs font-medium text-electric hover:bg-electric/5 rounded-lg transition-colors"
                                        >
                                            View All Solutions →
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Other Nav Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoveredPath(link.href)}
                            onMouseLeave={() => setHoveredPath(null)}
                            className="relative px-4 py-2 text-sm font-medium text-titanium hover:text-white transition-colors"
                        >
                            <span className="relative z-10">{link.label}</span>

                            {/* Liquid Slide Underline (Hover) */}
                            {hoveredPath === link.href && (
                                <motion.div
                                    layoutId="nav-hover"
                                    className="absolute inset-0 bg-white/5 rounded-full -z-0"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}

                            {/* Active Indicator */}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute bottom-0 left-4 right-4 h-px bg-electric shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div>
                    <Magnetic>
                        <Link href="/contact" className="relative group">
                            <Button variant="primary" size="sm" className="relative overflow-hidden group">
                                <span className="relative z-10">Initiate Protocol</span>
                                {/* Subtle Glow Edge */}
                                <div className="absolute inset-0 border border-electric/30 rounded-md group-hover:border-electric transition-colors" />
                            </Button>
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </motion.nav>
    );
}
