"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { Scale, FileText, AlertTriangle, Shield, Gavel, Mail } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
    const lastUpdated = "January 19, 2026";

    const sections = [
        {
            number: "1",
            icon: FileText,
            title: "Acceptance of Terms",
            content: [
                "By accessing and using the services provided by High-Tech Enterprise ('HTE', 'we', 'us', or 'our'), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
                "These terms apply to all visitors, users, and others who access or use our services, including but not limited to our website, consulting services, software solutions, and automation systems.",
            ]
        },
        {
            number: "2",
            icon: Shield,
            title: "Services Description",
            content: [
                "HTE provides business growth systems, automation solutions, infrastructure development, and AI integration services. Our services include:",
                "• Strategic consulting and business analysis",
                "• Custom software development and automation",
                "• System architecture and infrastructure design",
                "• AI integration and implementation",
                "• Ongoing maintenance and support",
                "The specific scope of services will be defined in individual service agreements or statements of work.",
            ]
        },
        {
            number: "3",
            icon: Scale,
            title: "User Obligations",
            content: [
                "As a user of our services, you agree to:",
                "• Provide accurate and complete information",
                "• Maintain the confidentiality of your account credentials",
                "• Use our services only for lawful purposes",
                "• Not interfere with or disrupt our services",
                "• Comply with all applicable laws and regulations",
                "• Not attempt to gain unauthorized access to our systems",
                "• Respect intellectual property rights",
            ]
        },
        {
            number: "4",
            icon: FileText,
            title: "Intellectual Property",
            content: [
                "All content, code, designs, and materials provided by HTE remain our intellectual property unless otherwise specified in a written agreement.",
                "Custom work created specifically for clients under a service agreement will be governed by the intellectual property terms specified in that agreement.",
                "You may not reproduce, distribute, or create derivative works from our proprietary materials without explicit written permission.",
            ]
        },
        {
            number: "5",
            icon: AlertTriangle,
            title: "Limitation of Liability",
            content: [
                "To the maximum extent permitted by law, HTE shall not be liable for:",
                "• Indirect, incidental, special, or consequential damages",
                "• Loss of profits, revenue, data, or business opportunities",
                "• Damages resulting from unauthorized access or data breaches",
                "• Service interruptions or technical failures",
                "Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim in the 12 months preceding the claim.",
            ]
        },
        {
            number: "6",
            icon: Gavel,
            title: "Dispute Resolution",
            content: [
                "Any disputes arising from these terms or our services shall be resolved as follows:",
                "• Initial attempt at good-faith negotiation",
                "• Mediation by a mutually agreed mediator",
                "• Binding arbitration if mediation fails",
                "• Governing law: [Your Jurisdiction]",
                "Each party shall bear its own costs unless otherwise determined by the arbitrator.",
            ]
        },
        {
            number: "7",
            icon: FileText,
            title: "Termination",
            content: [
                "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for:",
                "• Breach of these Terms of Service",
                "• Violation of applicable laws",
                "• Fraudulent or harmful activity",
                "• Non-payment of fees",
                "Upon termination, your right to use our services will immediately cease. Provisions that should survive termination (including intellectual property, liability limitations, and dispute resolution) will remain in effect.",
            ]
        },
        {
            number: "8",
            icon: Shield,
            title: "Warranties and Disclaimers",
            content: [
                "Our services are provided 'as is' and 'as available' without warranties of any kind, either express or implied.",
                "We do not warrant that:",
                "• Services will be uninterrupted or error-free",
                "• Results will meet your specific requirements",
                "• Defects will be corrected immediately",
                "• Services are free from viruses or harmful components",
                "However, we commit to using industry best practices and reasonable efforts to deliver high-quality services.",
            ]
        },
    ];

    return (
        <main className="bg-void min-h-screen">
            <PageHeader
                tagline="Legal"
                title="Terms of Service"
                subtitle="The terms and conditions governing your use of our services."
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
                            These Terms of Service constitute a legally binding agreement between you and High-Tech Enterprise. Please read these terms carefully before using our services. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                        </p>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                                            <span className="text-electric font-heading font-bold">
                                                {section.number}
                                            </span>
                                        </div>
                                        <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                                            <section.icon className="w-5 h-5 text-titanium/60" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-heading font-bold text-white mb-4">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-3">
                                            {section.content.map((paragraph, j) => (
                                                <p key={j} className="text-titanium/70 leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Terms */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl"
                    >
                        <h3 className="text-xl font-heading font-bold text-white mb-4">
                            Changes to Terms
                        </h3>
                        <p className="text-titanium/70 mb-4">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                        </p>
                        <p className="text-titanium/70">
                            For significant changes, we will provide notice via email or prominent notice on our website at least 30 days before the changes take effect.
                        </p>
                    </motion.div>

                    {/* Related Policies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 bg-electric/5 border border-electric/20 rounded-xl"
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
                                href="/cookie-policy"
                                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                            >
                                <p className="text-electric group-hover:underline font-medium">Cookie Policy</p>
                            </Link>
                            <Link
                                href="/acceptable-use"
                                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
                            >
                                <p className="text-electric group-hover:underline font-medium">Acceptable Use</p>
                            </Link>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-titanium/60 mb-6">
                            Questions about these terms?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric/90 text-white font-heading font-bold rounded-lg transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Legal Team
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
