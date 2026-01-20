"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { ShieldAlert, Ban, AlertTriangle, CheckCircle, Flag, Mail } from "lucide-react";
import Link from "next/link";

export default function AcceptableUsePage() {
    const lastUpdated = "January 19, 2026";

    const prohibitedActivities = [
        {
            icon: Ban,
            title: "Illegal Activities",
            description: "Using our services for any illegal purpose or in violation of any laws",
            examples: [
                "Fraud, money laundering, or financial crimes",
                "Harassment, stalking, or threats",
                "Distribution of illegal content",
                "Violation of intellectual property rights",
            ]
        },
        {
            icon: ShieldAlert,
            title: "Security Violations",
            description: "Attempting to compromise the security or integrity of our systems",
            examples: [
                "Unauthorized access to systems or data",
                "Distributing malware, viruses, or harmful code",
                "Denial of service attacks or network flooding",
                "Probing, scanning, or testing system vulnerabilities",
            ]
        },
        {
            icon: AlertTriangle,
            title: "Abusive Behavior",
            description: "Engaging in behavior that harms others or disrupts services",
            examples: [
                "Spamming or unsolicited communications",
                "Impersonation or misrepresentation",
                "Harassment or discriminatory behavior",
                "Excessive resource consumption",
            ]
        },
        {
            icon: Ban,
            title: "Content Violations",
            description: "Creating, uploading, or sharing inappropriate content",
            examples: [
                "Hate speech or discriminatory content",
                "Violent or graphic content",
                "Adult or sexually explicit material",
                "Misinformation or deceptive content",
            ]
        },
    ];

    const permittedUses = [
        {
            icon: CheckCircle,
            title: "Legitimate Business Use",
            description: "Using our services for lawful business purposes and professional development"
        },
        {
            icon: CheckCircle,
            title: "Respectful Communication",
            description: "Engaging with our team and other users in a professional and respectful manner"
        },
        {
            icon: CheckCircle,
            title: "Authorized Access",
            description: "Accessing only the services and data you are authorized to use"
        },
        {
            icon: CheckCircle,
            title: "Compliance",
            description: "Following all applicable laws, regulations, and our terms of service"
        },
    ];

    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Legal"
                title="Acceptable Use Policy"
                subtitle="Guidelines for appropriate use of our services and platform."
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
                        <p className="text-titanium/70 leading-relaxed">
                            This Acceptable Use Policy outlines the permitted and prohibited uses of High-Tech Enterprise's services. By using our services, you agree to comply with this policy. Violations may result in suspension or termination of your access to our services.
                        </p>
                    </motion.div>

                    {/* Permitted Uses */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-heading font-bold text-white mb-8">
                            Permitted Uses
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {permittedUses.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg">
                                            <item.icon className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-heading font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-titanium/70 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Prohibited Activities */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-heading font-bold text-white mb-8">
                            Prohibited Activities
                        </h2>
                        <div className="space-y-8">
                            {prohibitedActivities.map((activity, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                            <activity.icon className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                                                {activity.title}
                                            </h3>
                                            <p className="text-titanium/70 mb-4">
                                                {activity.description}
                                            </p>
                                            <div className="space-y-2">
                                                <p className="text-sm text-titanium/50 font-medium">Examples include:</p>
                                                <ul className="space-y-1.5">
                                                    {activity.examples.map((example, j) => (
                                                        <li key={j} className="flex items-start gap-2 text-sm text-titanium/70">
                                                            <span className="text-red-400 mt-1">•</span>
                                                            {example}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Enforcement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 p-8 bg-white/5 border border-white/10 rounded-2xl"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-electric/10 border border-electric/20 rounded-lg">
                                <ShieldAlert className="w-6 h-6 text-electric" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                                    Enforcement and Violations
                                </h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-titanium/70">
                            <p>
                                We reserve the right to investigate suspected violations of this Acceptable Use Policy. If we determine that a violation has occurred, we may take the following actions:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Issue a warning to the user</li>
                                <li>Temporarily suspend access to services</li>
                                <li>Permanently terminate the user's account</li>
                                <li>Remove or disable access to violating content</li>
                                <li>Report illegal activities to law enforcement</li>
                                <li>Pursue legal action for damages</li>
                            </ul>
                            <p className="text-sm text-titanium/50 mt-6">
                                The specific action taken will depend on the severity and frequency of the violation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Reporting Violations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 p-6 bg-electric/5 border border-electric/20 rounded-xl"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-electric/10 rounded-lg">
                                <Flag className="w-5 h-5 text-electric" />
                            </div>
                            <div>
                                <h3 className="text-lg font-heading font-bold text-white mb-2">
                                    Reporting Violations
                                </h3>
                                <p className="text-titanium/70 mb-4">
                                    If you become aware of any violation of this Acceptable Use Policy, please report it to us immediately:
                                </p>
                                <ul className="space-y-2 text-titanium/70 text-sm">
                                    <li>• Email: abuse@high-tech-enterprise.com</li>
                                    <li>• Include detailed information about the violation</li>
                                    <li>• Provide any relevant evidence (screenshots, URLs, etc.)</li>
                                    <li>• We will investigate all reports promptly and confidentially</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Modifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 p-6 bg-white/5 border border-white/10 rounded-xl"
                    >
                        <h3 className="text-lg font-heading font-bold text-white mb-3">
                            Policy Modifications
                        </h3>
                        <p className="text-titanium/70 text-sm">
                            We may modify this Acceptable Use Policy at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified policy.
                        </p>
                    </motion.div>

                    {/* Related Policies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-lg font-heading font-bold text-white mb-4">
                            Related Policies
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/privacy-policy"
                                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                            >
                                <p className="text-electric group-hover:underline font-medium">Privacy Policy</p>
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                            >
                                <p className="text-electric group-hover:underline font-medium">Terms of Service</p>
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                            >
                                <p className="text-electric group-hover:underline font-medium">Cookie Policy</p>
                            </Link>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-titanium/60 mb-6">
                            Questions about acceptable use?
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
