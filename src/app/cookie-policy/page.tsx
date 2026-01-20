"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart, Target, Shield, Mail } from "lucide-react";
import Link from "next/link";

export default function CookiePolicyPage() {
    const lastUpdated = "January 19, 2026";

    const cookieTypes = [
        {
            icon: Shield,
            name: "Essential Cookies",
            purpose: "Required for basic website functionality",
            examples: "Session management, security, load balancing",
            duration: "Session or up to 1 year",
            canDisable: false,
        },
        {
            icon: BarChart,
            name: "Analytics Cookies",
            purpose: "Help us understand how visitors use our website",
            examples: "Google Analytics, Vercel Analytics",
            duration: "Up to 2 years",
            canDisable: true,
        },
        {
            icon: Target,
            name: "Marketing Cookies",
            purpose: "Track visitors across websites to display relevant ads",
            examples: "LinkedIn Insight Tag, Google Ads",
            duration: "Up to 1 year",
            canDisable: true,
        },
        {
            icon: Settings,
            name: "Preference Cookies",
            purpose: "Remember your settings and preferences",
            examples: "Language preference, theme selection",
            duration: "Up to 1 year",
            canDisable: true,
        },
    ];

    const specificCookies = [
        { name: "_ga", provider: "Google Analytics", purpose: "Distinguish users", duration: "2 years", type: "Analytics" },
        { name: "_gid", provider: "Google Analytics", purpose: "Distinguish users", duration: "24 hours", type: "Analytics" },
        { name: "session_id", provider: "HTE", purpose: "Session management", duration: "Session", type: "Essential" },
        { name: "consent", provider: "HTE", purpose: "Cookie consent status", duration: "1 year", type: "Essential" },
    ];

    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Legal"
                title="Cookie Policy"
                subtitle="Understanding how we use cookies and similar technologies."
            />

            <section className="container mx-auto px-4 md:px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Last Updated */}
                    <div className="mb-12 p-4 bg-white/5 border border-white/10 rounded-lg">
                        <p className="text-titanium/60 text-sm">
                            <strong className="text-white">Last Updated:</strong> {lastUpdated}
                        </p>
                    </div>

                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 prose prose-invert prose-lg max-w-none"
                    >
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">
                            What Are Cookies?
                        </h2>
                        <p className="text-titanium/70 leading-relaxed mb-4">
                            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services.
                        </p>
                        <p className="text-titanium/70 leading-relaxed">
                            This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
                        </p>
                    </motion.div>

                    {/* Cookie Types */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-heading font-bold text-white mb-8">
                            Types of Cookies We Use
                        </h2>
                        <div className="grid gap-6">
                            {cookieTypes.map((cookie, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-electric/10 border border-electric/20 rounded-lg">
                                            <cookie.icon className="w-6 h-6 text-electric" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-heading font-bold text-white">
                                                    {cookie.name}
                                                </h3>
                                                {cookie.canDisable ? (
                                                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                                                        Optional
                                                    </span>
                                                ) : (
                                                    <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-mono rounded-full border border-red-500/20">
                                                        Required
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-titanium/70 mb-3">{cookie.purpose}</p>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="text-titanium/50">Examples:</span>
                                                    <p className="text-titanium/70">{cookie.examples}</p>
                                                </div>
                                                <div>
                                                    <span className="text-titanium/50">Duration:</span>
                                                    <p className="text-titanium/70">{cookie.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Specific Cookies Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-heading font-bold text-white mb-8">
                            Specific Cookies We Use
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white">Cookie Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white">Provider</th>
                                        <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white">Purpose</th>
                                        <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white">Duration</th>
                                        <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specificCookies.map((cookie, i) => (
                                        <tr key={i} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm font-mono text-electric">{cookie.name}</td>
                                            <td className="px-6 py-4 text-sm text-titanium/70">{cookie.provider}</td>
                                            <td className="px-6 py-4 text-sm text-titanium/70">{cookie.purpose}</td>
                                            <td className="px-6 py-4 text-sm text-titanium/70">{cookie.duration}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`px-2 py-1 rounded text-xs font-mono ${cookie.type === "Essential"
                                                        ? "bg-red-500/10 text-red-400"
                                                        : "bg-emerald-500/10 text-emerald-400"
                                                    }`}>
                                                    {cookie.type}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Managing Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 p-8 bg-white/5 border border-white/10 rounded-2xl"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-electric/10 border border-electric/20 rounded-lg">
                                <Settings className="w-6 h-6 text-electric" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                                    Managing Your Cookie Preferences
                                </h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-titanium/70">
                            <p>You can control and manage cookies in several ways:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Use our cookie consent banner when you first visit our site</li>
                                <li>Adjust your browser settings to block or delete cookies</li>
                                <li>Use browser extensions that manage cookie preferences</li>
                                <li>Opt out of third-party analytics cookies through provider settings</li>
                            </ul>
                            <p className="text-sm text-titanium/50 mt-6">
                                Note: Blocking essential cookies may prevent certain features of our website from functioning properly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Third-Party Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 p-6 bg-electric/5 border border-electric/20 rounded-xl"
                    >
                        <h3 className="text-lg font-heading font-bold text-white mb-4">
                            Third-Party Cookies
                        </h3>
                        <p className="text-titanium/70 mb-4">
                            Some cookies on our site are set by third-party services. These include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-titanium/70 ml-4">
                            <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                            <li><strong>Vercel Analytics:</strong> For real-time performance monitoring</li>
                            <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                        </ul>
                        <p className="text-titanium/70 mt-4 text-sm">
                            These third parties have their own privacy policies. We recommend reviewing them to understand how they use cookies.
                        </p>
                    </motion.div>

                    {/* Updates */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 p-6 bg-white/5 border border-white/10 rounded-xl"
                    >
                        <h3 className="text-lg font-heading font-bold text-white mb-3">
                            Updates to This Policy
                        </h3>
                        <p className="text-titanium/70 text-sm">
                            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. Please check this page periodically for updates.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-titanium/60 mb-6">
                            Questions about our cookie practices?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric/90 text-white font-heading font-bold rounded-lg transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
