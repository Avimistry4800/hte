"use client";

import Link from "next/link";
import { Cpu, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "About", href: "/about" },
        { label: "Methodology", href: "/methodology" },
        { label: "Blueprints", href: "/blueprints" },
        { label: "Contact", href: "/contact" },
    ];

    const services = [
        { label: "Growth Systems", href: "/solutions/growth" },
        { label: "Automation", href: "/solutions/automation" },
        { label: "Infrastructure", href: "/solutions/infrastructure" },
        { label: "AI Integration", href: "/solutions/ai" },
    ];

    const legal = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Acceptable Use", href: "/acceptable-use" },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Mail, href: "/contact", label: "Email" },
    ];

    return (
        <footer className="relative bg-void border-t border-white/5 overflow-hidden">
            {/* Gradient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto py-16 md:py-20 relative z-10">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-electric/10 rounded-lg">
                                <Cpu className="w-6 h-6 text-electric" />
                            </div>
                            <span className="font-heading font-bold text-white text-xl tracking-tight">HTE</span>
                        </div>
                        <p className="text-titanium/60 text-sm leading-relaxed max-w-xs">
                            Engineering precision meets business growth. Building scalable systems that drive measurable results.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2.5 bg-white/5 hover:bg-electric/10 border border-white/10 hover:border-electric/30 rounded-lg text-titanium/60 hover:text-electric transition-all group"
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-titanium/60 hover:text-electric text-sm transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-electric transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-titanium/60 hover:text-electric text-sm transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-electric transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {legal.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-titanium/60 hover:text-electric text-sm transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-electric transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-titanium/60 text-sm mb-4">
                            Get insights on systems engineering and growth automation.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-titanium/40 text-sm font-mono">
                        © {currentYear} High-Tech Enterprise. All systems operational.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <span className="text-titanium/40 text-xs font-mono uppercase tracking-wider">
                            System Status: Online
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
